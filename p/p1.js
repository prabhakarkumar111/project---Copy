// let id = setInterval(() => {
//     let color = "ABCDEF1234567890"
//     let hex = "#"
//     for (let i = 0; i < 6; i++) {
//         hex += color[Math.floor(Math.random() * 16)]
//     }
//     document.body.style.backgroundColor = hex
//     hello(hex)
// }, 1000)


// function hello(a) {
//     console.log(a);
//     let button = document.querySelector("button")
//     button.addEventListener("click", () => {
//         clearInterval(id)
//         document.querySelector(".color").innerText = a
//     })
// }




let body = document.body
let container = document.querySelector(".container")
container.addEventListener("click", (e)=>{
    if(e.target.id = "red"){
        body.style.backgroundColor = "red"
    }
    else if(e.target.id = "black"){
        body.style.backgroundColor = "black"
    }
     else if(e.target.id = "orange"){
        body.style.backgroundColor = "orange"
    }
    else if(e.target.id = "blue"){
        body.style.backgroundColor = "blue"
    }
    
})
