$('.btn_mostrar').on('click', function() { //mostrar todas las preguntas
    if ($(".panel-collapse").hasClass('in')) {
        $(".panel-collapse").removeClass('in');
    } else {
        $(".panel-collapse").addClass('in');
    }
});

var random1 = [
    ['<b style="color: #005ca4;"><li></li></b>35,26°' +
        '<textarea name="" class="form-control" style="resize: none;"></textarea>' +
        '<br>' +
        '35,26° = <input class="inputfraccciones sinEspacios" id="act1num0"></input>° <input class="inputfraccciones sinEspacios" id="act1num1"></input>´ <input class="inputfraccciones sinEspacios" id="act1num2"></input>"'
    ],
    [' <b style="color: #005ca4;"><li></li></b>6,25°' +
        '<textarea name="" class="form-control" style="resize: none;"></textarea>' +
        '<br>' +
        '6,25° = <input class="inputfraccciones sinEspacios" id="act1num3"></input>° <input class="inputfraccciones sinEspacios" id="act1num4"></input>´'
    ],
    ['<b style="color: #005ca4;"><li></li></b>143,62°' +
        '<textarea name="" class="form-control" style="resize: none;"></textarea>' +
        '<br>' +
        '143,62° = <input class="inputfraccciones sinEspacios" id="act1num5"></input>° <input class="inputfraccciones sinEspacios" id="act1num6"></input>´ <input class="inputfraccciones sinEspacios" id="act1num7"></input>"'
    ],
    ['<b style="color: #005ca4;"><li></li></b>63,47°' +
        '<textarea name="" class="form-control" style="resize: none;"></textarea>' +
        '<br>' +
        '63,47° = <input class="inputfraccciones sinEspacios" id="act1num8"></input>° <input class="inputfraccciones sinEspacios" id="act1num9"></input>´ <input class="inputfraccciones sinEspacios" id="act1num10"></input>"'
    ],
];
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

function pregunta1() {

    var respact2 = ['35', '15', '36', '6', '15', '143', '37', '12', '63', '28', '12', ];
    var cont = 0;
    for (var i = 0; i < 11; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 5) / 11;
    $('#nota1').val(parseFloat(total).toFixed(2));

}



function pregunta2() {

    var respact2 = ['0', '57', '90', '58', '12', ];
    var cont = 0;
    for (var i = 0; i < 5; i++) {
        var res = $('#act2num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 5) / 5;
    $('#nota2').val(parseFloat(total).toFixed(2));

}



function NotaFinal() {

    /*var nota10 = document.getElementById('nota10').value;
    if ((nota8 == "") || (nota9 == "") || (nota10 == "")) {
        alert("Debe ingresar la nota de la pregunta 8, 9 o 10.")
    } else {*/
    /*if ($('.1').hasClass('pintar1') == false) {
        alert("Debe seleccionar la respuesta en la pregunta 3")
    } else {*/
    pregunta1();
    pregunta2();


    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;


    var total = parseFloat(nota1) + parseFloat(nota2);
    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);
    ///}
}
