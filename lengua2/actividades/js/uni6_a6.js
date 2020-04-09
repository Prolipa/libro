$("#n_pagina").html("245"); //impresion de pagina
var cor = 0;
cont = 1,
    ejer = 1,
    itemsT = 10,
    inc = 0,
    calificacion = 10;


var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;



document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 5);
});
// #region Pregunta1
function pregunta1() {
    var pre1a = document.getElementById("pre1a").value;
    tpre1 = pre1a;
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}

// #endregion


var resul = [],
    tmp, cor = 0,
    inc = 0,
    cont = 0,
    calificacion = 5,
    itemsT = 5,
    ejer = 1;
var totalC = 0,
    totalFinal = 0,
    total = 0;


var words = ['libro', 'librería', 'librero', 'libreta', 'libreto'];
var gamePuzzle = wordfindgame.create(words, '#puzzle', '#words');
$('#solve').click(function() { wordfindgame.solve(gamePuzzle, words); });
var puzzle = wordfind.newPuzzle(words, { height: 20, width: 20, fillBlanks: false });
wordfind.print(puzzle);

function pregunta2() {
    var corr = 0;
    totalC = (cor * (calificacion / itemsT)).toFixed(2); //suma de calificacion cerrada

    tpre2 = (totalC);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}






// #region Calculo Nota Final
function NotaFinal() {
    var pre1a = document.getElementById("pre1a").value;
    if (pre1a == "") {
        alert("Pregunta 1: Califiqué la pregunta");
    } else {
        pregunta1();
        pregunta2();
        cor =
            parseFloat(tpre1) +
            parseFloat(tpre2);
        Calculo_nota();
    }
}



// #endregion