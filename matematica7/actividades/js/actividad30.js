 var numero = [];
 var titulos = "aplico";

 function Inicio() {
     $('#nota-informativa').slideUp('slow');
     $("#Calificar").removeAttr("disabled");
     $('#Refrescar').attr('disabled', true);
     var conte = [];
     var numero = Math.round(Math.random() * (3 - 1) + 1);
     var combo1 = [];
     var perg = ["",
         "El cuadrilátero tiene lados opuestos iguales, cuatro ángulos rectos y sus dos diagonales se cortan en un punto medio.",
         "El cuadrilátero tiene dos lados paralelos, medidas diferentes en sus lados y ángulos, sus diagonales se cortan en un espacio interno.",
         "Las medidas de los lados y de los ángulos del cuadrilátero son diferentes."
     ];
     for (var i = 1; i <= 4; i++) {
         combo1[i] = '<select id="r' + i + '" class="opciones">' +
             '<option value="0" selected="selected">Seleccione una opción</option>' +
             '<option value="rectangulo">Rectángulo</option>' +
             '<option value="trapecio escaleno">Trapecio escaleno</option>' +
             '<option value="trapecio asimétrico">Trapecio asimétrico</option>' +
             '</select>';
     }
     for (var i = 1; i <= 3; i++) {
         conte[i] = '<div><label>' + perg[i] + '</label>'+ combo1[i]+'</div><br>';
     }

     if (numero == 1)
         $("#dib1").append(conte);
     if (numero == 2)
         $("#dib1").append(conte[3] + conte[2] + conte[1]);
     if (numero == 3)
         $("#dib1").append(conte[2] + conte[1] + conte[3]);
 }

 function Cargar() {
     $("#dib1").html('');
     Inicio();
 }
 $(document).ready(function() {
     Inicio();
     $("#Calificar").click(function() {
         var nota = 0;

         if ($("#r1").val() == "rectangulo") {
             nota = nota + 1;
             $('#r1').css("border", "4px solid green");
         } else {
             $('#r1').css("border", "4px solid red");
         }
         if ($("#r2").val() == "trapecio escaleno") {
             nota = nota + 1;
             $('#r2').css("border", "4px solid green");
         } else {
             $('#r2').css("border", "4px solid red");
         }
         if ($("#r3").val() == "trapecio asimétrico") {
             nota = nota + 1;
             $('#r3').css("border", "4px solid green");
         } else {
             $('#r3').css("border", "4px solid red");
         }
         debugger;
         var notaFinal = 0;
         notaFinal = (nota * 10);
         notaFinal = notaFinal / 3;
         notaFinal = notaFinal.toFixed(2);
         $("#txtNota").text(notaFinal + "/" + 10);
         $('#Calificar').attr('disabled', true);
         $('#Refrescar').attr('disabled', false);
     });
 });