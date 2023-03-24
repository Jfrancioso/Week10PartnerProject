
const maxNumberVariableCanBe = 10;  //is inclusive, so this creates 9 
const maxNumberAnswerCanBe = maxNumberVariableCanBe * maxNumberVariableCanBe;



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
    return arr.sort(function (a, b) { return Math.random() - 0.5 })
  }



  document.addEventListener('DOMContentLoaded', () => {
    //FUNCTION CALLS


    //EVENT LISTENERS 
  });