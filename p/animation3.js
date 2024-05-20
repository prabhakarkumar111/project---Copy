// Throttling Function
// const throttleFunction = (func, delay) => {

//     let prev = 0;
//     return (...args) => {
//         let now = new Date().getTime();
//         // console.log(now - prev, delay);
//         if (now - prev > delay) {
//             prev = now;
//             return func(...args);
//         }
//     }
// }


// let center = document.querySelector(".center")
// center.addEventListener("mousemove", throttleFunction((details) => {
//     let div = document.createElement("div")
//     let img = document.createElement("img")
//     img.setAttribute("src", "https://images.unsplash.com/photo-1676389602363-5f8019131685?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
//     div.append(img)
//     div.setAttribute("class", "imagediv")
//     div.style.left = details.clientX + "px"
//     div.style.top = details.clientY + "px"
//     document.body.append(div)

//     gsap.to(img, {
//         y: "0",
//         // power: 2,
//         duration: 0.3
//     })
//     gsap.to(img, {
//         y: "100%",
//         delay: .4,
//         // power: 2,
//         duration: 0.5
//     })
//     setTimeout(()=>{
//         div.remove()
//     },1000)
// }, 300))





// Throttling Function
const throttleFunction = (func, delay) => {

    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        // console.log(now - prev, delay);
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}
let center = document.querySelector(".center")
let body = document.body

center.addEventListener("mousemove", throttleFunction((det)=>{
    let div = document.createElement("div")
    let img = document.createElement("img")
    img.setAttribute("src", "https://images.unsplash.com/photo-1676389602363-5f8019131685?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
    div.setAttribute("class", "newDiv")
    div.append(img)
    div.style.left = det.clientX + "px"
    div.style.top = det.clientY + "px"
    body.append(div)
    gsap.to(img, {
        y: "0",
        duration: .3
    })
    gsap.to(img, {
        y: "100%",
        duration: .3,
        delay: .8
    })

    setTimeout(()=>{
        div.remove()
    }, 1000)
},400))



