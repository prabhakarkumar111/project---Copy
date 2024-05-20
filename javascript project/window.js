// let taskbar = document.querySelector(".taskbar")
// let pop = document.querySelector(".pop")
// taskbar.addEventListener("click", () =>{
//     if(pop.style.bottom === "50px"){
//         pop.style.bottom = "-550px"
//     }else{
//         pop.style.bottom = "50px"
//     }
// })



// let taskBar = document.querySelector(".taskbar")
// let pop = document.querySelector(".pop")

// taskBar.addEventListener("click", ()=>{
//     if(pop.style.bottom === "50px"){
//         pop.style.bottom = "-550px"
//     }else{
//         pop.style.bottom = "50px"
//     }
// })



let taskbar = document.querySelector(".taskbar")
let pop = document.querySelector(".pop")

taskbar.addEventListener("click", ()=>{
    console.log("hello");
    if(pop.style.bottom === "-550px"){
        pop.style.display = 
        pop.style.bottom = "50px"
    }
    else{
        pop.style.bottom = "-550px"
    }
    
})