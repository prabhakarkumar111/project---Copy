// let Days = document.querySelector(".days")
// let Hour = document.querySelector(".hours")
// let Minute = document.querySelector(".minute")
// let Second = document.querySelector(".second")


// const { log } = require("async")




// const second = 1000
// const minute = 60 * second
// const hour = 60 * minute
// const day = 24 * hour


// const timerFunction = () => {
//     setInterval(() => {
//         const timer = new Date("11/05/2023").getTime();
//         let today = new Date().getTime()

//         let difference = (timer - today)
//        const leftDay = Math.floor(difference / day)
//        const leftHour = Math.floor((difference % day)/hour)
//        const leftMinute = Math.floor((difference % hour)/minute)
//        const leftSecond = Math.floor((difference % minute)/second)

//       Days.innerText = leftDay
//        Hour.innerText = leftHour
//        Minute.innerText = leftMinute
//        Second.innerText = leftSecond

//     },1000)


// }
// timerFunction()

// let day1 = document.querySelector(".days")
// let hour1 = document.querySelector(".hours")
// let minute1 = document.querySelector(".minute")
// let second1 = document.querySelector(".second")

// let second = 1000
// let minute = 60 * second
// let hour = 60 * minute
// let day = 24 * hour



// let timerFunction = () => {
//     setInterval(() => {
//         let timer = new Date("11/11/2023").getTime()
//         let today = new Date().getTime()
//         let difference = timer - today

//         let leftDay = Math.floor(difference / day);
//         let leftHour = Math.floor((difference % day) / hour);
//         let leftMinute = Math.floor((difference % hour) / minute);
//         const leftSecond = Math.floor((difference % minute) / second);
//         day1.innerText = leftDay
//         hour1.innerText = leftHour
//         minute1.innerText = leftMinute
//         second1.innerText = leftSecond
//     },1000)

// }

// timerFunction()




// const days = document.querySelector(".days")
// const hours = document.querySelector(".hours")
// const minutes = document.querySelector(".minute")
// const seconds = document.querySelector(".second")

// const second = 1000;
// const minute = 60 * second
// const hour = 60 * minute
// let day = 24 * hour



// const showTime = () => {
//     let now = new Date()
//     let dd = String(now.getDate()).padStart(2, "0")
//     let mm = String(now.getMonth()+1).padStart(2, "0")
//     let yy = now.getFullYear()
//     let  enterDate = prompt("Enter Date").padStart(2, "0")
//     let enterMonth = prompt("Enter Month").padStart(2, "0")

//     now = `${mm}/${dd}/${yy}`
//     console.log(now);
//    let Details = `${enterMonth}/${enterDate}/${yy}`;

//    if(now > Details){
//      Details = `${enterMonth}/${enterDate}/${yy+1}`
//    }else if(now < Details){
//     Details = `${enterMonth--}/${enterDate}/${yy}`
//    }
//     setInterval(() => {
//         let date = new Date(Details).getTime()
//         let today = new Date().getTime()
//         let difference = date - today
//         let leftDay = Math.floor(difference / day)
//         let leftHours = Math.floor((difference % day) / hour)
//         let leftMinute = Math.floor((difference % hour) / minute)
//         let leftSecond = Math.floor((difference % minute) / second)
//         days.innerText = leftDay
//         hours.innerText = leftHours
//         minutes.innerText = leftMinute
//         seconds.innerText = leftSecond
//     })
// }
// showTime()


const days = document.querySelector(".days")
const hours = document.querySelector(".hours")
const minutes = document.querySelector(".minute")
const seconds = document.querySelector(".second")

let second = 1000;
let minute = 60 * second
let hour = 60 * minute
let day = 24 * hour


let showTime = () => {
  // let now = new Date()
  // let dd = String(now.getDate()).padStart(2, "0")
  // let mm = String(now.getMonth()+1).padStart(2, "0")
  // let yy = now.getFullYear()
  // now = `${mm}/${dd}/${yy}`

  let enterDate = prompt("Enter Date").padStart(2, "0")
  let enterMonth = prompt("Enter Month").padStart(2, "0")
  let enterYear = prompt("Enter Year")
  let Details = `${enterMonth}/${enterDate}/${enterYear}`



  setInterval(() => {
    let date = new Date(Details).getTime()
    let newDate = new Date().getTime()
    // if(Details < newDate){
    //   Details = `${enterMonth}/${enterDate}/${enterYear+1}`
     
  
    // }
    let difference = date - newDate
    let leftDay = Math.floor(difference / day);
    let leftHour = Math.floor((difference % day) / hour);
    let leftMinute = Math.floor((difference % hour) / minute)
    let leftSecond = Math.floor((difference % minute) / second)
    days.textContent = leftDay
    hours.textContent = leftHour
    minutes.textContent = leftMinute
    seconds.textContent = leftSecond
  })
}


showTime()