// const questionContainer = document.getElementById("question-container");
// const questionElement = document.getElementById("question");
// const answerButtons = document.getElementById("answer-buttons");
// const nextButton = document.getElementById("next-btn");
// const restartButton = document.getElementById("restart-btn");
// const resultDiv = document.getElementById("result");

// let shuffledQuestions, currentQuestionIndex, score;

// function fetchQuestions() {
//   //fetch API Q :
//   fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple")
//     // handel the response from API
//   .then(async (response) => {
//       let data = await response.json();//json to fetch content
//       //.result array contain the Q => API
//       const questions = data.results.map((q) => ({
//         //map this array and create a new array
//         question: q.question,
//         answers:[
//           { text: q.correct_answer, correct: true },
//           ...q.incorrect_answers.map((a) => ({ text: a, correct: false })),
//         ],
//       }));
//       startQuiz(questions);
//     })
//     .catch((error) => {
//       console.log("Try Again, error fetch :(", error);
//     });
// }



// function startQuiz(questions) {
//   score = 0;
//   questionContainer.style.display = "flex";
//   shuffledQuestions = questions.sort(() => Math.random() - 0.5);
//   currentQuestionIndex = 0;
//   nextButton.classList.remove("hide");
//   restartButton.classList.add("hide");
//   resultDiv.classList.add("hide");
//   setNextQuestion();
// }

// function setNextQuestion() {
//   resetState();
//   showQuestion(shuffledQuestions[currentQuestionIndex]);
// }

// function showQuestion(question) {
//   questionElement.innerText = question.question;
//   question.answers.forEach((answer, index) => {
//     const inputGroup = document.createElement("div");
//     inputGroup.classList.add("input-group");

//     const radio = document.createElement("input");
//     radio.type = "radio";
//     radio.id = "answer" + index;
//     radio.name = "answer";
//     radio.value = index;

//     const label = document.createElement("label");
//     label.htmlFor = "answer" + index;
//     label.innerText = answer.text;

//     inputGroup.appendChild(radio);
//     inputGroup.appendChild(label);
//     answerButtons.appendChild(inputGroup);
//   });
// }

// function resetState() {
//   while (answerButtons.firstChild) {
//     answerButtons.removeChild(answerButtons.firstChild);
//   }
// }

// nextButton.addEventListener("click", () => {
//   const answerIndex = Array.from(
//     answerButtons.querySelectorAll("input")
//   ).findIndex((radio) => radio.checked);
//   if (answerIndex !== -1) {
//     if (shuffledQuestions[currentQuestionIndex].answers[answerIndex].correct) {
//       score++;
//     }
//     currentQuestionIndex++;
//     if (shuffledQuestions.length > currentQuestionIndex) {
//       setNextQuestion();
//     } else {
//       endQuiz();
//     }
//   } else {
//     alert("Please select an answer.");
//   }
// });

// restartButton.addEventListener("click", fetchQuestions);

// function endQuiz() {
//   questionContainer.style.display = "none";
//   nextButton.classList.add("hide");
//   restartButton.classList.remove("hide");
//   resultDiv.classList.remove("hide");
//   resultDiv.innerText = `Your final score: ${score} / ${shuffledQuestions.length}`;
// }

// // Fetch questions when the script is loaded
// fetchQuestions();


//===========================
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const resultDiv = document.getElementById("result");

let shuffledQuestions, currentQuestionIndex;
//let userAnswers = [];

function fetchQuestions() {
  //fetch API Q :
  fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple")
    // handel the response from API
  .then(async (response) => {
      let data = await response.json();//json to fetch content
      //.result array contain the Q => API
      const questions = data.results.map((q) => ({
        //map this array and create a new array
        question: q.question,
        answers:[
          { text: q.correct_answer, correct: true },
          ...q.incorrect_answers.map((a) => ({ text: a, correct: false })),
        ],
      }));
      startQuiz(questions);
    })
    .catch((error) => {
      console.log("Try Again, error fetch :(", error);
    });
}



function startQuiz(questions) {
  score = 0;
  questionContainer.style.display = "flex";
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  nextButton.classList.remove("hide");
  restartButton.classList.add("hide");
  resultDiv.classList.add("hide");
  setNextQuestion();
}
let userAnswers = [];
let score = 0;
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
  storeUserAnswer(); //this line to store the user's answer
}

// function storeUserAnswer() {
//   const answerIndex = Array.from(answerButtons.querySelectorAll("input"))
//     .findIndex((radio) => radio.checked);
//     //console.log("answer index")
//     //console.log(answerIndex)
//     //console.log({currentQuestionIndex})
//   userAnswers[currentQuestionIndex] = answerIndex;

//   if (answerIndex !== -1 && shuffledQuestions[currentQuestionIndex].answers[answerIndex].correct) {
//     score++;
//   }
// }
// function storeUserAnswer() {
//   const answerIndex = Array.from(answerButtons.querySelectorAll("input"))
//     .findIndex((radio) => radio.checked);
//   userAnswers[currentQuestionIndex] = answerIndex;

//   if (answerIndex !== -1 && shuffledQuestions[currentQuestionIndex].answers[answerIndex].correct) {
//     score++;
//   }
// }
//===========================================
function storeUserAnswer() {
  let answerIndex = Array.from(answerButtons.querySelectorAll("input"))
    .findIndex((radio) => radio.checked);
  userAnswers[currentQuestionIndex] = answerIndex;
}//loop
// function storeUserAnswer(){
  
// }










//===========================================
// function storeUserAnswer() {
//   const answerIndex = Array.from(answerButtons.querySelectorAll("input"))
//     .findIndex((radio) => radio.checked);

//   if (answerIndex !== -1) {
//     userAnswers[currentQuestionIndex] = answerIndex;
//   }
// }
// function storeUserAnswer() {
//   const answerIndex = Array.from(answerButtons.querySelectorAll("input"))
//     .findIndex((radio) => radio.checked);

//   console.log("Answer Index:", answerIndex);
//   console.log("Current Question Index:", currentQuestionIndex);

//   if (answerIndex !== -1) {
//     userAnswers[currentQuestionIndex] = answerIndex;

//     const currentQuestion = shuffledQuestions[currentQuestionIndex];
//     const selectedAnswer = currentQuestion.answers[answerIndex];

//     if (selectedAnswer.correct) {
//       score++;
//     }
//   }
// }

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer, index) => {
    const inputGroup = document.createElement("div");
    inputGroup.classList.add("input-group");

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.id = "answer" + index;
    radio.name = "answer";
    radio.value = index;

    const label = document.createElement("label");
    //label.htmlFor = "answer" + index;
    label.innerText = answer.text;//يكتب جوة  المربع 

    inputGroup.appendChild(radio);
    inputGroup.appendChild(label);
    answerButtons.appendChild(inputGroup);
  });
}

function resetState() {
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

nextButton.addEventListener("click", () => {
  const answerIndex = Array.from(
    answerButtons.querySelectorAll("input")
  ).findIndex((radio) => radio.checked);
  if (answerIndex !== -1) {
    if (shuffledQuestions[currentQuestionIndex].answers[answerIndex].correct) {
      score++;
    }
    currentQuestionIndex++;
    if (shuffledQuestions.length > currentQuestionIndex) {
      setNextQuestion();
    } else {
      endQuiz();
    }
  } else {
    alert("Please select an answer.");
  }
});

restartButton.addEventListener("click", fetchQuestions);

function endQuiz() {
  questionContainer.style.display = "none";
  nextButton.classList.add("hide");
  restartButton.classList.remove("hide");
  resultDiv.classList.remove("hide");

  let reviewText = `Your final score: ${score}/${shuffledQuestions.length}\n\nReview:\n`;

  shuffledQuestions.forEach((question, index) => {
    //console.log(question.answers)
    //console.log({userAnswers,index})
    const userAnswerIndex = userAnswers[index];
    //console.log("answer index")
    //console.log(userAnswerIndex)
    const userAnswer = userAnswerIndex !== undefined ? question.answers[userAnswerIndex]?.text : "No answer selected";
    const correctAnswer = question.answers.find((answer) => answer.correct).text;

    reviewText += `\nQuestion ${index + 1}\n`;
    reviewText += `User Answer: ${userAnswer}\n`;
    reviewText += `Correct Answer: ${correctAnswer}\n`;
  });

  resultDiv.innerText = reviewText;
}
// Fetch questions when the script is loaded
fetchQuestions();