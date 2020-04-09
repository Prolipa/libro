var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;

// #region Pregunta1

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
    tpre1 = ((nota / 10) * 4);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2
p1vec1 = [];
p1vec2 = [];
p1vec3 = ['0', '1'];
p1vec3.sort(f_randomico);
for (var i = 0; i < 30; i++) {
    n1 = parseInt(Math.random() * 600 + 1);
    p1vec3.sort(f_randomico);
    n2 = p1vec3[0];
    p1vec1.push(n1);
    p1vec1.push(n2);
    $('#numa' + [i] + '').html(n1);
    $('#numb' + [i] + '').html(n2);
    if (i % 2 != 0) {
        p1vec2.push((p1vec1[i]) * (p1vec1[i - 1]));
    }
}

function pregunta2() {
    var cor = 0;
    for (var i = 0; i < 6; i++) {
        var num = parseInt($('#res' + [i] + '').val());
        if (p1vec2[i] == num) {
            f_ok($('#res' + [i] + ''));
            cor++;
        } else {
            f_no($('#res' + [i] + ''));
            cor;
        }
    }
    var result2 = (cor * 2) / 6;
    tpre2 = parseFloat(result2);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Pregunta3

p3vec1=
[
'<div class="col-sm-4">                        <div style="border: solid 1px #009CDE;border-radius: 10px;padding: 6px;width: 35px;display: inline-block;"> 48 </span></div><span style="color: #E878AC">x</span>                        <div style="border: solid 1px #009CDE;border-radius: 10px;padding: 6px;width: 35px;display: inline-block;">1                        </div>                        <div style="display: inline-block;">= 48</div>                        <br><br>                    </div>',
'<div class="col-sm-4">                         <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="7"><span style="color: #E878AC"> x </span>                        <div style="border: solid 1px #009CDE;border-radius: 10px;padding: 6px;width: 35px;display: inline-block;">7                        </div>                        <div style="display: inline-block;">= 0 </div>                        <br><br>                    </div>',
'<div class="col-sm-4">                        <div style="border: solid 1px #009CDE;border-radius: 10px;padding: 6px;width: 35px;display: inline-block;"> 248 </span></div><span style="color: #E878AC">x</span>                        <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="1">                        <div style="display: inline-block;">= 248</div>                        <br><br>                    </div>',
'<div class="col-sm-4">                        <div style="border: solid 1px #009CDE;border-radius: 10px;padding: 6px;width: 35px;display: inline-block;"> 62 </span></div><span style="color: #E878AC">x</span>                        <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="1">                        <div style="display: inline-block;">= 62</div>                        <br><br>                    </div>',
'<div class="col-sm-4">                        <div style="border: solid 1px #009CDE;border-radius: 10px;padding: 6px;width: 35px;display: inline-block;"> 200 </span></div><span style="color: #E878AC">x</span>                        <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="1">                        <div style="display: inline-block;">= 200</div>                        <br><br>                    </div>',
'<div class="col-sm-4">                        <div style="border: solid 1px #009CDE;border-radius: 10px;padding: 6px;width: 35px;display: inline-block;"> 563 </span></div><span style="color: #E878AC">x</span>                        <div style="border: solid 1px #009CDE;border-radius: 10px;padding: 6px;width: 35px;display: inline-block;">1                        </div>                        <div style="display: inline-block;">= <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="563"></div>                        <br><br>                    </div>',
'<div class="col-sm-4">                        <div style="border: solid 1px #009CDE;border-radius: 10px;padding: 6px;width: 35px;display: inline-block;"> 20 </span></div><span style="color: #E878AC">x</span>                        <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="0">                        <div style="display: inline-block;">= 0</div>                        <br><br>                    </div>',
'<div class="col-sm-4">                        <div style="border: solid 1px #009CDE;border-radius: 10px;padding: 6px;width: 35px;display: inline-block;"> 52 </span></div><span style="color: #E878AC">x</span>                        <div style="border: solid 1px #009CDE;border-radius: 10px;padding: 6px;width: 35px;display: inline-block;">0                        </div>                        <div style="display: inline-block;">= <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="0"></div>                        <br><br>                    </div>',
'<div class="col-sm-4">                        <div style="border: solid 1px #009CDE;border-radius: 10px;padding: 6px;width: 35px;display: inline-block;"> 37 </span></div><span style="color: #E878AC">x</span>                        <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas3"><input type="hidden" style="color:blue" class="solucion3" value="0">                        <div style="display: inline-block;">= 0</div>                        <br><br>                    </div>'
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
    tpre3 = ((nota / 10) * 2);
    $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion




// #region Calculo Nota Final
function NotaFinal() {
    pregunta1();
    pregunta2();
    pregunta3();
    var Nf = parseFloat(tpre1) + parseFloat(tpre2) + parseFloat(tpre3);
    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal);
    document.getElementById("bt_comprobar").disabled = true;
}