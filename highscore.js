var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clearBtn");
var goBack = document.querySelector("#goBackBtn");

//event listener to clear localstorage of the highscores when "clearBtn" is clicked
clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});


//an event listener to retrieve local storage for the high score list
var scoreList = localStorage.getItem("scoreList");
scoreList = JSON.parse(scoreList);

if (scoreList !== null) {
    for (var i = 0; i < scoreList.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = scoreList[i].userName + " " + scoreList[i].score;
        highScore.appendChild(createLi);

    }
}

//an event listener that takes user to home page when "goBackBtn" is clicked
goBack.addEventListener("click", function() {
    window.location.replace("./index.html");
})
;