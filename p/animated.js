// first  pata karo ki mouseMove hua ki nahi 
// let center = document.querySelector(".center")
// center.addEventListener("mousemove", (e) => {
//     let centerLocation = center.getBoundingClientRect();
//     let mouseLocation =  e.clientX
//     let insideCenterVal = mouseLocation - centerLocation.left;

//     if(insideCenterVal < centerLocation.width/2){
//         console.log("hey");
//     }else{
//         console.log("hello");
//     }
// });




// let center = document.querySelector(".center")
// center.addEventListener("mousemove", (e) => {
//     let centerLocation = center.getBoundingClientRect()
//     let mouseLocation = e.clientX
//     let details = mouseLocation - centerLocation.left
//     if (details < centerLocation.width / 2) {
//         let redColor = gsap.utils.mapRange(0, centerLocation.width / 2, 255, 0, details)
//         gsap.to(center, {
//             backgroundColor: `rgb(${redColor}, 0, 0)`,
//             esse: Power4
//         })
//     } else {
//         let blueColor = gsap.utils.mapRange(centerLocation.width / 2, centerLocation.width, 0, 255, details)
//         gsap.to(center, {
//             backgroundColor: `rgb(0, 0, ${blueColor})`,
//             esse: Power4,
//         })
//     }
// })

// center.addEventListener("mouseleave", ()=>{
//     gsap.to(center, {
//         backgroundColor: "#fff"
//     })
// })



// let center =  document.querySelector(".center")

// center.addEventListener("mousemove", (e)=>{
//     let centerLocation = center.getBoundingClientRect()
//     let mouseLocation = e.clientX
//     let currentLocation =  mouseLocation - centerLocation.left
//     if(currentLocation < centerLocation.width/2){
//         let redColor = gsap.utils.mapRange(0,  centerLocation.width/2, 255, 0, currentLocation)
//         gsap.to(center, {
//             backgroundColor :  `rgb(${redColor},0,0)`
//         })
//     }else{
//         let blueColor = gsap.utils.mapRange(centerLocation.width/2,centerLocation.width, 0, 255, currentLocation)
//         gsap.to(center, {
//             backgroundColor :  `rgb(0,0,${blueColor})`
//         })
//     }

// })

// center.addEventListener("mouseleave", ()=>{
//     gsap.to(center, {
//         backgroundColor: "#fff"
//     })
// })



let center =  document.querySelector(".center")
center.addEventListener("mousemove", (e)=>{
    let details = center.getBoundingClientRect()
    let mouseLocation = e.clientX
    let currentLocation =  mouseLocation - details.left
    if(currentLocation < details.width/2){
        let redColor = gsap.utils.mapRange(0, details.width/2, 255, 0, currentLocation)   
        gsap.to(center, {
            backgroundColor : `rgb(${redColor},0,0)`
        })
    }else if(currentLocation > details.width/2){
        let blueColor = gsap.utils.mapRange(details.width/2, details.width, 0,255, currentLocation)   
        gsap.to(center, {
            backgroundColor : `rgb(0,0,${blueColor})`
        })
    }
})

center.addEventListener("mouseleave", ()=>{
    gsap.to(center, {
        backgroundColor : "#fff"
    })
})