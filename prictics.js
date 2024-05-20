// console.log(this);
// console.log(myFunction);
// console.log(fullName);
// myFunction()
// function myFunction(){
//     console.log("this is my world");
// }
// var firstName = "mohit"
// var lastName = "kumar"
// var fullName = firstName + " " + lastName
// console.log(fullName);

// console.log(myFunction);
// var myFunction = function(){
//     console.log("This is my function");
// }


// console.log(myFunction);
// console.log(fullName);
// function myFunction(){
//     console.log("this is my function");
// }
// var firstName = "harshit"
// var lastName  = "sharma"
// var fullName = firstName +" "+ lastName
// console.log(fullName);


// console.log(func);
// var func = function(){
//     console.log("what are you doing bro");
// }
// console.log(func);


// console.log(firstName);
// let firstName = "payal"
// console.log(firstName);

// let foo = "foo"
// console.log(foo);
// function getFullName(firstName, lastName){
//     console.log(arguments);
//     console.log(arguments[0]);
//     let myVar = "var inside func"
//     console.log(myVar);
//     const fullName = firstName + " " + lastName
//     return fullName
// }
// console.log("hello world");
// const personName = getFullName("harshit", "sharma")
// console.log(personName);

// const hello = ["apple", "ball", "hello"]
// const a = [...hello]
// console.log(a);

// const lastName = "harry"
// const printName = function(){
//     const firstName = "harshit"
//     console.log(firstName);
//     console.log(lastName);
// }
// printName()

// closures
// function can return functions
// function myFunc(){
//     function hello(){
//        return "hello"
//     }
//     return hello
// }
// const a = myFunc()
// const b = a()
// console.log(b);


// function printFullName(firstName , lastName){
//     function printName(){
//         console.log(firstName, lastName);
//     }
//     return printName
// }
// const ans = printFullName("harshit", "sharma")
// ans()


// function hello(x){
//     const a = "varA"
//     const b = "varB"
//     return function(){
//         console.log(a, b, x);
//     }
// }
// const ans = hello("arg")
// ans()
// jab function kisi dusre function ko return karta hi to return hote samay apne sath lexical envoirment ke variable ko apne sath lekar return hota hai

// function hello (power){
//     return function(num){
//         return num ** power
//     }
// }
// const cube = hello(2)
// const ans = cube(4)
// console.log(ans);


// function func(){
//     let counter = 0
//     return function(){
//         if(counter < 1){
//             console.log("hii you call me");
//             counter ++
//         }
//         else{
//             console.log("mai already ek bar call ho chuka hu");
//         }
//     }
// }
// const a = func()
// a()
// a()


// function countTime() {
//     let array = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 7, 7, 7, 8, 8, 8, 9]
//     array.sort((a, b) => {
//         return a - b
//     })
//     console.log(array);
// }
// countTime()



// function countUnique(array) {
//     let uniqueNum = {};

//     for (number of array) {
//         uniqueNum[`${number}`] = number;
//     }

//     return Object.values(uniqueNum).length;
// }

// console.log(countUnique([1,1,2,2,3,3,4,4,5,6,7,7,7,7,8,8,8,9]));



// let str = "saare jaha se aacha hindustan hamara"
9
// let ans = str.split(" ")
//     .map((word) => {
//         return word.split("").reverse().join("")
//     })
//     console.log(ans.join(" "));


// function check(elem){
//     console.log(Array.isArray(elem));
// }

// check([])
// check({})


// let arr = [6, 8, 9, 6]
// for(let i = 0; i<arr.length; i++){
//     console.log(arr);
//     arr.pop()
// }

// console.log(arr.length);


// let a = [1, 2, 3, 4, 5]
// let b = a.concat(a)
// console.log(b);


// let a = 21
// let b = Number(a.toString().split("").reverse().join(""))
// console.log(b);

// let ans = "apple"
// let value = ans.split("").sort()
// console.log(value.join(""));


// let ans = ['1', '645', '34','5', '2','12']
// let value;
// ans.sort((a,b)=>{
//     return a-b
// })
// console.log(ans);



// let func = (word)=>{
//     let allWord = word.split(" ").map((e)=>{
//         return e[0].toUpperCase() + e.slice(1)
//     })
//     return allWord.join(" ")
// }
// console.log(func("hello bhai kaise ho aap"));

// let str = "apple"
// let ans = {}
// str.split("").forEach((elem)=>{
//     if(ans.hasOwnProperty(elem) === false){
//         ans[elem] = 1
//     }else{
//         ans[elem]++
//     }
// })
// console.log(ans);



// let apple = {
//     a: 1,
//     b: 2
// }
// let email = "4"
// apple[email] = 9
// console.log(apple);



// let arr = [1, 2, 3, 4, 5, 5]
// let ans2 = 0
// for(let char of arr){
//     ans2 += char
// }
// console.log(ans2);



// let arr = ["non", "Payal", 23, 54, "Sorry"]
// let sum = 0
// for(let ans of arr){
//     if(typeof ans !== "string"){
//         sum += ans
//     }
// }
// console.log(sum);

// let obj = [
//     {name: "Payal", gender: "female"},
//     {name: "amit", gender: "male"},
//     {name: "riya", gender: "female"},
//     {name: "Payal", gender: "female"},
//     {name: "aman", gender: "male"},
// ]
// obj.forEach((elem)=>{
//     if(elem.gender === "female"){
//         elem.remove
//     }
//     console.log(elem);
// })



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



