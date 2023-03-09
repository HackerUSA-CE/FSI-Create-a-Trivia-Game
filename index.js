let userName = window.prompt('Please enter your name:')

for(let i = 0; i < questions.length; i++){
    let question = questions[i]
    let userAnswer = window.prompt(question.text)
    if(userAnswer === question.correctAnswer){
        console.log('Correct')
    }
}
