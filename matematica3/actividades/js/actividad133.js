var n1 = 0,
    sum_total = 0,
    sum_total1 = 0,
    sum_total2 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 6,
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

function f_iniciar() {
    var p1vec1 = ['2', '4', '6', '8', '10', '12', '14', '16', '18', '20'];
    var p1vec2 = [];
    var myArray1 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 3; i++) {
        var c = myArray1[i - 1];
        p1vec2.push(p1vec1[c]);

    };
    var p1aux1 = [];
    for (var i = 0; i < p1vec2[0]; i++) {
        p1aux1.push('<img src="img/i1_p155_act133.jpg" style="display: inline-block;">');
    }
    var p1aux2 = [];
    for (var i = 0; i < (p1vec2[0] / 2); i++) {
        p1aux2.push('<img src="img/i1_p155_act133.jpg" style="display: inline-block;">');
    }
    $('#p1im1').html(p1aux2);
    $('#p1im2').html(p1aux1);
    $('#p1im3').html(p1aux1);
    $('#p1im4').html(p1aux2);
    $('#p1cim1').text((p1vec2[0] / 2));
    $('#p1cim2').text(p1vec2[0]);

    var p1aux3 = [];
    for (var i = 0; i < p1vec2[1]; i++) {
        p1aux3.push('<img src="img/i2_p155_act133.jpg" style="display: inline-block;">');
    }
    var p1aux4 = [];
    for (var i = 0; i < (p1vec2[1] / 2); i++) {
        p1aux4.push('<img src="img/i2_p155_act133.jpg" style="display: inline-block;">');
    }
    $('#p1im11').html(p1aux4);
    $('#p1im12').html(p1aux3);
    $('#p1im13').html(p1aux3);
    $('#p1im14').html(p1aux4);
    $('#p1cim11').text((p1vec2[1] / 2));
    $('#p1cim12').text(p1vec2[1]);

    var p1aux5 = [];
    for (var i = 0; i < p1vec2[2]; i++) {
        p1aux5.push('<img src="img/i3_p155_act133.jpg" style="display: inline-block;">');
    }
    var p1aux6 = [];
    for (var i = 0; i < (p1vec2[2] / 2); i++) {
        p1aux6.push('<img src="img/i3_p155_act133.jpg" style="display: inline-block;">');
    }
    $('#p1im21').html(p1aux6);
    $('#p1im22').html(p1aux5);
    $('#p1im23').html(p1aux5);
    $('#p1im24').html(p1aux6);
    $('#p1cim21').text((p1vec2[2] / 2));
    $('#p1cim22').text(p1vec2[2]);
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        for (var i = 0; i < p1vec2.length; i++) {
            var resp = $('#p1dcon' + (i + 1)).val();
            if (resp == p1vec2[i]) {
                cor++;
                f_ok($('#p1dcon' + (i + 1)));
            } else {
                inc++;
                f_no($('#p1dcon' + (i + 1)));
            }
        }
        for (var i = 0; i < p1vec2.length; i++) {
            var resp1 = $('#p1dco' + (i + 1)).val();
            if (resp1 == (p1vec2[i] / 2)) {
                cor++;
                f_ok($('#p1dco' + (i + 1)));
            } else {
                inc++;
                f_no($('#p1dco' + (i + 1)));
            }
        }
        Calculo_nota();
    }
}