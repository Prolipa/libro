 var numero = [];
 var titulos = "refuerzo";

 function Inicio() {
     $('#nota-informativa').slideUp('slow');
     $("#Calificar").removeAttr("disabled");
     $('#Refrescar').attr('disabled', true);
     var cont = ["", "La representación decimal de un número racional es periódica.",
         "El conjunto de los números enteros ( ℤ ) está incluido en el conjunto de los números racionales ( ℚ ).",
         "La fracción 19/ 24 está comprendida entre las fracciones 3/4 y 5/6.",
         "La fracción 5/4 está más cerca del 1 en la recta numérica que la fracción 19/20."
     ];
     var ContA = [];
     var al = Math.round(Math.random() * (3 - 1) + 1)
     var opciones = [];

     for (var i = 1; i <= 4; i++) {
         opciones[i] = '<select id="respuesta' + i + '">' +
             '<option value="0">Seleccione una Respuestas</option>' +
             '<option value="verdadero">V</option>' +
             '<option value="Falso">F</option>' +
             '</select>'
         ContA[i] = '<label>' + cont[i] + '</label>' + opciones[i];
     }

     if (al == 1) {
         $("#contenido").append(ContA);
     }
     if (al == 2) {
         $("#contenido").append(ContA[1] + ContA[4] + ContA[2] + ContA[3]);
     }
     if (al == 3) {
         $("#contenido").append(ContA[3] + ContA[2] + ContA[2] + ContA[1]);
     }
 };

 function Cargar() {
     Inicio();
     location.reload();
 }
 $(document).ready(function() {
     Inicio();
     $("#Calificar").click(function() {
         var nota = 0;
         var respuestas = ["", "verdadero", "verdadero", "verdadero", "Falso"];
         for (var i = 0; i <= 4; i++) {
             if ($("#respuesta"+i).val() == respuestas[i]) {
                 nota = nota + 1;
                 $('#respuesta'+i).css("border", "4px solid green");
             } else {
                 $('#respuesta'+i).css("border", "4px solid red");
             }
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