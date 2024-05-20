let button = document.querySelector(".main input[type='submit']")
let input = document.querySelector(".main input[type='text']")
let data = document.querySelector(".data")
let body = document.body
button.addEventListener("click", (e) => {
    e.preventDefault()
    let ans = input.value
    input.value = ""
    let div = document.createElement("div")
    div.classList.add("span")
    div.innerHTML += `
    <h1>${ans}</h1>

<div class="two">
    <button class="add">Add</button>
    <button class="remove">Remove</button>
</div>`
data.append(div)
hello()
})
function one(){
    let id = setTimeout(() => {
        let color = "ABCDEF1234567890"
        let hex = "#"
        for (let i = 0; i < 6; i++) {
            hex += color[Math.floor(Math.random() * 16)]
        }
        body.style.backgroundColor = hex
    })
}

function hello(){
    data.addEventListener("click", (e)=>{
        if(e.target.classList.contains("add")){
             one()
        }else if(e.target.classList.contains("remove")){
            e.target.parentNode.parentNode.remove()
        }
    })
}


