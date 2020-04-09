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
    document.getElementById('pre2a').addEventListener('keypress', () => {
        validNumero(0, 2, 1);
    });
    document.getElementById('pre2a').addEventListener('keyup', () => {
        validMaxIngreso(document.getElementById('pre2a'), 2)
    });
    document.getElementById('pre4a').addEventListener('keypress', () => {
        validNumero(0, 2, 1);
    });
    document.getElementById('pre4a').addEventListener('keyup', () => {
        validMaxIngreso(document.getElementById('pre4a'), 2)
    });
    document.getElementById('pre5a').addEventListener('keypress', () => {
        validNumero(0, 2, 1);
    });
    document.getElementById('pre5a').addEventListener('keyup', () => {
        validMaxIngreso(document.getElementById('pre5a'), 2)
    });

    function f_iniciar() {
        var pbvec1 = [];
        for (var i = 2; i <= 30; i++) {
            pbvec1.push(i * 3);
        }
        pbvec1.sort(f_randomico);
        $('#pbim1').html(pbvec1[0]);
        $('#pbim2').html(pbvec1[1]);
        $('#pbim3').html(pbvec1[2]);
        $('#pbim4').html(pbvec1[3]);
        bt_comprobar.addEventListener("click", preg2);

        function preg2() {
            cor = 0;
            var pre2a = $('#pre2a').val();
            if (!pre2a) {
                alert('Ingrese la calificación en el Literal A.')
            } else {
                cor = cor + parseFloat(pre2a);
                inc = inc + (3 - parseFloat(pre2a));
                $('#pre2a').val(parseFloat(pre2a).toFixed(2));
                $('#pre2a').attr('disabled', 'true');
                preg4();
            }

        }
        function preg4() {
            var pre4a = $('#pre4a').val();
            if (!pre4a) {
                alert('Ingrese la calificación en el Literal C.')
            } else {
                cor = cor + parseFloat(pre4a);
                inc = inc + (3 - parseFloat(pre4a));
                $('#pre4a').val(parseFloat(pre4a).toFixed(2));
                $('#pre4a').attr('disabled', 'true');
                preg5();
            }

        }
        function preg5() {
            var pre5a = $('#pre5a').val();
            if (!pre5a) {
                alert('Ingrese la calificación en Pregunta 2.')
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
            bt_comprobar.removeEventListener("click", preg2);
            var p1dcon1 = $('#p1dcon1').val();
            var p1dcon2 = $('#p1dcon2').val();
            var p1dcon3 = $('#p1dcon3').val();
            var p1dcon4 = $('#p1dcon4').val();
            var p1dcon5 = $('#p1dcon5').val();
            var p1dcon6 = $('#p1dcon6').val();
            var p1dcon7 = $('#p1dcon7').val();
            var p1dcon8 = $('#p1dcon8').val();
            var p1dcon9 = $('#p1dcon9').val();
            var p1dcon10 = $('#p1dcon10').val();
            var p1cont1 = 0;
            if (p1dcon1 == '12') {
                p1cont1++;
                f_ok($('#p1dcon1'));
            } else {
                p1cont1;
                f_no($('#p1dcon1'));
            }
            if (p1dcon2 == '8') {
                p1cont1++;
                f_ok($('#p1dcon2'));
            } else {
                p1cont1;
                f_no($('#p1dcon2'));
            }
            if (p1dcon3 == '6') {
                p1cont1++;
                f_ok($('#p1dcon3'));
            } else {
                p1cont1;
                f_no($('#p1dcon3'));
            }
            if (p1dcon4 == '24') {
                p1cont1++;
                f_ok($('#p1dcon4'));
            } else {
                p1cont1;
                f_no($('#p1dcon4'));
            }
            if (p1dcon5 == '3' || p1dcon5 == '8') {
                p1cont1++;
                f_ok($('#p1dcon5'));
            } else {
                p1cont1;
                f_no($('#p1dcon5'));
            }
            if ((p1dcon6 == '8' || p1dcon6 == '3') && p1dcon6 != p1dcon5) {
                p1cont1++;
                f_ok($('#p1dcon6'));
            } else {
                p1cont1;
                f_no($('#p1dcon6'));
            }
            if (p1dcon7 == '24') {
                p1cont1++;
                f_ok($('#p1dcon7'));
            } else {
                p1cont1;
                f_no($('#p1dcon7'));
            }
            if (p1dcon8 == '6' || p1dcon8 == '4') {
                p1cont1++;
                f_ok($('#p1dcon8'));
            } else {
                p1cont1;
                f_no($('#p1dcon8'));
            }
            if ((p1dcon9 == '6' || p1dcon9 == '4') && p1dcon9 != p1dcon8) {
                p1cont1++;
                f_ok($('#p1dcon9'));
            } else {
                p1cont1;
                f_no($('#p1dcon9'));
            }
            if (p1dcon10 == '24') {
                p1cont1++;
                f_ok($('#p1dcon10'));
            } else {
                p1cont1;
                f_no($('#p1dcon10'));
            }
            var result1 = (p1cont1 * 2) / 10;
            cor = cor + result1;
            inc = inc + (2 - result1);
            $('#pre1a').val(result1.toFixed(2));
            $('#pre1a').css('display', '');

            var pbcont1 = 0;
            var pbdcon1 = $('#pbdcon1').val();
            var pbdcon2 = $('#pbdcon2').val();
            var pbdcon3 = $('#pbdcon3').val();
            var pbdcon4 = $('#pbdcon4').val();
            if (pbdcon1 == (pbvec1[0] / 3)) {
                pbcont1++;
                f_ok($('#pbdcon1'));
            } else {
                pbcont1;
                f_no($('#pbdcon1'));
            }
            if (pbdcon2 == (pbvec1[1] / 3)) {
                pbcont1++;
                f_ok($('#pbdcon2'));
            } else {
                pbcont1;
                f_no($('#pbdcon2'));
            }
            if (pbdcon3 == (pbvec1[2] / 3)) {
                pbcont1++;
                f_ok($('#pbdcon3'));
            } else {
                pbcont1;
                f_no($('#pbdcon3'));
            }
            if (pbdcon4 == (pbvec1[3] / 3)) {
                pbcont1++;
                f_ok($('#pbdcon4'));
            } else {
                pbcont1;
                f_no($('#pbdcon4'));
            }
            var result2 = (pbcont1 * 2) / 4;
            cor = cor + result2;
            inc = inc + (2 - result2);
            $('#pre3a').val(result2.toFixed(2));
            $('#pre3a').css('display', '');

            Calculo_nota()
        }

    }