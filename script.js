let Compterscore = 0
let Userscore = 0

const choices = document.querySelectorAll(".image")


//This one is for User choices
choices.forEach((image)=>{
    image.addEventListener("click", () =>{
        const imageId = image.getAttribute("id")
        console.log("Choice has been made" ,imageId)

        //calling computer choise
        playgame(imageId)

    })
})

//this one is for computer choise

let computerGen = () => {
    const options = ["rock","paper","scissor"]
    const randIndx = Math.floor(Math.random()*3)
    return options[randIndx]

}

//creating a function

const playgame = (Userchoise) =>{
    const compChoice = computerGen();
    console.log("computer made an choise",compChoice)
    //calling out if game was draw
    if(Userchoise===compChoice){
        drawGame()
    }
    else{
        let userWin = true
        if(Userchoise==="rock"){
            //scissor ya paper
            userWin = compChoice === "scissor" ? true : false
        }
        else if(Userchoise==="paper"){
            //rock ya scissor
            userWin = compChoice === "rock" ? true : false
        }
        else if(Userchoise === "scissor"){
            //paper ya scissor
            userWin = compChoice === "paper"
        }
        shoWinner(userWin)

    }


}

//For Draw game
const drawGame = ()=>{
    console.log("The Game was Draw")
}

//showing winner

const shoWinner = (userWin) =>{
    if(userWin){
        console.log("You Won")
    }
    else{
        console.log("You lost")
    }
}


