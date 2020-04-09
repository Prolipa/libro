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
    $('.5').click(function() {
        switch ($(this).attr('class')) {
            case '5 pint41':
                $('.pint41').addClass('pinta');
                $('.pint42').removeClass('pinta');
                $('.pint43').removeClass('pinta');
                break;
            case '5 pint42':
                $('.pint42').addClass('pinta');
                $('.pint41').removeClass('pinta');
                $('.pint43').removeClass('pinta');
                break;
            case '5 pint43':
                $('.pint43').addClass('pinta');
                $('.pint41').removeClass('pinta');
                $('.pint42').removeClass('pinta');
                break;
        }
    });

    function f_iniciar() {
        var pal1 = [];
        for (var i = 0; i < 15; i++) {
            pal1.push('<img class="drag1 img-responsive" src="img/i2_p181_u5a3.jpg" style="mix-blend-mode:multiply; display:inline-block" alt="1">');
        }
        $(".textos").append(pal1);
        $(".drag1").draggable({
            revert: "invalid",
            zIndex: 5,
            containment: "#p1act1",
            scroll: false,
        });
        $(".drop1").droppable({
            accept: ".drag1",
            drop: function(e, ui) {
                $(ui.draggable).removeClass("drag1");
                ui.draggable.attr("style", "mix-blend-mode:multiply; display:inline-block;");
                $(this).append(ui.draggable);

            }
        });
        var pal2 = [];
        for (var i = 0; i < 10; i++) {
            pal2.push('<img class="drag2 img-responsive" src="img/i4_p181_u5a3.jpg" style="mix-blend-mode:multiply; display:inline-block" alt="1">');
        }
        $(".textos1").append(pal2);
        $(".drag2").draggable({
            revert: "invalid",
            zIndex: 5,
            containment: "#p1act2",
            scroll: false,
        });
        $(".drop2").droppable({
            accept: ".drag2",
            drop: function(e, ui) {
                $(ui.draggable).removeClass("drag2");
                ui.draggable.attr("style", "mix-blend-mode:multiply; display:inline-block;");
                $(this).append(ui.draggable);

            }
        });

        var p5vec1 = [
            ['14 ÷ 2', 0],
            ['20 ÷ 5', 1],
            ['9 ÷ 3', 2],
            ['24 ÷ 4', 3],
            ['27 ÷ 3', 4]
        ];
        var p5vec2 = [
            ['<div style=" border: 2px solid #F7ADB4; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="1 pint1">2</div>',
                '<div style=" border: 2px solid #F7ADB4; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="1 pint2">7</div>',
                '<div style=" border: 2px solid #F7ADB4; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="1 pint3">14</div>'
            ],
            ['<div style=" border: 2px solid #F7ADB4; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="2 pint11">4</div>',
                '<div style=" border: 2px solid #F7ADB4; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="2 pint12">5</div>',
                '<div style=" border: 2px solid #F7ADB4; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="2 pint13">6</div>'
            ],
            ['<div style=" border: 2px solid #F7ADB4; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="3 pint21">2</div>',
                '<div style=" border: 2px solid #F7ADB4; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="3 pint22">3</div>',
                '<div style=" border: 2px solid #F7ADB4; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="3 pint23">4</div>'
            ],
            ['<div style=" border: 2px solid #F7ADB4; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="4 pint31">3</div>',
                '<div style=" border: 2px solid #F7ADB4; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="4 pint32">6</div>',
                '<div style=" border: 2px solid #F7ADB4; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="4 pint33">18</div>'
            ],
            ['<div style=" border: 2px solid #F7ADB4; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="5 pint41">7</div>',
                '<div style=" border: 2px solid #F7ADB4; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="5 pint42">8</div>',
                '<div style=" border: 2px solid #F7ADB4; border-radius: 10px; text-align: center; display:inline-block; padding: 10px;" class="5 pint43">9</div>'
            ]
        ];

        p5vec1.sort(f_randomico);
        for (var i = 0; i < 5; i++) {
            $('#p5im' + (i + 1)).text(p5vec1[i][0]);
            p5vec2[i].sort(f_randomico);
        }
        for (var i = 0; i < 5; i++) {
            $('#p5cim' + (i + 1)).html(p5vec2[p5vec1[i][1]]);
        }
        bt_comprobar.addEventListener("click", f_comprobar);

        function f_comprobar() {
            cont++;
            AgregaClase(".nota", claseAnimada);
            QuitaClase(".actividad", claseAnimada);
            bt_comprobar.removeEventListener("click", f_comprobar);

            var p1cont1 = 0;
            for (var i = 0; i < 5; i++) {
                var p1res1 = $('#p1a' + (i + 1) + ' img').length;
                if (p1res1 == '3') {
                    p1cont1++;
                    f_ok($('#p1a' + (i + 1)));
                } else {
                    p1cont1;
                    f_no($('#p1a' + (i + 1)));
                }
                var p1res2 = $('#p1dcon' + (i + 1)).val();
                if (p1res2 == '3') {
                    p1cont1++;
                    f_ok($('#p1dcon' + (i + 1)));
                } else {
                    p1cont1;
                    f_no($('#p1dcon' + (i + 1)));
                }
            }
            var p1dcon6 = $('#p1dcon6').val();
            var p1dcon7 = $('#p1dcon7').val();
            var p1dcon8 = $('#p1dcon8').val();
            var p1dcon9 = $('#p1dcon9').val();
            if (p1dcon6 == '5') {
                p1cont1++;
                f_ok($('#p1dcon6'));
            } else {
                p1cont1;
                f_no($('#p1dcon6'));
            }
            if (p1dcon7 == '3') {
                p1cont1++;
                f_ok($('#p1dcon7'));
            } else {
                p1cont1;
                f_no($('#p1dcon7'));
            }
            if (p1dcon8 == '5') {
                p1cont1++;
                f_ok($('#p1dcon8'));
            } else {
                p1cont1;
                f_no($('#p1dcon8'));
            }
            if (p1dcon9 == '3') {
                p1cont1++;
                f_ok($('#p1dcon9'));
            } else {
                p1cont1;
                f_no($('#p1dcon9'));
            }

            for (var i = 0; i < 2; i++) {
                var p1res3 = $('#p11a' + (i + 1) + ' img').length;
                if (p1res3 == '5') {
                    p1cont1++;
                    f_ok($('#p11a' + (i + 1)));
                } else {
                    p1cont1;
                    f_no($('#p11a' + (i + 1)));
                }
                var p1res4 = $('#p11dcon' + (i + 1)).val();
                if (p1res4 == '5') {
                    p1cont1++;
                    f_ok($('#p11dcon' + (i + 1)));
                } else {
                    p1cont1;
                    f_no($('#p11dcon' + (i + 1)));
                }
            }
            var p11dcon3 = $('#p11dcon3').val();
            var p11dcon4 = $('#p11dcon4').val();
            var p11dcon5 = $('#p11dcon5').val();
            var p11dcon6 = $('#p11dcon6').val();
            if (p11dcon3 == '2') {
                p1cont1++;
                f_ok($('#p11dcon3'));
            } else {
                p1cont1;
                f_no($('#p11dcon3'));
            }
            if (p11dcon4 == '5') {
                p1cont1++;
                f_ok($('#p11dcon4'));
            } else {
                p1cont1;
                f_no($('#p11dcon4'));
            }
            if (p11dcon5 == '2') {
                p1cont1++;
                f_ok($('#p11dcon5'));
            } else {
                p1cont1;
                f_no($('#p11dcon5'));
            }
            if (p11dcon6 == '5') {
                p1cont1++;
                f_ok($('#p11dcon6'));
            } else {
                p1cont1;
                f_no($('#p11dcon6'));
            }
            var result1 = (p1cont1 * 2) / 22;
            cor = cor + result1;
            inc = inc + (2 - result1);
            $('#pre1a').val(result1.toFixed(2));
            $('#pre1a').css('display', '');

            var p2dcon1 = $('#p2dcon1').val();
            var p2dcon2 = $('#p2dcon2').val();
            var p2cont1 = 0;
            if (p2dcon1 == '2') {
                p2cont1++;
                f_ok($('#p2dcon1'));
            } else {
                p2cont1;
                f_no($('#p2dcon1'));
            }
            if (p2dcon2 == '4') {
                p2cont1++;
                f_ok($('#p2dcon2'));
            } else {
                p2cont1;
                f_no($('#p2dcon2'));
            }
            var result2 = (p2cont1 * 2) / 2;
            cor = cor + result2;
            inc = inc + (2 - result2);
            $('#pre2a').val(result2.toFixed(2));
            $('#pre2a').css('display', '');

            var p3dcon1 = $('#p3dcon1').val();
            var p3dcon2 = $('#p3dcon2').val();
            var p3dcon3 = $('#p3dcon3').val();
            var p3dcon4 = $('#p3dcon4').val();
            var p3cont1 = 0;
            if (p3dcon1 == '20') {
                p3cont1++;
                f_ok($('#p3dcon1'));
            } else {
                p3cont1;
                f_no($('#p3dcon1'));
            }
            if (p3dcon2 == '4') {
                p3cont1++;
                f_ok($('#p3dcon2'));
            } else {
                p3cont1;
                f_no($('#p3dcon2'));
            }
            if (p3dcon3 == '5') {
                p3cont1++;
                f_ok($('#p3dcon3'));
            } else {
                p3cont1;
                f_no($('#p3dcon3'));
            }
            if (p3dcon4 == '5') {
                p3cont1++;
                f_ok($('#p3dcon4'));
            } else {
                p3cont1;
                f_no($('#p3dcon4'));
            }
            var p31dcon1 = $('#p31dcon1').val();
            var p31dcon2 = $('#p31dcon2').val();
            var p31dcon3 = $('#p31dcon3').val();
            if (p31dcon1 == '36') {
                p3cont1++;
                f_ok($('#p31dcon1'));
            } else {
                p3cont1;
                f_no($('#p31dcon1'));
            }
            if (p31dcon2 == '6') {
                p3cont1++;
                f_ok($('#p31dcon2'));
            } else {
                p3cont1;
                f_no($('#p31dcon2'));
            }
            if (p31dcon3 == '6') {
                p3cont1++;
                f_ok($('#p31dcon3'));
            } else {
                p3cont1;
                f_no($('#p31dcon3'));
            }
            var p32dcon1 = $('#p32dcon1').val();
            var p32dcon2 = $('#p32dcon2').val();
            var p32dcon3 = $('#p32dcon3').val();
            if (p32dcon1 == '45') {
                p3cont1++;
                f_ok($('#p32dcon1'));
            } else {
                p3cont1;
                f_no($('#p32dcon1'));
            }
            if (p32dcon2 == '9') {
                p3cont1++;
                f_ok($('#p32dcon2'));
            } else {
                p3cont1;
                f_no($('#p32dcon2'));
            }
            if (p32dcon3 == '5') {
                p3cont1++;
                f_ok($('#p32dcon3'));
            } else {
                p3cont1;
                f_no($('#p32dcon3'));
            }
            var result3 = (p3cont1 * 2) / 10;
            cor = cor + result3;
            inc = inc + (2 - result3);
            $('#pre3a').val(result3.toFixed(2));
            $('#pre3a').css('display', '');

            var p4dcon1 = $('#p4dcon1').val();
            var p4dcon2 = $('#p4dcon2').val();
            var p4dcon3 = $('#p4dcon3').val();
            var p4dcon4 = $('#p4dcon4').val();
            var p4cont1 = 0;
            if (p4dcon1 == '42') {
                p4cont1++;
                f_ok($('#p4dcon1'));
            } else {
                p4cont1;
                f_no($('#p4dcon1'));
            }
            if (p4dcon2 == '6') {
                p4cont1++;
                f_ok($('#p4dcon2'));
            } else {
                p4cont1;
                f_no($('#p4dcon2'));
            }
            if (p4dcon3 == '7') {
                p4cont1++;
                f_ok($('#p4dcon3'));
            } else {
                p4cont1;
                f_no($('#p4dcon3'));
            }
            if (p4dcon4 == '7') {
                p4cont1++;
                f_ok($('#p4dcon4'));
            } else {
                p4cont1;
                f_no($('#p4dcon4'));
            }
            var result4 = (p4cont1 * 2) / 4;
            cor = cor + result4;
            inc = inc + (2 - result4);
            $('#pre4a').val(result4.toFixed(2));
            $('#pre4a').css('display', '');

            var p5cont1 = 0;
            var p5vec3 = [7, 4, 3, 6, 9];
            for (var i = 0; i < 5; i++) {
                var p5cim1 = $('#p5cim'+(i+1)+' .pinta').html();
                if (!p5cim1) {
                    p5cont1;
                    f_no($('.'+(p5vec1[i][1]+1)));
                } else {
                    if (p5cim1 == p5vec3[p5vec1[i][1]]) {
                        p5cont1++;
                        f_ok($('#p5cim'+(i+1)+' .pinta'));
                        $('#p5cim'+(i+1)+' .pinta').removeClass('pinta');
                    } else {
                        p5cont1;
                        f_no($('#p5cim'+(i+1)+' .pinta'));
                        $('#p5cim'+(i+1)+' .pinta').removeClass('pinta');
                    }
                }
            }
            var result5 = (p5cont1 * 2) / 5;
            cor = cor + result5;
            inc = inc + (2 - result5);
            $('#pre5a').val(result5.toFixed(2));
            $('#pre5a').css('display', '');
            Calculo_nota()
        }

    }