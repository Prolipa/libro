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
    validNumero(0, 3, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 3);
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

document.getElementById("pre5a").addEventListener("keypress", () => {
    validNumero(0, 1, 1);
});
document.getElementById("pre5a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre5a"), 1);
});

var random1 = ['<table align="center"> <tr> <td style="background-color: #a978b3; border: 3px solid #61ccf5; width: 500px; max-width: 100%"> <p style="text-align: center;font-size: 30px; color: #ffffff"><b>Características físicas </b></p> </td> </tr> <tr> <td class="fuente" style="border: 3px solid #61ccf5;"> <textarea class="form-control text-question no-redimensionar " cols="60" rows="4" placeholder="Texto"></textarea> </td> </tr> </table>', '<table align="center"> <tr> <td style="background-color: #f58220; border: 3px solid #61ccf5; width: 500px; max-width: 100%"> <p style="text-align: center;font-size: 30px; color: #ffffff"><b>Características psicológicas</b></p> </td> </tr> <tr> <td class="fuente" style="border: 3px solid #61ccf5;"> <textarea class="form-control text-question no-redimensionar " cols="60" rows="4" placeholder="Texto"></textarea> </td> </tr> </table>']
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

var random2 = ['<td align="center"> <img src="img/i1_p181_act165.jpg" style="max-width: 100%"> </td> <td> <div style="width: 55vw"> <textarea class="form-control text-question no-redimensionar" rows="3" placeholder="Texto" style="border: 3px solid #11b3f0;"></textarea> </div> </td>', '<td align="center"> <img src="img/i2_p181_act165.jpg" style="max-width: 100%"> </td> <td> <div style="width: 55vw"> <textarea class="form-control text-question no-redimensionar" rows="3" placeholder="Texto" style="border: 3px solid #11b3f0;"></textarea> </div> </td>', '<td align="center"> <img src="img/i3_p181_act165.jpg" style="max-width: 100%"> </td> <td> <div style="width: 55vw"> <textarea class="form-control text-question no-redimensionar" rows="3" placeholder="Texto" style="border: 3px solid #11b3f0;"></textarea> </div> </td>']
var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}


function total() {
    var pre1a = document.getElementById('pre1a').value;
    var pre2a = document.getElementById('pre2a').value;
    var pre3a = document.getElementById('pre3a').value;
    var pre4a = document.getElementById('pre4a').value;
    var pre5a = document.getElementById('pre5a').value;

    if (pre1a == "" || pre2a == "" || pre3a == "" || pre4a == "" || pre5a == "") {
        alert("Calificar Pregunta 1,2,3,4 ó 5");
    } else {

        var pre1a = document.getElementById('pre1a').value;
        var pre2a = document.getElementById('pre2a').value;
        var pre3a = document.getElementById('pre3a').value;
        var pre4a = document.getElementById('pre4a').value;
        var pre5a = document.getElementById('pre5a').value;

        cor = parseFloat(pre1a) + parseFloat(pre2a) + parseFloat(pre3a) + parseFloat(pre4a) + parseFloat(pre5a);
        Calculo_nota();
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('textarea').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
        $('div').attr("disabled", true);
        $('.nota-abierta').addClass('backnota');
    }
}