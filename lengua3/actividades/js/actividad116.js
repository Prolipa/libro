
document.getElementById("pre3a").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre3a"), 2.5);
});

document.getElementById("pre4a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
  });
  document.getElementById("pre4a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre4a"), 2.5);
  });

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;

// #region Pregunta1
var titulos = "aplico";
f_titulos();
$("#n_pagina").html('97');

var pal1=['<img class="img-responsive drag3 c1" src="img/i2_p97_act1.jpg" alt="1" style="display:inline-block; mix-blend-mode:multiply;">',
'<img class="img-responsive drag3 c2" alt="2" src="img/i3_p97_act1.jpg" style="display:inline-block; mix-blend-mode:multiply;">',
'<img class="img-responsive drag3 c3" alt="3" src="img/i4_p97_act1.jpg" style="display:inline-block; mix-blend-mode:multiply;">'];
var pal2=['<div><b>Martes 12</b></div>',
'<div><b>Cuidemos el ambiente</b></div>',
'<div><b>Invitación al Club de Atletismo, calendario escolar y cuidado del medio ambiente</b></div>'];

pal1.sort(f_randomico);
var p2vec1=['3','1','2'];
var p2aux2=[];
$(".textos").append(pal1);
var myArray2 = ['0','1','2'];
var i,j,k;
for (i = myArray2.length; i; i--) {
j = Math.floor(Math.random() * i);
k = myArray2[i - 1];
myArray2[i - 1] = myArray2[j];
myArray2[j] = k;
}
//aleatorio literal 1
for (var i = 1; i <= 5 ; i++) {
var c1=myArray2[i-1];
$(".p2cim1"+i).html(pal2[c1]);
p2aux2.push(p2vec1[c1]);

};
$(".drag3").draggable({
revert:"invalid",
zIndex:5,
containment: ".actividad17",
scroll: false,
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
function pregunta1() {
    var p2im1=$('.p2im1 > img').attr('alt');
    var p2cont1=0;
    if(p2im1==p2aux2[0]){
        p2cont1++;
        f_ok($('.p2im1'));
    }else{
        f_no($('.p2im1'));
    }
    var p2im2=$('.p2im2 > img').attr('alt');
    if(p2im2==p2aux2[1]){
        p2cont1++;
        f_ok($('.p2im2'));
    }else{
        f_no($('.p2im2'));
    }
    var p2im3=$('.p2im3 > img').attr('alt');
    if(p2im3==p2aux2[2]){
        p2cont1++;
        f_ok($('.p2im3'));
    }else{
        f_no($('.p2im3'));
    }

    var total= ((p2cont1*2.5)/3)
    tpre1 = total;
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
}
// #endregion

// #region Random2
var random2 = [
    ['<h4><b><span class="enc2" id="3">Navidad</span></b></h4>'],
    ['<h4><b><span class="enc2" id="1">deporte</b></h4>'],
    ['<h4><b><span class="enc2" id="5">cuidado del ambiente</span></b></h4>'],
    ['<h4><b><span class="enc2" id="6">calendario</span></b></h4>'],
    ['<h4><b><span class="enc2" id="4">amistad</span></b></h4>'],
    ['<h4><b><span class="enc2" id="2">evaluaciones parciales</span></b></h4>']
  ];
  
  var randos = document.getElementsByClassName("imagen2");
  random2.sort(f_randomico);
  for (i = 0; i < randos.length; i++) {
    $("#" + randos[i].id).html(
      '<span width="50px">' + random2[i][0] + "</span> "
    );
  }
  // #endregion

// #region Pregunta2
$(".enc2").click(function() {
    if ($(this).hasClass("subrayar")) {
      $(this).removeClass("subrayar");
    } else {
      $(this).addClass("subrayar");
    }
  });
  
  function pregunta2() {
    var respr1 = 0,
      respr2 = 0;
    for (var i = 1; i <= 6; i++) {
      var caja = $("span[id=" + [i] + "]").text();
      if ($("#" + [i] + "").hasClass("subrayar")) {
        if (caja == "cuidado del ambiente")  {
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
  
    var total = ((respr1-respr2 ) * 2.5) / 1;
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

// #region Pregunta3
function pregunta3() {
  var pre3a = document.getElementById("pre3a").value;
  tpre3 = pre3a;
  $("#pre3a").val(parseFloat(tpre3).toFixed(2));
}
// #endregion

// #region Pregunta4
function pregunta4() {
    var pre4a = document.getElementById("pre4a").value;
    tpre4 = pre4a;
    $("#pre4a").val(parseFloat(tpre4).toFixed(2));
  }
  // #endregion

// #region Calculo Nota Final
function NotaFinal() {
  var pre3a = document.getElementById("pre3a").value;
  if (pre3a == "") {
    alert("Pregunta 3: Califiqué la pregunta");
  } else {
    var pre4a = document.getElementById("pre4a").value;
    if (pre4a == "") {
      alert("Pregunta 4: Califiqué la pregunta");
    } else {
      pregunta1();
      pregunta2();
      pregunta3();
      pregunta4();
      var Nf =
        parseFloat(tpre1) +
        parseFloat(tpre2) +
        parseFloat(tpre3) +
        parseFloat(tpre4);
      var Vtotal = Nf.toFixed(2);
      $("#txtNota").html(Vtotal + "/10");
      document.getElementById("bt_comprobar").disabled = true;
    }
  }
}

// #endregion
