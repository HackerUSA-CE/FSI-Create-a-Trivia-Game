// Your Code Here
let userName = window.prompt('Please enter your name:')
let userScore = 0
let playAgain = true

function playGame(){
for(let i=0; i<questions.length; i++){
    console.log(questions[i]);
    let question = questions[i];
    let userAnswer = window.prompt(question.text);
    console.log(userAnswer);
    if(userAnswer === question.correctAnswer){
        userScore = userScore + 10
    }
}
window.alert(userName+ ', your score is: '+userScore)
}

while(playAgain === true){
    playGame();
    let userChoice = window.prompt('Would you like to play again? Y or N')
    if( userChoice === 'Y'){
        userScore = 0
        playAgain = true
    } else {
        playAgain = false
        window.alert('Thank you for playing!')
    }
}
