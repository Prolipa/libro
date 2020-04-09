 document.getElementById('nota1').addEventListener('keypress', () => {
     validNumero(0, 5, 1);
 });
 document.getElementById('nota1').addEventListener('keyup', () => {
     validMaxIngreso(document.getElementById('nota1'), 5)
 });
 var random2 = [
     [' <td><input id="act2num0" class="inputfraccciones soloNumeros sinEspacios"></input></td> <td>Preparación psicológica</td>'],
     ['<td><input id="act2num1" class="inputfraccciones soloNumeros sinEspacios"></input></td> <td>Conocimiento del tema</td>'],
     [' <td><input id="act2num2" class="inputfraccciones soloNumeros sinEspacios"></input></td> <td>Preparación del material</td>'],
     [' <td><input id="act2num3" class="inputfraccciones soloNumeros sinEspacios"></input></td> <td>Planificación de la exposición oral</td>'],
     ['<td><input id="act2num4" class="inputfraccciones soloNumeros sinEspacios"></input></td> <td>Presentación de la exposición</td>'],
 ];
 var act02Txt = document.getElementsByClassName('act2class');

 random2.sort(f_randomico);
 for (i = 0; i < act02Txt.length; i++) {
     $('#' + act02Txt[i].id).html(random2[i]);
 }

 function pregunta2() {
     var respact2 = ['4', '3', '2', '1', '5', ];
     var cont = 0;
     for (var i = 0; i < 5; i++) {
         var res = $('#act2num' + [i] + '').val().toLowerCase();
         if (respact2[i] == res) {
             cont = cont + 1;
             $('#act2num' + [i] + '').css("background", "#00e600");
         } else {
             $('#act2num' + [i] + '').css("background", "#ff6666");
         }

     }
     var total = (cont * 5) / 5;
     $('#nota2').val(parseFloat(total).toFixed(2));


 }

 function NotaFinal() {

     var nota1 = document.getElementById('nota1').value;
     var nota2 = document.getElementById('nota2').value;



     if (nota1 == "") {
         alert("Calificar la pregunta 1")
     } else {
         pregunta2();
         var nota1 = document.getElementById('nota1').value;
         var nota2 = document.getElementById('nota2').value;
         var total = parseFloat(nota1) + parseFloat(nota2);
         $('#txtNota').html(parseFloat(total).toFixed(2));
         document.getElementById('bt_comprobar').disabled = true;
         $('input').attr("disabled", true);
         $('#txtAlumno').attr("disabled", false);



     }
 }
