document.getElementById('nota1').addEventListener('keypress', () => {
    validNumero(0, 1.5, 1);
});
document.getElementById('nota1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1'), 1.5)
});
document.getElementById('nota2').addEventListener('keypress', () => {
    validNumero(0, 0.5, 1);
});
document.getElementById('nota2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota2'), 0.5)
});
document.getElementById('nota3').addEventListener('keypress', () => {
    validNumero(0, 0.5, 1);
});
document.getElementById('nota3').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota3'), 0.5)
});
document.getElementById('nota4').addEventListener('keypress', () => {
    validNumero(0, 0.5, 1);
});
document.getElementById('nota4').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota4'), 0.5)
});
document.getElementById('nota5').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota5').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota5'), 2)
});

document.getElementById('nota6').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota6').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota6'), 1)
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

document.getElementById('nota9').addEventListener('keypress', () => {
    validNumero(0, 0.5, 1);
});
document.getElementById('nota9').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota9'), 0.5)
});

document.getElementById('nota11').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota11').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota11'), 1)
});

function pregunta10() {
    var contador = 0;
    var act10num1 = document.getElementById('act10num1').value;
    if (act10num1 == "Estado") {
        contador = contador + 0.5;
        $('#act10num1').css("background", "#00e600");
    } else {
        $('#act10num1').css("background", "#ff6666");
    }
    //contador
    $('#nota10').val(parseFloat(contador).toFixed(2));
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
    var nota9 = document.getElementById('nota9').value;
    var nota10 = document.getElementById('nota10').value;
    var nota11 = document.getElementById('nota11').value;
    if ((nota1 == "") || (nota2 == "") || (nota3 == "") || (nota4 == "") || (nota5 == "") || (nota6 == "") || (nota7 == "") || (nota8 == "") || (nota9 == "") || (nota11 == "")) {
        alert("Debe ingresar la calificación de la pregunta 1, 2, 3, 4, 5, 6, 7, 8, 9 u 11.")
    } else {
        pregunta10();
        var nota1 = document.getElementById('nota1').value;
        var nota2 = document.getElementById('nota2').value;
        var nota3 = document.getElementById('nota3').value;
        var nota4 = document.getElementById('nota4').value;
        var nota5 = document.getElementById('nota5').value;
        var nota6 = document.getElementById('nota6').value;
        var nota7 = document.getElementById('nota7').value;
        var nota8 = document.getElementById('nota8').value;
        var nota9 = document.getElementById('nota9').value;
        var nota10 = document.getElementById('nota10').value;
        var nota11 = document.getElementById('nota11').value;

        var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6) + parseFloat(nota7) + parseFloat(nota8) + parseFloat(nota9) + parseFloat(nota10) + parseFloat(nota11);
        $('#txtNota').html(parseFloat(total).toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('textarea').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
    }
}