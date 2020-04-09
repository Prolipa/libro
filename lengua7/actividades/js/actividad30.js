function resolverN30() {
    var texto1 = document.getElementById("txt1").value;
    var texto2 = document.getElementById("txt2").value;
    var resp1 = 0,
        resp2 = 0;

        if ((texto1 == "")||(texto2 == "")) {
            alert("Debes resolver la actividad");
             document.getElementById("txt1").focus();
        }else{
            if ((texto1 == "metalingüística") || (texto1 == "metalinguistica")) {
        resp1 = 5;
        document.getElementById("txt1").style.backgroundColor = "#6DFF6F";

    }else{
        document.getElementById("txt1").style.backgroundColor = "#F95858";
        document.getElementById("txt1").title = 'metalingüística';
    }


    if (texto2 == "expresiva") {
        resp2 = 5;
        document.getElementById("txt2").style.backgroundColor = "#6DFF6F";
    }else{
        document.getElementById("txt2").style.backgroundColor = "#F95858";
         document.getElementById("txt1").title = 'expresiva';
    }
    var total = parseInt(resp1) + parseInt(resp2);
    $('#txtNota').html(total.toFixed(2) + ' ');

    document.getElementById('bt_comprobar').disabled = true;
    document.getElementById('txt1').disabled = true;
    document.getElementById('txt2').disabled = true;

        }
    
    
    /*
        var nota1 = document.getElementById("nt1_1").value;
        var nota2 = document.getElementById("nt1_2").value;


      
        if ((nota1 == "") || (nota2 == "")) {
            alert("Debe ingresar las notas para poder evaluar");
            document.getElementById("nt1_1").focus();
        } else {
            if ((nota1 <= 5) && (nota2 <= 5)) {
                var total = parseInt(nota1) + parseInt(nota2);
                document.getElementById("nt1_1").style.backgroundColor = "#6DFF6F";
                document.getElementById("nt1_2").style.backgroundColor = "#6DFF6F";
                $('#txtNota').html(total.toFixed(2) + ' ');

                document.getElementById('bt_comprobar').disabled = true;
                document.getElementById('nt1_1').disabled = true;
                document.getElementById('nt1_2').disabled = true;
            } else {
                alert('La nota no debe exceder los 5 puntos');
                document.getElementById("nt1_1").style.backgroundColor = "#F95858";
                document.getElementById("nt1_2").style.backgroundColor = "#F95858";
                document.getElementById("nt1_1").focus();
            }
        }
    */

}