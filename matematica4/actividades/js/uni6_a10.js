var titulos = "aplico";
f_titulos();
numero_pagina(243);

var tpre1 = 0;
var tpre2 = 0;

// #region Pregunta1
p1vec1 = [
    '<li class="col-sm-6"><div class="table-responsive">¿Cuántos días hay en 3 meses?                            <br><span style="color: #0067B4"><b>R.</b></span>                            <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="3"> x <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="30"> =                             <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="90"> días<br><br>                        </div></li>',
    '<li class="col-sm-6"><div class="table-responsive">¿Cuántos años hay en 20 siglos?                            <br><span style="color: #0067B4"><b>R.</b></span>                            <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="20"> x <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="100"> =                             <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="2000"> años<br><br>                        </div></li>',
    '<li class="col-sm-6"><div class="table-responsive">¿Cuántos meses hay en 5 años?                            <br><span style="color: #0067B4"><b>R.</b></span>                            <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="5"> x <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="12"> =                             <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="60"> meses<br><br>                        </div></li>',
    '<li class="col-sm-6"><div class="table-responsive">¿Cuántos días hay en 3 meses de 30 días?                            <br><span style="color: #0067B4"><b>R.</b></span>                            <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="30"> x <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="3"> =                             <input maxlength="4" type="text" size="1" style="width:50px;text-align: center;border:solid 2px #81C66D;border-radius:10px" class="border-blue respuestas1"><input type="hidden" style="color:blue" class="solucion1" value="90"> días<br><br>                        </div></li>'
];
p1vec1.sort(f_randomico);
$('#li1').html(p1vec1);

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
    tpre1 = (nota / 2);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion


// #region Pregunta2

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
    tpre2 = (nota / 2);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion


// #region Calculo Nota Final
function NotaFinal() {

    pregunta1();
    pregunta2();

    var Nf =
        parseFloat(tpre1) +
        parseFloat(tpre2);

    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal);
    document.getElementById("bt_comprobar").disabled = true;
    $("input").attr('disabled', 'disabled');
}

// #endregion