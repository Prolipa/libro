var titulos = "evaluacion";


var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}
vec1 = [
    '<li class="col-sm-6">                                    <div class="fraction text-question">                                        <span class="fup">2</span>                                        <span class="bar">/</span>                                        <span class="fdn">6</span> </div>                                    <input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas1"> <input type="hidden" style="color:blue;" class="solucion1" value="<">                                    <div class="fraction text-question">                                        <span class="fup">5</span>                                        <span class="bar">/</span>                                        <span class="fdn">6</span> </div>                                </li>',
    '<li class="col-sm-6">                                    <div class="fraction text-question">                                        <span class="fup">8</span>                                        <span class="bar">/</span>                                        <span class="fdn">7</span> </div>                                    <input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas1"> <input type="hidden" style="color:blue;" class="solucion1" value=">">                                    <div class="fraction text-question">                                        <span class="fup">6</span>                                        <span class="bar">/</span>                                        <span class="fdn">7</span> </div>                                    <input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas1"> <input type="hidden" style="color:blue;" class="solucion1" value=">">                                    <div class="fraction text-question">                                        <span class="fup">3</span>                                        <span class="bar">/</span>                                        <span class="fdn">7</span> </div>                                </li>',
    '<li class="col-sm-6">                                    <div class="fraction text-question">                                        <span class="fup">7</span>                                        <span class="bar">/</span>                                        <span class="fdn">4</span> </div>                                    <input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas1"> <input type="hidden" style="color:blue;" class="solucion1" value="=">                                    <div class="fraction text-question">                                        <span class="fup">7</span>                                        <span class="bar">/</span>                                        <span class="fdn">4</span> </div>                                </li>',
    '<li class="col-sm-6">                                    <div class="fraction text-question">                                        <span class="fup">1</span>                                        <span class="bar">/</span>                                        <span class="fdn">8</span> </div>                                    <input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas1"> <input type="hidden" style="color:blue;" class="solucion1" value="<">                                    <div class="fraction text-question">                                        <span class="fup">5</span>                                        <span class="bar">/</span>                                        <span class="fdn">8</span> </div>                                    <input maxlength="1" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas1"> <input type="hidden" style="color:blue;" class="solucion1" value="<">                                    <div class="fraction text-question">                                        <span class="fup">8</span>                                        <span class="bar">/</span>                                        <span class="fdn">8</span> </div>                                </li>'
];
vec1.sort(f_randomico);
for (var i = 0; i < 6; i++) {
    $('#ol').html(vec1);
}


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
    tpre1 = nota / 5;
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion



vec2 = [
    '<li class="col-sm-6"><div class="table-responsive">                            <center><img src="img/i1_p172_act2.jpg"><br>                            <div class="fraction text-question"> <span class="fup"><input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="12"></span> <span class="bar">/</span> <span class="fdn"><input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="6"></span> </div> -                             <div class="fraction text-question"> <span class="fup"><input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="1"></span> <span class="bar">/</span> <span class="fdn"><input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="6"></span> </div>=                            <div class="fraction text-question"> <span class="fup"><input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="11"></span> <span class="bar">/</span> <span class="fdn"><input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="6"></span> </div></center>                        </div></li>',
    '<li class="col-sm-6"><div class="table-responsive">                            <center><img src="img/i2_p172_act2.jpg"><br>                            <div class="fraction text-question"> <span class="fup"><input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="12">                            </span> <span class="bar">/</span> <span class="fdn"><input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="12">                            </span> </div> -                            <div class="fraction text-question"> <span class="fup"><input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="10">                            </span> <span class="bar">/</span> <span class="fdn"><input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="12">                            </span> </div>=                            <div class="fraction text-question"> <span class="fup"><input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="1">                            </span> <span class="bar">/</span> <span class="fdn"><input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="6">                            </span> </div></center>                        </div></li>',
    '<li class="col-sm-6"><div class="table-responsive">                            <center><img src="img/i3_p172_act2.jpg"><br>                            <div class="fraction text-question"> <span class="fup"><input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="8">                            </span> <span class="bar">/</span> <span class="fdn"><input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="8">                            </span> </div> -                            <div class="fraction text-question"> <span class="fup"><input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="2">                            </span> <span class="bar">/</span> <span class="fdn"><input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="8">                            </span> </div>=                            <div class="fraction text-question"> <span class="fup"><input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="3">                            </span> <span class="bar">/</span> <span class="fdn"><input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="4">                            </span> </div></center>                        </div></li>',
    '<li class="col-sm-6"><div class="table-responsive">                            <center><img src="img/i4_p172_act2.jpg"><br>                            <div class="fraction text-question"> <span class="fup"><input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="13">                            </span> <span class="bar">/</span> <span class="fdn"><input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="24">                            </span> </div> -                            <div class="fraction text-question"> <span class="fup"><input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="5">                            </span> <span class="bar">/</span> <span class="fdn"><input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="24">                            </span> </div>=                            <div class="fraction text-question"> <span class="fup"><input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="1">                            </span> <span class="bar">/</span> <span class="fdn"><input maxlength="2" type="text" size="1" style="width:30px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas2"> <input type="hidden" style="color:blue;" class="solucion2" value="3">                            </span> </div></center>                        </div></li>'
];
vec2.sort(f_randomico);
for (var i = 0; i < 6; i++) {
    $('#ol1').html(vec2);
}

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
    tpre2 = nota / 5;
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion


vec3 = [
    '<li class="col-sm-6">                            <div class="table-responsive">                                <div class="fraction text-question"> <span class="fup">                                9</span> <span class="bar">/</span> <span class="fdn">                                10</span> </div> + <div class="fraction text-question"> <span class="fup">                                4</span> <span class="bar">/</span> <span class="fdn">                                5</span> </div> + <div class="fraction text-question"> <span class="fup">                                1</span> <span class="bar">/</span> <span class="fdn">                                6</span></div>= <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas3"> <input type="hidden" style="color:blue;" class="solucion3" value="1">                            <div class="fraction text-question"> <span class="fup">                                <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas3"> <input type="hidden" style="color:blue;" class="solucion3" value="26"></span> <span class="bar">/</span> <span class="fdn">                                <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas3"> <input type="hidden" style="color:blue;" class="solucion3" value="30"></span> </div>                            </div>                        </li>',
    '<li class="col-sm-6">                            <div class="table-responsive">                                <div class="fraction text-question"> <span class="fup">                                15</span> <span class="bar">/</span> <span class="fdn">                                24</span> </div> + <div class="fraction text-question"> <span class="fup">                                11</span> <span class="bar">/</span> <span class="fdn">                                20</span> </div> + <div class="fraction text-question"> <span class="fup">                                13</span> <span class="bar">/</span> <span class="fdn">                                18</span></div>= <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas3"> <input type="hidden" style="color:blue;" class="solucion3" value="1">                            <div class="fraction text-question"> <span class="fup">                                <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas3"> <input type="hidden" style="color:blue;" class="solucion3" value="323"></span> <span class="bar">/</span> <span class="fdn">                                <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas3"> <input type="hidden" style="color:blue;" class="solucion3" value="360"></span> </div>                            </div>                        </li>',
    '<li class="col-sm-6">                            <div class="table-responsive">                                <div class="fraction text-question"> <span class="fup">                                6</span> <span class="bar">/</span> <span class="fdn">                                7</span> </div> + <div class="fraction text-question"> <span class="fup">                                3</span> <span class="bar">/</span> <span class="fdn">                                4</span> </div> - <div class="fraction text-question"> <span class="fup">                                5</span> <span class="bar">/</span> <span class="fdn">                                14</span></div>= <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas3"> <input type="hidden" style="color:blue;" class="solucion3" value="1">                            <div class="fraction text-question"> <span class="fup">                                <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas3"> <input type="hidden" style="color:blue;" class="solucion3" value="1"></span> <span class="bar">/</span> <span class="fdn">                                <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas3"> <input type="hidden" style="color:blue;" class="solucion3" value="4"></span> </div>                            </div>                        </li>',
    '<li class="col-sm-6">                            <div class="table-responsive">                                <div class="fraction text-question"> <span class="fup">                                1</span> <span class="bar">/</span> <span class="fdn">                                3</span> </div> + <div class="fraction text-question"> <span class="fup">                                7</span> <span class="bar">/</span> <span class="fdn">                                4</span> </div> - <div class="fraction text-question"> <span class="fup">                                8</span> <span class="bar">/</span> <span class="fdn">                                5</span></div>=                             <div class="fraction text-question"> <span class="fup">                                <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas3"> <input type="hidden" style="color:blue;" class="solucion3" value="29"></span> <span class="bar">/</span> <span class="fdn">                                <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border: 1px solid #64BCF7;" class="border-blue respuestas3"> <input type="hidden" style="color:blue;" class="solucion3" value="60"></span> </div>                            </div>                        </li>'
];
vec3.sort(f_randomico);
for (var i = 0; i < 6; i++) {
    $('#ol2').html(vec3);
}

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

function pregunta4() 
{
    var cor=0;
    var inc=0;
    var x5=1;
        var y5=2;
        var p5cont1=0;
        var p5vec1=['lilascafé','lilasceleste','lilasamarillo','rojoscafé','rojosceleste','rojosamarillo','verdescafé','verdesceleste','verdesamarillo','azulescafé','azulesceleste','azulesamarillo'];
        for (var i = 0; i < 12; i++) {
            rp1=$('#p5dcon'+(i+x5)).val()+$('#p5dcon'+(i+y5)).val();
            if (rp1==p5vec1[i]) {
                p5cont1++;
                f_ok($('#p5dcon'+(i+x5)));
                f_ok($('#p5dcon'+(i+y5)));
            }else{
                p5cont1;
                f_no($('#p5dcon'+(i+x5)));
                f_no($('#p5dcon'+(i+y5)));
            }
            x5++;
            y5++;
        }
        var result4 = (p5cont1 * 2) / 12;
        cor = cor + result4;
        inc = inc + (2 - result4);

        tpre4 = result4;
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion

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
        parseFloat(tpre1) + parseFloat(tpre2) + parseFloat(tpre3) + parseFloat(tpre4) + parseFloat(tpre5);
    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal);
    document.getElementById("bt_comprobar").disabled = true;
    $("input").attr('disabled', 'disabled');
}
// #endregion