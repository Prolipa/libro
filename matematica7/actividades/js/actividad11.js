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
      $("#txtNota").text("/10");
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
      var preguntasB = [];
      var preguntasA = [];

      var arreglo = ["", "947025415", "231563869", "756243527", "865156200"];
      debugger;
      var i = 0;
      var nuevo = [];
      var valoresA = ["", "⇒", "⇔", "∧", "∨", "∼", '<u>' + "∨" + '</u>']
      var valoresB = ["", '<u>' + "∨" + '</u>', "∼", "∨", "∧", "⇔", "⇒"]
      for (var i = 1; i <= 4; i++)
          respuestasA[i] = '<td style="width: 250px;">' +
          '<div draggable="true" ondragstart="drag(event)" id="drag' + i + '" style="font-size:20px; text-align:center; background-color: white; padding-right: 10px;padding-left: 10px;">' + arreglo[i] + '</label></div></td>';

      debugger;
      preguntasB[0] = 'Novecientos cuarenta y siete millones veinticinco mil cuatrocientos quince';
      preguntasB[1] = 'Doscientos treinta y un millones quinientos sesenta y tres mil ochocientos sesenta y nueve';
      preguntasB[2] = 'Setecientos cincuenta y seis millones doscientos cuarenta y tres mil quinientos veintisiete';
      preguntasB[3] = 'Ochocientos sesenta y cinco millones ciento cincuenta y seis mil doscientos';

      preguntasA[0] = '<tr>' +
          '<td><label>' + preguntasB[0] + '</labe></td>' +
          '<td width=150px style="width:200px;height:20px;border: 1px solid; font-size: 12px" id="div1a" ondrop="drop(event)" ondragover="allowDrop(event)"></td>' +
          '</tr>';
      preguntasA[1] = '<tr>' +
          '<td><label>' + preguntasB[1] + '</labe></td>' +
          '<td width=150px style="width:200px;height:20px;border: 1px solid; font-size: 12px" id="div2a" ondrop="drop(event)" ondragover="allowDrop(event)"></td>' +
          '</tr>';
      preguntasA[2] = '<tr>' +
          '<td><label>' + preguntasB[2] + '</labe></td>' +
          '<td width=150px style="width:200px;height:20px;border: 1px solid; font-size: 12px" id="div3a" ondrop="drop(event)" ondragover="allowDrop(event)"></td>' +
          '</tr>';
      preguntasA[3] = '<tr>' +
          '<td><label>' + preguntasB[3] + '</labe></td>' +
          '<td width=150px style="width:200px;height:20px;border: 1px solid; font-size: 12px" id="div4a" ondrop="drop(event)" ondragover="allowDrop(event)"></td>' +
          '</tr>';

      var alea = Math.round(Math.random() * (3 - 1) + 1);

      if (alea == 1) {
          $("#contenido").append(preguntasA);
          $("#Respuestas").append('<tr>' + respuestasA[1] + respuestasA[3] + respuestasA[2] + respuestasA[4] + '</tr>');

      }
      if (alea == 2) {
          $("#contenido").append(preguntasA[3] + preguntasA[1] + preguntasA[2] + preguntasA[0]);
          $("#Respuestas").append('<tr>' + respuestasA[2] + respuestasA[3] + respuestasA[4] + respuestasA[1] + '</tr>');

      }
      if (alea == 3) {
          $("#contenido").append(preguntasA[2] + preguntasA[0] + preguntasA[1] + preguntasA[3]);
          $("#Respuestas").append('<tr>' + respuestasA[1] + respuestasA[2] + respuestasA[4] + respuestasA[3] + '</tr>');
      }
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
                  case "div4a":
                      if ((divs[i]) == "drag4") {
                          nota = nota + 1;
                          $('#div4a').css("border", "4px solid green");

                      } else {
                          $('#div4a').css("border", "4px solid red");
                      }
                      break;
              }
          }
          var notaFinal = (nota * 10) / 4;
          notaFinal = notaFinal.toFixed(2)
          $("#txtNota").text(notaFinal + "/10");
          $('#Calificar').attr('disabled', true);
          $('#Refrescar').attr('disabled', false);
      });
  });