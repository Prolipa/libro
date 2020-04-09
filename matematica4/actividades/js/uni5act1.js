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
    $('.pint1').click(function() {
        if ($(this).hasClass('pinta')) {
            $(this).removeClass('pinta')
        } else {
            $(this).addClass('pinta')
        }
    })
    $('.enc1').click(function() {
        if ($(this).hasClass('encierra')) {
            $(this).removeClass('encierra')
        } else {
            $(this).addClass('encierra')
        }
    })

    $('.1').click(function() {
        switch ($(this).attr('class')) {
            case '1 en1':
                $('.en1').addClass('encierra');
                $('.en2').removeClass('encierra');
                $('.en3').removeClass('encierra');
                break;
            case '1 en2':
                $('.en2').addClass('encierra');
                $('.en1').removeClass('encierra');
                $('.en3').removeClass('encierra');
                break;
            case '1 en3':
                $('.en3').addClass('encierra');
                $('.en1').removeClass('encierra');
                $('.en2').removeClass('encierra');
                break;
        }
    });

    function f_iniciar() {
        var p1vec1 = [(Math.floor(Math.random() * 50) + 10)];
        var p1pt1 = (Math.floor(Math.random() * 20) + 10);
        for (var i = 0; i < 4; i++) {
            p1vec1.push((p1vec1[i] + p1pt1));
        }
        $('#p1dco1').val(p1vec1[0]);
        $('#p1dco1').attr('disabled', 'true');
        $('#p1dco2').val(p1vec1[1]);
        $('#p1dco2').attr('disabled', 'true');
        $('#p1dco5').val(p1vec1[4]);
        $('#p1dco5').attr('disabled', 'true');
        var p1vec2 = [(Math.floor(Math.random() * 500) + 100)];
        var p1pt2 = (Math.floor(Math.random() * 20) + 5);
        for (var i = 0; i < 4; i++) {
            p1vec2.push((p1vec2[i] + p1pt2));
        }
        $('#p1dco11').val(p1vec2[0]);
        $('#p1dco11').attr('disabled', 'true');
        $('#p1dco12').val(p1vec2[1]);
        $('#p1dco12').attr('disabled', 'true');
        $('#p1dco15').val(p1vec2[4]);
        $('#p1dco15').attr('disabled', 'true');

        var p2vec1 = [(Math.floor(Math.random() * 500) + 100), (Math.floor(Math.random() * 500) + 100), (Math.floor(Math.random() * 500) + 100), (Math.floor(Math.random() * 500) + 100)];
        var p2vec2 = [(Math.floor(Math.random() * 8) + 2), (Math.floor(Math.random() * 8) + 2), (Math.floor(Math.random() * 8) + 2), (Math.floor(Math.random() * 8) + 2)];
        var p2vec3 = [p2vec1[0] * p2vec2[0], p2vec1[1] * p2vec2[1], p2vec1[2] * p2vec2[2], p2vec1[3] * p2vec2[3]];
        for (var i = 0; i < p2vec1.length; i++) {
            $('#p1cim' + (i + 1)).text(p2vec1[i]);
            $('#p1ci' + (i + 1)).text(p2vec2[i]);
        }
        var p2aux1 = p2vec3[0].toString().split('');
        var p2in1 = [];
        for (var i = 0; i < p2aux1.length; i++) {
            p2in1.push('<td><input type="text" style="text-align: center; width: 40px;" onkeypress="return soloNumeros1(event)" maxlength="1" id="nlra' + i + '" class="form-control"></td>');
        }
        if (p2aux1.length < 4) {
            $('#p2im1').html('<td></td>' + p2in1);
        } else {
            $('#p2im1').html('' + p2in1);
        }
        var p2aux2 = p2vec3[1].toString().split('');
        var p2in2 = [];
        for (var i = 0; i < p2aux2.length; i++) {
            p2in2.push('<td><input type="text" style="text-align: center; width: 40px;" onkeypress="return soloNumeros1(event)" maxlength="1" id="nlra1' + i + '" class="form-control"></td>');
        }
        if (p2aux2.length < 4) {
            $('#p2im2').html('<td></td>' + p2in2);
        } else {
            $('#p2im2').html('' + p2in2);
        }
        var p2aux3 = p2vec3[2].toString().split('');
        var p2in3 = [];
        for (var i = 0; i < p2aux3.length; i++) {
            p2in3.push('<td><input type="text" style="text-align: center; width: 40px;" onkeypress="return soloNumeros1(event)" maxlength="1" id="nlra2' + i + '" class="form-control"></td>');
        }
        if (p2aux3.length < 4) {
            $('#p2im3').html('<td></td>' + p2in3);
        } else {
            $('#p2im3').html('' + p2in3);
        }
        var p2aux4 = p2vec3[3].toString().split('');
        var p2in4 = [];
        for (var i = 0; i < p2aux4.length; i++) {
            p2in4.push('<td><input type="text" style="text-align: center; width: 40px;" onkeypress="return soloNumeros1(event)" maxlength="1" id="nlra3' + i + '" class="form-control"></td>');
        }
        if (p2aux4.length < 4) {
            $('#p2im4').html('<td></td>' + p2in4);
        } else {
            $('#p2im4').html('' + p2in4);
        }

        var p3vec1 = ['100 × 36 = 3 600', '9 × 1 000 = 900', '729 × 10 = 72 900', '1 000 × 7 = 7 000', '10 × 80 = 800', '52 × 100 = 520'];
        p3vec1.sort(f_randomico);
        for (var i = 0; i < p3vec1.length; i++) {
            $('#p3im' + (i + 1)).html(p3vec1[i]);
        }

        var p4vec1 = [(Math.floor(Math.random() * 90) + 10), (Math.floor(Math.random() * 8) + 2), (Math.floor(Math.random() * 10) + 20)];
        var p4vec2 = [(Math.floor(Math.random() * 90) + 10), (Math.floor(Math.random() * 4000) + 1000), (Math.floor(Math.random() * 600) + 100)];
        var p4vec3 = [p4vec1[0] * p4vec2[0], p4vec1[1] * p4vec2[1], p4vec1[2] * p4vec2[2]];
        for (var i = 0; i < p4vec1.length; i++) {
            $('#p4im' + (i + 1)).html(p4vec1[i]);
            $('#p4cim' + (i + 1)).html(p4vec2[i]);
        }

        var p5vec1 = [(Math.floor(Math.random() * 30) + 10), (Math.floor(Math.random() * 8) + 2), (Math.floor(Math.random() * 9) + 2), (Math.floor(Math.random() * 30) + 10), (Math.floor(Math.random() * 9) + 2), (Math.floor(Math.random() * 9) + 2)];
        var p5vec2 = [(Math.floor(Math.random() * 9) + 2), (Math.floor(Math.random() * 8) + 2), (Math.floor(Math.random() * 9) + 2), (Math.floor(Math.random() * 30) + 10), (Math.floor(Math.random() * 9) + 2), (Math.floor(Math.random() * 9) + 2)];
        for (var i = 0; i < p5vec1.length; i++) {
            $('#p5im' + (i + 1)).html(p5vec1[i]);
            $('#p5cim' + (i + 1)).html(p5vec2[i]);
        }

        var p6vec1 = [(Math.floor(Math.random() * 90) + 10), (Math.floor(Math.random() * 90) + 10), (Math.floor(Math.random() * 90) + 10), (Math.floor(Math.random() * 90) + 10), (Math.floor(Math.random() * 90) + 10), (Math.floor(Math.random() * 90) + 10)];
        for (var i = 0; i < p6vec1.length; i++) {
            $('#p6im' + (i + 1)).text(p6vec1[i]);
        }
        var p6vec2 = [p6vec1[0] * 2, p6vec1[1] * 3, p6vec1[2] * 3, p6vec1[3] * 2, p6vec1[4] * 2, p6vec1[5] * 3];

        var p7vec1 = ['<img src="img/i4_p176_u5a1.jpg" alt="1" class="img-responsive" style="mix-blend-mode: multiply;">', '<img src="img/i5_p176_u5a1.jpg" alt="2" class="img-responsive" style="mix-blend-mode: multiply;">', '<img src="img/i6_p176_u5a1.jpg" alt="3" class="img-responsive" style="mix-blend-mode: multiply;">', '<img src="img/i7_p176_u5a1.jpg" alt="4" class="img-responsive" style="mix-blend-mode: multiply;">', '<img src="img/i8_p176_u5a1.jpg" alt="5" class="img-responsive" style="mix-blend-mode: multiply;">', '<img src="img/i9_p176_u5a1.jpg" alt="6" class="img-responsive" style="mix-blend-mode: multiply;">'];
        p7vec1.sort(f_randomico);
        for (var i = 0; i < p7vec1.length; i++) {
            $('#p7im' + (i + 1)).html(p7vec1[i]);
        }

        var p8vec1 = [(Math.floor(Math.random() * 50) + 1), (Math.floor(Math.random() * 50) + 1), (Math.floor(Math.random() * 50) + 1), (Math.floor(Math.random() * 15) + 1), (Math.floor(Math.random() * 15) + 1), (Math.floor(Math.random() * 15) + 1), (Math.floor(Math.random() * 20) + 2), (Math.floor(Math.random() * 20) + 2), (Math.floor(Math.random() * 20) + 2)];
        var p8vec2 = [p8vec1[0] * 10, p8vec1[1] * 10, p8vec1[2] * 10, p8vec1[3] * 1000, p8vec1[4] * 1000, p8vec1[5] * 1000, p8vec1[6] * 10, p8vec1[7] * 10, p8vec1[8] * 10];
        for (var i = 0; i < p8vec1.length; i++) {
            $('#p8im' + (i + 1)).html(p8vec1[i]);
        }

        var p10vec1 = ['Seguro', 'Posible', 'Imposible'];
        p10vec1.sort(f_randomico);
        $('#p10im1').text(p10vec1[0]);
        $('#p10im2').text(p10vec1[1]);
        $('#p10im3').text(p10vec1[2]);

        var p11vec1 = [(Math.floor(Math.random() * 10) + 1), (Math.floor(Math.random() * 10) + 1), (Math.floor(Math.random() * 10) + 1), (Math.floor(Math.random() * 10) + 1)];
        for (var i = 0; i < p11vec1.length; i++) {
            $('#p11im' + (i + 1)).text(p11vec1[i]);
        }
        bt_comprobar.addEventListener("click", f_comprobar);

        function f_comprobar() {
            cont++;
            AgregaClase(".nota", claseAnimada);
            QuitaClase(".actividad", claseAnimada);
            bt_comprobar.removeEventListener("click", f_comprobar);
            var p1cont1 = 0;
            for (var i = 0; i < 4; i++) {
                var p1res1 = $('#p1dcon' + (i + 1)).val();
                if (p1res1 == p1pt1) {
                    p1cont1++;
                    f_ok($('#p1dcon' + (i + 1)));
                } else {
                    p1cont1;
                    f_no($('#p1dcon' + (i + 1)));
                }
            }
            var p1dco3 = $('#p1dco3').val();
            var p1dco4 = $('#p1dco4').val();
            if (p1dco3 == p1vec1[2]) {
                p1cont1++;
                f_ok($('#p1dco3'));
            } else {
                p1cont1;
                f_no($('#p1dco3'));
            }
            if (p1dco4 == p1vec1[3]) {
                p1cont1++;
                f_ok($('#p1dco4'));
            } else {
                p1cont1;
                f_no($('#p1dco4'));
            }
            for (var i = 0; i < 4; i++) {
                var p1res2 = $('#p1dcon1' + (i + 1)).val();
                if (p1res2 == p1pt2) {
                    p1cont1++;
                    f_ok($('#p1dcon1' + (i + 1)));
                } else {
                    p1cont1;
                    f_no($('#p1dcon1' + (i + 1)));
                }
            }
            var p1dco13 = $('#p1dco13').val();
            var p1dco14 = $('#p1dco14').val();
            if (p1dco13 == p1vec2[2]) {
                p1cont1++;
                f_ok($('#p1dco13'));
            } else {
                p1cont1;
                f_no($('#p1dco13'));
            }
            if (p1dco14 == p1vec2[3]) {
                p1cont1++;
                f_ok($('#p1dco14'));
            } else {
                p1cont1;
                f_no($('#p1dco14'));
            }
            var result1 = (p1cont1 * 1) / 12;
            cor = cor + result1;
            inc = inc + (1 - result1);
            $('#pre1a').val(result1.toFixed(2));
            $('#pre1a').css('display', '');

            var p2cont1 = 0;
            var nla0 = $('#nla0').val() + $('#nla1').val() + $('#nla2').val();
            var nlsa2 = $('#nlsa2').val();
            var nlra0 = [];
            for (var i = 0; i < p2aux1.length; i++) {
                nlra0.push($('#nlra' + (i)).val());
            }
            nlra0 = nlra0.join('');
            if (nla0 == p2vec1[0]) {
                p2cont1++;
                f_ok($('#nla0'));
                f_ok($('#nla1'));
                f_ok($('#nla2'));
            } else {
                p2cont1;
                f_no($('#nla0'));
                f_no($('#nla1'));
                f_no($('#nla2'));
            }
            if (nlsa2 == p2vec2[0]) {
                p2cont1++;
                f_ok($('#nlsa2'));
            } else {
                p2cont1;
                f_no($('#nlsa2'));
            }
            if (nlra0 == p2vec3[0]) {
                p2cont1++;
                for (var i = 0; i < p2aux1.length; i++) {
                    f_ok($('#nlra' + i));
                }
            } else {
                p2cont1;
                for (var i = 0; i < p2aux1.length; i++) {
                    f_no($('#nlra' + i));
                }
            }
            var nla1 = $('#nla10').val() + $('#nla11').val() + $('#nla12').val();
            var nlsa12 = $('#nlsa12').val();
            var nlra10 = [];
            for (var i = 0; i < p2aux2.length; i++) {
                nlra10.push($('#nlra1' + (i)).val());
            }
            nlra10 = nlra10.join('');
            if (nla1 == p2vec1[1]) {
                p2cont1++;
                f_ok($('#nla10'));
                f_ok($('#nla11'));
                f_ok($('#nla12'));
            } else {
                p2cont1;
                f_no($('#nla10'));
                f_no($('#nla11'));
                f_no($('#nla12'));
            }
            if (nlsa12 == p2vec2[1]) {
                p2cont1++;
                f_ok($('#nlsa12'));
            } else {
                p2cont1;
                f_no($('#nlsa12'));
            }
            if (nlra10 == p2vec3[1]) {
                p2cont1++;
                for (var i = 0; i < p2aux2.length; i++) {
                    f_ok($('#nlra1' + i));
                }
            } else {
                p2cont1;
                for (var i = 0; i < p2aux2.length; i++) {
                    f_no($('#nlra1' + i));
                }
            }
            var nla20 = $('#nla20').val() + $('#nla21').val() + $('#nla22').val();
            var nlsa22 = $('#nlsa22').val();
            var nlra20 = [];
            for (var i = 0; i < p2aux3.length; i++) {
                nlra20.push($('#nlra2' + (i)).val());
            }
            nlra20 = nlra20.join('');
            if (nla20 == p2vec1[2]) {
                p2cont1++;
                f_ok($('#nla20'));
                f_ok($('#nla21'));
                f_ok($('#nla22'));
            } else {
                p2cont1;
                f_no($('#nla20'));
                f_no($('#nla21'));
                f_no($('#nla22'));
            }
            if (nlsa22 == p2vec2[2]) {
                p2cont1++;
                f_ok($('#nlsa22'));
            } else {
                p2cont1;
                f_no($('#nlsa22'));
            }
            if (nlra20 == p2vec3[2]) {
                p2cont1++;
                for (var i = 0; i < p2aux3.length; i++) {
                    f_ok($('#nlra2' + i));
                }
            } else {
                p2cont1;
                for (var i = 0; i < p2aux3.length; i++) {
                    f_no($('#nlra2' + i));
                }
            }
            var nla30 = $('#nla30').val() + $('#nla31').val() + $('#nla32').val();
            var nlsa32 = $('#nlsa32').val();
            var nlra30 = [];
            for (var i = 0; i < p2aux4.length; i++) {
                nlra30.push($('#nlra3' + (i)).val());
            }
            nlra30 = nlra30.join('');
            if (nla30 == p2vec1[3]) {
                p2cont1++;
                f_ok($('#nla30'));
                f_ok($('#nla31'));
                f_ok($('#nla32'));
            } else {
                p2cont1;
                f_no($('#nla30'));
                f_no($('#nla31'));
                f_no($('#nla32'));
            }
            if (nlsa32 == p2vec2[3]) {
                p2cont1++;
                f_ok($('#nlsa32'));
            } else {
                p2cont1;
                f_no($('#nlsa32'));
            }
            if (nlra30 == p2vec3[3]) {
                p2cont1++;
                for (var i = 0; i < p2aux4.length; i++) {
                    f_ok($('#nlra3' + i));
                }
            } else {
                p2cont1;
                for (var i = 0; i < p2aux4.length; i++) {
                    f_no($('#nlra3' + i));
                }
            }
            var result2 = (p2cont1 * 1) / (12);
            cor = cor + result2;
            inc = inc + (1 - result2);
            $('#pre2a').val(result2.toFixed(2));
            $('#pre2a').css('display', '');

            var p3cont1 = 0;
            var p3cont2 = 0;
            var p3cont3 = 0;
            if (!($('.pinta').html())) {
                p3cont3;
                f_no($('.pint1'));
            } else {
                for (var i = 0; i < 6; i++) {
                    if ($('#p3im' + (i + 1)).hasClass('pinta')) {
                        var p3res1 = $('#p3im' + (i + 1)).html();
                        if (p3res1 == '100 × 36 = 3 600' || p3res1 == '1 000 × 7 = 7 000' || p3res1 == '10 × 80 = 800') {
                            p3cont1++;
                            f_ok($('#p3im' + (i + 1)));
                            $('#p3im' + (i + 1)).removeClass('pinta');
                        } else {
                            p3cont2++;
                            f_no($('#p3im' + (i + 1)));
                            $('#p3im' + (i + 1)).removeClass('pinta');
                        }
                    }
                }
            }
            if (p3cont1 < p3cont2) {
                p3cont3;
            } else {
                p3cont3 = p3cont1 - p3cont2;
            }
            var result3 = (p3cont3 * 1) / 3;
            cor = cor + result3;
            inc = inc + (1 - result3);
            $('#pre3a').val(result3.toFixed(2));
            $('#pre3a').css('display', '');

            var p4cont1 = 0;
            for (var i = 0; i < p4vec3.length; i++) {
                var p4res1 = $('#p4dcon' + (i + 1)).val();
                if (p4res1 == p4vec3[i]) {
                    p4cont1++;
                    f_ok($('#p4dcon' + (i + 1)));
                } else {
                    p4cont1;
                    f_no($('#p4dcon' + (i + 1)));
                }
            }
            var result4 = (p4cont1 * 1) / 3;
            cor = cor + result4;
            inc = inc + (1 - result4);
            $('#pre4a').val(result4.toFixed(2));
            $('#pre4a').css('display', '');

            var p5cont1 = 0;
            var p5dcon1 = $('#p5dcon1').val();
            var p5dcon2 = $('#p5dcon2').val();
            var p5dcon3 = $('#p5dcon3').val();
            if (p5dcon1 == (p5vec1[0] * p5vec2[0])) {
                p5cont1++;
                f_ok($('#p5dcon1'));
            } else {
                p5cont1;
                f_no($('#p5dcon1'));
            }
            if (p5dcon2 == (p5vec1[1] * p5vec2[1])) {
                p5cont1++;
                f_ok($('#p5dcon2'));
            } else {
                p5cont1;
                f_no($('#p5dcon2'));
            }
            if (p5dcon3 == (p5vec1[0] * p5vec2[0]) + (p5vec1[1] * p5vec2[1])) {
                p5cont1++;
                f_ok($('#p5dcon3'));
            } else {
                p5cont1;
                f_no($('#p5dcon3'));
            }
            var p5dcon11 = $('#p5dcon11').val();
            var p5dcon12 = $('#p5dcon12').val();
            var p5dcon13 = $('#p5dcon13').val();
            if (p5dcon11 == (p5vec1[2] * p5vec2[2])) {
                p5cont1++;
                f_ok($('#p5dcon11'));
            } else {
                p5cont1;
                f_no($('#p5dcon11'));
            }
            if (p5dcon12 == (p5vec1[3] * p5vec2[3])) {
                p5cont1++;
                f_ok($('#p5dcon12'));
            } else {
                p5cont1;
                f_no($('#p5dcon12'));
            }
            if (p5dcon13 == (p5vec1[2] * p5vec2[2]) + (p5vec1[3] * p5vec2[3])) {
                p5cont1++;
                f_ok($('#p5dcon13'));
            } else {
                p5cont1;
                f_no($('#p5dcon13'));
            }
            var p5dcon21 = $('#p5dcon21').val();
            var p5dcon22 = $('#p5dcon22').val();
            var p5dcon23 = $('#p5dcon23').val();
            if (p5dcon21 == (p5vec1[4] * p5vec2[4])) {
                p5cont1++;
                f_ok($('#p5dcon21'));
            } else {
                p5cont1;
                f_no($('#p5dcon21'));
            }
            if (p5dcon22 == (p5vec1[5] * p5vec2[5])) {
                p5cont1++;
                f_ok($('#p5dcon22'));
            } else {
                p5cont1;
                f_no($('#p5dcon22'));
            }
            if (p5dcon23 == (p5vec1[4] * p5vec2[4]) + (p5vec1[5] * p5vec2[5])) {
                p5cont1++;
                f_ok($('#p5dcon23'));
            } else {
                p5cont1;
                f_no($('#p5dcon23'));
            }
            var result5 = (p5cont1 * 1) / 9;
            cor = cor + result5;
            inc = inc + (1 - result5);
            $('#pre5a').val(result5.toFixed(2));
            $('#pre5a').css('display', '');

            var p6cont1 = 0;
            for (var i = 0; i < p6vec2.length; i++) {
                var p6res1 = $('#p6dcon' + (i + 1)).val();
                if (p6res1 == p6vec2[i]) {
                    p6cont1++;
                    f_ok($('#p6dcon' + (i + 1)));
                } else {
                    p6cont1;
                    f_no($('#p6dcon' + (i + 1)));
                }
            }
            var result6 = (p6cont1 * 1) / 6;
            cor = cor + result6;
            inc = inc + (1 - result6);
            $('#pre6a').val(result6.toFixed(2));
            $('#pre6a').css('display', '');

            var p7cont1 = 0;
            var p7cont2 = 0;
            var p7cont3 = 0;
            if (!($('.encierra').html())) {
                p7cont3;
                f_no($('.enc1'));
            } else {
                for (var i = 0; i < 6; i++) {
                    if ($('#p7im' + (i + 1)).hasClass('encierra')) {
                        var p7res1 = $('#p7im' + (i + 1) + ' img').attr('alt');
                        if (p7res1 == '1' || p7res1 == '3' || p7res1 == '6') {
                            p7cont1++;
                            f_ok($('#p7im' + (i + 1)));
                        } else {
                            p7cont2++;
                            f_no($('#p7im' + (i + 1)));
                        }
                    }
                }
            }
            if (p7cont1 < p7cont2) {
                p7cont3;
            } else {
                p7cont3 = p7cont1 - p7cont2;
            }
            var result7 = (p7cont3 * 0.5) / 3;
            cor = cor + result7;
            inc = inc + (0.5 - result7);
            $('#pre7a').val(result7.toFixed(2));
            $('#pre7a').css('display', '');

            var p8cont1 = 0;
            for (var i = 0; i < p8vec2.length; i++) {
                var p8res1 = $('#p8dcon' + (i + 1)).val();
                if (p8res1 == p8vec2[i]) {
                    p8cont1++;
                    f_ok($('#p8dcon' + (i + 1)));
                } else {
                    p8cont1;
                    f_no($('#p8dcon' + (i + 1)));
                }
            }
            var result8 = (p8cont1 * 1) / 9;
            cor = cor + result8;
            inc = inc + (1 - result8);
            $('#pre8a').val(result8.toFixed(2));
            $('#pre8a').css('display', '');

            var p9dcon1 = $('#p9dcon1').val();
            var p9dcon2 = $('#p9dcon2').val();
            var p9dcon3 = $('#p9dcon3').val();
            var p9cont1 = 0
            if (p9dcon1 == '7' || p9dcon1 == '4') {
                p9cont1++;
                f_ok($('#p9dcon1'));
            } else {
                p9cont1;
                f_no($('#p9dcon1'));
            }
            if ((p9dcon2 == '7' || p9dcon2 == '4') && p9dcon2 != p9dcon1) {
                p9cont1++;
                f_ok($('#p9dcon2'));
            } else {
                p9cont1;
                f_no($('#p9dcon2'));
            }
            if (p9dcon3 == '28') {
                p9cont1++;
                f_ok($('#p9dcon3'));
            } else {
                p9cont1;
                f_no($('#p9dcon3'));
            }
            var result9 = (p9cont1 * 1) / 3;
            cor = cor + result9;
            inc = inc + (1 - result9);
            $('#pre9a').val(result9.toFixed(2));
            $('#pre9a').css('display', '');

            var p10res1 = $('#p10res1 .encierra span').text();
            var p10cont1 = 0;
            if (!p10res1) {
                p10cont1;
                f_no($('.1'));
            } else {
                if (p10res1 == 'Seguro') {
                    p10cont1++;
                    f_ok($('#p10res1 .encierra'));
                } else {
                    p10cont1;
                    f_no($('#p10res1 .encierra'));
                }
            }
            var result10 = (p10cont1 * 0.5) / 1;
            cor = cor + result10;
            inc = inc + (0.5 - result10);
            $('#pre10a').val(result10.toFixed(2));
            $('#pre10a').css('display', '');

            var p11cont1=0;
            for (var i = 0; i < p11vec1.length; i++) {
                var p11res1=$('#p11dcon' + (i + 1)).val();
                if (p11res1==p11vec1[i]) {
                    p11cont1++;
                    f_ok($('#p11dcon' + (i + 1)));
                }else{
                    p11cont1;
                    f_no($('#p11dcon' + (i + 1)));
                }
            }
            var result11 = (p11cont1 * 1) / 4;
            cor = cor + result11;
            inc = inc + (1 - result11);
            $('#pre11a').val(result11.toFixed(2));
            $('#pre11a').css('display', '');
            Calculo_nota()
        }

    }