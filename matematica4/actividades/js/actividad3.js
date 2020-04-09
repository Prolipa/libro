 var titulos = "prueba";

 function Cargar() {
     $('#nota-informativa').slideUp('slow');
     $("#txtNota").text("");
     $("#Calificar").removeAttr("disabled");
     $('#Refrescar').attr('disabled', true);
     $("#contenido1").html('');
     $("#contenido2").html('');
     var preg = [];
     var cad = [];
     var cad1 = [];
     var cad2 = [];

     cad[0] = 'Trescientos veintiocho mil ochocientos cuarenta y cinco';
     cad[1] = 'Ciento nueve mil quince';
     cad[2] = 'Doscientos diecinueve mil ochocientos treinta';

     cad1[0] = 'Ciento nueve mil quince';
     cad1[1] = 'Doscientos diecinueve mil ochocientos treinta';
     cad1[2] = 'Trescientos veintiocho mil ochocientos cuarenta y cinco';

     cad2[0] = 'Doscientos diecinueve mil ochocientos treinta';
     cad2[1] = 'Ciento nueve mil quince';
     cad2[2] = 'Trescientos veintiocho mil ochocientos cuarenta y cinco';

     var alea = Math.round(Math.random() * (3 - 1) + 1);

     if (alea == 1) {
         for (var i = 0; i <= 2; i++) {
             preg[i] = '<tr><td style="padding: 5px;"><label id="Ini' + i + '">' + cad[i] + '</labe></td>' +
                 '<td style="padding: 5px;"><input type="number" id="res' + i + '" style="width: 60px;height: 20px;">' +
                 '</td></tr>';
         }
     }
     if (alea == 2) {
         for (var i = 0; i <= 2; i++) {
             preg[i] = '<tr><td style="padding: 5px;"><label id="Ini' + i + '">' + cad1[i] + '</labe></td>' +
                 '<td style="padding: 5px;"><input type="number" id="res' + i + '" style="width: 60px;height: 20px;">' +
                 '</td></tr>';
         }
     }
     if (alea == 3) {
         for (var i = 0; i <= 2; i++) {
             preg[i] = '<tr><td style="padding: 5px;"><label id="Ini' + i + '">' + cad2[i] + '</labe></td>' +
                 '<td style="padding: 5px;"><input type="number" id="res' + i + '" style="width: 60px;height: 20px;">' +
                 '</td></tr>';
         }
     }
     console.log(alea);
     $("#contenido1").append(preg)
 };

 $(document).ready(function() {
     Cargar();
     $("#Calificar").click(function() {
         nota = 0;
         var vA = [];
         debugger;
         for (var i = 0; i <= 3; i++) {
             if ($("#Ini"+i).text() == "Doscientos diecinueve mil ochocientos treinta") {
                 if ($("#res" + i).val() == "219830") {
                     nota = nota + 1;
                     $("#res" + i).css("background-color", "green");
                 } else {
                     $("#res" + i).css("background-color", "red");
                 }
             }
             if ($("#Ini"+i).text() == "Ciento nueve mil quince") {
                 if ($("#res" + i).val() == "109015") {
                     nota = nota + 1;
                     $("#res" + i).css("background-color", "green");
                 } else {
                     $("#res" + i).css("background-color", "red");
                 }
             }
             if ($("#Ini"+i).text() == "Trescientos veintiocho mil ochocientos cuarenta y cinco") {
                 if ($("#res" + i).val() == "328845") {
                     nota = nota + 1;
                     $("#res" + i).css("background-color", "green");
                 } else {
                     $("#res" + i).css("background-color", "red");
                 }
             }
         }
         var notaFinal = (nota * 10) / 3;
         notaFinal = notaFinal.toFixed(2)
         $("#txtNota").text(+notaFinal + "/10");
         $('#Calificar').attr('disabled', true);
         $('#Refrescar').attr('disabled', false);
     });
 });