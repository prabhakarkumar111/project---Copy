// const title = document.querySelector("#title")
// const description = document.querySelector("#description")

// let form = document.querySelector("form")
// let container = document.querySelector(".container")

// let task = []



// let showAll = () => {
//     task.forEach((value, index) => {
//         const div = document.createElement("div")
//         div.setAttribute("class", "task")
//         const innerDiv = document.createElement("div")
//         const p = document.createElement("p")
//         p.innerText = `${value.title}`
//         let span = document.createElement("span")
//         span.innerText = `${value.description}`
//         innerDiv.append(p)
//         innerDiv.append(span)
//         let button = document.createElement("button")
//         button.innerText = "-"
//         div.append(innerDiv)
//         div.append(button)
//         container.append(div)
//         button.addEventListener("click", (e) =>{
//             oops()
//             task.splice(index, 1)
//             showAll()
//         })
//     })
// }

// const oops = ()=>{
//     task.forEach(()=>{
//         const div = document.querySelector(".task")
//         div.remove()
//     })
// }
// form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     oops()
//     task.push({
//         title: title.value,
//         description: description.value
//     })
//     showAll()
// })





const title = document.querySelector("#title")
const description = document.querySelector("#description")

let form = document.querySelector("form")
let container = document.querySelector(".container")

let task = localStorage.getItem("task")? JSON.parse(localStorage.getItem("task")): []



let showAll = () => {

    task.forEach((item, index) => {
        const div = document.createElement("div")
        div.setAttribute("class", "task")
        const innerDiv = document.createElement("div")
        const p = document.createElement("p")
        p.innerText = `${item.title}`
        let span = document.createElement("span")
        span.innerText = `${item.description}`
        innerDiv.append(p)
        innerDiv.append(span)
        let button = document.createElement("button")
        button.innerText = "-"
        div.append(innerDiv)
        div.append(button)
        container.append(div)
        button.addEventListener("click", (e) => {
            removeTask()
            task.splice(index, 1)
            localStorage.setItem("task", JSON.stringify(task))
            showAll()
        })
    })
}
showAll()
let removeTask = ()=>{
    task.forEach((value)=>{
        let div = document.querySelector(".task")
        div.remove()
    })
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    removeTask()
    task.push({
        title: title.value,
        description: description.value
    })
    localStorage.setItem("task", JSON.stringify(task))
    title.value = ""
    description.value = ""
    console.log(task);
    showAll()
})