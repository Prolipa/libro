var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;
var tpre7 = 0;

p1vec1 = [];
p1vec2 = [];
for (var i = 0; i < 6; i++) {
    var num1 = parseInt((Math.random() * 10) + 1);
    $('#p1num' + [i] + '').html(num1);
    p1vec1.push(num1);
}

p1vec2.push((p1vec1[0]) * (p1vec1[1]));
$('#p1res0').html(p1vec2[0]);
p1vec2.push((p1vec1[2]) * (p1vec1[3]));
$('#p1res1').html(p1vec2[1]);
p1vec2.push((p1vec1[4]) * (p1vec1[5]));
$('#p1res2').html(p1vec2[2]);

function pregunta1() {
    var cor = 0;
    for (var i = 0; i < 6; i++) {
        var num = $("#nm" + [i] + "").val();
        if (p1vec1[i] == num) {
            cor++;
            f_ok($("#nm" + [i] + ""));
        } else {
            f_no($("#nm" + [i] + ""));
        }
    }

    for (var i = 0; i < 3; i++) {
        var num = $("#nmres" + [i] + "").val();
        if (p1vec2[i] == num) {
            cor++;
            f_ok($("#nmres" + [i] + ""));
        } else {
            f_no($("#nmres" + [i] + ""));
        }
    }
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
    var respu = ((nota / 10));

    var res = ((cor * 1) / 9) + respu;
    tpre1 = parseFloat(res / 2);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2
p3vec1 = [];
p3vec2 = [];
p3vec3 = ['10', '100', '1', '0'];
p3vec3.sort(f_randomico);
p3vec3.sort(f_randomico);
for (var i = 0; i < 4; i++) {
    n1 = parseInt(Math.random() * 40 + 1);

    n2 = p3vec3[i];
    p3vec1.push(n1);
    p3vec1.push(n2);
    $('#numa' + [i] + '').html(n1);
    $('#numb' + [i] + '').html(n2);
    if (i % 2 != 0) {
        p3vec2.push((p3vec1[i]) * (p3vec1[i - 1]));
    }
}
document.getElementById("pre2a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 1);
});

function pregunta2() {
    var pre2a = document.getElementById("pre2a").value;
    tpre2 = pre2a;
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Pregunta3

p3vec1 = [
    '<div class="col-sm-12" style="border: solid 1px #EEEDBC;">                                        <b>Tabla del 2</b><br>                                        <div class="col-sm-2">2 x 1 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="2"></div>                                        <div class="col-sm-2">2 x 2 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="4"></div>                                        <div class="col-sm-2">2 x 3 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="6"></div>                                        <div class="col-sm-2">2 x 4 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="8"></div>                                        <div class="col-sm-2">2 x 5 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="10"></div>                                        <div class="row"><br><br></div>                                        <div class="col-sm-2">2 x 6 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="12"></div>                                        <div class="col-sm-2">2 x 7 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="14"></div>                                        <div class="col-sm-2">2 x 8 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="16"></div>                                        <div class="col-sm-2">2 x 9 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="18"></div>                                        <div class="col-sm-2">2 x 10 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="20"></div>                                        <div class="row"><br><br></div>                                    </div>',
    '<div class="col-sm-12" style="border: solid 1px #EEEDBC;">                                        <b>Tabla del 7</b><br>                                        <div class="col-sm-2">7 x 1 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="7"></div>                                        <div class="col-sm-2">7 x 2 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="14"></div>                                        <div class="col-sm-2">7 x 3 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="21"></div>                                        <div class="col-sm-2">7 x 4 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="28"></div>                                        <div class="col-sm-2">7 x 5 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="35"></div>                                        <div class="row"><br><br></div>                                        <div class="col-sm-2">7 x 6 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="42"></div>                                        <div class="col-sm-2">7 x 7 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="49"></div>                                        <div class="col-sm-2">7 x 8 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="56"></div>                                        <div class="col-sm-2">7 x 9 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="63"></div>                                        <div class="col-sm-2">7 x 10 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="70"></div>                                        <div class="row"><br><br></div>                                    </div>',
    '<div class="col-sm-12" style="border: solid 1px #EEEDBC;">                                        <b>Tabla del 6</b><br>                                        <div class="col-sm-2">6 x 1 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="6"></div>                                        <div class="col-sm-2">6 x 2 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="12"></div>                                        <div class="col-sm-2">6 x 3 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="18"></div>                                        <div class="col-sm-2">6 x 4 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="24"></div>                                        <div class="col-sm-2">6 x 5 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="30"></div>                                        <div class="row"><br><br></div>                                        <div class="col-sm-2">6 x 6 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="36"></div>                                        <div class="col-sm-2">6 x 7 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="42"></div>                                        <div class="col-sm-2">6 x 8 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="48"></div>                                        <div class="col-sm-2">6 x 9 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="54"></div>                                        <div class="col-sm-2">6 x 10 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="60"></div>                                        <div class="row"><br><br></div>                                    </div>',
    '<div class="col-sm-12" style="border: solid 1px #EEEDBC;">                                        <b>Tabla del 9</b><br>                                        <div class="col-sm-2">9 x 1 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="9"></div>                                        <div class="col-sm-2">9 x 2 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="18"></div>                                        <div class="col-sm-2">9 x 3 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="27"></div>                                        <div class="col-sm-2">9 x 4 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="36"></div>                                        <div class="col-sm-2">9 x 5 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="45"></div>                                        <div class="row"><br><br></div>                                        <div class="col-sm-2">9 x 6 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="54"></div>                                        <div class="col-sm-2">9 x 7 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="63"></div>                                        <div class="col-sm-2">9 x 8 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="72"></div>                                        <div class="col-sm-2">9 x 9 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="81"></div>                                        <div class="col-sm-2">9 x 10 =<input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="90"></div>                                        <div class="row"><br><br></div>                                    </div>'
];
p3vec1.sort(f_randomico);
$('#div3').html(p3vec1);

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
    tpre3 = ((nota / 10) * 4);
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Pregunta4


function pregunta4() {
    var respuestas = document.getElementsByClassName("respuestas4");
    var soluciones = document.getElementsByClassName("solucion4");
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
    tpre4 = ((nota / 10));
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Pregunta5

function pregunta5() {
    var respuestas = document.getElementsByClassName("respuestas5");
    var soluciones = document.getElementsByClassName("solucion5");
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
    tpre5 = ((nota / 10));
    $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}
// #endregion

//pregunta 6

document.getElementById("pre6a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre6a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre6a"), 1);
});

function pregunta6() {
    var pre6a = document.getElementById("pre6a").value;
    tpre6 = pre6a;
    $("#pre6a").val(parseFloat(tpre6).toFixed(2));
} //

//pregunta 7


function pregunta7() {
    var respuestas = document.getElementsByClassName("respuestas7");
    var soluciones = document.getElementsByClassName("solucion7");
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
    tpre7 = ((nota / 10));
    $("#pre7a").val(parseFloat(tpre7).toFixed(2));
} //




// #region Calculo Nota Final
function NotaFinal() {
    var pre6a = document.getElementById("pre6a").value;
    if (pre6a == "") {
        alert("Pregunta 6: Califiqué la pregunta");
    } else {
        pregunta1();
        pregunta2();
        pregunta3();
        pregunta4();
        pregunta5();
        pregunta6();
        pregunta7();
        var Nf =
            parseFloat(tpre1) +
            parseFloat(tpre2) +
            parseFloat(tpre3) +
            parseFloat(tpre4) +
            parseFloat(tpre5) +
            parseFloat(tpre6) +
            parseFloat(tpre7);
        var Vtotal = Nf.toFixed(2);
        $("#txtNota").html(Vtotal);
        document.getElementById("bt_comprobar").disabled = true;
        $("input").attr('disabled', 'disabled');
    }
}