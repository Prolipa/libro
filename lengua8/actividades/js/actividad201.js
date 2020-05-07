var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

document.getElementById("pre1a").addEventListener("keypress", () => {
    validNumero(0, 3, 1);
});
document.getElementById("pre1a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre1a"), 3);
});

document.getElementById("pre2a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 1);
});

document.getElementById("pre3a").addEventListener("keypress", () => {
    validNumero(0, 2, 1);
});
document.getElementById("pre3a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre3a"), 2);
});

document.getElementById("pre4a").addEventListener("keypress", () => {
    validNumero(0, 2, 1);
});
document.getElementById("pre4a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre4a"), 2);
});

document.getElementById("pre5a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre5a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre5a"), 1);
});
document.getElementById("pre6a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre6a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre6a"), 1);
});


function total() {
    var pre1a = document.getElementById('pre1a').value;
    var pre2a = document.getElementById('pre2a').value;
    var pre3a = document.getElementById('pre3a').value;
    var pre4a = document.getElementById('pre4a').value;
    var pre5a = document.getElementById('pre5a').value;
    var pre6a = document.getElementById('pre6a').value;

    if (pre1a == "" || pre2a == "" || pre3a == "" || pre4a == "" || pre5a == "" || pre6a == "") {
        alert("Calificar Pregunta 1,2,3,4,5 ó 6");
    } else {

        var pre1a = document.getElementById('pre1a').value;
        var pre2a = document.getElementById('pre2a').value;
        var pre3a = document.getElementById('pre3a').value;
        var pre4a = document.getElementById('pre4a').value;
        var pre5a = document.getElementById('pre5a').value;
        var pre6a = document.getElementById('pre6a').value;

        cor = parseFloat(pre1a) + parseFloat(pre2a) + parseFloat(pre3a) + parseFloat(pre4a) + parseFloat(pre5a) + parseFloat(pre6a);
        Calculo_nota();
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('textarea').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
        $('div').attr("disabled", true);
        $('.nota-abierta').css("background", "#00e600");
    }
}