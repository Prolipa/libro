document.getElementById('nota1').addEventListener('keypress', () => {
    validNumero(0, 0.75, 1);
});
document.getElementById('nota1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1'), 0.75)
});
document.getElementById('nota2').addEventListener('keypress', () => {
    validNumero(0, 1.25, 1);
});
document.getElementById('nota2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota2'), 1.25)
});
document.getElementById('nota3').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota3').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota3'), 1)
});
document.getElementById('nota4').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota4').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota4'), 1)
});
document.getElementById('nota5').addEventListener('keypress', () => {
    validNumero(0, 1.5, 1);
});
document.getElementById('nota5').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota5'), 1.5)
});
document.getElementById('nota6').addEventListener('keypress', () => {
    validNumero(0, 0.5, 1);
});
document.getElementById('nota6').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota6'), 0.5)
});
document.getElementById('nota8').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota8').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota8'), 1)
});
document.getElementById('nota10').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota10').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota10'), 1)
});
//////////////////////////pregunta7///////////////////////
var random7 = [
    ['<td><b>•</b> Cuando era niña, me <input class="text-lowercase sinEspacios" id="act7num0" type="text" style="text-align: center;border:0;border-bottom: 1px dotted #000000;">(gustar) escuchar cuentos; ahora que nadie me los lee, debo hacerlo yo misma. <br></td>'],
    ['<td><b>•</b> Ayer <input class="text-lowercase sinEspacios" id="act7num1" type="text" style="text-align: center;border:0;border-bottom: 1px dotted #000000;">(salir) del cine muy tarde; volví cansado a la casa. <br></td>'],
    ['<td><b>•</b> Gabriela, usted siempre <input class="text-lowercase sinEspacios" id="act7num2" type="text" style="text-align: center;border:0;border-bottom: 1px dotted #000000;">(llegar) a tiempo, le felicito. <br></td>'],
    ['<td><b>•</b> Yo <input class="text-lowercase sinEspacios" id="act7num3" type="text" style="text-align: center;border:0;border-bottom: 1px dotted #000000;">(comprar) un teléfono nuevo si el mío se daña. <br></td>'],
    ['<td><b>•</b> El próximo mes, mi familia y yo <input class="text-lowercase sinEspacios" id="act7num4" type="text" style="text-align: center;border:0;border-bottom: 1px dotted #000000;">(viajar) a Cojimíes de vacaciones. <br></td>'],
];

var act07Txt = document.getElementsByClassName('act7class');

random7.sort(f_randomico);
for (i = 0; i < act07Txt.length; i++) {
    $('#' + act07Txt[i].id).html(random7[i]);
}

function pregunta7() {
    var respact2 = ['gustaba', 'salí', 'llega', 'compraría', 'viajaremos', ];
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
///////////////////pregunta8///////////////////////////////////
var random8 = [
    ['<td>insecticida</td>' +
        '<td> <select class="form-control" id="selec0">' +
        '<option>-----selecciona-----</option>' +
        '<option>Sustancia que mata insectos.</option>' +
        '<option>Figura parecida a un rombo</option>' +
        '<option>Quitar las hojas a un árbol o un libro.</option>' +
        '<option>Que está debajo de la tierra.</option> </select>' +
        '</td>'
    ],
    ['<td>romboide</td>' +
        '<td> <select class="form-control" id="selec1">' +
        '<option>-----selecciona-----</option>' +
        '<option>Sustancia que mata insectos.</option>' +
        '<option>Figura parecida a un rombo</option>' +
        '<option>Quitar las hojas a un árbol o un libro.</option>' +
        '<option>Que está debajo de la tierra.</option> </select>' +
        '</td>'
    ],
    ['<td>deshojar</td>' +
        '<td> <select class="form-control" id="selec2">' +
        '<option>-----selecciona-----</option>' +
        '<option>Sustancia que mata insectos.</option>' +
        '<option>Figura parecida a un rombo</option>' +
        '<option>Quitar las hojas a un árbol o un libro.</option>' +
        '<option>Que está debajo de la tierra.</option> </select>' +
        '</td>'
    ],
    ['<td>subterráneo</td>' +
        '<td> <select class="form-control" id="selec3">' +
        '<option>-----selecciona-----</option>' +
        '<option>Sustancia que mata insectos.</option>' +
        '<option>Figura parecida a un rombo</option>' +
        '<option>Quitar las hojas a un árbol o un libro.</option>' +
        '<option>Que está debajo de la tierra.</option> </select>' +
        '</td>'
    ],
];

var act08Txt = document.getElementsByClassName('act8class');

random8.sort(f_randomico);
for (i = 0; i < act08Txt.length; i++) {
    $('#' + act08Txt[i].id).html(random8[i]);
}

function pregunta8() {
    var respact2 = ['Sustancia que mata insectos.', 'Figura parecida a un rombo', 'Quitar las hojas a un árbol o un libro.', 'Que está debajo de la tierra.', ];
    var cont = 0;
    for (var i = 0; i < 4; i++) {
        var res = $('#selec' + [i] + ' option:selected').text();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#selec' + [i] + '').css("background", "#00e600");
        } else {
            $('#selec' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 4;
    $('#nota8').val(parseFloat(total).toFixed(2));
    $('select').attr("disabled", true);
}
/////////////////////pregunta9///////////////////////////
var random9 = [
    ['<img class="img-responsive" src="img/i2_p168_actsumativa.jpg"></img>' +
        '<select class="form-control" id="sel0">' +
        '<option>-----selecciona-----</option>' +
        '<option>changa</option>' +
        '<option>chakiñán</option>' +
        '<option>huasipichay</option>' +
        '<option>minga</option>' +
        '</select>'
    ],
    ['<img class="img-responsive" src="img/i3_p168_actsumativa.jpg"></img>' +
        '<select class="form-control" id="sel1">' +
        '<option>-----selecciona-----</option>' +
        '<option>changa</option>' +
        '<option>chakiñán</option>' +
        '<option>huasipichay</option>' +
        '<option>minga</option>' +
        '</select>'
    ],
    [' <img class="img-responsive" src="img/i4_p168_actsumativa.jpg"></img>' +
        '<select class="form-control" id="sel2">' +
        '<option>-----selecciona-----</option>' +
        '<option>changa</option>' +
        '<option>chakiñán</option>' +
        '<option>huasipichay</option>' +
        '<option>minga</option>' +
        '</select>'
    ],
    [' <img class="img-responsive" src="img/i5_p168_actsumativa.jpg"></img>' +
        '<select class="form-control" id="sel3">' +
        '<option>-----selecciona-----</option>' +
        '<option>changa</option>' +
        '<option>chakiñán</option>' +
        '<option>huasipichay</option>' +
        '<option>minga</option>' +
        '</select>'
    ],
];

var act09Txt = document.getElementsByClassName('act9class');

random9.sort(f_randomico);
for (i = 0; i < act09Txt.length; i++) {
    $('#' + act09Txt[i].id).html(random9[i]);
}

function pregunta9() {
    var respact2 = ['minga', 'huasipichay', 'chakiñán', 'changa', ];
    var cont = 0;
    for (var i = 0; i < 4; i++) {
        var res = $('#sel' + [i] + ' option:selected').text();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#sel' + [i] + '').css("background", "#00e600");
        } else {
            $('#sel' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 4;
    $('#nota9').val(parseFloat(total).toFixed(2));
    $('select').attr("disabled", true);
}

function NotaFinal() {
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;
    var nota5 = document.getElementById('nota5').value;
    var nota6 = document.getElementById('nota6').value;
    var nota7 = document.getElementById('nota7').value;
    var nota8 = document.getElementById('nota8').value;
    var nota9 = document.getElementById('nota9').value;
    var nota10 = document.getElementById('nota10').value;

    if ((nota1 == "") || (nota2 == "") || (nota3 == "") || (nota4 == "") || (nota5 == "") || (nota6 == "") || (nota10 == "")) {
        alert("Debe ingresar la calificación de la pregunta 1, 2, 3, 4, 5, 6 o 10.")
    } else {
        pregunta7();
        pregunta8();
        pregunta9();
        var nota1 = document.getElementById('nota1').value;
        var nota2 = document.getElementById('nota2').value;
        var nota3 = document.getElementById('nota3').value;
        var nota4 = document.getElementById('nota4').value;
        var nota5 = document.getElementById('nota5').value;
        var nota6 = document.getElementById('nota6').value;
        var nota7 = document.getElementById('nota7').value;
        var nota8 = document.getElementById('nota8').value;
        var nota9 = document.getElementById('nota9').value;
        var nota10 = document.getElementById('nota10').value;
        var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6) + parseFloat(nota7) + parseFloat(nota8) + parseFloat(nota9) + parseFloat(nota10);
        $('#txtNota').html(parseFloat(total).toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('textarea').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
    }
}
