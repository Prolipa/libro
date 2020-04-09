 var numero = [];
 var titulos = "aplico";
 

 function Inicio() {
     $('#nota-informativa').slideUp('slow');
     $("#Calificar").removeAttr("disabled");
     $('#Refrescar').attr('disabled', true);
     var conte = [];
     var numero = Math.round(Math.random() * (4 - 1) + 1);
     var combo1 = [];
     var perg = ["",
         "Figura geométrica de 4 lados iguales y 4 ángulos rectos",
         "Figura geométrica de 4 lados iguales, 2 ángulos agudos y 2 ángulos obtusos.",
         "Figura geométrica con 2 lados paralelos, 4 lados y 4 ángulos desiguales.",
         "Cuadrilátero que tiene un segmento perpendicular a los lados paralelos y un segmento oblicuo."
     ];
     for (var i = 1; i <= 4; i++) {
         combo1[i] = '<select id="r' + i + '" class="opciones">' +
             '<option value="0" selected="selected">Seleccione una opción</option>' +
             '<option value="cuadrado">Cuadrado</option>' +
             '<option value="rombo">Rombo</option>' +
             '<option value="trapecio escaleno">Trapecio escaleno</option>' +
             '<option value="trapecio rectangular">Trapecio rectangular</option>' +
             '</select>';
     }
     for (var i = 1; i <= 4; i++) {
         conte[i] = '<tr><td><label>' + perg[i] + '</label></td>' +
             '<td>' + combo1[i] + '</td>' +
             '</tr>';
     }

     if (numero == 1)
         $("#dib1").append(conte);
     if (numero == 2)
         $("#dib1").append(conte[2] + conte[3] + conte[4] + conte[1]);
     if (numero == 3)
         $("#dib1").append(conte[3] + conte[4] + conte[1] + conte[2]);
     if (numero == 4)
         $("#dib1").append(conte[4] + conte[1] + conte[2] + conte[3]);
 };

 function Cargar() {
     $("#dib1").html('');
     Inicio();
 }
 $(document).ready(function() {
     Inicio();
     $("#Calificar").click(function() {
             var nota = 0;

             if ($("#r1").val() == "cuadrado") {
                 nota = nota + 1;
                 $('#r1').css("border", "4px solid green");
             } else {
                 $('#r1').css("border", "4px solid red");
             }
             if ($("#r2").val() == "rombo") {
                 nota = nota + 1;
                 $('#r2').css("border", "4px solid green");
             } else {
                 $('#r2').css("border", "4px solid red");
             }
             if ($("#r3").val() == "trapecio escaleno") {
                 nota = nota + 1;
                 $('#r3').css("border", "4px solid green");
             } else {
                 $('#r3').css("border", "4px solid red");
             }
             if ($("#r4").val() == "trapecio rectangular") {
                 nota = nota + 1;
                 $('#r4').css("border", "4px solid green");
             } else {
                 $('#r4').css("border", "4px solid red");
             }
         debugger;
         var notaFinal = 0; 
         notaFinal = (nota * 10); 
         notaFinal = notaFinal / 4; 
         notaFinal = notaFinal.toFixed(2); 
         $("#txtNota").text(notaFinal + "/" + 10); 
         $('#Calificar').attr('disabled', true); 
         $('#Refrescar').attr('disabled', false);
     });
 });