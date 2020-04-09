var n1 = 0,
    n2 = 0,
    sum_total = 0,
    sum_total2 = 0,
    sum_total3 = 0,
    sum_total4 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 14,
    cor = 0,
    inc = 0,
    str = '',
    str2 = '',
    str3 = '',
    str4 = '',
    calificacion = 10;

var t1 = 0;
var claseAnimada = 'animate bounceIn';
f_iniciar();

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}
$('.pint1').click(function() {
    if ($(this).hasClass('pinta')) {
        $(this).removeClass('pinta');
    }else{
        $(this).addClass('pinta');
    }
});
function f_iniciar() {
    var p1n1=(Math.floor(Math.random() * 10) + 1);
    var p1n2=(Math.floor(Math.random() * 10) + 1);
    var p1n3=(Math.floor(Math.random() * 10) + 1);
    $('#p1i1').text(p1n1);
    $('#p1cim1').text(p1n1);
    $('#p1cim2').text(p1n1);
    $('#p1cim3').text(p1n1);
    $('#p1cim4').text((p1n1*2));
    var p1vec1=[];
    for (var i = 0; i < p1n1; i++) {
        p1vec1.push('<img src="img/i1_p191_u5a11.jpg" alt="">');
    }
    $('#p1im1').html(p1vec1);
    var p1vec2=[];
    for (var i = 0; i < p1n2; i++) {
        p1vec2.push('<img src="img/i2_p191_u5a11.jpg" alt="">');
    }
    $('#p1im2').html(p1vec2);
    var p1vec3=[];
    for (var i = 0; i < p1n3; i++) {
        p1vec3.push('<img src="img/i3_p191_u5a11.jpg" alt="">');
    }
    $('#p1im3').html(p1vec3);
    bt_comprobar.addEventListener("click", f_comprobar);
    
    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1res1=$('#p1res1 .pinta').length;
        var p1res2=$('#p1res2 .pinta').length;
        var p1res3=$('#p1res3 .pinta').length;
        if (p1res1!=0) {
            if (p1res1==(p1n1*2)) {
                cor++;
                f_ok($('#p1res1 .pinta'));
                $('#p1res1 .pinta').removeClass('pinta');
            }else{
                inc++;
                f_no($('#p1res1 .pinta'));
                $('#p1res1 .pinta').removeClass('pinta');
            }
        }else{
            inc++;
            f_no($('.1'));
        }
        if (p1res2!=0) {
            if (p1res2==(p1n2*3)) {
                cor++;
                f_ok($('#p1res2 .pinta'));
                $('#p1res2 .pinta').removeClass('pinta');
            }else{
                inc++;
                f_no($('#p1res2 .pinta'));
                $('#p1res2 .pinta').removeClass('pinta');
            }
        }else{
            inc++;
            f_no($('.2'));
        }
        if (p1res3!=0) {
            if (p1res3==(p1n3*2)) {
                cor++;
                f_ok($('#p1res3 .pinta'));
                $('#p1res3 .pinta').removeClass('pinta');
            }else{
                inc++;
                f_no($('#p1res3 .pinta'));
                $('#p1res3 .pinta').removeClass('pinta');
            }
        }else{
            inc++;
            f_no($('.3'));
        }
        var p1dcon1=$('#p1dcon1').val();
        var p1dcon2=$('#p1dcon2').val();
        var p1dcon3=$('#p1dcon3').val();
        var p1dcon4=$('#p1dcon4').val();
        var p1dcon5=$('#p1dcon5').val();
        var p1dcon6=$('#p1dcon6').val();
        var p1dcon7=$('#p1dcon7').val();
        var p1dcon8=$('#p1dcon8').val();
        var p1dcon9=$('#p1dcon9').val();
        var p1dcon10=$('#p1dcon10').val();
        var p1dcon11=$('#p1dcon11').val();
        if (p1dcon1==p1n2) {
            cor++;
            f_ok($('#p1dcon1'));
        }else{
            inc++;
            f_no($('#p1dcon1'));
        }
        if (p1dcon2==p1n3) {
            cor++;
            f_ok($('#p1dcon2'));
        }else{
            inc++;
            f_no($('#p1dcon2'));
        }
        if (p1dcon3==p1n2) {
            cor++;
            f_ok($('#p1dcon3'));
        }else{
            inc++;
            f_no($('#p1dcon3'));
        }
        if (p1dcon4==p1n2) {
            cor++;
            f_ok($('#p1dcon4'));
        }else{
            inc++;
            f_no($('#p1dcon4'));
        }
        if (p1dcon5==p1n2) {
            cor++;
            f_ok($('#p1dcon5'));
        }else{
            inc++;
            f_no($('#p1dcon5'));
        }
        if (p1dcon6==p1n2) {
            cor++;
            f_ok($('#p1dcon6'));
        }else{
            inc++;
            f_no($('#p1dcon6'));
        }
        if (p1dcon7==(p1n2*3)) {
            cor++;
            f_ok($('#p1dcon7'));
        }else{
            inc++;
            f_no($('#p1dcon7'));
        }
        if (p1dcon8==p1n3) {
            cor++;
            f_ok($('#p1dcon8'));
        }else{
            inc++;
            f_no($('#p1dcon8'));
        }
        if (p1dcon9==p1n3) {
            cor++;
            f_ok($('#p1dcon9'));
        }else{
            inc++;
            f_no($('#p1dcon9'));
        }
        if (p1dcon10==p1n3) {
            cor++;
            f_ok($('#p1dcon10'));
        }else{
            inc++;
            f_no($('#p1dcon10'));
        }
        if (p1dcon11==(p1n3*2)) {
            cor++;
            f_ok($('#p1dcon11'));
        }else{
            inc++;
            f_no($('#p1dcon11'));
        }
        Calculo_nota();
    }
}