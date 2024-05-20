// select element using getElementById
// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.textContent);
// mainHeading.textContent  = "this is Something else"
// console.log(mainHeading.textContent);
// mainHeading.style.backgroundColor = "red"

// const a = document.querySelector(".section-todo  h2")
// console.log(a);
// console.log(a.style.color = "red");

// const link = document.querySelector("a")
// console.log(link.getAttribute("href").slice(1));
// link.setAttribute("href", "www//google.com")
// console.log(link.getAttribute("href"));


// get multiple item using getElementByClassName
// get multiple item using querySelectorAll

// note----->  getElementByClassName always give htmlCollection 
// const navItems = document.getElementsByTagName("a")
// for(let i=0; i <= navItems.length; i++){
//     console.log(navItems[i]);
//     navItems[i].style.color = "red"
// }
// console.log(navItems);


// change in array
// const hello = {
//     name: "harsh",
//     age: 22
// }
// const a = Array.from(hello)
// console.log(Array.isArray(a)); 

// const headline = document.querySelector(".headline")
// console.log(headline.innerHTML);
// headline.innerHTML = "<h1 class='btn'>Inner HTML changed</h1>"
// console.log(headline.innerHTML);


// const rootNode = document.getRootNode()
// const htmlElementNode =rootNode.childNodes[1];
// const head = htmlElementNode.children[0];
// const text = htmlElementNode.children[1]
// const body = htmlElementNode.children[2]
// console.log(head.nextSibling.nextSibling);
// const header = document.querySelector("header")
// const chil = header.children[0];
// console.log(chil.nextElementSibling

// const headline = document.querySelector(".header")
// const search = headline.querySelector(".nav-items")
// console.log(search);

// const head = document.querySelector("head")
// head.querySelector("title")
// console.log(head.querySelector("title"));
// const sectionTodo = document.querySelector(".section-todo")
// sectionTodo.classList.add("bg-dark");

// const toggle = document.querySelector(".section-todo")
// const a = toggle.classList.toggle("bg-dark")
// toggle.classList.toggle("bg-dark")

// console.log(a);
// const a = document.querySelector(".header")
// a.classList.add("bg-dark");
// console.log(a.classList);

// const newTodoItem = document.createElement("li")
// newTodoItem.innerHTML = "<span> Teach Student </span>"
// const todoList = document.querySelector(".todo-list")
// console.log(todoList);
// todoList.prepend(newTodoItem)
// console.log(newTodoItem);


// const headline = document.querySelector(".headline")
// headline.classList.remove("headline")

// const todo1 = document.querySelector(".todo-list li")
// todo1.remove()

// const newTodoItem = document.createElement("li")
// newTodoItem.textContent = "Teach Student"
// const todoList = document.querySelector(".todo-list")
// console.log(todoList);
// todoList.before(newTodoItem)

// const ul = document.querySelector(".todo-list")
// const li = document.createElement("li")
// li.textContent = "new todo"
// const li2 = li.cloneNode(true)
// ul.append(li)
// ul.prepend(li2)


// const button = document.querySelector(".btn-headline")
// button.addEventListener("click", ()=>{

// })
// console.log(button);

// const button = document.querySelector(".btn-headline")
// button.addEventListener("click", () => {
//     console.log(this);
//     console.log("click me");
// })

// const todoForm = document.querySelector(".form-todo")
// const todoInput = document.querySelector(".form-todo input[type='text']")
// const todoList = document.querySelector(".todo-list")
// todoForm.addEventListener("submit", (e)=>{
//     e.preventDefault()
//     const newTodoText = todoInput.value;
//     const newLi = document.createElement("li")
//     newLi.innerHTML = `<span class="text">${todoInput.value}</span>
//     <div class="todo-button">
//       <button class="todo-btn Done" >Done</button>
//       <button class="todo-btn remove">Remove</button>
//     </div>`
//     todoList.append(newLi)
//     todoInput.value = ""
// })

// todoList.addEventListener("click", (e)=>{
//     if(e.target.classList.contains ("Done")){
//         const liSpan = e.target.parentNode.previousElementSibling;
//         liSpan.style.textDecoration = "line-through"
//     }
//     if(e.target.classList.contains ("remove")){
//         const targetLi = e.target.parentNode.parentNode
//         targetLi.remove()
//     }
// })


// const todo = document.querySelector(".form-todo")
// const inputTodo = document.querySelector(".form-todo input[type='text']")
// const todoList = document.querySelector(".todo-list")
// console.log(todoList);
// todo.addEventListener("submit", (e)=>{
//     e.preventDefault()
//     const input = inputTodo.value
//     const li = document.createElement("li")
//     li.innerHTML = `<span class="text">${input}</span>
//     <div class="todo-button">
//       <button class="todo-btn Done" >Done</button>
//       <button class="todo-btn remove">Remove</button>
//     </div>`
//     todoList.append(li)
//     inputTodo.value = ""
// })

// todoList.addEventListener("click", (e)=>{
//     if(e.target.classList.contains("Done")){
//         e.target.parentNode.previousElementSibling.style.textDecoration = "line-through"
//     }
//     if(e.target.classList.contains("remove")){
//         const remove = e.target.parentNode.parentNode
//         remove.remove()
//     }
// })



// function myFunc(callback){
//     console.log("hello world");
//     callback()
// }
// function myFunc2(){
//     console.log("ooh My god");
// }
// myFunc(myFunc2)

// function getTwoNumber(number1, number2, callback){
//     if(typeof number1 === "number" && typeof number2 === "number"){
//         callback(number1, number2)
//     }else{
//         console.log("wrong data types");
//     }
// }
// function addTwoNumber(num1, num2){
//     console.log(num1 + num2);
// }
// getTwoNumber(9, 5, addTwoNumber)


// const form = document.querySelector(".form-todo")
// const input = document.querySelector(".form-todo input[type='text']")
// const todo = document.querySelector(".todo-list")
// const done = document.querySelector(".todo-button")
// console.log(done);
// form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     let value = input.value
//     const create = document.createElement("li")
//     create.innerHTML = `<span class="text">${value}</span>
// <div class="todo-button">
//   <button class="todo-btn Done" >Done</button>
//   <button class="todo-btn remove">Remove</button>
// </div>`
//     todo.append(create)
//     input.value = ''
// })

// todo.addEventListener("click", (e) => {
//     console.log(e.target);
//     if (e.target.classList("Done")) {
//         e.target.parentNode.previousElementSibling.style.textDecoration = "line-through"
//     }
//     if(e.target.classList.contains("remove")){
//         e.target.parentElement.parentElement.remove();
//     }
// })
// console.log("hiiiiiiiii");




// let bucket = ["coffee", "chips", "vegetables", "salt", "rice"]
// const FriedRice = new Promise((resolve, reject) => {
//     if (bucket.includes("salt") && bucket.includes("vegetables") && bucket.includes("rice")) {
//         resolve("fried rice")
//     } else {
//         reject("couldn't do it")
//     }
// })

// FriedRice.then((ans) => {
//     console.log(ans)
// }).catch((error)=>{
//     console.log(error);
// })



// const formTodo = document.querySelector(".form-todo")
let input = document.querySelector("#one")
let button = document.querySelector(".btn2")
const todoList = document.querySelector(".todo-list")
let done = document.querySelector(".Done")
let remove = document.querySelector(".remove")
let letter;
console.log(button);
button.addEventListener("click", (e) => {
    e.preventDefault()
    letter = input.value;
    hello()
    input.value = ""
});
function hello() {
    let under = document.createElement("li")
    under.innerHTML = `<span class="text">${letter}</span>
<div class="todo-button">
  <button class="todo-btn Done" >Done</button>
  <button class="todo-btn remove">Remove</button>
</div>`

    todoList.append(under)
}

todoList.addEventListener("click", (e) => {
    if (e.target.classList.contains("Done")) {
        let ans = e.target.parentElement.previousElementSibling
        ans.style.textDecoration = "line-through"
    }
    if (e.target.classList.contains("remove")) {
        e.target.parentElement.parentElement.remove()


    }
})































