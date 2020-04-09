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

    function f_iniciar() {
        var p1vec1 = [(Math.floor(Math.random() * 8) + 2), (Math.floor(Math.random() * 8) + 2), (Math.floor(Math.random() * 8) + 2), (Math.floor(Math.random() * 8) + 2), (Math.floor(Math.random() * 8) + 2), (Math.floor(Math.random() * 8) + 2)];
        $('#p1dcon1').val(p1vec1[0]);
        $('#p1dcon3').val(p1vec1[0] * p1vec1[1]);
        $('#p1dcon4').val(p1vec1[0] * p1vec1[1]);
        $('#p1dcon5').val(p1vec1[0]);
        var p1vc1 = [];
        for (var i = 0; i < p1vec1[0]; i++) {
            p1vc1.push('<tr id="p1cim' + i + '"></tr>');
        }
        $('#p1im1').html(p1vc1);
        var p1v1 = [];
        for (var i = 0; i < p1vec1[1]; i++) {
            p1v1.push('<td><img src="img/i1_p187_u5a5.jpg" alt="" /></td>')
        }
        for (var i = 0; i < p1vec1[0]; i++) {
            $('#p1cim' + i).html(p1v1);
        }

        $('#p1dcon11').val(p1vec1[2]);
        $('#p1dcon13').val(p1vec1[2] * p1vec1[3]);
        $('#p1dcon14').val(p1vec1[2] * p1vec1[3]);
        $('#p1dcon15').val(p1vec1[2]);
        var p1vc2 = [];
        for (var i = 0; i < p1vec1[2]; i++) {
            p1vc2.push('<tr id="p11cim' + i + '"></tr>');
        }
        $('#p1im2').html(p1vc2);
        var p1v2 = [];
        for (var i = 0; i < p1vec1[3]; i++) {
            p1v2.push('<td><img src="img/i2_p187_u5a5.jpg" alt="" /></td>')
        }
        for (var i = 0; i < p1vec1[2]; i++) {
            $('#p11cim' + i).html(p1v2);
        }

        $('#p1dcon21').val(p1vec1[4]);
        $('#p1dcon23').val(p1vec1[4] * p1vec1[5]);
        $('#p1dcon24').val(p1vec1[4] * p1vec1[5]);
        $('#p1dcon25').val(p1vec1[4]);
        var p1vc3 = [];
        for (var i = 0; i < p1vec1[4]; i++) {
            p1vc3.push('<tr id="p12cim' + i + '"></tr>');
        }
        $('#p1im3').html(p1vc3);
        var p1v3 = [];
        for (var i = 0; i < p1vec1[5]; i++) {
            p1v3.push('<td><img src="img/i3_p187_u5a5.jpg" alt="" /></td>')
        }
        for (var i = 0; i < p1vec1[4]; i++) {
            $('#p12cim' + i).html(p1v3);
        }

        var p2vec1 = [(Math.floor(Math.random() * 9) + 2), (Math.floor(Math.random() * 9) + 2), (Math.floor(Math.random() * 9) + 2), (Math.floor(Math.random() * 9) + 2), (Math.floor(Math.random() * 9) + 2), (Math.floor(Math.random() * 9) + 2), (Math.floor(Math.random() * 9) + 2), (Math.floor(Math.random() * 9) + 2), (Math.floor(Math.random() * 9) + 2), (Math.floor(Math.random() * 9) + 2), (Math.floor(Math.random() * 9) + 2), (Math.floor(Math.random() * 9) + 2)];
        var p2vec2 = [p2vec1[0] * p2vec1[1], p2vec1[2] * p2vec1[3], p2vec1[4] * p2vec1[5], p2vec1[6] * p2vec1[7], p2vec1[8] * p2vec1[9], p2vec1[10] * p2vec1[11]];
        $('#p2im1').html(p2vec2[0]);
        $('#p2im2').html(p2vec1[1]);
        $('#p2im3').html(p2vec1[1]);
        $('#p2im11').html(p2vec2[1]);
        $('#p2im12').html(p2vec1[3]);
        $('#p2im13').html(p2vec1[3]);
        $('#p2im21').html(p2vec2[2]);
        $('#p2im22').html(p2vec1[5]);
        $('#p2im23').html(p2vec1[5]);
        $('#p2im31').html(p2vec2[3]);
        $('#p2im32').html(p2vec1[7]);
        $('#p2im33').html(p2vec1[7]);
        $('#p2im41').html(p2vec2[4]);
        $('#p2im42').html(p2vec1[9]);
        $('#p2im43').html(p2vec1[9]);
        $('#p2im51').html(p2vec2[5]);
        $('#p2im52').html(p2vec1[11]);
        $('#p2im53').html(p2vec1[11]);

        var p3vec1 = ['9 × 6 = 54', '9 × 8 = 72', '9 × 7 = 63', '9 × 9 = 81'];
        p3vec1.sort(f_randomico);
        for (var i = 0; i < p3vec1.length; i++) {
            $('#p3cim' + (i + 1)).html(p3vec1[i]);
        }
        var p3vec2 = ['3 × 30 = 90', '9 × 9 = 81', '45 × 2 = 90', '9 × 10 = 90'];
        p3vec2.sort(f_randomico);
        for (var i = 0; i < p3vec2.length; i++) {
            $('#p3cim1' + (i + 1)).html(p3vec2[i]);
        }

        var p4vec1 = ['1c; 2d; 3a; 4b;5b', '1a; 2b; 3c; 4d; 5d', '1c; 2d; 3e; 4a; 5b', '1b; 2a; 3e; 4c; 5d'];
        p4vec1.sort(f_randomico);
        for (var i = 0; i < p4vec1.length; i++) {
            $('#p4vc' + (i + 1)).text(p4vec1[i]);
        }

        var p5vec1 = [
            ['<b style="color: #005ca4"><li><span style="color:black">5 6 ÷ 8 = <input type="text" style="border:none; border-bottom:2px dotted black; text-align:center; width:50px;" onkeypress="return soloNumeros1(event)" maxlength="2" id="act5num5"></span></li></b><br>' +
                '<table class="table-bordered">' +
                '<tr align="center">' +
                '<td></td>' +
                '<td></td>' +
                '<td>5</td>' +
                '<td>6</td>' +
                '<td style="border-left: 2px solid #000000; border-bottom:2px solid #000000;">8</td>' +
                '<td style="border-bottom:2px solid #000000;"></td>' +
                '</tr>' +
                '<tr align="center">' +
                '<td></td>' +
                '<td style="border-bottom:2px solid #000000;">' +
                '<div>-</div>' +
                '</td>' +
                '<td style="border-bottom:2px solid #000000;">' +
                '<input class="inputDiv sinEspacios" onkeypress="return soloNumeros1(event)" maxlength="1" id="act5num1"></input>' +
                '</td>' +
                '<td style="border-bottom:2px solid #000000;">' +
                '<input class="inputDiv sinEspacios" onkeypress="return soloNumeros1(event)" maxlength="1" id="act5num2"></input>' +
                '</td>' +
                '<td style="border-left: 2px solid #000000;">'+
                '<input class="inputDiv sinEspacios" onkeypress="return soloNumeros1(event)" maxlength="1" id="act5num3"></input>' +
                '</td>' +
                '<td></td>' +
                '</tr>' +
                '<tr align="center">' +
                '<td></td>' +
                '<td></td>' +
                '<td></td>' +
                '<td>' +
                '<input class="inputDiv sinEspacios" onkeypress="return soloNumeros1(event)" maxlength="1" id="act5num4"></input>' +
                '</td>' +
                '<td style="border-left: 2px solid #000000;"></td>' +
                '<td></td>' +
                '</tr>' +
                '</table>'+
                '<br><div class="table-responsive">'+
                '<table>' +
                '<tr>'+
                '<td>Dividendo:</td>'+
                '<td><input type="text" style="border:none; border-bottom:2px dotted black; text-align:center; width:50px;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p5dcon1"></td>'+
                '</tr>'+
                '<tr>'+
                '<td>Divisor:</td>'+
                '<td><input type="text" style="border:none; border-bottom:2px dotted black; text-align:center; width:50px;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p5dcon2"></td>'+
                '</tr>'+
                '<tr>'+
                '<td>Cociente:</td>'+
                '<td><input type="text" style="border:none; border-bottom:2px dotted black; text-align:center; width:50px;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p5dcon3"></td>'+
                '</tr>'+
                '<tr>'+
                '<td>Residuo:</td>'+
                '<td><input type="text" style="border:none; border-bottom:2px dotted black; text-align:center; width:50px;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p5dcon4"></td>'+
                '</tr>'+
                '</table>'+
                '</div>'
            ],
            ['<b style="color: #005ca4"><li><span style="color:black">8 1 ÷ 9 = <input type="text" style="border:none; border-bottom:2px dotted black; text-align:center; width:50px;" onkeypress="return soloNumeros1(event)" maxlength="2" id="act5num15"></span></li></b><br>' +
                '<table class="table-bordered">' +
                '<tr align="center">' +
                '<td></td>' +
                '<td></td>' +
                '<td>8</td>' +
                '<td>1</td>' +
                '<td style="border-left: 2px solid #000000; border-bottom:2px solid #000000;">9</td>' +
                '<td style="border-bottom:2px solid #000000;"></td>' +
                '</tr>' +
                '<tr align="center">' +
                '<td></td>' +
                '<td style="border-bottom:2px solid #000000;">' +
                '<div>-</div>' +
                '</td>' +
                '<td style="border-bottom:2px solid #000000;">' +
                '<input class="inputDiv sinEspacios" onkeypress="return soloNumeros1(event)" maxlength="1" id="act5num11"></input>' +
                '</td>' +
                '<td style="border-bottom:2px solid #000000;">' +
                '<input class="inputDiv sinEspacios" onkeypress="return soloNumeros1(event)" maxlength="1" id="act5num12"></input>' +
                '</td>' +
                '<td style="border-left: 2px solid #000000;">'+
                '<input class="inputDiv sinEspacios" onkeypress="return soloNumeros1(event)" maxlength="1" id="act5num13"></input>' +
                '</td>' +
                '<td></td>' +
                '</tr>' +
                '<tr align="center">' +
                '<td></td>' +
                '<td></td>' +
                '<td></td>' +
                '<td>' +
                '<input class="inputDiv sinEspacios" onkeypress="return soloNumeros1(event)" maxlength="1" id="act5num14"></input>' +
                '</td>' +
                '<td style="border-left: 2px solid #000000;"></td>' +
                '<td></td>' +
                '</tr>' +
                '</table>'+
                '<br><div class="table-responsive">'+
                '<table>' +
                '<tr>'+
                '<td>Dividendo:</td>'+
                '<td><input type="text" style="border:none; border-bottom:2px dotted black; text-align:center; width:50px;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p5dcon11"></td>'+
                '</tr>'+
                '<tr>'+
                '<td>Divisor:</td>'+
                '<td><input type="text" style="border:none; border-bottom:2px dotted black; text-align:center; width:50px;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p5dcon12"></td>'+
                '</tr>'+
                '<tr>'+
                '<td>Cociente:</td>'+
                '<td><input type="text" style="border:none; border-bottom:2px dotted black; text-align:center; width:50px;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p5dcon13"></td>'+
                '</tr>'+
                '<tr>'+
                '<td>Residuo:</td>'+
                '<td><input type="text" style="border:none; border-bottom:2px dotted black; text-align:center; width:50px;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p5dcon14"></td>'+
                '</tr>'+
                '</table>'+
                '</div>'
            ],
            ['<b style="color: #005ca4"><li><span style="color:black">3 5 ÷ 5 = <input type="text" style="border:none; border-bottom:2px dotted black; text-align:center; width:50px;" onkeypress="return soloNumeros1(event)" maxlength="2" id="act5num25"></span></li></b><br>' +
                '<table class="table-bordered">' +
                '<tr align="center">' +
                '<td></td>' +
                '<td></td>' +
                '<td>3</td>' +
                '<td>5</td>' +
                '<td style="border-left: 2px solid #000000; border-bottom:2px solid #000000;">5</td>' +
                '<td style="border-bottom:2px solid #000000;"></td>' +
                '</tr>' +
                '<tr align="center">' +
                '<td></td>' +
                '<td style="border-bottom:2px solid #000000;">' +
                '<div>-</div>' +
                '</td>' +
                '<td style="border-bottom:2px solid #000000;">' +
                '<input class="inputDiv sinEspacios" onkeypress="return soloNumeros1(event)" maxlength="1" id="act5num21"></input>' +
                '</td>' +
                '<td style="border-bottom:2px solid #000000;">' +
                '<input class="inputDiv sinEspacios" onkeypress="return soloNumeros1(event)" maxlength="1" id="act5num22"></input>' +
                '</td>' +
                '<td style="border-left: 2px solid #000000;">'+
                '<input class="inputDiv sinEspacios" onkeypress="return soloNumeros1(event)" maxlength="1" id="act5num23"></input>' +
                '</td>' +
                '<td></td>' +
                '</tr>' +
                '<tr align="center">' +
                '<td></td>' +
                '<td></td>' +
                '<td></td>' +
                '<td>' +
                '<input class="inputDiv sinEspacios" onkeypress="return soloNumeros1(event)" maxlength="1" id="act5num24"></input>' +
                '</td>' +
                '<td style="border-left: 2px solid #000000;"></td>' +
                '<td></td>' +
                '</tr>' +
                '</table>'+
                '<br><div class="table-responsive">'+
                '<table>' +
                '<tr>'+
                '<td>Dividendo:</td>'+
                '<td><input type="text" style="border:none; border-bottom:2px dotted black; text-align:center; width:50px;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p5dcon21"></td>'+
                '</tr>'+
                '<tr>'+
                '<td>Divisor:</td>'+
                '<td><input type="text" style="border:none; border-bottom:2px dotted black; text-align:center; width:50px;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p5dcon22"></td>'+
                '</tr>'+
                '<tr>'+
                '<td>Cociente:</td>'+
                '<td><input type="text" style="border:none; border-bottom:2px dotted black; text-align:center; width:50px;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p5dcon23"></td>'+
                '</tr>'+
                '<tr>'+
                '<td>Residuo:</td>'+
                '<td><input type="text" style="border:none; border-bottom:2px dotted black; text-align:center; width:50px;" onkeypress="return soloNumeros1(event)" maxlength="2" id="p5dcon24"></td>'+
                '</tr>'+
                '</table>'+
                '</div>'
            ],
        ];
        p5vec1.sort(f_randomico);
        $('#act05Txt0').html(p5vec1[0]);
        $('#act05Txt1').html(p5vec1[1]);
        $('#act05Txt2').html(p5vec1[2]);
        
        bt_comprobar.addEventListener("click", f_comprobar);

        function f_comprobar() {
            cont++;
            AgregaClase(".nota", claseAnimada);
            QuitaClase(".actividad", claseAnimada);
            bt_comprobar.removeEventListener("click", f_comprobar);
            var p1dcon2 = $('#p1dcon2').val();
            var p1dcon6 = $('#p1dcon6').val();
            var p1cont1 = 0;
            if (p1dcon2 == p1vec1[1]) {
                p1cont1++;
                f_ok($('#p1dcon2'));
            } else {
                p1cont1;
                f_no($('#p1dcon2'));
            }
            if (p1dcon6 == p1vec1[1]) {
                p1cont1++;
                f_ok($('#p1dcon6'));
            } else {
                p1cont1;
                f_no($('#p1dcon6'));
            }
            var p1dcon12 = $('#p1dcon12').val();
            var p1dcon16 = $('#p1dcon16').val();
            if (p1dcon12 == p1vec1[3]) {
                p1cont1++;
                f_ok($('#p1dcon12'));
            } else {
                p1cont1;
                f_no($('#p1dcon12'));
            }
            if (p1dcon16 == p1vec1[3]) {
                p1cont1++;
                f_ok($('#p1dcon16'));
            } else {
                p1cont1;
                f_no($('#p1dcon16'));
            }
            var p1dcon22 = $('#p1dcon22').val();
            var p1dcon26 = $('#p1dcon26').val();
            if (p1dcon22 == p1vec1[5]) {
                p1cont1++;
                f_ok($('#p1dcon22'));
            } else {
                p1cont1;
                f_no($('#p1dcon22'));
            }
            if (p1dcon26 == p1vec1[5]) {
                p1cont1++;
                f_ok($('#p1dcon26'));
            } else {
                p1cont1;
                f_no($('#p1dcon26'));
            }
            var result1 = (p1cont1 * 2) / 6;
            cor = cor + result1;
            inc = inc + (2 - result1);
            $('#pre1a').val(result1.toFixed(2));
            $('#pre1a').css('display', '');

            var p2dcon1 = $('#p2dcon1').val();
            var p2dcon2 = $('#p2dcon2').val();
            var p2dcon3 = $('#p2dcon3').val();
            var p2cont1 = 0;
            if (p2dcon1 == p2vec1[0]) {
                p2cont1++;
                f_ok($('#p2dcon1'));
            } else {
                p2cont1;
                f_no($('#p2dcon1'));
            }
            if (p2dcon2 == p2vec1[0]) {
                p2cont1++;
                f_ok($('#p2dcon2'));
            } else {
                p2cont1;
                f_no($('#p2dcon2'));
            }
            if (p2dcon3 == p2vec2[0]) {
                p2cont1++;
                f_ok($('#p2dcon3'));
            } else {
                p2cont1;
                f_no($('#p2dcon3'));
            }
            var p2dcon11 = $('#p2dcon11').val();
            var p2dcon12 = $('#p2dcon12').val();
            var p2dcon13 = $('#p2dcon13').val();
            if (p2dcon11 == p2vec1[2]) {
                p2cont1++;
                f_ok($('#p2dcon11'));
            } else {
                p2cont1;
                f_no($('#p2dcon11'));
            }
            if (p2dcon12 == p2vec1[2]) {
                p2cont1++;
                f_ok($('#p2dcon12'));
            } else {
                p2cont1;
                f_no($('#p2dcon12'));
            }
            if (p2dcon13 == p2vec2[1]) {
                p2cont1++;
                f_ok($('#p2dcon13'));
            } else {
                p2cont1;
                f_no($('#p2dcon13'));
            }
            var p2dcon21 = $('#p2dcon21').val();
            var p2dcon22 = $('#p2dcon22').val();
            var p2dcon23 = $('#p2dcon23').val();
            if (p2dcon21 == p2vec1[4]) {
                p2cont1++;
                f_ok($('#p2dcon21'));
            } else {
                p2cont1;
                f_no($('#p2dcon21'));
            }
            if (p2dcon22 == p2vec1[4]) {
                p2cont1++;
                f_ok($('#p2dcon22'));
            } else {
                p2cont1;
                f_no($('#p2dcon22'));
            }
            if (p2dcon23 == p2vec2[2]) {
                p2cont1++;
                f_ok($('#p2dcon23'));
            } else {
                p2cont1;
                f_no($('#p2dcon23'));
            }
            var p2dcon31 = $('#p2dcon31').val();
            var p2dcon32 = $('#p2dcon32').val();
            var p2dcon33 = $('#p2dcon33').val();
            if (p2dcon31 == p2vec1[6]) {
                p2cont1++;
                f_ok($('#p2dcon31'));
            } else {
                p2cont1;
                f_no($('#p2dcon31'));
            }
            if (p2dcon32 == p2vec1[6]) {
                p2cont1++;
                f_ok($('#p2dcon32'));
            } else {
                p2cont1;
                f_no($('#p2dcon32'));
            }
            if (p2dcon33 == p2vec2[3]) {
                p2cont1++;
                f_ok($('#p2dcon33'));
            } else {
                p2cont1;
                f_no($('#p2dcon33'));
            }
            var p2dcon41 = $('#p2dcon41').val();
            var p2dcon42 = $('#p2dcon42').val();
            var p2dcon43 = $('#p2dcon43').val();
            if (p2dcon41 == p2vec1[8]) {
                p2cont1++;
                f_ok($('#p2dcon41'));
            } else {
                p2cont1;
                f_no($('#p2dcon41'));
            }
            if (p2dcon42 == p2vec1[8]) {
                p2cont1++;
                f_ok($('#p2dcon42'));
            } else {
                p2cont1;
                f_no($('#p2dcon42'));
            }
            if (p2dcon43 == p2vec2[4]) {
                p2cont1++;
                f_ok($('#p2dcon43'));
            } else {
                p2cont1;
                f_no($('#p2dcon43'));
            }
            var p2dcon51 = $('#p2dcon51').val();
            var p2dcon52 = $('#p2dcon52').val();
            var p2dcon53 = $('#p2dcon53').val();
            if (p2dcon51 == p2vec1[10]) {
                p2cont1++;
                f_ok($('#p2dcon51'));
            } else {
                p2cont1;
                f_no($('#p2dcon51'));
            }
            if (p2dcon52 == p2vec1[10]) {
                p2cont1++;
                f_ok($('#p2dcon52'));
            } else {
                p2cont1;
                f_no($('#p2dcon52'));
            }
            if (p2dcon53 == p2vec2[5]) {
                p2cont1++;
                f_ok($('#p2dcon53'));
            } else {
                p2cont1;
                f_no($('#p2dcon53'));
            }
            var result2 = (p2cont1 * 2) / 18;
            cor = cor + result2;
            inc = inc + (2 - result2);
            $('#pre2a').val(result2.toFixed(2));
            $('#pre2a').css('display', '');

            var p3im1 = $('#p3im1 .encierra span').text();
            var p3im2 = $('#p3im2 .encierra span').text();
            var p3cont1 = 0;
            if (!p3im1) {
                p3cont1;
                f_no($('.1'));
            } else {
                if (p3im1 == '9 × 8 = 72') {
                    p3cont1++;
                    f_ok($('#p3im1 .encierra'));
                } else {
                    p3cont1;
                    f_no($('#p3im1 .encierra'));
                }
            }
            if (!p3im2) {
                p3cont1;
                f_no($('.2'));
            } else {
                if (p3im2 == '9 × 10 = 90') {
                    p3cont1++;
                    f_ok($('#p3im2 .encierra'));
                } else {
                    p3cont1;
                    f_no($('#p3im2 .encierra'));
                }
            }
            var result3 = (p3cont1 * 2) / 2;
            cor = cor + result3;
            inc = inc + (2 - result3);
            $('#pre3a').val(result3.toFixed(2));
            $('#pre3a').css('display', '');

            var p4dcon1 = $('#p4dcon1').val();
            var p4dcon2 = $('#p4dcon2').val();
            var p4dcon3 = $('#p4dcon3').val();
            var p4dcon4 = $('#p4dcon4').val();
            var p4dcon5 = $('#p4dcon5').val();
            var p4cont1 = 0;
            if (p4dcon1 == 'c') {
                p4cont1++;
                f_ok($('#p4dcon1'));
            } else {
                p4cont1;
                f_no($('#p4dcon1'));
            }
            if (p4dcon2 == 'd') {
                p4cont1++;
                f_ok($('#p4dcon2'));
            } else {
                p4cont1;
                f_no($('#p4dcon2'));
            }
            if (p4dcon3 == 'e') {
                p4cont1++;
                f_ok($('#p4dcon3'));
            } else {
                p4cont1;
                f_no($('#p4dcon3'));
            }
            if (p4dcon4 == 'a') {
                p4cont1++;
                f_ok($('#p4dcon4'));
            } else {
                p4cont1;
                f_no($('#p4dcon4'));
            }
            if (p4dcon5 == 'b') {
                p4cont1++;
                f_ok($('#p4dcon5'));
            } else {
                p4cont1;
                f_no($('#p4dcon5'));
            }
            var p4i1 = $('#p4i1 .encierra span').text();
            if (!p4i1) {
                p4cont1;
                f_no($('.3'));
            } else {
                if (p4i1 == '1c; 2d; 3e; 4a; 5b') {
                    p4cont1++;
                    f_ok($('#p4i1 .encierra'));
                } else {
                    p4cont1;
                    f_no($('#p4i1 .encierra'));
                }
            }
            var result4 = (p4cont1 * 2) / 6;
            cor = cor + result4;
            inc = inc + (2 - result4);
            $('#pre4a').val(result4.toFixed(2));
            $('#pre4a').css('display', '');

            var act5num1=$('#act5num1').val()+$('#act5num2').val();
            var act5num3=$('#act5num3').val();
            var act5num4=$('#act5num4').val();
            var act5num5=$('#act5num5').val();
            var p5dcon1=$('#p5dcon1').val();
            var p5dcon2=$('#p5dcon2').val();
            var p5dcon3=$('#p5dcon3').val();
            var p5dcon4=$('#p5dcon4').val();
            var p5cont1=0;
            if (act5num1=='56') {
                p5cont1++;
                f_ok($('#act5num1'));
                f_ok($('#act5num2'));
            }else{
                p5cont1;
                f_no($('#act5num1'));
                f_no($('#act5num2'));
            }
            if (act5num3=='7') {
                p5cont1++;
                f_ok($('#act5num3'));
            }else{
                p5cont1;
                f_no($('#act5num3'));
            }
            if (act5num4=='0') {
                p5cont1++;
                f_ok($('#act5num4'));
            }else{
                p5cont1;
                f_no($('#act5num4'));
            }
            if (act5num5=='7') {
                p5cont1++;
                f_ok($('#act5num5'));
            }else{
                p5cont1;
                f_no($('#act5num5'));
            }
            if (p5dcon1=='56') {
                p5cont1++;
                f_ok($('#p5dcon1'));
            }else{
                p5cont1;
                f_no($('#p5dcon1'));
            }
            if (p5dcon2=='8') {
                p5cont1++;
                f_ok($('#p5dcon2'));
            }else{
                p5cont1;
                f_no($('#p5dcon2'));
            }
            if (p5dcon3=='7') {
                p5cont1++;
                f_ok($('#p5dcon3'));
            }else{
                p5cont1;
                f_no($('#p5dcon3'));
            }
            if (p5dcon4=='0') {
                p5cont1++;
                f_ok($('#p5dcon4'));
            }else{
                p5cont1;
                f_no($('#p5dcon4'));
            }

            var act5num11=$('#act5num11').val()+$('#act5num12').val();
            var act5num13=$('#act5num13').val();
            var act5num14=$('#act5num14').val();
            var act5num15=$('#act5num15').val();
            var p5dcon11=$('#p5dcon11').val();
            var p5dcon12=$('#p5dcon12').val();
            var p5dcon13=$('#p5dcon13').val();
            var p5dcon14=$('#p5dcon14').val();
            if (act5num11=='81') {
                p5cont1++;
                f_ok($('#act5num11'));
                f_ok($('#act5num12'));
            }else{
                p5cont1;
                f_no($('#act5num11'));
                f_no($('#act5num12'));
            }
            if (act5num13=='9') {
                p5cont1++;
                f_ok($('#act5num13'));
            }else{
                p5cont1;
                f_no($('#act5num13'));
            }
            if (act5num14=='0') {
                p5cont1++;
                f_ok($('#act5num14'));
            }else{
                p5cont1;
                f_no($('#act5num14'));
            }
            if (act5num15=='9') {
                p5cont1++;
                f_ok($('#act5num15'));
            }else{
                p5cont1;
                f_no($('#act5num15'));
            }
            if (p5dcon11=='81') {
                p5cont1++;
                f_ok($('#p5dcon11'));
            }else{
                p5cont1;
                f_no($('#p5dcon11'));
            }
            if (p5dcon12=='9') {
                p5cont1++;
                f_ok($('#p5dcon12'));
            }else{
                p5cont1;
                f_no($('#p5dcon12'));
            }
            if (p5dcon13=='9') {
                p5cont1++;
                f_ok($('#p5dcon13'));
            }else{
                p5cont1;
                f_no($('#p5dcon13'));
            }
            if (p5dcon14=='0') {
                p5cont1++;
                f_ok($('#p5dcon14'));
            }else{
                p5cont1;
                f_no($('#p5dcon14'));
            }
            var act5num21=$('#act5num21').val()+$('#act5num22').val();
            var act5num23=$('#act5num23').val();
            var act5num24=$('#act5num24').val();
            var act5num25=$('#act5num25').val();
            var p5dcon21=$('#p5dcon21').val();
            var p5dcon22=$('#p5dcon22').val();
            var p5dcon23=$('#p5dcon23').val();
            var p5dcon24=$('#p5dcon24').val();
            if (act5num21=='35') {
                p5cont1++;
                f_ok($('#act5num21'));
                f_ok($('#act5num22'));
            }else{
                p5cont1;
                f_no($('#act5num21'));
                f_no($('#act5num22'));
            }
            if (act5num23=='7') {
                p5cont1++;
                f_ok($('#act5num23'));
            }else{
                p5cont1;
                f_no($('#act5num23'));
            }
            if (act5num24=='0') {
                p5cont1++;
                f_ok($('#act5num24'));
            }else{
                p5cont1;
                f_no($('#act5num24'));
            }
            if (act5num25=='7') {
                p5cont1++;
                f_ok($('#act5num25'));
            }else{
                p5cont1;
                f_no($('#act5num25'));
            }
            if (p5dcon21=='35') {
                p5cont1++;
                f_ok($('#p5dcon21'));
            }else{
                p5cont1;
                f_no($('#p5dcon21'));
            }
            if (p5dcon22=='5') {
                p5cont1++;
                f_ok($('#p5dcon22'));
            }else{
                p5cont1;
                f_no($('#p5dcon22'));
            }
            if (p5dcon23=='7') {
                p5cont1++;
                f_ok($('#p5dcon23'));
            }else{
                p5cont1;
                f_no($('#p5dcon23'));
            }
            if (p5dcon24=='0') {
                p5cont1++;
                f_ok($('#p5dcon24'));
            }else{
                p5cont1;
                f_no($('#p5dcon24'));
            }
            var result5 = (p5cont1 * 2) / 24;
            cor = cor + result5;
            inc = inc + (2 - result5);
            $('#pre5a').val(result5.toFixed(2));
            $('#pre5a').css('display', '');
            Calculo_nota()
        }

    }