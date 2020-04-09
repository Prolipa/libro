$('.btn_mostrar').on('click', function() { //mostrar todas las preguntas
    if ($(".panel-collapse").hasClass('in')) {
        $(".panel-collapse").removeClass('in');
    } else {
        $(".panel-collapse").addClass('in');
    }


});

function pregunta1() {
    var respact2 = ['II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX', '30', '40', '50', '90', '100', '850', '930', '990', '999', '1000', ];
    var cont = 0;
    for (var i = 0; i < 28; i++) {
        var res = $('#act1num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 28;
    $('#nota1').val(parseFloat(total).toFixed(2));

}
//////////////PREGUNTA2//////////////////////////////
var random2 = [
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>Capítulo nueve:</td> <td><input class="inputfraccciones text-uppercase sinEspacios" id="act2num0"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>Artículo veintiséis:</td> <td><input class="inputfraccciones text-uppercase sinEspacios" id="act2num1"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>Siglo veintiuno:</td> <td><input class="inputfraccciones text-uppercase sinEspacios" id="act2num2"></input></td>'],
    [' <td><b style="color: #005ca4"><li></li></b></td> <td>Doce horas:</td> <td><input class="inputfraccciones text-uppercase sinEspacios" id="act2num3"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>Episodio seis:</td> <td><input class="inputfraccciones text-uppercase sinEspacios" id="act2num4"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>Decimocuarta reunión:</td> <td><input class="inputfraccciones text-uppercase sinEspacios" id="act2num5"></input></td>'],
];
var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}

function pregunta2() {
    var respact2 = ['IX', 'XXVI', 'XXI', 'XII', 'VI', 'XIV', ];
    var cont = 0;
    for (var i = 0; i < 6; i++) {
        var res = $('#act2num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 6;
    $('#nota2').val(parseFloat(total).toFixed(2));

}
///////////////pregunta3///////////////////////////
var random3 = [
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>Los romanos inventaron un símbolo para representar al cero.</td> <td><input class="inputfraccciones sinEspacios text-uppercase" maxlength="1" id="act3num0"></input></td>'],
    [' <td><b style="color: #005ca4"><li></li></b></td> <td>Una raya sobre un símbolo indica que ese valor se multiplica por 1 000.</td> <td><input class="inputfraccciones sinEspacios text-uppercase" maxlength="1" id="act3num1"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>El número 83 en la numeración romana es LXXXIII.</td> <td><input class="inputfraccciones sinEspacios text-uppercase" maxlength="1" id="act3num2"></input></td>'],
    [' <td><b style="color: #005ca4"><li></li></b></td> <td>El símbolo I resta a todos los símbolos de mayor valor.</td> <td><input class="inputfraccciones sinEspacios text-uppercase" maxlength="1" id="act3num3"></input></td>'],
    ['<td><b style="color: #005ca4"><li></li></b></td> <td>El año 1940, en numeración romana, se escribe MCMXL.</td> <td><input class="inputfraccciones sinEspacios text-uppercase" maxlength="1" id="act3num4"></input></td>'],
];
var act03Txt = document.getElementsByClassName('act3class');

random3.sort(f_randomico);
for (i = 0; i < act03Txt.length; i++) {
    $('#' + act03Txt[i].id).html(random3[i]);
}

function pregunta3() {
    var respact2 = ['F', 'V', 'V', 'F', 'V', ];
    var cont = 0;
    for (var i = 0; i < 5; i++) {
        var res = $('#act3num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act3num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act3num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 5;
    $('#nota3').val(parseFloat(total).toFixed(2));

}
///////////////////////////////pregunta4////////////////////////////
function pregunta4() {
    var respact2 = ['14', '15', '16', ];
    var cont = 0;
    for (var i = 0; i < 3; i++) {
        var res = $('#act4num' + [i] + '').val().toUpperCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act4num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act4num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 3;
    $('#nota4').val(parseFloat(total).toFixed(2));

}


function NotaFinal() {

    /*var nota10 = document.getElementById('nota10').value;
    if ((nota8 == "") || (nota9 == "") || (nota10 == "")) {
        alert("Debe ingresar la nota de la pregunta 8, 9 o 10.")
    } else {*/
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();

    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;

    var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4);
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
    //}
}
