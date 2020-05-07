var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 4, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 4);
});

document.getElementById("pre2a").addEventListener("keypress", () => {
    validNumero(0, 6, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 6);
});


function total() {
    var pre1a = document.getElementById('pre1a').value;
    var pre2a = document.getElementById('pre2a').value;

    if (pre1a == "" || pre2a == "") {
        alert("Calificar Pregunta 1 ó 2");
    } else {

        var pre1a = document.getElementById('pre1a').value;
        var pre2a = document.getElementById('pre2a').value;

        cor = parseFloat(pre1a) + parseFloat(pre2a);
        Calculo_nota();
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('textarea').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
        $('div').attr("disabled", true);
        $('.nota-abierta').css("background", "#00e600");
    }
}