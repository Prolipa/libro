  titulos = "aplico";

  function Inicio() {
      $('#alertHelp').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
      $('#contenido').html('');
  };

  function Cargar() {
      $('#contenido').html('');
      location.reload();
      Inicio();
  };
  $(document).ready(function() {
      var titulos = 0;

      $("#Calificar").click(function() {
          var nota = 0;
          //Variables Fila 1
          //Variables Fila Respuesta
          if ($("#respuesta1") == "El precio de la gasolina no es bajo") {
              nota = nota + 1;
              $('#respuesta1').css("background-color", "green");
          } else {
              $('#respuesta1').css("background-color", "red");
          }
          if ($("#respuesta2") == "El precio de la gasolina sube") {
              nota = nota + 1;
              $('#respuesta2').css("background-color", "green");
          } else {
              $('#respuesta2').css("background-color", "red");
          }
          if ($("#respuesta3") == "El precio de la gasolina es bajo y el precio de la gasolina no sube") {
              nota = nota + 1;
              $('#respuesta3').css("background-color", "green");
          } else {
              $('#respuesta3').css("background-color", "red");
          }
          if ($("#respuesta4") == "El precio de la gasolina es bajo o el precio de la gasolina no sube") {
              nota = nota + 1;
              $('#respuesta4').css("background-color", "green");
          } else {
              $('#respuesta4').css("background-color", "red");
          }
          if ($("#respuesta5") == "El precio de la gasolina es bajo y el precio de la gasolina sube") {
              nota = nota + 1;
              $('#respuesta5').css("background-color", "green");
          } else {
              $('#respuesta5').css("background-color", "red");
          }
          if ($("#respuesta6") == "Si el precio de la gasolina es bajo, entonces el precio de la gasolina no sube") {
              nota = nota + 1;
              $('#respuesta6').css("background-color", "green");
          } else {
              $('#respuesta6').css("background-color", "red");
          }
          if ($("#respuesta7") == "No es cierto que el precio de la gasolina es bajo y el precio de la gasolina sube") {
              nota = nota + 1;
              $('#respuesta7').css("background-color", "green");
          } else {
              $('#respuesta7').css("background-color", "red");
          }
          var notaFinal = (nota * 10) / 7;
          notaFinal = notaFinal.toFixed(2);
          $("#txtNota").text(notaFinal + "/10");
          $('#Calificar').attr('disabled', true);
          $('#Refrescar').attr('disabled', false);
      });
      Inicio();
  });