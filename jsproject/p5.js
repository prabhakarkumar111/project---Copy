// let  randomNumber = parseInt(Math.floor(Math.random()*100+1));
// const submit = document.querySelector("#subt");
// const userInput = document.querySelector("#guessField")
// const guessSlot = document.querySelector(".guesses")
// const remaining = document.querySelector(".LastResult")
// const lowOrHi = document.querySelector(".lowOrHi")
// const startOver = document.querySelector(".resultParse")

// const p = document.createElement("p")
// let prevGuess = []
// let numGuess = 1
// let playGame = true


// if(playGame){
//     submit.addEventListener("click", (e)=>{
//         e.preventDefault()
//         const guess = Number(userInput.value);
//         validateGuess(guess)
//     })
// }
// function validateGuess(guess){
//     if(isNaN(guess)){
//         alert('please enter a valid number')
//     }
//     else if(guess < 1){
//         alert('please enter a number more then 1')
//     }
//     else if(guess > 100){
//         alert('please enter a number less then 100')
//     }
//     else{
//         prevGuess.push(guess)
//         if(numGuess === 11){
//             displayGuess(guess)
//             displayMessage(`game over: random number was ${randomNumber}`)
//             endGame()
//         }
//         else{
//             displayGuess(guess)
//             checkGuess(guess)
//         }
//     }
// }

// function checkGuess(guess){
//     if(guess === randomNumber){
//         displayMessage('your guess right')
//     }
//     else if(guess < randomNumber){
//         displayMessage('your guess is too low')
//     }
//     else if(guess > randomNumber){
//         displayMessage('your guess is too high')
//     }

// }
// function displayGuess(guess){
//     userInput.value = ''
//     guessSlot.innerHTML += `${guess} `
//     numGuess++;
//     remaining.innerHTML = `${11 - numGuess}`
// }

// function displayMessage(message){
//     lowOrHi.innerHTML = `<h2>${message}</h2>`
// }


// function endGame(){
//     userInput.value = ''
//     userInput.setAttribute('disabled', '')
//     p.classList.add('button')
//     p.innerHTML = `<h2 id="newGame">start new game</h2>`
//     startOver.append(p)
//     playGame = false;
//     newGame();
// }

// function newGame(){
//     const newGameButton = document.querySelector('#newGame')
//     console.log(newGameButton);
//     newGameButton.addEventListener("click", (e)=>{
//         randomNumber = parseInt(Math.floor(Math.random()*100+1))
//         prevGuess = []
//         numGuess = 1
//         guessSlot.innerHTML = ''
//         remaining.innerHTML = `${11 - numGuess}`
//         userInput.removeAttribute('disabled')
//         startOver.removeChild(p)
//         playGame = true
//     })
// }







// const randomNumber = Math.floor(Math.random() * 10 + 1)
// const resultParse = document.querySelector(".resultParse")
// const userInput = document.querySelector(".guessField")
// const guessSlot = document.querySelector(".guesses")
// const remaining = document.querySelector(".LastResult")
// let lowOrHi = document.querySelector(".lowOrHi")
// const submit = document.querySelector("#subt")
// const p = document.createElement("p")
// let prevGuess = []
// let numGuess = 1
// let playGame = true



// if(playGame){
//     submit.addEventListener("click", (e)=>{
//         e.preventDefault()
//         const guess = +(userInput.value)
//         validateGuess(guess)
//     })
// }
// function validateGuess(guess){
//     if(isNaN(guess)){
//         alert('please enter a valid number')
//     }else if(guess < 1){
//         alert('please enter a valid number')
//     }else if(guess > 100){
//         alert('please enter a valid number')
//     }else{
//         prevGuess.push(guess)
//         if(numGuess === 11){
//             displayGuess(guess)
//             displayMessage(`GAME OVER, random number was ${randomNumber}`)
//             endGame()
//         }else{
//             displayGuess(guess)
//             checkGuess(guess)
//         }
//     }
// }

// function checkGuess(guess){
//     if(guess === randomNumber){
//         displayMessage('You guesses is right')
//         endGame()
//     }else if(guess <randomNumber){
//         displayMessage('your guess is too low')
//     }else if(guess > randomNumber){
//         displayGuess('your guess is too low')
//     }

// }

// function displayGuess(guess){
//     userInput.value = ''
//     guessSlot.innerHTML += `${guess} `
//     numGuess++;
//     remaining.innerHTML = `${11 - numGuess}`
// }

// function displayMessage(message){
//     lowOrHi.innerHTML = `<h2>${message}</h2>`
// }

// function endGame(){
//     userInput.value = ""
//     userInput.setAttribute("disabled", '')
//     p.classList.add("button")
//     p.innerHTML = `<h2 id="newGame">Start new game</h2>`
//     resultParse.append(p)
//     playGame = false
//     newGame()
// }

// function newGame(){}



// Retry Method

// let guessField = document.querySelector("#guessField")
// let guessSubmit = document.querySelector(".guessSubmit")
// let guesses = document.querySelector(".guesses")
// let LastResult = document.querySelector(".LastResult")
// let lowOrHi = document.querySelector("lowOrHi")
// let ooo = document.querySelector(".ooo")

// let numGuess = 0;
// let game = true;
// let arr = []
// let randomNumber = Math.floor(Math.random()*100)
// console.log(randomNumber);


// if(game){
//     guessSubmit.addEventListener("click", (e)=>{
//         e.preventDefault()
//         let num = parseInt(guessField.value)
//         check(num)
//     })
// }

// function check(guess){
//     if(guess < 0){
//         alert("please give a number more then one")
//     }else if(isNaN(guess)){
//         alert("Please give a number")
//     }else if(guess > 100){
//         alert("Please give a number less then 100")
//     }else{
//         arr.push(guess)

//         if(numGuess === 11){
//             endGame()
//             alert(`GAME OVER, Your random number was ${guess}`)
//         }else{
//             displayGuess(guess)
//             last(guess)
//         }
//     }
// }

// function displayGuess(guess){
//     if(randomNumber === guess){
//         ooo.textContent = ` COUNGRALATION Your guess is right`
//     }else{
//         if(guess > randomNumber ){
//             ooo.textContent = `Your guess is too high`
//         }else{
//             ooo.textContent = `Your guess is too low`
//         }
//     }

// }

// function last(guess){
//     guessField.value = ""
//     guesses.innerHTML += `${guess}`
//     numGuess++
//     LastResult.innerHTML = `${11 - numGuess}`
// }


// let random = Math.floor(Math.random() * 10);
// console.log(random);
// let guessField = document.querySelector("#guessField");
// let guessSubmit = document.querySelector(".guessSubmit");
// let guesses = document.querySelector(".guesses");
// let LastResult = document.querySelector(".LastResult");
// let lowOrHi = document.querySelector(".lowOrHi");
// let ooo = document.querySelector(".ooo");
// let resultParse = document.querySelector(".resultParse")
// let p = document.createElement("p")
// let arr = [];
// let guessNumber = 0
// let game = true;

// if(game){
//     guessSubmit.addEventListener("click", (e) => {
//         e.preventDefault()
//         values = +(guessField.value)
//         two(values)
//     })
// }


// function two(guess) {
//     if (guess < 0) {
//         alert("Please give a number more then 0")
//     }
//     else if (guess > 100) {
//         alert("Please give a number less then 100")
//     }
//     else if (isNaN(guess)) {
//         alert("Please give a number")
//     } else {
//         arr.push(guess)
//         if (guessNumber === 11) {
//             end()
//         }
//         else {
//             three(guess)
//             four(guess)
//         }
//     }
// }

// function three(guess) {
//     if (guess === random) {
//         lowOrHi.innerHTML = "Congratulation Your guess Was right"
//         end()
//     }
//     else if (random > guess) {
//         lowOrHi.innerHTML = "Your guess is too low"
//     }
//     else if (random < guess) {
//         lowOrHi.innerHTML = "Your guess is too high"
//     }
// }

// function four() {
//     guessField.value = ""
//     guesses.innerHTML = `${arr}`
//     guessNumber++
//     LastResult.innerHTML = `${11 - guessNumber}`
// }

// function end(){
//     guessField.value = ""
//     guessField.setAttribute("disabled", "")
//     p.innerHTML = `<h1 class="ans">Start new game</h1>`
//     resultParse.append(p)
//     game = false
//     start()
// }

// function start(){
//     document.querySelector(".ans").addEventListener("click", ()=>{
//         game = true
//         guessField.removeAttribute("disabled")
//         arr = []
//         guesses.innerHTML = ""
//         guessNumber = 0
//         guessNumber++
//         LastResult.innerHTML = `${11 - guessNumber}`

//     })
// }




// let randomNumber = +(Math.floor(Math.random()*100+1))
// let random = Math.floor(Math.random() * 100);
// let guessField = document.querySelector("#guessField");
// let guessSubmit = document.querySelector(".guessSubmit");
// let guesses = document.querySelector(".guesses");
// let LastResult = document.querySelector(".LastResult");
// let lowOrHi = document.querySelector(".lowOrHi");
// let ooo = document.querySelector(".ooo");
// let resultParse = document.querySelector(".resultParse")
// let apple = document.createElement("p")
// let arr = []
// let guessRemaining = 1
// let playGame = true


// if(playGame){
//     guessSubmit.addEventListener("click", (e)=>{
//         e.preventDefault()
//         let value = +(guessField.value)
//         guessField.value = ""
//         check(value)
//     })
// }

// let check = (guess)=>{
//     if(isNaN(guess)){
//         alert("please enter a valid number")
//     }else if(guess > 100){
//         alert("please enter a number less then 100")
//     }else if(guess < 1){
//         alert("please enter a number more then 1")
//     }
//     else{
//         arr.push(guess)
//         if(guessRemaining === 11){
//             end()
//         }else{
//             one(guess)
//         }
//     }
// }

// let one = (guess)=>{
//     if(guess === randomNumber){
//         lowOrHi.innerHTML = `congrutulation your guess is right`
//         end()
//     }else if(guess > randomNumber){
//         lowOrHi.innerHTML = ` your guess is too high`
//     }else if(  guess < randomNumber){
//         lowOrHi.innerHTML = ` your guess is too low`
//     }
//     two(guess)
// }

// let two = (guess)=>{
//     guesses.innerHTML += `${guess}  `
//     guessRemaining++;
//     LastResult.innerHTML = `${11 - guessRemaining}`
// }
// let end = ()=>{
//     apple.classList.add("apend")
//     guessField.setAttribute("disabled", "")
//     apple.innerHTML = `<h1 class="noo">start new game</h1>`
//     resultParse.append(apple)
//     playGame = false
//     start()
// }


// let start = ()=>{
//     let ans = document.querySelector(".noo")
//     ans.addEventListener("click", ()=>{
//         randomNumber = +(Math.floor(Math.random()*100+1))
//         console.log(randomNumber);
//         playGame = true
//         guessField.removeAttribute("disabled")
//         guessRemaining = 1
//         guesses.innerHTML = ""
//         LastResult.innerHTML = `${11 - guessRemaining}`
//         resultParse.removeChild(apple)

//     })

// }


let randomNumber = Math.floor(Math.random() * 100 + 1)
console.log(randomNumber);
let guessField = document.querySelector(".guessField")
let guessSubmit = document.querySelector(".guessSubmit")
let resultParse = document.querySelector(".resultParse")
let guesses = document.querySelector(".guesses")
let LastResult = document.querySelector(".LastResult")
let lowOrHi = document.querySelector(".lowOrHi")
let arr = []
let game = true
let userGuess = 1




guessSubmit.addEventListener("click", (e) => {
    e.preventDefault()
    let value = Number(guessField.value)
    guessField.value = " "
    checkValue(value)
})

let checkValue = (arg) => {
    if (isNaN(arg)) {
        alert("Please Enter A Number")
    } else if (arg > 100) {
        alert("Please Enter Less Then 100")
    } else if (arg < 0) {
        alert("Please Enter More Then 0")
    } else {
        func(arg)
        arr.push(arg)
        guesses.textContent += `${arg} `
        if (userGuess === 11) {
            lowOrHi.textContent = `RandomNumber Was ${randomNumber}`
            endGame()
        } else {
            Over()
        }
    }
}

let func = (arg) => {
    if (randomNumber === arg) {
        lowOrHi.textContent = `Conguratulation Your Guess Is Right`
        endGame()
    } else if (arg > randomNumber) {
        lowOrHi.textContent = `Your Guess Is Too High`
    } else if (arg < randomNumber) {
        lowOrHi.textContent = `Your Guess Is Too Low`
    }
}
let Over = () => {
    userGuess++
    LastResult.textContent = `${11 - userGuess}`
}

let endGame = () => {
    guessField.setAttribute("disabled", "")
    guessSubmit.setAttribute("disabled", "")
    let p = document.createElement("p")
    p.setAttribute("class", "btn")
    p.textContent = "Click To Play Again"
    resultParse.append(p)
    startGame()
    game = false
}

let startGame = () => {
    let btn = document.querySelector(".btn")
    btn.addEventListener("click", () => {
        randomNumber = Math.floor(Math.random() * 100 + 1)
        userGuess = 1
        LastResult.textContent = `${11 - userGuess}`
        arr = []
        guesses.textContent = ""
        lowOrHi.textContent = ""
        guessField.removeAttribute("disabled", "")
        guessSubmit.removeAttribute("disabled", "")
        resultParse.removeChild(btn)
        game = true
    })
}




