var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;

// #region Random1


p1vec1 = [];
for (i = 0; i < 1; i++) {
    n1 = parseInt(Math.random() * 49 + 10);
    n2 = parseInt(Math.random() * 48 + 10);
    if (n1 < n2) {
        i--;
    } else {
        p1vec1.push(n1);
        p1vec1.push(n2);
        p1vec1.push(n1 + n2);
    }
}
var num1 = p1vec1[0].toString().split("");
for (var i = 0; i < 2; i++) {
   $('#nlsa' + [i] + '').html(num1[i]);
}
var num1 = p1vec1[1].toString().split("");
for (var i = 2; i < 4; i++) {
   $('#nlsa' + [i] + '').html(num1[i-2]);
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
   $('#nlsb' + [i] + '').html(num1[i-2]);
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
        p1vec3.push(n1 + n2);
    }
}
var num1 = p1vec3[0].toString().split("");
for (var i = 0; i < 2; i++) {
   $('#nlsc' + [i] + '').html(num1[i]);
}
var num1 = p1vec3[1].toString().split("");
for (var i = 2; i < 4; i++) {
   $('#nlsc' + [i] + '').html(num1[i-2]);
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
   $('#nlsd' + [i] + '').html(num1[i-2]);
}


// #endregion

// #region Pregunta1

function pregunta1() {
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



    var result1 = (corr * 4) / 4;
    tpre1 = parseFloat(result1);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Random2

$('.enc2').click(function() {

    if ($(this).hasClass('subrayar')) {
        $(this).removeClass('subrayar')

    } else {
        $(this).addClass('subrayar')
    }
});


p2vec1 = ['63', '89', '79'];
p2vec1.sort(f_randomico);
for (var i = 0; i < 3; i++) {
    $('#' + [i] + '').html(p2vec1[i]);
}

p2vec2 = ['31', '78', '59'];
p2vec2.sort(f_randomico);
j = 0;
for (var i = 3; i < 6; i++) {

    $('#' + [i] + '').html(p2vec2[j]);
    j++;
}

p2vec3 = ['76', '38', '52'];
p2vec3.sort(f_randomico);
j = 0;
for (var i = 6; i < 9; i++) {

    $('#' + [i] + '').html(p2vec3[j]);
    j++;
}

p2vec4 = ['67', '76', '66'];
p2vec4.sort(f_randomico);
j = 0;
for (var i = 9; i < 12; i++) {

    $('#' + [i] + '').html(p2vec4[j]);
    j++;
}

// #endregion

p2vec2=[
'<li class="col-md-3 table-responsive" >                                <table class="table-bordered" style="text-align: center">                                                                        <tr>                                        <td width="33%"></td>                                        <td width="33%"><h4>3</h4>                                        </td>                                        <td width="33%"><h4>4</h4>                                        </td>                                    </tr>                                    <tr>                                        <td><h4><b>+</b></h4>                                        </td>                                        <td><h4>3</h4>                                        </td>                                        <td><h4><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align:center "class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="6"></h4>                                        </td>                                    </tr>                                    <tr style="border-top:2px solid #303F9F">                                        <td></td>                                        <td><b><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align:center "class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="7"></b></td>                                        <td><b>0</b></td>                                    </tr>                                </table>                                <br>                            </li>',
'<li class="col-md-3 table-responsive">                                <table class="table-bordered" style="text-align: center">                                                                        <tr>                                        <td width="33%"></td>                                        <td width="33%"><h4><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align:center "class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="6"></h4>                                        </td>                                        <td width="33%"><h4>7</h4>                                        </td>                                    </tr>                                    <tr>                                        <td><h4><b>+</b></h4>                                        </td>                                        <td><h4>2</h4>                                        </td>                                        <td><h4><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align:center "class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="4"></h4>                                        </td>                                    </tr>                                    <tr style="border-top:2px solid #303F9F">                                        <td></td>                                        <td><b>9</b></td>                                        <td><b>1</b></td>                                    </tr>                                </table>                                <br>                            </li>',
'<li class="col-md-3 table-responsive">                                <table class="table-bordered" style="text-align: center">                                                                        <tr>                                        <td width="33%"></td>                                        <td width="33%"><h4>6</h4>                                        </td>                                        <td width="33%"><h4>9</h4>                                        </td>                                    </tr>                                    <tr>                                        <td><h4><b>+</b></h4>                                        </td>                                        <td><h4>1</h4>                                        </td>                                        <td><h4>3</h4>                                        </td>                                    </tr>                                    <tr style="border-top:2px solid #303F9F">                                        <td></td>                                        <td><b><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align:center "class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="8"></b></td>                                        <td><b><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align:center "class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="2"></b></td>                                    </tr>                                </table>                                <br>                            </li>',
'<li class="col-md-3 table-responsive">                                <table class="table-bordered" style="text-align: center">                                                                        <tr>                                        <td width="33%"></td>                                        <td width="33%"><h4><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align:center "class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="3"></h4>                                        </td>                                        <td width="33%"><h4>5</h4>                                        </td>                                    </tr>                                    <tr>                                        <td><h4><b>+</b></h4>                                        </td>                                        <td><h4>2</h4>                                        </td>                                        <td><h4><input type="text" maxlength="1" size="1" style="width:50px;border: solid 1px #229AC4;text-align:center "class="border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="8"></h4>                                        </td>                                    </tr>                                    <tr style="border-top:2px solid #303F9F">                                        <td></td>                                        <td><b>6</b></td>                                        <td><b>3</b></td>                                    </tr>                                </table>                                <br>                            </li>'
];

p2vec2.sort(f_randomico);
$('#li2').html(p2vec2);
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
  tpre2 = ((nota*4) / 10);
  $("#pre2a").val(parseFloat(tpre2).toFixed(2));

}
// #endregion

// #region Random3

// #endregion

// #region Pregunta3
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

// #region Calculo Nota Final
function NotaFinal() {
    pregunta1();
    pregunta2();
    pregunta3();
    var Nf =
        parseFloat(tpre1) +
        parseFloat(tpre2) +
        parseFloat(tpre3);
    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal);
    document.getElementById("bt_comprobar").disabled = true;
    $("input").attr('disabled', 'disabled');
}