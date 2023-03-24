//get elements by querySelector from the DOM
const problemSection = document.getElementById('problem');
const currentProblemCounter = document.querySelector('.CurrentProblem');
const currentScore = document.querySelector('.currentScore');
const answersList = document.querySelectorAll('.li');
const startOverButton = document.querySelector('.btnStartOver');
const summaryScreen = document.querySelectorAll('.show-hide');


//initialize the score/problemSet/currentProblemIndex/generates 10 problems
let score = 0;
let problemSet = generateProblemSet(10);
let currentProblemIndex = 0;