let RandomWord = (n)=>{
    let latter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let word = ""
    for(let i = 0; i<n; i++){
        word += latter[Math.floor(Math.random()*25)]
    }
    return word
}

console.log(RandomWord(Math.floor(Math.random()*10+1)));