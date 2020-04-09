 $("#txtNota").html("0");


 function resolverN32() {
     var nota1 = document.getElementById("nt32_1").value;
     var nota2 = document.getElementById("nt32_2").value;
     var nota3 = document.getElementById("nt32_3").value;

     if ((nota1 >= 1) && (nota1 <= 10)) {
         document.getElementById("nt32_1").style.backgroundColor = "#6DFF6F";
     } else {
         document.getElementById("nt32_1").style.backgroundColor = "#F95858";
         alert('Todas las preguntas se deben evaluar y la nota no debe exceder los 10 puntos');
     }
     if ((nota2 >= 1) && (nota2 <= 10)) {
         document.getElementById("nt32_2").style.backgroundColor = "#6DFF6F";
     } else {
         document.getElementById("nt32_2").style.backgroundColor = "#F95858";
         alert('Todas las preguntas se deben evaluar y la nota no debe exceder los 10 puntos');
     }

     if ((nota3 >= 1) && (nota3 <= 10)) {
         document.getElementById("nt32_3").style.backgroundColor = "#6DFF6F";
     } else {
         document.getElementById("nt32_3").style.backgroundColor = "#F95858";
         alert('Todas las preguntas se deben evaluar y la nota no debe exceder los 10 puntos');
     }



     if ((nota1 > 10) || (nota2 > 10) || (nota3 > 10)) {
         total = 0;
         $('#txtNota').html(total.toFixed(2) + ' ');
     } else {
         var resp = parseInt(nota1) + parseInt(nota2) + parseInt(nota3);
         var total = resp / 3;
         $('#txtNota').html(total.toFixed(2) + ' ');
         document.getElementById('nt32_1').disabled = true;
         document.getElementById('nt32_2').disabled = true;
         document.getElementById('nt32_3').disabled = true;
         document.getElementById('bt_comprobar').disabled = true;
     }
 }