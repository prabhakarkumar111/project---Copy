// window.addEventListener("mousemove", (details) => {
//     let center = document.querySelector(".center")
//     let xval = gsap.utils.mapRange(
//         0,
//         window.innerWidth,
//         200 ,
//         window.innerWidth - 200,
//         details.clientX)
//     gsap.to(".center", {
//         left: xval,
//         ease: Power1,
//     })
// })





// window.addEventListener("mousemove", (e)=>{
//     let center = document.querySelector(".center")
//     let value = gsap.utils.mapRange(0, window.innerWidth, 200, window.innerWidth - 200, e.clientX)
//     gsap.to(center, {
//         left: value,
        
//     })
// })

window.addEventListener("mousemove", (e)=>{
    let ans = gsap.utils.mapRange(0, window.innerWidth, 200, window.innerWidth-200, e.clientX)
    gsap.to(".center", {
        left : ans,
    })
})