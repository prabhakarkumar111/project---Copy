// 2D array
// let arr = [["apple", "ball"], ["cat", "dog"], ["elephent", "job"]]
// console.log(arr[0]);

let boxes = document.querySelectorAll(".box")
let heading = document.querySelector(".heading")
let reset_btn = document.querySelector(".reset-btn")
let btn = document.querySelector(".btn")

let turn = true

let winIndex = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]


let newGame = (box)=>{
    btn.addEventListener("click", ()=>{
        box.removeAttribute("disabled", "")
        box.innerText = ""
        heading.classList.add("hide")
        turn = true
    })
}

let checkWin = (box)=>{
    for(let index of winIndex){
        if(boxes[index[0]].innerText !== "" && boxes[index[1]].innerText !== "" && boxes[index[2]].innerText !== ""){
            if(boxes[index[0]].innerText === boxes[index[1]].innerText && boxes[index[1]].innerText === boxes[index[2]].innerText){
                heading.classList.remove("hide")
                heading.textContent = `Winner is : ${boxes[index[0]].innerText}`
                for(let box of boxes){
                    // heading.classList.remove("hide")
                    box.setAttribute("disabled", "")
                    newGame(box)
                }
            }
        }
    }
}


boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(box.innerText === ""){
            if(turn){
                box.innerText = "0"
                box.style.color = "crimson"
                turn = false
            }else{
                box.innerText = "x"
                box.style.color = "orange"
                turn = true
            }
        }
        checkWin(box)
    })
})

