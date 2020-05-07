var titulos = "aplico";
f_titulos();
$("#n_pagina").html('229');


document.getElementById("pre2a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 5);
});

var tpre2 = 0;
var tpre3 = 0;

var cor = 0;
cont = 1,
    ejer = 1,
    itemsT = 10,
    inc = 0,
    calificacion = 10;


// #region Pregunta1
p1vec=
[ 
'<div class="col-sm-4 table-responsive">                        <center><img src="img/i1_p229_act1.jpg" style="width:170px;height:130px"><br>                        <input type="text" size="10" style="width:140px;text-align: center;border:solid 4px #FCB018;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="diente de león"></center><br><br>                    </div>',
'<div class="col-sm-4 table-responsive">                        <center><img src="img/i2_p229_act1.jpg" style="width:170px;height:130px"><br>                        <input type="text" size="10" style="width:140px;text-align: center;border:solid 4px #0095DA;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="sábila"></center><br><br>                    </div>',
'<div class="col-sm-4 table-responsive">                        <center><img src="img/i3_p229_act1.jpg" style="width:170px;height:130px"><br>                        <input type="text" size="10" style="width:140px;text-align: center;border:solid 4px #72BF44;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="ortiga"></center><br><br>                    </div>',
'<div class="col-sm-4 table-responsive">                        <center><img src="img/i4_p229_act1.jpg" style="width:170px;height:130px"><br>                        <input type="text" size="10" style="width:140px;text-align: center;border:solid 4px #EE0964;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="llantén"></center><br><br>                    </div>',
'<div class="col-sm-4 table-responsive">                        <center><img src="img/i5_p229_act1.jpg" style="width:170px;height:130px"><br>                        <input type="text" size="10" style="width:140px;text-align: center;border:solid 4px #00A87E;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="matico"></center><br><br>                    </div>',
'<div class="col-sm-4 table-responsive">                        <center><img src="img/i6_p229_act1.jpg" style="width:170px;height:130px"><br>                        <input type="text" size="10" style="width:140px;text-align: center;border:solid 4px #00BBD5;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="achira"></center><br><br>                    </div>'
];
p1vec.sort(f_randomico);
$('#li1').html(p1vec);
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
    tpre1 = ((nota * 5) / 10);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2
function pregunta2() {
    var pre2a = document.getElementById("pre2a").value;
    tpre2 = pre2a;
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion


// #region Calculo Nota Final
function NotaFinal() {

        var pre2a = document.getElementById("pre2a").value;
        if (pre2a == "") {
            alert("Pregunta 2: Califiqué la pregunta");
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