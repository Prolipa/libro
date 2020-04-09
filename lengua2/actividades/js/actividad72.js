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
$('.1').click(function() {
    switch ($(this).attr('class')) {
        case '1 p1pint1':
            $('.p1pint1').addClass('pintar');
            $('.p1pint2').removeClass('pintar');
            $('.p1pint3').removeClass('pintar');
            $('.p1pint4').removeClass('pintar');
            break;
        case '1 p1pint2':
            $('.p1pint2').addClass('pintar');
            $('.p1pint1').removeClass('pintar');
            $('.p1pint3').removeClass('pintar');
            $('.p1pint4').removeClass('pintar');
            break;
        case '1 p1pint3':
            $('.p1pint3').addClass('pintar');
            $('.p1pint1').removeClass('pintar');
            $('.p1pint2').removeClass('pintar');
            $('.p1pint4').removeClass('pintar');
            break;
        case '1 p1pint4':
            $('.p1pint4').addClass('pintar');
            $('.p1pint1').removeClass('pintar');
            $('.p1pint2').removeClass('pintar');
            $('.p1pint3').removeClass('pintar');
            break;
    }
});
$('.2').click(function() {
    switch ($(this).attr('class')) {
        case '2 p2pint1':
            $('.p2pint1').addClass('pintar');
            $('.p2pint2').removeClass('pintar');
            $('.p2pint3').removeClass('pintar');
            $('.p2pint4').removeClass('pintar');
            break;
        case '2 p2pint2':
            $('.p2pint2').addClass('pintar');
            $('.p2pint1').removeClass('pintar');
            $('.p2pint3').removeClass('pintar');
            $('.p2pint4').removeClass('pintar');
            break;
        case '2 p2pint3':
            $('.p2pint3').addClass('pintar');
            $('.p2pint1').removeClass('pintar');
            $('.p2pint2').removeClass('pintar');
            $('.p2pint4').removeClass('pintar');
            break;
        case '2 p2pint4':
            $('.p2pint4').addClass('pintar');
            $('.p2pint1').removeClass('pintar');
            $('.p2pint2').removeClass('pintar');
            $('.p2pint3').removeClass('pintar');
            break;
    }
});
document.getElementById('nota1_1').addEventListener('keypress', () => {
    validNumero(0, 3, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 3)
});
function f_iniciar() {
    var p1vec1=['<img src="img/i1_p153_act72.jpg" class="img-responsive" alt="1" style="mix-blend-mode: multiply;">','<img src="img/i2_p153_act72.jpg" class="img-responsive" alt="2" style="mix-blend-mode: multiply;">','<img src="img/i3_p153_act72.jpg" class="img-responsive" alt="3" style="mix-blend-mode: multiply;">','<img src="img/i4_p153_act72.jpg" class="img-responsive" alt="4" style="mix-blend-mode: multiply;">'];
    p1vec1.sort(f_randomico);
    for (var i = 0; i < p1vec1.length; i++) {
        $('.p1pint'+(i+1)).html(p1vec1[i]);
    }

    var p2vec1=['<img src="img/i5_p153_act72.jpg" class="img-responsive" alt="1" style="mix-blend-mode: multiply;">','<img src="img/i6_p153_act72.jpg" class="img-responsive" alt="2" style="mix-blend-mode: multiply;">','<img src="img/i7_p153_act72.jpg" class="img-responsive" alt="3" style="mix-blend-mode: multiply;">','<img src="img/i8_p153_act72.jpg" class="img-responsive" alt="4" style="mix-blend-mode: multiply;">'];
    p2vec1.sort(f_randomico);
    for (var i = 0; i < p2vec1.length; i++) {
        $('.p2pint'+(i+1)).html(p2vec1[i]);
    }
    var p3vec1=['<img src="img/i9_p153_act72.jpg" class="img-responsive" alt="3" style="mix-blend-mode: multiply;">','<img src="img/i10_p153_act72.jpg" class="img-responsive" alt="1" style="mix-blend-mode: multiply;">','<img src="img/i11_p153_act72.jpg" class="img-responsive" alt="2" style="mix-blend-mode: multiply;">'];
    p3vec1.sort(f_randomico);
    for (var i = 0; i < p3vec1.length; i++) {
        $('#p3im'+(i+1)).html(p3vec1[i]);
    }
    bt_comprobar.addEventListener("click", f_preg1);
    function f_preg1() {
        var nota1_1 = $('#nota1_1').val();
        cor = 0;
        inc = 0;
        if (!nota1_1) {
            alert('Ingrese la calificación en la pregunta 4')
        } else {
            cor = cor + parseFloat(nota1_1);
            inc = inc + (3 - parseFloat(nota1_1));
            $('#nota1_1').val(parseFloat(nota1_1).toFixed(2));
            $('#nota1_1').attr('disabled', 'true');
            f_comprobar();
        }
    }
    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_preg1);
        var p1res1 = $('#p1res1 .pintar img').attr('alt');
        if (!p1res1) {
            inc=inc+2;
            f_no($('.p1pint1'));
            f_no($('.p1pint2'));
            f_no($('.p1pint3'));
            f_no($('.p1pint4'));
        }else{
            if (p1res1=='1') {
                cor=cor+2;
                f_ok($('#p1res1 .pintar'));
                $('#p1res1 .pintar').removeClass('pintar');
            }else{
                inc=inc+2;
                f_no($('#p1res1 .pintar'));
                $('#p1res1 .pintar').removeClass('pintar');
            }
        }
        var p1res2 = $('#p1res2 .pintar img').attr('alt');
        if (!p1res2) {
            inc=inc+2;
            f_no($('.p2pint1'));
            f_no($('.p2pint2'));
            f_no($('.p2pint3'));
            f_no($('.p2pint4'));
        }else{
            if (p1res2=='2') {
                cor=cor+2;
                f_ok($('#p1res2 .pintar'));
                $('#p1res2 .pintar').removeClass('pintar');
            }else{
                inc=inc+2;
                f_no($('#p1res2 .pintar'));
                $('#p1res2 .pintar').removeClass('pintar');
            }
        }
        var p3im1=$('#p3im1 img').attr('alt');
        var p3im2=$('#p3im2 img').attr('alt');
        var p3im3=$('#p3im3 img').attr('alt');
        var p3dcon1=$('#p3dcon1').val();
        var p3dcon2=$('#p3dcon2').val();
        var p3dcon3=$('#p3dcon3').val();
        if (p3dcon1==p3im1) {
            cor++;
            f_ok($('#p3dcon1'));
        }else{
            inc++;
            f_no($('#p3dcon1'));
        }
        if (p3dcon2==p3im2) {
            cor++;
            f_ok($('#p3dcon2'));
        }else{
            inc++;
            f_no($('#p3dcon2'));
        }
        if (p3dcon3==p3im3) {
            cor++;
            f_ok($('#p3dcon3'));
        }else{
            inc++;
            f_no($('#p3dcon3'));
        }
        Calculo_nota();
    }
}