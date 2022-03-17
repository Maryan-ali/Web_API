var timeEl = document.querySelector(".time")
var secondsLeft = 10
const startButton = document.getElementById("start_btn")
const nextButton = document.getElementById("next_btn")
const questionContainerElements = document.getElementById("question_container")
const answerButtonsElement = document.getElementById("answer_buttons")

let shuffledQuestions, currentQuestionIndex
startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left on timer"

        if (secondLeft ===0) {
            clearInterval(timerInterval);
            setNextQuestion();
        }
    }, 1000);
}

function startGame() {
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(()=> Math.random()- .5)
    currentQuestionIndex = 0
    questionContainerElements.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
 
}
function showQuestion(question){
    QuestionContainerElements.innerText = question.question
    question.answers.forEach(answer =>{
        const button = document. createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })

} 

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setstatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setstatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex +1){
        nextButton.classList.remove("hide")
    } else{
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }

}

function setstatusClass(element,correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classlist.remove("correct")
    element.classlist.remove("wrong")
}

let questions = [
    {
        question: "What does DOM stand for?",
        answers: [
            {text: "Document Operation Manager", correct: false},
            {text: "Document Object Model", correct: true},
            {text: "Display Operation Method<", correct: false},
            {text: "Display Object Manager", correct: false}
        ]
    },
    {
        question: "What are the three types of languagues we have learned?",
        answers: [
            {text: "HTML, CSS and Javascript", correct: true},
            {text: "HTTPs, HTML, and CSS", correct: false},
            {text: "HTTPs, CSS,and Javascript", correct: false},
            {text: "HTTPs, HTML, an Javascript", correct: false}
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            {text: "Cascading Style Sheets", correct: true},
            {text: "Computer Standard Space", correct: false},
            {text: "Color Coding Script", correct: false},
            {text: "Computer Coding Script", correct: false}
        ]
    },
    {
        question: "Which of these is the squence to comment on html, CSS and Javascript, respectively?",
        answers: [
            {text: "<! ->,/* */, //", correct: true},
            {text: "//,/* */, **", correct: false},
            {text: "<! ->,//,/* */", correct: false},
            {text: "//,/* */, <! ->", correct: false}

        ]
    }
]