window.onload = init;


var hotList = [];
var questionsInHotList = 3;
var displayedQuestion;
var numberOfQuestions;
var nextQuestion = 1;

var correctAnswer;

function kérdésBetöltés(questionNumber, destination) {
    fetch(`/questions/${questionNumber}`)
        .then(
            result => {
                if (!result.ok) {
                    console.error(`Hibás letöltés: ${result.status}`)
                }
                else {
                    return result.json()
                }
            }
        )
        .then(
            q => {
                hotList[destination].question = q;
                hotList[destination].goodAnswers = 0;
                console.log(`A ${questionNumber}. kérdés letöltve a hot list ${destination}. helyére`)
                if (displayedQuestion == undefined && destination == 0) {
                    displayedQuestion = 0;
                    kérdésMegjelenítés();
                }
            }
        );
} 

function init() {
    for (var i = 0; i < questionsInHotList; i++) {
        let q = {
            question: {},
            goodAnswers: 0
        }
        hotList[i] = q;
    }

    for (var i = 0; i < questionsInHotList; i++) {
        kérdésBetöltés(nextQuestion, i);
        nextQuestion++;
    }
}

function kérdésMegjelenítés() {
    let kérdés = hotList[displayedQuestion].question;
    console.log(kérdés);
    document.getElementById("válasz1").classList.remove("jó", "rossz");
    document.getElementById("válasz2").classList.remove("jó", "rossz");
    document.getElementById("válasz3").classList.remove("jó", "rossz");
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText;
    document.getElementById("válasz1").innerText = kérdés.answer1;
    document.getElementById("válasz2").innerText = kérdés.answer2;
    document.getElementById("válasz3").innerText = kérdés.answer3;
    correctAnswer = kérdés.correctAnswer;
    if (kérdés.image == "") {
        document.getElementById("kép").src = "";
    }
    else {
        document.getElementById("kép").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
    }
    
};

 
  

function következő() {
    displayedQuestion++;
    if (displayedQuestion == questionsInHotList - 1) displayedQuestion = 0;
    kérdésMegjelenítés()
};

function előző() {
    displayedQuestion++;
    if (displayedQuestion < 0) {
        displayedQuestion = 800;
    }
    kérdésMegjelenítés();
};

function klikk(n) {
    if (n == correctAnswer) {
        document.getElementById("válasz" + n).classList.add("jó");
        console.log("jó");
    }
    else {
        document.getElementById("válasz" + n).classList.add("rossz");
        console.log("rossz");
    }
};