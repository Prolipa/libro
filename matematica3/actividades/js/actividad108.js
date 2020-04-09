var n1 = 0,
    sum_total = 0,
    cont = 0,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    str = '',
    calificacion = 10;
var claseAnimada = 'animate bounceIn';
f_iniciar();

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}

function f_iniciar() {
    var a108num1 = ['img/i1_p99_act108.jpg', 'img/i2_p99_act108.jpg', 'img/i3_p99_act108.jpg', 'img/i4_p99_act108.jpg'];
    var a108num2 = ['452', '436', '371', '514'];
    var p5aux1 = [];
    var myArray1 = ['0', '1', '2', '3'];
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 4; i++) {
        var c = myArray1[i - 1];
        $("#a108im" + i).attr('src', a108num1[c]);
        p5aux1.push(a108num2[c]);

    };
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var a108dcon1 = [$('#a108dcon1').val(), $('#a108dcon2').val(), $('#a108dcon3').val()];
        a108dcon1 = a108dcon1.join('');
        var a108dcon2 = [$('#a108dcon4').val(), $('#a108dcon5').val(), $('#a108dcon6').val()];
        a108dcon2 = a108dcon2.join('');
        var a108dcon3 = [$('#a108dcon7').val(), $('#a108dcon8').val(), $('#a108dcon9').val()];
        a108dcon3 = a108dcon3.join('');
        var a108dcon4 = [$('#a108dcon10').val(), $('#a108dcon11').val(), $('#a108dcon12').val()];
        a108dcon4 = a108dcon4.join('');
        if (a108dcon1 == p5aux1[0]) {
            cor++;
            f_ok($('#a108dcon1'));
            f_ok($('#a108dcon2'));
            f_ok($('#a108dcon3'));
        } else {
            inc++;
            f_no($('#a108dcon1'));
            f_no($('#a108dcon2'));
            f_no($('#a108dcon3'));
        }
        if (a108dcon2 == p5aux1[1]) {
            cor++;
            f_ok($('#a108dcon4'));
            f_ok($('#a108dcon5'));
            f_ok($('#a108dcon6'));
        } else {
            inc++;
            f_no($('#a108dcon4'));
            f_no($('#a108dcon5'));
            f_no($('#a108dcon6'));
        }
        if (a108dcon3 == p5aux1[2]) {
            cor++;
            f_ok($('#a108dcon7'));
            f_ok($('#a108dcon8'));
            f_ok($('#a108dcon9'));
        } else {
            inc++;
            f_no($('#a108dcon7'));
            f_no($('#a108dcon8'));
            f_no($('#a108dcon9'));
        }
        if (a108dcon4 == p5aux1[3]) {
            cor++;
            f_ok($('#a108dcon10'));
            f_ok($('#a108dcon11'));
            f_ok($('#a108dcon12'));
        } else {
            inc++;
            f_no($('#a108dcon10'));
            f_no($('#a108dcon11'));
            f_no($('#a108dcon12'));
        }

        var a1081dcon1 = [$('#a1081dcon1').val(), $('#a1081dcon2').val(), $('#a1081dcon3').val()];
        a1081dcon1 = a1081dcon1.join('');
        var a1081dcon2 = [$('#a1081dcon4').val(), $('#a1081dcon5').val(), $('#a1081dcon6').val()];
        a1081dcon2 = a1081dcon2.join('');
        var a1081dcon3 = [$('#a1081dcon7').val(), $('#a1081dcon8').val(), $('#a1081dcon9').val()];
        a1081dcon3 = a1081dcon3.join('');
        var a1081dcon4 = [$('#a1081dcon10').val(), $('#a1081dcon11').val(), $('#a1081dcon12').val()];
        a1081dcon4 = a1081dcon4.join('');
        var a1081dcon5 = [$('#a1081dcon13').val(), $('#a1081dcon14').val(), $('#a1081dcon15').val()];
        a1081dcon5 = a1081dcon5.join('');
        var a1081dcon6 = [$('#a1081dcon16').val(), $('#a1081dcon17').val(), $('#a1081dcon18').val()];
        a1081dcon6 = a1081dcon6.join('');
        if (a1081dcon1 == p5aux1[0]) {
            cor++;
            f_ok($('#a1081dcon1'));
            f_ok($('#a1081dcon2'));
            f_ok($('#a1081dcon3'));
        } else {
            inc++;
            f_no($('#a1081dcon1'));
            f_no($('#a1081dcon2'));
            f_no($('#a1081dcon3'));
        }
        if (a1081dcon2 == p5aux1[1]) {
            cor++;
            f_ok($('#a1081dcon4'));
            f_ok($('#a1081dcon5'));
            f_ok($('#a1081dcon6'));
        } else {
            inc++;
            f_no($('#a1081dcon4'));
            f_no($('#a1081dcon5'));
            f_no($('#a1081dcon6'));
        }
        if (a1081dcon3 == (parseInt(p5aux1[0]) + parseInt(p5aux1[1]))) {
            cor++;
            f_ok($('#a1081dcon7'));
            f_ok($('#a1081dcon8'));
            f_ok($('#a1081dcon9'));
        } else {
            inc++;
            f_no($('#a1081dcon7'));
            f_no($('#a1081dcon8'));
            f_no($('#a1081dcon9'));
        }
        if (a1081dcon4 == p5aux1[2]) {
            cor++;
            f_ok($('#a1081dcon10'));
            f_ok($('#a1081dcon11'));
            f_ok($('#a1081dcon12'));
        } else {
            inc++;
            f_no($('#a1081dcon10'));
            f_no($('#a1081dcon11'));
            f_no($('#a1081dcon12'));
        }
        if (a1081dcon5 == p5aux1[3]) {
            cor++;
            f_ok($('#a1081dcon13'));
            f_ok($('#a1081dcon14'));
            f_ok($('#a1081dcon15'));
        } else {
            inc++;
            f_no($('#a1081dcon13'));
            f_no($('#a1081dcon14'));
            f_no($('#a1081dcon15'));
        }
        if (a1081dcon6 == (parseInt(p5aux1[2]) + parseInt(p5aux1[3]))) {
            cor++;
            f_ok($('#a1081dcon16'));
            f_ok($('#a1081dcon17'));
            f_ok($('#a1081dcon18'));
        } else {
            inc++;
            f_no($('#a1081dcon16'));
            f_no($('#a1081dcon17'));
            f_no($('#a1081dcon18'));
        }
        Calculo_nota();
    }
}