$('.enc').click(function() {

    if ($(this).hasClass('subrayar')) {
        $(this).removeClass('subrayar')
    } else {
        $(this).addClass('subrayar')
    }
});

$('.enc1').click(function() {

    if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')
    } else {
        $(this).addClass('encierra')
    }
});
$('.enc2').click(function() {

    if ($(this).hasClass('pintar')) {
        $(this).removeClass('pintar')
    } else {
        $(this).addClass('pintar')
    }
});
var respr1 = 0,
    respr2 = 0,
    respr3 = 0,
    respr4 = 0,
    respr5 = 0,
    respr6 = 0;

function Letras() {
    for (var i = 0; i <= 38; i++) {
        var caja = $('span[id=' + [i] + ']').text();
        if ($('#' + [i] + '').hasClass("subrayar")) {

            if ((caja == "Las") || (caja == "la") || (caja == "las") || (caja == "El") || (caja == "Los") || (caja == "La")) {
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
    var buenas = (1 * 10) / 7;
    var resbuenas = buenas * respr1;
    var malas = (1 * 10) / 31;
    var resmalas = malas * respr2;
    var total = resbuenas - resmalas;

    for (var i = 39; i <= 76; i++) {
        var caja = $('span[id=' + [i] + ']').text();
        if ($('#' + [i] + '').hasClass("encierra")) {

            if ((caja == "plantas") || (caja == "familia") || (caja == "pingüino") || (caja == "alas") || (caja == "cactus") || (caja == "flores") || (caja == "tortuga") || (caja == "mundo")) {
                respr3 = respr3 + 1;

                $('#' + [i] + '').addClass('correcto')
            } else {
                respr4 = respr4 + 1;

                $('#' + [i] + '').removeClass('correcto')
                $('#' + [i] + '').addClass('incorrecto')
            }

        } else {



        }



    }
    var buenas2 = (1 * 10) / 8;
    var resbuenas2 = buenas2 * respr3;
    var malas2 = (1 * 10) / 30;
    var resmalas2 = malas2 * respr4;
    var total2 = resbuenas2 - resmalas2;



    for (var i = 77; i <= 114; i++) {
        var caja = $('span[id=' + [i] + ']').text();
        if ($('#' + [i] + '').hasClass("pintar")) {

            if ((caja == "pertenecen") || (caja == "tiene") || (caja == "vuela") || (caja == "presentan") || (caja == "es")) {
                respr5 = respr5 + 1;

                $('#' + [i] + '').addClass('correcto2')
            } else {
                respr6 = respr6 + 1;

                $('#' + [i] + '').removeClass('correcto2')
                $('#' + [i] + '').addClass('incorrecto2')
            }

        } else {



        }



    }
    var buenas3 = (1 * 10) / 6;
    var resbuenas3 = buenas3 * respr5;
    var malas3 = (1 * 10) / 32;
    var resmalas3 = malas3 * respr6;
    var total3 = resbuenas3 - resmalas3;

    var subtotales = total + total2 + total3;
    var totales = subtotales / 6;

    $("#nt47_1").val(parseFloat(totales));




    /*var rbuenas = parseFloat(respr1) / 40;
    var rmalas = parseFloat(respr2) / 40;
    var total = ((rbuenas - rmalas) * 10) / rbuenas;
    alert(total);
    //$('#txtNota').html(total.toFixed(2) + ' ');
    document.getElementById('bt_comprobar').disabled = true;*/

}

function resolverN47() {
    Letras();

    var nota1 = document.getElementById("nt47_1").value;
    var nota2 = document.getElementById("nt47_2").value;




    if ((nota2 >= 1) && (nota2 <= 5)) {
        document.getElementById("nt47_2").style.backgroundColor = "#6DFF6F";
    } else {
        document.getElementById("nt47_2").style.backgroundColor = "#F95858";
        alert('Todas las preguntas se deben evaluar y la nota no debe exceder los 5 puntos');
    }


    if (nota2 > 5) {
        var resp = 0;
        $('#txtNota').html(totalsuma.toFixed(2) + ' ');
    } else {
        var resp = parseFloat(nota1) + parseFloat(nota2);

        $('#txtNota').html(resp.toFixed(2) + ' ');

        document.getElementById('bt_comprobar').disabled = true;

    }

}