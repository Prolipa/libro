 var numero = [];
var titulos = "aplico";

 function Inicio() {
     $('#nota-informativa').slideUp('slow');
     $("#Calificar").removeAttr("disabled");
     $('#Refrescar').attr('disabled', true);
     $("#contenido").html('');

     var p = [];
     var al = Math.round(Math.random() * (3 - 0) + 1)
     p[0] = '<tr>' +
         '<td class="conte">6<sup>5</sup></td>' +
         '<td class="conte1"><label class="conte2">Seis a la quinta</label></td>' +
         '<td class="conte1"><input  class="conte1a" type="text" id="fila1a"></td>' +
         '<td class="conte1">7 776</td>' +
         '</tr>';
     p[1] = '<tr>' +
         '<td class="conte">23<sup>4</sup></td>' +
         '<td class="conte1"><input class="conte2" type="text" id="fila2a"></td>' +
         '<td  class="conte1"><input type="text" id="fila2b"  class="conte1a"></td>' +
         '<td  class="conte1"><input type="text" id="fila2c"></td>' +
         '</tr>';

     p[2] = '<tr>' +
         '<td class="conte">3<sup>9</sup></td>' +
         '<td class="conte1"><input type="text" class="conte2" id="fila3a"></td>' +
         '<td class="conte1"><input type="text" id="fila3b"  class="conte1a"></td>' +
         '<td class="conte1">19683</td>' +
         '</tr>';
     p[3] = '<tr>' +
         '<td class="conte">17<sup>6</sup></td>' +
         '<td class="conte1"><input type="text" class="conte2" id="fila4a"></td>' +
         '<td class="conte1"><input type="text" id="fila4b"  class="conte1a"></td>' +
         '<td class="conte1"><input type="text" id="fila4c"></td>' +
         '</tr>';
     p[4] = '<tr>' +
         '<td class="conte">49<sup>3</sup></td>' +
         '<td class="conte1"><textarea class="conte2" id="fila5a"/></td>' +
         '<td class="conte1">49 x 49 x 49</td>' +
         '<td class="conte1"><input type="text" id="fila5b"></td>' +
         '</tr>';

     console.log(al)

     if (al == 1)
         $("#contenido").append(p[1] + p[2] + p[3] + p[4] + p[0]);
     if (al == 2)
         $("#contenido").append(p[2] + p[3] + p[4] + p[0] + p[1]);
     if (al == 3)
         $("#contenido").append(p[3] + p[4] + p[0] + p[1] + p[2]);
     if (al == 4)
         $("#contenido").append(p[4] + p[0] + p[1] + p[2] + p[3]);
 };

 function Cargar() {
     $("#contenido").html('');
     Inicio();
 }
 $(document).ready(function() {
     Inicio();
     $("#Calificar").click(function() {
         var nota = 0

         if (($("#fila1a").val()).toLowerCase() == "6x6x6x6x6") {
             nota = nota + 1;
             $('#fila1a').css("background-color", "green");
         } else {
             $('#fila1a').css("background-color", "red");
         }
         if (($("#fila2a").val()).toLowerCase() == "veintitrés a la cuarta") {
             nota = nota + 1;
             $('#fila2a').css("background-color", "green");
         } else {
             $('#fila2a').css("background-color", "red");
         }
         if (($("#fila3a").val()).toLowerCase() == "tres a la nueve") {
             nota = nota + 1;
             $('#fila3a').css("background-color", "green");
         } else {
             $('#fila3a').css("background-color", "red");
         }
         if (($("#fila4a").val()).toLowerCase() == "diecisiete a la sexta") {
             nota = nota + 1;
             $('#fila4a').css("background-color", "green");
         } else {
             $('#fila4a').css("background-color", "red");
         }

         if ((jQuery("textarea#fila5a").val()).toLowerCase() == "cuarenta y nueve al cubo") {
             nota = nota + 1;
             $('#fila5a').css("background-color", "green");
         } else {
             $('#fila5a').css("background-color", "red");
         }


         if (($("#fila2b").val()).toLowerCase() == "23x23x23x23") {
             nota = nota + 1;
             $('#fila2b').css("background-color", "green");
         } else {
             $('#fila2b').css("background-color", "red");
         }
         if (($("#fila3b").val()).toLowerCase() == "3x3x3x3x3x3x3x3x3") {
             nota = nota + 1;
             $('#fila3b').css("background-color", "green");
         } else {
             $('#fila3b').css("background-color", "red");
         }
         if (($("#fila4b").val()).toLowerCase() == "17x17x17x17x17x17") {
             nota = nota + 1;
             $('#fila4b').css("background-color", "green");
         } else {
             $('#fila4b').css("background-color", "red");
         }

         if (($("#fila5b").val()).toLowerCase() == "117649") {
             nota = nota + 1;
             $('#fila5b').css("background-color", "green");
         } else {
             $('#fila5b').css("background-color", "red");
         }

         if (($("#fila2c").val()).toLowerCase() == "279841") {
             nota = nota + 1;
             $('#fila2c').css("background-color", "green");
         } else {
             $('#fila2c').css("background-color", "red");
         }

         if (($("#fila4c").val()).toLowerCase() == "24137569") {
             nota = nota + 1;
             $('#fila4c').css("background-color", "green");
         } else {
             $('#fila4c').css("background-color", "red");
         }
         
         debugger;
         var notaFinal = 0;
         notaFinal = (nota * 10);
         notaFinal = notaFinal / 11;
         notaFinal = notaFinal.toFixed(2);
         $("#txtNota").text(notaFinal + "/" + 10);
         $('#Calificar').attr('disabled', true);
         $('#Refrescar').attr('disabled', false);
     });
 });