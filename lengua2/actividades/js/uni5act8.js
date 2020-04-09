var n1 = 0,
    sum_total = 0,
    sum_total1 = 0,
    sum_total2 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    str = '',
    str1 = '',
    str2 = '',
    calificacion = 10;
var claseAnimada = 'animate bounceIn';
f_iniciar();

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}
document.getElementById('nota1_2').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota1_2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_2'), 2)
});
document.getElementById('nota1_4').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota1_4').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_4'), 2)
});

function f_iniciar() {
    var p1vec1 = [
        '<li><span style="color: black;">El ingreso de mascotas está permitido. <select id="p1sel1">' +
        '<option selected disabled value="">Seleccione</option>' +
        '<option value="V">V</option>' +
        '<option value="F">F</option>' +
        '</select></span></li>' ,
        '<li><span style="color: black;">Hay que ducharse antes de entrar a la piscina.<select id="p1sel2">' +
        '<option selected disabled value="">Seleccione</option>' +
        '<option value="V">V</option>' +
        '<option value="F">F</option>' +
        '</select></span></li>' ,
        '<li><span style="color: black;">Se debe utilizar gorro de baño dentro de la piscina.<select id="p1sel3">' +
        '<option selected disabled value="">Seleccione</option>' +
        '<option value="V">V</option>' +
        '<option value="F">F</option>' +
        '</select></span></li>' ,
        '<li><span style="color: black;">Los niños menores de 10 años pueden ingresar solos.<select id="p1sel4">' +
        '<option selected disabled value="">Seleccione</option>' +
        '<option value="V">V</option>' +
        '<option value="F">F</option>' +
        '</select></span></li>' ,
        '<li><span style="color: black;">No se puede ingerir alimentos dentro de la piscina.<select id="p1sel5">' +
        '<option selected disabled value="">Seleccione</option>' +
        '<option value="V">V</option>' +
        '<option value="F">F</option>' +
        '</select></span></li>' ,
    ];
    p1vec1.sort(f_randomico);
    $('#p1im1').html(p1vec1);

    var pal1 = ['<span class="bg_palabra drag">niño</span>',
        '<span class="bg_palabra drag">mayor</span>',
        '<span class="bg_palabra drag">salir</span>',
        '<span class="bg_palabra drag">cerrar</span>',
        '<span class="bg_palabra drag">quitar</span>'
    ];
    pal1.sort(f_randomico);
    $(".textos").append(pal1);
    var pal2 = [
        '<div class="" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop p31im1"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p31cim11" ><h4>entrar</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop p31im2"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p31cim12"><h4>colocar</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop p31im3"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p31cim13"><h4>menor</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop p31im4"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p31cim14"><h4>adulto</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="" style="display: inline-block; padding:10px;">' +
        '<table>' +
        '<tr>' +
        '<td>' +
        '<div class="c_destino1 drop p31im5"></div>' +
        '</td>' +
        '<td>' +
        '<div class="c_origen p31cim15"><h4>abrir</h4></div>' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>'
    ];
    pal2.sort(f_randomico);
    $("#datos").html(pal2);
    $(".drag").draggable({
        revert: "invalid",
        zIndex: 5,
        containment: "#p3act1",
        scroll: false,
    });

    $(".drop").droppable({
        accept: ".drag",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag");
            $(ui.draggable).removeClass("bg_palabra");
            ui.draggable.attr("style", "");
            $(this).append(ui.draggable);

        }
    });
    bt_comprobar.addEventListener("click", preg2);

    function preg2() {
        cor = 0;
        var nota1_2 = $('#nota1_2').val();
        if (!nota1_2) {
            alert('Ingrese la calificación en la pregunta 2.')
        } else {
            cor = cor + parseFloat(nota1_2);
            inc = inc + (2 - parseFloat(nota1_2));
            $('#nota1_2').val(parseFloat(nota1_2).toFixed(2));
            $('#nota1_2').attr('disabled', 'true');
            preg4();
        }
    }
    function preg4() {
        var nota1_4 = $('#nota1_4').val();
        if (!nota1_4) {
            alert('Ingrese la calificación en la pregunta 4.')
        } else {
            cor = cor + parseFloat(nota1_4);
            inc = inc + (2 - parseFloat(nota1_4));
            $('#nota1_4').val(parseFloat(nota1_4).toFixed(2));
            $('#nota1_4').attr('disabled', 'true');
            f_comprobar();
        }

    }

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", preg2);
        var p1vec2=['F','V','V','F','V'];
        var p1cont1=0;
        for (var i = 0; i < p1vec2.length; i++) {
            var p1res1=$('#p1sel'+(i+1)).val();
            if (p1res1==p1vec2[i]) {
                p1cont1++;
                f_ok($('#p1sel'+(i+1)));
            }else{
                p1cont1;
                f_no($('#p1sel'+(i+1)));
            }
        }
        var result1 = (p1cont1 * 3) / 5;
        cor = cor + result1;
        inc = inc + (3 - result1);
        $('#nota1_1').val(result1.toFixed(2));
        $('#nota1_1').css('display', '');

        var p31im1 = $('.p31im1 span').text();
        var p31im2 = $('.p31im2 span').text();
        var p31im3 = $('.p31im3 span').text();
        var p31im4 = $('.p31im4 span').text();
        var p31im5 = $('.p31im5 span').text();
        var p3cont1 = 0;
        if (p31im1 == 'salir') {
            p3cont1++;
            f_ok($('.p31im1'));
        } else {
            p3cont1;
            f_no($('.p31im1'));
        }
        if (p31im2 == 'quitar') {
            p3cont1++;
            f_ok($('.p31im2'));
        } else {
            p3cont1;
            f_no($('.p31im2'));
        }
        if ((p31im3 == 'mayor')) {
            p3cont1++;
            f_ok($('.p31im3'));
        } else {
            p3cont1;
            f_no($('.p31im3'));
        }
        if ((p31im4 == 'niño')) {
            p3cont1++;
            f_ok($('.p31im4'));
        } else {
            p3cont1;
            f_no($('.p31im4'));
        }
        if (p31im5 == 'cerrar') {
            p3cont1++;
            f_ok($('.p31im5'));
        } else {
            p3cont1;
            f_no($('.p31im5'));
        }
        var result3 = (p3cont1 * 3) / 5;
        cor = cor + result3;
        inc = inc + (3 - result3);
        $('#nota1_3').val(result3.toFixed(2));
        $('#nota1_3').css('display', '');

        Calculo_nota();
    }
}