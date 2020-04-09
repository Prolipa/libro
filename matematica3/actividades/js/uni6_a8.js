var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;



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
    tpre1 = ((nota / 10) * 2.5);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2
p2vec1=
[
'<div class="col-sm-2 table-responsive text-question" style="border:solid 1px #91D5DA;border-radius: 10px;padding: 5px;width: 200px;text-align: center;">                                2 <span style="color:#E23399"> ×</span> 5 = <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="10"><br>                                <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="6"> <span style="color:#E23399"> ×</span> <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="7"> = <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="42"><br></div>',
'<div class="col-sm-2 table-responsive text-question" style="border:solid 1px #91D5DA;border-radius: 10px;padding: 5px;width: 200px;text-align: center;">                                5 <span style="color:#E23399"> ×</span> 4 = <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="45"><br>                                <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="9"> <span style="color:#E23399"> ×</span> <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="5"> = <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="45"><br></div>',
'<div class="col-sm-2 table-responsive text-question" style="border:solid 1px #91D5DA;border-radius: 10px;padding: 5px;width: 200px;text-align: center;">                                7 <span style="color:#E23399"> ×</span> 5 = <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="35"><br>                                <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="5"> <span style="color:#E23399"> ×</span> <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="7"> = <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="35"><br></div>',
'<div class="col-sm-2 table-responsive text-question" style="border:solid 1px #91D5DA;border-radius: 10px;padding: 5px;width: 200px;text-align: center;">                                5 <span style="color:#E23399"> ×</span> 4 = <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="20"><br>                                <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="4"> <span style="color:#E23399"> ×</span> <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="5"> = <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="20"><br></div>',
'<div class="col-sm-2 table-responsive text-question" style="border:solid 1px #91D5DA;border-radius: 10px;padding: 5px;width: 200px;text-align: center;">                                5 <span style="color:#E23399"> ×</span> 8 = <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="40"><br>                                <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="8"> <span style="color:#E23399"> ×</span> <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="5"> = <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="40"><br></div>',
'<div class="col-sm-2 table-responsive text-question" style="border:solid 1px #91D5DA;border-radius: 10px;padding: 5px;width: 200px;text-align: center;">                                0 <span style="color:#E23399"> ×</span> 5 = <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="0"><br>                                <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="5"> <span style="color:#E23399"> ×</span> <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="0"> = <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="0"><br></div>',
'<div class="col-sm-2 table-responsive text-question" style="border:solid 1px #91D5DA;border-radius: 10px;padding: 5px;width: 200px;text-align: center;">                                5 <span style="color:#E23399"> ×</span> 3 = <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="15"><br>                                <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="3"> <span style="color:#E23399"> ×</span> <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="5"> = <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="15"><br></div>',
'<div class="col-sm-2 table-responsive text-question" style="border:solid 1px #91D5DA;border-radius: 10px;padding: 5px;width: 200px;text-align: center;">                                6 <span style="color:#E23399"> ×</span> 5 = <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="30"><br>                                <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="5"> <span style="color:#E23399"> ×</span> <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="6"> = <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="30"><br></div>',
'<div class="col-sm-2 table-responsive text-question" style="border:solid 1px #91D5DA;border-radius: 10px;padding: 5px;width: 200px;text-align: center;">                                5 <span style="color:#E23399"> ×</span> 10 = <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="50"><br>                                <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="10"> <span style="color:#E23399"> ×</span> <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="5"> = <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="50"><br></div>',
'<div class="col-sm-2 table-responsive text-question" style="border:solid 1px #91D5DA;border-radius: 10px;padding: 5px;width: 200px;text-align: center;">                                5 <span style="color:#E23399"> ×</span> 1 = <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="5"><br>                                <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="1"> <span style="color:#E23399"> ×</span> <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="5"> = <input type="text" maxlength="3" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="5"><br></div>'
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
    tpre2 = ((nota / 10) * 2.5);
    $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion

// #region Pregunta3
p2vec1 = [];
p2vec2 = [];
p2vec3=['7','5'];
p2vec3.sort(f_randomico);
for (var i = 0; i < 30; i++) {
    n1 = parseInt(Math.random() * 10 + 0);
    p2vec3.sort(f_randomico);
    n2 = p2vec3[0];
    p2vec1.push(n1);
    p2vec1.push(n2);
    $('#p2numa' + [i] + '').html(n2);
    $('#p2numb' + [i] + '').html(n1);
    if (i % 2 != 0) {
        p2vec2.push((p2vec1[i]) * (p2vec1[i - 1]));
    }
}
function pregunta3() {
    var cor = 0;
    for (var i = 0; i < 8; i++) {
        var num = parseInt($('#p2res' + [i] + '').val());
        if (p2vec2[i] == num) {
            f_ok($('#p2res' + [i] + ''));
            cor++;
        } else {
            f_no($('#p2res' + [i] + ''));
            cor;
        }
    }
    var result1 = (cor * 2.5) / 8;
    tpre3 = parseFloat(result1);
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
    tpre4 = ((nota / 10) * 2.5);
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
}
// #endregion


// #region Calculo Nota Final
function NotaFinal() {
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();
    var Nf = parseFloat(tpre1) + parseFloat(tpre2) + parseFloat(tpre3) + parseFloat(tpre4);
    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal);
    document.getElementById("bt_comprobar").disabled = true;
}