var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;

$('.enc1').click(function() {
    if ($(this).hasClass('vacio')) {
        $(this).removeClass('vacio')
        $(this).addClass('subrayar1')
    } else if ($(this).hasClass('subrayar1')) {
        $(this).removeClass('subrayar1')
        $(this).removeClass('subrayar3')
        $(this).removeClass('subrayar4')
        $(this).addClass('subrayar2')
    }
    else if ($(this).hasClass('subrayar2')) {
        $(this).removeClass('subrayar2')
        $(this).removeClass('subrayar1')
        $(this).removeClass('subrayar4')
        $(this).addClass('subrayar3')
    }

    else if ($(this).hasClass('subrayar3')) {
        $(this).removeClass('subrayar3')
        $(this).removeClass('subrayar4')
        $(this).removeClass('subrayar1')
        $(this).addClass('subrayar4')
    } 
    else {
        $(this).removeClass('subrayar1')
        $(this).removeClass('subrayar2')
        $(this).removeClass('subrayar3')
        $(this).removeClass('subrayar4')
        $(this).addClass('vacio')
    }

});

function pregunta1() {
    var corr = 0;
    var inc = 0;
    for (var i = 1; i <= 100; i++) {
        var caja = $('span[id=' + [i] + ']').text();
        if (($('#' + [i] + '').hasClass("subrayar1") == true)) {

            if ((caja == "21") || (caja == "24") || (caja == "27") || (caja == "30") || (caja == "33") || (caja == "36") || (caja == "39")) {
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
        if (($('#' + [i] + '').hasClass("subrayar2") == true)) {

            if ((caja == "40") || (caja == "45") || (caja == "50") || (caja == "55") || (caja == "60")) {
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

        if (($('#' + [i] + '').hasClass("subrayar3") == true)) {

            if ((caja == "65") || (caja == "66") || (caja == "67") || (caja == "68") || (caja == "69") || (caja == "70") || (caja == "71")|| (caja == "72")|| (caja == "73")|| (caja == "74")) {
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

        if (($('#' + [i] + '').hasClass("subrayar4") == true)) {

            if ((caja == "75") || (caja == "77") || (caja == "79") || (caja == "81") || (caja == "83") || (caja == "85") || (caja == "87")) {
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
    var res = ((corr - inc) * 2) / 29;
    if (res < 0) {
        res = 0;
    } else {
        res;
    }
    tpre1 = parseFloat(res);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

p1vec1 = [];
for (i = 0; i < 1; i++) {
    n1 = parseInt(Math.random() * 49 + 10);
    n2 = parseInt(Math.random() * 48 + 10);
    if (n1 < n2) {
        i--;
    } else {
        p1vec1.push(n1);
        p1vec1.push(n2);
        p1vec1.push(n1 - n2);
    }
}
var num1 = p1vec1[0].toString().split("");
for (var i = 0; i < 2; i++) {
    $('#nlsa' + [i] + '').html(num1[i]);
}
var num1 = p1vec1[1].toString().split("");
for (var i = 2; i < 4; i++) {
    $('#nlsa' + [i] + '').html(num1[i - 2]);
}

p1vec2 = [];
for (i = 0; i < 1; i++) {
    n1 = parseInt(Math.random() * 49 + 10);
    n2 = parseInt(Math.random() * 48 + 10);
    if (n1 < n2) {
        i--;
    } else {
        p1vec2.push(n1);
        p1vec2.push(n2);
        p1vec2.push(n1 + n2);
    }
}
var num1 = p1vec2[0].toString().split("");
for (var i = 0; i < 2; i++) {
    $('#nlsb' + [i] + '').html(num1[i]);
}
var num1 = p1vec2[1].toString().split("");
for (var i = 2; i < 4; i++) {
    $('#nlsb' + [i] + '').html(num1[i - 2]);
}

p1vec3 = [];
for (i = 0; i < 1; i++) {
    n1 = parseInt(Math.random() * 49 + 10);
    n2 = parseInt(Math.random() * 48 + 10);
    if (n1 < n2) {
        i--;
    } else {
        p1vec3.push(n1);
        p1vec3.push(n2);
        p1vec3.push(n1 - n2);
    }
}
var num1 = p1vec3[0].toString().split("");
for (var i = 0; i < 2; i++) {
    $('#nlsc' + [i] + '').html(num1[i]);
}
var num1 = p1vec3[1].toString().split("");
for (var i = 2; i < 4; i++) {
    $('#nlsc' + [i] + '').html(num1[i - 2]);
}

p1vec4 = [];
for (i = 0; i < 1; i++) {
    n1 = parseInt(Math.random() * 49 + 10);
    n2 = parseInt(Math.random() * 48 + 10);
    if (n1 < n2) {
        i--;
    } else {
        p1vec4.push(n1);
        p1vec4.push(n2);
        p1vec4.push(n1 + n2);
    }
}
var num1 = p1vec4[0].toString().split("");
for (var i = 0; i < 2; i++) {
    $('#nlsd' + [i] + '').html(num1[i]);
}
var num1 = p1vec4[1].toString().split("");
for (var i = 2; i < 4; i++) {
    $('#nlsd' + [i] + '').html(num1[i - 2]);
}

p1vec5 = [];
for (i = 0; i < 1; i++) {
    n1 = parseInt(Math.random() * 49 + 10);
    n2 = parseInt(Math.random() * 48 + 10);
    if (n1 < n2) {
        i--;
    } else {
        p1vec5.push(n1);
        p1vec5.push(n2);
        p1vec5.push(n1 - n2);
    }
}
var num1 = p1vec5[0].toString().split("");
for (var i = 0; i < 2; i++) {
    $('#nlse' + [i] + '').html(num1[i]);
}
var num1 = p1vec5[1].toString().split("");
for (var i = 2; i < 4; i++) {
    $('#nlse' + [i] + '').html(num1[i - 2]);
}

p1vec6 = [];
for (i = 0; i < 1; i++) {
    n1 = parseInt(Math.random() * 49 + 10);
    n2 = parseInt(Math.random() * 48 + 10);
    if (n1 < n2) {
        i--;
    } else {
        p1vec6.push(n1);
        p1vec6.push(n2);
        p1vec6.push(n1 + n2);
    }
}
var num1 = p1vec6[0].toString().split("");
for (var i = 0; i < 2; i++) {
    $('#nlsf' + [i] + '').html(num1[i]);
}
var num1 = p1vec6[1].toString().split("");
for (var i = 2; i < 4; i++) {
    $('#nlsf' + [i] + '').html(num1[i - 2]);
}

function pregunta2() {
    var corr = 0;
    var resa1 = $("#nlra" + [0] + "").val() + $("#nlra" + [1] + "").val();

    if (p1vec1[2] == resa1) {
        corr++;
        f_ok($("#nlra0"));
        f_ok($("#nlra1"));
    } else {
        f_no($("#nlra0"));
        f_no($("#nlra1"));
        corr;
    }

    var resb1 = $("#nlrb" + [0] + "").val() + $("#nlrb" + [1] + "").val();

    if (p1vec2[2] == resb1) {
        corr++;
        f_ok($("#nlrb0"));
        f_ok($("#nlrb1"));
    } else {
        f_no($("#nlrb0"));
        f_no($("#nlrb1"));
        corr;
    }

    var resc1 = $("#nlrc" + [0] + "").val() + $("#nlrc" + [1] + "").val();

    if (p1vec3[2] == resc1) {
        corr++;
        f_ok($("#nlrc0"));
        f_ok($("#nlrc1"));
    } else {
        f_no($("#nlrc0"));
        f_no($("#nlrc1"));
        corr;
    }

    var resd1 = $("#nlrd" + [0] + "").val() + $("#nlrd" + [1] + "").val();

    if (p1vec4[2] == resd1) {
        corr++;
        f_ok($("#nlrd0"));
        f_ok($("#nlrd1"));
    } else {
        f_no($("#nlrd0"));
        f_no($("#nlrd1"));
        corr;
    }

    var rese1 = $("#nlre" + [0] + "").val() + $("#nlre" + [1] + "").val();

    if (p1vec5[2] == rese1) {
        corr++;
        f_ok($("#nlre0"));
        f_ok($("#nlre1"));
    } else {
        f_no($("#nlre0"));
        f_no($("#nlre1"));
        corr;
    }


    var resf1 = $("#nlrf" + [0] + "").val() + $("#nlrf" + [1] + "").val();

    if (p1vec6[2] == resf1) {
        corr++;
        f_ok($("#nlrf0"));
        f_ok($("#nlrf1"));
    } else {
        f_no($("#nlrf0"));
        f_no($("#nlrf1"));
        corr;
    }



    var result2 = (corr * 2) / 6;
    tpre2 = parseFloat(result2);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));

}
// #endregion

// #region Random3
var sum_total1 = 0;
var sum_total2 = 0;
var sum_total3 = 0;

$(".c_destino").html("");

$(".drag1").draggable({
    rever: "invalid",
    helper: "clone"
});
$(".drop1").droppable({
    accept: ".drag1",
    drop: function(e, ui) {
        ui.helper.clone().appendTo(this);
        $.each($(this).children(), function(index, value) {
            $(this).attr("style", "mix-blend-mode:multiply");
        });
        $(this)
            .find(".drop1")
            .draggable({ disabled: true });
        str = ui.draggable.attr("id"); //capturamos los IDS
        if (str == "b1") {
            sum_total1 += 100;
        }
    }
});

$(".drag2").draggable({
    rever: "invalid",
    helper: "clone"
});
$(".drop2").droppable({
    accept: ".drag2",
    drop: function(e, ui) {
        ui.helper.clone().appendTo(this);
        $.each($(this).children(), function(index, value) {
            $(this).attr("style", "mix-blend-mode:multiply");
        });
        $(this)
            .find(".drop2")
            .draggable({ disabled: true });
        str = ui.draggable.attr("id"); //capturamos los IDS
        if (str == "b1") {
            sum_total2 += 100;
        }
    }
});


$(".drag3").draggable({
    rever: "invalid",
    helper: "clone"
});
$(".drop3").droppable({
    accept: ".drag3",
    drop: function(e, ui) {
        ui.helper.clone().appendTo(this);
        $.each($(this).children(), function(index, value) {
            $(this).attr("style", "mix-blend-mode:multiply");
        });
        $(this)
            .find(".drop3")
            .draggable({ disabled: true });
        str = ui.draggable.attr("id"); //capturamos los IDS
        if (str == "b1") {
            sum_total3 += 100;
        }
    }
});
// #endregion

// #region Pregunta3
function pregunta3() {
    var cor = 0;
    if (sum_total1 == 500) {
        f_ok(".p3res1");
        cor = cor + 1;
    } else {
        f_no(".p3res1");
        cor;
    }
    if (sum_total2 == 600) {
        f_ok(".p3res2");
        cor = cor + 1;
    } else {
        f_no(".p3res2");
        cor;
    }
    if (sum_total3 == 200) {
        f_ok(".p3res3");
        cor = cor + 1;
    } else {
        f_no(".p3res3");
        cor;
    }

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
    var resul = nota / 10;

    var result3 = (cor * 1) / 3;
    tpre3 = parseFloat(result3 + resul);
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));

}
// #endregion

// #region Random4

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

// #region Random3
p5vec2 = [
    '<li class="table-responsive col-md-6" style="border: solid 2px #5DADE2">                            <div class="col-md-8">                                <img src="img/i1_p229_act5.jpg">                            </div>                                <div class="col-md-4">                                    <br>                                    <table class="table-bordered" style="text-align: center">                                        <tr>                                            <td width="50%"> <h4>                <font color="#EC407A"><b>D</b></font>            </h4>                                            </td>                                            <td width="50%"> <h4>                <font color="#2196F3"><b>U</b></font>            </h4>                                            </td>                                        </tr>                                        <tr>                                            <td><h4><b><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border: solid 1px #6583D3;border-radius: 10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="3"></b></h4>                                            </td>                                            <td><h4><b><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border: solid 1px #6583D3;border-radius: 10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="4"></b></h4>                                            </td>                                        </tr>                                        <tr>                                            <td><h4><b><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border: solid 1px #6583D3;border-radius: 10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="3"></b></h4>                                            </td>                                            <td><h4><b><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border: solid 1px #6583D3;border-radius: 10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="7"></b></h4>                                            </td>                                       </tr>                                        <tr style="border-top:2px solid #303F9F">                                            <td><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border: solid 1px #6583D3;border-radius: 10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="7"></td>                                            <td><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border: solid 1px #6583D3;border-radius: 10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="1"></td>                                        </tr>                                    </table>                                </div>                            </li>',
    '<li class="table-responsive col-md-6" style="border: solid 2px #5DADE2">                            <div class="col-md-8">                                <img src="img/i2_p229_act5.jpg">                            </div>                                <div class="col-md-4">                                    <br>                                    <table class="table-bordered" style="text-align: center">                                        <tr>                                            <td width="50%"> <h4>                <font color="#EC407A"><b>D</b></font>            </h4>                                            </td>                                            <td width="50%"> <h4>                <font color="#2196F3"><b>U</b></font>            </h4>                                            </td>                                        </tr>                                        <tr>                                            <td><h4><b><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border: solid 1px #6583D3;border-radius: 10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="6"></b></h4>                                            </td>                                            <td><h4><b><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border: solid 1px #6583D3;border-radius: 10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="7"></b></h4>                                            </td>                                        </tr>                                        <tr>                                            <td><h4><b><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border: solid 1px #6583D3;border-radius: 10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="1"></b></h4>                                            </td>                                            <td><h4><b><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border: solid 1px #6583D3;border-radius: 10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="9"></b></h4>                                            </td>                                        </tr>                                        <tr style="border-top:2px solid #303F9F">                                            <td><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border: solid 1px #6583D3;border-radius: 10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="8"></td>                                            <td><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border: solid 1px #6583D3;border-radius: 10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="6"></td>                                        </tr>                                    </table>                                </div>                            </li>',
    '<li class="table-responsive col-md-6" style="border: solid 2px #5DADE2">                            <div class="col-md-8">                                <img src="img/i3_p229_act5.jpg">                            </div>                                <div class="col-md-4">                                    <br>                                    <table class="table-bordered" style="text-align: center">                                        <tr>                                            <td width="50%"> <h4>                <font color="#EC407A"><b>D</b></font>            </h4>                                            </td>                                            <td width="50%"> <h4>                <font color="#2196F3"><b>U</b></font>            </h4>                                            </td>                                        </tr>                                        <tr>                                            <td><h4><b><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border: solid 1px #6583D3;border-radius: 10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="5"></b></h4>                                            </td>                                            <td><h4><b><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border: solid 1px #6583D3;border-radius: 10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="3"></b></h4>                                            </td>                                        </tr>                                        <tr>                                            <td><h4><b><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border: solid 1px #6583D3;border-radius: 10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="2"></b></h4>                                            </td>                                            <td><h4><b><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border: solid 1px #6583D3;border-radius: 10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="6"></b></h4>                                            </td>                                        </tr>                                        <tr style="border-top:2px solid #303F9F">                                            <td><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border: solid 1px #6583D3;border-radius: 10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="2"></td>                                            <td><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border: solid 1px #6583D3;border-radius: 10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="7"></td>                                        </tr>                                    </table>                                </div>                            </li>',
    '<li class="table-responsive col-md-6" style="border: solid 2px #5DADE2">                            <div class="col-md-8">                                <img src="img/i4_p229_act5.jpg">                            </div>                                <div class="col-md-4">                                    <br>                                    <table class="table-bordered" style="text-align: center">                                        <tr>                                            <td width="50%"> <h4>                <font color="#EC407A"><b>D</b></font>            </h4>                                            </td>                                            <td width="50%"> <h4>                <font color="#2196F3"><b>U</b></font>            </h4>                                            </td>                                        </tr>                                        <tr>                                            <td><h4><b><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border: solid 1px #6583D3;border-radius: 10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="5"></b></h4>                                            </td>                                            <td><h4><b><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border: solid 1px #6583D3;border-radius: 10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="0"></b></h4>                                            </td>                                        </tr>                                        <tr>                                            <td><h4><b><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border: solid 1px #6583D3;border-radius: 10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="2"></b></h4>                                            </td>                                            <td><h4><b><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border: solid 1px #6583D3;border-radius: 10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="8"></b></h4>                                            </td>                                        </tr>                                        <tr style="border-top:2px solid #303F9F">                                            <td><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border: solid 1px #6583D3;border-radius: 10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="2"></td>                                            <td><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align: center;border: solid 1px #6583D3;border-radius: 10px" class="border-blue respuestas5"><input type="hidden" style="color:blue" class="solucion5" value="2"></td>                                        </tr>                                    </table>                                </div>                            </li>'
];

p5vec2.sort(f_randomico);
$('#li5').html(p5vec2);
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
    tpre5 = nota / 5;
    $("#pre5a").val(parseFloat(tpre5).toFixed(2));
}
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    pregunta5();
    var Nf =
        parseFloat(tpre1) +
        parseFloat(tpre2) +
        parseFloat(tpre3) +
        parseFloat(tpre4) +
        parseFloat(tpre5);
    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal);
    document.getElementById("bt_comprobar").disabled = true;
}