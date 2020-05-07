var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 10, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 10);
});

function total() {
    var pre1a = document.getElementById('pre1a').value;

    if (pre1a == "") {
        alert("Calificar Pregunta 1");
    } else {

        var pre1a = document.getElementById('pre1a').value;

        cor = parseFloat(pre1a);
        Calculo_nota();
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('textarea').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
        $('div').attr("disabled", true);
        $('.nota-abierta').css("background", "#00e600");
    }
}