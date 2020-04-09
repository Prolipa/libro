 var numero = [];
 var titulos = "reflexiono";

 function Inicio() {
     $('#nota-informativa').slideUp('slow');
     $("#Calificar").removeAttr("disabled");
     $('#Refrescar').attr('disabled', true);
     var conte = [];
     var numero = Math.round(Math.random() * (3 - 1) + 1);
     var combo1 = [];
     var perg = ["",
         '<label>¿Cuánto mide cada cuadrado de la cartulina?</label><br>',
         "<br><label>Cada lado de la cartulina se puede dividir en</label>",
         "<label>1 decímetro de lado.</label><br><label>Al unir las divisiones se forman<label>",
         "<label>cuadrados.</label><br><label>Cada cuadro mide</label>",
         "<br><label>El área se obtiene multiplicando</label>",
         "<br><label>Si se divide cada cuadrado de 1 decímetro cuadrado en 10 partes iguales, se obtienen<label>",
         "<label>cuadrados de</label>",
         "<label>El área se obtiene multiplicando</label><br>",
         "<br><label>Susana podrá colocar 100 ilustraciones.</label>"
     ];
     for (var i = 1; i <= 9; i++) {
         conte[i] = perg[i] + '<input type="text" class="res'+i+'" id="res' + i + '">';
         if (i == 9)
             conte[i] = perg[i];
     }
     $("#dib1").append(conte);

 }

 function Cargar() {
     $("#dib1").html('');
     Inicio();
 }
 $(document).ready(function() {
     Inicio();
     $("#Calificar").click(function() {
         var nota = 0;
         var res = ["",
             "Cada cuadrado mide 1 decímetro cuadrado.",
             "10",
             "100",
             "1 decímetro cuadrado (dm2).",
             "10 dm x 10 dm = 100 dm2",
             "100",
             "1 centímetro",
             "cuadrado (cm2)",
             "100 cm x 100 cm = 10 000 cm2"
         ];
         for (var i = 0; i <= 10; i++) {

             if ($("#res" + i).val() == res[i]) {
                 nota = nota + 1;
                 $('#res' + i).css("border", "4px solid green");
             } else {
                 $('#res' + i).css("border", "4px solid red");
             }
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