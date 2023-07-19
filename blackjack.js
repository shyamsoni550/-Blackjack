//game 
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let player={
     name:"shyam",
     chips:145,
     sayhello:function(){
          console.log("goodmorning") 
     }
}
let messageEl = document.getElementById("message")
// let sumEl = document.getElementById("sum")
let sumEl = document.querySelector("#sum ")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
player.sayhello()
function getRandomcard() {
     let randomNumber = Math.floor(Math.random() * 13) + 1
     if (randomNumber > 10) {
          return 10
     }
     else if (randomNumber === 1) {
          return 13
     }
     else {
          return randomNumber
     }
}
function startGame() {
     isalive = true
     let firstcard = getRandomcard()
     let secondcard = getRandomcard()
     cards = [firstcard, secondcard]
     sum = firstcard + secondcard
     rendergame()
}
function rendergame() {
     cardEl.textContent = "cards: "
     for (let i = 0; i < cards.length; i += 1) {
          cardEl.textContent += cards[i] + " "
     }
     sumEl.textContent = "Sum: " + sum
     if (sum <= 20) {
          message = "Do you want to draw a new card? 🙂"
     } else if (sum === 21) {
          message = "Wohoo! You've got Blackjack! 🥳"
          hasBlackJack = true
     } else {
          message = "You're out of the game! 😭"
          isAlive = false
     }
     messageEl.textContent = message
}

function newcard() {
     if (isAlive === false||   hasBlackJack === true) {
          let card = getRandomcard()
          sum += card
          cards.push(card)
          console.log(card)
          rendergame()
     }
}


