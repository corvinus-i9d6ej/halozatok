

var faktoriális = function (n) {
    let er = 1;
    for (var i = 2; i <= n; i++) {
        er = er * i;
    }
    return er;
}

var binomialis = function (n, k) {
    var er = faktoriális(n) / (faktoriális(k) * faktoriális(n - k));
    return er;
}



window.onload = function () {
    
    let eleres = document.getElementById("pascal")
    for (var s = 0; s < 10; s++) {
        let sor = document.createElement("div");
        sor.classList.add("sor");
        eleres.appendChild(sor);
        for (var o = 0; o <= s; o++) {
            let szám = document.createElement("div");
            szám.classList.add("elem");
            sor.appendChild(szám);
            szám.innerText = binomialis(s,o);
            szám.style.color = `rgb(${255 / binomialis(s, o)},0,${255 / binomialis(s, o)})`;
        }
    }
}



