var titulos = "prueba";






var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
var tpre6 = 0;


document.getElementById("pre6a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre6a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre6a"), 1);
});

// #region Pregunta1


$('.enc1').click(function() {
    if ($(this).hasClass('vacio')) {
        $(this).removeClass('vacio')
        $(this).addClass('subrayar1')
    } else if ($(this).hasClass('subrayar1')) {
        $(this).removeClass('subrayar1')
        $(this).addClass('subrayar')
    } else {
        $(this).removeClass('subrayar')
        $(this).addClass('vacio')
    }

});

function pregunta1() {
    var corr = 0;
    var inc = 0;
    for (var i = 1; i <= 50; i++) {
        var caja = $('span[id=' + [i] + ']').text();
        if (($('#' + [i] + '').hasClass("subrayar1") == true)) {

            if ((caja == "52") || (caja == "54") || (caja == "56") || (caja == "58") || (caja == "60") || (caja == "62") || (caja == "64") || (caja == "66") || (caja == "68") || (caja == "70") || (caja == "72")) {
                corr++;
                $('#' + [i] + '').removeClass('subrayar');
                $('#' + [i] + '').removeClass('subrayar1');
                $('#' + [i] + '').addClass('correctoi');

            } else {
                inc++;
                $('#' + [i] + '').removeClass('subrayar');
                $('#' + [i] + '').removeClass('subrayar1');
                $('#' + [i] + '').addClass('incorrectoi');

            }

        }
        if (($('#' + [i] + '').hasClass("subrayar") == true)) {

            if ((caja == "73") || (caja == "76") || (caja == "79") || (caja == "82") || (caja == "85") || (caja == "88") || (caja == "91")) {
                corr++;

                $('#' + [i] + '').removeClass('subrayar');
                $('#' + [i] + '').removeClass('subrayar1');
                $('#' + [i] + '').addClass('correctoi');

            } else {
                inc++;

                $('#' + [i] + '').removeClass('subrayar');
                $('#' + [i] + '').removeClass('subrayar1');
                $('#' + [i] + '').addClass('incorrectoi');

            }

        }
    }
    var res = ((corr - inc) * 2) / 18;
    if (res < 0) {
        res = 0;
    } else {
        res;
    }
    tpre1 = parseFloat(res);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2
$('.enc2').click(function() {
    if ($(this).hasClass('vacio')) {
        $(this).removeClass('vacio')
        $(this).addClass('subrayar2')
    } else if ($(this).hasClass('subrayar2')) {
        $(this).removeClass('subrayar2')
        $(this).addClass('subrayar3')
    } else {
        $(this).removeClass('subrayar3')
        $(this).addClass('vacio')
    }

});

var p2num = [];
for (i = 0; i < 11; i++) {
    n1 = parseInt((Math.random() * 50) + 5);

    $("#num" + [i] + "").html(parseInt(n1));
    p2num.push(n1);


}

function pregunta2() {
    var corr = 0;
    var inc = 0;
    for (var i = 0; i <= 10; i++) {
        var caja = $('span[id=num' + [i] + ']').text();
        if (($('#num' + [i] + '').hasClass("subrayar2") == true)) {


            if (caja == p2num[i] && caja % 2 == 0) {
                corr++;
                $('#num' + [i] + '').removeClass('subrayar3');
                $('#num' + [i] + '').removeClass('subrayar2');
                $('#num' + [i] + '').addClass('correctoi');

            } else {
                inc++;
                $('#num' + [i] + '').removeClass('subrayar2');
                $('#num' + [i] + '').removeClass('subrayar3');
                $('#num' + [i] + '').addClass('incorrectoi');

            }
        }

        if (($('#num' + [i] + '').hasClass("subrayar3") == true)) {


            if (caja == p2num[i] && caja % 2 != 0) {
                corr++;
                $('#num' + [i] + '').removeClass('subrayar2');
                $('#num' + [i] + '').removeClass('subrayar3');
                $('#num' + [i] + '').addClass('correctoi');

            } else {
                inc++;
                $('#num' + [i] + '').removeClass('subrayar2');
                $('#num' + [i] + '').removeClass('subrayar3');
                $('#num' + [i] + '').addClass('incorrectoi');

            }
        }
    }


    var res = ((corr - inc) * 2) / 10;
    if (res < 0) {
        res = 0;
    } else {
        res;
    }
    tpre2 = parseFloat(res);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Random3

p3ve1 = [
    '<li class="col-sm-3">                                                <table class="table-bordered" style="text-align: center">                                                    <tr>                                                        <td width="4%"></td>                                                        <td width="48%"> <h4>                <font color="#EC407A"><b>D</b></font>            </h4>                                                        </td>                                                        <td width="48%"> <h4>                <font color="#2196F3"><b>U</b></font>            </h4>                                                        </td>                                                    </tr>                                                    <tr>                                                        <td></td>                                                        <td><h4><b>3</b></h4>                                                        </td>                                                        <td><h4><b>8</b></h4>                                                        </td>                                                    </tr>                                                    <tr>                                                        <td><h4><b>-</b></h4>                                                        </td>                                                        <td><h4><b>1</b></h4>                                                        </td>                                                        <td><h4><b>6</b></h4>                                                        </td>                                                    </tr>                                                    <tr style="border-top:2px solid #303F9F">                                                        <td></td>                                                        <td><input type="text" maxlength="1" size="1" style="width:50px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="2"></td>                                                        <td><input type="text" maxlength="1" size="1" style="width:50px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="2"></td>                                                    </tr>                                                </table>                                            </li>',
    '<li class="col-sm-3">                                                <table class="table-bordered" style="text-align: center">                                                    <tr>                                                        <td width="4%"></td>                                                        <td width="48%"> <h4>                <font color="#EC407A"><b>D</b></font>            </h4>                                                        </td>                                                        <td width="48%"> <h4>                <font color="#2196F3"><b>U</b></font>            </h4>                                                        </td>                                                    </tr>                                                    <tr>                                                        <td></td>                                                        <td><h4><b>4</b></h4>                                                        </td>                                                        <td><h4><b>3</b></h4>                                                        </td>                                                    </tr>                                                    <tr>                                                        <td><h4><b>+</b></h4>                                                        </td>                                                        <td><h4><b>4</b></h4>                                                        </td>                                                        <td><h4><b>6</b></h4>                                                        </td>                                                    </tr>                                                    <tr style="border-top:2px solid #303F9F">                                                        <td></td>                                                        <td><input type="text" maxlength="1" size="1" style="width:50px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="8"></td>                                                        <td><input type="text" maxlength="1" size="1" style="width:50px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="9"></td>                                                    </tr>                                                </table>                                            </li>',
    '<li class="col-sm-3">                                                <table class="table-bordered" style="text-align: center">                                                    <tr>                                                        <td width="4%"></td>                                                        <td width="48%"> <h4>                <font color="#EC407A"><b>D</b></font>            </h4>                                                        </td>                                                        <td width="48%"> <h4>                <font color="#2196F3"><b>U</b></font>            </h4>                                                        </td>                                                    </tr>                                                    <tr>                                                        <td></td>                                                        <td><h4><b>7</b></h4>                                                        </td>                                                        <td><h4><b>9</b></h4>                                                        </td>                                                    </tr>                                                    <tr>                                                        <td><h4><b>-</b></h4>                                                        </td>                                                        <td><h4><b>5</b></h4>                                                        </td>                                                        <td><h4><b>9</b></h4>                                                        </td>                                                    </tr>                                                    <tr style="border-top:2px solid #303F9F">                                                        <td></td>                                                        <td><input type="text" maxlength="1" size="1" style="width:50px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="2"></td>                                                        <td><input type="text" maxlength="1" size="1" style="width:50px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="0"></td>                                                    </tr>                                                </table>                                            </li>',
    '<li class="col-sm-3">                                                <table class="table-bordered" style="text-align: center">                                                    <tr>                                                        <td width="4%"></td>                                                        <td width="48%"> <h4>                <font color="#EC407A"><b>D</b></font>            </h4>                                                        </td>                                                        <td width="48%"> <h4>                <font color="#2196F3"><b>U</b></font>            </h4>                                                        </td>                                                    </tr>                                                    <tr>                                                        <td></td>                                                        <td><h4><b>1</b></h4>                                                        </td>                                                        <td><h4><b>6</b></h4>                                                        </td>                                                    </tr>                                                    <tr>                                                        <td><h4><b>+</b></h4>                                                        </td>                                                        <td><h4><b>8</b></h4>                                                        </td>                                                        <td><h4><b>2</b></h4>                                                        </td>                                                    </tr>                                                    <tr style="border-top:2px solid #303F9F">                                                        <td></td>                                                        <td><input type="text" maxlength="1" size="1" style="width:50px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="9"></td>                                                        <td><input type="text" maxlength="1" size="1" style="width:50px" class="border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="8"></td>                                                    </tr>                                                </table>                                            </li>'
];
p3ve1.sort(f_randomico);
$('#li3').html(p3ve1);

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
    tpre3 = nota / 5;
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
    tpre4 = nota / 5;
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
    tpre5 = nota / 10;
    $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}
// #endregion

// #region Pregunta6


function pregunta6() {
    var pre6a = document.getElementById("pre6a").value;
    tpre6 = pre6a;
    $("#pre6a").val(parseFloat(tpre6).toFixed(2));
}
// #endregion



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
// #endregion