$("#n_pagina").html("256"); //impresion de pagina
var titulos = "exploro";
var cor = 0;
cont = 1,
    ejer = 1,
    itemsT = 10,
    inc = 0,
    calificacion = 10;


var tpre1 = 0;
var tpre5 = 0;


p2vec1 = [
    '<div class="col-sm-6 table-responsive">                                <input type="text" maxlength="2" size="1" style="width:40px;text-align: center;border:solid 2px #57B2E4;border-radius:20px;" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="8"><br><img src="img/i4_p256_act1.jpg" >                            <br><br></div>',
    '<div class="col-sm-6 table-responsive">                                <input type="text" maxlength="2" size="1" style="width:40px;text-align: center;border:solid 2px #57B2E4;border-radius:20px;" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="3"><br><img src="img/i3_p256_act1.jpg">                            <br><br></div>',
    '<div class="col-sm-6 table-responsive">                                <input type="text" maxlength="2" size="1" style="width:40px;text-align: center;border:solid 2px #57B2E4;border-radius:20px;" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="1"><br><img src="img/i2_p256_act1.jpg">                            <br><br></div>',
    '<div class="col-sm-6 table-responsive">                                <input type="text" maxlength="2" size="1" style="width:40px;text-align: center;border:solid 2px #57B2E4;border-radius:20px;" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="11"><br><img src="img/i1_p256_act1.jpg">                            <br><br></div>'
    ];
p2vec1.sort(f_randomico);
$('#li1').html(p2vec1);

function pregunta1() {
    var respuestas = document.getElementsByClassName("respuestas1");
    var soluciones = document.getElementsByClassName("solucion1");
    var valor = valor_pregunta(respuestas);
    var nota = 0;
    for (var i = 0; i < respuestas.length; i++) {
        if (
            verificar_contenido(
                respuestas[i].value.toLowerCase(),
                soluciones[i].value.toLowerCase().split("*")
            )
        ) {
            respuestas[i].classList.add("valid");
            respuestas[i].classList.remove("no-valid");
            nota += valor;
        } else {
            respuestas[i].classList.add("no-valid");
            respuestas[i].classList.remove("valid");
        }
    }
    tpre1 = ((nota / 10) * 5);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}




var resul = [],
    tmp, cor = 0,
    inc = 0,
    cont = 0,
    calificacion = 5,
    itemsT = 6,
    ejer = 1;
var totalC = 0,
    totalFinal = 0,
    total = 0;


var words = ['flaco', 'flecha', 'cofre', 'freno', 'flauta','frente'];
var gamePuzzle = wordfindgame.create(words, '#puzzle', '#words');
$('#solve').click(function() { wordfindgame.solve(gamePuzzle, words); });
var puzzle = wordfind.newPuzzle(words, { height: 20, width: 20, fillBlanks: false });
wordfind.print(puzzle);
function pregunta5() {
    var corr = 0;
    totalC = (cor * (calificacion / itemsT)).toFixed(2); //suma de calificacion cerrada

    tpre5 = (totalC);
    $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}




// #region Calculo Nota Final
function NotaFinal() {

    pregunta1();
    pregunta5();
    cor =
        parseFloat(tpre1) +
        parseFloat(tpre5);
    Calculo_nota();
}




// #endregion