var titulos ="preparo"
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
      var posicion = [];
      var respuestas = [];
      var celdas1 = [];
      var celdas2 = [];
      var encabezadop = ["u", "d", "c",
          "um", "dm", "cm",
          "uM", "dM", "cM",
          "umM", "dmM", "cmM",
          "uB", "dB", "cB"
      ];
      var numero = [];
      numero[0] = Math.round(Math.random() * (1000000000000000 - 1) + 1);
      numero[1] = Math.round(Math.random() * (1000000000000000 - 1) + 1);
      var rot = [];
      var str = [];
      str[0] = numero[0].toString();
      str[1] = numero[0].toString();
      var res = []
      res[0] = str[0].split("");
      res[1] = str[1].split("");
      encabezadop.reverse()
      var ini1 = res[0].length;
      var ini2 = res[1].length;
      console.log(ini1)
      console.log(ini2)
      for (var j = 0; j <= 14; j++) {
          rot[j] = '<th>' + encabezadop[j] + '</th>';
      }

      for (var j = 0; j <= ini1-1; j++) {
          celdas1[j] = '<td><input type="number" id="resA' + j + '"></td>'
      }
      for (var k = 0; k <= ini2-1; k++) {
          celdas2[k] = '<td><input type="number" id="resB' + k + '"></td>'
      }
      respuestas[0] = '<tr>' + celdas1 + '</tr>';
      respuestas[1] = '<tr>' + celdas2 + '</tr>';
      $("#litA").append(numero[0]);
      $("#litB").append(numero[1]);
      $("#contenido").append(respuestas);
      $("#encabezado").append(rot);
  };

  function Cargar() {
      $("#contenido").html('');
      $("#encabezado").html('');
      $("#litA").html('');
      $("#litB").html('');
      $("#num").html('');

      Inicio();
  }
  $(document).ready(function() {
      Inicio();
      $("#Calificar").click(function() {
          var nota = 0;
          var nu1 = [];
          var str = [];
          var r1 = 0;
          var r2 = 0;
          nu1[0] = $("#litA").text();
          nu1[1] = $("#litB").text();
          str[0] = nu1[0].toString();
          str[1] = nu1[1].toString();
          r1 = str[0].split("");
          r2 = str[1].split("");
          debugger;

          for (var i = 0; i <= r1.length-1; i++) {
              if ($("#resA" + i).val() == r1[i]) {
                  nota = nota + 1;
                  $('#resA' + i).css("border", "4px solid green");
              } else {
                  $('#resA' + i).css("border", "4px solid red");
              }
          }
          for (var i = 0; i <= r2.length-1; i++) {
              if ($("#resB" + i).val() == r2[i]) {
                  nota = nota + 1;
                  $('#resB' + i).css("border", "4px solid green");
              } else {
                  $('#resB' + i).css("border", "4px solid red");
              }
          }
          console.log(r1);
          console.log(r2);
          console.log(r1.length);
          console.log(r2.length);
         
          var notaFinal = 0;
          notaFinal = (nota * 10);
          notaFinal = notaFinal /(r1.length+r2.length-2);
          notaFinal = notaFinal.toFixed(2);
          $("#txtNota").text(notaFinal + "/" + 10);
          $('#Calificar').attr('disabled', true);
          $('#Refrescar').attr('disabled', false);
      });
  });