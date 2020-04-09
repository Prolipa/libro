var titulos="evaluacion"
  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);
  }

  function Preg1() {
      var valoresA = [];
      var contenido1 = [];
      var patron = Math.round(Math.random() * (10 - 1) + 1);
      var patron1 = Math.round(Math.random() * (10 - 1) + 1);
      var patron2 = Math.round(Math.random() * (10 - 1) + 1);
      var suc = [];
      var suc1 = [];
      var suc2 = [];
      for (var i = 0; i <= 10; i++) {
          valoresA[i] = Math.round(Math.random() * (20 - 1) + 1);
      }
      valoresA = jQuery.unique(valoresA);
      contenido1[0] = '<label>a) Patrón</label><input type="number" placeholder=0 id="patron1" class="patron">';
      contenido1[1] = '<label>b) Patrón</label><input type="number" placeholder=0 id="patron2" class="patron">';
      contenido1[2] = '<label>c) Patrón</label><input type="number" placeholder=0 id="patron3" class="patron">';
      suc[0] = valoresA[0];
      suc[1] = suc[0] + (2 * patron);
      suc[2] = suc[1] + patron;
      suc1[0] = valoresA[0];
      suc1[1] = suc1[0] + patron1;
      suc1[2] = suc1[1] + (2 * patron1);
      suc2[0] = valoresA[0];
      suc2[1] = suc2[0] + patron2;
      suc2[2] = suc2[1] + (2 * patron2);
      console.log(patron)
      var sucesion = [];
      sucesion[0] = '<label>Sucesión</label>&nbsp;&nbsp;' +
          '<label>' + suc[0] + '</label>&nbsp;&nbsp;' +
          '<input type="number" id="sA1" class="rS">&nbsp;&nbsp;' +
          '<label id="iniA">' + suc[1] + '</label>&nbsp;&nbsp;' +
          '<label id="finA">' + suc[2] + '</label>&nbsp;&nbsp;' +
          '<input type="number" id="sA2" class="rS">&nbsp;&nbsp;' +
          '<input type="number" id="sA3" class="rS">';

      sucesion[1] = '<label>Sucesión</label>&nbsp;&nbsp;' +
          '<label id="iniB">' + suc1[0] + '</label>&nbsp;&nbsp;' +
          '<label id="finB">' + suc1[1] + '</label>&nbsp;&nbsp;' +
          '<input type="number" id="sB1" class="rS">&nbsp;&nbsp;' +
          '<label>' + suc1[2] + '</label>&nbsp;&nbsp;' +
          '<input type="number" id="sB2" class="rS">&nbsp;&nbsp;' +
          '<input type="number" id="sB3" class="rS">';

      sucesion[2] = '<label>Sucesión</label>&nbsp;&nbsp;' +
          '<label id="iniC">' + suc2[0] + '</label>&nbsp;&nbsp;' +
          '<label id="finC">' + suc2[1] + '</label>&nbsp;&nbsp;' +
          '<input type="number" id="sB1" class="rS">&nbsp;&nbsp;' +
          '<label>' + suc1[2] + '</label>&nbsp;&nbsp;' +
          '<input type="number" id="sC2" class="rS">&nbsp;&nbsp;' +
          '<input type="number" id="sC3" class="rS">';

      $("#sucesion1A").append(sucesion[0]);
      $("#contenidolA").append(contenido1[0]);
      $("#sucesion1B").append(sucesion[1]);
      $("#contenido1B").append(contenido1[1]);
      $("#sucesion1C").append(sucesion[2]);
      $("#contenido1C").append(contenido1[2]);
  };

  function Resp1() {

      var nota1 = 0;
      var patron1 = parseInt($('#finA').text()) - parseInt($('#iniA').text());
      var patron2 = parseInt($('#finB').text()) - parseInt($('#iniB').text());
      var patron3 = parseInt($('#finC').text()) - parseInt($('#iniC').text());

      if ($('#patron1').val() == patron1) {
          nota1 = nota1 + 1;
          $('#patron1').css("background-color", "green");
      } else {
          $('#patron1').css("background-color", "red");
      }
      if ($('#patron2').val() == patron2) {
          nota1 = nota1 + 1;
          $('#patron2').css("background-color", "green");
      } else {
          $('#patron2').css("background-color", "red");
      }
      if ($('#patron3').val() == patron3) {
          nota1 = nota1 + 1;
          $('#patron3').css("background-color", "green");
      } else {
          $('#patron3').css("background-color", "red");
      }
      if ($('#sA1').val() == parseInt($('#iniA').text()) - patron1) {
          nota1 = nota1 + 1;
          $('#sA1').css("background-color", "green");
      } else {
          $('#sA1').css("background-color", "red");
      }
      if ($('#sA2').val() == parseInt($('#finA').text()) + patron1) {
          nota1 = nota1 + 1;
          $('#sA2').css("background-color", "green");
      } else {
          $('#sA2').css("background-color", "red");
      }
      if ($('#sA3').val() == parseInt($('#finA').text()) + (2 * patron1)) {
          nota1 = nota1 + 1;
          $('#sA3').css("background-color", "green");
      } else {
          $('#sA3').css("background-color", "red");
      }

      if ($('#sB1').val() == parseInt($('#finB').text()) + patron2) {
          nota1 = nota1 + 1;
          $('#sB1').css("background-color", "green");
      } else {
          $('#sB1').css("background-color", "red");
      }
      if ($('#sB2').val() == parseInt($('#finB').text()) + (3 * patron2)) {
          nota1 = nota1 + 1;
          $('#sB2').css("background-color", "green");
      } else {
          $('#sB2').css("background-color", "red");
      }
      if ($('#sB3').val() == parseInt($('#finB').text()) + (4 * patron2)) {
          nota1 = nota1 + 1;
          $('#sB3').css("background-color", "green");
      } else {
          $('#sB3').css("background-color", "red");
      }

      if ($('#sC1').val() == parseInt($('#finC').text()) + patron3) {
          nota1 = nota1 + 1;
          $('#sC1').css("background-color", "green");
      } else {
          $('#sC1').css("background-color", "red");
      }
      if ($('#sC2').val() == parseInt($('#finC').text()) + (5 * patron3)) {
          nota1 = nota1 + 1;
          $('#sC2').css("background-color", "green");
      } else {
          $('#sC2').css("background-color", "red");
      }
      if ($('#sC3').val() == parseInt($('#finC').text()) + (6 * patron3)) {
          nota1 = nota1 + 1;
          $('#sC3').css("background-color", "green");
      } else {
          $('#sC3').css("background-color", "red");
      }
      var notaf1 = 0;
      notaf1 = (nota1 * 1) / 8;
      notaf1 = notaf1.toFixed(2)
      $("#nota1").text(notaf1);
  }

  function Preg2() {
      var contenido2 = [];
      var aleatorios = [];
      aleatorios[0] = Math.round(Math.random() * (50 - 30) + 30);
      aleatorios[1] = Math.round(Math.random() * (30 - 20) + 20);
      aleatorios[2] = Math.round(Math.random() * (20 - 1) + 1);
      $("#valorA").append(aleatorios[0]);
      $("#valorB").append(aleatorios[1]);
      $("#valorC").append(aleatorios[2]);
      contenido2[0] = '<label>Patrón: </label>' +
          '<input type="number" class="patron" id="patronA" placeholder="Patrón 1">' +
          '<input type="number" class="patron" id="patronB" placeholder="Patrón 2"><br>';
      contenido2[1] = '<label>Parada 1: </label>&nbsp;' +
          '<input type="number" class="valorP1" id="valorA1">&nbsp;' +
          '<label> + </label>&nbsp;' +
          '<input type="number" class="valorP1" id="valorA2">&nbsp;' +
          '<label> - </label>&nbsp;' +
          '<input type="number" class="valorP1" id="valorA3">&nbsp;' +
          '<label> = </label>&nbsp;' +
          '<input type="number" class="valorP1" id="resA"><br>';
      contenido2[2] = '<label>Parada 2: </label>' +
          '<input type="number" class="valorP1" id="valorB1">&nbsp' +
          '<label> + </label>&nbsp' +
          '<input type="number" class="valorP1" id="valorB2">&nbsp' +
          '<label> - </label>&nbsp' +
          '<input type="number" class="valorP1" id="valorB3">&nbsp' +
          '<label> = </label>&nbsp' +
          '<input type="number" class="valorP1" id="resB"><br>';
      contenido2[3] = '<label>Parada 3: </label>&nbsp' +
          '<input type="number" class="valorP1" id="valorC1">&nbsp' +
          '<label> + </label>&nbsp' +
          '<input type="number" class="valorP1" id="valorC2">&nbsp' +
          '<label> - </label>&nbsp' +
          '<input type="number" class="valorP1" id="valorC3">&nbsp' +
          '<label> = </label>&nbsp' +
          '<input type="number" class="valorP1" id="resC"><br>';
      contenido2[4] = '<label>Respuesta: A la parada número 4 llegan </label>&nbsp' +
          '<input type="text" class="valorP1" id="respD">&nbsp';
      $("#contenido2").append(contenido2);
  }

  function Resp2() {
      var respuestas = [];
      var nota2 = 0;
      respuestas[0] = parseInt($("#valorA").text());
      respuestas[1] = parseInt($("#valorB").text());
      respuestas[2] = parseInt($("#valorC").text());
      respuestas[3] = respuestas[0] + respuestas[1] - respuestas[2];
      respuestas[4] = respuestas[3] + respuestas[1] - respuestas[2];
      respuestas[5] = respuestas[4] + respuestas[1] - respuestas[2];
      respuestas[6] = String(respuestas[5]) + " personas";

      if ($('#patronA').val() == respuestas[1]) {
          nota2 = nota2 + 1;
          $('#patronA').css("background-color", "green");
      } else {
          $('#patronA').css("background-color", "red");
      }
      if ($('#patronB').val() == respuestas[2]) {
          nota2 = nota2 + 1;
          $('#patronB').css("background-color", "green");
      } else {
          $('#patronB').css("background-color", "red");
      }
      for (var j = 1; j <= 3; j++) {
          if ($('#valorA' + j).val() == respuestas[j - 1]) {
              nota2 = nota2 + 1;
              $('#valorA' + j).css("background-color", "green");
          } else {
              $('#valorA' + j).css("background-color", "red");
          }
      }
      for (var j = 2; j <= 3; j++) {
          if ($('#valorB' + j).val() == respuestas[j - 1]) {
              nota2 = nota2 + 1;
              $('#valorB' + j).css("background-color", "green");
          } else {
              $('#valorA' + j).css("background-color", "red");
          }
          if ($('#valorC' + j).val() == respuestas[j - 1]) {
              nota2 = nota2 + 1;
              $('#valorC' + j).css("background-color", "green");
          } else {
              $('#valorC' + j).css("background-color", "red");
          }
      }
      if ($('#valorB1').val() == respuestas[3]) {
          nota2 = nota2 + 1;
          $('#valorB1').css("background-color", "green");
      } else {
          $('#valorB1').css("background-color", "red");
      }
      if ($('#valorC1').val() == respuestas[4]) {
          nota2 = nota2 + 1;
          $('#valorC1').css("background-color", "green");
      } else {
          $('#valorC1').css("background-color", "red");
      }

      if ($('#resA').val() == respuestas[3]) {
          nota2 = nota2 + 1;
          $('#resA').css("background-color", "green");
      } else {
          $('#resA').css("background-color", "red");
      }
      if ($('#resB').val() == respuestas[4]) {
          nota2 = nota2 + 1;
          $('#resB').css("background-color", "green");
      } else {
          $('#resB').css("background-color", "red");
      }
      if ($('#resC').val() == respuestas[5]) {
          nota2 = nota2 + 1;
          $('#resC').css("background-color", "green");
      } else {
          $('#resC').css("background-color", "red");
      }
      if ($('#respD').val().toLowerCase() == respuestas[6]) {
          nota2 = nota2 + 1;
          $('#respD').css("background-color", "green");
      } else {
          $('#respD').css("background-color", "red");
      }
      var notaf2 = 0;
      var notaf2 = (nota2 * 1) / 15;
      notaf2 = notaf2.toFixed(2)
      $("#nota2").text(notaf2);
  }
  var numero = [];
  var numero2 = [];

  function Preg3() {
      var posicion = [];
      var respuestas = [];
      var celdas1 = [];
      var encabezado = ["u", "d", "c",
          "um", "dm", "cm",
          "uM", "dM", "cM"
      ];

      numero[0] = Math.round(Math.random() * (1000000000 - 1) + 10);
      numero2[0] = Math.round(Math.random() * (100 - 1) + 10);
      numero2[1] = Math.round(Math.random() * (1000 - 1) + 10);
      numero2[2] = Math.round(Math.random() * (10000 - 1) + 10);
      numero2[3] = Math.round(Math.random() * (100000 - 1) + 10);
      numero2[4] = Math.round(Math.random() * (1000000 - 1) + 10);
      numero2[5] = Math.round(Math.random() * (10000000 - 1) + 10);
      numero2[6] = Math.round(Math.random() * (100000000 - 1) + 10);
      numero2[7] = Math.round(Math.random() * (1000000000 - 1) + 10);
      numero2[8] = Math.round(Math.random() * (10 - 1) + 1);
      numero2[9] = numero2[0] + numero2[1] + numero2[2] + numero2[3] + numero2[4] + numero2[5] + numero2[6] + numero2[7] + numero2[8];
      var rot = [];
      var str = [];
      var contenido3 = [];
      str[0] = numero[0].toString();
      str[1] = numero[0].toString();
      var res0 = str[0].split("");
      var res1 = str[1].split("");
      encabezado.reverse()
      for (var i = 0; i <= 9; i++) {
          celdas1[i] = '<label>' + res0[i] + '</label><label>' + encabezado[i] + '</label>';
      }
      console.log(numero[0]);
      console.log(numero2[9]);
      contenido3[0] = '<tr><td>' + celdas1[4] + '</td>' +
          '<td class="signo"> + </td>' +
          '<td>' + celdas1[7] + '</td>' +
          '<td class="signo"> + </td>' +
          '<td>' + celdas1[0] + '</td>' +
          '<td class="signo"> + </td>' +
          '<td>' + celdas1[5] + '</td>' +
          '<td class="signo"> + </td>' +
          '<td>' + celdas1[1] + '</td>' +
          '<td class="signo"> + </td>' +
          '<td>' + celdas1[2] + '</td>' +
          '<td class="signo"> + </td>' +
          '<td>' + celdas1[8] + '</td>' +
          '<td class="signo"> + </td>' +
          '<td>' + celdas1[3] + '</td>' +
          '<td class="signo"> + </td>' +
          '<td>' + celdas1[6] + '</td>' +
          '<td class="signo"> = </td>' +
          '<td><input type="number" id="res3A" class="valorP2"></td>' +
          '<tr>';

      contenido3[1] = '<tr><td><label>' + numero2[4] + '</label></td>' +
          '<td class="signo"> + </td>' +
          '<td><label>' + numero2[7] + '</label></td>' +
          '<td class="signo"> + </td>' +
          '<td><label>' + numero2[0] + '</label></td>' +
          '<td class="signo"> + </td>' +
          '<td><label>' + numero2[5] + '</label></td>' +
          '<td class="signo"> + </td>' +
          '<td><label>' + numero2[1] + '</label></td>' +
          '<td class="signo"> + </td>' +
          '<td><label>' + numero2[2] + '</label></td>' +
          '<td class="signo"> + </td>' +
          '<td><label>' + numero2[8] + '</label></td>' +
          '<td class="signo"> + </td>' +
          '<td><label>' + numero2[3] + '</label></td>' +
          '<td class="signo"> + </td>' +
          '<td><label>' + numero2[6] + '</label></td>' +
          '<td class="signo"> = </td>' +
          '<td><input type="number" id="res3B" class="valorP2"></td>' +

          '<tr>';

      $("#contenido3A").append(contenido3[0]);
      $("#contenido3B").append(contenido3[1]);
  }

  function Resp3() {
      var nota3 = 0;

      console.log(numero.toString());
      console.log(numero2.toString());
      if ($("#res3A").val() == numero[0]) {
          nota3 = nota3 + 1;
          $('#res3A').css("background-color", "green");
      } else {
          $('#res3A').css("background-color", "red");
      }
      if ($("#res3B").val() == numero2[9]) {
          nota3 = nota3 + 1;
          $('#res3B').css("background-color", "green");
      } else {
          $('#res3B').css("background-color", "red");
      }
      var notaf3 = 0;
      notaf3 = (nota3 * 1) / 2;
      notaf3 = notaf3.toFixed(2)
      $("#nota3").text(notaf3);
  }

  function Preg4() {
      var filas = [];
      filas[0] = '<tr>' +
          '<td style="width:32px;"></td>' +
          '<td ></td>' +
          '<td></td>' +
          '<td></td>' +
          '<td style="width:150px"><input type="text" class="textopre3" id="fila4A1"></td>' +
          '<td style="width:150px"><input type="text" class="textopre3" id="fila4A2"></td>' +
          '<td></td>' +
          '<td></td>' +
          '<td style=""></td>' +
          '<td ><input type="text" class="textopre3" id="fila4A3"></td>' +
          '<td style="width:50px;"></td>' +
          '<td></td>' +
          '<td ><input type="text" class="textopre3" id="fila4A4"></td>' +
          '</tr>';
      filas[1] = '<tr><td colspan="16"><img src="img/i2_p50_act43.jpg"></td></tr>'
      filas[2] = '<tr>' +
          '<td style="width:50px">0</td>' +
          '<td style="width:140px"><input type="text" class="textopre3" id="fila4B1"></td>' +
          '<td></td>' +
          '<td></td>' +
          '<td></td>' +
          '<td><input type="text" class="textopre3" id="fila4B2"></td>' +
          '<td></td>' +
          '<td></td>' +
          '<td style="width:50px;"></td>' +
          '<td style="width: 60px;"></td>' +
          '<td><input type="text" class="textopre3" id="fila4B3"></td>' +
          '<td></td>' +
          '<td></td>' +
          '<td style="width:50px;"><input type="text" class="textopre3" id="fila4B4"></td>' +
          '</tr>';

      var res4 = 0;
      var num4 = [];


      num4[0] = Math.round(Math.random() * (15 - 1) + 10);
      num4[0] = num4[0] * 100000;
      num4[1] = num4[0] - (50000);
      num4[2] = num4[0] + (75000);
      num4[3] = num4[0] + (50000);


      res4 = '<tr>' +
          '<td style="padding-right: 20px;"><label>A:</label>&nbsp;<label id="valIni4">' + num4[0] + '</label></td>' +
          '<td style="padding-right: 20px;"><label>B:</label>&nbsp;<label>' + num4[3] + '</label></td>' +
          '<td style="padding-right: 20px;"><label>C:</label>&nbsp;<label>' + num4[2] + '</label></td>' +
          '<td style="padding-right: 20px;"><label>D:</label>&nbsp;<label>' + num4[1] + '</label></td>' +
          '</tr>';
      $("#contenido4").append(filas)
      $("#respuestas4").append(res4)

  }

  function Resp4() {
      var fila4A = [];
      var fila4B = [];
      var ini4 = $("#valIni4").text();
      var b = parseInt(ini4) - 100000;
      var c = parseInt(ini4) + 100000;
      var d = parseInt(ini4) + 200000;

      for (var i = 1; i <= 4; i++) {
          fila4A[i] = $("#fila4A" + i).val().toLowerCase();
          fila4B[i] = $("#fila4B" + i).val();
      }
      var nota4 = 0;
      debugger
      if (parseInt($('#fila4B1').val()) == b) {
          nota4 = nota4 + 1;
          $('#fila4B1').css("background-color", "green");
      } else {
          $('#fila4B1').css("background-color", "red");
      }
      if (parseInt($('#fila4B2').val()) == ini4) {
          nota4 = nota4 + 1;
          $('#fila4B2').css("background-color", "green");
      } else {
          $('#fila4B2').css("background-color", "red");
      }
      if (parseInt($('#fila4B3').val()) == c) {
          nota4 = nota4 + 1;
          $('#fila4B3').css("background-color", "green");
      } else {
          $('#fila4B3').css("background-color", "red");
      }
      if (parseInt($('#fila4B4').val()) == d) {
          nota4 = nota4 + 1;
          $('#fila4B4').css("background-color", "green");
      } else {
          $('#fila4B4').css("background-color", "red");
      }
      if (fila4A[1] == "d") {
          nota4 = nota4 + 1;
          $('#fila4A1').css("background-color", "green");
      } else {
          $('#fila4A1').css("background-color", "red");
      }
      if (fila4A[2] == "a") {
          nota4 = nota4 + 1;
          $('#fila4A2').css("background-color", "green");
      } else {
          $('#fila4A2').css("background-color", "red");
      }
      if (fila4A[3] == "c") {
          nota4 = nota4 + 1;
          $('#fila4A3').css("background-color", "green");
      } else {
          $('#fila4A3').css("background-color", "red");
      }
      if (fila4A[4] == "b") {
          nota4 = nota4 + 1;
          $('#fila4A4').css("background-color", "green");
      } else {
          $('#fila4A4').css("background-color", "red");
      }
      var notaf4 = 0;
      notaf4 = (nota4 * 1) / 8;
      notaf4 = notaf4.toFixed(2)
      $("#nota4").text(notaf4);

  }
  //Pregunta 5

  function Preg5() {
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
      var respuestasB = [];
      var arreglo = [0, 2660589000, 12809323000, 14283757000];
      var array_ordenado = [];
      debugger;
      arreglo = jQuery.unique(arreglo);
      array_ordenado = arreglo.sort(function(a, b) {
          return a - b;
      })

      var i = 0;
      var nuevo = [];
      var valoresA = ["", "⇒", "⇔", "∧", "∨", "∼", '<u>' + "∨" + '</u>']
      var valoresB = ["", '<u>' + "∨" + '</u>', "∼", "∨", "∧", "⇔", "⇒"]
      for (var i = 1; i <= 3; i++)
          respuestasA[i] = '<td style="width: 250px;">' +
          '<div draggable="true" ondragstart="drag(event)" id="drag' + i + '" style="font-size:20px; text-align:center; background-color: white; padding-right: 10px;padding-left: 10px;">' + array_ordenado[i] + '</label></div></td>';

      debugger;
      $("#contenido5").append('<td width=150px style="width:200px;height:20px;border: 1px solid; font-size: 12px" id="div1a" ondrop="drop(event)" ondragover="allowDrop(event)"></td>' +
          '<td> < </td>' +
          '<td width=150px style="width:200px;height:20px;border: 1px solid; font-size: 12px" id="div2a" ondrop="drop(event)" ondragover="allowDrop(event)"></td>' +
          '<td> < </td>' +
          '<td width=150px style="width:200px;height:20px;border: 1px solid; font-size: 12px" id="div3a" ondrop="drop(event)" ondragover="allowDrop(event)"></td>');
      $("#Respuestas5").append('<tr>' + respuestasA[2] + respuestasA[1] + respuestasA[3] + '</tr>');
  };
  var divs = [];
  var contenidos = [];
  var k = 0;
  var z = 0;

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

  function Resp5() {
      var nota5 = 0;
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
                      nota5 = nota5 + 1;
                      $('#div1a').css("border", "4px solid green");

                  } else {
                      $('#div1a').css("border", "4px solid red");
                  }
                  break;
              case "div2a":
                  if ((divs[i]) == "drag2") {
                      nota5 = nota5 + 1;
                      $('#div2a').css("border", "4px solid green");
                  } else {
                      $('#div2a').css("border", "4px solid red");
                  }
                  break;
              case "div3a":
                  if ((divs[i]) == "drag3") {
                      nota5 = nota5 + 1;
                      $('#div3a').css("border", "4px solid green");
                  } else {
                      $('#div3a').css("border", "4px solid red");
                  }
                  break;
              case "div4a":
                  if ((divs[i]) == "drag4") {
                      nota5 = nota5 + 1;
                      $('#div4a').css("border", "4px solid green");

                  } else {
                      $('#div4a').css("border", "4px solid red");
                  }
                  break;
              case "div5a":
                  if ((divs[i]) == "drag5") {
                      nota5 = nota5 + 1;
                      $('#div5a').css("border", "4px solid green");
                  } else {
                      $('#div5a').css("border", "4px solid red");
                  }
                  break;
              case "div6a":
                  if ((divs[i]) == "drag6") {
                      nota5 = nota5 + 1;
                      $('#div6a').css("border", "4px solid green");
                  } else {
                      $('#div6a').css("border", "4px solid red");
                  }
                  break;
              case "div7a":
                  if ((divs[i]) == "drag7") {
                      nota5 = nota5 + 1;
                      $('#div7a').css("border", "4px solid green");
                  } else {
                      $('#div7a').css("border", "4px solid red");
                  }
                  break;
          }
      }
      var notaf5 = (nota5 * 1) / 3;
      notaf5 = notaf5.toFixed(2)
      $("#nota5").text(notaf5);
  }
  //Pregunta 6
  function Preg6() {
      var valoresA = [];
      var contenido1 = [];
      for (var i = 0; i <= 4; i++) {
          valoresA[i] = Math.round(Math.random() * (20 - 1) + 1);
      }
      valoresA = jQuery.unique(valoresA);
      contenido1[0] = '<br><label id="valor1">' + valoresA[0] + '</label><sup>3</sup>&nbsp;=&nbsp;' +
          '<input type="number" id="numA1"><label>&nbsp;X&nbsp;</label>' +
          '<input type="number" id="numA2"><label>&nbsp;X&nbsp;</label>' +
          '<input type="number" id="numA3"><label>&nbsp;=&nbsp;</label>' +
          '<input class="resA" type="number" id="resA1"><br>';

      contenido1[1] = '<br><label id="valor2">' + valoresA[1] + '</label><sup>3</sup>&nbsp;=&nbsp;' +
          '<input type="number" id="numB1"><label>&nbsp;X&nbsp;</label>' +
          '<input type="number" id="numB2"><label>&nbsp;X&nbsp;</label>' +
          '<input type="number" id="numB3"><label>&nbsp;=&nbsp;</label>' +
          '<input class="resA" type="number" id="resB1"><br>';

      contenido1[2] = '<br><label id="valor3">' + valoresA[2] + '</label><sup>3</sup>&nbsp;=&nbsp;' +
          '<input type="number" id="numC1"><label>&nbsp;X&nbsp;</label>' +
          '<input type="number" id="numC2"><label>&nbsp;X&nbsp;</label>' +
          '<input type="number" id="numC3"><label>&nbsp;=&nbsp;</label>' +
          '<input class="resA" type="number" id="resC1"><br>';

      contenido1[3] = '<br><label id="valor4">' + valoresA[3] + '</label><sup>3</sup>&nbsp;=&nbsp;' +
          '<input type="number" id="numD1"><label>&nbsp;X&nbsp;</label>' +
          '<input type="number" id="numD2"><label>&nbsp;X&nbsp;</label>' +
          '<input type="number" id="numD3"><label>&nbsp;=&nbsp;</label>' +
          '<input class="resA" type="number" id="resD1"><br>';
      $("#contenido").append(contenido1);
  };

  function Resp6() {
      var nota6 = 0;
      //Variables Respuestas Txt
      var valA = [];
      var valB = [];
      var valC = [];
      var valD = [];
      var resp = [];

      for (var i = 1; i <= 3; i++) {
          valA[i] = parseInt($("#numA" + i).val());
          valB[i] = parseInt($("#numB" + i).val());
          valC[i] = parseInt($("#numC" + i).val());
          valD[i] = parseInt($("#numD" + i).val());
      }
      for (var j = 1; j <= 3; j++) {
          if (valA[j] == $("#valor1").text()) {
              nota6 = nota6 + 1;
              $('#numA' + j).css("background-color", "green");
          } else {
              $('#numA' + j).css("background-color", "red");
          }
          if (valB[j] == $("#valor2").text()) {
              nota6 = nota6 + 1;
              $('#numB' + j).css("background-color", "green");
          } else {
              $('#numB' + j).css("background-color", "red");
          }
          if (valC[j] == $("#valor3").text()) {
              nota6 = nota6 + 1;
              $('#numC' + j).css("background-color", "green");
          } else {
              $('#numC' + j).css("background-color", "red");
          }
          if (valD[j] == $("#valor4").text()) {
              nota6 = nota6 + 1;
              $('#numD' + j).css("background-color", "green");
          } else {
              $('#numD' + j).css("background-color", "red");
          }
      }

      if (parseInt($("#resA1").val()) == Math.pow(parseInt($("#valor1").text()), 3)) {
          nota6 = nota6 + 1;
          $('#resA1').css("background-color", "green");
      } else {
          $('#resA1').css("background-color", "red");
      }
      if (parseInt($("#resB1").val()) == Math.pow(parseInt($("#valor2").text()), 3)) {
          nota6 = nota6 + 1;
          $('#resB1').css("background-color", "green");
      } else {
          $('#resB1').css("background-color", "red");
      }
      if (parseInt($("#resC1").val()) == Math.pow(parseInt($("#valor3").text()), 3)) {
          nota6 = nota6 + 1;
          $('#resC1').css("background-color", "green");
      } else {
          $('#resC1').css("background-color", "red");
      }
      if (parseInt($("#resD1").val()) == Math.pow(parseInt($("#valor4").text()), 3)) {
          nota6 = nota6 + 1;
          $('#resD1').css("background-color", "green");
      } else {
          $('#resD1').css("background-color", "red");
      }
      var notaf6 = (nota6 * 1) / 16;
      notaf6 = notaf6.toFixed(2)
      $("#nota6").text(notaf6);
  }

  function Preg10() {
      var cont10 = [];
      var frutas = ["Naranjas:", "Plátano:", "Papaya:", "Piña:"];
      var espacios = ["1 hm<sup>2<sup>", "28 dam<sup>2<sup>", "7 000 dm<sup>2</sup>", "7050000 cm<sup>2</sup>"]
      for (var i = 0; i <= 3; i++) {
          cont10[i] = '<tr>' +
              '<td class="pre10"><label>' + frutas[i] + '</label></td>' +
              '<td class="pre10"><label>' + espacios[i] + '</label></td>' +
              '<td class="pre10"><input type="text" id="10A' + i + '" class="inp10"></td>' +
              '<td><label>=<label></td>' +
              '<td class="pre10"><input type="text" id="res10' + i + '" class="inp10"><label><sup>2</sup></label></td>' +
              '</tr>'
      }
      $("#contenido10").append(cont10);
  }

  function Resp10() {
      var cont10 = ["10000m", "2800m", "70m", "705m"];
      var cont10B = ["10000 m", "2800 m", "70 m", "705 m"];
      var res10 = ["1x10000", "28x100", "7000/100", "7050000/10000"];
      var res10B = ["1 x 10000", "28 x 100", "7000 / 100", "7050000 / 10000"];
      var nota10 = 0;
      debugger;
      for (var i = 0; i <= 3; i++) {
          if ($("#10A" + i).val() == res10[i] || $("#10A" + i).val() == res10B[i]) {
              nota10 = nota10 + 1;
              $('#10A' + i).css("border", "4px solid green");
          } else {
              $('#10A' + i).css("border", "4px solid red");
          }
          if ($("#res10" + i).val() == cont10[i] || $("#res10" + i).val() == cont10B[i]) {
              nota10 = nota10 + 1;
              $('#res10' + i).css("border", "4px solid green");
          } else {
              $('#res10' + i).css("border", "4px solid red");
          }
      }
      if ($("#resA10").val() == "13575m" || $("#resA10").val() == "13575 m") {
          nota10 = nota10 + 1;
          $('#resA10').css("border", "4px solid green");
      } else {
          $('#resA10').css("border", "4px solid red");
      }
      var str2 = "papaya";
      if ($("#resB10").val().toLowerCase().indexOf(str2) != -1) {
          nota10 = nota10 + 1;
          $('#resB10').css("border", "4px solid green");
      } else {
          $('#resB10').css("border", "4px solid red");
      }

      var notaf10 = (nota10 * 1) / 10;
      notaf10 = notaf10.toFixed(2)
      $("#nota10").text(notaf10);
  }

  function Cargar() {
      $('#contenido1').html('');
      $('#contenido').html('');
      $("#txtNota").text("/" + 10);
      $("#nota1").html('');
      $("#nota2").html('');
      $("#nota3").html('');
      $("#nota4").html('');
      $("#nota5").html('');
      $("#nota6").html('');
      $("#nota7").html('');
      $("#nota8").html('');
      $("#nota9").html('');
      $("#nota10").html('');
      Inicio();
  }
  $(document).ready(function() {
      Inicio();
      Preg1();
      Preg2();
      Preg3();
      Preg4();
      Preg5();
      Preg6();
      Preg10();

      function datos(i) {
          var nota6 = $("#nota7").text();
          var nota12 = $("#nota8").text();
          var nota15 = $("#nota9").text();
          var pre = ["6", "12", "15"];
          if ($("#nota7").text() == "0.00") {
              alertify.prompt("Introducir notas para la pregunta 7 sobre 1:", function(e, str) {
                  if (e) {
                      if (str == "1") {
                          str = "1.00";
                      }
                      alertify.success("Has pulsado has introducido nota: " + str);
                      $("#nota7").text(str);
                      console.log("nota7" + str);
                      datos(4);
                  } else {
                      alertify.error("No has ingresado la nota");
                      datos(4);
                  }
              });
              return false;
          }
          if ($("#nota8").text() == "0.00") {
              alertify.prompt("Introducir notas para la pregunta 8 sobre 1:", function(e, str1) {
                  if (e) {
                      if (str1 == "1") {
                          str1 = "1.00";
                      }
                      alertify.success("Has pulsado has introducido nota: " + str1);
                      $("#nota8").text(str1);
                      console.log("nota8" + str1);
                      datos(4)
                  } else {
                      alertify.error("No has ingresado la nota");
                      datos(4);
                  }
              });
              return false;
          }
          if ($("#nota9").text() == "0.00") {
              alertify.prompt("Introducir notas para la pregunta 9 sobre 1:", function(e, str2) {
                  if (e) {
                      if (str2 == "1") {
                          str2 = "1.00";
                      }
                      alertify.success("Has pulsado has introducido nota: " + str2);
                      $("#nota9").text(str2);
                      console.log("nota9" + str2);
                      datos(4)
                  } else {
                      alertify.error("No has ingresado la nota");
                      datos(4);
                  }
              });
              return false;
          }
          if (i == 4) {
              confirmar();
          }
      }

      function confirmar() {
          if ($("#nota7").val() == "0.00" || $("#nota8").val() == "0.00" || $("#nota9").val() == "0.00") {
              datos(1);
          } else {
              alertify.confirm("<h3>Desea calificar la evaluación?</h3>", function(e) {
                  if (e) {
                      Resp1();
                      Resp2();
                      Resp3();
                      Resp4();
                      Resp5();
                      Resp6();
                      Resp10();
                      debugger;
                      var notas = []
                      var notaFinal = 0;
                      for (var i = 1; i <= 10; i++) {
                          notas[i] = parseFloat($("#nota" + i).text());
                          notaFinal = notaFinal + notas[i];
                      }
                      notaFinal = notaFinal.toFixed(2);
                      $("#txtNota").text(notaFinal + "/10");
                      $('#Calificar').attr('disabled', true);
                      $('#Refrescar').attr('disabled', false);
                      alertify.success("La evaluacion ha sido calificada:'" + notaFinal + "'");
                  } else {
                      alertify.error("Has pulsado '" + +"'");
                  }
              });
              return false
          }
      }

      $("#Calificar").click(function() {
          datos(1)
          conta++;
      });
  });