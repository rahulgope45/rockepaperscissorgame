let Compterscore = 0
let Userscore = 0

const choices = document.querySelectorAll(".image")


//conecting msg box here
const msg =document.querySelector("#msg")

//accesing user box here
const scoreOfuser = document.querySelectorAll("#scoreOfuser")

//accesing computer box here
const scoreOfcomputer =document.querySelector("#scoreOfcomputer")

//accesing msgcontainer here
const msgcontainer =document.querySelector("#msgcontainer")





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
        //msg box calling
        shoWinner(userWin)
        //userscorebox and computerscorebox calling
        userScorebox(userWin)
       

    }


}

//For Draw game
const drawGame = ()=>{
    console.log("The Game was Draw")
    msg.innerText = "Draw"
    changeColor3()
}

//showing winner

const shoWinner = (userWin) =>{
    if(userWin){
        console.log("You Won")
        msg.innerText = "You Won!"
        changeColor2()
    }
    else{
        console.log("You Lost")
        msg.innerText = "Lost"
        changeColor()
        
    }
}

//user Score-Box

const userScorebox = (userWin) =>{
    if(userWin){
        Userscore += 1
        console.log("Adding one point to user")
        document.getElementById("scoreOfuser").innerText= Userscore
    }
    //Computer Score-Box
    else{
        Compterscore += 1
        console.log("Adding one point to Computer")
        document.getElementById("scoreOfcomputer").innerText =Compterscore
    }

}

//changing color function
function changeColor(){
    let box = document.getElementById("msgcontainer")
    box.style.backgroundColor ="Red"
}

function changeColor2(){
    let box3 = document.getElementById("msgcontainer")
    box3.style.backgroundColor ="pink"
}

function changeColor3(){
    let box2 = document.getElementById("msgcontainer")
    box2.style.backgroundColor ="white"
}






