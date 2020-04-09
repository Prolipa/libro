    var calificacion = 10,
        cor = 0,
        inc = 0,
        cont = 0,
        ejer = 1,
        itemsT = 10;
    f_iniciar();
    var claseAnimada = 'animate bounceIn';

    function mayus(e) {
        e.value = e.value.toLowerCase();
    }
    $('.1').click(function() {
        switch ($(this).attr('class')) {
            case '1 pint1':
                $('.pint1').addClass('pinta');
                $('.pint2').removeClass('pinta');
                $('.pint3').removeClass('pinta');
                break;
            case '1 pint2':
                $('.pint2').addClass('pinta');
                $('.pint1').removeClass('pinta');
                $('.pint3').removeClass('pinta');
                break;
            case '1 pint3':
                $('.pint3').addClass('pinta');
                $('.pint1').removeClass('pinta');
                $('.pint2').removeClass('pinta');
                break;
        }
    });
    $('.2').click(function() {
        switch ($(this).attr('class')) {
            case '2 pint11':
                $('.pint11').addClass('pinta');
                $('.pint12').removeClass('pinta');
                $('.pint13').removeClass('pinta');
                break;
            case '2 pint12':
                $('.pint12').addClass('pinta');
                $('.pint11').removeClass('pinta');
                $('.pint13').removeClass('pinta');
                break;
            case '2 pint13':
                $('.pint13').addClass('pinta');
                $('.pint11').removeClass('pinta');
                $('.pint12').removeClass('pinta');
                break;
        }
    });
    $('.3').click(function() {
        switch ($(this).attr('class')) {
            case '3 pint21':
                $('.pint21').addClass('pinta');
                $('.pint22').removeClass('pinta');
                $('.pint23').removeClass('pinta');
                break;
            case '3 pint22':
                $('.pint22').addClass('pinta');
                $('.pint21').removeClass('pinta');
                $('.pint23').removeClass('pinta');
                break;
            case '3 pint23':
                $('.pint23').addClass('pinta');
                $('.pint21').removeClass('pinta');
                $('.pint22').removeClass('pinta');
                break;
        }
    });
    $('.4').click(function() {
        switch ($(this).attr('class')) {
            case '4 pint31':
                $('.pint31').addClass('pinta');
                $('.pint32').removeClass('pinta');
                $('.pint33').removeClass('pinta');
                break;
            case '4 pint32':
                $('.pint32').addClass('pinta');
                $('.pint31').removeClass('pinta');
                $('.pint33').removeClass('pinta');
                break;
            case '4 pint33':
                $('.pint33').addClass('pinta');
                $('.pint31').removeClass('pinta');
                $('.pint32').removeClass('pinta');
                break;
        }
    });
    function f_iniciar() {
        var p1vec1=[(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 500) + 100)];
        $('#p1im1').text(p1vec1[0]);
        $('#p1im2').text(p1vec1[1]);
        $('#p1im3').text(p1vec1[0]);
        $('#p1im4').text(p1vec1[1]);
        $('#p1im5').text(p1vec1[0]+'000');
        var p2vec1 = [
            ['<img src="img/i1_p202_u5a11.jpg" class="img-responsive" alt="">', 0],
            ['<img src="img/i2_p202_u5a11.jpg" class="img-responsive" alt="">', 1],
            ['<img src="img/i3_p202_u5a11.jpg" class="img-responsive" alt="">', 2],
            ['<img src="img/i4_p202_u5a11.jpg" class="img-responsive" alt="">', 3],
        ];
        var p2vec2 = [
            ['<div style=" border: 2px solid #F7ADB4; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="1 pint1">1 000 g</div>',
                '<div style=" border: 2px solid #F7ADB4; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="1 pint2">2 000 g</div>',
                '<div style=" border: 2px solid #F7ADB4; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="1 pint3">3 000 g</div>'
            ],
            ['<div style=" border: 2px solid #F7ADB4; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="2 pint11">7 000 g</div>',
                '<div style=" border: 2px solid #F7ADB4; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="2 pint12">8 000 g</div>',
                '<div style=" border: 2px solid #F7ADB4; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="2 pint13">9 000 g</div>'
            ],
            ['<div style=" border: 2px solid #F7ADB4; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="3 pint21">2 000 g</div>',
                '<div style=" border: 2px solid #F7ADB4; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="3 pint22">3 000 g</div>',
                '<div style=" border: 2px solid #F7ADB4; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="3 pint23">4 000 g</div>'
            ],
            ['<div style=" border: 2px solid #F7ADB4; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="4 pint31">7 000 g</div>',
                '<div style=" border: 2px solid #F7ADB4; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="4 pint32">8 000 g</div>',
                '<div style=" border: 2px solid #F7ADB4; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="4 pint33">9 000 g</div>'
            ],
        ];
        p2vec1.sort(f_randomico);
        for (var i = 0; i < 4; i++) {
            $('#p2im' + (i + 1)).html(p2vec1[i][0]);
            p2vec2[i].sort(f_randomico);
        }
        for (var i = 0; i < 4; i++) {
            $('#p2cim' + (i + 1)).html(p2vec2[p2vec1[i][1]]);
        }

        var p3vec1=[(Math.floor(Math.random() * 8) + 2),(Math.floor(Math.random() * 8) + 2)];
        $('#p3im1').text(p3vec1[0]);
        $('#p3im2').text(p3vec1[1]);
        bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar() {
            cont++;
            AgregaClase(".nota", claseAnimada);
            QuitaClase(".actividad", claseAnimada);
            bt_comprobar.removeEventListener("click", f_comprobar);
            var p1dcon1=$('#p1dcon1').val()+$('#p1dcon2').val()+$('#p1dcon3').val();
            var p1dcon4=$('#p1dcon4').val()+$('#p1dcon5').val();
            var p1dcon6=$('#p1dcon6').val();
            var p1aux1=p1vec1[0]+'1000'+p1vec1[0]+'000';
            var p1aux2=p1vec1[1]+''+p1vec1[0]+''+p1vec1[1];
            var p1cont1=0;
            if (p1dcon1==p1aux1) {
                p1cont1++;
                f_ok($('#p1dcon1'));
                f_ok($('#p1dcon2'));
                f_ok($('#p1dcon3'));
            }else{
                p1cont1;
                f_no($('#p1dcon1'));
                f_no($('#p1dcon2'));
                f_no($('#p1dcon3'));
            }
            if (p1dcon4==p1aux2) {
                p1cont1++;
                f_ok($('#p1dcon4'));
                f_ok($('#p1dcon5'));
            }else{
                p1cont1;
                f_no($('#p1dcon4'));
                f_no($('#p1dcon5'));
            }
            if (p1dcon6==p1vec1[0]+''+p1vec1[1]) {
                p1cont1++;
                f_ok($('#p1dcon6'));
            }else{
                p1cont1;
                f_no($('#p1dcon6'));
            }
            var result1 = (p1cont1 * 2) / 3;
            cor = cor + result1;
            inc = inc + (2 - result1);
            $('#pre1a').val(result1.toFixed(2));
            $('#pre1a').css('display', '');

            var p2cont1 = 0;
            var p2vec3 = ['2 000 g', '7 000 g', '4 000 g', '9 000 g'];
            for (var i = 0; i < 4; i++) {
                var p2cim1 = $('#p2cim'+(i+1)+' .pinta').html();
                if (!p2cim1) {
                    p2cont1;
                    f_no($('.'+(p2vec1[i][1]+1)));
                } else {
                    if (p2cim1 == p2vec3[p2vec1[i][1]]) {
                        p2cont1++;
                        f_ok($('#p2cim'+(i+1)+' .pinta'));
                        $('#p2cim'+(i+1)+' .pinta').removeClass('pinta');
                    } else {
                        p2cont1;
                        f_no($('#p2cim'+(i+1)+' .pinta'));
                        $('#p2cim'+(i+1)+' .pinta').removeClass('pinta');
                    }
                }
            }
            var result2 = (p2cont1 * 3) / 4;
            cor = cor + result2;
            inc = inc + (3 - result2);
            $('#pre2a').val(result2.toFixed(2));
            $('#pre2a').css('display', '');

            var p3dcon1=$('#p3dcon1').val();
            var p3dcon2=$('#p3dcon2').val();
            var p3dcon3=$('#p3dcon3').val();
            var p3dcon4=$('#p3dcon4').val();
            var p3cont1=0;
            if (p3dcon1== p3vec1[0]) {
                p3cont1++;
                f_ok($('#p3dcon1'));
            }else{
                p3cont1;
                f_no($('#p3dcon1'));
            }
            if (p3dcon2== p3vec1[0]*310) {
                p3cont1++;
                f_ok($('#p3dcon2'));
            }else{
                p3cont1;
                f_no($('#p3dcon2'));
            }
            if (p3dcon3== p3vec1[1]) {
                p3cont1++;
                f_ok($('#p3dcon3'));
            }else{
                p3cont1;
                f_no($('#p3dcon3'));
            }
            if (p3dcon4== p3vec1[1]*125) {
                p3cont1++;
                f_ok($('#p3dcon4'));
            }else{
                p3cont1;
                f_no($('#p3dcon4'));
            }
            var p3dcon5=$('#p3dcon5').val();
            var p3dcon6=$('#p3dcon6').val();
            if (p3dcon5== '10 pavos' || p3dcon5== 'diez pavos' || p3dcon5== '5 conejos' || p3dcon5== 'cinco conejos') {
                p3cont1++;
                f_ok($('#p3dcon5'));
            }else{
                p3cont1;
                f_no($('#p3dcon5'));
            }
            if ((p3dcon6== '10 pavos' || p3dcon6== 'diez pavos' || p3dcon6== '5 conejos' || p3dcon6== 'cinco conejos')&& p3dcon6!=p3dcon5) {
                p3cont1++;
                f_ok($('#p3dcon6'));
            }else{
                p3cont1;
                f_no($('#p3dcon6'));
            }
            var p3dcon7=$('#p3dcon7').val();
            if (p3dcon7== '7000') {
                p3cont1++;
                f_ok($('#p3dcon7'));
            }else{
                p3cont1;
                f_no($('#p3dcon7'));
            }
            var result3 = (p3cont1 * 3) / 7;
            cor = cor + result3;
            inc = inc + (3 - result3);
            $('#pre3a').val(result3.toFixed(2));
            $('#pre3a').css('display', '');

            var p4dcon1=$('#p4dcon1').val();
            var p4dcon2=$('#p4dcon2').val();
            var p4dcon3=$('#p4dcon3').val()+$('#p4dcon4').val()+$('#p4dcon5').val();
            var p4cont1=0;
            if (p4dcon1=='3') {
                p4cont1++;
                f_ok($('#p4dcon1'));
            }else{
                p4cont1;
                f_no($('#p4dcon1'));
            }
            if (p4dcon2=='400') {
                p4cont1++;
                f_ok($('#p4dcon2'));
            }else{
                p4cont1;
                f_no($('#p4dcon2'));
            }
            if (p4dcon3=='30004003400') {
                p4cont1++;
                f_ok($('#p4dcon3'));
                f_ok($('#p4dcon4'));
                f_ok($('#p4dcon5'));
            }else{
                p4cont1;
                f_no($('#p4dcon3'));
                f_no($('#p4dcon4'));
                f_no($('#p4dcon5'));
            }
            var act5num1=$('#act5num1').val()+$('#act5num2').val()+$('#act5num3').val()+$('#act5num4').val();
            var act5num5=$('#act5num5').val()+$('#act5num6').val()+$('#act5num7').val()+$('#act5num8').val();
            var act5num9=$('#act5num9').val()+$('#act5num10').val()+$('#act5num11').val()+$('#act5num12').val();
            if (act5num1=='3400') {
                p4cont1++;
                f_ok($('#act5num1'));
                f_ok($('#act5num2'));
                f_ok($('#act5num3'));
                f_ok($('#act5num4'));
            }else{
                p4cont1;
                f_no($('#act5num1'));
                f_no($('#act5num2'));
                f_no($('#act5num3'));
                f_no($('#act5num4'));
            }
            if (act5num5=='2800') {
                p4cont1++;
                f_ok($('#act5num5'));
                f_ok($('#act5num6'));
                f_ok($('#act5num7'));
                f_ok($('#act5num8'));
            }else{
                p4cont1;
                f_no($('#act5num5'));
                f_no($('#act5num6'));
                f_no($('#act5num7'));
                f_no($('#act5num8'));
            }
            if (parseInt(act5num9)=='600') {
                p4cont1++;
                f_ok($('#act5num9'));
                f_ok($('#act5num10'));
                f_ok($('#act5num11'));
                f_ok($('#act5num12'));
            }else{
                p4cont1;
                f_no($('#act5num9'));
                f_no($('#act5num10'));
                f_no($('#act5num11'));
                f_no($('#act5num12'));
            }
            var p4dcon6=$('#p4dcon6').val();
            if (p4dcon6=='600') {
                p4cont1++;
                f_ok($('#p4dcon6'));
            }else{
                p4cont1;
                f_no($('#p4dcon6'));
            }
            var result4 = (p4cont1 * 2) / 7;
            cor = cor + result4;
            inc = inc + (2 - result4);
            $('#pre4a').val(result4.toFixed(2));
            $('#pre4a').css('display', '');
            Calculo_nota()
        }

    }