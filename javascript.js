//Variables start button and  timeer 
var startButton= document.getElementById('start-btn')
var nextButton= document.getElementById('next-btn')
var questionContainerElement = document.getElementById("question-container")
var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("answer-buttons")

var shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame(){
    console.log("started")
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    clearState()

    showQuestion (shuffledQuestions[currentQuestionIndex])


}

function showQuestion(question){
    
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.corret
        }

    button.addEventListener("click", selectAnswer)
    answerButtonsElement.appendChild(button)
    })

   

}
function clearState() {
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(
            answerButtonsElement.firstChild
        )
    }
}

function selectAnswer(e){
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)

    })

}
function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct){
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}
function clearStatusClass(element){
    element.classList.remove("correct")
    element.classList.remove("wrong")
}
var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            { text: "<javascript>", correct: false},
            { text: "<script>", correct: true},
            { text: "<scripting>", correct: false},
            { text: "<js>", correct: false}
        ]


    }




]