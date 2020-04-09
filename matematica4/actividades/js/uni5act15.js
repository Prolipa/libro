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
    document.getElementById('pre5a').addEventListener('keypress', () => {
        validNumero(0, 3, 1);
    });
    document.getElementById('pre5a').addEventListener('keyup', () => {
        validMaxIngreso(document.getElementById('pre5a'), 3)
    });
    $('.1').click(function() {
        switch ($(this).attr('class')) {
            case '1 enc1':
                $('.enc1').addClass('encierra');
                $('.enc2').removeClass('encierra');
                $('.enc3').removeClass('encierra');
                $('.enc4').removeClass('encierra');

                break;
            case '1 enc2':
                $('.enc2').addClass('encierra');
                $('.enc1').removeClass('encierra');
                $('.enc3').removeClass('encierra');
                $('.enc4').removeClass('encierra');
                break;
            case '1 enc3':
                $('.enc3').addClass('encierra');
                $('.enc1').removeClass('encierra');
                $('.enc2').removeClass('encierra');
                $('.enc4').removeClass('encierra');

                break;
            case '1 enc4':
                $('.enc4').addClass('encierra');
                $('.enc1').removeClass('encierra');
                $('.enc2').removeClass('encierra');
                $('.enc3').removeClass('encierra');

                break;


        }
    });
    $('.2').click(function() {
        switch ($(this).attr('class')) {
            case '2 enc11':
                $('.enc11').addClass('encierra');
                $('.enc12').removeClass('encierra');
                $('.enc13').removeClass('encierra');
                $('.enc14').removeClass('encierra');

                break;
            case '2 enc12':
                $('.enc12').addClass('encierra');
                $('.enc11').removeClass('encierra');
                $('.enc13').removeClass('encierra');
                $('.enc14').removeClass('encierra');
                break;
            case '2 enc13':
                $('.enc13').addClass('encierra');
                $('.enc11').removeClass('encierra');
                $('.enc12').removeClass('encierra');
                $('.enc14').removeClass('encierra');

                break;
            case '2 enc14':
                $('.enc14').addClass('encierra');
                $('.enc11').removeClass('encierra');
                $('.enc12').removeClass('encierra');
                $('.enc13').removeClass('encierra');

                break;


        }
    });
    $('.3').click(function() {
        switch ($(this).attr('class')) {
            case '3 enc21':
                $('.enc21').addClass('encierra');
                $('.enc22').removeClass('encierra');
                $('.enc23').removeClass('encierra');
                $('.enc24').removeClass('encierra');

                break;
            case '3 enc22':
                $('.enc22').addClass('encierra');
                $('.enc21').removeClass('encierra');
                $('.enc23').removeClass('encierra');
                $('.enc24').removeClass('encierra');
                break;
            case '3 enc23':
                $('.enc23').addClass('encierra');
                $('.enc21').removeClass('encierra');
                $('.enc22').removeClass('encierra');
                $('.enc24').removeClass('encierra');

                break;
            case '3 enc24':
                $('.enc24').addClass('encierra');
                $('.enc21').removeClass('encierra');
                $('.enc22').removeClass('encierra');
                $('.enc23').removeClass('encierra');

                break;


        }
    });
    $('.4').click(function() {
        switch ($(this).attr('class')) {
            case '4 enc31':
                $('.enc31').addClass('encierra');
                $('.enc32').removeClass('encierra');
                $('.enc33').removeClass('encierra');
                $('.enc34').removeClass('encierra');

                break;
            case '4 enc32':
                $('.enc32').addClass('encierra');
                $('.enc31').removeClass('encierra');
                $('.enc33').removeClass('encierra');
                $('.enc34').removeClass('encierra');
                break;
            case '4 enc33':
                $('.enc33').addClass('encierra');
                $('.enc31').removeClass('encierra');
                $('.enc32').removeClass('encierra');
                $('.enc34').removeClass('encierra');

                break;
            case '4 enc34':
                $('.enc34').addClass('encierra');
                $('.enc31').removeClass('encierra');
                $('.enc32').removeClass('encierra');
                $('.enc33').removeClass('encierra');

                break;


        }
    });

    function f_iniciar() {
        var p1vec1 = ['kg, lb, cm', 'km, g, lb', 'kg, g, dm', 'kg, g, lb'];
        p1vec1.sort(f_randomico);
        for (var i = 0; i < p1vec1.length; i++) {
            $('#p1im' + (i + 1)).text(p1vec1[i]);
        }
        var p1vec2 = ['1 kg y 400 g', '1 kg y 500 g', '2 kg y 400 g', '2 kg y 500 g'];
        p1vec2.sort(f_randomico);
        for (var i = 0; i < p1vec2.length; i++) {
            $('#p11im' + (i + 1)).text(p1vec2[i]);
        }
        var p1vec3 = ['5 lb', '100 lb', '30 lb', '118 lb'];
        p1vec3.sort(f_randomico);
        for (var i = 0; i < p1vec3.length; i++) {
            $('#p12im' + (i + 1)).text(p1vec3[i]);
        }
        var p1vec4 = ['245', '265', '255', '275'];
        p1vec4.sort(f_randomico);
        for (var i = 0; i < p1vec4.length; i++) {
            $('#p13im' + (i + 1)).text(p1vec4[i]);
        }
        bt_comprobar.addEventListener("click", preg5);

        function preg5() {
            cor = 0;
            var pre5a = $('#pre5a').val();
            if (!pre5a) {
                alert('Ingrese la calificación en la pregunta 5.')
            } else {
                cor = cor + parseFloat(pre5a);
                inc = inc + (3 - parseFloat(pre5a));
                $('#pre5a').val(parseFloat(pre5a).toFixed(2));
                $('#pre5a').attr('disabled', 'true');
                f_comprobar();
            }

        }

        function f_comprobar() {
            cont++;
            AgregaClase(".nota", claseAnimada);
            QuitaClase(".actividad", claseAnimada);
            bt_comprobar.removeEventListener("click", preg5);
            var p1res1 = $('#p1rs1 .encierra span').text();
            var p1cont1 = 0;
            if (!p1res1) {
                p1cont1;
                f_no($('.1'));
            } else {
                if (p1res1 == 'kg, g, lb') {
                    p1cont1++;
                    f_ok($('#p1rs1 .encierra'));
                } else {
                    p1cont1;
                    f_no($('#p1rs1 .encierra'));
                }
            }
            var result1 = (p1cont1 * 1) / 1;
            cor = cor + result1;
            inc = inc + (1 - result1);
            $('#pre1a').val(result1.toFixed(2));
            $('#pre1a').css('display', '');

            var p2res1 = $('#p2rs1 .encierra span').text();
            var p2cont1 = 0;
            if (!p2res1) {
                p2cont1;
                f_no($('.2'));
            } else {
                if (p2res1 == '1 kg y 500 g') {
                    p2cont1++;
                    f_ok($('#p2rs1 .encierra'));
                } else {
                    p2cont1;
                    f_no($('#p2rs1 .encierra'));
                }
            }
            var result2 = (p2cont1 * 1) / 1;
            cor = cor + result2;
            inc = inc + (1 - result2);
            $('#pre2a').val(result2.toFixed(2));
            $('#pre2a').css('display', '');

            var p3res1 = $('#p3rs1 .encierra span').text();
            var p3cont1 = 0;
            if (!p3res1) {
                p3cont1;
                f_no($('.3'));
            } else {
                if (p3res1 == '5 lb') {
                    p3cont1++;
                    f_ok($('#p3rs1 .encierra'));
                } else {
                    p3cont1;
                    f_no($('#p3rs1 .encierra'));
                }
            }
            var result3 = (p3cont1 * 1) / 1;
            cor = cor + result3;
            inc = inc + (1 - result3);
            $('#pre3a').val(result3.toFixed(2));
            $('#pre3a').css('display', '');

            var p4res1 = $('#p4rs1 .encierra span').text();
            var p4cont1 = 0;
            if (!p4res1) {
                p4cont1;
                f_no($('.4'));
            } else {
                if (p4res1 == '245') {
                    p4cont1++;
                    f_ok($('#p4rs1 .encierra'));
                } else {
                    p4cont1;
                    f_no($('#p4rs1 .encierra'));
                }
            }
            var result4 = (p4cont1 * 1) / 1;
            cor = cor + result4;
            inc = inc + (1 - result4);
            $('#pre4a').val(result4.toFixed(2));
            $('#pre4a').css('display', '');

            var p6dcon1 = $('#p6dcon1').val();
            var p6dcon2 = $('#p6dcon2').val();
            var p6dcon3 = $('#p6dcon3').val();
            var p6dcon4 = $('#p6dcon4').val();
            var p6cont1 = 0;
            if (p6dcon1 == 'el fútbol' || p6dcon1 == 'fútbol') {
                p6cont1++;
                f_ok($('#p6dcon1'));
            } else {
                p6cont1;
                f_no($('#p6dcon1'));
            }
            if (p6dcon2 == '17') {
                p6cont1++;
                f_ok($('#p6dcon2'));
            } else {
                p6cont1;
                f_no($('#p6dcon2'));
            }
            if (p6dcon3 == 'el vóley' || p6dcon3 == 'vóley') {
                p6cont1++;
                f_ok($('#p6dcon3'));
            } else {
                p6cont1;
                f_no($('#p6dcon3'));
            }
            if (p6dcon4 == '71') {
                p6cont1++;
                f_ok($('#p6dcon4'));
            } else {
                p6cont1;
                f_no($('#p6dcon4'));
            }
            var result6 = (p6cont1 * 3) / 4;
            cor = cor + result6;
            inc = inc + (3 - result6);
            $('#pre6a').val(result6.toFixed(2));
            $('#pre6a').css('display', '');
            Calculo_nota()
        }

    }