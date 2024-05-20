// let second = 1000
// let minute = 60*second
// let hour = 60*minute
// let day = 24*hour
// let myDate = new Date("11-24-2023")
// let date = new Date()

// let difference = myDate - date 
// let leftDay = Math.floor(difference/day)
// let leftHour = Math.floor((difference%day)/hour)
// let leftMinute = Math.floor((difference%hour)/minute)
// let leftSecond = Math.floor((difference%minute)/second)
// console.log(`${leftDay} ${leftHour} ${leftMinute} ${leftSecond}`);


// let date = new Date()
// let today = date.getDate()
// let month = date.getMonth()
// let Year = date.getFullYear()
// let details = `${today} ${month} ${Year}`;
// let newDate = prompt("Enter Date").padStart(2, "0")
// let newMonth = prompt("Enter Month").padStart(2, "0")
// console.log(`${newDate}/${newMonth}/${Year}`);





// let Day = (key)=>{
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
//             break;
//     }
// }
// let date = new Date()
// console.log(Day(date.getDay()));

// Note:-  padstart padstart padstart padstart padstart padstart padstart pad start padstart padstart 


// let date = new Date()
// let dd = String(date.getDate()).padStart(2, "0")
// let mm = String(date.getMonth()+1).padStart(2, "0")
// let yy = date .getFullYear()

// date = `${mm}/${dd}/${yy}`

// let takeDay = prompt("Enter Date").padStart(2, "0")
// let takeMonth = prompt("Enter Month").padStart(2, "0")
// let details = `${takeMonth}/${takeDay}/${yy}`


// if(date < details){
//     fullDate = `${mm}/${dd}/${yy+1}`
//     console.log(fullDate);
// }else{
//     console.log("i Dont Know");
// }

// const person = {
//     firstName: "Harshit",
//     lastName: "Kumar",
//     age: 22,
//     about: function(){
//         console.log(`FirstName is ${this.firstName} and age is ${this.age}`);
//         console.log(this);
//     }
// }

// person.about()



// function hello(arg){
//     let ans = 12
//     return function(){
//         return ans * arg
//     }
// }

// let a = hello(4)
// console.log(a());


// function getSumPairZero(array) {
//     for (let number of array) {
//         for (let i = 0; i < array.length; i++) {
//             if (number + array[i] === 0) {
//                 return [number, array[i]];
//             }
//         }
//     }
// }
// console.log(getSumPairZero([-5, -4, -3, -2, -1, 0, 2, 4, 6, 8]));

// let arr = [-5, -4, -3, -2, -1, 0, 2, 4, 6, 8]
// function hello(arr) {
//     for (let number of arr) {
//         for (let i = 1; i < arr.length; i++) {
//             // console.log([i,number, arr[i]]);
//             if (number + arr[i] === 0) {
//                 return [number, arr[i]];
//             }
//         }
//     }
// }

// console.log(hello(arr));



// function FindSumPair(array){
//     let left = 0
//     let right = array.length-1

//     while(left < right){
//         sum = array[left] + array[right]
//         if(sum === 0){
//             return [array[left], array[right]]
//         }else if(sum > 0){
//             right--
//         }else{
//             left--
//         }
//     }
// }

// console.log(FindSumPair([-5, -4, -3, -2, -1, 0, 2, 4, 6, 8]))


// problem no ---->    2

// let hello = (String1, String2)=>{
//     if(String1.length != String2.length){
//         return false
//     }else{
//         let count = {}
//         for(let char of String1){
//             count[char] = (count[char] || 0)+1
//             console.log(count[char]);
//         }
//         console.log(count);
//     }
// }

// hello("sallu", "sallu")


// String Anagram
let ins = [1, 3, 432, 543, 23, 534, 2135, 134, 214]
ins.sort((a, b) => {
    return b - a

})

console.log(ins);

// function aaa() {
//     let numbers = [-5, -4, -3, -2, -1, 0, 2, 4, 6, 8]
//     for(let number of numbers){
//         for(let i = 1; i<numbers.length; i++){
//             console.log(numbers[i]);
//             if(number + numbers[i] === 0){
//                 return [number, numbers[i]]
//             }
//         }
//     }


// }
// console.log(aaa());



// function Anagram(String1,String2){
//     if(String1.length !== String2.length){
//         console.log("hello");
//     }
//     let counter = []
//     for(let char of String1){
//         counter[char] = (counter[char] || 0)+1
//         console.log(counter[char]);
//     }
//     console.log(counter);
// }
// Anagram("hello", "hello")


// function countTime(){
//     let array = [1,1,2,2,3,3,4,4,5,6,7,7,7,7,8,8,8,9]
//     if(array.length > 0){
//         let i = 0
//         for(let j = 0; j<array.length; j++){
//             if(array[i] === array[j]){
//                 i++
//                 array[i] = array[j]
//             }

//         }
//         console.log(i+1);
//     }
// }
// countTime()


// let str = "Hello Ji Kaise ho"
// let ans = str.split(" ")
// let aa = ans.map((e, index)=>{
//     let a = e.split("").reverse().join("")
//     return a
// })
// console.log(aa.join(" "));




// let num = 3
// function setNum(arg){
//     return num = arg
// }

// let arr = [num, setNum]
// let [number, setNumber] = arr
// setNumber(345)
// console.log(num);



// let ans = [ -3, -2, -1, 0, 1, 2, 3, 4, 5]

// function hello(arg){
//     for(let number of arg){
//         for(let i = 0; i<arg.length; i++){
//             if(number + arg[i] === 0){
//                 return [number , arg[i]]
//             }
//         }
//     }
// }

// console.log(hello(ans));



// let arr1 = 23
// let arr2 = arr1

// arr1 += 17
// console.log(arr1);
// console.log(arr2);

// let item1 = ["array1", "array2"]
// Clone Array
// let item2 = [].concat(item1,"item5")
// YA
// let item2 = item1.slice(0).concat("item3", "item4")
// YA
// spread operator
// let item2 = [...item1, "array4", "array5"]
// console.log(item2);


// const user = {
//     name: "harsh",
//     age: 33,
//     // address: {hoseNumber: "0345"}
// }

// console.log(user.address?.hoseNumber);



// let person = {
//     firstName: "apple",
//     lastName: "kumar",
//     about: function(){
//         console.log(this);
//         console.log(`firstName is ${this.firstName} and lastName is ${this.lastName}`);
//     }
// }
// person.about()


// const user1 = {
//     firstName: "aman",
//     lastName: "kumar",
//     about: function(){
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// }
// let user2 = {
//     firstName: "pritam",
//     lastName: "madhukar",
// }

// user1.about.call(user2)


// let firstName = "apple"
// let aa = firstName.slice(0, 3)
// console.log(aa);


// string number undefined null bigint boolean symbol
// let ans = 0.5


/////////////////   how to clone array
// let ans = ["apple", "ball"]
// let ans2 = ans.slice(0).concat("cat ", "dog", "elephant")
// let ans2 = [].concat(ans, "cat ", "dog", "elephant")
// let ans2 = [...ans, "cat ", "dog", "elephant"]
// console.log(ans2);

// const obj = {
//     firstName: "Anuj",
//     lastName: "bihari",
//     age: 22,
//     about: function(a){
//         console.log(`${this.firstName} ${this.lastName} ${a}`);
//     }
// }

// let ans = obj.about.bind(obj, ["Harami"])
// console.log(ans);




// let arr = "Hey Girl You Now Me"
// let newArr = arr.split(" ")
// let answer = newArr.map((value) => {
//     let ans = value.split("").reverse().join("")
//     return ans
// })
// console.log(answer.join(" "))

// let obj = ["apple", "ball", "cat"]
// let obj2 = obj.slice(0).concat( "hello", "ans", "apple")
// let obj2 = [].concat(obj,  "hello", "ans", "apple")
// let obj2 = [...obj, "hello", "ans", "apple"]
// console.log(obj2);


// let arr = [-5, -3, -4, 3, 4, 5, 3, -2, -1, 0,7]
// let newArray = arr.sort((a, b)=>{
//     return a-b
// })

// let checkValue = ()=>{
//     for(let number of newArray){
//         for(let i = 0; i<newArray.length; i++){
//             if(number + newArray[i] === 0){
//               return [number, newArray[i]]; 
//             }
//         }
//     }
// }
// console.log(checkValue());
// Array
// Note ---> Array can Store Any data Types
// Reference type ko hum object bol sakte hai
let arr = ["Apple", "Ball","Cat"]
for(let item in arr){
    console.log(arr[item]);
}
console.log(arr);
arr[1] = "Mango"
console.log(arr);
console.log(arr[arr.length - 1]);
console.log(Array.isArray(arr));
// Push --> last me add karta hai
// pop --> last se remove karta hai
// shift --> starting se element ko dekete karega
// Array me sabse important length property hai

let arr = ["Apple", "Ball","Cat"]
let [index1, index2, index3] = arr
console.log(index2);

// Primitive vs Reference
// Primative type ---> call stack me add hota hai


const myArray = ["value1", "value2", "value3", "value4"]
let [val1, val2, ...val3] = myArray
console.log(val1);
console.log(val2);
console.log(val3[0]);
console.log(val3[1]);

// Objects

let obj = {
    name: "apple",
    age: 22,
    Hobbies: ["music", "seeing"],
    "another Male": "Rahul"
}
// for(let key in obj){
//     console.log(`${key} : ${obj[key]}`)
// }
console.log(Object.keys(obj));
// Note -->object.keys always give array
let ans = Array.isArray(Object.keys(obj))
console.log(ans);


// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "value111"
// const value2 = "value222"

// let obj2 = {
//     [key1]: value1,
//     [key2]: value2
// }
// // obj2[key1] = value1
// // obj2[key2] = value2
// console.log(obj2);



// spread operator

let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
let newArray = [...array1, ...array2]
console.log(newArray);