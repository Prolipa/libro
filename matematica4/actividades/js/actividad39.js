 var numero = [];
var titulos ="preparo"
 function Inicio() {
     $('#nota-informativa').slideUp('slow');
     $("#Calificar").removeAttr("disabled");
     $('#Refrescar').attr('disabled', true);
     var conte = [];
     var numero = Math.round(Math.random() * (4 - 1) + 1);
     conte[0] = '<img src="img/i1_p33_act27.jpg">' +
         '<br>' +
         '<div class="r1">' +
         '<input type="number" class="base" id="base1">' +
         '<sup><input type="number" class="exp" id="exp1"></sup>' +
         '<label> = </label>' +
         '<input type="number" class="A1" id="A1">' +
         '<label> X </label>' +
         '<input type="number" class="A2" id="A2">' +
         '<label> = </label>' +
         '<input type="text" class="base" id="res1"><sup>2</sup>' +
         '</div>';
     conte[1] = '<img src="img/i2_p33_act27.jpg">' +
         '<br>' +
         '<div class="r1">' +
         '<input type="number" class="base" id="base2">' +
         '<sup><input type="number" class="exp" id="exp2"></sup>' +
         '<label> = </label>' +
         '<input type="number" class="base" id="B1">' +
         '<label> X </label>' +
         '<input type="number" class="base" id="B2">' +
         '<label> = </label>' +
         '<input type="text" class="base" id="res2"><sup>2</sup>' +
         '</div>';
     conte[2] = '<img src="img/i3_p33_act27.jpg">' +
         '<br>' +
         '<div class="r2">' +
         '<input type="number" class="base" id="base3">' +
         '<sup><input type="number" class="exp" id="exp3"></sup>' +
         '<label> = </label>' +
         '<input type="number" class="base" id="C1">' +
         '<label> X </label>' +
         '<input type="number" class="base" id="C2">' +
         '<label> X </label>' +
         '<input type="number" class="base" id="C3">' +
         '<label> = </label>' +
         '<input type="text" class="base" id="res3"><sup>3</sup>' +
         '</div>';
     conte[3] = '<img src="img/i2_p12_act5.jpg">' +
         '<br>' +
         '<div class="r2">' +
         '<input type="number" class="base" id="base4">' +
         '<sup><input type="number" class="exp" id="exp4"></sup>' +
         '<label> = </label>' +
         '<input type="number" class="base" id="D1">' +
         '<label> X </label>' +
         '<input type="number" class="base" id="D2">' +
         '<label> X </label>' +
         '<input type="number" class="base" id="D3">' +
         '<label> = </label>' +
         '<input type="text" class="base" id="res4"><sup>3</sup>' +
         '</div>';
     console.log(numero)
     if (numero == 1) {
         $("#dib1").append(conte[0]);
         $("#dib2").append(conte[1]);
         $("#dib3").append(conte[2]);
         $("#dib4").append(conte[3]);
     }
     if (numero == 2) {
         $("#dib2").append(conte[0]);
         $("#dib3").append(conte[1]);
         $("#dib4").append(conte[2]);
         $("#dib1").append(conte[3]);
     }
     if (numero == 3) {
         $("#dib3").append(conte[0]);
         $("#dib4").append(conte[1]);
         $("#dib1").append(conte[2]);
         $("#dib2").append(conte[3]);
     }
     if (numero == 4) {
         $("#dib4").append(conte[0]);
         $("#dib3").append(conte[1]);
         $("#dib2").append(conte[2]);
         $("#dib1").append(conte[3]);
     }


 };

 function Cargar() {
     $("#dib1").html('');
     $("#dib2").html('');
     $("#dib3").html('');
     $("#dib4").html('');
     $("#encabezado").html('');
     Inicio();
 }
 $(document).ready(function() {
     Inicio();
     $("#Calificar").click(function() {
         var exponente = ["", "2", "2", "3", "3"]
         var base = ["", "7", "5", "5", "3"];
         var respuestas = ["", "49 u", "25 u", "125 u", "27 u"]

         debugger;
         console.log(exponente);
         console.log(base);
         var nota = 0;
         for (var i = 1; i <= 4; i++) {
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
         var r1 = 0;
         var r2 = 0;
         for (var i = 1; i <= 2; i++) {
             if ($("#A" + i).val() == "7") {
                 r1 = r1 + 1;
                 $('#A' + i).css("border", "4px solid green");
             } else {
                 $('#A' + i).css("border", "4px solid red");
             }
             if ($("#B" + i).val() == "5") {
                 r2 = r2 + 1;
                 $('#B' + i).css("border", "4px solid green");
             } else {
                 $('#B' + i).css("border", "4px solid red");
             }
         }
         if (r1 == 2) {
             nota = nota + 2;
         } else {
             nota = 0 + nota;
         }
         if (r2 == 2) {
             nota = nota + 2;
         } else {
             nota = 0 + nota;
         }


         var band1 = 0;
         var band2 = 0;

         for (var i = 1; i <= 3; i++) {

             if ($("#C" + i).val() == "5") {
                 band1 = band1 + 1;
                 $('#C' + i).css("border", "4px solid green");
             } else {
                 $('#C' + i).css("border", "4px solid red");
             }
             if ($("#D" + i).val() == "3") {
                 band2 = band2 + 1;
                 $('#D' + i).css("border", "4px solid green");
             } else {
                 $('#D' + i).css("border", "4px solid red");
             }
         }
         if (band1 == 3) {
             nota = nota + 3;
         } else {
             nota = 0 + nota;
         }
         if (band2 == 3) {
             nota = nota + 3;
         } else {
             nota = 0 + nota;
         }



         for (var j = 1; j <= 4; j++) {
             if ($("#res" + j).val() == respuestas[j]) {
                 nota = nota + 1;
                 $('#res' + j).css("border", "4px solid green");
             } else {
                 $('#res' + j).css("border", "4px solid red");
             }
         }


         debugger;
         var notaFinal = 0;
         notaFinal = (nota * 10);
         notaFinal = notaFinal / 22;
         notaFinal = notaFinal.toFixed(2);
         $("#txtNota").text(notaFinal + "/" + 10);
         $('#Calificar').attr('disabled', true);
         $('#Refrescar').attr('disabled', false);
     });
 });