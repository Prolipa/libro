 var titulos = "prueba";

  function Inicio() {
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
      var aleatorio = Math.round(Math.random() * (3 - 1) + 1);

      var figuras = [];
      figuras[1] = '<img src="img/i1_p13_act7.jpg">' +
          '<br>' +
          '<input type="text" id="fig1" style="width: 100px">';
      figuras[2] = '<img src="img/i2_p13_act7.jpg">' +
          '<br>' +
          '<input type="text" id="fig2" style="width: 100px;left: 38px;position: absolute;">';
      figuras[3] = '<img src="img/i3_p13_act7.jpg">' +
          '<br>' +
          '<input type="text" id="fig3" style="width: 100px;left: 38px;position: absolute;">';
      figuras[4] = '<img src="img/i4_p13_act7.jpg">' +
          '<br>' +
          '<input type="text" id="fig4" style="width: 150px;left: 30px;position: absolute;">';
      figuras[5] = '<img src="img/i5_p13_act7.jpg">' +
          '<br>' +
          '<input type="text" id="fig5" style="width: 100px;">';
      figuras[6] = '<img src="img/i6_p13_act7.jpg">' +
          '<br>' +
          '<input type="text" id="fig6" style="width: 150px;left: 20px;position: absolute;">';
      figuras[7] = '<img src="img/i7_p13_act7.jpg">' +
          '<br>' +
          '<input type="text" id="fig7" style="width: 100px;">';
      figuras[8] = '<img src="img/i8_p13_act7.jpg">' +
          '<br>' +
          '<input type="text" id="fig8" style="width: 100px;left: 38px;position: absolute;">';
      console.log("aleatorio:  " + aleatorio);
      if (aleatorio == 1) {
          for (var i = 0; i <= 8; i++) {
              $("#cont" + i).append(figuras[i]);
          }
      }
      if (aleatorio == 2) {
          $("#cont1").append(figuras[8]);
          $("#cont2").append(figuras[7]);
          $("#cont3").append(figuras[6]);
          $("#cont4").append(figuras[5]);
          $("#cont5").append(figuras[4]);
          $("#cont6").append(figuras[3]);
          $("#cont7").append(figuras[2]);
          $("#cont8").append(figuras[1]);
      }
      if (aleatorio == 3) {
          $("#cont1").append(figuras[8]);
          $("#cont3").append(figuras[7]);
          $("#cont5").append(figuras[6]);
          $("#cont7").append(figuras[5]);
          $("#cont2").append(figuras[4]);
          $("#cont4").append(figuras[3]);
          $("#cont6").append(figuras[2]);
          $("#cont8").append(figuras[1]);
      }

  };

  function Cargar() {
      for (var i = 0; i <= 8; i++) {
          $("#cont" + i).html('');
      }
      $("#txtNota").text("/10");

      Inicio();
  }
  $(document).ready(function() {
      Inicio();
      $("#Calificar").click(function() {
          var nota = 0;
          if (($("#fig1").val()).toLowerCase() == "triángulo") {
              nota = nota + 1;
              $('#fig1').css("background-color", "green");
          } else {
              $('#fig1').css("background-color", "red");
          }
          
          if (($("#fig2").val()).toLowerCase() == "rectángulo") {
              nota = nota + 1;
              $('#fig2').css("background-color", "green");
          } else {
              $('#fig2').css("background-color", "red");
          }

          if (($("#fig3").val()).toLowerCase() == "romboide") {
              nota = nota + 1;
              $('#fig3').css("background-color", "green");
          } else {
              $('#fig3').css("background-color", "red");
          }

          if (($("#fig4").val()).toLowerCase() == "trapecio isósceles") {
              nota = nota + 1;
              $('#fig4').css("background-color", "green");
          } else {
              $('#fig4').css("background-color", "red");
          }

          if (($("#fig5").val()).toLowerCase() == "cuadrado") {
              nota = nota + 1;
              $('#fig5').css("background-color", "green");
          } else {
              $('#fig5').css("background-color", "red");
          }
          
          if (($("#fig6").val()).toLowerCase() == "trapecio rectangular") {
              nota = nota + 1;
              $('#fig6').css("background-color", "green");
          } else {
              $('#fig6').css("background-color", "red");
          }

          if (($("#fig7").val()).toLowerCase() == "círculo") {
              nota = nota + 1;
              $('#fig7').css("background-color", "green");
          } else {
              $('#fig7').css("background-color", "red");
          }

          if (($("#fig8").val()).toLowerCase() == "rombo") {
              nota = nota + 1;
              $('#fig8').css("background-color", "green");
          } else {
              $('#fig8').css("background-color", "red");
          }     
          var notaFinal = (nota * 10) / 8;
          notaFinal = notaFinal.toFixed(2)
          $("#txtNota").text(notaFinal + "/10");
          $('#Calificar').attr('disabled', true);
          $('#Refrescar').attr('disabled', false);
      });
  });