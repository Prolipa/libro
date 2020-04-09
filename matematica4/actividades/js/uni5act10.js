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
    document.getElementById('pre3a').addEventListener('keypress', () => {
        validNumero(0, 2, 1);
    });
    document.getElementById('pre3a').addEventListener('keyup', () => {
        validMaxIngreso(document.getElementById('pre3a'), 2)
    });

    function f_iniciar() {
        var p2vec1 = [
            '<div style="display: inline-block; padding: 15px;" align="center">' +
            '<img src="img/i1_p201_u5a10.jpg" class="img-responsive">' +
            '<input type="text" style="border: none; border-bottom: 2px dotted black; width: 100px; text-align: center;" onkeyup="mayus(this)" id="p2dcon1">' +
            '</div>',
            '<div style="display: inline-block; padding: 15px;" align="center">' +
            '<img src="img/i2_p201_u5a10.jpg" class="img-responsive">' +
            '<input type="text" style="border: none; border-bottom: 2px dotted black; width: 100px; text-align: center;" onkeyup="mayus(this)" id="p2dcon2">' +
            '</div>',
            '<div style="display: inline-block; padding: 15px;" align="center">' +
            '<img src="img/i3_p201_u5a10.jpg" class="img-responsive">' +
            '<input type="text" style="border: none; border-bottom: 2px dotted black; width: 100px; text-align: center;" onkeyup="mayus(this)" id="p2dcon3">' +
            '</div>',
            '<div style="display: inline-block; padding: 15px;" align="center">' +
            '<img src="img/i4_p201_u5a10.jpg" class="img-responsive">' +
            '<input type="text" style="border: none; border-bottom: 2px dotted black; width: 100px; text-align: center;" onkeyup="mayus(this)" id="p2dcon4">' +
            '</div>',
        ];
        p2vec1.sort(f_randomico);
        $('#p2im1').html(p2vec1);

        var p3vec1 = [
            '<div style="display: inline-block; padding: 15px;" align="center">' +
            '<img src="img/i5_p201_u5a10.jpg" class="img-responsive">' +
            '<p><input type="text" style="border: none; border-bottom: 2px dotted black; width: 60px; text-align: center;" maxlength="4" onkeypress="return soloNumeros1(event)"> kilogramo</p>' +
            '</div>',
            '<div style="display: inline-block; padding: 15px;" align="center">' +
            '<img src="img/i6_p201_u5a10.jpg" class="img-responsive">' +
            '<p><input type="text" style="border: none; border-bottom: 2px dotted black; width: 60px; text-align: center;" maxlength="4" onkeypress="return soloNumeros1(event)"> kilogramo</p>' +
            '</div>',
            '<div style="display: inline-block; padding: 15px;" align="center">' +
            '<img src="img/i7_p201_u5a10.jpg" class="img-responsive">' +
            '<p><input type="text" style="border: none; border-bottom: 2px dotted black; width: 60px; text-align: center;" maxlength="4" onkeypress="return soloNumeros1(event)">gramo</p>' +
            '</div>',
            '<div style="display: inline-block; padding: 15px;" align="center">' +
            '<img src="img/i8_p201_u5a10.jpg" class="img-responsive">' +
            '<p><input type="text" style="border: none; border-bottom: 2px dotted black; width: 60px; text-align: center;" maxlength="4" onkeypress="return soloNumeros1(event)"> kilogramo</p>' +
            '</div>',
        ];
        p3vec1.sort(f_randomico);
        $('#p3im1').html(p3vec1);

        var p4vec1 = [
            '<div style="display: inline-block; padding: 15px;" align="center">' +
            '<img src="img/i9_p201_u5a10.jpg" class="img-responsive">' +
            '<p>El fréjol pesa <input type="text" style="border: none; border-bottom: 2px dotted black; width: 60px; text-align: center;" maxlength="4" onkeypress="return soloNumeros1(event)" id="p4dcon1"> kg</p>' +
            '</div>' ,
            '<div style="display: inline-block; padding: 15px;" align="center">' +
            '<img src="img/i10_p201_u5a10.jpg" class="img-responsive">' +
            '<p>Las fresas pesan <input type="text" style="border: none; border-bottom: 2px dotted black; width: 60px; text-align: center;" maxlength="4" onkeypress="return soloNumeros1(event)" id="p4dcon2"> kg</p>' +
            '</div>' ,
            '<div style="display: inline-block; padding: 15px;" align="center">' +
            '<img src="img/i11_p201_u5a10.jpg" class="img-responsive">' +
            '<p>El perro pesa <input type="text" style="border: none; border-bottom: 2px dotted black; width: 60px; text-align: center;" maxlength="4" onkeypress="return soloNumeros1(event)" id="p4dcon3"> kg</p>' +
            '</div>' ,
        ];
        p4vec1.sort(f_randomico);
        $('#p4im1').html(p4vec1);
        bt_comprobar.addEventListener("click", preg3);

        function preg3() {
            cor = 0;
            var pre3a = $('#pre3a').val();
            if (!pre3a) {
                alert('Ingrese la calificación en la pregunta 3.')
            } else {
                cor = cor + parseFloat(pre3a);
                inc = inc + (2 - parseFloat(pre3a));
                $('#pre3a').val(parseFloat(pre3a).toFixed(2));
                $('#pre3a').attr('disabled', 'true');
                f_comprobar();
            }

        }

        function f_comprobar() {
            cont++;
            AgregaClase(".nota", claseAnimada);
            QuitaClase(".actividad", claseAnimada);
            bt_comprobar.removeEventListener("click", preg3);
            var p1dcon1 = $('#p1dcon1').val();
            var p1dcon2 = $('#p1dcon2').val();
            var p1dcon4 = $('#p1dcon4').val();
            var p1cont1 = 0;
            if (p1dcon1 == '500') {
                p1cont1++;
                f_ok($('#p1dcon1'));
            } else {
                p1cont1;
                f_no($('#p1dcon1'));
            }
            if (p1dcon2 == '500') {
                p1cont1++;
                f_ok($('#p1dcon2'));
            } else {
                p1cont1;
                f_no($('#p1dcon2'));
            }
            if (p1dcon4 == '500') {
                p1cont1++;
                f_ok($('#p1dcon4'));
            } else {
                p1cont1;
                f_no($('#p1dcon4'));
            }
            var result1 = (p1cont1 * 2) / 3;
            cor = cor + result1;
            inc = inc + (2 - result1);
            $('#pre1a').val(result1.toFixed(2));
            $('#pre1a').css('display', '');

            var p2dcon1 = $('#p2dcon1').val();
            var p2dcon2 = $('#p2dcon2').val();
            var p2dcon3 = $('#p2dcon3').val();
            var p2dcon4 = $('#p2dcon4').val();
            var p2cont1 = 0;
            if (p2dcon1 == 'gramo') {
                p2cont1++;
                f_ok($('#p2dcon1'));
            } else {
                p2cont1;
                f_no($('#p2dcon1'));
            }
            if (p2dcon2 == 'kilogramo') {
                p2cont1++;
                f_ok($('#p2dcon2'));
            } else {
                p2cont1;
                f_no($('#p2dcon2'));
            }
            if (p2dcon3 == 'kilogramo') {
                p2cont1++;
                f_ok($('#p2dcon3'));
            } else {
                p2cont1;
                f_no($('#p2dcon3'));
            }
            if (p2dcon4 == 'gramo') {
                p2cont1++;
                f_ok($('#p2dcon4'));
            } else {
                p2cont1;
                f_no($('#p2dcon4'));
            }
            var result2 = (p2cont1 * 2) / 4;
            cor = cor + result2;
            inc = inc + (2 - result2);
            $('#pre2a').val(result2.toFixed(2));
            $('#pre2a').css('display', '');

            var p4dcon1 = $('#p4dcon1').val();
            var p4dcon2 = $('#p4dcon2').val();
            var p4dcon3 = $('#p4dcon3').val();
            var p4cont1 = 0;
            if (p4dcon1 == '2') {
                p4cont1++;
                f_ok($('#p4dcon1'));
            } else {
                p4cont1;
                f_no($('#p4dcon1'));
            }
            if (p4dcon2 == '4') {
                p4cont1++;
                f_ok($('#p4dcon2'));
            } else {
                p4cont1;
                f_no($('#p4dcon2'));
            }
            if (p4dcon3 == '8') {
                p4cont1++;
                f_ok($('#p4dcon3'));
            } else {
                p4cont1;
                f_no($('#p4dcon3'));
            }
            var result3 = (p4cont1 * 2) / 3;
            cor = cor + result3;
            inc = inc + (2 - result3);
            $('#pre4a').val(result3.toFixed(2));
            $('#pre4a').css('display', '');

            var p5dcon1=$('#p5dcon1').val()+$('#p5dcon2').val()+$('#p5dcon3').val();
            var p5dcon4=$('#p5dcon4').val();
            var p5cont1=0;
            if (p5dcon1 == '428' || p5dcon1 == '248') {
                p5cont1++;
                f_ok($('#p5dcon1'));
                f_ok($('#p5dcon2'));
                f_ok($('#p5dcon3'));
            } else {
                p5cont1;
                f_no($('#p5dcon1'));
                f_no($('#p5dcon2'));
                f_no($('#p5dcon3'));
            }
            if (p5dcon4 == '8') {
                p5cont1++;
                f_ok($('#p5dcon4'));
            } else {
                p5cont1;
                f_no($('#p5dcon4'));
            }

            var act5num1=$('#act5num1').val()+$('#act5num2').val()+$('#act5num3').val();
            var act5num4=$('#act5num4').val()+$('#act5num5').val()+$('#act5num6').val();
            var act5num7=$('#act5num7').val()+$('#act5num8').val()+$('#act5num9').val();
            if (act5num1 == '800') {
                p5cont1++;
                f_ok($('#act5num1'));
                f_ok($('#act5num2'));
                f_ok($('#act5num3'));
            } else {
                p5cont1;
                f_no($('#act5num1'));
                f_no($('#act5num2'));
                f_no($('#act5num3'));
            }
            if (act5num4 == '682') {
                p5cont1++;
                f_ok($('#act5num4'));
                f_ok($('#act5num5'));
                f_ok($('#act5num6'));
            } else {
                p5cont1;
                f_no($('#act5num4'));
                f_no($('#act5num5'));
                f_no($('#act5num6'));
            }
            if (act5num7 == '118') {
                p5cont1++;
                f_ok($('#act5num7'));
                f_ok($('#act5num8'));
                f_ok($('#act5num9'));
            } else {
                p5cont1;
                f_no($('#act5num7'));
                f_no($('#act5num8'));
                f_no($('#act5num9'));
            }
            var p51dcon4=$('#p51dcon4').val();
            if (p51dcon4 == '118') {
                p5cont1++;
                f_ok($('#p51dcon4'));
            } else {
                p5cont1;
                f_no($('#p51dcon4'));
            }
            var result5 = (p5cont1 * 2) / 6;
            cor = cor + result5;
            inc = inc + (2 - result5);
            $('#pre5a').val(result5.toFixed(2));
            $('#pre5a').css('display', '');
            Calculo_nota()
        }

    }