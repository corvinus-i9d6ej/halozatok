window.onload = function () {
    kérdésBetöltés(sorszám);
};

var correctAnswer;
var kérdések;
var sorszám = 1;

function kérdésBetöltés(id) {
    fetch(`/questions/${id}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                return response.json()
            }
        })
        .then(data => kérdésMegjelenítés(data));
}  


function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés!")
    console.log(d)
    kérdések = d;
    kérdésMegjelenítés(0)
};

function kérdésMegjelenítés(kérdés) {
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
    sorszám++;
    if (sorszám == 800) {
        sorszám = 0;
    }
    
    kérdésBetöltés(sorszám);
};

function előző() {
    sorszám--;
    if (sorszám < 0) {
        sorszám = 800;
    }
    
    kérdésBetöltés(sorszám);
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