var titulos = "aplico";
f_titulos();
$("#n_pagina").html('205');

document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 2);
});


document.getElementById("pre5a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre5a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre5a"), 2);
});

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;

var cor = 0;
cont = 1,
    ejer = 1,
    itemsT = 10,
    inc = 0,
    calificacion = 10;


// #region Pregunta1
function pregunta1() {
    var pre1a = document.getElementById("pre1a").value;
    tpre1 = pre1a;
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2
p2vec1 = [
    '<div class="col-sm-4 table-responsive">                            <input type="text" maxlength="2" size="10" style="width:40px;height: 40px;font-size: 20px;text-align: center;border:solid 2px #F06D85;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="2">esperando al heladero<br><br>                        </div>',
    '<div class="col-sm-4 table-responsive">                            <input type="text" maxlength="2" size="10" style="width:40px;height: 40px;font-size: 20px;text-align: center;border:solid 2px #F06D85;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="1">A la vuelta de la esquina<br><br>                        </div>',
    '<div class="col-sm-4 table-responsive">                            <input type="text" maxlength="2" size="10" style="width:40px;height: 40px;font-size: 20px;text-align: center;border:solid 2px #F06D85;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="14">y se fue con ella.<br><br>                        </div>',
    '<div class="col-sm-4 table-responsive">                            <input type="text" maxlength="2" size="10" style="width:40px;height: 40px;font-size: 20px;text-align: center;border:solid 2px #F06D85;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="6">y le dio dinero.<br><br>                        </div>',
    '<div class="col-sm-4 table-responsive">                            <input type="text" maxlength="2" size="10" style="width:40px;height: 40px;font-size: 20px;text-align: center;border:solid 2px #F06D85;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="7">Pasó un trapecista<br><br>                        </div>',
    '<div class="col-sm-4 table-responsive">                            <input type="text" maxlength="2" size="10" style="width:40px;height: 40px;font-size: 20px;text-align: center;border:solid 2px #F06D85;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="12">y le dio un huesito.<br><br>                        </div>',
    '<div class="col-sm-4 table-responsive">                            <input type="text" maxlength="2" size="10" style="width:40px;height: 40px;font-size: 20px;text-align: center;border:solid 2px #F06D85;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="11">Pasó un perrito<br><br>                        </div>',
    '<div class="col-sm-4 table-responsive">                            <input type="text" maxlength="2" size="10" style="width:40px;height: 40px;font-size: 20px;text-align: center;border:solid 2px #F06D85;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="9">Pasó un soldado<br><br>                        </div>',
    '<div class="col-sm-4 table-responsive">                            <input type="text" maxlength="2" size="10" style="width:40px;height: 40px;font-size: 20px;text-align: center;border:solid 2px #F06D85;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="13">Pasó una doncella<br><br>                        </div>',
    '<div class="col-sm-4 table-responsive">                            <input type="text" maxlength="2" size="10" style="width:40px;height: 40px;font-size: 20px;text-align: center;border:solid 2px #F06D85;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="10">y le dio un helado.<br><br>                        </div>',
    '<div class="col-sm-4 table-responsive">                            <input type="text" maxlength="2" size="10" style="width:40px;height: 40px;font-size: 20px;text-align: center;border:solid 2px #F06D85;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="5">Pasó un marinero<br><br>                        </div>',
    '<div class="col-sm-4 table-responsive">                            <input type="text" maxlength="2" size="10" style="width:40px;height: 40px;font-size: 20px;text-align: center;border:solid 2px #F06D85;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="4">para comprarse un barquillo.<br><br>                        </div>',
    '<div class="col-sm-4 table-responsive">                            <input type="text" maxlength="2" size="10" style="width:40px;height: 40px;font-size: 20px;text-align: center;border:solid 2px #F06D85;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="2">estaba el señor Jaramillo,<br><br>                        </div>',
    '<div class="col-sm-4 table-responsive">                            <input type="text" maxlength="2" size="10" style="width:40px;height: 40px;font-size: 20px;text-align: center;border:solid 2px #F06D85;border-radius:10px" class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="8">y le dio una revista.<br><br>                        </div>'
];
p2vec1.sort(f_randomico);
$('#li2').html(p2vec1);

function pregunta2() {
    var respuestas = document.getElementsByClassName("respuestas2");
    var soluciones = document.getElementsByClassName("solucion2");
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
    tpre2 = ((nota * 2) / 10);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Pregunta3
p3vec1 = [
    '<div class="col-sm-6 table-responsive">castaños <input type="text"  size="10" style="width:80px;font-size: 20px;text-align: center;border:solid 2px #0F70B8;border-radius:10px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="años"><br><br></div>',
    '<div class="col-sm-6 table-responsive">cipreses <input type="text"  size="10" style="width:80px;font-size: 20px;text-align: center;border:solid 2px #0F70B8;border-radius:10px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="meses"><br><br></div>',
    '<div class="col-sm-6 table-responsive">judía <input type="text"  size="10" style="width:80px;font-size: 20px;text-align: center;border:solid 2px #0F70B8;border-radius:10px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="día"><br><br></div>',
    '<div class="col-sm-6 table-responsive">mora <input type="text"  size="10" style="width:80px;font-size: 20px;text-align: center;border:solid 2px #0F70B8;border-radius:10px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="hora"><br><br></div>',
    '<div class="col-sm-6 table-responsive">guisante <input type="text"  size="10" style="width:80px;font-size: 20px;text-align: center;border:solid 2px #0F70B8;border-radius:10px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="instante"><br><br></div>',
    '<div class="col-sm-6 table-responsive">granada <input type="text"  size="10" style="width:80px;font-size: 20px;text-align: center;border:solid 2px #0F70B8;border-radius:10px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="nada"><br><br></div>'
];
p3vec1.sort(f_randomico);
$('#li3').html(p3vec1);

function pregunta3() {
    var respuestas = document.getElementsByClassName("respuestas3");
    var soluciones = document.getElementsByClassName("solucion3");
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
    tpre3 = ((nota * 2) / 10);
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Pregunta4
var random2 = [
    ['<span class="enc2" id="1">Guardan una pista para adivinar la respuesta.</span>'],
    ['<span class="enc2" id="2">Sus frases son repetitivas y melodiosas.</span>'],
    ['<span class="enc2" id="3">Tratan sobre la vida cotidiana.</span>']
];

var randos = document.getElementsByClassName("imagen2");
random2.sort(f_randomico);
for (i = 0; i < randos.length; i++) {
    $("#" + randos[i].id).html(
        '<span width="50px">' + random2[i][0] + "</span> "
    );
}
$(".enc2").click(function() {
    if ($(this).hasClass("subrayar")) {
        $(this).removeClass("subrayar");
    } else {
        $(this).addClass("subrayar");
    }
});

function pregunta4() {
    var respr1 = 0,
        respr2 = 0;
    for (var i = 1; i <= 3; i++) {
        var caja = $("span[id=" + [i] + "]").text();
        if ($("#" + [i] + "").hasClass("subrayar")) {
            if (caja == "Sus frases son repetitivas y melodiosas." || caja == "Tratan sobre la vida cotidiana.") {
                respr1 = respr1 + 1;

                f_ok($("#" + [i] + ""));
                ($("#" + [i] + "")).removeClass('subrayar');
            } else {
                respr2 = respr2 + 1;
                f_no($("#" + [i] + ""));
                ($("#" + [i] + "")).removeClass('subrayar');
            }
        } else {}
    }

    var total = ((respr1 - respr2) * 2) / 2;
    if (total < 0) {
        total = 0;
        tpre4 = total;
    } else {
        tpre4 = total;
    }

    tpre4 = total.toFixed(2);
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Pregunta5
function pregunta5() {
    var pre5a = document.getElementById("pre5a").value;
    tpre5 = pre5a;
    $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}
// #endregion


// #region Calculo Nota Final
function NotaFinal() {
    var pre1a = document.getElementById("pre1a").value;
    if (pre1a == "") {
        alert("Pregunta 1: Califiqué la pregunta");
    } else {
        var pre5a = document.getElementById("pre5a").value;
        if (pre5a == "") {
            alert("Pregunta 5: Califiqué la pregunta");
        } else {
            pregunta1();
            pregunta2();
            pregunta3();
            pregunta4();
            pregunta5();

            cor =
                parseFloat(tpre1) +
                parseFloat(tpre2) +
                parseFloat(tpre3) +
                parseFloat(tpre4) +
                parseFloat(tpre5);
            Calculo_nota();
        }
    }
}
// #endregion