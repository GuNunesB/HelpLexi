
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
      message = "Excelente :)"
      break
    case (performance >= 70):
      message = "Muito bom :)"
      break
    case (performance >= 50):
      message = "Bom"
      break
    default:
      message = "Pode melhorar :("
  }

  $questionsContainer.innerHTML = 
  `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
    </button>
  `
}


const questions = [
  {
    question: "Qual século começou-se a estudar a dislexia",
    answers: [
      { text: "XXI", correct: false },
      { text: "XX", correct: false },
      { text: "XVIII", correct: false },
      { text: "XIX", correct: true }
    ]
  },
  {
    question: "Quais dessas opções não é um tipo de dislexia",
    answers: [
      { text: "Dislexia mental", correct: true },
      { text: "Dislexia mista", correct: false },
      { text: "Dislexia auditiva", correct: false },
      { text: "Dislexia visual", correct: false }
    ]
  },
  {
    //"enfrentada
    question: "Qual dessas opções não representa uma dificuldade enfrentada por disléxicos",
    answers: [
      { text: 'Dificuldade em andar', correct: true },
      { text: 'Dificuldade em ler', correct: false },
      { text: 'Dificuldade em entender o que os outros dizem', correct: false },
      { text: "Dificuldade em falar", correct: false }
    ]
  },
  {
    question: 'Qual das opções abaixo não é um tratamento para a dislexia',
    answers: [
      { text: 'Fonoaudiologia', correct: false },
      { text: 'Treinamento físico', correct: true },
      { text: 'Terapia', correct: false },
      { text: 'psicopegadogia', correct: false }
    ]
  },
  {
    question: 'Há três níves de dislexia: leve, moderado e grave',
    answers: [
      { text: "Verdadeiro", correct: true  },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Dislexia é contagiosa",
    answers: [
      { text: "Verdadeiro", correct: false  },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: "Dislexia é considerado uma deficiência",
    answers: [
      { text: "Verdadeiro", correct: true  },
      { text: "Falso", correct: false }
    ]
  },
  {
    question: "Qual das tarefas abaixo uma pessoa com dilexia tem dificuldade em realizar",
    answers: [
      { text: 'Exercício', correct: false },
      { text: 'manejar aparelhos pequenos', correct: false },
      { text: 'Matemática', correct: true },
      { text: 'Enxergar', correct: false }
    ]
  },
  {
    question: "Dislexia é mais predominante em mulheres",
    answers: [
      { text: "Verdadeiro", correct: false  },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: 'Qual letra pessoas com dislexia confundem com "d"',
    answers: [
      { text: 'a', correct: false },
      { text: 'f', correct: false },
      { text: 'p', correct: false},
      { text: 'b', correct: true  }
    ]
  }
]