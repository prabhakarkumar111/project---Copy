const randomColor = ()=>{
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}
randomColor()




let start = document.querySelector(".start")
let stop = document.querySelector(".stop")
let center = document.querySelector(".center")
let h1 = document.querySelector("h1")
const body = document.body
let id;

center.addEventListener("click", (e)=>{
   if(e.target.classList.contains("start")){
    id = setInterval(()=>{
        body.style.backgroundColor = randomColor()
    },1000)
   }
   else if(e.target.classList.contains("stop")){
    clearInterval(id)
   }
})






// start.addEventListener("click", ()=>{
//     id = setInterval(()=>{
//         document.body.style.backgroundColor = randomColor()
//     },1000)
// })

// stop.addEventListener("click", ()=>{
//     clearInterval(id)
// })




const insert = document.querySelector(".insert")
window.addEventListener("keydown", (e) => {
    insert.innerHTML = `<div class="color">
    <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
    </div>`
})

\







