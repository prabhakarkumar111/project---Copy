const  RandomWord = (arg)=>{
    console.log(arg);
    let words = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let para = ""
    for(let i = 0; i<arg; i++){
        para += words[Math.floor(Math.random()*26)]
    }
    console.log(para);
}
RandomWord(Math.floor(Math.random()*9+1))