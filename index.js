let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")

let player = {
  name: "Aiden",
  chips: 145
}

playerEl.textContent = player.name + ": " + "$" + player.chips

function getRandomCard() {
  let randomNumb = Math.floor(Math.random() * 13) 
  if (randomNumb > 10) {
      return 10
  } else if (randomNumb === 1){
      return 11
  } else {
    return randomNumb
  }
}

function startGame() {
  isAlive = true
  let firstNumb = getRandomCard()
  let secondNumb = getRandomCard()
  cards = [firstNumb, secondNumb]
  sum = firstNumb + secondNumb
  renderGame()
}

function renderGame() {
  if (sum <= 20) {
      message = "Draw another card...?"
  } else if (sum === 21) {
      message = "Black Jack!!! You Win!!!"
      hasBlackjack = true
  } else {
      message = "You're out of the game!!!"
      isAlive = false
  } 
  messageEl.textContent = message

  cardsEl.textContent = "Cards: "
    ///Card's for loop 
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ", " 
}
  sumEl.textContent = "Total: " + " " + sum

}


function newCard() {
  if (isAlive === true && hasBlackjack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  }
}


