document.getElementById('nt1_2').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nt1_2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nt1_2'), 2.5)
});
document.getElementById('nt1_3').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nt1_3').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nt1_3'), 2.5)
});

function validNumero(num1, num2, allowFloat = 0) {
    if (allowFloat == 1) {
        var regex = new RegExp("^.|[" + num1 + "-" + num2 + "]+$");
    } else {
        var regex = new RegExp("^[" + num1 + "-" + num2 + "]+$");
    }

    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
        event.preventDefault();
        return false;
    }
}

function validMaxIngreso(elemento, num) {
    if (elemento.value > num) {
        alert('La calificación no puede ser mayor a ' + num)
        elemento.value = "";
        return 1;
    } else {

        return 0;

    }
}
function verificarLetras() {
    var txt1 = document.getElementById('txt1').value;
    var txt2 = document.getElementById('txt2').value;
    var resp1 = 0, resp2 = 0, total = 0;

    if ((txt1 == "") || (txt2 == "")) {
        alert("Debes completar los campos vacios");
        document.getElementById("txt1").focus();
    } else {
        if (txt1 == "El libro comprado en esta librería") {
            document.getElementById("txt1").style.backgroundColor = "#6DFF6F";
            resp1 = 2.5;

        } else {
            document.getElementById("txt1").style.backgroundColor = "#F95858";

        }
        if (txt2 == "tiene muchas imágenes.") {
            document.getElementById("txt2").style.backgroundColor = "#6DFF6F";
            resp2 = 2.5;
        } else {
            document.getElementById("txt2").style.backgroundColor = "#F95858";

        }
        total = parseFloat(resp1) + parseFloat(resp2);
        $("#nt1_1").val(parseFloat(total));
    //document.getElementById('nt1_1').disabled = true;


    }
}

function resolverN31() {
	verificarLetras();
    var nota1 = document.getElementById("nt1_1").value;
    var nota2 = document.getElementById("nt1_2").value;
    var nota3 = document.getElementById("nt1_3").value;



    if ((nota1 == "") || (nota2 == "") || (nota3 == "")) {
        alert("Debe ingresar las notas para poder evaluar");
        document.getElementById("nt1_2").focus();
    } else {
        if ((nota1 <= 10) && (nota2 <= 10) && (nota3 <= 10)) {
            var total = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota2));
            document.getElementById("nt1_1").style.backgroundColor = "#6DFF6F";
            document.getElementById("nt1_2").style.backgroundColor = "#6DFF6F";
             document.getElementById("nt1_3").style.backgroundColor = "#6DFF6F";
            $('#txtNota').html(total.toFixed(2) + ' ');

            document.getElementById('bt_comprobar').disabled = true;
            document.getElementById('nt1_1').disabled = true;
            document.getElementById('nt1_2').disabled = true;
            document.getElementById('txt1').disabled = true;
            document.getElementById('txt2').disabled = true;
        } else {
            alert('La nota no debe exceder los 10 puntos');
            document.getElementById("nt1_2").style.backgroundColor = "#F95858";
            document.getElementById("nt1_3").style.backgroundColor = "#F95858";
            document.getElementById("nt1_2").focus();
            $('#nt1_2').val('');
            $('#nt1_3').val('');
        }
    }


}
