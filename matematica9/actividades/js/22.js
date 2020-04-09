 var numero = [];
 var titulos = "aplico";

 function Inicio() {
     $('#nota-informativa').slideUp('slow');
     $("#Calificar").removeAttr("disabled");
     $('#Refrescar').attr('disabled', true);
     var tablaA = [];
     var valores = [];
     for (var i = 0; i <= 10; i++)
         valores[i] = Math.round(Math.random() * (10 - 1) + 1);

     tablaA[0] = '<tr>' +
         '<td><label class="col1">q(t) = 20(4/5)<sup>t</sup></label></td>'+
         '<td><input type="number" id="resNum1" class="respA"></td>' +
         '<td class="valores"><label id="numerador1">16</label></td>' +
         '<td><input type="number" id="resNum2" class="respA"></td>' +
         '<td><input type="number" id="resNum3" class="respA"></td>' +
         '<td><input type="number" id="resNum4" class="respA"></td>' +         
         '</tr>';
     tablaA[1] = '<tr>' +
         '<td><label id="denominador1" class="col1">t(s)</label></td>' +
         '<td ><label id="denominador1">5</label></td>' +
         '<td ><label id="denominador1">6</label></td>' +
         '<td ><label id="denominador1">7</label></td>' +
         '<td ><label id="denominador1">8</label></td>' +
         '<td ><label id="denominador1">9</label></td>' +
         '</tr>';
     tablaA[2] = '<tr>' +
         '<td ><label id="denominador1" class="col1">q(t) = 20(4/5)<sup>t</sup></label></td>' +
         '<td ><label id="denominador1">6.6</label></td>' +
         '<td><input type="number" id="resNum5" class="respA"></td>' +
         '<td><input type="number" id="resNum6" class="respA"></td>' +
         '<td ><label id="denominador1">3.4</label></td>' +
         '<td><input type="number" id="resNum7" class="respA"></td>' +
         '</tr>';
     $("#tablaA").append(tablaA);
 };

 function Cargar() {
     Inicio();
     location.reload();
 }
 $(document).ready(function() {
     Inicio();
     $("#Calificar").click(function() {
         var resultados = ["","20","12.8","10.24","8.192","5.24","4.19","2.68"];
         var numerador = [];
         var nota = 0;
         debugger;
         for (var i = 1; i <= 8; i++) {
             numerador[i] = $("#resNum"+i).val();
             if (numerador[i] == resultados[i]) {
                 nota = nota + 1;
                 $('#resNum' + i).css("border", "4px solid green");
             } else {
                 $('#resNum' + i).css("border", "4px solid red");
             }
         }
         if ($("#resA").val() == "5.24 g") {
                 nota = nota + 1;
                 $('#resA').css("border", "4px solid green");
             } else {
                 $('#resA').css("border", "4px solid red");
             }
             if ($("#resB").val() == "2.68 g") {
                 nota = nota + 1;
                 $('#resB').css("border", "4px solid green");
             } else {
                 $('#resB').css("border", "4px solid red");
             }
         var notaFinal = 0;
         notaFinal = (nota * 10);
         notaFinal = notaFinal / 10;
         notaFinal = notaFinal.toFixed(2);
         $("#txtNota").text(notaFinal + "/" + 10);
         $('#Calificar').attr('disabled', true);
         $('#Refrescar').attr('disabled', false);
     });
 });