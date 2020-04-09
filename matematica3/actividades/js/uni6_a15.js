var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;
var tpre7 = 0;
var tpre8 = 0;
var tpre9 = 0;

var r = [];
for (var i = 0; i < 1; i++) {
    var n = [];
    for (i = 1; i < 5; i++) {
        n1 = parseInt((Math.random() * 3) + 2);

        $("#p4aux" + [i] + "").val(parseInt(n1));
        $("#p4aux" + [i] + "").attr("disabled", "true");
        n.push(n1);
    }
    n.push((n[0].toString()) + (n[1].toString()) + (n[2].toString()));
    n.push(n[3].toString());
    r.push((n[4]) * (n[5]));
}
for (var i = 0; i < 1; i++) {
    var n = [];
    for (i = 1; i < 5; i++) {
        n1 = parseInt((Math.random() * 3) + 2);

        $("#p4bux" + [i] + "").val(parseInt(n1));
        $("#p4bux" + [i] + "").attr("disabled", "true");
        n.push(n1);
    }
    n.push((n[0].toString()) + (n[1].toString()) + (n[2].toString()));
    n.push(n[3].toString());
    r.push((n[4]) * (n[5]));
}
for (var i = 0; i < 1; i++) {
    var n = [];
    for (i = 1; i < 5; i++) {
        n1 = parseInt((Math.random() * 2) + 1);

        $("#p4cux" + [i] + "").val(parseInt(n1));
        $("#p4cux" + [i] + "").attr("disabled", "true");
        n.push(n1);
    }
    n.push((n[0].toString()) + (n[1].toString()) + (n[2].toString()));
    n.push(n[3].toString());
    r.push((n[4]) * (n[5]));
}

function pregunta1() {
    var corr = 0;
    var res1 = $("#p4aux5").val() + $("#p4aux6").val() + $("#p4aux7").val() + $("#p4aux8").val();

    if (r[0] == res1) {
        corr++;
        f_ok($("#p4aux5"));
        f_ok($("#p4aux6"));
        f_ok($("#p4aux7"));
        f_ok($("#p4aux8"));
    } else {
        f_no($("#p4aux5"));
        f_no($("#p4aux6"));
        f_no($("#p4aux7"));
        f_no($("#p4aux8"));
        corr;
    }

    var res2 = $("#p4bux5").val() + $("#p4bux6").val() + $("#p4bux7").val() + $("#p4bux8").val();

    if (r[1] == res2) {
        corr++;
        f_ok($("#p4bux5"));
        f_ok($("#p4bux6"));
        f_ok($("#p4bux7"));
        f_ok($("#p4bux8"));
    } else {
        f_no($("#p4bux5"));
        f_no($("#p4bux6"));
        f_no($("#p4bux7"));
        f_no($("#p4bux8"));
        corr;
    }

    var res3 = $("#p4cux5").val() + $("#p4cux6").val() + $("#p4cux7").val() + $("#p4cux8").val();

    if (r[2] == res3) {
        corr++;
        f_ok($("#p4cux5"));
        f_ok($("#p4cux6"));
        f_ok($("#p4cux7"));
        f_ok($("#p4cux8"));
    } else {
        f_no($("#p4cux5"));
        f_no($("#p4cux6"));
        f_no($("#p4cux7"));
        f_no($("#p4cux8"));
        corr;
    }

    var res = (corr * 1) / 3;
    tpre1 = parseFloat(res);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2
p2vec1 = [
    '<div class="col-sm-6 text-question table-responsive">                                        <table>                                            <tr>                                                <td><span style="color:#005DA8 "><b>Serie del 5 </b></span></td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="5">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="10">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="15">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="20">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="25">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="30">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="35">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="40">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="45">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="50">.</td>                                            </tr>                                        </table><br>                                    </div>',
    '<div class="col-sm-6 text-question table-responsive">                                        <table>                                            <tr>                                                <td><span style="color:#005DA8 "><b>Serie del 7 </b></span></td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="7">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="14">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="21">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="28">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="35">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="42">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="49">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="56">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="63">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="70">.</td>                                            </tr>                                        </table><br>                                    </div>',
    '<div class="col-sm-6 text-question table-responsive">                                        <table>                                            <tr>                                                <td><span style="color:#005DA8 "><b>Serie del 9 </b></span></td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="9">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="18">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="27">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="36">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="45">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="54">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="63">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="72">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="81">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="90">.</td>                                            </tr>                                        </table><br>                                    </div>',
    '<div class="col-sm-6 text-question table-responsive">                                        <table>                                            <tr>                                                <td><span style="color:#005DA8 "><b>Serie del 4 </b></span></td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="4">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="8">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="12">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="16">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="20">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="24">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="28">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="32">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="36">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="40">.</td>                                            </tr>                                        </table><br>                                    </div>',
    '<div class="col-sm-6 text-question table-responsive">                                        <table>                                            <tr>                                                <td><span style="color:#005DA8 "><b>Serie del 2 </b></span></td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="2">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="4">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="6">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="8">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="10">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="12">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="14">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="16">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="18">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="20">.</td>                                            </tr>                                        </table><br>                                    </div>',
    '<div class="col-sm-6 text-question table-responsive">                                        <table>                                            <tr>                                                <td><span style="color:#005DA8 "><b>Serie del 8 </b></span></td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="8">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="16">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="24">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="32">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="40">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="48">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="56">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="64">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="72">,</td>                                                <td><input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 35px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="80">.</td>                                            </tr>                                        </table><br>                                    </div>'
];
p2vec1.sort(f_randomico);
$('#div2').html(p2vec1);

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
    tpre2 = ((nota / 10) * 3);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Pregunta3
p3vec1 = [];
p3vec2 = [];
p3vec3 = ['10', '100', '1', '0'];
p3vec3.sort(f_randomico);
for (var i = 0; i < 8; i++) {
    n1 = parseInt(Math.random() * 40 + 1);
    p3vec3.sort(f_randomico);
    n2 = p3vec3[0];
    p3vec1.push(n1);
    p3vec1.push(n2);
    $('#numa' + [i] + '').html(n1);
    $('#numb' + [i] + '').html(n2);
    if (i % 2 != 0) {
        p3vec2.push((p3vec1[i]) * (p3vec1[i - 1]));
    }
}

function pregunta3() {
    var cor = 0;
    for (var i = 0; i < 8; i++) {
        var num = $('#res' + [i] + '').val();
        if (p3vec2[i] == parseInt(num)) {
            f_ok($('#res' + [i] + ''));
            cor++;
        } else {
            f_no($('#res' + [i] + ''));
            cor;
        }
    }
    var result3 = (cor * 2) / 8;
    tpre3 = parseFloat(result3);
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Pregunta4
document.getElementById("pre4a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre4a"), 1);
});

function pregunta4() {
    var pre4a = document.getElementById("pre4a").value;
    tpre4 = pre4a;
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

// #region Pregunta5
document.getElementById("pre5a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre5a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre5a"), 2);
});

function pregunta5() {
    var pre5a = document.getElementById("pre5a").value;
    tpre5 = pre5a;
    $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}
// #endregion

//pregunta 6


function pregunta6() {
    var cor = 0;
    var p1vec1 = ['gelatina,quesadilla', 'gelatina,pastel', 'malteada,quesadilla', 'malteada,pastel'];
    var p1res1 = [];
    for (var i = 0; i < 4; i++) {
        p1res1.push($('#p1dcon' + (i + 1)).val() +
            ',' + $('#p1dco' + (i + 1)).val());
    }
    for (var i = 0; i < 4; i++) {
        var p1cont1 = 0;
        for (var j = 0; j < 4; j++) {
            if (p1res1[i] == p1vec1[j]) {
                p1cont1++;
                p1vec1[j] == 'a';
            } else { p1cont1; }
        }
        if (p1cont1 == '1') {
            cor++;
            f_ok($('#p1dcon' + (i + 1)));
            f_ok($('#p1dco' + (i + 1)));
        } else {
            f_no($('#p1dcon' + (i + 1)));
            f_no($('#p1dco' +
                (i + 1)));
        }
    }
    var res = ((cor * 1) / 4);
    tpre2 =
        parseFloat(res);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
} //




// #region Calculo Nota Final
function NotaFinal() {
    var pre4a = document.getElementById("pre4a").value;
    if (pre4a == "") {
        alert("Pregunta 4: Califiqué la pregunta");
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
            pregunta6();
            var Nf =
                parseFloat(tpre1) +
                parseFloat(tpre2) +
                parseFloat(tpre3) +
                parseFloat(tpre4) +
                parseFloat(tpre5) +
                parseFloat(tpre6);
            var Vtotal = Nf.toFixed(2);
            $("#txtNota").html(Vtotal);
            document.getElementById("bt_comprobar").disabled = true;
            $("input").attr('disabled', 'disabled');
        }
    }
}