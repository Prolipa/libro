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


function f_iniciar() {
    var p2vec1 = [
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table class="table-responsive">' +
        '<tr align="center">' +
        '<td>' +
        '<img src="img/i6_p158_act76.jpg" alt="" class="img-responsive" style="width:80px;">' +
        '<input type="text" class="form-control" onkeyup="mayus(this)" style="font-size: 30px; text-align: center; min-width: 60px; max-width: 190px; height: 50px;" id="p2dcon1">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table class="table-responsive">' +
        '<tr align="center">' +
        '<td>' +
        '<img src="img/i7_p158_act76.jpg" alt="" class="img-responsive" style="width:80px;">' +
        '<input type="text" class="form-control" onkeyup="mayus(this)" style="font-size: 30px; text-align: center; min-width: 60px; max-width: 190px; height: 50px;" id="p2dcon2">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table class="table-responsive">' +
        '<tr align="center">' +
        '<td>' +
        '<img src="img/i8_p158_act76.jpg" alt="" class="img-responsive" style="width:80px;">' +
        '<input type="text" class="form-control" onkeyup="mayus(this)" style="font-size: 30px; text-align: center; min-width: 60px; max-width: 190px; height: 50px;" id="p2dcon3">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table class="table-responsive">' +
        '<tr align="center">' +
        '<td>' +
        '<img src="img/i9_p158_act76.jpg" alt="" class="img-responsive" style="width:80px;">' +
        '<input type="text" class="form-control" onkeyup="mayus(this)" style="font-size: 30px; text-align: center; min-width: 60px; max-width: 190px; height: 50px;" id="p2dcon4">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>',
        '<div class="table-responsive" style="display: inline-block; padding:10px;">' +
        '<table class="table-responsive">' +
        '<tr align="center">' +
        '<td>' +
        '<img src="img/i10_p158_act76.jpg" alt="" class="img-responsive" style="width:80px;">' +
        '<input type="text" class="form-control" onkeyup="mayus(this)" style="font-size: 30px; text-align: center; min-width: 60px; max-width: 190px; height: 50px;" id="p2dcon5">' +
        '</td>' +
        '</tr>' +
        '</table>' +
        '</div>'
    ];
    p2vec1.sort(f_randomico);
    $('#p1im1').html(p2vec1);
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p2dcon1 = $('#p2dcon1').val();
        var p2dcon2 = $('#p2dcon2').val();
        var p2dcon3 = $('#p2dcon3').val();
        var p2dcon4 = $('#p2dcon4').val();
        var p2dcon5 = $('#p2dcon5').val();
        if (p2dcon1 == 'helado') {
            cor++;
            f_ok($('#p2dcon1'));
        } else {
            inc++;
            f_no($('#p2dcon1'));
        }
        if (p2dcon2 == 'humo') {
            cor++;
            f_ok($('#p2dcon2'));
        } else {
            inc++;
            f_no($('#p2dcon2'));
        }
        if (p2dcon3 == 'hada') {
            cor++;
            f_ok($('#p2dcon3'));
        } else {
            inc++;
            f_no($('#p2dcon3'));
        }
        if (p2dcon4 == 'horno') {
            cor++;
            f_ok($('#p2dcon4'));
        } else {
            inc++;
            f_no($('#p2dcon4'));
        }
        if (p2dcon5 == 'hipopótamo') {
            cor++;
            f_ok($('#p2dcon5'));
        } else {
            inc++;
            f_no($('#p2dcon5'));
        }
        Calculo_nota();
    }
}