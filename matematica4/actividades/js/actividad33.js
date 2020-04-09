 var numero = [];
 var titulos = "reflexiono";
 function Inicio() {
     $('#nota-informativa').slideUp('slow');
     $("#Calificar").removeAttr("disabled");
     $('#Refrescar').attr('disabled', true);
     var conte = [];
     var ram = Math.round(Math.random() * (3 - 1) + 1);
     var numeros = Math.round(Math.random() * (10000 - 1000) + 1);
     var unidades1 = ["m<sup>2</sup>",
         "cm<sup>2</sup>",
         "dam<sup>2</sup>",
         "km<sup>2</sup>",
         "m<sup>2</sup>",
         "mm<sup>2</sup>",
         "m<sup>2</sup>",
         "dm<sup>2</sup>"
     ];
     var unidades2 = ["dm<sup>2</sup>",
         "mm<sup>2</sup>",
         "m<sup>2</sup>",
         "m<sup>2</sup>",
         "cm<sup>2</sup>",
         "dm<sup>2</sup>",
         "hm<sup>2</sup>",
         "m<sup>2</sup>"
     ];
     $("#nuevo").append(numeros);
     for (var i = 0; i <= 6; i++) {
     conte[i] = '<td><input type="number" id="val'+i+'" class="Respuestas">m<sup>2</sup></td>';
     }
         $("#contenido1").append('<tr>'+conte+'</tr>');
     
     
 }

 function Cargar() {
     $("#col1").html('');
     $("#col2").html('');

     Inicio();
 }
 $(document).ready(function() {
     Inicio();
     $("#Calificar").click(function() {
         var nota = 0;
         var res = [];
         res[0] = parseInt($('#nuevo').text()) / 1000000;
         res[1] = parseInt($('#nuevo').text()) / 10000;
         res[2] = parseInt($('#nuevo').text()) / 100;
         res[3] = parseInt($('#nuevo').text()) * 1;
         res[4] = parseInt($('#nuevo').text()) * 100;
         res[5] = parseInt($('#nuevo').text()) * 10000;
         res[6] = parseInt($('#nuevo').text()) * 1000000;
         console.log(res);

         for (var i = 0; i <= 7; i++) {
             if ($("#val" + i).val() == res[i]) {
                 nota = nota + 1;
                 $('#val' + i).css("border", "4px solid green");
             } else {
                 $('#val' + i).css("border", "4px solid red");
             }
         }


         var notaFinal = 0;
         notaFinal = (nota * 10);
         notaFinal = notaFinal / 3;
         notaFinal = notaFinal.toFixed(2);
         $("#txtNota").text(notaFinal + "/" + 10);
         $('#Calificar').attr('disabled', true);
         $('#Refrescar').attr('disabled', false);
     });
 });