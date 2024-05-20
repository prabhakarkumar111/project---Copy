// let numOfWords = document.querySelector("#numOfWords")
// let button = document.querySelector("#ans")
// let container = document.querySelector(".container")
// let input;
// let letter = (n)=>{
//     const word = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     let value = ""

//     for(let i = 0; i<n; i++){
//         value += word[Math.floor(Math.random()*25)]
//     }
//     return value
// }



// button.addEventListener("click", () => {
//     input = Number(numOfWords.value);
//     numOfWords.value = ""
//     let para = document.createElement("p")
//     let data = ""
//     for(let i = 0; i<input; i++){
//         data += letter(Math.floor(Math.random()*11+1))
//         data += "  "
//     }
//     para.innerText = data
//     container.append(para)
// })


// function hello (){
//     let color = "01234ABCDEF"
//     let value = "#"
//     for(i = 0; i<6; i++){
//         value += color[Math.floor(Math.random()* 11)]
//     }
//     return value
// }
// console.log(hello());







// const numOfWords = document.querySelector("#numOfWords")
// let button = document.querySelector("#ans")
// let container = document.querySelector(".container")



// let random = (n)=>{
//     let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     let ans = ""
//     for(let  i= 0; i<n; i++){
//         ans += char[Math.floor(Math.random()* 25)]
//     }
//     return ans
// }


// button.addEventListener("click", ()=>{
//     let value = numOfWords.value

//     let data = ""
//     for(let i = 0; i < value; i++){
//         data += random(Math.floor(Math.random()* 10 +1))
//         data += " "
//     }

//     let p = document.createElement("p")
//     p.innerHTML = data
//     container.append(p)


// })

// const container = document.querySelector(".container")
// const numOfWords = document.querySelector("#numOfWords")
// const ans = document.querySelector("#ans")

// let random = (n)=>{
//     let words = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     let empty = ""
//     for(let i = 0; i<n; i++){
//         empty += words[Math.floor(Math.random()* 25)]
//     }
//     return empty;
// }





// ans.addEventListener("click", ()=>{
//     let value = numOfWords.value
//     let data = ""
//     for(let i = 0; i < value; i++){
//         data += random(Math.floor(Math.random()*10 +1))
//         data += " "
//     }
//     let p = document.createElement("p")
//     p.innerHTML = data
//     p.setAttribute("class", "paras")
//     container.append(p)

// })


// const numOfWords = document.getElementById("numOfWords")
// const answer = document.querySelector("#ans")

// let randomWord = (n) => {
//     let letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     let word = ""
//     for (let i = 0; i = n; i++){
//         word += letter[Math.floor(Math.random()*25)]
//     }
//     return word
// }
// console.log(randomWord(Math.floor(Math.random()*10 +1)));

// let numOfWords = document.querySelector("#numOfWords")
// let btn = document.querySelector("#ans")
// let container = document.querySelector(".container")




// let randomWord = (n) => {
//     console.log(n);
//     let word = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     let letter = ""
//     for (let i = 0; i < n; i++) {
//         letter += word[Math.floor(Math.random() * 25)]
//     }
//     return letter
// }



// btn.addEventListener("click", () => {
//     let value = numOfWords.value
//     let char = ""
//     for(let i = 0; i<value; i++){
//         char += randomWord(Math.floor(Math.random()*10+1))
//         char += " "
//     }
//     let p = document.createElement("p")
//     p.innerHTML = char
//     p.setAttribute("class", "paras")
//     container.append(p)
// })



let container = document.querySelector(".container")
const numOfWords = document.querySelector("#numOfWords")
const ans = document.querySelector("#ans")


ans.addEventListener("click", (e)=>{
    e.preventDefault();
    let value = Number(numOfWords.value);
    paraGenerator(value)
})


const  RandomWord = (arg)=>{
    console.log(typeof arg);
    let words = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let para = ""
    for(let i = 0; i<arg; i++){
        para += words[Math.floor(Math.random()*26)]
    }
    return para
}


let paraGenerator = (arg)=>{
    console.log(typeof arg);
    let ans = ""
    for(let i = 0; i<arg; i++){
        ans += RandomWord(Math.floor(Math.random()*9+1))
        ans += " "
    }
    let p = document.createElement("p")
    p.innerText = ans
    container.append(p)
}
