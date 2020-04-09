function resolverN10() {

    var nota1 = document.getElementById("nt10_1").value;
    var nota2 = document.getElementById("nt10_2").value;
  
  if ((nota1 == "") || (nota2 == "")) {
        alert("Debe ingresar las notas para poder evaluar");
        document.getElementById("nt10_1").focus();
    } else {
        if ((nota1 <= 5) && (nota2 <= 5)) {
            var total = parseInt(nota1) + parseInt(nota2);
            document.getElementById("nt10_1").style.backgroundColor = "#6DFF6F";
            document.getElementById("nt10_2").style.backgroundColor = "#6DFF6F";
            $('#txtNota').html(total.toFixed(2) + ' ');

            document.getElementById('bt_comprobar').disabled = true;
            document.getElementById('nt10_1').disabled = true;
            document.getElementById('nt10_2').disabled = true;
        } else {
            alert('La nota no debe exceder los 5 puntos');
            document.getElementById("nt10_1").style.backgroundColor = "#F95858";
            document.getElementById("nt10_2").style.backgroundColor = "#F95858";
            document.getElementById("nt10_1").focus();
        }
    }

    /*if ((nota1 >= 1) && (nota1 <= 5)) {
        document.getElementById("nt10_1").style.backgroundColor = "#6DFF6F";
    } else {
        document.getElementById("nt10_1").style.backgroundColor = "#F95858";
        alert('Todas las preguntas se deben evaluar y la nota no debe exceder los 5 puntos');
        nota1 = 0;
    }

    if ((nota2 >= 1) && (nota2 <= 5)) {
        document.getElementById("nt10_2").style.backgroundColor = "#6DFF6F";
    } else {
        document.getElementById("nt10_2").style.backgroundColor = "#F95858";
        alert('Todas las preguntas se deben evaluar y la nota no debe exceder los 5 puntos');
        nota2 = 0;
    }


    if ((nota1 > 5) || (nota2 > 5)) {
        var total = 0;
        $('#txtNota').html(total.toFixed(2) + ' ');
    } else {
        var resp = parseInt(nota1) + parseInt(nota2);
        
        $('#txtNota').html(resp.toFixed(2) + ' ');

        document.getElementById('bt_comprobar').disabled = true;
        document.getElementById('nt10_1').disabled = true;
        document.getElementById('nt10_2').disabled = true;
        

    }*/

}