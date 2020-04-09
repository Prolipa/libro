 var numero = [];
var titulos = "refuerzo";
 
 function Inicio() {
     $('#nota-informativa').slideUp('slow');
     $("#Calificar").removeAttr("disabled");
     $('#Refrescar').attr('disabled', true);
     var p = [];
     var respuestas = [];
     var numeros = [];
     for (var j = 0; j <= 5; j++) {
         numero[j] = Math.round(Math.random() * (10 - 1) + 2);
         if (numero[j] % 2 == 1) {
             numero[j] = numero[j] + 1
         }
         numeros[j] = Math.round(Math.random() * (10 - 1) + 1);
     }
     console.log(numeros)
     numeros = jQuery.unique(numeros);
     console.log(numero)
     console.log(numeros)


     for (var j = 0; j <= 2; j++) {
         respuestas = [];
         for (var i = 0; i <= numero[j] + 1; i++) {
             if (i % 2 == 1) {
                 respuestas[i] = '<td><label> x </label></td>';
             } else {
                 respuestas[i] = '<td><label id="b' + i + j + '">' + numeros[j] + '</label></td>'
             }
             if (i == numero[j] + 1) {
                 respuestas[i] = '<td><label> = </label></td>';
             }
         }
         $("#contenido" + j).append('<tr>' + respuestas + '<td class="Respuestas"><input type="number" class="base" id="base' + j + '"><sup><input type="number" id="exp' + j + '" class="exponente"></sup></td></tr><tr style="height: 20px;"></tr>');
     }
 };

 function Cargar() {
     $("#contenido0").html('');
     $("#contenido1").html('');
     $("#contenido2").html('');
     $("#encabezado").html('');
     Inicio();
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
         for (var i = 0; i <= 5; i++) {
             if ($("#exp" + i).val() == exponente[i]) {
                 nota = nota + 1;
                 $('#exp' + i).css("border", "4px solid green");
             } else {
                 $('#exp' + i).css("border", "4px solid red");
             }
             if ($("#base" + i).val() == base[i]) {
                 nota = nota + 1;
                 $('#base' + i).css("border", "4px solid green");
             } else {
                 $('#base' + i).css("border", "4px solid red");
             }

         }






         debugger;
         var notaFinal = 0;
         notaFinal = (nota * 10);
         notaFinal = notaFinal / 6;
         notaFinal = notaFinal.toFixed(2);
         $("#txtNota").text(notaFinal + "/" + 10);
         $('#Calificar').attr('disabled', true);
         $('#Refrescar').attr('disabled', false);
     });
 });