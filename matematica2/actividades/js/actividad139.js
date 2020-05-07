var tpre1 = 0;
var tpre2 = 0;

// #region Random1
var random1 = [
  [
    '<span class="enc1" id="2">20 + 6</span>'
    ],
    [
        '<span class="enc1" id="1">30 + 6</span>'
        ],
        [
            '<span class="enc1" id="3">10 + 6</span>'
            ]
];

var ranuno = document.getElementsByClassName("imagen1");
random1.sort(f_randomico);
for (i = 0; i < ranuno.length; i++) {
  $("#" + ranuno[i].id).html(
    '<span width="50px">' + random1[i][0] + "</span> "
  );
}

var random2 = [
    [
      '<span class="enc1" id="4">50 + 4</span>'
      ],
      [
          '<span class="enc1" id="6">40 + 4</span>'
          ],
          [
              '<span class="enc1" id="5">40 + 5</span>'
              ]
  ];
  
  var randos = document.getElementsByClassName("imagen2");
  random2.sort(f_randomico);
  for (i = 0; i < randos.length; i++) {
    $("#" + randos[i].id).html(
      '<span width="50px">' + random2[i][0] + "</span> "
    );
  }

  var random3 = [
    [
      '<span class="enc1" id="7">10 + 3</span>'
      ],
      [
          '<span class="enc1" id="9">30 + 1</span>'
          ],
          [
              '<span class="enc1" id="8">20 + 3</span>'
              ]
  ];
  
  var rantres = document.getElementsByClassName("imagen3");
  random3.sort(f_randomico);
  for (i = 0; i < rantres.length; i++) {
    $("#" + rantres[i].id).html(
      '<span width="50px">' + random3[i][0] + "</span> "
    );
  }
// #endregion

// #region Pregunta1
$('.enc1').click(function() {

    if ($(this).hasClass('subrayar')) {
        $(this).removeClass('subrayar')

    } else {
        $(this).addClass('subrayar')
    }
});

function pregunta1() {
    var respr1 = 0,
    respr2 = 0;
  for (var i = 1; i <= 9; i++) {
    var caja = $("span[id=" + [i] + "]").text();
    if ($("#" + [i] + "").hasClass("subrayar")) {
      if (caja == "20 + 6"||caja == "40 + 5"||caja == "30 + 1") {
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
    tpre1 = total;
  } else {
    tpre1 = total;
  }

  tpre1 = total.toFixed(2);
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
  tpre2 = nota / 2;
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

}
