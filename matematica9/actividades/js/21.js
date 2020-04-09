 var numero = [];
 var titulos = "aplico";

 function Inicio() {
     $('#nota-informativa').slideUp('slow');
     $("#Calificar").removeAttr("disabled");
     $('#Refrescar').attr('disabled', true);
     var tablaA = [];
     var tablaB = [];
     var tablaC = [];
     var tablaD = [];
     var valores = [];
     for (var i = 0; i <= 10; i++)
         valores[i] = Math.round(Math.random() * (10 - 1) + 1);

     tablaA[0] = '<tr>' +
         '<td rowspan="2"><label class="p1">(</label></td>' +
         '<td class="valores"><label id="numerador1">' + valores[0] + '</label></td>' +
         '<td rowspan="2"><label class="p1">)<sup class="exp">-2</sup></label></td>' +
         '<td rowspan="2"><label class="p1">=</label></td>' +
         '<td><input type="number" id="resNum1" class="respA"></td>' +
         '</tr>';
     tablaA[1] = '<tr>' +
         '<td ><label id="denominador1">' + valores[1] + '</label></td>' +
         '<td><input type="number" id="resDen1"></td>' +
         '</tr>'

     tablaB[0] = '<tr>' +
         '<td rowspan="2"><label class="p1">(</label></td>' +
         '<td class="valores"><label id="numerador2">' + valores[2] + '</label></td>' +
         '<td rowspan="2"><label class="p1">)<sup class="exp">-1</sup></label></td>' +
         '<td rowspan="2"><label class="p1">=</label></td>' +
         '<td><input type="number" id="resNum2" class="respA"></td>' +
         '</tr>';
     tablaB[1] = '<tr>' +
         '<td ><label id="denominador2">' + valores[3] + '</label></td>' +
         '<td><input type="number" id="resDen2"></td>' +
         '</tr>'

     tablaC[0] = '<tr>' +
         '<td rowspan="2"><label class="p1">(</label></td>' +
         '<td class="valores"><label id="numerador3">' + -valores[4] + '</label></td>' +
         '<td rowspan="2"><label class="p1">)<sup class="exp">-3</sup></label></td>' +
         '<td rowspan="2"><label class="p1">=</label></td>' +
         '<td><input type="number" id="resNum3" class="respA"></td>' +
         '</tr>';
     tablaC[1] = '<tr>' +
         '<td ><label id="denominador3">' + valores[5] + '</label></td>' +
         '<td><input type="number" id="resDen3"></td>' +
         '</tr>'

     tablaD[0] = '<tr>' +
         '<td rowspan="2"><label class="p1">(</label></td>' +
         '<td class="valores"><label id="numerador4">' + -valores[6] + '</label></td>' +
         '<td rowspan="2"><label class="p1">)<sup class="exp">-4</sup></label></td>' +
         '<td rowspan="2"><label class="p1">=</label></td>' +
         '<td><input type="number" id="resNum4" class="respA"></td>' +
         '</tr>';
     tablaD[1] = '<tr>' +
         '<td ><label id="denominador4">' + valores[8] + '</label></td>' +
         '<td><input type="number" id="resDen4"></td>' +
         '</tr>'

     $("#tablaA").append(tablaA);
     $("#tablaB").append(tablaB);
     $("#tablaC").append(tablaC);
     $("#tablaD").append(tablaD);
 };

 function Cargar() {
     Inicio();
     location.reload();
 }
 $(document).ready(function() {
     Inicio();
     $("#Calificar").click(function() {
         var numerador = [];
         var denominador = [];
         var nota = 0;
         var numeradorR=[];
         var denominadorR = [];
         numeradorR[1]= Math.pow($("#denominador1").text(),2)
         numeradorR[2]= Math.pow($("#denominador2").text(),1)
         numeradorR[3]= Math.pow($("#denominador3").text(),3)*-1;
         numeradorR[4]= Math.pow($("#denominador4").text(),4)
         denominadorR[1]= Math.pow($("#numerador1").text(),2)
         denominadorR[2]= Math.pow($("#numerador2").text(),1)
         denominadorR[3]= -1*Math.pow($("#numerador3").text(),3)
         denominadorR[4]= Math.pow($("#numerador4").text(),4)
         debugger;
         for (var i = 1; i <= 4; i++) {
             numerador[i] = $("#resNum"+i).val();
             denominador[i] = $("#resDen"+i).val();
             if (numerador[i] == numeradorR[i]) {
                 nota = nota + 1;
                 $('#resNum' + i).css("border", "4px solid green");
             } else {
                 $('#resNum' + i).css("border", "4px solid red");
             }
             if (denominador[i] == denominadorR[i]) {
                 nota = nota + 1;
                 $('#resDen' + i).css("border", "4px solid green");
             } else {
                 $('#resDen' + i).css("border", "4px solid red");
             }
         }
         
         var notaFinal = 0;
         notaFinal = (nota * 10);
         notaFinal = notaFinal / 8;
         notaFinal = notaFinal.toFixed(2);
         $("#txtNota").text(notaFinal + "/" + 10);
         $('#Calificar').attr('disabled', true);
         $('#Refrescar').attr('disabled', false);
     });
 });