 var numero = [];
 var titulos = "reflexiono";

 function Inicio() {
     $('#nota-informativa').slideUp('slow');
     $("#Calificar").removeAttr("disabled");
     $('#Refrescar').attr('disabled', true);
     var conte = [];
     var ram = Math.round(Math.random() * (3 - 1) + 1);
     var numeros = [];
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

     for (var j = 0; j <= 7; j++) {
         numeros[j] = Math.round(Math.random() * (1000 - 1) + 1);
         if (j == 3) {
             numeros[j] = Math.round(Math.random() * (100 - 1) + 1);
         }
         conte[j] = '<label id="a' + j + '">' + numeros[j] + '</label><label>' + unidades1[j] + '</label>&nbsp;=&nbsp;<input type="number" placeholder="0" id="res' + j + '" class="Respuestas"><label>' + unidades2[j] + '</label><br><br>';
     }
     if (ram == 1) {
         $("#col1").append(conte[0] + conte[1] + conte[2] + conte[3]);
         $("#col2").append(conte[4] + conte[5] + conte[6] + conte[7]);
     }
     if (ram == 2) {
         $("#col1").append(conte[3] + conte[2] + conte[1] + conte[0]);
         $("#col2").append(conte[7] + conte[6] + conte[5] + conte[4]);
     }
     if (ram == 3) {
         $("#col1").append(conte[1] + conte[3] + conte[2] + conte[0]);
         $("#col2").append(conte[6] + conte[7] + conte[5] + conte[4]);
     }



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
         res[0] = parseInt($('#a0').text()) * 100;
         res[1] = parseInt($('#a1').text()) * 100;
         res[2] = parseInt($('#a2').text()) * 100;
         res[3] = parseInt($('#a3').text()) * 1000000;
         res[4] = parseInt($('#a4').text()) * 10000;
         res[5] = parseInt($('#a5').text()) / 10000;
         res[6] = parseInt($('#a6').text()) / 1000;
         res[7] = parseInt($('#a7').text()) / 100;
         console.log(res);

         for (var i = 0; i <= 7; i++) {
             if ($("#res" + i).val() == res[i]) {
                 nota = nota + 1;
                 $('#res' + i).css("border", "4px solid green");
             } else {
                 $('#res' + i).css("border", "4px solid red");
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