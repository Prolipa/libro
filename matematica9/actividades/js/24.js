 var numero = [];
 var titulos = "refuerzo";

 function Inicio() {
     $('#nota-informativa').slideUp('slow');
     $("#Calificar").removeAttr("disabled");
     $('#Refrescar').attr('disabled', true);
     var tablaA = [];
     var tablaB = [];
     var tablaC = [];
     var tablaD = [];
     var tablaE = [];
     var al = Math.round(Math.random() * (3 - 1) + 1)
     var valores = [];
     for(var i=0;i<=20;i++)
     valores[i] = Math.round(Math.random() * (12 - 1) + 1);

     tablaA[0] = '<tr>' +
         '<td rowspan="2"><label class="p1">(</label></td>' +
         '<td class="valores"><label id="numerador1">' + valores[0] + '</label></td>' +
         '<td rowspan="2"><label class="p1">)<sup class="exp">2</sup></label></td>' +
         '<td rowspan="2"><label class="p3">x</label></td>' +
         '<td rowspan="2"><label class="p1">(</label></td>' +
         '<td class="valores"><label id="numerador2">' + valores[0] + '</label></td>' +
         '<td rowspan="2"><label class="p1">)<sup class="exp">3</sup></label></td>' +
         '<td rowspan="2"><label class="p1">=</label></td>' +
         '<td><input type="number" id="resNum1" class="respA"></td>'+
         
         '</tr>';
     tablaA[1] = '<tr>' +
         '<td ><label id="denominador1">' + valores[3] + '</label></td>' +
         '<td ><label id="denominador2">' + valores[3] + '</label></td>' +
         '<td><input type="number" id="resDen1"></td>' +
         '</tr>';

     tablaB[0] = '<tr>' +
         '<td rowspan="2"><label class="p1">(</label></td>' +
         '<td class="valores"><label id="numerador3">' + valores[2] + '</label></td>' +
         '<td rowspan="2"><label class="p1">)<sup class="exp">-2</sup></label></td>' +
         '<td rowspan="2"><label class="p3">÷</label></td>' +
         '<td rowspan="2"><label class="p1">(</label></td>' +
         '<td class="valores"><label id="numerador4">' + valores[2] + '</label></td>' +
         '<td rowspan="2"><label class="p1">)<sup class="exp">-3</sup></label></td>' +
         '<td rowspan="2"><label class="p1">=</label></td>' +
         '<td><input type="number" id="resNum2" class="respA"></td>' +         
         '</tr>';
     tablaB[1] = '<tr>' +
         '<td ><label id="denominador3">' + valores[4] + '</label></td>' +
         '<td ><label id="denominador4">' + valores[4] + '</label></td>' +
         '<td><input type="number" id="resDen2"></td>' +
         '</tr>';

     tablaC[0] = '<tr>' +
         '<td rowspan="2"><label class="p1">(</label></td>' +
         '<td class="valores"><label id="numerador5">' + valores[7] + '</label></td>' +
         '<td rowspan="2"><label class="p1">)<sup class="exp">-2</sup></label></td>' +
         '<td rowspan="2"><label class="p3">÷</label></td>' +
         '<td rowspan="2"><label class="p1">(</label></td>' +
         '<td class="valores"><label id="numerador6">' + valores[8] + '</label></td>' +
         '<td rowspan="2"><label class="p1">)<sup class="exp">-3</sup></label></td>' +
         '<td rowspan="2"><label class="p1">=</label></td>' +
         '<td><input type="number" id="resNum3" class="respA"></td>' +
         '<td><sup><input type="number" id="resExp1"></sup></td>'+
         '</tr>';
     tablaC[1] = '<tr>' +
         '<td ><label id="denominador5">' + valores[8] + '</label></td>' +
         '<td ><label id="denominador6">' + valores[7] + '</label></td>' +
         '<td><input type="number" id="resDen3"></td>' +
         '</tr>';

    tablaD[0] = '<tr>' +
         '<td rowspan="2"><label class="p1">[</label></td>' +
         '<td rowspan="2"><label class="p1">(</label></td>' +
         '<td class="valores"><label id="numerador7">' + valores[6] + '</label></td>' +
         '<td rowspan="2"><label class="p1">)<sup class="exp">2</sup></label></td>' +
         '<td rowspan="2"><label class="p1">]<sup class="exp">3</sup></label></td>' +
         '<td rowspan="2"><label class="p1">=</label></td>' +
         '<td><input type="number" id="resNum4" class="respA"></td>' +
         '</tr>';
     tablaD[1] = '<tr>' +
         '<td ><label id="denominador7">' + valores[7] + '</label></td>' +
         '<td><input type="number" id="resDen4"></td>' +
         '</tr>'
    
    tablaE[0] = '<tr>' +
         '<td rowspan="2"><label class="p1">{</label></td>' +
         '<td rowspan="2"><label class="p1">[</label></td>' +
         '<td rowspan="2"><label class="p1">(</label></td>' +
         '<td class="valores"><label id="numerador8">' + valores[8] + '</label></td>' +
         '<td rowspan="2"><label class="p1">)<sup class="exp">2</sup></label></td>' +
         '<td rowspan="2"><label class="p1">]<sup class="exp">3</sup></label></td>' +
         '<td rowspan="2"><label class="p1">}<sup class="exp">-4</sup></label></td>' +
         '<td rowspan="2"><label class="p1">=</label></td>' +
         '<td rowspan="2"><label class="p1">(</label></td>' +
         '<td><input type="number" id="resNum5" class="respA"></td>' +
         '<td rowspan="2"><label class="p1">)</label></td>' +
         '<td><sup><input type="number" id="resExp2"></sup></td>'+

         '</tr>';
     tablaE[1] = '<tr>' +
         '<td ><label id="denominador8">' + valores[9] + '</label></td>' +
         '<td><input type="number" id="resDen5"></td>' +
         '</tr>'
    
     if (al == 1) {
         $("#tablaA").append(tablaA);
         $("#tablaB").append(tablaB);
         $("#tablaC").append(tablaC);
         $("#tablaE").append(tablaE);
         $("#tablaD").append(tablaD);
     }
     if(al == 2){
        $("#tablaA").append(tablaB);
         $("#tablaB").append(tablaD);
         $("#tablaE").append(tablaE);
         $("#tablaC").append(tablaC);
         $("#tablaD").append(tablaA);
     }
     if(al == 3){
        $("#tablaA").append(tablaD);
         $("#tablaE").append(tablaE);

         $("#tablaB").append(tablaA);
         $("#tablaC").append(tablaC);
         $("#tablaD").append(tablaB);
     }
 };

 function Cargar() {
     Inicio();
     location.reload();
 }
 $(document).ready(function() {
     Inicio();
     $("#Calificar").click(function() {
         var resultadosNum = [];
         var resultadosDen = [];

         var respuestasNum =[];
         var respuestasDen  =[];
         resultadosNum[1] = $("#resNum1").val();
         respuestasNum[1] = Math.pow($("#numerador1").text(),5);
         resultadosDen[1] = $("#resDen1").val();
         respuestasDen[1] = Math.pow($("#denominador1").text(),5);
         
         resultadosNum[2] = $("#resNum2").val();
         respuestasNum[2] = Math.pow($("#denominador4").text(),1);
         resultadosDen[2] = $("#resDen2").val();
         respuestasDen[2] = Math.pow($("#numerador4").text(),1);
         
         resultadosNum[3] = $("#resNum3").val();
         respuestasNum[3] = Math.pow($("#numerador6").text(),1);
         resultadosDen[3] = $("#resDen3").val();
         respuestasDen[3] = Math.pow($("#denominador6").text(),1);
         
         resultadosNum[4] = $("#resNum4").val(),1;
         respuestasNum[4] = Math.pow($("#numerador7").text(),5);
         resultadosDen[4] = $("#resDen4").val(),1;
         respuestasDen[4] = Math.pow($("#denominador7").text(),5);

         resultadosNum[5] = $("#resNum5").val();
         respuestasNum[5] = $("#denominador8").text();
         resultadosDen[5] = $("#resDen5").val();
         respuestasDen[5] = $("#denominador8").text();

         if ($("#resExp2").val() == "24") {
                 nota = nota + 1;
                 $('#resExp2').css("border", "4px solid green");
             } else {
                 $('#resExp2').css("border", "4px solid red");
             }
         if ($("#resExp1").val() == "5") {
                 nota = nota + 1;
                 $('#resExp1').css("border", "4px solid green");
             } else {
                 $('#resExp1').css("border", "4px solid red");
             }        
         
         
         var numerador = []
         var nota = 0;
         debugger;
         for (var i = 1; i <= 5; i++) {
             if (resultadosNum[i] == respuestasNum[i]) {
                 nota = nota + 1;
                 $('#resNum' + i).css("border", "4px solid green");
             } else {
                 $('#resNum' + i).css("border", "4px solid red");
             }
             if (resultadosDen[i] == respuestasDen[i]) {
                 nota = nota + 1;
                 $('#resDen' + i).css("border", "4px solid green");
             } else {
                 $('#resDen' + i).css("border", "4px solid red");
             }
         }

         var notaFinal = 0;
         notaFinal = (nota * 10);
         notaFinal = notaFinal / 12;
         notaFinal = notaFinal.toFixed(2);
         $("#txtNota").text(notaFinal + "/" + 10);
         $('#Calificar').attr('disabled', true);
         $('#Refrescar').attr('disabled', false);
     });
 });