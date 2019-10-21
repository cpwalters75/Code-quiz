// Watched a video from web dev simplified 
//Variables start button, next button, questions and buttons
var startButton= document.getElementById('start-btn')
var nextButton= document.getElementById('next-btn')
var questionContainerElement = document.getElementById("question-container")
var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("answer-buttons")

//Variable to randomize the questions
var shuffledQuestions, currentQuestionIndex

//Start and Next click events 
startButton.addEventListener('click', startGame)
nextButton.addEventListener("click", () =>{
    currentQuestionIndex++
    setNextQuestion()

})
//Function to start game
function startGame(){
    console.log("started")
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

//Function so currect questions clears for next question
function setNextQuestion(){
    clearState()

    showQuestion (shuffledQuestions[currentQuestionIndex])


}
//Question appear
function showQuestion(question){
    
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add('btn')

    // if statment4 to check to see if the answer selected is the correct data attribute
        if (answer.correct) {
            button.dataset.correct = answer.corret
        }

    button.addEventListener("click", selectAnswer)
    answerButtonsElement.appendChild(button)
    })

   

}
// clear answer buttons for next set
function clearState() {
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(
            answerButtonsElement.firstChild
        )
    }
}
//Event target used to select answers 
function selectAnswer(e){
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)

    })

    // if else to run through the length of the questions 
    if (shuffledQuestions.length > currentQuestionsIndex + 1) {
        nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "restart"
        startButton.classList.remove("hide")

    }
    nextButton.classList.remove("hide")
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

//question variables 
var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            { text: "<javascript>", correct: false},
            { text: "<script>", correct: true},
            { text: "<scripting>", correct: false},
            { text: "<js>", correct: false}
        ]


    },
    {
        question: "How do you write Hello World in an alert box?",
        answers: [
            {text: "alert(Hello World)", correct: true},
            {text: "alertBox(Hello World)", correct: false},
            {text: "msgBox(Hello World)", correct: false}, 
            {text: "msg(Hello World)", correct: false}
         ]
     },
     {
         question: "How to write an IF statement for executing some code if i is NOT equal to 5?",
         answers:[
            {text: "if i =! 5 then", correct: false},
            {text: "if (i <>5)", correct: false},
            {text: "if(i!=5", correct: true}



         ]
     }




]