console.log("quiz qpp");

const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")


let shuffledQuestions
let currentQuestionIndex

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})


function startGame(){
    //console.log("started");
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => {
        Math.random() - 0.5
    })
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
    //nextButton.classList.remove("hide")

}
function setNextQuestion(){
    //questionContainer.classList.remove("hide")
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answers => {
        const button = document.createElement("button")
        button.innerText = answers.text
        button.classList.add("btn")
        if(answers.correct){
            button.dataset.correct = answers.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}
function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}
function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove("hide")
    }else{
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }
    
}
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct){
        element.classList.add("correct")
    }else{
        element.classList.add("wrong")
    }
}
function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

const questions = [
    {
        question : "Who is the father of coding?",
        answers : [
            {text: "Dennis Ritchie", correct: true},
            {text: "Guido van Rossum ", correct: false},
            {text: "Charles Babbage", correct: false},
            {text: "Ada Lovelace", correct: false}
        ]
    },
    {
        question : "Who first started coding?",
        answers : [
            {text: "John Backus", correct: false},
            {text: "Dr. Grace Murray Hopper", correct: false},
            {text: "John McCarthy", correct: false},
            {text: "Ada Lovelace", correct: true}
        ]
    },
    {
        question : "When was first programming language developed?",
        answers : [
            {text: "1852", correct: false},
            {text: "1949", correct: false},
            {text: "1883", correct: true},
            {text: "1957", correct: false}
        ]
    },
    {
        question : "What is the oldest programming language?",
        answers : [
            {text: "Pascal", correct: false},
            {text: "Fortran ", correct: true},
            {text: "BASIC", correct: false},
            {text: "SQL", correct: false}
        ]
    },
    {
        question : "Who is the best coder in the world?",
        answers : [
            {text: "James Gosling.", correct: false},
            {text: "Gennady Korotkevich", correct: true},
            {text: "Tim Berners-Lee", correct: false},
            {text: "Ken Thompson", correct: false}
        ]
    }
]