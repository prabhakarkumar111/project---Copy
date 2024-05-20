

// let turn = "X"
// let game = false;

// const { log } = require("async");

// // function to change the turn
// const changeTurn = ()=>{
//     return turn === "X"? "0" : "X"
// }

// // function to check for a win
// const checkWin = ()=>{
//     let boxTexts = document.querySelectorAll(".boxtext")
//     let wins = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]
//     ]

//     wins.forEach((e)=>{
//         console.log(e[1]);
//         if((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[1]].innerText === boxTexts[e[2]].innerText) && ( boxTexts[e[0]].innerText !== "") ){
//             document.querySelector(".info").innerText = boxTexts[e[0]].innerText + "won"
//             game = true;
//         }
//     })
// }

// // Game logic
// let boxes = document.querySelectorAll(".box")
// boxes.forEach((box)=>{
//     let boxText = box.querySelector(".boxtext")
//     box.addEventListener("click", (e)=>{
//         console.log("hello");
//         if(boxText.innerText === ""){
//             boxText.innerText = turn;
//             turn = changeTurn()
//             checkWin()
//             if(!game){
//                 document.querySelector(".info").innerText = `turn for ${turn}`
//             }
//         }
//     })
// })



// let turn = "X"
// let  game = false
// let changeTurn = ()=>{
//     return turn === "X"? "0" : "X"
     
// }

// let gameWin = ()=>{
//     let boxText2 = document.querySelectorAll(".boxtext")
//     let arr = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]
//     ]
//     arr.forEach((e)=>{
//         if((boxText2[e[0]].innerText === boxText2[e[1]].innerText) && (boxText2[e[1]].innerText === boxText2[e[2]].innerText) && (boxText2[e[0]].innerText !== "")){
//             document.querySelector(".info").innerText = boxText2[e[0]].innerText + "won"
//             game = true
//         }
//     })
// }

// let box = document.querySelectorAll(".box")
// box.forEach((element)=>{
//     let boxText = element.querySelector(".boxtext")
//     element.addEventListener("click", ()=>{
//         if(boxText.innerText === ""){
//             boxText.innerText =changeTurn()
//             turn = changeTurn()
//             gameWin()
//             if(!game){
//                 document.querySelector(".info").innerText = "turn for" + turn
//             }
//         }
//     })
// })

// let boxes = document.querySelectorAll(".box")
// boxes.forEach((box)=>{
//     let boxText = box.querySelector(".boxtext")
//     box.addEventListener("click", (e)=>{
//         console.log("hello");
//         if(boxText.innerText === ""){
//             boxText.innerText = turn;
//             turn = changeTurn()
//             checkWin()
//             if(!game){
//                 document.querySelector(".info").innerText = `turn for ${turn}`
//             }
//         }
//     })
// })





let boxtext = document.querySelector(".boxtext")
let info = document.querySelector(".info")
let game = true;
turn = "X"

let turnFor = ()=>{
    return turn === "X"? "0" : "X"
}

let box = document.querySelectorAll(".box")
box.forEach(element => {
    let boxText = element.querySelector(".boxtext")
    element.addEventListener("click", ()=>{
        if(boxText.textContent === ""){
            boxText.textContent = turn
            turn = turnFor()
            info.textContent = `turn for ${turn}`
        }
    })
});

