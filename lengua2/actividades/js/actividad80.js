var n1 = 0,
    sum_total = 0,
    sum_total1 = 0,
    sum_total2 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 3,
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
    var p1vec1 = [
        '<div class="col-sm-4">' +
        '<img src="img/i1_p161_act80.jpg" class="img-responsive" alt="">' +
        '<div style="border-radius: 10px 0px 10px 0px; background: #EBF0CB; display: inline-block; padding: 10px;">' +
        'abrigo' +
        '</div>' +
        '<input type="text" class="form-control" style="text-align: center;" id="p1dcon1">' +
        '</div>',
        '<div class="col-sm-4">' +
        '<img src="img/i2_p161_act80.jpg" class="img-responsive" alt="">' +
        '<div style="border-radius: 10px 0px 10px 0px; background: #F4E1C8; display: inline-block; padding: 10px;">' +
        'cerdo' +
        '</div>' +
        '<input type="text" class="form-control" style="text-align: center;" id="p1dcon2">' +
        '</div>',
        '<div class="col-sm-4">' +
        '<img src="img/i3_p161_act80.jpg" class="img-responsive" alt="">' +
        '<div style="border-radius: 10px 0px 10px 0px; background: #E8E5F1; display: inline-block; padding: 10px;">' +
        'bolso' +
        '</div>' +
        '<input type="text" class="form-control" style="text-align: center;" id="p1dcon3">' +
        '</div>'
    ];
    p1vec1.sort(f_randomico);
    $('.actividad80').html(p1vec1);
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1dcon1=$('#p1dcon1').val();
        var p1dcon2=$('#p1dcon2').val();
        var p1dcon3=$('#p1dcon3').val();
        if (p1dcon1=='chompa') {
            cor++;
            f_ok($('#p1dcon1'));
        }else{
            inc++;
            f_no($('#p1dcon1'));
        }
        if (p1dcon2=='chancho') {
            cor++;
            f_ok($('#p1dcon2'));
        }else{
            inc++;
            f_no($('#p1dcon2'));
        }
        if (p1dcon3=='mochila') {
            cor++;
            f_ok($('#p1dcon3'));
        }else{
            inc++;
            f_no($('#p1dcon3'));
        }
        Calculo_nota();
    }
}