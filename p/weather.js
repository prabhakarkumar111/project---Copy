// const temperateField = document.querySelector(".weather1")
// const cityField = document.querySelector(".weather2 p")
// const dateField = document.querySelector(".weather2 span")
// const emojiField = document.querySelector(".weather3 img")
// const weatherField = document.querySelector(".weather3 span")
// let searchField = document.querySelector(".searchField")
// const form = document.querySelector("form")
// console.log(form);
// let target  = "delhi"


// const fetchData = async()=>{
//     const url = `http://api.weatherapi.com/v1/current.json?key=e6a136af52cd41b8a2f15244230711&q=${target}`
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log(data);

//     const {
//         current:{temp_c, condition: {text, icon }},
//         location: {name, localtime}
//     } = data
//     updateDom(temp_c,name,localtime, icon, text)
// }


// const updateDom = (temp, name,time, emoji, text, )=>{
//     temperateField.innerHTML = temp
//     cityField.textContent = name
//     let exactTime = time.split(" ")[1]
//     let exactDate = time.split(" ")[0]
//     const exactDay = new Date(exactDate).getDay()
//     dateField.textContent = `${exactTime}  ${getDayName(exactDay)} ${exactDate}`
//     emojiField.src = emoji
//     weatherField.textContent = text
    
// }

// let getDayName = (key)=>{
//     switch (key) {
//         case 0:
//             return "sunday"
//             break;
//             case 1:
//             return "monday"
//             break;
//             case 2:
//             return "tuesday"
//             break;
//             case 3:
//             return "wednesday"
//             break;
//             case 4:
//             return 'thursday'
//             break;
//             case 5:
//             return "friday"
//             break;
//             case 6:
//             return "saturday"
//             break;
    
//         default:
//            return "I don't now"
//     }
// }

// form.addEventListener("submit", (e)=>{
//     e.preventDefault()
//     target = searchField.value
//     fetchData()
// })

// fetchData()

// const weather1 = document.querySelector(".weather1")
// const weather2 = document.querySelector(".weather2 p")
// const weather2Span = document.querySelector(".weather2 span")
// const weather3Img = document.querySelector(".weather3 img")
// const weather3span = document.querySelector(".weather3 span")
// let form = document.querySelector("form")
// let searchField = document.querySelector(".searchField")



// let fetchData = async(target)=>{
//     let url = `http://api.weatherapi.com/v1/current.json?key=e6a136af52cd41b8a2f15244230711&q=${target}`
//     let response = await fetch(url)
//     let data = await response.json()
//     weather1.textContent = data.current.temp_c
//     weather2.textContent = data.location.name
//     let newDate = data.location.localtime
//     let ans = newDate.split(" ")[1]
//     let ans2 = newDate.split(" ")[0]
//     let date = new Date(newDate).getDay()
//     weather2Span.textContent = `${ans} ${numberToDay(date)} ${ans2}`
//     weather3Img.src = data.current.condition.icon
//     weather3span.textContent = data.current.condition.text
// }

// let weatherData = (temp, location, localTime, icon, text)=>{
//     weather1.textContent = temp
//     weather2.textContent = location
//     let newDate = localTime
//     let ans = newDate.split(" ")[1]
//     let ans2 = newDate.split(" ")[0]
//     let date = new Date(newDate).getDay()
//     weather2Span.textContent = `${ans} ${numberToDay(date)} ${ans2}`
//     weather3Img.src = icon
//     weather3span.textContent = text
// }

// let numberToDay = (key)=>{
//     switch (key) {
//         case 0:
//             return "sunday"
//             break;
//             case 1:
//             return "monday"
//             break;
//             case 2:
//             return "tuesday"
//             break;
//             case 3:
//             return "wednesday"
//             break;
//             case 4:
//             return "thursday"
//             break;
//             case 5:
//             return "friday"
//             break;
//             case 6:
//             return "saturday"
//             break;
    
//         default:
//             return "I not find";
//     }
// }

// form.addEventListener("submit", (e)=>{
//     e.preventDefault()
//     let target = searchField.value
//     fetchData(target)
// })


let weather1 = document.querySelector(".weather1")
let weather2p = document.querySelector(".weather p")
let weather2span = document.querySelector(".weather span")
let weather3 = document.querySelector(".weather3 p img")
let weather3span = document.querySelector(".weather3 span")
let input = document.querySelector(".searchField")
let button = document.querySelector("button")


let dataFetch = async(target)=>{
    let url = `http://api.weatherapi.com/v1/current.json?key=e6a136af52cd41b8a2f15244230711&q=${target}`
    let response = await fetch(url)
    let data = await response.json()
    console.log(data);
    // weather1.textContent = data.current.temp_c
    // weather2p.textContent = data.location.name
    // let currentTime = data.location.localtime
    // let first = currentTime.split(" ")[1]
    // let second = currentTime.split(" ")[0]
    // let date = new Date(currentTime)
    // let day = date.getDay()
    // weather2span.textContent = `${first} ${realWeak(day)} ${second}`
    // weather3.textContent = data.current.condition.icon
    // weather3span.textContent = data.current.condition.text
    let {
        current:{ temp_c, condition: { text, icon}},
        location:{localtime, name}
    } = data
    fetchData(temp_c, name, localtime, icon, text)

    
}


let fetchData = (a, b, c, d, e)=>{
    weather1.textContent = a
    weather2p.textContent = b
    let currentTime = c
    let first = currentTime.split(" ")[1]
    let second = currentTime.split(" ")[0]
    let date = new Date(currentTime)
    let day = date.getDay()
    weather2span.textContent = `${first} ${realWeak(day)} ${second}`
    weather3.src
     = d
    weather3span.textContent = e
}
let realWeak = (key)=>{
    switch (key) {
        case 0:
            return "sunday"
            break;
            case 1:
            return "monday"
            break;
            case 2:
            return "tuesday"
            break;
            case 3:
            return "wednesday"
            break;
            case 4:
            return "thursday"
            break;
            case 5:
            return "friday"
            break;
            case 6:
            return "saturday"
            break;
        
    
        default:
            return "Oops Not Define"
            break;
    }
}


button.addEventListener("click", (e)=>{
    e.preventDefault()
    let value = input.value
    dataFetch(value)
})











