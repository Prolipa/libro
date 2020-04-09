 var numero = [];
 var titulos = "aplico";

 function Inicio() {
     $('#nota-informativa').slideUp('slow');
     $("#Calificar").removeAttr("disabled");
     $('#Refrescar').attr('disabled', true);
     var p = [];
     var contenido = [];
     contenido[0] = '<label class="periodo">0,2</label><label>(5/6 + 3/2 )4/5</label>' +
         '<table><tr><td class="numerador"><input type="text" id="res1a"></td></tr><tr><td ><input type="text" id="res1b"></td></tr></table>';
     contenido[1] = '<label>(8/3 + 5/9) ÷</label><label class="periodo">0,2</label>' +
         '<table><tr><td class="numerador"><input type="text" id="res2a"></td></tr><tr><td><input type="text" id="res2b"></td></tr></table>';
     var al = Math.round(Math.random() * (2 - 1) + 1);
     if (al == 1)
         $("#contenido").append(contenido);
     else
         $("#contenido").append(contenido[1] + contenido[0]);

 };

 function Cargar() {
     Inicio();
     location.reload();
 }
 $(document).ready(function() {
     Inicio();
     $("#Calificar").click(function() {
         var exponente = []
         var base = [];
         for (var i = 0; i <= 5; i++) {
             exponente[i] = (numero[i] / 2) + 1;
             base[i] = $("#b0" + i).text();
         }
         debugger;
         console.log(exponente);
         console.log(base);
         var nota = 0;
         if ($("#res1a").val() == "-16") {
             nota = nota + 1;
             $('#res1a').css("border", "4px solid green");
         } else {
             $('#res1a').css("border", "4px solid red");
         }
         if ($("#res1b").val() == "135") {
             nota = nota + 1;
             $('#res1b').css("border", "4px solid green");
         } else {
             $('#res1b').css("border", "4px solid red");
         }
         if ($("#res2a").val() == "29") {
             nota = nota + 1;
             $('#res2a').css("border", "4px solid green");
         } else {
             $('#res2a').css("border", "4px solid red");
         }
         if ($("#res2b").val() == "3") {
             nota = nota + 1;
             $('#res2b').css("border", "4px solid green");
         } else {
             $('#res2b').css("border", "4px solid red");
         }
         var notaFinal = 0;
         notaFinal = (nota * 10);
         notaFinal = notaFinal / 4;
         notaFinal = notaFinal.toFixed(2);
         $("#txtNota").text(notaFinal + "/" + 10);
         $('#Calificar').attr('disabled', true);
         $('#Refrescar').attr('disabled', false);
     });
 });