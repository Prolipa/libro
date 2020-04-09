var titulos = 'aplico';

document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 3, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 3);
});
document.getElementById("pre3a").addEventListener("keypress", () => {
    validNumero(0, 3, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre3a"), 3);
});


function pregunta2() {
    var respact2 = ['Suspenso', 'Temor', 'Tensión', 'Sorpresa'];
    var cont = 0;
    for (var i = 0; i < 4; i++) {
        var res = $('#div' + [i] + '').text();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#div' + [i] + '').css("background", "#00e600");
        } else {
            $('#div' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 4) / 4;
    $('#pre2a').val(parseFloat(total).toFixed(2));
}


function total() {
    var pre1a = document.getElementById('pre1a').value;
    var pre2a = document.getElementById('pre2a').value;
    var pre3a = document.getElementById('pre3a').value;
    if (pre1a == "") {
        alert("Calificar Pregunta 1");
    } else {
        var pre1a = document.getElementById('pre1a').value;
        var pre2a = document.getElementById('pre2a').value;
        var pre3a = document.getElementById('pre3a').value;
        if (pre3a == "") {
            alert("Calificar Pregunta 3");
        } else {
            pregunta2();
            var pre1a = document.getElementById('pre1a').value;
            var pre2a = document.getElementById('pre2a').value;
            var pre3a = document.getElementById('pre3a').value;

            var total = parseFloat(pre1a) + parseFloat(pre2a) + parseFloat(pre3a);

            $('#txtNota').html(parseFloat(total).toFixed(2));
            document.getElementById('bt_comprobar').disabled = true;
            $('input').attr("disabled", false);
            $('textarea').attr("disabled", false);
            $('#txtAlumno').attr("disabled", false);
        }
    }
}
