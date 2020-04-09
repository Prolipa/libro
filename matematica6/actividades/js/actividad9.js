var titulos = "reflexiono";

  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
      var posicion = [];
      var respuestas = [];
      var encabezadop = ["u", "d", "c",
          "um", "dm", "cm",
          "uM", "dM", "cM",
          "umM", "dmM", "cmM",
          "uB", "dB", "cB"
      ];
      var numero = Math.round(Math.random() * (1000000000000000 - 1) + 1);
      var rot = [];
      var str = numero.toString()
      var res = str.split("");
      encabezadop.reverse()
      var ini = res.length;
      console.log(ini)
      posicion[0] = Math.round(Math.random() * ((ini-1) - 1) + 1);
      do {
          posicion[1] = Math.round(Math.random() * ((ini-1) - 1) + 1);
      } while (posicion[0] == posicion[1]);
      $("#num").append(numero);
      for (var j = 0; j <= 14; j++){
          rot[j] = '<th>' + encabezadop[j] + '</th>';
      }
      for (var i = 0; i <= 14; i++) {
          if (i == posicion[0] || i == posicion[1]) {
              respuestas[i] = '<td>' + res[i] + '</td>';
          } else {
              respuestas[i] = '<td><input type="number" id="valores' + i + '"></td>'
          }
      }
      $("#contenido").append(respuestas);
      $("#encabezado").append(rot);


  };

  function Cargar() {
      $("#contenido").html('');
      $("#encabezado").html('');
      $("#num").html('');
      location.reload();

      Inicio();
  }
  $(document).ready(function() {
      Inicio();
      $("#Calificar").click(function() {
          var nota = 0;
          var nu1 = $("#num").text();
          var str = nu1.toString()
          var r1 = str.split("");
          for (var i = 0; i <= r1.length; i++) {
              if ($("#valores" + i).val() == r1[i]) {
                  nota = nota + 1;
                  $('#valores' + i).css("border", "4px solid green");
              } else {
                  $('#valores' + i).css("border", "4px solid red");
              }
          }
          debugger;
          var notaFinal = 0;
          notaFinal = (nota * 10);
          notaFinal = notaFinal / 14;
          notaFinal = notaFinal.toFixed(2);
          $("#txtNota").text(notaFinal + "/" + 10);
          $('#Calificar').attr('disabled', true);
          $('#Refrescar').attr('disabled', false);
      });
  });