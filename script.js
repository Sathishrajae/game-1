const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const div = document.querySelector('div')
const result = document.createElement('div')
const scores = document.createElement('div')
const winner = document.createElement('div')
let playerScore = 0
let computerScore = 0


function getComputerChoice(){
    let choices ='✊,🫲,✌';
    let newchoice = choices.split(',')
    let random = Math.floor((Math.random()*newchoice.length))
    let randomChoice = newchoice[random]
    return randomChoice
}


function gamerun(choices){
    const playerSelection = choices
    const computerSelection = getComputerChoice()
    playRound(playerSelection,computerSelection)
}

function endWinner(win){
    winner.textContent=`${win} won! . ${win} reached 5 points. `
    div.appendChild(winner)
    div.removeChild(result)
    playRound=false
    
}


function playRound(playerChoice,computerChoice){
    if(playerScore===5){
       endWinner('You')
       disablebutton();
    }
    else if(computerScore===5){
       endWinner('Computer')
       disablebutton();
    }
    let messageWin=`You win ${playerChoice} beats ${computerChoice}`
    if(playerChoice===computerChoice){
       result.textContent=`It\'s a draw`
        div.appendChild(result)
        
        
        
    }else if(playerChoice==='✊' && computerChoice==='✌'){
       result.textContent=`${messageWin}`
        div.appendChild(result)
        playerScore++
        
       
        
    }else if(playerChoice==='🫲' && computerChoice==='✊'){
       result.textContent=`${messageWin}`
        div.appendChild(result)
        playerScore++
        
    }else if(playerChoice==='✌' && computerChoice==='🫲'){
       result.textContent=`${messageWin}`
        div.appendChild(result)
        playerScore++
        
    }else{
       result.textContent=`You lose ${computerChoice} beats ${playerChoice}`
        div.appendChild(result)
        computerScore++
    }
    scores.textContent=`Player = ${playerScore}  Computer = ${computerScore}`
    div.appendChild(scores)
    
   
}

rock.addEventListener("click",(e)=>{
    const choiceNew1 = e.target.textContent
    const selRock = choiceNew1.toLowerCase()
    gamerun(selRock)

})
paper.addEventListener('click',(e)=>{
    const choiceNew1 = e.target.textContent
    const selPaper = choiceNew1.toLowerCase()
    gamerun(selPaper)

})
scissors.addEventListener('click',(e)=>{
    const choiceNew1 = e.target.textContent
    const selScissors = choiceNew1.toLowerCase()
    gamerun(selScissors)
    

})


