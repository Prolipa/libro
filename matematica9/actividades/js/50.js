 var numero = [];
 var titulos = "preparo";

 function Inicio() {
     $('#nota-informativa').slideUp('slow');
     $("#Calificar").removeAttr("disabled");
     $('#Refrescar').attr('disabled', true);
     var tabla1 = [];
     var tabla2 = [];

     tabla1[0] = '<tr>' +
         '<td><label>5/8</label></td>' +
         '<td><input type="text" id="rA1"></td>' +
         '<td><input type="text" id="rA2"></td>' +
         '<td><input type="text" id="rA3"></td>' +
         '<td><input type="text" id="rA4"></td>' +
         '</tr>'
     tabla1[1] = '<tr>' +
         '<td><label>3/5</label></td>' +
         '<td><input type="text" id="rB1"></td>' +
         '<td><input type="text" id="rB2"></td>' +
         '<td><input type="text" id="rB3"></td>' +
         '<td><input type="text" id="rB4"></td>' +
         '</tr>'
     tabla1[2] = '<tr>' +
         '<td><label>1/5</label></td>' +
         '<td><input type="text" id="rC1"></td>' +
         '<td><input type="text" id="rC2"></td>' +
         '<td><input type="text" id="rC3"></td>' +
         '<td><input type="text" id="rC4"></td>' +
         '</tr>'
     tabla1[3] = '<tr>'+
         '<td><label>2/7</label></td>' +
         '<td><input type="text" id="rD1"></td>' +
         '<td><input type="text" id="rD2"></td>' +
         '<td><input type="text" id="rD3"></td>' +
         '<td><input type="text" id="rD4"></td>' +
         '</tr>'
     $("#tabla1").append(tabla1);
 };

 function Cargar() {
     Inicio();
     location.reload();
 }
 $(document).ready(function() {
     Inicio();
     $("#Calificar").click(function() {
         var rFila1 = ["","0","7/24","-1/8","5/72"];
         var rFila2 = ["","-1/40","4/15","-3/20","2/45"];
         var rFila3 = ["","-17/40","-2/15","-11/20","-16/45"];
         var rFila4 = ["","-19/56","-1/21","-13/28","-17/63"];         
         var nota = 0;
         debugger;
         for (var i = 0; i <= 4; i++) {
             if ($("#rA" + i).val() == rFila1[i]) {
                 nota = nota + 1;
                 $('#rA' + i).css("border", "4px solid green");
             } else {
                 $('#rA' + i).css("border", "4px solid red");
             }
             if ($("#rB" + i).val() == rFila2[i]) {
                 nota = nota + 1;
                 $('#rB' + i).css("border", "4px solid green");
             } else {
                 $('#rB' + i).css("border", "4px solid red");
             }
             if ($("#rC" + i).val() == rFila3[i]) {
                 nota = nota + 1;
                 $('#rC' + i).css("border", "4px solid green");
             } else {
                 $('#rC' + i).css("border", "4px solid red");
             }
             if ($("#rD" + i).val() == rFila4[i]) {
                 nota = nota + 1;
                 $('#rD' + i).css("border", "4px solid green");
             } else {
                 $('#rD' + i).css("border", "4px solid red");
             }
         }
         var notaFinal = 0;
         notaFinal = (nota * 10);
         notaFinal = notaFinal / 16;
         notaFinal = notaFinal.toFixed(2);
         $("#txtNota").text(notaFinal + "/" + 10);
         $('#Calificar').attr('disabled', true);
         $('#Refrescar').attr('disabled', false);
     });
 });