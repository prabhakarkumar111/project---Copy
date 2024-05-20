// let name = document.querySelector("#name")
// let button = document.querySelector("button")
// let tag = document.querySelector(".tags")

// button.addEventListener("click", () =>{
//     let value = name.value
//     name.value = ""
//     let div = document.createElement("div")
//     div.setAttribute("class", "tag")
//     div.innerHTML = `<h3 class="add">${value}</h3>
//     <div class="remove">
//         <p class="add">ADD</p>
//         <p class="remove">Remove</p>
//     </div>`
//     tag.append(div)
// })

// document.querySelector(".remove").addEventListener("click", (e)=>{
//     if(e.target.classList.contains("add")){


//     }
// })


let name = document.querySelector("#name")
let button = document.querySelector("button")
let tag = document.querySelector(".tagsttt")

button.addEventListener("click", () => {
    Details()
    name.value = ""
    oops()

})

let Details = () => {
    let container2 = document.createElement("div")
    container2.setAttribute("class", "tags")
    let h1 = document.createElement("h1")
    h1.textContent = name.value
    let div = document.createElement("div")
    div.classList.add("tag")
    let fh3 = document.createElement("h3")
    fh3.textContent = "ADD"
    fh3.classList.add("h3")
    let sh3 = document.createElement("h2")
    sh3.textContent = "REMOVE"
    sh3.classList.add("h2")
    div.append(fh3)
    div.append(sh3)
    container2.append(h1)
    container2.append(div)
    tag.append(container2)
}

let oops = () => {
    let target = document.querySelector(".tagsttt")
    target.addEventListener("click", (e) => {
        if (e.target.classList.contains("h3")) {
            e.target.parentNode.previousSibling.style.textDecoration = "line-through"
        }else if(e.target.classList.contains("h2")){
            e.target.parentNode.parentNode.remove()
        }
    })
}


