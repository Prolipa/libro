function resolverN46() {

    var nota1 = document.getElementById("nt46_1").value;
    var nota2 = document.getElementById("nt46_2").value;


  
    if ((nota1 == "") || (nota2 == "")) {
        alert("Debe ingresar las notas para poder evaluar");
        document.getElementById("nt46_1").focus();
    } else {
        if ((nota1 <= 5) && (nota2 <= 5)) {
            var total = parseInt(nota1) + parseInt(nota2);
            document.getElementById("nt46_1").style.backgroundColor = "#6DFF6F";
            document.getElementById("nt46_2").style.backgroundColor = "#6DFF6F";
            $('#txtNota').html(total.toFixed(2) + ' ');

            document.getElementById('bt_comprobar').disabled = true;
            document.getElementById('nt46_1').disabled = true;
            document.getElementById('nt46_2').disabled = true;
        } else {
            alert('La nota no debe exceder los 5 puntos');
            document.getElementById("nt46_1").style.backgroundColor = "#F95858";
            document.getElementById("nt46_2").style.backgroundColor = "#F95858";
            document.getElementById("nt46_1").focus();
        }
    }


}