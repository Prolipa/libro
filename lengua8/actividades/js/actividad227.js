$('#activity .panel-collapse').addClass('in');

var
    cont = 1,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    calificacion = 10;

document.getElementById('nota2').addEventListener('keypress', () => {
    validNumero(0, 1.75, 1);
});
document.getElementById('nota2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota2'), 1.75)
});

document.getElementById('nota3').addEventListener('keypress', () => {
    validNumero(0, 0.25, 1);
});
document.getElementById('nota3').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota3'), 0.25)
});

document.getElementById('nota4').addEventListener('keypress', () => {
    validNumero(0, 0.25, 1);
});
document.getElementById('nota4').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota4'), 0.25)
});

document.getElementById('nota5').addEventListener('keypress', () => {
    validNumero(0, 0.75, 1);
});
document.getElementById('nota5').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota5'), 0.75)
});

document.getElementById('nota6').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota6').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota6'), 1)
});

document.getElementById('nota7').addEventListener('keypress', () => {
    validNumero(0, 0.25, 1);
});
document.getElementById('nota7').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota7'), 0.25)
});

document.getElementById('nota8').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota8').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota8'), 1)
});

document.getElementById('nota9').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota9').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota9'), 1)
});

document.getElementById('nota10').addEventListener('keypress', () => {
    validNumero(0, 1.5, 1);
});
document.getElementById('nota10').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota10'), 1.5)
});

document.getElementById('nota11').addEventListener('keypress', () => {
    validNumero(0, 0.5, 1);
});
document.getElementById('nota11').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota11'), 0.5)
});

document.getElementById('nota12').addEventListener('keypress', () => {
    validNumero(0, 1.5, 1);
});
document.getElementById('nota12').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota12'), 1.5)
});

document.getElementById('nota13').addEventListener('keypress', () => {
    validNumero(0, 0.25, 1);
});
document.getElementById('nota13').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota13'), 0.25)
});

var random1 = ['<td style="background-color: #d8ebd4; border: 5px solid #fef3be"> <p class="fuente2 s" style="text-align: center;"><b>De lugar</b></p> </td> <td> <div style="width: 55vw"> <textarea class="form-control text-question no-redimensionar" rows="2" placeholder="Texto" style="border: 2px solid #d8ebd4;"></textarea> </div> </td>', '<td style="background-color: #d8ebd4; border: 5px solid #fef3be"> <p class="fuente2 s" style="text-align: center;"><b>De cantidad</b></p> </td> <td> <div style="width: 55vw"> <textarea class="form-control text-question no-redimensionar" rows="2" placeholder="Texto" style="border: 2px solid #d8ebd4;"></textarea> </div> </td>', '<td style="background-color: #d8ebd4; border: 5px solid #fef3be"> <p class="fuente2 s" style="text-align: center;"><b>De afirmación</b></p> </td> <td> <div style="width: 55vw"> <textarea class="form-control text-question no-redimensionar" rows="2" placeholder="Texto" style="border: 2px solid #d8ebd4;"></textarea> </div> </td>', '<td style="background-color: #d8ebd4; border: 5px solid #fef3be"> <p class="fuente2 s" style="text-align: center;"><b>De negación</b></p> </td> <td> <div style="width: 55vw"> <textarea class="form-control text-question no-redimensionar" rows="2" placeholder="Texto" style="border: 2px solid #d8ebd4;"></textarea> </div> </td>', '<td style="background-color: #d8ebd4; border: 5px solid #fef3be"> <p class="fuente2 s" style="text-align: center;"><b>De duda</b></p> </td> <td> <div style="width: 55vw"> <textarea class="form-control text-question no-redimensionar" rows="2" placeholder="Texto" style="border: 2px solid #d8ebd4;"></textarea> </div> </td>']
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

var random2 = ['<td style="border: 2px solid #14b4f0; background-color: #0095d9"> <p class="titulo s" style="text-align: center;"><b>Nivel educativo o formación académica</b></p> </td> <td style="border: 2px solid #14b4f0;"><textarea class="form-control text-question no-redimensionar " cols="60" rows="2" placeholder="Texto"></textarea></td>', '<td style="border: 2px solid #14b4f0; background-color: #6bc067"> <p class="titulo s" style="text-align: center;"><b>Nivel económico y social</b></p> </td> <td style="border: 2px solid #14b4f0;"><textarea class="form-control text-question no-redimensionar " cols="60" rows="2" placeholder="Texto"></textarea></td>', '<td style="border: 2px solid #14b4f0; background-color: #f9b281"> <p class="titulo s" style="text-align: center;"><b>Nivel cultural</b></p> </td> <td style="border: 2px solid #14b4f0;"><textarea class="form-control text-question no-redimensionar " cols="60" rows="2" placeholder="Texto"></textarea></td>']
var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}


function total() {
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
    var nota12 = document.getElementById('nota12').value;
    var nota13 = document.getElementById('nota13').value;


    if (nota3 == "" || nota4 == "" || nota5 == "" || nota6 == "" || nota7 == "" || nota8 == "" || nota9 == "" || nota10 == "" || nota11 == "" || nota12 == "" || nota13 == "") {
        alert("Calificar Pregunta 2,3,4,5,6,7,8,9,10,11,12 ó  13");
    } else {
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
        var nota12 = document.getElementById('nota12').value;
        var nota13 = document.getElementById('nota13').value;

        cor = parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6) + parseFloat(nota7) + parseFloat(nota8) + parseFloat(nota9) + parseFloat(nota10) + parseFloat(nota11) + parseFloat(nota12) + parseFloat(nota13);
        Calculo_nota();
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('textarea').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
        $('div').attr("disabled", true);
        $('.nota-abierta').css("background", "#00e600");
        $('.enc3a').off('click');
    }
}