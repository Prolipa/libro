 var titulos = "prueba";

  function Inicio() {
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
      var aleatorio = Math.round(Math.random() * (3 - 1) + 1);
      debugger;
      if(aleatorio==2)     
      $("#cont1").css("display", "block");
      else
      $("#cont2").css("display", "block");





  };

  function Cargar() {

      $('#contenido').html('');
      $('#contenido2').html('');
      $('#contenido3').html('');
      $("#cont1").css("display", "none");
      $("#cont2").css("display", "none");
      Inicio();
  }
  $(document).ready(function() {
      Inicio();
      $("#Calificar").click(function() {
          var nota = 0;
          //Variables Fila 1
          var conta = 0;
          var conta1 = 0;
          var contaB = 0;
          var conta1B = 0;
          var contaC = 0;
          var conta1C = 0;
         
          if ($("#filaA").val() == "6" || $("#fila2A").val() == "6") {
              nota = nota + 1;
              conta = 1;
              $('#filaA').css("background-color", "green");
              $('#fila2A').css("background-color", "green");
          } else {
              $('#filaA').css("background-color", "red");
              $('#fila2A').css("background-color", "red");
          }

          if ($("#columnaA").val() == "6" || $("#columna2A").val() == "6") {
              nota = nota + 1;
              conta1 = 2;
              $('#columna2A').css("background-color", "green");
              $('#columnaA').css("background-color", "green");
          } else {
              $('#columna2A').css("background-color", "red");
              $('#columnaA').css("background-color", "red");
          }

          if ($("#resultadoA1").val() == "36 cuadrados" || $("#resultado2A1").val() == "36 cuadrados") {
              nota = nota + 1;
              conta1 = 2;
              $('#resultadoA1').css("background-color", "green");
              $('#resultado2A1').css("background-color", "green");
          } else {
              $('#resultadoA1').css("background-color", "red");
              $('#resultado2A1').css("background-color", "red");
          }

          if ($("#filaB").val() == "3" || $("#fila2B").val() == "3") {
              nota = nota + 1;
              conta = 1;
              $('#filaB').css("background-color", "green");
              $('#fila2B').css("background-color", "green");
          } else {
              $('#filaB').css("background-color", "red");
              $('#fila2B').css("background-color", "red");
          }

          if ($("#columnaB").val() == "3" || $("#columna2B").val() == "3") {
              nota = nota + 1;
              conta1 = 2;
              $('#columna2B').css("background-color", "green");
              $('#columnaB').css("background-color", "green");
          } else {
              $('#columna2B').css("background-color", "red");
              $('#columnaB').css("background-color", "red");
          }

          if ($("#columnaB1").val() == "3" || $("#columna2B1").val() == "3") {
              nota = nota + 1;
              conta1 = 2;
              $('#columna2B1').css("background-color", "green");
              $('#columnaB1').css("background-color", "green");
          } else {
              $('#columna2B1').css("background-color", "red");
              $('#columnaB1').css("background-color", "red");
          }

          if ($("#resultadoB1").val() == "27 cubos" || $("#resultado2B").val() == "27 cubos") {
              nota = nota + 1;
              conta1 = 2;
              $('#resultadoB1').css("background-color", "green");
              $('#resultado2B1').css("background-color", "green");
          } else {
              $('#resultadoB1').css("background-color", "red");
              $('#resultado2B1').css("background-color", "red");
          }          

          if ($("#resultado2B").val() == "27" || $("#resultadoB").val() == "27") {
              nota = nota + 1;
              conta1 = 2;
              $('#resultadoB').css("background-color", "green");
              $('#resultado2B').css("background-color", "green");
          } else {
              $('#resultadoB').css("background-color", "red");
              $('#resultado2B').css("background-color", "red");
          } 
          
          if ($("#resultadoA").val() == "36" || $("#resultado2A").val() == "36") {
              nota = nota + 1;
              conta1 = 2;
              $('#resultadoA').css("background-color", "green");
              $('#resultado2A').css("background-color", "green");
          } else {
              $('#resultadoA').css("background-color", "red");
              $('#resultado2A').css("background-color", "red");
          }


          
          var notaFinal = (nota * 10) / 9;
          notaFinal = notaFinal.toFixed(2)
          $("#txtNota").text(notaFinal + "/10");
          $('#Calificar').attr('disabled', true);
          $('#Refrescar').attr('disabled', false);
      });
  });