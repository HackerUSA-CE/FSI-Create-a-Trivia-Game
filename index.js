let userName = window.prompt('Please enter your name:')

let wantsToPlay = true;

while(wantsToPlay){
    let userScore = 0;

    for(let i = 0; i < questions.length; i++){
        let question = questions[i]
        let userAnswer = window.prompt(question.text)
        if(userAnswer === question.correctAnswer){
            userScore = userScore + 10
            window.alert('Correct! Current Score: ' + userScore)
        } else {
            window.alert('Incorrect! Current Score: ' + userScore)
        }
    }

    window.alert('Your score is: '+userScore)

    let serializedGames = localStorage.getItem('games')

    let games;
    if(serializedGames === null){
        games = [] 
    } else {
        games = JSON.parse(serializedGames)
    }

    let game = {
        user: userName,
        score: userScore
    }

    games.push(game)

    serializedGames = JSON.stringify(games)
    localStorage.setItem('games', serializedGames)

    let highestScoringGame = games[0]
    for(let i = 0; i < games.length; i++){
        let game = games[i]
        if(game.score > highestScoringGame.score){
            highestScoringGame = game
        }
    }
    window.alert('The high score is: '+highestScoringGame.score+', the user was: ' + highestScoringGame.user)

    let personalHighestScoringGame = games[0]
    for(let i = 0; i < games.length; i++){
        let game = games[i]
        if(game.score > personalHighestScoringGame.score && game.user === userName){
            personalHighestScoringGame = game
        }
    }
    window.alert('Your personal best is: '+personalHighestScoringGame.score)
    
    let stillWantsToPlay = window.prompt('Do you want to play again?')
    if(stillWantsToPlay === 'yes'){
        wantsToPlay = true
    } else {
        wantsToPlay = false
    }
}