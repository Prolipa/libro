var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

document.getElementById("pre2a").addEventListener("keypress", () => {
    validNumero(0, 2, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 2);
});

document.getElementById("pre3a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre3a"), 1);
});

document.getElementById("pre4a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre4a"), 1);
});

var random1 = ['<font color="#0077c0" size="5"> <div class="drag1">Fecha</div> </font>', '<font color="#0077c0" size="5"> <div class="drag1">Destinatario</div> </font>', '<font color="#0077c0" size="5"> <div class="drag1">Vocativo</div> </font>', '<font color="#0077c0" size="5"> <div class="drag1">Título</div> </font>']
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

function pregunta1() {
    var respact2 = ['Fecha', 'Destinatario', 'Vocativo', 'Título'];
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
    var total = (cont * 6) / 4;
    $('#pre1a').val(parseFloat(total).toFixed(2));
}


function total() {
    var pre1a = document.getElementById('pre1a').value;
    var pre2a = document.getElementById('pre2a').value;
    var pre3a = document.getElementById('pre3a').value;
    var pre4a = document.getElementById('pre4a').value;

    if (pre2a == "" || pre3a == "" || pre4a == "") {
        alert("Calificar Pregunta 2,3 ó 4");
    } else {
        pregunta1();
        var pre1a = document.getElementById('pre1a').value;
        var pre2a = document.getElementById('pre2a').value;
        var pre3a = document.getElementById('pre3a').value;
        var pre4a = document.getElementById('pre4a').value;

        cor = parseFloat(pre1a) + parseFloat(pre2a) + parseFloat(pre3a) + parseFloat(pre4a);
        Calculo_nota();
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('textarea').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
        $('div').attr("disabled", true);
        $('.nota-abierta').addClass('backnota');
    }
}