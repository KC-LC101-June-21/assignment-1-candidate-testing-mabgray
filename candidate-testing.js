const reply = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
  let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space?   ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

let questions = ["Who was the first American woman in space? ",
 "True or false: 5 kilometer == 5000 meters? " , "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit','Trajectory', 45], what entry is at index 2? ",
    "What is the minimum crew size for the ISS? "];


let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];

let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = reply.question("Candidate Name:  ");
  //let candidateName ="";

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //candidateAnswer = reply.question(question);
  
  for(let i = 0; i < questions.length; i++){
    let input = reply.question(questions[i]);
    candidateAnswers.push(input);
   
    
  }


}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


 /* if(correctAnswer === candidateAnswer) {
      console.log("Good job!");
  } else {
      console.log("Your answer is incorrect.");
  } */
console.log("\n");
console.log("Candidate Name: " + candidateName);
  
  let correct = 0;
  let total = candidateAnswers.length;
  for(let i = 0; i < total; i++) {
    console.log((i + 1) + ") " + questions[i]);
    console.log("Your Answer: " + candidateAnswers[i]);
    console.log("Correct Answer: " + correctAnswers[i]);
    console.log("\n");
    if(candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()) {
      //console.log(`your answer of ${candidateAnswers[i]} is correct`);
      correct++;
    } 
  }
  


  let grade = correct/total * 100;
  console.log(`\n>>> Overall Grade: ${grade} (${correct} out of ${total} responses correct) <<<`);

 
  if(grade >= 80) {
    console.log( ">>> Status: PASSED <<<" )
   
  }
  else {
    console.log( ">>> Status: FAILED <<<" );
  }
  


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //

  console.log("Hello, " + candidateName);
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};