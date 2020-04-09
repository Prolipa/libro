var titulos ="preparo"
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
      var numero = Math.round(Math.random() * (100 - 1) + 1);
      $("#num").text(numero);
      var contenido = [];
      contenido[0] = '<label>En dam<sup>2</sup> = </label><label>' + numero + '</label><label>m<sup>2</sup></label><label> = </label><input type=text class="n3" id="res1"><label><sup>2</sup></label><br>';
      contenido[1] = '<label>En dm<sup>2</sup> = </label><label>' + numero + '</label><label>m<sup>2</sup></label><label> = </label><input type=text class="n3" id="res2"><label><sup>2</sup></label><br>';
      contenido[2] = '<label>En cm<sup>2</sup> = </label><label>' + numero + '</label><label>m<sup>2</sup></label><label> = </label><input type=text class="n3" id="res3"><label><sup>2</sup></label><br>';
      $("#contenido1").append(contenido)

  
  };

  function Cargar() {
      $('#contenido1').html('');
      $('#contenido').html('');
      $("#txtNota").text("/" + 10);
      Inicio();
  }
  $(document).ready(function() {
      Inicio();
      $("#Calificar").click(function() {
          var nota = 0;
          //Variables Fila 1
          //Variables Fila Respuesta
          var varA = [];
          varA[0] = String((parseInt($("#num").text()) / 100).toFixed(2))+" dam";
          varA[1] = String(parseInt($("#num").text()) * 100)+" dm";
          varA[2] = String(parseInt($("#num").text()) * 10000)+ " cm";
          console.log(varA);

          if ($("res1").val() == varA[0]) {
              nota = nota + 1;
              $('#res1').css("background-color", "green");
          } else {
              $('#res1').css("background-color", "red");
          }
          if ($("res2").val() == varA[1]) {
              nota = nota + 1;
              $('#res2').css("background-color", "green");
          } else {
              $('#res2').css("background-color", "red");
          }
          if ($("res3").val() == varA[2]) {
              nota = nota + 1;
              $('#res3').css("background-color", "green");
          } else {
              $('#res3').css("background-color", "red");
          }

          var notaFinal = (nota * 10) / 3;
          notaFinal = notaFinal.toFixed(2)
          $("#txtNota").text(notaFinal + "/" + 10);
          $('#Calificar').attr('disabled', true);
          $('#Refrescar').attr('disabled', false);
      });
  });