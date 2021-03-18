window.onload = function () {
    letöltés();
};

var kérdések;
var sorszám = 0;

function letöltés() {
    fetch("/questions.json")
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data))
};

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés!")
    console.log(d)
    kérdések = d;
    kérdésMegjelenítés(0)
};

function kérdésMegjelenítés(k) {
    document.getElementById("válasz1").classList.remove("jó", "rossz");
    document.getElementById("válasz2").classList.remove("jó", "rossz");
    document.getElementById("válasz3").classList.remove("jó", "rossz");
    document.getElementById("kérdés_szöveg").innerHTML = kérdések[k].questionText;
    document.getElementById("válasz1").innerHTML = kérdések[k].answer1;
    document.getElementById("válasz2").innerHTML = kérdések[k].answer2;
    document.getElementById("válasz3").innerHTML = kérdések[k].answer3;
    document.getElementById("kép").src = "https://szoft1.comeback.hu/hajo/" + kérdések[k].image;
};

function következő() {
    sorszám++;
    if (sorszám == kérdések.length) {
        sorszám = 0;
    }
    
    kérdésMegjelenítés(sorszám);
};

function előző() {
    sorszám--;
    if (sorszám < 0) {
        sorszám = kérdések.length-1;
    }
    
    kérdésMegjelenítés(sorszám);
};

function klikk(n) {
    if (n == kérdések[sorszám].correctAnswer) {
        document.getElementById("válasz" + n).classList.add("jó");
        console.log("jó");
    }
    else {
        document.getElementById("válasz" + n).classList.add("rossz");
        console.log("rossz");
    }
};