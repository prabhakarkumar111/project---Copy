let random = document.querySelector("#random")
let button = document.querySelector("#btn")
let main = document.querySelector(".main")
let container = document.querySelector(".container")

button.addEventListener("click", (e) => {
    e.preventDefault()
    let value = random.value
    random.value = ""
    // let data = ""
    // for (let i = 0; i < value; i++) {
    //     data  += RandomWord(Math.floor(Math.random() * 10+1))
    //     data += " "
    // }
    let div = document.createElement("div")
    div.setAttribute("class", "center")
    let p = document.createElement("p")
    // p.innerHTML = data
    div.append(p)
    container.append(div)
    for(let i = 0; i < value; i++){
        p.textContent += RandomWord(Math.floor(Math.random() * 10+1))
        p.textContent += " "
    }
    

})


let RandomWord = (n) => {
    let latter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let word = ""
    for (let i = 0; i < n; i++) {
        word += latter[Math.floor(Math.random() * 25)]
    }
    return word
}



