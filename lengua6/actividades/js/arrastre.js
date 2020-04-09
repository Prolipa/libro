 function Inicio() {
     $('#nota-informativa').slideUp('slow');
     $("#Calificar").removeAttr("disabled");
     $('#Refrescar').attr('disabled', true);
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
     var al = Math.round(Math.random() * (3 - 1) + 1); 
     var respuestasA = [];
     var respuestasB = [];
     var i = 0;
     var nuevo = [];
     var valoresA = ["", "Espacio", "Tiempo", "Narrador", "Personaje"]
     var valoresB = ["", 'Narrador' + "Espacio" + 'Tiempo', "Personaje"]
     console.log(al)
     for (var i = 1; i <= 4; i++){
         respuestasA[i] = '<td style="width: 250px;">' +
         '<div draggable="true" ondragstart="drag(event)" id="drag' + i + '" style="font-size:20px; text-align:center; background-color: white; padding-right: 10px;padding-left: 10px; border: 2px solid #76B82A">' + valoresA[i] + '</label></div></td>';}

     $("#contenido").append('<tr style="height: 10px"></tr><tr><td><div style="border: 2px solid #009FE3; border-radius: 10px"><p class="fuente2">Se trataba de un castillo abandonado. Las paredes estaban tan derruidas que podían caerse en cualquier momento.</p></div></td><td></td><td><div style="border: 2px solid #009FE3; border-radius: 10px"><p class="fuente2">Habían transcurrido dos años, tres meses y cuatro días desde que su hijo se marchó con los gitanos.</p></div></td><td></td><td><div style="border: 2px solid #009FE3; border-radius: 10px"><p class="fuente2">La historia que voy a relatar...</p></div></td><td></td><td><div style="border: 2px solid #009FE3; border-radius: 10px; width: 150px"><p class="fuente2">Se levantaba todos los días a la misma hora. Tejía una trenza para sujetar su larga cabellera y estaba lista para una nueva jornada.</p></div></td></tr><tr style="height: 10px"></tr><td width=150px style="width:200px;height:20px;border: 1px solid #009FE3; font-size: 12px" id="div1a" ondrop="drop(event)" ondragover="allowDrop(event)"></td>' +
         '<td> &emsp; </td>' +
         '<td width=150px style="width:200px;height:50px;border: 1px solid #009FE3; font-size: 12px" id="div2a" ondrop="drop(event)" ondragover="allowDrop(event)"></td>' +
         '<td> &emsp; </td>' +
         '<td width=150px style="width:200px;height:50px;border: 1px solid #009FE3; font-size: 12px" id="div3a" ondrop="drop(event)" ondragover="allowDrop(event)"></td>' +
         '<td> &emsp; </td>' +
         '<td width=150px style="width:200px;height:50px;border: 1px solid #009FE3; font-size: 12px" id="div4a" ondrop="drop(event)" ondragover="allowDrop(event)"></td>');
     if (al == 1) {
         $("#Respuestas").append('<tr>' + respuestasA[2] + respuestasA[1] + respuestasA[4] + respuestasA[3] + '</tr>');
     }
     if (al == 2) {
         $("#Respuestas").append('<tr>' + respuestasA[1] + respuestasA[2] + respuestasA[4] + respuestasA[3] + '</tr>');
     }
     if (al == 3) {
         $("#Respuestas").append('<tr>' + respuestasA[2] + respuestasA[1] + respuestasA[3] + respuestasA[4] + '</tr>');
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
                 case "div5a":
                     if ((divs[i]) == "drag5") {
                         nota = nota + 1;
                         $('#div5a').css("border", "4px solid green");
                     } else {
                         $('#div5a').css("border", "4px solid red");
                     }
                     break;
                 case "div6a":
                     if ((divs[i]) == "drag6") {
                         nota = nota + 1;
                         $('#div6a').css("border", "4px solid green");
                     } else {
                         $('#div6a').css("border", "4px solid red");
                     }
                     break;
                 case "div7a":
                     if ((divs[i]) == "drag7") {
                         nota = nota + 1;
                         $('#div7a').css("border", "4px solid green");
                     } else {
                         $('#div7a').css("border", "4px solid red");
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