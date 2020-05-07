var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 2.5, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 2.5);
});

document.getElementById("pre2a").addEventListener("keypress", () => {
    validNumero(0, 2.5, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 2.5);
});

document.getElementById("pre3a").addEventListener("keypress", () => {
    validNumero(0, 2.5, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre3a"), 2.5);
});

document.getElementById("pre4a").addEventListener("keypress", () => {
    validNumero(0, 2.5, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre4a"), 2.5);
});


function total() {
    var pre1a = document.getElementById('pre1a').value;
    var pre2a = document.getElementById('pre2a').value;
    var pre3a = document.getElementById('pre3a').value;
    var pre4a = document.getElementById('pre4a').value;

    if (pre1a == "") {
        alert("Calificar Pregunta 1 de Exploro");
        document.getElementById('pre1a').focus();
        $('#pre1a').addClass("alertaabierta");
    } else {
        if (pre2a == "") {
            alert("Calificar Pregunta 2 de Exploro");
            document.getElementById('pre2a').focus();
            $('#pre2a').addClass("alertaabierta");
        } else {
            if (pre3a == "") {
                alert("Calificar Pregunta 1 de Reflexiono");
                document.getElementById('pre3a').focus();
                $('#pre3a').addClass("alertaabierta");
            } else {
                if (pre4a == "") {
                    alert("Calificar Pregunta 2 de Reflexiono");
                    document.getElementById('pre4a').focus();
                    $('#pre4a').addClass("alertaabierta");
                } else {
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
                    $('.nota-abierta').css("background", "#00e600");
                    $('.desaparece').filter(function() {
                        return $.trim($(this).text()) === ''
                    }).hide()
                }
            }
        }
    }
}