const maxNumberVariableCanBe = 10; //is inclusive, so this creates 9 
const maxNumberAnswerCanBe = maxNumberVariableCanBe * maxNumberVariableCanBe;
const numberOfProblemsInSet = 10; 

//initialize the score/problemSet/currentProblemIndex/generates 10 problems
let score = 0;
let problemSet = generateProblemSet(numberOfProblemsInSet);
let currentProblemIndex = 1;

//get elements by querySelector from the DOM
const problemSection = document.getElementById('problem');
const currentProblemCounter = document.querySelector('.CurrentProblem');
const currentScore = document.querySelector('.currentScore');
const answersList = document.querySelectorAll('.li');
const startOverButton = document.querySelector('.btnStartOver');
const summaryScreen = document.querySelectorAll('.show-hide');
const mainElement = document.querySelector('.main');


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



/**
 * Function to generate all 10 problems
 * @param {numberOfProblemsInSet} numberOfProblemsInSet 
 */
function generateProblemSet(numberOfProblemsInSet){}

/**
 * 
 * Creates a problem object
 */
function generateProblem(){
    const firstNumber = getRandomNumber(maxNumberVariableCanBe);
    const secondNumber = getRandomNumber(maxNumberVariableCanBe);
    const problemSolution = createCorrectAnswer(firstNumber, secondNumber);
    let answerArray = createWrongAnswers(problemSolution);
    answerArray.push(problemSolution);
    shuffleArray(answerArray);
    const problem = {
        firstNumber: firstNumber,
        secondNumber: secondNumber,
        problemSolution: problemSolution,
        answerArray: answerArray
    };
    return problem;
}

/**
 * Utility function to generate a random number based on max
 * @param {number} max 
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

/**
 * Solves the correct answer and adds it to the array of possibilites 
 * @param {number} firstNumber 
 * @param {number} secondNumber 
 */
function createCorrectAnswer(firstNumber, secondNumber){
    return firstNumber * secondNumber;;
}

/**
 * Utility function that generates 3 answers that are not equal to the correct answer and adds them to the array
 * @param {number} correctAnswer 
 */
  function createWrongAnswers(correctAnswer){
      let answerArray = [];
      let answer;
      for (let i = 1; i <= 3 ; i++){
        do{
            answer = getRandomNumber(maxNumberAnswerCanBe);
        }while(answer == correctAnswer);
        answerArray.push(answer);
      }
      return answerArray;
  }


document.addEventListener('DOMContentLoaded', () => {
    //FUNCTION CALLS



    //EVENT LISTENERS 
});