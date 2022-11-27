/*
    Rock Paper Scissors with JQuery
    https://www.github.com/kutsalkiremitci
    27.11.2022
*/

let choice;
let choices = ["rock","paper","scissors"];
let computerChoice;
let elections = {
    "rock": {
        "rock": "draw",
        "paper": "win",
        "scissors": "lose"
    },
    "paper": {
        "paper": "draw",
        "scissors": "win",
        "rock": "win"
    },
    "scissors":{
        "scissors": "draw",
        "rock": "win",
        "paper": "lose"
    },
};
let messageStyles = {
    "draw": "warning",
    "win": "success",
    "lose": "danger"
};
/* Wrappers */
let choiceWrapper = $('.choice-wrapper');
let endGameWrapper = $('.endGame-wrapper');
let computerchoiceArea = $('.computerchoice');
let myChoiceArea = $('.myChoice');
let resultArea = $('.resultArea');

/* Select Your Choice */
$('div[data-choice]').on('click',function(){
    /* Hide & Show Wrappers */
    choiceWrapper.addClass('d-none');
    endGameWrapper.removeClass('d-none');

    /* Your Choice */
    choice = $(this).attr('data-choice');
    /* Computer Choice */
    computerChoice = choices[Math.floor(Math.random() * (choices.length))];

    /* Results */
    myChoiceArea.text(choice);
    computerchoiceArea.text(computerChoice);
    
    /* Message Style Type Set & Show */
    result = elections[computerChoice][choice];
    resultArea.addClass('text-' + messageStyles[result]);
    resultArea.text(result);
})
/* Play Again Btn */
$('.playAgain').on('click',function(){
    endGameWrapper.addClass('d-none');
    choiceWrapper.removeClass('d-none');
    resultArea.removeClass('text-' + messageStyles[result]);
})
