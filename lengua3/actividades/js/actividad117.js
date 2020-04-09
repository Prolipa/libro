var titulos = "exploro";
f_titulos();
$("#n_pagina").html('97'); 

document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
  });
  document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 3);
  });
  
  document.getElementById("pre3a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
  });
  document.getElementById("pre3a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre3a"), 3);
  });
  
  var tpre1 = 0;
  var tpre2 = 0;
  var tpre3 = 0;
  
  // #region Pregunta1
  function pregunta1() {
    var pre1a = document.getElementById("pre1a").value;
    tpre1 = pre1a;
    $("#pre1a").val(parseFloat(tpre1).toFixed(2));
  }
  // #endregion
  
  // #region Random2
  var random2 = [
      ['<h4><b><span class="enc2" id="3">Informar sobre las noticias del mundo.</span></b></h4>'],
      ['<h4><b><span class="enc2" id="1">Informar sobre temas relacionados con la institución educativa.</b></h4>'],
      ['<h4><b><span class="enc2" id="2">Informar sobre promociones y descuentos.</span></b></h4>']
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
      for (var i = 1; i <= 3; i++) {
        var caja = $("span[id=" + [i] + "]").text();
        if ($("#" + [i] + "").hasClass("subrayar")) {
          if (caja == "Informar sobre temas relacionados con la institución educativa.")  {
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
    
      var total = ((respr1 ) * 4) / 1;
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
  

  
  // #region Calculo Nota Final
  function NotaFinal() {
    var pre1a = document.getElementById("pre1a").value;
    if (pre1a == "") {
      alert("Pregunta 1: Califiqué la pregunta");
    } else {
      var pre3a = document.getElementById("pre3a").value;
      if (pre3a == "") {
        alert("Pregunta 3: Califiqué la pregunta");
      } else {
        pregunta1();
        pregunta2();
        pregunta3();
        var Nf =
          parseFloat(tpre1) +
          parseFloat(tpre2) +
          parseFloat(tpre3);
        var Vtotal = Nf.toFixed(2);
        $("#txtNota").html(Vtotal + "/10");
        document.getElementById("bt_comprobar").disabled = true;
      }
    }
  }
  
  // #endregion
  