var n1 = 0,
    sum_total = 0,
    cont = 0,
    ejer = 1,
    itemsT = 6,
    cor = 0,
    inc = 0,
    str = '',
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
    var p1num1 = ['<p><b style="color: #D68500;">N</b> = <b style="color: #D68500;">{</b> 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 <b style="color: #D68500;">}</b></p>' +
        '<input type="text" class="form-control" style="text-align: center; min-width: 80px;" id="p1dcon1" onkeyup="mayus(this)" name="">',
        '<p><b style="color: #6DB4D3;">A</b> = <b style="color: #6DB4D3;">{</b> El abecedario <b style="color: #6DB4D3;">}</b></p>' +
        '<input type="text" class="form-control" style="text-align: center; min-width: 80px;" id="p1dcon2" onkeyup="mayus(this)" name="">',
        '<p><img src="img/i1_p135_act112.jpg" class="img-responsive"></p>' +
        '<input type="text" class="form-control" style="text-align: center; min-width: 80px;" id="p1dcon3" onkeyup="mayus(this)" name="">',
        '<p><b style="color: #8FB435;">M</b> = <b style="color: #8FB435;">{</b> Los meses del año <b style="color: #8FB435;">}</b></p>' +
        '<input type="text" class="form-control" style="text-align: center; min-width: 80px;" id="p1dcon4" onkeyup="mayus(this)" name="">',
        '<p><img src="img/i2_p135_act112.jpg" class="img-responsive"></p>' +
        '<input type="text" class="form-control" style="text-align: center; min-width: 80px;" id="p1dcon5" onkeyup="mayus(this)" name="">',
        '<p><img src="img/i3_p135_act112.jpg" class="img-responsive"></p>' +
        '<input type="text" class="form-control" style="text-align: center; min-width: 80px;" id="p1dcon6" onkeyup="mayus(this)" name="">'
    ];
    var myArray1 = ['0', '1', '2', '3', '4', '5'];
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 6; i++) {
        var c = myArray1[i - 1];
        $("#p1im" + i).html(p1num1[c]);


    };
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1dcon1 = $('#p1dcon1').val().toLowerCase();
        var p1dcon2 = $('#p1dcon2').val().toLowerCase();
        var p1dcon3 = $('#p1dcon3').val().toLowerCase();
        var p1dcon4 = $('#p1dcon4').val().toLowerCase();
        var p1dcon5 = $('#p1dcon5').val().toLowerCase();
        var p1dcon6 = $('#p1dcon6').val().toLowerCase();
        if (p1dcon1 == 'extensión' || p1dcon1 == 'por extensión') {
            cor++;
            f_ok($('#p1dcon1'));
        } else {
            inc++;
            f_no($('#p1dcon1'));
        }
        if (p1dcon2 == 'comprensión' || p1dcon2 == 'por comprensión') {
            cor++;
            f_ok($('#p1dcon2'));
        } else {
            inc++;
            f_no($('#p1dcon2'));
        }
        if (p1dcon3 == 'extensión' || p1dcon3 == 'por extensión') {
            cor++;
            f_ok($('#p1dcon3'));
        } else {
            inc++;
            f_no($('#p1dcon3'));
        }
        if (p1dcon4 == 'comprensión' || p1dcon4 == 'por comprensión') {
            cor++;
            f_ok($('#p1dcon4'));
        } else {
            inc++;
            f_no($('#p1dcon4'));
        }
        if (p1dcon5 == 'comprensión' || p1dcon5 == 'por comprensión') {
            cor++;
            f_ok($('#p1dcon5'));
        } else {
            inc++;
            f_no($('#p1dcon5'));
        }
        if (p1dcon6 == 'extensión' || p1dcon6 == 'por extensión') {
            cor++;
            f_ok($('#p1dcon6'));
        } else {
            inc++;
            f_no($('#p1dcon6'));
        }
        Calculo_nota();
    }
}