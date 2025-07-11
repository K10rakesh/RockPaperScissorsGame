let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userDisp=document.querySelector("#user-score");
const compDisp=document.querySelector("#comp-score");
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame=()=>{
    msg.innerText="The game is a draw.";
    msg.style.backgroundColor="yellow";
    msg.style.color="black";

}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        msg.innerText=`You Won! Your ${userChoice} beat ${compChoice}`;
        msg.style.backgroundColor="green";
        userDisp.innerText=userScore;
    }
    else{
        compScore++;
        msg.innerText=`You Lost. ${compChoice} beat your ${userChoice}`;
        msg.style.backgroundColor="red";
        compDisp.innerText=compScore;
    }
}
const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    console.log(`computer choice = ${compChoice}`);
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="rock"?true:false;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})
