let choices = document.querySelectorAll(".choice")
let message = document.querySelector(".message p")

const compChoice = ()=>{
    let option = ["rock", "paper", "scissors"]
    let randId = Math.floor(Math.random()*3)
    return option[randId]
}

const userChoice = (choice)=>{
    let ans = compChoice()
    if(ans === choice){
        message.textContent = `Your choice is right`
    }
    else if(ans !== choice){
        message.textContent = "your choice is Wrong"
    }
    
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
       let id = choice.id;
       userChoice(id)
    })
})