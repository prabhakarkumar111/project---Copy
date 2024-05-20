let passwordGenerator = (arg) => {
    let number = true
    let char = true
    let pass = ""
    let word = "ABCDEFGHIJKLMNOPQRXTUVWXYZ"
    if (number) word += "0123456789"
    if (char) word += "`!#$%^&*()_+?/><{}[]"
    for (let i = 0; i <= arg; i++) {
        pass += word[Math.floor(Math.random() *word.length)]
    }
    console.log(pass);

}
passwordGenerator(Math.floor(Math.random()*10+1))