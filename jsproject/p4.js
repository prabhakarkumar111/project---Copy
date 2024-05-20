// let timer = 60
// let score = 0
// let gen = 0



// function increaseScore() {
//      score += 10
//      document.querySelector(".score").textContent = score
// }

// function getNewHit() {
//      gen = Math.floor(Math.random() * 10)
//      document.querySelector(".ooo").textContent = gen
// }

// function makeBubble() {
//      let counter = ""
//      for (let i = 1; i<= 110; i++) {
//           const a = Math.floor(Math.random() * 10)
//           counter += ` <div class="ans">${a}</div>`
//      }
//      const ans = document.querySelector(".circle")
//      ans.innerHTML = counter
// }

// function runTimer() {
//      const intervalTimer = setInterval(() => {
//           if (timer > 0) {
//                timer--;
//                document.querySelector(".two").textContent = timer
//           }
//           else {
//                clearInterval(intervalTimer)
//                document.querySelector(".circle").innerHTML = `<h1>GAME OVER</h1>`
//           }
//      }, 1000)
// }

// document.querySelector(".inner").addEventListener("click", (e) => {
//      const randomNumber = Number(e.target.textContent)
//      if (randomNumber === gen) {
//           increaseScore()
//           makeBubble()
//           getNewHit()
//           runTimer()

//      }
// })

// makeBubble()
// runTimer()
// getNewHit()


// let clutter = ""
// for(i = 0; i<=120; i++){
//      let rn = Math.floor(Math.random()*10)
//      clutter += `<div class="ans">${rn}</div>`
// }
// document.querySelector(".circle").innerHTML = clutter


// let ooo = document.querySelector(".ooo")
// let inner = document.querySelector(".inner")
// let time = 60
// let score = 0
// let ans = document.querySelector(".score")
// const circle = document.querySelector(".circle")

// let hitRn;

// function makeBubble() {
//      let clutter = ""
//      for (let i = 0; i <= 120; i++) {
//           let rn = Math.floor(Math.random() * 10)
//           clutter += `<div class="ans">${rn}</div>`
//      }
//      circle.innerHTML = clutter
// }

// function runTimer(){
//      const id = setInterval(()=>{
//           if(time > 0){
//                time--;
//                document.querySelector(".two").textContent = time
//           }
//           else{
//                clearInterval(id)
//                // circle.innerHTML = ""
//                circle.innerHTML = `<h1>GAME OVER</h1>`

//           }
//      },1000)
// }

// function getNewHit(){
//      hitRn = Math.floor(Math.random() * 10)
//      ooo.textContent = hitRn

// }

// function increaseScore(){
//      score += 10
//      ans.textContent = score
// }

// circle.addEventListener("click", (e)=>{
//      if(+(e.target.textContent) === +(hitRn)){
//           increaseScore();
//           getNewHit();
//           makeBubble();
//      }
// })

// makeBubble()
// runTimer()
// getNewHit()








// let score = 0
// let value = 60
// const inner = document.querySelector(".inner")
// const time = document.querySelector(".two")
// let ooo = document.querySelector(".ooo")
// let circle =  document.querySelector(".circle")
// let val = document.querySelector(".score")
// let random = 0
// function makeBubble() {
//      let clutter = ''
//      for (i = 0; i <= 120; i++) {
//           let rn = +(Math.floor(Math.random() * 10))
//           clutter += `<div class="ans">${rn}</div>`
//      }
//     circle.innerHTML = clutter
// }

// function timer(){
//      let id = setInterval(()=>{
//           if(value > 0){
//                value--
//                time.textContent = value
//           }else{
//                clearInterval(id)
//                circle.innerHTML = "" + `<h1>GAME OVER</h1>`
//           }

//      },1000)
// }

// function hit(){
//      random = +(Math.floor(Math.random() * 10))
//      ooo.textContent = random
// }

// function ans(){
//      score += 10
//      val.textContent = score
// }

// inner.addEventListener("click", (e)=>{
//      console.log(random);
//     if(e.target.textContent === random){
//      ans()
//      hit()
//      makeBubble()
//     }
// })

// timer()
// makeBubble()
// hit()


let ans = 0
let time = 60
let randomNumber = Math.floor(Math.random() * 10)
let circle = document.querySelector(".circle")
let ooo = document.querySelector(".ooo")
let two = document.querySelector(".two")
let noo = document.querySelector(".score")
let create = document.createElement("h1")

let makeBubble = () => {
     let clutter = ""
     for (let i = 0; i <= 124; i++) {
          let random = Math.floor(Math.random() * 10)
          clutter += ` <div class="ans">${random}</div>`
     }
     circle.innerHTML = clutter
}

let hit = () => {
      randomNumber = Math.floor(Math.random() * 10)
     ooo.textContent = randomNumber
}


let timer = () => {
     let id = setInterval(() => {
          if (time > 0) {
               time--;
               two.textContent = time
          } else {
               clearInterval(id)
               circle.innerHTML = ""
               create.innerHTML = `<button id="btn">START NEW  GAME</button>`
               circle.append(create)
              newGame()
          }
     }, 1000)
}
let score = () => {
     ans += 10
     noo.textContent = ans
}

let newGame = ()=>{
     document.querySelector("#btn").addEventListener("click", () =>{
          circle.removeChild(create)
          hit()
          makeBubble()
          time = 60
          timer()
          noo.textContent = 0
          ans = 0
     })

}

circle.addEventListener("click", (e) => {
     if (+(e.target.textContent) === randomNumber) {
          score()
          hit()
          makeBubble()
     }
})

makeBubble()
hit()
timer()







