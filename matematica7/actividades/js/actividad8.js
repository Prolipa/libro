 var titulos = "prueba";

  function Inicio() {
      $('#nota-informativa').slideUp('slow');
      $("#Calificar").removeAttr("disabled");
      $('#Refrescar').attr('disabled', true);

      var cad = [];
      cad[0] = '<tr><td id="fila1a" ondrop="drop(event)" ondragover="allowDrop(event)"></td>' +
          '<td id="fila1b" ondrop="drop(event)" ondragover="allowDrop(event)"></td>' +
          '<td id="fila1c" ondrop="drop(event)" ondragover="allowDrop(event)"></td>' +
          '<td  rowspan="2"><strong>1 m</strong></td>' +
          '<td id="fila1d" ondrop="drop(event)" ondragover="allowDrop(event)"></td>' +
          '<td id="fila1e" ondrop="drop(event)" ondragover="allowDrop(event)"></td>' +
          '<td><label>1mm</label></td>' +
          '</tr>';

      cad[1] = '<tr><td><label>1 000 m</label></td>' +
          '<td id="fila2a" ondrop="drop(event)" ondragover="allowDrop(event)"></td>' +
          '<td id="fila2b" ondrop="drop(event)" ondragover="allowDrop(event)"></td>' +
          '<td id="fila2c" ondrop="drop(event)" ondragover="allowDrop(event)"></td>' +
          '<td><label>0,01 m</label></td>' +
          '<td id="fila2d" ondrop="drop(event)" ondragover="allowDrop(event)"></td>' +
          '</tr>';

      cad[2] = '<tr><td id="fila3a" ondrop="drop(event)" ondragover="allowDrop(event)"></td>' +
          '<td id="fila3b" ondrop="drop(event)" ondragover="allowDrop(event)"></td>' +
          '<td><label>1 dam <sup>2</sup></label></td>' +
          '<td  rowspan="2"><strong>1 m <sup>2</sup></strong></td>' +
          '<td id="fila3c" ondrop="drop(event)" ondragover="allowDrop(event)"></td>' +
          '<td id="fila3d" ondrop="drop(event)" ondragover="allowDrop(event)"></td>' +
          '<td id="fila3e" ondrop="drop(event)" ondragover="allowDrop(event)"></td>' +
          '</tr>';

      cad[3] = '<tr><td id="fila4a" ondrop="drop(event)" ondragover="allowDrop(event)"></td>' +
          '<td id="fila4b" ondrop="drop(event)" ondragover="allowDrop(event)"></td>' +
          '<td id="fila4c" ondrop="drop(event)" ondragover="allowDrop(event)"></td>' +
          '<td><label>0,01 m<sup>2</sup></label></td>' +
          '<td id="fila4d" ondrop="drop(event)" ondragover="allowDrop(event)"></td>' +
          '<td id="fila4e" ondrop="drop(event)" ondragover="allowDrop(event)"></td>' +
          '</tr>';

      var nuevo = [];
      var nuevo1 = []
      var fila1 = ["", "1Km", "1hm", "1dam", "1dm", "1cm", "1mm"];
      var fila2 = ["", "100m", "10m", "0,1m", "0,001m"];

      var fila3 = ["", "1Km<sup>2</sup>", "1hm<sup>2</sup>", "1dam<sup>2</sup>", "1dm<sup>2</sup>", "1cm<sup>2</sup>", "1mm<sup>2</sup>"];
      var fila4 = ["", "1000000m<sup>2</sup>", "10 000m<sup>2</sup>", "100m<sup>2</sup>", "0,0001m<sup>2</sup>", "0,000001m<sup>2</sup>"];



      nuevo[0] = '<td draggable="true" ondragstart="drag(event)" id="rf1a">' +
          '<label style="font-size:12px">' + fila1[1] + '</label>' +
          '</td>';
      nuevo[1] = '<td draggable="true" ondragstart="drag(event)" id="rf1b">' +
          '<label style="font-size:12px">' + fila1[2] + '</label>' +
          '</td>';
      nuevo[2] = '<td draggable="true" ondragstart="drag(event)" id="rf1c">' +
          '<label style="font-size:12px">' + fila1[3] + '</label>' +
          '</td>';
      nuevo[3] = '<td draggable="true" ondragstart="drag(event)" id="rf1d">' +
          '<label style="font-size:12px">' + fila1[4] + '</label>' +
          '</td>';
      nuevo[4] = '<td draggable="true" ondragstart="drag(event)" id="rf1e">' +
          '<label style="font-size:12px">' + fila1[5] + '</label>' +
          '</td>';
      nuevo[5] = '<td draggable="true" ondragstart="drag(event)" id="rf2a">' +
          '<label style="font-size:12px">' + fila2[1] + '</label>' +
          '</td>';
      nuevo[6] = '<td draggable="true" ondragstart="drag(event)" id="rf2b">' +
          '<label style="font-size:12px">' + fila2[2] + '</label>' +
          '</td>';
      nuevo[7] = '<td draggable="true" ondragstart="drag(event)" id="rf2c">' +
          '<label style="font-size:12px">' + fila2[3] + '</label>' +
          '</td>';
      nuevo[8] = '<td draggable="true" ondragstart="drag(event)" id="rf2d">' +
          '<label style="font-size:12px">' + fila2[4] + '</label>' +
          '</td>';

      nuevo1[0] = '<td draggable="true" ondragstart="drag(event)" id="rf3a">' +
          '<label style="font-size:12px">' + fila3[1] + '</label>' +
          '</td>';
      nuevo1[1] = '<td draggable="true" ondragstart="drag(event)" id="rf3b">' +
          '<label style="font-size:12px">' + fila3[2] + '</label>' +
          '</td>';
      nuevo1[2] = '<td draggable="true" ondragstart="drag(event)" id="rf3c">' +
          '<label style="font-size:12px">' + fila3[3] + '</label>' +
          '</td>';
      nuevo1[3] = '<td draggable="true" ondragstart="drag(event)" id="rf3d">' +
          '<label style="font-size:12px">' + fila3[4] + '</label>' +
          '</td>';
      nuevo1[4] = '<td draggable="true" ondragstart="drag(event)" id="rf3e">' +
          '<label style="font-size:12px">' + fila3[5] + '</label>' +
          '</td>';
      nuevo1[5] = '<td draggable="true" ondragstart="drag(event)" id="rf4a">' +
          '<label style="font-size:12px">' + fila4[1] + '</label>' +
          '</td>';
      nuevo1[6] = '<td draggable="true" ondragstart="drag(event)" id="rf4b">' +
          '<label style="font-size:12px">' + fila4[2] + '</label>' +
          '</td>';
      nuevo1[7] = '<td draggable="true" ondragstart="drag(event)" id="rf4c">' +
          '<label style="font-size:12px">' + fila4[3] + '</label>' +
          '</td>';
      nuevo1[8] = '<td draggable="true" ondragstart="drag(event)" id="rf4d">' +
          '<label style="font-size:12px">' + fila4[4] + '</label>' +
          '</td>';
      nuevo1[9] = '<td draggable="true" ondragstart="drag(event)" id="rf4e">' +
          '<label style="font-size:12px">' + fila4[5] + '</label>' +
          '</td>';



      var res = [];
      res[0] = '<tr>' + nuevo + '</tr>';
      res[1] = '<tr>' + nuevo1 + '</tr>';

      res[2] = '<tr>' + nuevo[0] + nuevo[2] + nuevo[4] + nuevo[6] + nuevo[8] + nuevo[1] + nuevo[3] + nuevo[5] + nuevo[7] + '</tr>';
      res[3] = '<tr>' + nuevo1[0] + nuevo1[2] + nuevo1[4] + nuevo1[6] + nuevo1[8] + nuevo1[1] + nuevo1[3] + nuevo1[5] + nuevo1[7] + nuevo1[9] + '</tr>';

      res[4] = '<tr>' + nuevo.reverse() + '</tr>';
      res[5] = '<tr>' + nuevo1.reverse() + '</tr>';
      $("#contenido").append(cad);
      var orden = Math.round(Math.random() * (3 - 1) + 1);
      console.log(orden)
      if (orden == 1) {
          $("#Respuestas").append(res[0] + res[1]);
      }
      if (orden == 2) {
          $("#Respuestas").append(res[2] + res[3]);
      }
      if (orden == 3) {
          $("#Respuestas").append(res[4] + res[5]);
      }





  };
  contenidos = [];
  divs = [];
  k = 0;
  z = 0;

  function allowDrop(ev) {
      ev.preventDefault();

  }

  function drag(ev) {

      ev.dataTransfer.setData("text", ev.target.id);
      console.log(ev.target.id);
      divs[k] = ev.target.id;
      z = z + 1;
      console.log("Divs: " + divs);
  }

  function drop(ev) {

      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
      var n = '#' + ev.target.id;
      contenidos[k] = ev.target.id;
      console.log("contenidos: " + contenidos);
      k = k + 1;

  }

  function Cargar() {
      $('#contenido').html('');
      $('#Respuestas').html('');
       Inicio();
  }
  $(document).ready(function() {
      Inicio();
      $("#Calificar").click(function() {
          var nota = 0;
          for (var i = 0; i <= 18; i++) {
              //console.log(res3[i]);
              if (contenidos.length == 0) {
                  $('#fila1a').css("border", "4px solid red");
                  $('#fila1b').css("border", "4px solid red");
                  $('#fila1c').css("border", "4px solid red");
                  $('#fila1d').css("border", "4px solid red");
                  $('#fila1e').css("border", "4px solid red");

                  $('#fila2a').css("border", "4px solid red");
                  $('#fila2b').css("border", "4px solid red");
                  $('#fila2c').css("border", "4px solid red");
                  $('#fila2d').css("border", "4px solid red");

                  $('#fila3a').css("border", "4px solid red");
                  $('#fila3b').css("border", "4px solid red");
                  $('#fila3c').css("border", "4px solid red");
                  $('#fila3d').css("border", "4px solid red");
                  $('#fila3e').css("border", "4px solid red");

                  $('#fila4a').css("border", "4px solid red");
                  $('#fila4b').css("border", "4px solid red");
                  $('#fila4c').css("border", "4px solid red");
                  $('#fila4d').css("border", "4px solid red");
                  $('#fila4e').css("border", "4px solid red");
              }
              switch (contenidos[i]) {
                  case "fila1a":
                      if ((divs[i]) == "rf1a") {
                          nota = nota + 1;
                          $('#fila1a').css("border", "4px solid green");

                      } else {
                          $('#fila1a').css("border", "4px solid red");
                      }
                      break;
                  case "fila1b":
                      if ((divs[i]) == "rf1b") {
                          nota = nota + 1;
                          $('#fila1b').css("border", "4px solid green");

                      } else {
                          $('#fila1b').css("border", "4px solid red");
                      }
                      break;
                  case "fila1c":
                      if ((divs[i]) == "rf1c") {
                          nota = nota + 1;
                          $('#fila1c').css("border", "4px solid green");

                      } else {
                          $('#fila1c').css("border", "4px solid red");
                      }
                      break;
                  case "fila1d":
                      if ((divs[i]) == "rf1d") {
                          nota = nota + 1;
                          $('#fila1d').css("border", "4px solid green");

                      } else {
                          $('#fila1d').css("border", "4px solid red");
                      }
                      break;
                  case "fila1e":
                      if ((divs[i]) == "rf1e") {
                          nota = nota + 1;
                          $('#fila1e').css("border", "4px solid green");

                      } else {
                          $('#fila1e').css("border", "4px solid red");
                      }
                      break;
                      // Validacion Fila 2 
                  case "fila2a":
                      if ((divs[i]) == "rf2a") {
                          nota = nota + 1;
                          $('#fila2a').css("border", "4px solid green");

                      } else {
                          $('#fila2a').css("border", "4px solid red");
                      }
                      break;
                  case "fila2b":
                      if ((divs[i]) == "rf2b") {
                          nota = nota + 1;
                          $('#fila2b').css("border", "4px solid green");

                      } else {
                          $('#fila2b').css("border", "4px solid red");
                      }
                      break;
                  case "fila2c":
                      if ((divs[i]) == "rf2c") {
                          nota = nota + 1;
                          $('#fila2c').css("border", "4px solid green");

                      } else {
                          $('#fila2c').css("border", "4px solid red");
                      }
                      break;
                  case "fila2d":
                      if ((divs[i]) == "rf2d") {
                          nota = nota + 1;
                          $('#fila2d').css("border", "4px solid green");

                      } else {
                          $('#fila2d').css("border", "4px solid red");
                      }
                      break;
                      //Validacion Fila 3

                  case "fila3a":
                      if ((divs[i]) == "rf3a") {
                          nota = nota + 1;
                          $('#fila3a').css("border", "4px solid green");

                      } else {
                          $('#fila3a').css("border", "4px solid red");
                      }
                      break;
                  case "fila3b":
                      if ((divs[i]) == "rf3b") {
                          nota = nota + 1;
                          $('#fila3b').css("border", "4px solid green");

                      } else {
                          $('#fila3b').css("border", "4px solid red");
                      }
                      break;
                  case "fila3c":
                      if ((divs[i]) == "rf3c") {
                          nota = nota + 1;
                          $('#fila3c').css("border", "4px solid green");

                      } else {
                          $('#fila3c').css("border", "4px solid red");
                      }
                      break;
                  case "fila3d":
                      if ((divs[i]) == "rf3d") {
                          nota = nota + 1;
                          $('#fila3d').css("border", "4px solid green");

                      } else {
                          $('#fila3d').css("border", "4px solid red");
                      }
                      break;
                  case "fila3e":
                      if ((divs[i]) == "rf3e") {
                          nota = nota + 1;
                          $('#fila3e').css("border", "4px solid green");

                      } else {
                          $('#fila3e').css("border", "4px solid red");
                      }
                      break;

                      //Validacion Fila 4

                  case "fila4a":
                      if ((divs[i]) == "rf4a") {
                          nota = nota + 1;
                          $('#fila4a').css("border", "4px solid green");

                      } else {
                          $('#fila4a').css("border", "4px solid red");
                      }
                      break;
                  case "fila4b":
                      if ((divs[i]) == "rf4b") {
                          nota = nota + 1;
                          $('#fila4b').css("border", "4px solid green");

                      } else {
                          $('#fila4b').css("border", "4px solid red");
                      }
                      break;
                  case "fila4c":
                      if ((divs[i]) == "rf4c") {
                          nota = nota + 1;
                          $('#fila4c').css("border", "4px solid green");

                      } else {
                          $('#fila4c').css("border", "4px solid red");
                      }
                      break;
                  case "fila4d":
                      if ((divs[i]) == "rf4d") {
                          nota = nota + 1;
                          $('#fila4d').css("border", "4px solid green");

                      } else {
                          $('#fila4d').css("border", "4px solid red");
                      }
                      break;
                  case "fila4e":
                      if ((divs[i]) == "rf4e") {
                          nota = nota + 1;
                          $('#fila4e').css("border", "4px solid green");

                      } else {
                          $('#fila4e').css("border", "4px solid red");
                      }
                      break;
              }
          }
          debugger;
          var notaFinal = 0;
          notaFinal = (nota * 10);
          notaFinal = notaFinal / 18;
          notaFinal = notaFinal.toFixed(2)
          $("#txtNota").text(notaFinal + "/" + 10);
          $('#Calificar').attr('disabled', true);
          $('#Refrescar').attr('disabled', false);
      });
  });