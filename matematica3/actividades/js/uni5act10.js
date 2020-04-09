var n1 = 0,
    n2 = 0,
    sum_total = 0,
    sum_total2 = 0,
    sum_total3 = 0,
    sum_total4 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 10,
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
$('.1').click(function() {
    switch ($(this).attr('class')) {
        case '1 enc1':
            $('.enc1').addClass('pinta');
            $('.enc2').removeClass('pinta');
            $('.enc3').removeClass('pinta');

            break;
        case '1 enc2':
            $('.enc2').addClass('pinta');
            $('.enc1').removeClass('pinta');
            $('.enc3').removeClass('pinta');
            break;
        case '1 enc3':
            $('.enc3').addClass('pinta');
            $('.enc1').removeClass('pinta');
            $('.enc2').removeClass('pinta');

            break;
    }
});
$('.2').click(function() {
    switch ($(this).attr('class')) {
        case '2 enc4':
            $('.enc4').addClass('pinta1');
            $('.enc5').removeClass('pinta1');
            $('.enc6').removeClass('pinta1');

            break;
        case '2 enc5':
            $('.enc5').addClass('pinta1');
            $('.enc4').removeClass('pinta1');
            $('.enc6').removeClass('pinta1');
            break;
        case '2 enc6':
            $('.enc6').addClass('pinta1');
            $('.enc4').removeClass('pinta1');
            $('.enc5').removeClass('pinta1');

            break;
    }
});
$('.3').click(function() {
    switch ($(this).attr('class')) {
        case '3 enc7':
            $('.enc7').addClass('pinta2');
            $('.enc8').removeClass('pinta2');
            $('.enc9').removeClass('pinta2');

            break;
        case '3 enc8':
            $('.enc8').addClass('pinta2');
            $('.enc7').removeClass('pinta2');
            $('.enc9').removeClass('pinta2');
            break;
        case '3 enc9':
            $('.enc9').addClass('pinta2');
            $('.enc7').removeClass('pinta2');
            $('.enc8').removeClass('pinta2');

            break;
    }
});
$('.4').click(function() {
    switch ($(this).attr('class')) {
        case '4 enc10':
            $('.enc10').addClass('pinta3');
            $('.enc11').removeClass('pinta3');
            $('.enc12').removeClass('pinta3');

            break;
        case '4 enc11':
            $('.enc11').addClass('pinta3');
            $('.enc10').removeClass('pinta3');
            $('.enc12').removeClass('pinta3');
            break;
        case '4 enc12':
            $('.enc12').addClass('pinta3');
            $('.enc10').removeClass('pinta3');
            $('.enc11').removeClass('pinta3');

            break;
    }
});
function f_iniciar() {
    var p1vec1 = [];
    for (var i = 10; i < 90; i++) {
        if (i%10==0) {
            p1vec1;
        }else{
            p1vec1.push(i);
        }
    }
    p1vec1.sort(f_randomico);
    var p1vec2=[p1vec1[0],p1vec1[1],p1vec1[2],p1vec1[3],p1vec1[4]];
    $('#p1im1').html(p1vec2[0]);
    $('#p1im2').html(p1vec2[1]);
    $('#p1im3').html(p1vec2[2]);
    $('#p1im4').html(p1vec2[3]);
    $('#p1im5').html(p1vec2[4]);
    var p1vc1=p1vec2[0].toString().split('');
    var p1vc2=p1vec2[1].toString().split('');
    var p1vc3=p1vec2[2].toString().split('');
    var p1vc4=p1vec2[3].toString().split('');
    var p1vc5=p1vec2[4].toString().split('');
    var p1v1=[];
    p1v1.push(parseInt(p1vc1[0])*10);
    p1v1.push((parseInt(p1vc1[0])*10)+10);
    p1v1.push(parseInt(p1vc2[0])*10);
    p1v1.push((parseInt(p1vc2[0])*10)+10);
    p1v1.push(parseInt(p1vc3[0])*10);
    p1v1.push((parseInt(p1vc3[0])*10)+10);
    p1v1.push(parseInt(p1vc4[0])*10);
    p1v1.push((parseInt(p1vc4[0])*10)+10);
    p1v1.push(parseInt(p1vc5[0])*10);
    p1v1.push((parseInt(p1vc5[0])*10)+10);

    var p2vec1=[p1vec1[5],p1vec1[6],p1vec1[7],p1vec1[8],p1vec1[9],p1vec1[10],p1vec1[11],p1vec1[12],p1vec1[13]];
    $('#p2im1').html(p2vec1[0]);
    $('#p2im2').html(p2vec1[1]);
    $('#p2im3').html(p2vec1[2]);
    $('#p2im4').html(p2vec1[3]);
    $('#p2im5').html(p2vec1[4]);
    $('#p2im6').html(p2vec1[5]);
    $('#p2im7').html(p2vec1[6]);
    $('#p2im8').html(p2vec1[7]);
    $('#p2im9').html(p2vec1[8]);
    var p2vec2=[Math.round(p1vec1[5]/10.0) * 10,Math.round(p1vec1[6]/10.0) * 10,Math.round(p1vec1[7]/10.0) * 10,Math.round(p1vec1[8]/10.0) * 10,Math.round(p1vec1[9]/10.0) * 10,Math.round(p1vec1[10]/10.0) * 10,Math.round(p1vec1[11]/10.0) * 10,Math.round(p1vec1[12]/10.0) * 10,Math.round(p1vec1[13]/10.0) * 10];

    var p3vec1=[p1vec1[14],p1vec1[15]]; 
    var p3vec2=[Math.round(p1vec1[14]/10.0) * 10,Math.round(p1vec1[15]/10.0) * 10]
    $('#p3im1').html(p3vec1[0]);
    $('#p3im2').html(p3vec1[1]);
    bt_comprobar.addEventListener("click", f_comprobar);
    
    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1cont1=0;
        for (var i = 0; i < p1v1.length; i++) {
            var p1res1=$('#p1dcon'+(i+1)).val();
            if (p1res1==p1v1[i]) {
                p1cont1++;
                f_ok($('#p1dcon'+(i+1)));
            }else{
                p1cont1;
                f_no($('#p1dcon'+(i+1)));
            }
        }
        var result1 = (p1cont1 * 4) / 10;
        cor = cor + result1;
        inc = inc + (4 - result1);
        $('#pre1a').val(result1.toFixed(2));
        $('#pre1a').css('display', '');

        var p2cont1=0;
        for (var i = 0; i < p2vec2.length; i++) {
            var p2res1=$('#p2dcon'+(i+1)).val();
            if (p2res1==p2vec2[i]) {
                p2cont1++;
                f_ok($('#p2dcon'+(i+1)));
            }else{
                p2cont1;
                f_no($('#p2dcon'+(i+1)));
            }
        }
        var result2 = (p2cont1 * 4) / 9;
        cor = cor + result2;
        inc = inc + (4 - result2);
        $('#pre2a').val(result2.toFixed(2));
        $('#pre2a').css('display', '');

        var p3cont1=0;
        for (var i = 0; i < p3vec2.length; i++) {
            var p3res1=$('#p3dcon'+(i+1)).val();
            if (p3res1==p3vec2[i]) {
                p3cont1++;
                f_ok($('#p3dcon'+(i+1)));
            }else{
                p3cont1;
                f_no($('#p3dcon'+(i+1)));
            }
        }
        var result3 = (p3cont1 * 2) / 2;
        cor = cor + result3;
        inc = inc + (4 - result3);
        $('#pre3a').val(result3.toFixed(2));
        $('#pre3a').css('display', '');
        Calculo_nota();
    }
}