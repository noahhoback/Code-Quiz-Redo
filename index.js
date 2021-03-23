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

var score = 0;
var questionNumberIndex = 0;
var currentTime = document.querySelector("#timerDiv");
var timer = document.querySelector("#startBtn");
var quizQuestionsDiv = document.querySelector("quizQuestionDiv");
var wrapper = document.querySelector("#wrapper");