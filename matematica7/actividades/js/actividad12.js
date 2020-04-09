var titulos = "aplico";

  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#r0").css("background-color", "white");
      $("#r1").css("background-color", "white");
      $("#r2").css("background-color", "white");
      $("#r3").css("background-color", "white");
      $("#r4").css("background-color", "white");
      $("#r5").css("background-color", "white");
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
      $("#r0 option:selected").text();
      $("#r1 option:selected").text();
      $("#r2 option:selected").text();
      $("#r3 option:selected").text();
      $("#r4 option:selected").text();
      $("#r5 option:selected").text();
      var obj1 = { "V": "V", "F": "F" };
      var obj2 = { "F": "F", "V": "V" };
      $('#contenido').append('');
      $('#Respuestas').append('');
      var i = 1;
      var valoresA = 0;
      var valoresB = 0;
      var valoresC = 0;
      var valoresE = 0;
      var resA = "";
      var conte1 = 0;
      var conte2 = 0;
      var b = 0;
      var respuestasA = [];
      var respA = ["", "81 000 000 000 000", "130 000 000 000", "1 000 000 000 520"];
      var preguntasB = ["", "Ochenta y un billones", "Ciento treinta mil millones", "Un billón quinientos veinte"];
      var arreglo = [];
      var i = 0;
      var nuevo = [];
      for (var i = 1; i <= 3; i++){
                respuestasA[i] = '<td><div draggable="true" ondragstart="drag(event)" id="drag' + i + '" style="font-size:12px; text-align:center; background-color: white; padding-right: 10px;padding-left: 10px;"><label>' + preguntasB[i] + '</label></div></td>';
      }
      nuevo[1] = '<td id="div1a" ondrop="drop(event)" ondragover="allowDrop(event)"></td>';
      nuevo[2] = '<td id="div2a" ondrop="drop(event)" ondragover="allowDrop(event)"></td>';
      nuevo[3] = '<td id="div3a" ondrop="drop(event)" ondragover="allowDrop(event)"></td>';
      var alea = Math.round(Math.random() * (3 - 1) + 1);
      debugger;
      if (alea == 1) {
          $("#con1").append('<tr><td>' + respA[2] + '</td><td>' + respA[1] + '</td><td>' + respA[3] + '</td></tr>');
          $("#a").append('<tr>'+nuevo[2] + nuevo[1] + nuevo[3] + '</tr>');

      }
      if (alea == 2) {
          $("#con1").append('<tr><td>' + respA[1] + '</td><td>' + respA[3] + '</td><td>' + respA[2] + '</td></tr>');
          $("#a").append('<tr>' + nuevo[1] + nuevo[3] + nuevo[2] + '</tr>');
      }

      if (alea == 3) {
          $("#con1").append('<tr><td>' + respA[3] + '</td><td>' + respA[2] + '</td><td>' + respA[1] + '</td></tr>')
          $("#a").append('<tr>' + nuevo[3] + nuevo[2] + nuevo[1] + '</tr>');
      }
      $("#Respuestas").append(respuestasA);



  };
  var divs = [];
  var contenidos = [];
  var k = 0;
  var z = 0;

  function Cargar() {
      $('#contenido').html('');
      $('#Respuestas').html('');
      contenidos = [];
      divs = [];
      k = 0;
      z = 0;
      Inicio();
  }

  function allowDrop(ev) {
      ev.preventDefault();

  }

  function drag(ev) {

      ev.dataTransfer.setData("text", ev.target.id);
      console.log(ev.target.id);
      divs[k] = ev.target.id;
      z = z + 1;
      console.log(divs);
  }

  function drop(ev) {

      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
      var n = '#' + ev.target.id;
      contenidos[k] = ev.target.id;
      console.log(contenidos);
      k = k + 1;

  }


  $(document).ready(function() {
      Inicio();
      $("#Calificar").click(function() {
          var nota = 0;
          //Variables Respuestas Txt
          debugger;
          for (var i = 0; i <= 6; i++) {
              //console.log(res3[i]);
              if (contenidos.length == 0) {
                  $('#div1a').css("border", "4px solid red");
                  $('#div1b').css("border", "4px solid red");
                  $('#div1c').css("border", "4px solid red");
                  $('#div2a').css("border", "4px solid red");
                  $('#div2b').css("border", "4px solid red");
                  $('#div2c').css("border", "4px solid red");
              }
              switch (contenidos[i]) {
                  case "div1a":
                      if ((divs[i]) == "drag1") {
                          nota = nota + 1;
                          $('#div1a').css("border", "4px solid green");

                      } else {
                          $('#div1a').css("border", "4px solid red");
                      }
                      break;
                  case "div2a":
                      if ((divs[i]) == "drag2") {
                          nota = nota + 1;
                          $('#div2a').css("border", "4px solid green");
                      } else {
                          $('#div2a').css("border", "4px solid red");
                      }
                      break;
                  case "div3a":
                      if ((divs[i]) == "drag3") {
                          nota = nota + 1;
                          $('#div3a').css("border", "4px solid green");
                      } else {
                          $('#div3a').css("border", "4px solid red");
                      }
                      break;
              }
          }

          var notaFinal = (nota * 10) / 3;
          notaFinal = notaFinal.toFixed(2)
          $("#txtNota").text(notaFinal + "/10");
          $('#Calificar').attr('disabled', true);
          $('#Refrescar').attr('disabled', false);
      });
  });