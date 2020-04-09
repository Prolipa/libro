 var titulos = "prueba";
 function Cargar() {
     $('#nota-informativa').slideUp('slow');
     $("#txtNota").text("");
     $("#Calificar").removeAttr("disabled");
     $('#Refrescar').attr('disabled', true);
     $("#contenido1").html('');
     $("#contenido2").html('');
     var preg = [];
     var numeros = [];
     for (var j = 0; j <= 11; j++) {
         numeros[j] = Math.round(Math.random() * (20000 - 1) + 1);
     }
     numeros = jQuery.unique(numeros);
     for (var i = 0; i <= 5; i++) {
         preg[i] = '<tr><td style="padding: 5px;"><input type="number" id="a' + i + '" style="width: 60px;height: 20px;"></td>' +
             '<td style="padding: 5px; text-align: center;"><label id="numero' + i + '">' + numeros[i] + '</labe></td>' +
             '<td style="padding: 5px;"><input type="number" id="b' + i + '" style="width: 60px;height: 20px;"></td></tr>';
     }
     for (var k = 0; k <= 5; k++) {
         if (k % 2 == 0) {
             $("#contenido1").append(preg[k]);
         } else {
             $("#contenido2").append(preg[k]);
         }
     }
 };

 $(document).ready(function() {

     Cargar();

     $("#Calificar").click(function() {
         nota = 0;
         var vA = [];
         var vB = [];
         var vP = [];
         var resA = [];
         var resB = [];
         for (var i = 0; i <= 5; i++) {
             vA[i] = parseInt($("#a" + i).val());
             vP[i] = parseInt($("#numero" + i).text());
             vB[i] = parseInt($("#b" + i).val());
             resA[i] = vP[i] - 1;
             resB[i] = vP[i] + 1;
         }
         for (var i = 0; i <= 5; i++) {
             if (vA[i] == resA[i]) {
                 nota = nota + 1;
                 $("#a"+i).css("background-color", "green");
             } else {
                 $("#a"+i).css("background-color", "red");
             }
             if (vB[i] == resB[i]) {
                 nota = nota + 1;
                 $("#b"+i).css("background-color", "green");
             } else {
                 $("#b"+i).css("background-color", "red");
             }             
         }
         var notaFinal = (nota * 10) / 12;
         notaFinal = notaFinal.toFixed(2)
         $("#txtNota").text(+notaFinal + "/10");
         $('#Calificar').attr('disabled', true);
         $('#Refrescar').attr('disabled', false);
     });
 });