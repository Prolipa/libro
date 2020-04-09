$("#n_pagina").html("175"); //impresion de pagina

var tpre1 = 0;
var tpre2 = 0;



// #region Pregunta1


var res2 = ['pre4aux0', 'pre4aux8', 'pre4aux14', 'pre4aux18', 'pre4aux20', 'pre4aux29', 'pre4aux34', 'pre4aux39'];
p4vec = [
    '<div class="col-sm-3 table-responsive text-question" style="text-align: center">                        <center><br><img  src="img/i1_p174_act2.jpg"  >                            <table>                                <tr>                                    <td>                                        <div id="pre4aux1" class="cuadros enc1">a</div>                                    </td>                                    <td>                                        <div id="pre4aux0" class="cuadros enc1">z</div>                                    </td>                                    <td>                                        <div id="pre4aux2" class="cuadros enc1">ú</div>                                    </td>                                    <td>                                        <div id="pre4aux3" class="cuadros enc1">c</div>                                    </td>                                    <td>                                        <div id="pre4aux4" class="cuadros enc1">a</div>                                    </td>                                    <td>                                        <div id="pre4aux5" class="cuadros enc1">r</div>                                    </td>                                </tr>                            </table>                        </center>                    </div>',
    '<div class="col-sm-3 table-responsive text-question" style="text-align: center">                        <center><br><img  src="img/i2_p174_act2.jpg"  >                            <table>                                <tr>                                    <td>                                        <div id="pre4aux6" class="cuadros enc1">l</div>                                    </td>                                    <td>                                        <div id="pre4aux7" class="cuadros enc1">a</div>                                    </td>                                    <td>                                        <div id="pre4aux8" class="cuadros enc1">z</div>                                    </td>                                    <td>                                        <div id="pre4aux9" class="cuadros enc1">o</div>                                    </td>                                </tr>                            </table>                        </center>                    </div>',
    '<div class="col-sm-3 table-responsive text-question" style="text-align: center">                        <center><br><img  src="img/i3_p174_act2.jpg"  >                            <table>                                <tr>                                    <td>                                        <div id="pre4aux10" class="cuadros enc1">c</div>                                    </td>                                    <td>                                        <div id="pre4aux11" class="cuadros enc1">a</div>                                    </td>                                    <td>                                        <div id="pre4aux12" class="cuadros enc1">b</div>                                    </td>                                    <td>                                        <div id="pre4aux13" class="cuadros enc1">e</div>                                    </td>                                    <td>                                        <div id="pre4aux14" class="cuadros enc1">z</div>                                    </td>                                    <td>                                        <div id="pre4aux15" class="cuadros enc1">a</div>                                    </td>                                </tr>                            </table>                        </center>                    </div>',
    '<div class="col-sm-3 table-responsive text-question" style="text-align: center">                        <center><br><img  src="img/i4_p174_act2.jpg"  >                            <table>                                <tr>                                    <td>                                        <div id="pre4aux16" class="cuadros enc1">t</div>                                    </td>                                    <td>                                        <div id="pre4aux17" class="cuadros enc1">a</div>                                    </td>                                    <td>                                        <div id="pre4aux18" class="cuadros enc1">z</div>                                    </td>                                    <td>                                        <div id="pre4aux19" class="cuadros enc1">a</div>                                    </td>                                </tr>                            </table>                        </center>                    </div>',
    '<div class="col-sm-3 table-responsive text-question" style="text-align: center">                        <center><br><img  src="img/i5_p174_act2.jpg"  >                            <table>                                <tr>                                    <td>                                        <div id="pre4aux20" class="cuadros enc1">z</div>                                    </td>                                    <td>                                        <div id="pre4aux21" class="cuadros enc1">o</div>                                    </td>                                    <td>                                        <div id="pre4aux22" class="cuadros enc1">r</div>                                    </td>                                    <td>                                        <div id="pre4aux23" class="cuadros enc1">r</div>                                    </td>                                    <td>                                        <div id="pre4aux24" class="cuadros enc1">a</div>                                    </td>                                </tr>                            </table>                        </center>                    </div>',
    '<div class="col-sm-3 table-responsive text-question" style="text-align: center">                        <center><br><img  src="img/i6_p174_act2.jpg"  >                            <table>                                <tr>                                    <td>                                        <div id="pre4aux25" class="cuadros enc1">c</div>                                    </td>                                    <td>                                        <div id="pre4aux26" class="cuadros enc1">o</div>                                    </td>                                    <td>                                        <div id="pre4aux27" class="cuadros enc1">r</div>                                    </td>                                    <td>                                        <div id="pre4aux28" class="cuadros enc1">a</div>                                    </td>                                    <td>                                        <div id="pre4aux29" class="cuadros enc1">z</div>                                    </td>                                    <td>                                        <div id="pre4aux30" class="cuadros enc1">ó</div>                                    </td>                                    <td>                                        <div id="pre4aux31" class="cuadros enc1">n</div>                                    </td>                                </tr>                            </table>                        </center>                    </div>',
    '<div class="col-sm-3 table-responsive text-question" style="text-align: center">                        <center><br><img  src="img/i7_p174_act2.jpg" style="mix-blend-mode: multiply;"  >                            <table>                                <tr>                                    <td>                                        <div id="pre4aux32" class="cuadros enc1">p</div>                                    </td>                                    <td>                                        <div id="pre4aux33" class="cuadros enc1">o</div>                                    </td>                                    <td>                                        <div id="pre4aux34" class="cuadros enc1">z</div>                                    </td>                                    <td>                                        <div id="pre4aux35" class="cuadros enc1">o</div>                                    </td>                                </tr>                            </table>                        </center>                    </div>',
    '<div class="col-sm-3 table-responsive text-question" style="text-align: center">                        <center><br><img  src="img/i8_p174_act2.jpg" style="mix-blend-mode: multiply;"  >                            <table>                                <tr>                                    <td>                                        <div id="pre4aux36" class="cuadros enc1">m</div>                                    </td>                                    <td>                                        <div id="pre4aux37" class="cuadros enc1">a</div>                                    </td>                                    <td>                                        <div id="pre4aux38" class="cuadros enc1">n</div>                                    </td>                                    <td>                                        <div id="pre4aux39" class="cuadros enc1">z</div>                                    </td>                                    <td>                                        <div id="pre4aux40" class="cuadros enc1">a</div>                                    </td>                                    <td>                                        <div id="pre4aux41" class="cuadros enc1">n</div>                                    </td>                                    <td>                                        <div id="pre4aux42" class="cuadros enc1">a</div>                                    </td>                                </tr>                            </table>                        </center>                    </div>'
];
p4vec.sort(f_randomico);
$('#pre4aux1').html(p4vec);

$('.enc1').click(function() {

    if ($(this).hasClass('pintar')) {
        $(this).removeClass('pintar')
    } else {
        $(this).addClass('pintar')

    }

});

function pregunta1() {
    var corr = 0;
    var inco = 0;
    for (var i = 0; i < 43; i++) {
        var acu = 0;
        if ($("#pre4aux" + [i] + "").hasClass("pintar")) {
            var caja = $("div[id=pre4aux" + [i] + "").attr("id");

            for (var j = 0; j < 9; j++) {
                if (caja == res2[j]) {
                    acu++;
                } else {
                    acu;
                }
            }
            if (acu == 1) {
                f_ok($("#pre4aux" + [i] + ""));
                ($("#pre4aux" + [i] + "")).removeClass('pintar');
                corr++;
            } else {
                inco++;
                f_no($("#pre4aux" + [i] + ""));
                ($("#pre4aux" + [i] + "")).removeClass('pintar');
            }
        }
    }
    if (corr < inco) {
        var total = 0;
    } else {
        var total = ((corr - inco) * 5) / 8;
    }
    tpre1 = total.toFixed(2);
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Pregunta2
var random1 = [
    '<span class="enc1" id="1">rojas</span>',
    '<span class="enc1" id="2">verdes</span>',
    '<span class="enc1" id="3">moradas</span>'
];
var ranuno = document.getElementsByClassName("imagen1");
random1.sort(f_randomico);
for (i = 0; i < ranuno.length; i++) {
  $("#" + ranuno[i].id).html(random1[i]);
}

var random2 = [
    '<span class="enc1" id="4">tizas</span>',
    '<span class="enc1" id="5">manzanas</span>',
    '<span class="enc1" id="6">zanahorias</span>'
];
var randos = document.getElementsByClassName("imagen2");
random2.sort(f_randomico);
for (i = 0; i < randos.length; i++) {
  $("#" + randos[i].id).html(random2[i]);
}


var random3 = [
    '<span class="enc1" id="7">postre de zapallo</span>',
    '<span class="enc1" id="8">zumo de zapote</span>',
    '<span class="enc1" id="9">sopa de calabaza</span>'
];
var rantres = document.getElementsByClassName("imagen3");
random3.sort(f_randomico);
for (i = 0; i < rantres.length; i++) {
  $("#" + rantres[i].id).html(random3[i]);
}

$(".enc1").click(function() {
    if ($(this).hasClass("subrayar")) {
        $(this).removeClass("subrayar");
    } else {
        $(this).addClass("subrayar");
    }
});

function pregunta2() {
  var respr1 = 0,
    respr2 = 0;
  for (var i = 1; i <= 9; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (caja == "verdes"||caja == "manzanas"||caja == "sopa de calabaza") {
        respr1 = respr1 + 1;
        $("#" + [i] + "").removeClass("subrayar");
        $("#" + [i] + "").addClass("correcto");
      } else {
        respr2 = respr2 + 1;
        $("#" + [i] + "").removeClass("subrayar");
        $("#" + [i] + "").addClass("incorrecto");
      }
    } else {
    }
  }
  var total = ((respr1 - respr2) * 5) / 3;
  if (total < 0) {
    total = 0;
    tpre2 = total;
  } else {
    tpre2 = total;
  }

  tpre2 = total.toFixed(2);
  $("#pre2a").val(parseFloat(tpre2).toFixed(2));
}
// #endregion





// #region Calculo Nota Final
function NotaFinal() {

    pregunta1();
    pregunta2();

    var Nf = parseFloat(tpre1) + parseFloat(tpre2);
    var Vtotal = Nf.toFixed(2);
    $("#txtNota").html(Vtotal + "/10");
    document.getElementById("bt_comprobar").disabled = true;
}

// #endregion