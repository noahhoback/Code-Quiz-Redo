/*Creating a variable for the multiple choice questions. Put them in an array, consisting of
'title' (the questions themselves), choices (the possible answers to the multiple choice questions), 
and answer (the correct answer to the question) */

var questions = [ 
    {
        title: "How do you call a function named 'myFunction'?",
        choices: ["call myFunction()","myFunction()", "call function myFunction()", "exe.myFunction"],
        answer: "myFunction()"
    }, 
    {
        title: "How do you write an IF statement in JavaScript?",
        choices: ["if i = 47","if (i == 47)","if i = 47 then","if i == 47 then"],
        answer: "if (i == 47)"
    },
    {
        title: "How do you add a comment in JavaScript code?",
        choices: ["//this is a comment", "<!--this is a comment-->","**this is a comment**","#this is a comment"],
        answer: "//this is a comment"
    },
    {
        title: "How do you write 'Wassup Planet?' in an alert box?",
        choices: ["alertBox('Wassup Planet?'","alert('Wassup Planet?')","msg('Wassup Planet?')","surprise('Wassup Planet')?"],
        answer: "alert('Wassup Planet?')"
    },
    {
        title: "What is the correct syntax for referring to an external script called 'JID.js'?",
        choices: ["<script href='JID.js'>","<script name='JID.js'>","<script source='JID.js'>","<script src='JID.js'>"],
        answer: "<script src='JID.js'>"
    },
    {
        title: "How do you find the number with the highest value of x and y?",
        choices: ["max(x,y)","top(x,y)","Math.max(x,y)","Mad.max(x,y)"],
        answer: "Math.max(x,y)"
    },
    {
        title: "Which of the following statements about Java Script is TRUE ?",
        choices: ["It can not handle dates and times","JavaScript is the same as Java","JavaScript is not case sensitive","JavaScript is an object-based scripting language"],
        answer: "JavaScript is an object-based scripting language"
    },
    {
        title: "Which operator assigns a value to a variable?",
        choices: ["x","*","=","^"],
        answer: "="
    },
    {
        title: "'function' and 'var' are examples of what?",
        choices: ["Keywords","Declaration Statements","Prototypes","Data Types"],
        answer: "Declaration Statements"
    },
    {
        title: "Which of the following is the correct way to start a FOR loop?",
        choices: ["for i = 1 through 47","for (i = 0; i <= 47; i++)","for (i = 0; i <= 47)","loop (i <= 47)"],
        answer: "for (i = 0; i <= 47; i++)"
    },
    {
        title: "Which of the following is not a JavaScript Operator?",
        choices: ["typeof","delete","this","new"],
        answer: "this"
    },
    {
        title: "What happens if you use parseInt() to convert a string that contains a decimal value?",
        choices: ["It returns an error message","It returns only the integer portion of the number","It returns the decimal value in string form","None of the above"],
        answer: "It returns the decimal value in string form"
    },
    {
        title: "Inside which HTML element do we put JavaScript?",
        choices: ["<js>","<javascript>","<java>","<script>"],
        answer: "<script>"
    },
    {
        title: "JavaScript is designed to do what?",
        choices: ["Style HTML Pages","Execute queries related to databases on a server","Add interactivity to HTML pages","All of the above"],
        answer: "All of the above"
    },
    {
        title: "Where is the correct place to insert JavaScript?",
        choices: ["Inside the <body> section","Inside the <head> section","Both are correct","Neither are correct"],
        answer: "Both are correct"
    },


];

//Declared Variables
var score = 0;
var questionNumberIndex = 0;
var currentTime = document.querySelector("#timerDiv"); 
var timer = document.querySelector("#startBtn");
var quizQuestionDiv = document.querySelector("#quizQuestionDiv");
var wrapper = document.querySelector("#wrapper");
//Timer set to 10 seconds per question
var secondsLeft = 150;
var holdInterval = 0;
//setting value of wrongAnswer to 10; later code will use this to deduct 10 seconds from "secondsLeft" when an incorrect answer is selected
var wrongAnswer = 10;
var ulCreateElement = document.createElement("ul");

//event listener to start timeer when startBtn is clicked
timer.addEventListener("click", function () {

    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time Left " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Your time has run out!";
            }
     }, 1000);
   }
    render(questionNumberIndex);
});
//rendering the multiple choice questions and answers to the page
function render(questionNumberIndex) {
    quizQuestionDiv.innerHTML = "";
    ulCreateElement.innerHTML = "";

    for (var i = 0; i < questions.length; i++) {
        var userQuestions = questions[questionNumberIndex].title;
        var userAnswerChoices = questions[questionNumberIndex].choices;
        quizQuestionDiv.textContent = userQuestions;
    }

    userAnswerChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        quizQuestionDiv.appendChild(ulCreateElement);
        ulCreateElement.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}

//comparing the user's selected answer choice with the correct answer
function compare(event) {
    var element = event.target;

    if(element.matches("li")) {
        var createDivContainer = document.createElement("div");
        createDivContainer.setAttribute("id", "createDivContainer");

        if (element.textContent == questions[questionNumberIndex].answer) {
            score++;
            createDivContainer.textContent = "You are correct! The answer was: " + questions[questionNumberIndex].answer;

        } else {
            secondsLeft = secondsLeft - wrongAnswer;
            createDivContainer.textContent = "You are wrong! The correct answer was " + questions[questionNumberIndex].answer;
        }

    }
    questionNumberIndex++;

    if (questionNumberIndex >= questions.length) {
        allDone();
        createDivContainer.textContent = "The quiz is over!" + " " + "You got " + score + "/" + questions.length + " correct!";
    } else {
        render(questionNumberIndex);
    }
    quizQuestionDiv.appendChild(createDivContainer);

}

//function for completion of the quiz, appends to last page
function allDone() {
    quizQuestionDiv.innerHTML = "";
    currentTime.innerHTML = "";

    var createHeader = document.createElement("h1");
    createHeader.setAttribute("id", "createHeader");
    createHeader.textContent = "All Done!"

    quizQuestionDiv.appendChild(createHeader);

    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    quizQuestionDiv.appendChild(createP);


//converts timeRemaining to score
    if (secondsLeft >= 0) {
        var remainingTime = secondsLeft;
        var createP2 = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = "Your final score is: " + remainingTime;

        quizQuestionDiv.appendChild(createP2);
    }

    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your name: ";
    quizQuestionDiv.appendChild(createLabel);

    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "userName");
    createInput.textContent = "";
    quizQuestionDiv.appendChild(createInput);

    var createSubmitBtn = document.createElement("button");
    createSubmitBtn.setAttribute("type", "submit");
    createSubmitBtn.setAttribute("id", "submitBtn");
    createSubmitBtn.textContent = "Submit";
    quizQuestionDiv.appendChild(createSubmitBtn);

    
// event listener that takes in user's name and local storage for var 'userName' and score
    createSubmitBtn.addEventListener("click", function() {
        var userName = createInput.value;

        if (userName === null) {
            console.log("No name was entered!");

        } else {
            var finalScore = {
                userName: userName,
                score: remainingTime
            }
            console.log(finalScore);
            var scoreList = localStorage.getItem("scoreList");
            if (scoreList === null) {
                scoreList = [];
            }else {
                scoreList = JSON.parse(scoreList);
            }
            scoreList.push(finalScore);
            var newScore = JSON.stringify(scoreList);
            localStorage.setItem("scoreList", newScore);

            window.location.replace("highscore.html");
            
            }
    });

}
 