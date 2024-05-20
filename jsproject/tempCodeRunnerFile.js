function func(){
    let color = "0123456789ABCDEFGH"
    let hex = "#"
    for(let i = 0; i <= 6; i++){
        hex += color[Math.floor(Math.random() *16)]
    }
    return hex
    
}
console.log(func());