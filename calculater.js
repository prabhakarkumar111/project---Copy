// let string = ""
// let buttons = document.querySelectorAll(".button")
// Array.from(buttons).forEach((button) => {
//     button.addEventListener("click", (e) => {
//         if (e.target.innerHTML == "=") {
//             string = eval(string)
//             document.querySelector('input').value = string
//         }
//         else if(e.target.innerHTML == 'c'){
//             string = ""
//             document.querySelector('input').value = string
//         }
//         else {
//             console.log(e.target.innerHTML);
//             string = string + e.target.innerHTML
//             document.querySelector('input').value = string
//         }
//     })
// })


// let string = ""
// let input = document.querySelector(".input input")
// console.log(input);
// let btn = document.querySelector(".btn")
// let button = document.querySelectorAll(".button")
// button.forEach((value) => {
//     value.addEventListener("click", (e) => {
//         if (e.target.innerHTML === "=") {
//             string = eval(string)
//             input.value = string
//         } else if (e.target.innerHTML === "c") {
//             string = ""
//             input.value = string
//         }
//         else {
//             string += e.target.textContent
//             input.value = string
//         }
//     })
// })






// let input = document.querySelector("input")
// let buttons = document.querySelectorAll(".button")
// buttons.forEach((button)=>{
//     button.addEventListener("click", (e)=>{
//         if (e.target.textContent === "=") {
//             let ans = eval(input.value)
//             input.value = ans
//         }else if(e.target.textContent === "c"){
//             input.value = ""
//         }
//         else{
//             let ans = e.target.textContent
//             input.value += ans
//         }
//     })
// })

let buttons = document.querySelectorAll("button")
let form = document.querySelector("input")

let string = ""
buttons.forEach(element => {
    element.addEventListener("click", (e) => {
        if (e.target.textContent == "=") {
            string = eval(form.value)
            form.value = string
        } else if(e.target.textContent === "c"){
            string = ""
            form.value = ""
            
        }
        else {
            string += e.target.textContent
            form.value = string
        }
    })
});




