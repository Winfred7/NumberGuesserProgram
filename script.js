let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//target generator
function generateTarget(){
  let randomNum=Math.floor(Math.random()*10);
  return randomNum;
}

//console.log(generateTarget());
//which guess wins
const compareGuesses= (humGuess,compGuess,target) =>{
 
     let differenceHum= Math.abs(humGuess-target);
     let differenceComp=Math.abs(compGuess-target);

    return differenceHum <= differenceComp 
     
       
     
}
//console.log(compareGuesses(3,6,generateTarget()));

//score board

const updateScore=function(winner){
     
    switch (winner){
      case 'human':
      humanScore +=1;
      break;
      case 'computer':
      computerScore +=1;
      break;
      default:
      break;
    }

}



const advanceRound=()=>  currentRoundNumber +=1;




