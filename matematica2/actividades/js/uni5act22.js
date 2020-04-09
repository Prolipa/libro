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
document.getElementById('pre1a').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('pre1a').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('pre1a'), 2)
});

function f_iniciar() {
    var p2vec1 = [(Math.floor(Math.random() * 10) + 2)];
    var p2pt1 = (Math.floor(Math.random() * 9) + 2);
    for (var i = 0; i < 9; i++) {
        p2vec1.push(p2vec1[i] + p2pt1);
    }
    $('#p2im1').text(p2vec1[0]);
    $('#p2im2').text(p2vec1[1]);
    $('#p2im3').text(p2vec1[2]);
    var p2vec2 = [(Math.floor(Math.random() * 10) + 50)];
    var p2pt2 = (Math.floor(Math.random() * 6) + 2);
    for (var i = 0; i < 9; i++) {
        p2vec2.push(p2vec2[i] + p2pt2);
    }
    $('#p2im11').text(p2vec2[0]);
    $('#p2im12').text(p2vec2[1]);
    $('#p2im13').text(p2vec2[2]);
    var p2vec3 = [(Math.floor(Math.random() * 30) + 10)];
    var p2pt3 = (Math.floor(Math.random() * 6) + 2);
    for (var i = 0; i < 9; i++) {
        p2vec3.push(p2vec3[i] + p2pt3);
    }
    $('#p2im21').text(p2vec3[0]);
    $('#p2im22').text(p2vec3[1]);
    $('#p2im23').text(p2vec3[2]);

    var p3n1=(Math.floor(Math.random() * 40) + 10);
    var p3n2=(Math.floor(Math.random() * 40) + 10);
    var p3c1=p3n1.toString().split('');
    var p3c2=p3n2.toString().split('');
    var p3vec1=[];
    var p3vec2=[];
    var p3vec3=[];
    var p3vec4=[];
    for (var i = 0; i < parseInt(p3c1[0]); i++) {
        p3vec1.push('<img src="img/i1_p208_u5a22.jpg" class="img-responsive">');
    }
    for (var i = 0; i < parseInt(p3c1[1]); i++) {
        p3vec2.push('<img src="img/i2_p208_u5a22.jpg" class="img-responsive">');
    }
    for (var i = 0; i < parseInt(p3c2[0]); i++) {
        p3vec3.push('<img src="img/i1_p208_u5a22.jpg" class="img-responsive">');
    }
    for (var i = 0; i < parseInt(p3c2[1]); i++) {
        p3vec4.push('<img src="img/i2_p208_u5a22.jpg" class="img-responsive">');
    }
    $('#p3im1').html(p3vec1);
    $('#p3im2').html(p3vec2);
    $('#p3im3').html(p3vec3);
    $('#p3im4').html(p3vec4);
    $('#nlrd0').val(p3c1[0]);
    $('#nlrd0').attr('disabled', 'true');
    $('#nlrd1').val(p3c1[1]);
    $('#nlrd1').attr('disabled', 'true');
    $('#nlrd2').val(p3c2[0]);
    $('#nlrd2').attr('disabled', 'true');
    $('#nlrd3').val(p3c2[1]);
    $('#nlrd3').attr('disabled', 'true');

    var p3n3=(Math.floor(Math.random() * 40) + 10);
    var p3n4=(Math.floor(Math.random() * 40) + 10);
    var p3c3=p3n3.toString().split('');
    var p3c4=p3n4.toString().split('');
    var p3vec5=[];
    var p3vec6=[];
    var p3vec7=[];
    var p3vec8=[];
    for (var i = 0; i < parseInt(p3c3[0]); i++) {
        p3vec5.push('<img src="img/i1_p208_u5a22.jpg" class="img-responsive">');
    }
    for (var i = 0; i < parseInt(p3c3[1]); i++) {
        p3vec6.push('<img src="img/i2_p208_u5a22.jpg" class="img-responsive">');
    }
    for (var i = 0; i < parseInt(p3c4[0]); i++) {
        p3vec7.push('<img src="img/i1_p208_u5a22.jpg" class="img-responsive">');
    }
    for (var i = 0; i < parseInt(p3c4[1]); i++) {
        p3vec8.push('<img src="img/i2_p208_u5a22.jpg" class="img-responsive">');
    }
    $('#p3im11').html(p3vec5);
    $('#p3im12').html(p3vec6);
    $('#p3im13').html(p3vec7);
    $('#p3im14').html(p3vec8);
    $('#nlrd10').val(p3c3[0]);
    $('#nlrd10').attr('disabled', 'true');
    $('#nlrd11').val(p3c3[1]);
    $('#nlrd11').attr('disabled', 'true');
    $('#nlrd12').val(p3c4[0]);
    $('#nlrd12').attr('disabled', 'true');
    $('#nlrd13').val(p3c4[1]);
    $('#nlrd13').attr('disabled', 'true');

    var p4vec1=[];
    var myArray1 = [];
    for (var i = 40; i < 98; i++) {
        p4vec1.push(i);
        myArray1.push(i-40);
    }
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    
    var p4vec2=[];
    var myArray2 = [];
    for (var i = 10; i < 39; i++) {
        p4vec2.push(i);
        myArray2.push(i-10);
    }
    var i, j, k;
    for (i = myArray2.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray2[i - 1];
        myArray2[i - 1] = myArray2[j];
        myArray2[j] = k;
    }
    var c = myArray1[5];
    var p4n1=p4vec1[c];
    var c1 = myArray2[6];
    var p4n2=p4vec2[c1];
    var p4d1=p4n1.toString().split('');
    var p4d2=p4n2.toString().split('');
    if (p4d1[1]<p4d2[1]) {
        var p4c1=p4d1[1];
        var p4c2=p4d2[1];
        p4d1[1]=p4c2;
        p4d2[1]=p4c1;
        p4n1=p4d1.join('');
        p4n2=p4d2.join('');
    }
    var p4n3=parseInt(p4n1)-parseInt(p4n2);
    var p4sp1=p4n3.toString().split('');
    var p4sp2=p4n2.toString().split('');
    var p4sp3=p4n1.toString().split('');
    var p4vc1=[];
    var p4vc2=[];
    for (var i = 0; i < parseInt(p4sp2[0]); i++) {
        p4vc1.push('<img src="img/i3_p208_u5a22.jpg" class="img-responsive">');
    }
    for (var i = 0; i < parseInt(p4sp1[0]); i++) {
        p4vc1.push('<img src="img/i1_p208_u5a22.jpg" class="img-responsive">');
    }
    for (var i = 0; i < parseInt(p4sp2[1]); i++) {
        p4vc2.push('<img src="img/i4_p208_u5a22.jpg" class="img-responsive">');
    }
    for (var i = 0; i < parseInt(p4sp1[1]); i++) {
        p4vc2.push('<img src="img/i2_p208_u5a22.jpg" class="img-responsive">');
    }
    $('#p4im1').html(p4vc1);
    $('#p4im2').html(p4vc2);
    $('#nlrd20').val(p4sp3[0]);
    $('#nlrd20').attr('disabled', 'true');
    $('#nlrd21').val(p4sp3[1]);
    $('#nlrd21').attr('disabled', 'true');
    $('#nlrd22').val(p4sp2[0]);
    $('#nlrd22').attr('disabled', 'true');
    $('#nlrd23').val(p4sp2[1]);
    $('#nlrd23').attr('disabled', 'true');

    var c2 = myArray1[0];
    var p4n4=p4vec1[c2];
    var c3 = myArray2[1];
    var p4n5=p4vec2[c3];
    var p4d3=p4n4.toString().split('');
    var p4d4=p4n5.toString().split('');
    if (p4d3[1]<p4d4[1]) {
        var p4c1=p4d3[1];
        var p4c2=p4d4[1];
        p4d3[1]=p4c2;
        p4d4[1]=p4c1;
        p4n4=p4d3.join('');
        p4n5=p4d4.join('');
    }
    var p4n6=parseInt(p4n4)-parseInt(p4n5);
    var p4sp4=p4n6.toString().split('');
    var p4sp5=p4n5.toString().split('');
    var p4sp6=p4n4.toString().split('');
    var p4vc3=[];
    var p4vc4=[];
    for (var i = 0; i < parseInt(p4sp5[0]); i++) {
        p4vc3.push('<img src="img/i3_p208_u5a22.jpg" class="img-responsive">');
    }
    for (var i = 0; i < parseInt(p4sp4[0]); i++) {
        p4vc3.push('<img src="img/i1_p208_u5a22.jpg" class="img-responsive">');
    }
    for (var i = 0; i < parseInt(p4sp5[1]); i++) {
        p4vc4.push('<img src="img/i4_p208_u5a22.jpg" class="img-responsive">');
    }
    for (var i = 0; i < parseInt(p4sp4[1]); i++) {
        p4vc4.push('<img src="img/i2_p208_u5a22.jpg" class="img-responsive">');
    }
    $('#p4im11').html(p4vc3);
    $('#p4im12').html(p4vc4);
    $('#nlrd30').val(p4sp6[0]);
    $('#nlrd30').attr('disabled', 'true');
    $('#nlrd31').val(p4sp6[1]);
    $('#nlrd31').attr('disabled', 'true');
    $('#nlrd32').val(p4sp5[0]);
    $('#nlrd32').attr('disabled', 'true');
    $('#nlrd33').val(p4sp5[1]);
    $('#nlrd33').attr('disabled', 'true');
    bt_comprobar.addEventListener("click", preg1);

    function preg1() {
        cor = 0;
        var pre1a = $('#pre1a').val();
        if (!pre1a) {
            alert('Ingrese la calificación en la Pregunta 1.')
        } else {
            cor = cor + parseFloat(pre1a);
            inc = inc + (2 - parseFloat(pre1a));
            $('#pre1a').val(parseFloat(pre1a).toFixed(2));
            $('#pre1a').attr('disabled', 'true');
            if (pre1a >= 1.5) {
                f_ok($('#p1fe1'));
            } else {
                f_no($('#p1tr1'));
            }
            f_comprobar();
        }

    }

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", preg1);
        var p2cont1 = 0;
        for (var i = 3; i < p2vec1.length; i++) {
            var p2res1 = $('#p2dcon' + (i - 2)).val();
            if (p2res1 == p2vec1[i]) {
                p2cont1++;
                f_ok($('#p2dcon' + (i - 2)));
            } else {
                p2cont1;
                f_no($('#p2dcon' + (i - 2)));
            }
        }
        var p2dcon8 = $('#p2dcon8').val();
        if (p2dcon8 == p2pt1) {
            p2cont1++;
            f_ok($('#p2dcon8'));
        } else {
            p2cont1;
            f_no($('#p2dcon8'));
        }
        for (var i = 3; i < p2vec2.length; i++) {
            var p2res2 = $('#p2dcon1' + (i - 2)).val();
            if (p2res2 == p2vec2[i]) {
                p2cont1++;
                f_ok($('#p2dcon1' + (i - 2)));
            } else {
                p2cont1;
                f_no($('#p2dcon1' + (i - 2)));
            }
        }
        var p2dcon18 = $('#p2dcon18').val();
        if (p2dcon18 == p2pt2) {
            p2cont1++;
            f_ok($('#p2dcon18'));
        } else {
            p2cont1;
            f_no($('#p2dcon18'));
        }
        for (var i = 3; i < p2vec3.length; i++) {
            var p2res3 = $('#p2dcon2' + (i - 2)).val();
            if (p2res3 == p2vec3[i]) {
                p2cont1++;
                f_ok($('#p2dcon2' + (i - 2)));
            } else {
                p2cont1;
                f_no($('#p2dcon2' + (i - 2)));
            }
        }
        var p2dcon28 = $('#p2dcon28').val();
        if (p2dcon28 == p2pt3) {
            p2cont1++;
            f_ok($('#p2dcon28'));
        } else {
            p2cont1;
            f_no($('#p2dcon28'));
        }
        var result2 = (p2cont1 * 2) / 24;
        cor = cor + result2;
        inc = inc + (2 - result2);
        $('#pre2a').val(result2.toFixed(2));
        $('#pre2a').css('display', '');
        if (result2 >= 1.5) {
            f_ok($('#p1fe2'));
        } else {
            f_no($('#p1tr2'));
        }

        var nlrd4=[$('#nlrd4').val(),$('#nlrd5').val()];
        nlrd4=nlrd4.join('');
        var nlrd5=[$('#nlrd14').val(),$('#nlrd15').val()];
        nlrd5=nlrd5.join('');
        var p3cont1=0;
        if (nlrd4 == (p3n1+p3n2)) {
            p3cont1++;
            f_ok($('#nlrd4'));
            f_ok($('#nlrd5'));
        } else {
            p3cont1;
            f_no($('#nlrd4'));
            f_no($('#nlrd5'));
        }
        if (nlrd5 == (p3n3+p3n4)) {
            p3cont1++;
            f_ok($('#nlrd14'));
            f_ok($('#nlrd15'));
        } else {
            p3cont1;
            f_no($('#nlrd14'));
            f_no($('#nlrd15'));
        }
        var result3 = (p3cont1 * 2) / 2;
        cor = cor + result3;
        inc = inc + (2 - result3);
        $('#pre3a').val(result3.toFixed(2));
        $('#pre3a').css('display', '');
        if (result3 >= 1.5) {
            f_ok($('#p1fe3'));
        } else {
            f_no($('#p1tr3'));
        }

        var nlrd6=[$('#nlrd24').val(),$('#nlrd25').val()];
        nlrd6=nlrd6.join('');
        var nlrd7=[$('#nlrd34').val(),$('#nlrd35').val()];
        nlrd7=nlrd7.join('');
        var p4cont1=0;
        if (nlrd6 == p4n3) {
            p4cont1++;
            f_ok($('#nlrd24'));
            f_ok($('#nlrd25'));
        } else {
            p4cont1;
            f_no($('#nlrd24'));
            f_no($('#nlrd25'));
        }
        if (nlrd7 == p4n6) {
            p4cont1++;
            f_ok($('#nlrd34'));
            f_ok($('#nlrd35'));
        } else {
            p4cont1;
            f_no($('#nlrd34'));
            f_no($('#nlrd35'));
        }
        var result4 = (p4cont1 * 2) / 2;
        cor = cor + result4;
        inc = inc + (2 - result4);
        $('#pre4a').val(result4.toFixed(2));
        $('#pre4a').css('display', '');
        if (result4 >= 1.5) {
            f_ok($('#p1fe4'));
        } else {
            f_no($('#p1tr4'));
        }

        var p5dcon1=$('#p5dcon1').val();
        var p5dcon2=$('#p5dcon2').val();
        var p5dcon3=$('#p5dcon3').val();
        var p5dcon4=$('#p5dcon4').val();
        var p5dcon5=$('#p5dcon5').val();
        var p5dcon6=$('#p5dcon6').val();
        var p5cont1=0;
        if (p5dcon1 == 'febrero') {
            p5cont1++;
            f_ok($('#p5dcon1'));
        } else {
            p5cont1;
            f_no($('#p5dcon1'));
        }
        if (p5dcon2 == 'diciembre') {
            p5cont1++;
            f_ok($('#p5dcon2'));
        } else {
            p5cont1;
            f_no($('#p5dcon2'));
        }
        if (p5dcon3 == 'mayo') {
            p5cont1++;
            f_ok($('#p5dcon3'));
        } else {
            p5cont1;
            f_no($('#p5dcon3'));
        }
        if (p5dcon4 == 'julio') {
            p5cont1++;
            f_ok($('#p5dcon4'));
        } else {
            p5cont1;
            f_no($('#p5dcon4'));
        }
        if (p5dcon5 == '12') {
            p5cont1++;
            f_ok($('#p5dcon5'));
        } else {
            p5cont1;
            f_no($('#p5dcon5'));
        }
        if (p5dcon6 == '24') {
            p5cont1++;
            f_ok($('#p5dcon6'));
        } else {
            p5cont1;
            f_no($('#p5dcon6'));
        }
        var result5 = (p5cont1 * 1) / 6;
        cor = cor + result5;
        inc = inc + (1 - result5);
        $('#pre5a').val(result5.toFixed(2));
        $('#pre5a').css('display', '');
        if (result5 >= 0.6) {
            f_ok($('#p1fe5'));
        } else {
            f_no($('#p1tr5'));
        }

        var p6dcon1=$('#p6dcon1').val();
        var p6dcon2=$('#p6dcon2').val();
        var p6dcon3=$('#p6dcon3').val();
        var p6cont1=0;
        if (p6dcon1 == '4') {
            p6cont1++;
            f_ok($('#p6dcon1'));
        } else {
            p6cont1;
            f_no($('#p6dcon1'));
        }
        if (p6dcon2 == '5') {
            p6cont1++;
            f_ok($('#p6dcon2'));
        } else {
            p6cont1;
            f_no($('#p6dcon2'));
        }
        if (p6dcon3 == '10') {
            p6cont1++;
            f_ok($('#p6dcon3'));
        } else {
            p6cont1;
            f_no($('#p6dcon3'));
        }
        var result6 = (p6cont1 * 1) / 3;
        cor = cor + result6;
        inc = inc + (1 - result6);
        $('#pre6a').val(result6.toFixed(2));
        $('#pre6a').css('display', '');
        if (result6 >= 0.6) {
            f_ok($('#p1fe6'));
        } else {
            f_no($('#p1tr6'));
        }
        Calculo_nota();
    }
}