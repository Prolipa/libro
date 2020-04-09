var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;

// #region Pregunta1
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
for (var i = 0; i < 1; i++) {
    var n = [];
    for (i = 1; i < 5; i++) {
        n1 = parseInt((Math.random() * 3) + 2);

        $("#p4dux" + [i] + "").val(parseInt(n1));
        $("#p4dux" + [i] + "").attr("disabled", "true");
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

    var res4 = $("#p4dux5").val() + $("#p4dux6").val() + $("#p4dux7").val() + $("#p4dux8").val();

    if (r[3] == res4) {
        corr++;
        f_ok($("#p4dux5"));
        f_ok($("#p4dux6"));
        f_ok($("#p4dux7"));
        f_ok($("#p4dux8"));
    } else {
        f_no($("#p4dux5"));
        f_no($("#p4dux6"));
        f_no($("#p4dux7"));
        f_no($("#p4dux8"));
        corr;
    }
    var res = (corr * 4) / 4;
    tpre1 = parseFloat(res);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2
var r2 = [];
for (var i = 0; i < 1; i++) {
    var n = [];
    for (i = 1; i < 5; i++) {
        n1 = parseInt((Math.random() * 3) + 2);

        $("#p2aux" + [i] + "").val(parseInt(n1));
        $("#p2aux" + [i] + "").attr("disabled", "true");
        n.push(n1);
    }
    n.push((n[0].toString()) + (n[1].toString()) + (n[2].toString()));
    n.push(n[3].toString());
    r2.push((n[4]) * (n[5]));
}
for (var i = 0; i < 1; i++) {
    var n = [];
    for (i = 1; i < 5; i++) {
        n1 = parseInt((Math.random() * 4) + 1);

        $("#p2bux" + [i] + "").val(parseInt(n1));
        $("#p2bux" + [i] + "").attr("disabled", "true");
        n.push(n1);
    }
    n.push((n[0].toString()) + (n[1].toString()) + (n[2].toString()));
    n.push(n[3].toString());
    r2.push((n[4]) * (n[5]));
}
for (var i = 0; i < 1; i++) {
    var n = [];
    for (i = 1; i < 5; i++) {
        n1 = parseInt((Math.random() * 4) + 1);

        $("#p2cux" + [i] + "").val(parseInt(n1));
        $("#p2cux" + [i] + "").attr("disabled", "true");
        n.push(n1);
    }
    n.push((n[0].toString()) + (n[1].toString()) + (n[2].toString()));
    n.push(n[3].toString());
    r2.push((n[4]) * (n[5]));
}
for (var i = 0; i < 1; i++) {
    var n = [];
    for (i = 1; i < 5; i++) {
        n1 = parseInt((Math.random() * 4) + 1);

        $("#p2dux" + [i] + "").val(parseInt(n1));
        $("#p2dux" + [i] + "").attr("disabled", "true");
        n.push(n1);
    }
    n.push((n[0].toString()) + (n[1].toString()) + (n[2].toString()));
    n.push(n[3].toString());
    r2.push((n[4]) * (n[5]));
}
for (var i = 0; i < 1; i++) {
    var n = [];
    for (i = 1; i < 5; i++) {
        n1 = parseInt((Math.random() * 4) + 1);

        $("#p2eux" + [i] + "").val(parseInt(n1));
        $("#p2eux" + [i] + "").attr("disabled", "true");
        n.push(n1);
    }
    n.push((n[0].toString()) + (n[1].toString()) + (n[2].toString()));
    n.push(n[3].toString());
    r2.push((n[4]) * (n[5]));
}
for (var i = 0; i < 1; i++) {
    var n = [];
    for (i = 1; i < 5; i++) {
        n1 = parseInt((Math.random() * 4) + 1);

        $("#p2fux" + [i] + "").val(parseInt(n1));
        $("#p2fux" + [i] + "").attr("disabled", "true");
        n.push(n1);
    }
    n.push((n[0].toString()) + (n[1].toString()) + (n[2].toString()));
    n.push(n[3].toString());
    r2.push((n[4]) * (n[5]));
}
for (var i = 0; i < 1; i++) {
    var n = [];
    for (i = 1; i < 5; i++) {
        n1 = parseInt((Math.random() * 4) + 1);

        $("#p2gux" + [i] + "").val(parseInt(n1));
        $("#p2gux" + [i] + "").attr("disabled", "true");
        n.push(n1);
    }
    n.push((n[0].toString()) + (n[1].toString()) + (n[2].toString()));
    n.push(n[3].toString());
    r2.push((n[4]) * (n[5]));
}
for (var i = 0; i < 1; i++) {
    var n = [];
    for (i = 1; i < 5; i++) {
        n1 = parseInt((Math.random() * 4) + 1);

        $("#p2hux" + [i] + "").val(parseInt(n1));
        $("#p2hux" + [i] + "").attr("disabled", "true");
        n.push(n1);
    }
    n.push((n[0].toString()) + (n[1].toString()) + (n[2].toString()));
    n.push(n[3].toString());
    r2.push((n[4]) * (n[5]));
}


function pregunta2() {
    var corr = 0;
    var res1 = $("#p2aux5").val() + $("#p2aux6").val() + $("#p2aux7").val() + $("#p2aux8").val();

    if (r2[0] == res1) {
        corr++;
        f_ok($("#p2aux5"));
        f_ok($("#p2aux6"));
        f_ok($("#p2aux7"));
        f_ok($("#p2aux8"));
    } else {
        f_no($("#p2aux5"));
        f_no($("#p2aux6"));
        f_no($("#p2aux7"));
        f_no($("#p2aux8"));
        corr;
    }

    var res2 = $("#p2bux5").val() + $("#p2bux6").val() + $("#p2bux7").val() + $("#p2bux8").val();

    if (r2[1] == res2) {
        corr++;
        f_ok($("#p2bux5"));
        f_ok($("#p2bux6"));
        f_ok($("#p2bux7"));
        f_ok($("#p2bux8"));
    } else {
        f_no($("#p2bux5"));
        f_no($("#p2bux6"));
        f_no($("#p2bux7"));
        f_no($("#p2bux8"));
        corr;
    }

    var res3 = $("#p2cux5").val() + $("#p2cux6").val() + $("#p2cux7").val() + $("#p2cux8").val();

    if (r2[2] == res3) {
        corr++;
        f_ok($("#p2cux5"));
        f_ok($("#p2cux6"));
        f_ok($("#p2cux7"));
        f_ok($("#p2cux8"));
    } else {
        f_no($("#p2cux5"));
        f_no($("#p2cux6"));
        f_no($("#p2cux7"));
        f_no($("#p2cux8"));
        corr;
    }

    var res4 = $("#p2dux5").val() + $("#p2dux6").val() + $("#p2dux7").val() + $("#p2dux8").val();

    if (r2[3] == res4) {
        corr++;
        f_ok($("#p2dux5"));
        f_ok($("#p2dux6"));
        f_ok($("#p2dux7"));
        f_ok($("#p2dux8"));
    } else {
        f_no($("#p2dux5"));
        f_no($("#p2dux6"));
        f_no($("#p2dux7"));
        f_no($("#p2dux8"));
        corr;
    }

    var res5 = $("#p2eux5").val() + $("#p2eux6").val() + $("#p2eux7").val() + $("#p2eux8").val();

    if (r2[4] == res5) {
        corr++;
        f_ok($("#p2eux5"));
        f_ok($("#p2eux6"));
        f_ok($("#p2eux7"));
        f_ok($("#p2eux8"));
    } else {
        f_no($("#p2eux5"));
        f_no($("#p2eux6"));
        f_no($("#p2eux7"));
        f_no($("#p2eux8"));
        corr;
    }

    var res6 = $("#p2fux5").val() + $("#p2fux6").val() + $("#p2fux7").val() + $("#p2fux8").val();

    if (r2[5] == res6) {
        corr++;
        f_ok($("#p2fux5"));
        f_ok($("#p2fux6"));
        f_ok($("#p2fux7"));
        f_ok($("#p2fux8"));
    } else {
        f_no($("#p2fux5"));
        f_no($("#p2fux6"));
        f_no($("#p2fux7"));
        f_no($("#p2fux8"));
        corr;
    }

    var res7 = $("#p2gux5").val() + $("#p2gux6").val() + $("#p2gux7").val() + $("#p2gux8").val();

    if (r2[6] == res7) {
        corr++;
        f_ok($("#p2gux5"));
        f_ok($("#p2gux6"));
        f_ok($("#p2gux7"));
        f_ok($("#p2gux8"));
    } else {
        f_no($("#p2gux5"));
        f_no($("#p2gux6"));
        f_no($("#p2gux7"));
        f_no($("#p2gux8"));
        corr;
    }
    var res8 = $("#p2hux5").val() + $("#p2hux6").val() + $("#p2hux7").val() + $("#p2hux8").val();

    if (r2[7] == res8) {
        corr++;
        f_ok($("#p2hux5"));
        f_ok($("#p2hux6"));
        f_ok($("#p2hux7"));
        f_ok($("#p2hux8"));
    } else {
        f_no($("#p2hux5"));
        f_no($("#p2hux6"));
        f_no($("#p2hux7"));
        f_no($("#p2hux8"));
        corr;
    }
    var res = (corr * 4) / 8;
    tpre2 = parseFloat(res);
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