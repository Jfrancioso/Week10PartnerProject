const maxNumberVariableCanBe = 10; //is inclusive, so this creates 9 
const maxNumberAnswerCanBe = maxNumberVariableCanBe * maxNumberVariableCanBe;
const numberOfProblemsInSet = 10;

//initialize the score/problemSet/currentProblemIndex/generates 10 problems
let score = 0;
let problemSet = generateProblemSet(numberOfProblemsInSet);
//set index to 0
let currentProblemIndex = 0;

//get elements by querySelector from the DOM
const problemSection = document.getElementById('problem');
const currentProblemCounter = document.querySelector('.CurrentProblem');
const currentScore = document.querySelector('.currentScore');
const answersList = document.querySelectorAll('.li');
const startOverButton = document.querySelector('.btnStartOver');
const summaryScreen = document.querySelectorAll('.show-hide');
const finalScore = document.querySelector('.finalScore');
const mainElement = document.querySelector('.main');


/**
 * Function to generate all 10 problems
 * @param {numberOfProblemsInSet} numberOfProblemsInSet 
 */
function generateProblemSet(numberOfProblemsInSet) {
    const problemSet = [];
    for (let i = 0; i < numberOfProblemsInSet; i++) {
        problemSet.push(generateProblem());
    }
    return problemSet;
}

/**
 * 
 * Creates a problem object
 */
function generateProblem() {
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
function createCorrectAnswer(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

/**
 * Utility function that generates 3 answers that are not equal to the correct answer and adds them to the array
 * @param {number} correctAnswer 
 */
function createWrongAnswers(correctAnswer) {
    let answerArray = [];
    let answer;
    for (let i = 1; i <= 3; i++) {
        do {
            answer = getRandomNumber(maxNumberAnswerCanBe);
        } while (answer == correctAnswer || answer.answerArray.includes(answer));
        answerArray.push(answer);
    }
    return answerArray;
}


document.addEventListener('DOMContentLoaded', () => {
    //FUNCTION CALLS


    /**
     * Function to display the problem and answer list for the current problem index
     * @param {object} problem 
     */
    function displayProblem(problem) {
        problemSection.textContent = `${problem.firstNumber} x ${problem.secondNumber} =`;
        currentProblemCounter.textContent = `Problem ${currentProblemIndex + 1} of ${numberOfProblemsInSet}`;
        currentScore.textContent = score;
        for (let i = 0; i < answersList.length; i++) {
            answersList[i].textContent = problem.answerArray[i];
        }
    }


    //EVENT LISTENERS just keeping this cause yah never know lol...

    // answersList.foreach((answer, index) => {
    //     answer.addEventListener('click', () => {
    //         const isCorrect = checkAnswer(problemSet[currentProblemIndex], index)
    //         if (isCorrect) {
    //             score++;
    //             currentScore.textContent = score;
    //         }
    //         currentProblemIndex++;
    //         if (currentProblemIndex < problemSet.Length) {
    //             displayProblem[problemSet[currentProblemIndex]]
    //         } else {
    //             summaryScreen.forEach(problemSet => {
    //                 element.classList.remove('hidden');
    //             });
    //             element.classList.add('hidden');

    //         }
    //     });
    // })




});
//display the first problem
displayProblem(problemSet[currentProblemIndex]);