document.getElementById('nota1').addEventListener('keypress', () => {
    validNumero(0, 3, 1);
});
document.getElementById('nota1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1'), 3)
});
document.getElementById('nota2').addEventListener('keypress', () => {
    validNumero(0, 1.5, 1);
});
document.getElementById('nota2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota2'), 1.5)
});
document.getElementById('nota3').addEventListener('keypress', () => {
    validNumero(0, 1.5, 1);
});
document.getElementById('nota3').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota3'), 1.5)
});
document.getElementById('nota4').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota4').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota4'), 1)
});
document.getElementById('nota5').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota5').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota5'), 1)
});
var random6 = [
    ['<b>•</b> Guardaba cada libro <input id="act6num0" class="sinEspacios text-lowercase" type="" name="" style="border:0;border-bottom: 1px solid #000000;text-align: center;"> en la repisa de su cuarto. (leer, leyendo, leído)'],
    ['<b>•</b> <input id="act6num1" class="sinEspacios text-lowercase" type="" name="" style="border:0;border-bottom: 1px solid #000000;text-align: center;"> todas las mañanas es un buen ejercicio aeróbico. (trotar, trotando, trotado)'],
    ['<b>•</b> Cecilia cruzó la calle <input id="act6num2" class="sinEspacios text-lowercase" type="" name="" style="border:0;border-bottom: 1px solid #000000;text-align: center;"> el semáforo. (mirar, mirando, mirado)'],
];
var act06Txt = document.getElementsByClassName('act6class');

random6.sort(f_randomico);
for (i = 0; i < act06Txt.length; i++) {
    $('#' + act06Txt[i].id).html(random6[i]);
}

function pregunta6() {
    var respact2 = ['leído', 'trotar', 'mirando', ];
    var cont = 0;
    for (var i = 0; i < 3; i++) {
        var res = $('#act6num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act6num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act6num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 3;
    $('#nota6').val(parseFloat(total).toFixed(2));
}

var random7 = [
    ['<input type="text" style="border: 0; border-bottom: 1px solid #000000;width:70px;" class="sinEspacios text-lowercase" id="act7num0"> yaku'],
    ['<input type="text" style="border: 0; border-bottom: 1px solid #000000;width:70px;" class="sinEspacios text-lowercase" id="act7num1"> maqui'],
    ['<input type="text" style="border: 0; border-bottom: 1px solid #000000;width:70px;" class="sinEspacios text-lowercase" id="act7num2"> guagua'],
    ['<input type="text" style="border: 0; border-bottom: 1px solid #000000;width:70px;" class="sinEspacios text-lowercase" id="act7num3"> upa'],
    ['<input type="text" style="border: 0; border-bottom: 1px solid #000000;width:70px;" class="sinEspacios text-lowercase" id="act7num4"> Ashku'],
];
var act07Txt = document.getElementsByClassName('act7class');

random7.sort(f_randomico);
for (i = 0; i < act07Txt.length; i++) {
    $('#' + act07Txt[i].id).html(random7[i]);
}


function pregunta7() {
    var respact2 = ['agua', 'mano', 'niño', 'cabeza', 'perro', ];
    var cont = 0;
    for (var i = 0; i < 5; i++) {
        var res = $('#act7num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act7num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act7num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 5;
    $('#nota7').val(parseFloat(total).toFixed(2));
}

function NotaFinal() {
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;
    var nota5 = document.getElementById('nota5').value;
    var nota6 = document.getElementById('nota6').value;
    var nota7 = document.getElementById('nota7').value;
    if ((nota1 == "") || (nota2 == "") || (nota3 == "") || (nota4 == "") || (nota5 == "")) {
        alert("Debe ingresar la calificación de la pregunta 1, 2, 3, 4 ó 5.")
    } else {
        pregunta6();
        pregunta7();
        var nota1 = document.getElementById('nota1').value;
        var nota2 = document.getElementById('nota2').value;
        var nota3 = document.getElementById('nota3').value;
        var nota4 = document.getElementById('nota4').value;
        var nota5 = document.getElementById('nota5').value;
        var nota6 = document.getElementById('nota6').value;
        var nota7 = document.getElementById('nota7').value;
        var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6) + parseFloat(nota7);
        $('#txtNota').html(parseFloat(total).toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('textarea').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
    }
}
