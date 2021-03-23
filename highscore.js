var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clearBtn");
var goBack = document.querySelector("#goBackBtn");

clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});

var scoreList = localStorage.getItem("scoreList");
scoreList = JSON.parse(scoreList);

if (scoreList !== null) {
    for (var i = 0; i < scoreList.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = scoreList[i].userName + " " + scoreList[i].score;
        highScore.appendChild(createLi);

    }
}
goBack.addEventListener("click", function() {
    window.location.replace("./index.html");
})
;