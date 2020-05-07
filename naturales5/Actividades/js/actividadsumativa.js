 document.getElementById('nota1').addEventListener('keypress', () => {
     validNumero(0, 2, 1);
 });
 document.getElementById('nota1').addEventListener('keyup', () => {
     validMaxIngreso(document.getElementById('nota1'), 2)
 });
 document.getElementById('nota2').addEventListener('keypress', () => {
     validNumero(0, 1, 1);
 });
 document.getElementById('nota2').addEventListener('keyup', () => {
     validMaxIngreso(document.getElementById('nota2'), 1)
 });
 document.getElementById('nota3').addEventListener('keypress', () => {
     validNumero(0, 2, 1);
 });
 document.getElementById('nota3').addEventListener('keyup', () => {
     validMaxIngreso(document.getElementById('nota3'), 2)
 });
 document.getElementById('nota7').addEventListener('keypress', () => {
     validNumero(0, 1, 1);
 });
 document.getElementById('nota7').addEventListener('keyup', () => {
     validMaxIngreso(document.getElementById('nota7'), 1)
 });
 document.getElementById('nota8').addEventListener('keypress', () => {
     validNumero(0, 1, 1);
 });
 document.getElementById('nota8').addEventListener('keyup', () => {
     validMaxIngreso(document.getElementById('nota8'), 1)
 });

 function allowDrop(ev) {
     ev.preventDefault();
 }

 function drag(ev) {
     ev.dataTransfer.setData("Text", ev.target.id);
 }

 function drop(ev) {
     var data = ev.dataTransfer.getData("Text");
     ev.target.appendChild(document.getElementById(data));
     ev.preventDefault();
 }

 function pregunta4() {
     var nt1 = 0,
         nt2 = 0;
     var div1 = $('#div1').text();
     var div2 = $('#div2').text();
     if (div1 == "Él") {
         $('#div1').css("background", "#00e600");
         nt1 = 0.5;
     } else {
         $('#div1').css("background", "#ff6666");
     }
     if (div2 == "Ellos") {
         $('#div2').css("background", "#00e600");
         nt2 = 0.5;
     } else {
         $('#div2').css("background", "#ff6666");
     }
     var total = parseFloat(nt1) + parseFloat(nt2);
     $('#nota4').val(parseFloat(total).toFixed(2));

 }
 /*/var random2 = [
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
 }*/

 function pregunta5() {
     var respact2 = ['colibrí', 'árbol', 'pájaro', ];
     var cont = 0;
     for (var i = 0; i < 3; i++) {
         var res = $('#act5num' + [i] + '').val().toLowerCase();
         if (respact2[i] == res) {
             cont = cont + 1;
             $('#act5num' + [i] + '').css("background", "#00e600");
         } else {
             $('#act5num' + [i] + '').css("background", "#ff6666");
         }

     }
     var total = (cont * 1) / 3;
     $('#nota5').val(parseFloat(total).toFixed(2));


 }
 ////////////////pregunta6/////////////////
 var random6 = [
     [' <td><b style="color: #005ca4"><li></li></b></td> <td><span class="1 enc1">Enumera elementos que van en las oraciones.</span></td>'],
     [' <td><b style="color: #005ca4"><li></li></b></td> <td><span class="1 enc2">Indica el diálogo entre dos o más personas.</span></td>'],
     ['<td><b style="color: #005ca4"><li></li></b></td> <td><span class="1 enc3">Línea donde inician todas las oraciones.</span></td>'],
 ]
 var act06Txt = document.getElementsByClassName('act6class');

 random6.sort(f_randomico);
 for (i = 0; i < act06Txt.length; i++) {
     $('#' + act06Txt[i].id).html(random6[i]);
 }
 $('.1').click(function() {
     switch ($(this).attr('class')) {
         case '1 enc1':
             $('.enc1').addClass('pintar');
             $('.enc2').removeClass('pintar');
             $('.enc3').removeClass('pintar');

             break;
         case '1 enc2':
             $('.enc2').addClass('pintar');
             $('.enc1').removeClass('pintar');
             $('.enc3').removeClass('pintar');
             break;
         case '1 enc3':
             $('.enc3').addClass('pintar');
             $('.enc1').removeClass('pintar');
             $('.enc2').removeClass('pintar');

             break;



     }
 });

 function pregunta6() {
     var nt1 = 0,
         nt2 = 0,
         nt3 = 0;
     if ($('.enc2').hasClass('pintar') == true) {
         nt1 = 1;

         $('.enc2').addClass('correcto');


     } else if ($('.enc1').hasClass('pintar') == true) {
         $('.enc1').addClass('incorrecto');


     } else if ($('.enc3').hasClass('pintar') == true) {
         $('.enc3').addClass('incorrecto');
     }

     $('.1').off('click');

     $('#nota6').val(parseFloat(nt1).toFixed(2));
 }

 function NotaFinal() {
     var nota1 = document.getElementById('nota1').value;
     var nota2 = document.getElementById('nota2').value;
     var nota3 = document.getElementById('nota3').value;
     var nota4 = document.getElementById('nota4').value;
     var nota5 = document.getElementById('nota5').value;
     var nota6 = document.getElementById('nota6').value;
     var nota7 = document.getElementById('nota7').value;
     var nota8 = document.getElementById('nota8').value;
     if ((nota1 == "") || (nota2 == "") || (nota3 == "") || (nota7 == "") || (nota8 == "")) {
         alert("Calificar la pregunta 1, 2, 3, 7 ó 8");
     } else {
         pregunta4();
         pregunta5();
         pregunta6();
         var nota1 = document.getElementById('nota1').value;
         var nota2 = document.getElementById('nota2').value;
         var nota3 = document.getElementById('nota3').value;
         var nota4 = document.getElementById('nota4').value;
         var nota5 = document.getElementById('nota5').value;
         var nota6 = document.getElementById('nota6').value;
         var nota7 = document.getElementById('nota7').value;
         var nota8 = document.getElementById('nota8').value;
         var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6) + parseFloat(nota7) + parseFloat(nota8);
         $('#txtNota').html(parseFloat(total).toFixed(2));
         document.getElementById('bt_comprobar').disabled = true;
         $('input').attr("disabled", true);
         $('#txtAlumno').attr("disabled", false);
     }


 }
