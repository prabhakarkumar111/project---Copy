// const body = document.body
// const button = document.querySelector("button")
// const h1 = document.querySelector(".content")
// function func() {
//     const id = setInterval(() => {
//         const red = Math.floor(Math.random() * 255)
//         const green = Math.floor(Math.random() * 255)
//         const blue = Math.floor(Math.random() * 255)
//         const rgb = `rgb(${red}, ${green}, ${blue})`
//         body.style.backgroundColor = rgb
//         return id
//     }, 1000)
// }

// button.addEventListener("click", () => {
//     const a = 
//     clearInterval(id)
//     h1.textContent = rgb
// })

// const id = setInterval(() => {
//     const red = Math.floor(Math.random() * 255)
//     const green = Math.floor(Math.random() * 255)
//     const blue = Math.floor(Math.random() * 255)
//     const rgb = `rgb(${red}, ${green}, ${blue})`
//     body.style.backgroundColor = rgb
//     h1.textContent = body.style.backgroundColor 
// },1000)

// button.addEventListener("click", ()=>{
//     clearInterval(id)
// })
// const button = document.querySelector("button")


// function a(){
//     const red = Math.floor(Math.random() * 255)
//     const green = Math.floor(Math.random() * 255)
//     const blue = Math.floor(Math.random() * 255)
//     const rgb = `rgb(${red}, ${green}, ${blue})`
//     return rgb
// }

// button.addEventListener("click", ()=>{
//     const color = a()
//     body.style.backgroundColor = color
//     h1.textContent = color
// })

// let body = document.body
// let one = document.querySelector("#one")
// let rgb;
// let id = setInterval(() => {
//     console.log("hello");
//     let red = Math.floor(Math.random() * 255)
//     let green = Math.floor(Math.random() * 255)
//     let blue = Math.floor(Math.random() * 255)
//     rgb = `rgb(${red}, ${green}, ${blue})`
//     body.style.backgroundColor = rgb
//     return id
// }, 1000)



// one.addEventListener("click", () => {
//     clearInterval(id)
//     one.textContent = rgb
// })

let body = document.body
let hex = "#"
function func(){
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    rgb = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = rgb
}
func()



let change = document.querySelector("#one")
change.addEventListener("click", ()=>{
    body.style.backgroundColor = func()
})
