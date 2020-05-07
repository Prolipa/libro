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
    validNumero(0, 3, 1);
});
document.getElementById("pre2a").addEventListener("keyup", () => {
    validMaxIngreso(document.getElementById("pre2a"), 3);
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

var random1 = ['<td style="background-color: #ffe7a7; border: 2px solid #64cdf5; line-height: 10px"> <p class="fuente2 s" style="text-align: center;"><b>Unicef</b></p> </td> <td> <div> <textarea class="form-control text-question no-redimensionar" cols="60" rows="2" placeholder="Texto" style="border: 2px solid #64cdf5;"></textarea> </div> </td>', '<td style="background-color: #ffe7a7; border: 2px solid #64cdf5; line-height: 10px"> <p class="fuente2 s" style="text-align: center;"><b>FEF</b></p> </td> <td> <div> <textarea class="form-control text-question no-redimensionar" cols="60" rows="2" placeholder="Texto" style="border: 2px solid #64cdf5;"></textarea> </div> </td>', '<td style="background-color: #ffe7a7; border: 2px solid #64cdf5; line-height: 10px"> <p class="fuente2 s" style="text-align: center;"><b>BID</b></p> </td> <td> <div> <textarea class="form-control text-question no-redimensionar" cols="60" rows="2" placeholder="Texto" style="border: 2px solid #64cdf5;"></textarea> </div> </td>', '<td style="background-color: #ffe7a7; border: 2px solid #64cdf5; line-height: 10px"> <p class="fuente2 s" style="text-align: center;"><b>OEI</b></p> </td> <td> <div> <textarea class="form-control text-question no-redimensionar" cols="60" rows="2" placeholder="Texto" style="border: 2px solid #64cdf5;"></textarea> </div> </td>', '<td style="background-color: #ffe7a7; border: 2px solid #64cdf5; line-height: 10px"> <p class="fuente2 s" style="text-align: center;"><b>OMS</b></p> </td> <td> <div> <textarea class="form-control text-question no-redimensionar" cols="60" rows="2" placeholder="Texto" style="border: 2px solid #64cdf5;"></textarea> </div> </td>']
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

var random2 = ['<td style="background-color: #fef3d2; border: 2px solid #64cdf5; line-height: 10px"> <p class="fuente2 s" style="text-align: center;"><b>led</b></p> </td> <td> <div> <textarea class="form-control text-question no-redimensionar" cols="60" rows="2" placeholder="Texto" style="border: 2px solid #64cdf5;"></textarea> </div> </td>', '<td style="background-color: #fef3d2; border: 2px solid #64cdf5; line-height: 10px"> <p class="fuente2 s" style="text-align: center;"><b>uci</b></p> </td> <td> <div> <textarea class="form-control text-question no-redimensionar" cols="60" rows="2" placeholder="Texto" style="border: 2px solid #64cdf5;"></textarea> </div> </td>', '<td style="background-color: #fef3d2; border: 2px solid #64cdf5; line-height: 10px"> <p class="fuente2 s" style="text-align: center;"><b>láser</b></p> </td> <td> <div> <textarea class="form-control text-question no-redimensionar" cols="60" rows="2" placeholder="Texto" style="border: 2px solid #64cdf5;"></textarea> </div> </td>', '<td style="background-color: #fef3d2; border: 2px solid #64cdf5; line-height: 10px"> <p class="fuente2 s" style="text-align: center;"><b>transistor</b></p> </td> <td> <div> <textarea class="form-control text-question no-redimensionar" cols="60" rows="2" placeholder="Texto" style="border: 2px solid #64cdf5;"></textarea> </div> </td>', '<td style="background-color: #fef3d2; border: 2px solid #64cdf5; line-height: 10px"> <p class="fuente2 s" style="text-align: center;"><b>emoticón</b></p> </td> <td> <div> <textarea class="form-control text-question no-redimensionar" cols="60" rows="2" placeholder="Texto" style="border: 2px solid #64cdf5;"></textarea> </div> </td>']
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

    if (pre1a == "" || pre2a == "" || pre3a == "" || pre4a == "") {
        alert("Calificar Pregunta 1,2 ó 3");
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
    }
}