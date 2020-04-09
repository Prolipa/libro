document.getElementById('nota2').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota2'), 1)
});
document.getElementById('nota4').addEventListener('keypress', () => {
    validNumero(0, 2.5, 1);
});
document.getElementById('nota4').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota4'), 2.5)
});
document.getElementById('nota5').addEventListener('keypress', () => {
    validNumero(0, 0.5, 1);
});
document.getElementById('nota5').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota5'), 0.5)
});
document.getElementById('nota7').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota7').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota7'), 1)
});
document.getElementById('nota9').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota9').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota9'), 1)
});
///////////////////pregunta1///////////////////////////
function pregunta1() {
    var respact2 = [40];
    var cont = 0;
    for (var i = 0; i < 1; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 1;
    $('#nota1').val(parseFloat(total).toFixed(2));
}

//////////////////pregunta3///////////////////////
$('.enc').click(function() {

    if ($(this).hasClass('subrayar')) {
        $(this).removeClass('subrayar')
    } else {
        $(this).addClass('subrayar')
    }
})

function pregunta3() {
    var respr1 = 0,
        respr2 = 0,
        respr3 = 0,
        respr4 = 0;
    for (var i = 0; i < 31; i++) {
        var caja = $('span[id=' + [i] + ']').text();
        //var caja = $('span .enc').text();
        if ($('#' + [i] + '').hasClass("subrayar")) {

            if ((caja == "cueva") || (caja == "ciega") || (caja == "muletas") || (caja == "leguas")) {
                respr1 = respr1 + 1;

                $('#' + [i] + '').addClass('correcto')
            } else {
                respr2 = respr2 + 1;

                $('#' + [i] + '').removeClass('correcto')
                $('#' + [i] + '').addClass('incorrecto')

            }

        } else {



        }



    }
    var buenas = (respr1 * 1) / 4;
    var malas = (respr2 * 1) / 26;
    var total = buenas - malas;
    if (total < 0) {
        total = 0;
        $('#nota3').val(parseFloat(total).toFixed(2));
    } else {
        $('#nota3').val(parseFloat(total).toFixed(2));
    }


}
///////////////pregunta6///////////////////////////
function pregunta6() {
    var respact2 = ['pues', 'a causa de', 'ya que', 'así que', ];
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
    $('#nota6').val(parseFloat(total).toFixed(2));
    $('select').attr("disabled", true);
}

////////////pregunta8/////////////////////////////
var pal1 = ['<p class="bg_palabra drag3 c1">UNASUR OEA</p>',
    '<p class="bg_palabra drag3 c2" >Perú Chile José</p>',
    '<p class="bg_palabra drag3 c3" >Ministerio de Educación</p>',
];
var pal2 = ['<p>Nombres propios</p>',
    '<p>Siglas</p>',
    '<p>Nombres de instituciones</p>',

];
var p4aux1 = ['Perú Chile José', 'UNASUR OEA', 'Ministerio de Educación', ];
var p4aux2 = [];

pal1.sort(f_randomico);
$(".textos").append(pal1);
var myArray1 = ['0', '1', '2', ];
var i, j, k;
for (i = myArray1.length; i; i--) {
    j = Math.floor(Math.random() * i);
    k = myArray1[i - 1];
    myArray1[i - 1] = myArray1[j];
    myArray1[j] = k;
}
//aleatorio literal 1
for (var i = 1; i < 4; i++) {
    var c = myArray1[i - 1];
    $(".p4cim1" + i).html(pal2[c]);
    p4aux2.push(p4aux1[c]);
};
$(".drag3").draggable({
    revert: "invalid",
    zIndex: 5,
    containment: ".actividadSuma",
    scroll: false,
});

$(".drop3").droppable({
    accept: ".drag3",
    /*classes: {
                    "ui-droppable-active": "ui-state-active", //color azul al arrastrar el elemento
                    "ui-droppable-hover": "ui-state-hover"
                },*/

    drop: function(e, ui) {
        $(ui.draggable).removeClass("drag3");
        $(ui.draggable).removeClass("bg_palabra");
        ui.draggable.attr("style", "");
        $(this).append(ui.draggable);

    }
});

function pregunta8() {
    var cont = 0;
    for (var i = 0; i < 3; i++) {
        var res = $('.p4im' + [i] + ' p').text();
        if (p4aux2[i] == res) {
            cont = cont + 1;
            $('.p4im' + [i] + '').css("background", "#00e600");
        } else {
            $('.p4im' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 1) / 3;
    $('#nota8').val(parseFloat(total).toFixed(2));



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
    if ((nota2 == "") || (nota4 == "") || (nota5 == "") || (nota7 == "") || (nota9 == "")) {
        alert("Debe ingresar la calificación de la pregunta 2, 4, 5, 7 ó 9.")
    } else {
        pregunta1();
        pregunta3();
        pregunta6();
        pregunta8();
        var nota1 = document.getElementById('nota1').value;
        var nota2 = document.getElementById('nota2').value;
        var nota3 = document.getElementById('nota3').value;
        var nota4 = document.getElementById('nota4').value;
        var nota5 = document.getElementById('nota5').value;
        var nota6 = document.getElementById('nota6').value;
        var nota7 = document.getElementById('nota7').value;
        var nota8 = document.getElementById('nota8').value;
        var nota9 = document.getElementById('nota9').value;
        var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4) + parseFloat(nota5) + parseFloat(nota6) + parseFloat(nota7) + parseFloat(nota8) + parseFloat(nota9);
        $('#txtNota').html(parseFloat(total).toFixed(2));
        document.getElementById('bt_comprobar').disabled = true;
        $('input').attr("disabled", true);
        $('textarea').attr("disabled", true);
        $('#txtAlumno').attr("disabled", false);
    }
}
