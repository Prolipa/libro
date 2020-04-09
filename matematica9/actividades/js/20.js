 var numero = [];
 var titulos = "aplico";

 function Inicio() {
     $('#nota-informativa').slideUp('slow');
     $("#Calificar").removeAttr("disabled");
     $('#Refrescar').attr('disabled', true);
     var tabla1 = [];
     var tabla2 = [];

     tabla1[0] = '<tr>' +
         '<td><label>16/2</label></td>' +
         '<td><input type="text" id="rt1"></td>' +
         '<td><label>3/2</label></td>' +
         '<td><label>13/2</label></td>' +
         '</tr>'
     tabla1[1] = '<tr>' +
         '<td><label>5/2</label></td>' +
         '<td><label>11/7</label></td>' +
         '<td><label>10/2</label></td>' +
         '<td><input type="text" id="rt2"></td>' +
         '</tr>'
     tabla1[2] = '<tr>' +
         '<td><input type="text" id="rt3"></td>' +
         '<td><label>7/2</label></td>' +
         '<td><input type="text" id="rt4"></td>' +
         '<td><label>12/2</label></td>' +
         '</tr>'
     tabla1[3] = '<tr>' +
         '<td><input type="text" id="rt5"></td>' +
         '<td><input type="text" id="rt6"></td>' +
         '<td><label>15/2</label></td>' +
         '<td><label>1/2</label></td>' +
         '</tr>'

     tabla2[0] = '<tr>' +
         '<td><label>16/2</label></td>' +
         '<td><label>3/2</label></td>' +
         '<td><input type="text" id="rt21"></td>' +
         '<td><label>13/2</label></td>' +
         '</tr>'
     tabla2[1] = '<tr>' +
         '<td><label>5/2</label></td>' +
         '<td><input type="text" id="rt22"></td>' +
         '<td><label>11/7</label></td>' +
         '<td><label>10/2</label></td>' +
         '</tr>'
     tabla2[2] = '<tr>' +
         '<td><input type="text" id="rt23"></td>' +
         '<td><label>7/2</label></td>' +
         '<td><label>7/2</label></td>' +
         '<td><label>12/2</label></td>' +
         '</tr>'
     tabla2[3] = '<tr>' +
         '<td><label>15/2</label></td>' +
         '<td><input type="text" id="rt24"></td>' +
         '<td><label>1/2</label></td>' +
         '<td><input type="text" id="rt25"></td>' +
         '</tr>'
     tabla2[4] = '<tr>' +
         '<td><label>15/2</label></td>' +
         '<td><label>1/2</label></td>' +
         '<td><input type="text" id="rt26"></td>' +
         '<td><label>1/2</label></td>' +
         '</tr>'
     $("#tabla1").append(tabla1);
     $("#tabla2").append(tabla2);
 };

 function Cargar() {
     Inicio();
     location.reload();
 }
 $(document).ready(function() {
     Inicio();
     $("#Calificar").click(function() {
         var rest1 = ["","2/2", "8/2", "9/2", "6/2", "4/2", "14/2"];
         var rest2 = ["","1/5", "7/5", "4/3", "12/5", "3/5", "25/5"];
         var nota = 0;
         debugger;
         for (var i = 0; i <= 6; i++) {
             if ($("#rt" + i).val() == rest1[i]) {
                 nota = nota + 1;
                 $('#rt' + i).css("border", "4px solid green");
             } else {
                 $('#rt' + i).css("border", "4px solid red");
             }
         }
         for (var i = 0; i <= 6; i++) {
             if ($("#rt2" + i).val() == rest2[i]) {
                 nota = nota + 1;
                 $('#rt2' + i).css("border", "4px solid green");
             } else {
                 $('#rt2' + i).css("border", "4px solid red");
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