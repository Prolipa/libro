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
'<div class="col-sm-4">                        <div style="border: solid 2px #009CDE;border-radius: 10px;padding: 6px;width: 50px;display: inline-block;text-align: center;">8 </div> <span style="color: #BD78C6;text-align: center;"> x </span>                        <div style="border: solid 2px #009CDE;border-radius: 10px;padding: 6px;width: 50px;display: inline-block;text-align: center;">8 </div> = <input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px;padding: 6px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="64"> <br><br>                    </div>',
'<div class="col-sm-4">                        <div style="border: solid 2px #009CDE;border-radius: 10px;padding: 6px;width: 50px;display: inline-block;text-align: center;">8 </div> <span style="color: #BD78C6;text-align: center;"> x </span>                        <div style="border: solid 2px #009CDE;border-radius: 10px;padding: 6px;width: 50px;display: inline-block;text-align: center;">9 </div> =                        <input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px;padding: 6px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="72"> <br><br>                    </div>',
'<div class="col-sm-4">                        <div style="border: solid 2px #009CDE;border-radius: 10px;padding: 6px;width: 50px;display: inline-block;text-align: center;">10 </div> <span style="color: #BD78C6;text-align: center;"> x </span>                        <div style="border: solid 2px #009CDE;border-radius: 10px;padding: 6px;width: 50px;display: inline-block;text-align: center;">8 </div> =                        <input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px;padding: 6px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="80"> <br><br>                    </div>',
'<div class="col-sm-4">                        <div style="border: solid 2px #009CDE;border-radius: 10px;padding: 6px;width: 50px;display: inline-block;text-align: center;">9 </div> <span style="color: #BD78C6;text-align: center;"> x </span>                        <input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px;padding: 6px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="9"> = <div style="border: solid 2px #009CDE;border-radius: 10px;padding: 6px;width: 50px;display: inline-block;text-align: center;">81 </div>                         <br><br>                    </div>',
'<div class="col-sm-4">                        <div style="border: solid 2px #009CDE;border-radius: 10px;padding: 6px;width: 50px;display: inline-block;text-align: center;">9 </div> <span style="color: #BD78C6;text-align: center;"> x </span>                        <input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px;padding: 6px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="4"> = <div style="border: solid 2px #009CDE;border-radius: 10px;padding: 6px;width: 50px;display: inline-block;text-align: center;">36 </div>                         <br><br>                    </div>',
'<div class="col-sm-4">                        <div style="border: solid 2px #009CDE;border-radius: 10px;padding: 6px;width: 50px;display: inline-block;text-align: center;">7 </div> <span style="color: #BD78C6;text-align: center;"> x </span>                        <input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px;padding: 6px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="8"> = <div style="border: solid 2px #009CDE;border-radius: 10px;padding: 6px;width: 50px;display: inline-block;text-align: center;">56 </div>                         <br><br>                    </div>',
'<div class="col-sm-4">                        <input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px;padding: 6px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="8"> <span style="color: #BD78C6;text-align: center;"> x </span> <div style="border: solid 2px #009CDE;border-radius: 10px;padding: 6px;width: 50px;display: inline-block;text-align: center;">6 </div>                         = <div style="border: solid 2px #009CDE;border-radius: 10px;padding: 6px;width: 50px;display: inline-block;text-align: center;">48 </div>                         <br><br>                    </div>',
'<div class="col-sm-4">                        <input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px;padding: 6px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="9"> <span style="color: #BD78C6;text-align: center;"> x </span> <div style="border: solid 2px #009CDE;border-radius: 10px;padding: 6px;width: 50px;display: inline-block;text-align: center;">5 </div>                         = <div style="border: solid 2px #009CDE;border-radius: 10px;padding: 6px;width: 50px;display: inline-block;text-align: center;">45 </div>                         <br><br>                    </div>',
'<div class="col-sm-4">                        <input type="text" maxlength="2" size="1" style="border-radius:10px;border: solid 2px #009CDE;text-align: center;width: 50px;padding: 6px" class=" border-blue respuestas2"><input type="hidden" style="color:blue" class="solucion2" value="9"> <span style="color: #BD78C6;text-align: center;"> x </span> <div style="border: solid 2px #009CDE;border-radius: 10px;padding: 6px;width: 50px;display: inline-block;text-align: center;">7 </div>                         = <div style="border: solid 2px #009CDE;border-radius: 10px;padding: 6px;width: 50px;display: inline-block;text-align: center;">63 </div>                         <br><br>                    </div>'
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
var pal1 = [
  '<img class="img-responsive drag3 c1" alt="1" src="img/i1_p233_act2.jpg"  style="display:inline-block; mix-blend-mode:multiply;">',
  '<img class="img-responsive drag3 c2" alt="2" src="img/i2_p233_act2.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
  '<img class="img-responsive drag3 c3" alt="3" src="img/i3_p233_act2.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
  '<img class="img-responsive drag3 c4" alt="4" src="img/i4_p233_act2.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
  '<img class="img-responsive drag3 c5" alt="5" src="img/i5_p233_act2.jpg" style="display:inline-block; mix-blend-mode:multiply;">'
];

var pal10 = [
  '<img class="img-responsive drag30 c1" alt="1" src="img/i6_p233_act2.jpg"  style="display:inline-block; mix-blend-mode:multiply;">',
  '<img class="img-responsive drag30 c2" alt="2" src="img/i7_p233_act2.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
  '<img class="img-responsive drag30 c3" alt="3" src="img/i8_p233_act2.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
  '<img class="img-responsive drag30 c4" alt="4" src="img/i9_p233_act2.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
  '<img class="img-responsive drag30 c5" alt="5" src="img/i10_p233_act2.jpg" style="display:inline-block; mix-blend-mode:multiply;">'
];

var pal2 = [
  '<div style="text-align: center;"><b>48</b></div>',
  '<div style="text-align: center;"><b>72</b></div>',
  '<div style="text-align: center;"><b>64</b></div>',
  '<div style="text-align: center;"><b>24</b></div>',
  '<div style="text-align: center;"><b>81</b></div>'
];

var pal20 = [
  '<div style="text-align: center;"><b>18</b></div>',
  '<div style="text-align: center;"><b>32</b></div>',
  '<div style="text-align: center;"><b>36</b></div>',
  '<div style="text-align: center;"><b>40</b></div>',
  '<div style="text-align: center;"><b>54</b></div>'
];

pal1.sort(f_randomico);
pal10.sort(f_randomico);

var p2vec1 = ["2", "5", "4", "3", "1"];
var p2vec10 = ["2", "4", "1", "5", "3"];
var p2aux2 = [];
var p2aux20 = [];
$(".textos").append(pal1);
$(".textos1").append(pal10);
var myArray2 = ["0", "1", "2", "3", "4"];
var myArray20 = ["0", "1", "2", "3", "4"];
var i, j, k;
for (i = myArray2.length; i; i--) {
  j = Math.floor(Math.random() * i);
  k = myArray2[i - 1];
  myArray2[i - 1] = myArray2[j];
  myArray2[j] = k;
}
var i, j, k;
for (i = myArray20.length; i; i--) {
  j = Math.floor(Math.random() * i);
  k = myArray20[i - 1];
  myArray20[i - 1] = myArray20[j];
  myArray20[j] = k;
}
//aleatorio literal 1
for (var i = 1; i <= 5; i++) {
  var c1 = myArray2[i - 1];
  $(".p2cim1" + i).html(pal2[c1]);
  p2aux2.push(p2vec1[c1]);
}
for (var i = 1; i <= 5; i++) {
  var c1 = myArray20[i - 1];
  $(".p2cim2" + i).html(pal20[c1]);
  p2aux20.push(p2vec10[c1]);
}
$(".drag3").draggable({
  revert: "invalid",
  zIndex: 5,
  containment: ".actividad17",
  scroll: false
});
$(".drag30").draggable({
  revert: "invalid",
  zIndex: 5,
  containment: ".actividad18",
  scroll: false
});

$(".drop3").droppable({
  accept: ".drag3",
  drop: function(e, ui) {
    $(ui.draggable).removeClass("drag3");
    $(ui.draggable).removeClass("bg_palabra");
    ui.draggable.attr("style", "mix-blend-mode:multiply;");
    $(this).append(ui.draggable);
  }
});
$(".drop4").droppable({
  accept: ".drag30",
  drop: function(e, ui) {
    $(ui.draggable).removeClass("drag30");
    $(ui.draggable).removeClass("bg_palabra");
    ui.draggable.attr("style", "mix-blend-mode:multiply;");
    $(this).append(ui.draggable);
  }
});
function pregunta3() {
  var p2im1 = $(".p2im1 > img").attr("alt");
  var p2cont1 = 0;
  if (p2im1 == p2aux2[0]) {
    p2cont1++;
    f_ok($(".p2im1"));
  } else {
    f_no($(".p2im1"));
  }
  var p2im2 = $(".p2im2 > img").attr("alt");
  if (p2im2 == p2aux2[1]) {
    p2cont1++;
    f_ok($(".p2im2"));
  } else {
    f_no($(".p2im2"));
  }
  var p2im3 = $(".p2im3 > img").attr("alt");
  if (p2im3 == p2aux2[2]) {
    p2cont1++;
    f_ok($(".p2im3"));
  } else {
    f_no($(".p2im3"));
  }
  var p2im4 = $(".p2im4 > img").attr("alt");
  if (p2im4 == p2aux2[3]) {
    p2cont1++;
    f_ok($(".p2im4"));
  } else {
    f_no($(".p2im4"));
  }
  var p2im5 = $(".p2im5 > img").attr("alt");
  if (p2im5 == p2aux2[4]) {
    p2cont1++;
    f_ok($(".p2im5"));
  } else {
    f_no($(".p2im5"));
  }
  var p2im6 = $(".p2im6 > img").attr("alt");
  if (p2im6 == p2aux20[0]) {
    p2cont1++;
    f_ok($(".p2im6"));
  } else {
    f_no($(".p2im6"));
  }
  var p2im7 = $(".p2im7 > img").attr("alt");
  if (p2im7 == p2aux20[1]) {
    p2cont1++;
    f_ok($(".p2im7"));
  } else {
    f_no($(".p2im7"));
  }
  var p2im8 = $(".p2im8 > img").attr("alt");
  if (p2im8 == p2aux20[2]) {
    p2cont1++;
    f_ok($(".p2im8"));
  } else {
    f_no($(".p2im8"));
  }
  var p2im9 = $(".p2im9 > img").attr("alt");
  if (p2im9 == p2aux20[3]) {
    p2cont1++;
    f_ok($(".p2im9"));
  } else {
    f_no($(".p2im9"));
  }
  var p2im10 = $(".p2im10 > img").attr("alt");
  if (p2im10 == p2aux20[4]) {
    p2cont1++;
    f_ok($(".p2im10"));
  } else {
    f_no($(".p2im10"));
  }

  var total = (p2cont1 * 2.5) / 10;
  tpre3 = total;
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