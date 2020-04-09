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

     var valores = [];
     valores[0] = Math.round(Math.random() * (3 - 1) + 1);

     tablaA[0] = '<tr>' +
         '<td rowspan="4"><label class="p2"></label></td>' +
         '<td class="valores"><label id="numerador1"> 1 </label></td>' +
         '<td ><label > + </label></td>' +
         '<td class="valores"><label id="numerador2"> 3 </label></td>' +
         '<td rowspan="4"><label class="p2"></label></td>' +
         '<td rowspan="4"><label class="p1">=</label></td>' +

         '</tr>';
     tablaA[1] = '<tr>' +
         '<td class="valores"><label id="numerador1"> 2 </label></td>' +
         '<td class="valores"> <label >  </label></td>' +
         '<td class="valores"><label id="numerador2"> 4 </label></td>' +
         '<td><input type="number" id="resNum1" class="respA"></td>' +
         '</tr>'
     tablaA[2] = '<tr>' +
         '<td class="valores"><label id="numerador1"> 6 </label></td>' +
         '<td> <label > - </label></td>' +
         '<td class="p3"><label id="numerador2">3</label></td>' +
         '<td><input type="number" id="resNum2"></td>' +
         '</tr>'
     tablaA[3] = '<tr>' +
         '<td><label id="numerador1"> 5 </label></td>' +
         '<td><label> </label></td>' +
         '<td><label id="numerador2"></label></td>' +
         '</tr>'

     tablaB[0] = '<tr>' +
         '<td rowspan="2"><label class="p1">(</label></td>' +
         '<td class="p3"><label id="numerador2">4</label></td>' +
         '<td rowspan="2"><label class="p3"> + </label></td>' +
         '<td class="valores"><label id="numerador2">1</label></td>' +
         '<td rowspan="2"><label class="p1">)</label></td>' +
         '<td rowspan="2"><label class="p1">-</label></td>' +
         '<td rowspan="2"><label class="p1">(</label></td>' +
         '<td class="p3"><label id="numerador2">1</label></td>' +
         '<td rowspan="2"><label class="p3"> + </label></td>' +
         '<td class="valores"><label id="numerador2">2</label></td>' +
         '<td rowspan="2"><label class="p1">)</label></td>' +
         '<td rowspan="2"><label class="p1">=</label></td>' +
         '<td class="p3"><input type="number" id="resNum3"></td>' +
         '</tr>';
     tablaB[1] = '<tr>' +
         '<td ><label id="denominador2"></label></td>' +
         '<td ><label id="denominador2">2</label></td>' +
         '<td ><label id="denominador2"></label></td>' +
         '<td ><label id="denominador2">4</label></td>' +
         '<td></td>' +
         '</tr>';


     tablaC[0] = '<tr>' +
         '<td rowspan="2"><label class="p3">5</label></td>' +
         '<td rowspan="2"><label class="p3">÷</label></td>' +
         '<td rowspan="2"><label class="p1">(</label></td>' +
         '<td class="valores"><label id="numerador2">6</label></td>' +
         '<td rowspan="2"><label class="p3"> + </label></td>' +
         '<td class="valores"><label id="numerador2">1</label></td>' +
         '<td rowspan="2"><label class="p1">)</label></td>' +
         '<td rowspan="2"><label class="p1">=</label></td>' +
         '<td><input type="number" id="resNum4" class="respA"></td>' +
         '</tr>';
     tablaC[1] = '<tr>' +

         '<td ><label id="denominador2">5</label></td>' +
         '<td ><label id="denominador2">5</label></td>' +
         '<td><input type="number" id="resNum5"></td>' +
         '</tr>';

     tablaD[0] = '<tr>' +
         '<td rowspan="2"><label class="p1">(</label></td>' +
         '<td class="valores"><label id="numerador2">4</label></td>' +
         '<td rowspan="2"><label class="p3"> - </label></td>' +
         '<td class="p3"><label id="numerador2">1</label></td>' +
         '<td rowspan="2"><label class="p1">)</label></td>' +
         '<td rowspan="2"><label class="p1">x</label></td>' +
         '<td rowspan="2"><label class="p1">(</label></td>' +
         '<td class="valores"><label id="numerador2">2</label></td>' +
         '<td rowspan="2"><label class="p3"> - </label></td>' +
         '<td class="valores"><label id="numerador2">3</label></td>' +
         '<td rowspan="2"><label class="p1">)</label></td>' +
         '<td rowspan="2"><label class="p1">=</label></td>' +
         '<td><input type="number" id="resNum6" class="respA"></td>' +
         '</tr>';
     tablaD[1] = '<tr>' +
         '<td ><label id="denominador2">2</label></td>' +
         '<td ></td>' +
         '<td ><label id="denominador2">6</label></td>' +
         '<td ><label id="denominador2">2</label></td>' +
         '<td><input type="number" id="resNum7"></td>' +
         '</tr>';
     if (valores[0] == 1) {
         $("#tablaA").append(tablaA);
         $("#tablaB").append(tablaB);
         $("#tablaC").append(tablaC);
         $("#tablaD").append(tablaD);
     }
     if(valores[0] == 2){
        $("#tablaA").append(tablaB);
         $("#tablaB").append(tablaD);
         $("#tablaC").append(tablaC);
         $("#tablaD").append(tablaA);
     }
     if(valores[0] == 3){
        $("#tablaA").append(tablaD);
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
         var resultados = ["", "-25", "36", "3", "25", "7", "-7", "6"];
         var numerador = []
         var nota = 0;
         debugger;
         for (var i = 1; i <= 7; i++) {
             numerador[i] = $("#resNum" + i).val();
             if (numerador[i] == resultados[i]) {
                 nota = nota + 1;
                 $('#resNum' + i).css("border", "4px solid green");
             } else {
                 $('#resNum' + i).css("border", "4px solid red");
             }
         }

         var notaFinal = 0;
         notaFinal = (nota * 10);
         notaFinal = notaFinal / 7;
         notaFinal = notaFinal.toFixed(2);
         $("#txtNota").text(notaFinal + "/" + 10);
         $('#Calificar').attr('disabled', true);
         $('#Refrescar').attr('disabled', false);
     });
 });