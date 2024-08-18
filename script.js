const quizQuestions = [
  {
    question: "Whose birthday is it?",
    options: ["Mine", "Yours", "Paji from Kuch Kuch Hota Hai"],
    correctOption: 2
  },
  {
    question: "Who is the cutest most prettiest girl?",
    options: ["Saanvi", "Saanvi", "Saanvi"],
    correctOption: 1
  },
  {
    question: "Who misses Saanvi the most?",
    options: ["Arnav", "Arnav", "Arnav"],
    correctOption: 1
  },
  {
    question: "Bonus Question: Is it your birthday?",
    options: ["Yes", "No"],
    redirect: "https://drive.google.com/uc?export=download&id=1CYA6dnZ-LaCcrX-RK6A5-C-zd1PFHlF6" // Your video URL
  }
];

let currentQuestionIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  loadQuestion();
});

function loadQuestion() {
  if (currentQuestionIndex >= quizQuestions.length) {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("quiz-result").textContent = "Quiz completed! 🎉";
    return;
  }

  const questionElement = document.getElementById("question");
  const option1 = document.getElementById("option1");
  const option2 = document.getElementById("option2");
  const option3 = document.getElementById("option3");

  const currentQuestion = quizQuestions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  option1.textContent = currentQuestion.options[0];
  option2.textContent = currentQuestion.options[1];
  option3.textContent = currentQuestion.options[2];
}

function checkAnswer(option) {
  const resultElement = document.getElementById("quiz-result");
  const currentQuestion = quizQuestions[currentQuestionIndex];

  if (currentQuestion.redirect) {
    // For the bonus question, redirect regardless of the answer
    setTimeout(() => {
      window.location.href = currentQuestion.redirect;
    }, 1500);
  } else {
    if (option === currentQuestion.correctOption) {
      resultElement.textContent = "Correct! 🎉";
    } else {
      resultElement.textContent = "Oops! That's not right, but it's okay! 😉";
    }
    currentQuestionIndex++;
    setTimeout(() => {
      resultElement.textContent = "";
      loadQuestion();
    }, 1500);
  }
}
