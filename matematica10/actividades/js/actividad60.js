var titulos = "refuerzo";
numero_pagina(48);

var tpre1 = 0;
var tpre2 = 0;
var tpre3 = 0;
var tpre4 = 0;
var tpre5 = 0;
// #region Pregunta1
document.getElementById("pre1").addEventListener("keypress", () => {
  validNumero(0, 1, 1);
});
document.getElementById("pre1").addEventListener("keyup", () => {
  validMaxIngreso(document.getElementById("pre1"), 2);
});

function pregunta1() {
  var pre1 = document.getElementById("pre1").value;
  if (pre1 == "") {
    tpre1 = 0;
  } else {
    tpre1 = pre1;
  }
}

// #endregion

// #region Random2
var random2 = [
    ['<span>Según sus ángulos se pueden clasificar en</span>'+
    '<input type="text" style="width:100px;text-align:center" onKeyUp="this.value=this.value.toLowerCase();" id="cj2c"><span>, </span>'+
    '<input type="text" style="width:100px;text-align:center" onKeyUp="this.value=this.value.toLowerCase();" id="cj2d"><span> y </span>'+
    '<input type="text" style="width:100px;text-align:center" onKeyUp="this.value=this.value.toLowerCase();" id="cj2e"><span>.</span>'
    ],
    ['<span>Los triángulos se pueden clasificar según sus</span>'+
    '<input type="text" style="width:100px;text-align:center" onKeyUp="this.value=this.value.toLowerCase();" id="cj2a"><span> y sus</span>'+
    '<input type="text" style="width:100px;text-align:center" onKeyUp="this.value=this.value.toLowerCase();" id="cj2b"><span>.</span>'
    ],
    ['<span>Los triángulos</span>'+
    '<input type="text" style="width:100px;text-align:center" onKeyUp="this.value=this.value.toLowerCase();" id="cj2f"><span> tienen sus tres</span>'+
    '<input type="text" style="width:100px;text-align:center" onKeyUp="this.value=this.value.toLowerCase();" id="cj2g"><span> iguales y sus</span>'+
    '<input type="text" style="width:100px;text-align:center" onKeyUp="this.value=this.value.toLowerCase();" id="cj2h"><span> también iguales, de</span>'+
    '<input type="text" style="width:100px;text-align:center" onKeyUp="this.value=this.value.toLowerCase();" id="cj2i"><span>grados cada uno.</span>'
    ]
  ];
  
  var sumaNum = document.getElementsByClassName("imagen2");
  random2.sort(f_randomico);
  for (i = 0; i < sumaNum.length; i++) {
    $("#" + sumaNum[i].id).html(
      '<span width="50px">' + random2[i][0] + "</span> "
    );
  }
// #endregion

// #region Pregunta2
function pregunta2() {
  var cor = 0;
  var inc = 0;

  var cj2a = document.getElementById("cj2a").value;
  var cj2b = document.getElementById("cj2b").value;
  var cj2c = document.getElementById("cj2c").value;
  var cj2d = document.getElementById("cj2d").value;
  var cj2e = document.getElementById("cj2e").value;
  var cj2f = document.getElementById("cj2f").value;
  var cj2g = document.getElementById("cj2g").value;
  var cj2h = document.getElementById("cj2h").value;
  var cj2i = document.getElementById("cj2i").value;

  if (cj2a == "lados") {
    cor = cor + 1;
    $("#cj2a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2a").addClass("incorrecto");
  }

  if (cj2b == "ángulos") {
    cor = cor + 1;
    $("#cj2b").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2b").addClass("incorrecto");
  }

  if (cj2c == "acutángulo") {
    cor = cor + 1;
    $("#cj2c").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2c").addClass("incorrecto");
  }

  if (cj2d == "rectángulo") {
    cor = cor + 1;
    $("#cj2d").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2d").addClass("incorrecto");
  }

  if (cj2e == "obtusángulo") {
    cor = cor + 1;
    $("#cj2e").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2e").addClass("incorrecto");
  }

  if (cj2f == "equiláteros") {
    cor = cor + 1;
    $("#cj2f").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2f").addClass("incorrecto");
  }

  if (cj2g == "lados") {
    cor = cor + 1;
    $("#cj2g").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2g").addClass("incorrecto");
  }

  if (cj2h == "ángulos") {
    cor = cor + 1;
    $("#cj2h").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2h").addClass("incorrecto");
  }

  if (cj2i == "60") {
    cor = cor + 1;
    $("#cj2i").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj2i").addClass("incorrecto");
  }

  var total = ((cor ) * 2) / 9;
  if (total < 0) {
    total = 0;
    tpre2 = total.toFixed(2);
  } else {
    tpre2 = total.toFixed(2);
  }
}
// #endregion

// #region Random3
var random3 = [
    ['<span>Atendiendo al requerimiento del inciso anterior,<b>calcula</b> cuál será el área que podrá ocupar la edificación.</span><br><br>'+
    '<span>R=</span><input type="text" style="width:100px;text-align:center" onKeyUp="this.value=this.value.toLowerCase();" id="cj3b">'+
    '<span>m<sup>2</sup></span>'
    ],
    ['<span>¿Cuánto le costará comprar el terreno en cuestión?</span><br><br>'+
    '<span>R=</span><input type="text" style="width:100px;text-align:center" onKeyUp="this.value=this.value.toLowerCase();" id="cj3a">'+
    '<span>dólares</span>'
    ],
    ['<span>Si debe dejar un pasillo de 1 metro de ancho por uno de sus costados, ¿por cuál de ellos debe hacerlo para perder el menor espacio posible?</span><br><br>'+
    '<select id="cboliteralb" class="form-control"><option value="1">--Seleccione--</option>'+
    '<option value="2">Debe dejarlo por el costado que tiene 50 m de largo.</option>'+
    '<option value="3">Debe dejarlo por el costado que tiene 30 m de largo.</option>'+
    '<option value="4">Debe dejarlo por el costado que tiene 80 m de largo.</option></select>'
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

// #region Pregunta3
function pregunta3() {
    var cor = 0;
    var inc = 0;
  
    var cj3a = document.getElementById("cj3a").value;
    var cj3b = document.getElementById("cj3b").value;
    var com=document.getElementById("cboliteralb").value;
  
    if (cj3a == "840000") {
      cor = cor + 1;
      $("#cj3a").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#cj3a").addClass("incorrecto");
    }
  
    if (cj3b == "1170") {
      cor = cor + 1;
      $("#cj3b").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#cj3b").addClass("incorrecto");
    }
    if(com!="1")
    {
        if(com=="3")
        {
            cor=cor+1;
            $("#cboliteralb").addClass('correcto')

        }
        else
        {
            inc=inc+1;
            $("#cboliteralb").removeClass('correcto')
            $("#cboliteralb").addClass('incorrecto')
        }
    }
    else
    {
        $("#cboliteralb").removeClass('correcto')
            $("#cboliteralb").addClass('incorrecto')
    }

  
   
  
    var total = ((cor ) * 2) / 3;
    if (total < 0) {
      total = 0;
      tpre3 = total.toFixed(2);
    } else {
      tpre3 = total.toFixed(2);
    }
}
// #endregion

// #region Random4
var random4 = [
    ['<span><b>¿Cuánto mide el perímetro del triángulo isósceles?</span><br><br>'+
    '<span>P=</span><input type="text" style="width:100px;text-align:center" onKeyUp="this.value=this.value.toLowerCase();" id="cj4b">'+
    '<span>cm</span>'
    ],
    ['<span><b>Calcula</b> de qué largo deben ser los cordones superiores.</span><br><br>'+
    '<span>l=</span><input type="text" style="width:100px;text-align:center" onKeyUp="this.value=this.value.toLowerCase();" id="cj4a">'+
    '<span>cm</span>'
    ],
    ['<span>Si el largo de la casa es de 2 m, ¿cuál será la superficie del techo?</span><br><br>'+
    '<span>S=</span><input type="text" style="width:100px;text-align:center" onKeyUp="this.value=this.value.toLowerCase();" id="cj4c">'+
    '<span>m<sup>2</sup></span>'
    ]
  ];
  
  var rancuatro = document.getElementsByClassName("imagen4");
  random4.sort(f_randomico);
  for (i = 0; i < rancuatro.length; i++) {
    $("#" + rancuatro[i].id).html(
      '<span width="50px">' + random4[i][0] + "</span> "
    );
  }
// #endregion

// #region Pregunta4
function pregunta4() {
    var cor = 0;
    var inc = 0;
  
    var cj4a = document.getElementById("cj4a").value;
    var cj4b = document.getElementById("cj4b").value;
    var cj4c = document.getElementById("cj4c").value;
  
    if (cj4a == "41") {
      cor = cor + 1;
      $("#cj4a").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#cj4a").addClass("incorrecto");
    }
  
    if (cj4b == "162") {
      cor = cor + 1;
      $("#cj4b").addClass("correcto");
    } else {
      inc = inc + 1;
      $("#cj4b").addClass("incorrecto");
    }

    if (cj4c == "1,64") {
        cor = cor + 1;
        $("#cj4c").addClass("correcto");
      } else {
        inc = inc + 1;
        $("#cj4c").addClass("incorrecto");
      }
    
    var total = ((cor ) * 2) / 3;
    if (total < 0) {
      total = 0;
      tpre4 = total.toFixed(2);
    } else {
      tpre4 = total.toFixed(2);
    }
}
// #endregion

// #region Pregunta5
function pregunta5() {
  var cor = 0;
  var inc = 0;

  var cj5a = document.getElementById("cj5a").value;
  if (cj5a == "341,33") {
    cor = cor + 1;
    $("#cj5a").addClass("correcto");
  } else {
    inc = inc + 1;
    $("#cj5a").addClass("incorrecto");
  }

  var total = ((cor ) * 2) / 1;
  if (total < 0) {
    total = 0;
    tpre5 = total.toFixed(2);
  } else {
    tpre5 = total.toFixed(2);
  }
  }
// #endregion

// #region Calculo Nota Final
function NotaFinal() {
var pre1 = document.getElementById("pre1").value;
if(pre1=="")
{
    alert("Califiqué todas la preguntas");
}
else
{    
  pregunta1();
  pregunta2();
  pregunta3();
  pregunta4();
  pregunta5();

  var Nf =
    parseFloat(tpre1) +
    parseFloat(tpre2) +
    parseFloat(tpre3) +
    parseFloat(tpre4) +
    parseFloat(tpre5);
  var Vtotal = Nf.toFixed(2);
  $("#txtNota").html(Vtotal);
  document.getElementById("bt_comprobar").disabled = true;
}
}

// #endregion
