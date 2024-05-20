let button = document.querySelector(".first button")
let todo = document.querySelector(".todo")
let second = document.querySelector(".second")

button.addEventListener("click", ()=>{
    let ans = todo.value
    todo.value = ""
    let div = document.createElement("div")
    div.classList.add("apple")
    div.innerHTML = `<div class="app">
    <h1>${ans}</h1>
</div>
<div class="app2">
    <button class="add">Add</button>
    <button class="Remove">Remove</button>
</div>`
second.append(div)

})

second.addEventListener("click", (e)=>{
    if(e.target.classList.contains("add")){
        e.target.parentNode.previousSibling.previousSibling.style.textDecoration = "line-through"
    }
    else if(e.target.classList.contains("Remove")){
        e.target.parentNode.parentNode.remove(
            
        )
    }
})