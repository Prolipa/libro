
document.getElementById('nt23_2').addEventListener('keypress', () => {
    validNumero(0, 3, 1);
});
document.getElementById('nt23_2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nt23_2'), 3)
});
document.getElementById('nt23_3').addEventListener('keypress', () => {
    validNumero(0, 4, 1);
});
document.getElementById('nt23_3').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nt23_3'), 3)
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
var resp = 0;
$('.enc').click(function() {

    if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')
    } else {
        $(this).addClass('encierra')
    }
    if ($("#R1").hasClass("encierra")) {
        $("#R2").removeClass("encierra")
        $("#R3").removeClass("encierra")


    } else if ($("#R2").hasClass("encierra")) {
        $("#R1").removeClass("encierra")
        $("#R3").removeClass("encierra")


    } else if ($("#R3").hasClass("encierra")) {
        $("#R1").removeClass("encierra")
        $("#R2").removeClass("encierra")

        resp = 4;
    }
});

function resolverN23() {
    $("#nt23_1").val(parseFloat(resp));

    var nota1 = document.getElementById("nt23_1").value;
    var nota2 = document.getElementById("nt23_2").value;
    var nota3 = document.getElementById("nt23_3").value;
    if ((nota1 == "") || (nota2 == "") || (nota3 == "")) {
        alert("Debe ingresar las notas para poder evaluar");
        document.getElementById("nt23_2").focus();
    } else {
        if ((nota1 <= 10) && (nota2 <= 10) && (nota3 <= 10)) {
            var total = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3));
            document.getElementById("nt23_1").style.backgroundColor = "#6DFF6F";
            document.getElementById("nt23_2").style.backgroundColor = "#6DFF6F";
            document.getElementById("nt23_3").style.backgroundColor = "#6DFF6F";
            $('#txtNota').html(total.toFixed(2) + ' ');

            document.getElementById('bt_comprobar').disabled = true;
            document.getElementById('nt23_1').disabled = true;
            document.getElementById('nt23_2').disabled = true;
            document.getElementById('nt23_3').disabled = true;
            if($("#R3").hasClass("encierra")){
            document.getElementById("R3").style.backgroundColor = "#6DFF6F";


            }else if ($("#R2").hasClass("encierra")) {
            	 document.getElementById("R2").style.backgroundColor = "#F95858";
            }else if ($("#R1").hasClass("encierra")) {
            	document.getElementById("R1").style.backgroundColor = "#F95858";
            }

        } else {
            alert('La nota no debe exceder los 10 puntos');
            document.getElementById("nt23_1").style.backgroundColor = "#F95858";
            document.getElementById("nt23_2").style.backgroundColor = "#F95858";
            document.getElementById("nt23_3").style.backgroundColor = "#F95858";
            document.getElementById("nt23_2").focus();
        }
    }


}
