//Create a data sheet of questions and answers.


const questions = [
    {
        question: "What's 9 + 10?",
        answers:[
            {text: "19", correct: false},
            {text: "21", correct: true},
            {text: "910", correct: false},
            {text: "90", correct: false},

        ]
    },
    {
        question: "Look at all those.....",
        answers:[
            {text: "Steak!", correct: false},
            {text: "Ribs!", correct: false},
            {text: "Chickens!", correct: true},
            {text: "Cheesecake!", correct: false},

        ]
    },
    {
        question: "What is 'delulu' short for?",
        answers:[
            {text: "Delicious", correct: false},
            {text: "Delusional", correct: true},
            {text: "Delaware", correct: false},
            {text: "Delayed", correct: false},

        ]
    },
    {
        question: "What does the acronym 'GOAT' stand for?",
        answers:[
            {text: "Goats on a Trip", correct: false},
            {text: "Girls of All Types", correct: false},
            {text: "Good Ol' American Truck", correct: false},
            {text: "Greatest of All Time", correct: true},
        ]
    },
    {
        question: "What does it mean when someone says you should 'touch grass'?",
        answers:[
            {text: "You should get off the internet and connect with the real world.", correct: true},
            {text: "You should use the computer more often.", correct: false},
            {text: "You should take better care of your lawn.", correct: false},
            {text: "You should get into gardening.", correct: false},

        ]
    },
];
// Getting IDs
let questonElement = document.getElementById("question");
let answerButtons = document.getElementById("answer-button");
let nextButton = document.getElementById("next-button");
let suggestButton = document.getElementById("suggest-button");

// Question number and score we are changing

let currentQuestionIndex = 0;
let score =0;


// Starting on Quiz

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion(); //To display Questions
}

// Goal: grabbing the question index and moving to the next question by one
function showQuestion() {

    
    resetState();
    let currentQuestion = questions[currentQuestionIndex]; 
    let questionNo = currentQuestionIndex + 1; //
    questonElement.innerHTML = questionNo + ". " + currentQuestion.question; //to grab the ext of the question

    // grabbing answers
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button"); 
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
// Getting rid of the template answers
function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
// when you click on a button it will show if you 
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++; //Adding to the score board.
    }else{
        selectedBtn.classList.add("incorrect");
    }
    // Makes it required for you to select an answer so you can go to the next question
    // Makes it so when you answer qrong it'll show you the answer but cant change the answer
    Array.from(answerButtons.children).forEach(button =>{
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

// Showing the results of players score
function showScore(){
    resetState();
    questonElement.innerHTML = `You scored ${score} out of  ${questions.length}!`
    nextButton.innerText = "Play Again?";
    nextButton.style.display = "block";
}






// go to the next question
function handleNextButton(){
    currentQuestionIndex++
    if (currentQuestionIndex<questions.length) {
        showQuestion();
    }else{
        showScore();
    }
};

nextButton.addEventListener("click", ()=>{
    if (currentQuestionIndex<questions.length) {
        handleNextButton();
    }else{
        startQuiz();
    }
});



startQuiz();