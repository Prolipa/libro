var correctas = {
    0: ['F', 'O', 'T', 'O'],
    1: ['F', 'I', 'L', 'A'],
    2: ['S', 'O', 'F', 'Á'],
    3: ['E', 'L', 'É', 'O', 'N'],
    4: ['E', 'L', 'E', 'F', 'A', 'N', 'T', 'E'],
    5: ['F', 'A', 'R', 'O'],
    6: ['F', 'U', 'N', 'D', 'A'],
    7: ['D', 'L', 'Í'],


}
var rescorrec2 = 0,
    rescorrec3 = 0,
    rescorrec4 = 0,
    rescorrec5 = 0,
    rescorrec6 = 0,
    rescorrec7 = 0,
    rescorrec8 = 0,
    rescorrec9 = 0,
    totales = 0;

function resolverLetras() {


    for (var i = 0; i <= 4; i++) {

        if ((correctas[0][i]) == ($('#F' + [i] + '').val())) {
            rescorrec2 = rescorrec2 + 1;
            $('#F' + [i] + '').addClass('correcto');
            $('#F' + [i] + '').prop("disabled", true);
        } else {
            $('#F' + [i] + '').addClass('incorrecto');
            $('#F' + [i] + '').prop("disabled", true);
        }

    }
    for (var i = 0; i <= 4; i++) {

        if ((correctas[1][i]) == ($('#I' + [i] + '').val())) {
            rescorrec3 = rescorrec3 + 1;
            $('#I' + [i] + '').addClass('correcto');
            $('#I' + [i] + '').prop("disabled", true);
        } else {
            $('#I' + [i] + '').addClass('incorrecto');
            $('#I' + [i] + '').prop("disabled", true);
        }

    }
    for (var i = 0; i <= 4; i++) {

        if ((correctas[2][i]) == ($('#S' + [i] + '').val())) {
            rescorrec4 = rescorrec4 + 1;
            $('#S' + [i] + '').addClass('correcto');
            $('#S' + [i] + '').prop("disabled", true);
        } else {
            $('#S' + [i] + '').addClass('incorrecto');
            $('#S' + [i] + '').prop("disabled", true);
        }
    }
    for (var i = 0; i <= 5; i++) {

        if ((correctas[3][i]) == ($('#E' + [i] + '').val())) {
            rescorrec5 = rescorrec5 + 1;
            $('#E' + [i] + '').addClass('correcto');
            $('#E' + [i] + '').prop("disabled", true);
        } else {
            $('#E' + [i] + '').addClass('incorrecto');
            $('#E' + [i] + '').prop("disabled", true);
        }

    }
    for (var i = 0; i <= 8; i++) {

        if ((correctas[4][i]) == ($('#T' + [i] + '').val())) {
            rescorrec6 = rescorrec6 + 1;
            $('#T' + [i] + '').addClass('correcto');
            $('#T' + [i] + '').prop("disabled", true);
        } else {
            $('#T' + [i] + '').addClass('incorrecto');
            $('#T' + [i] + '').prop("disabled", true);
        }

    }
    for (var i = 0; i <= 4; i++) {

        if ((correctas[5][i]) == ($('#G' + [i] + '').val())) {
            rescorrec7 = rescorrec7 + 1;
            $('#G' + [i] + '').addClass('correcto');
            $('#G' + [i] + '').prop("disabled", true);
        } else {
            $('#G' + [i] + '').addClass('incorrecto');
            $('#G' + [i] + '').prop("disabled", true);
        }

    }
    for (var i = 0; i <= 5; i++) {

        if ((correctas[6][i]) == ($('#U' + [i] + '').val())) {
            rescorrec8 = rescorrec8 + 1;
            $('#U' + [i] + '').addClass('correcto');
            $('#U' + [i] + '').prop("disabled", true);
        } else {
            $('#U' + [i] + '').addClass('incorrecto');
            $('#U' + [i] + '').prop("disabled", true);
        }

    }
    for (var i = 0; i <= 3; i++) {

        if ((correctas[7][i]) == ($('#D' + [i] + '').val())) {
            rescorrec9 = rescorrec9 + 1;
            $('#D' + [i] + '').addClass('correcto');
            $('#D' + [i] + '').prop("disabled", true);
        } else {
            $('#D' + [i] + '').addClass('incorrecto');
            $('#D' + [i] + '').prop("disabled", true);
        }

    }

    var subtotales = rescorrec2 + rescorrec3 + rescorrec4 + rescorrec5 + rescorrec6 + rescorrec7 + rescorrec8 + rescorrec9;
    var totales = (subtotales * 10) / 45;
    $('#txtNota').html(totales.toFixed(2) + ' ');
    document.getElementById('bt_comprobar').disabled = true;
    // body...
}

/*function resolverN1() {

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


}*/
