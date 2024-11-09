
const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()
  
  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    totalCorrect++
  } else {
    
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })
  
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)
  
  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelent :)"
      break
    case (performance >= 70):
      message = "Very good :)"
      break
    case (performance >= 50):
      message = "Good"
      break
    default:
      message = "You could do better :("
  }

  $questionsContainer.innerHTML = 
  `
    <p class="final-message">
      You got ${totalCorrect} questions right of ${totalQuestions} questions!
      <span>Result: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Redo test
    </button>
  `
}


const questions = [
  {
    question: "In which century did dyslexia begin to be studied",
    answers: [
      { text: "XXI", correct: false },
      { text: "XX", correct: false },
      { text: "XVIII", correct: false },
      { text: "XIX", correct: true }
    ]
  },
  {
    question: "Which of these options is not a type of dyslexia",
    answers: [
      { text: "Mental dyslexia", correct: true },
      { text: "Mixed dyslexia", correct: false },
      { text: "Auditory dyslexia", correct: false },
      { text: "Visual dyslexia", correct: false }
    ]
  },
  {
    //"faced
    question: "Which of these options does not represent a difficulty faced by dyslexics",
    answers: [
      { text: 'Difficulty walking', correct: true },
      { text: 'Difficulty reading', correct: false },
      { text: 'Difficulty understanding what others say', correct: false },
      { text: "Difficulty speaking", correct: false }
    ]
  },
  {
    question: 'Which of the options below is not a treatment for dyslexia',
    answers: [
      { text: 'Speech therapy', correct: false },
      { text: 'Physical training', correct: true },
      { text: 'Therapy', correct: false },
      { text: 'psychopegadogia', correct: false }
    ]
  },
  {
    question: 'There are three levels of dyslexia: mild, moderate and severe',
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false }
    ]
  },
  {
    question: "Is dyslexia contagious",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true }
    ]
  },
  {
    question: "Is dyslexia considered a disability",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false }
    ]
  },
  {
    question: "Which of the tasks below does a person with dilexia have difficulty performing",
    answers: [
      { text: 'Exercise', correct: false },
      { text: 'manage small appliances', correct: false },
      { text: 'Mathematics', correct: true },
      { text: 'See', correct: false }
    ]
  },
  {
    question: "Dyslexia is more prevalent in women",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true }
    ]
  },
  {
    question: 'Which letter do people with dyslexia confuse with "d"',
    answers: [
      { text: 'a', correct: false },
      { text: 'f', correct: false },
      { text: 'p', correct: false},
      { text: 'b', correct: true }
    ]
  }
]