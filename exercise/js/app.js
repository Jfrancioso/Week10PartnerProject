const maxNumberVariableCanBe = 10; //is inclusive, so this creates 9 
const maxNumberAnswerCanBe = maxNumberVariableCanBe * maxNumberVariableCanBe;



//get elements by querySelector from the DOM
const problemSection = document.getElementById('problem');
const currentProblemCounter = document.querySelector('.CurrentProblem');
const currentScore = document.querySelector('.currentScore');
const answersList = document.querySelectorAll('.li');
const startOverButton = document.querySelector('.btnStartOver');
const summaryScreen = document.querySelectorAll('.show-hide');
const mainElement = document.querySelector('.main');

//initialize the score/problemSet/currentProblemIndex/generates 10 problems
let score = 0;
let problemSet = generateProblemSet(10);
let currentProblemIndex = 0;

//add an event listener to update the score if the answer is correct

answersList.foreach((answer, index) => {
    answer.addEventListener('click', () => {
        const isCorrect = checkAnswer(problemSet[currentProblemIndex], index)
        if (isCorrect) {
            score++;
            currentScore.textContent = score;
        }
        currentProblemIndex++;
        if (currentProblemIndex < problemSet.Length) {
            displayProblem[problemSet[currentProblemIndex]]
        } else {
            summaryScreen.forEach(problemSet => {
                //lement.remove('hidden');
            });


        }
    });
})


getRandomNumber();

/**
 * Utility function to generate a random number based on max
 * maxNumber declared at top (currently set to 10 so range is 0-9)
 */
function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

/**
 * Utility function to shuffle the items in an array
 * @param {object} arr
 */
function shuffleArray(arr) {
    return arr.sort(function(a, b) { return Math.random() - 0.5 })
}



document.addEventListener('DOMContentLoaded', () => {
    //FUNCTION CALLS



    //EVENT LISTENERS 
});