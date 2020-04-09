var n1 = 0,
    sum_total = 0,
    cont = 0,
    ejer = 1,
    itemsT = 18,
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
    var a108num1 = [parseInt((Math.random() * 400) + 100), parseInt((Math.random() * 400) + 100), parseInt((Math.random() * 400) + 100), parseInt((Math.random() * 400) + 100), parseInt((Math.random() * 400) + 100), parseInt((Math.random() * 400) + 100), parseInt((Math.random() * 400) + 100), parseInt((Math.random() * 400) + 100), parseInt((Math.random() * 400) + 100), parseInt((Math.random() * 400) + 100), parseInt((Math.random() * 400) + 100), parseInt((Math.random() * 400) + 100)];

    var p5aux1 = [];
    var myArray1 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
    var i, j, k;
    for (i = myArray1.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray1[i - 1];
        myArray1[i - 1] = myArray1[j];
        myArray1[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 12; i++) {
        var c = myArray1[i - 1];
        $("#a109im" + i).html(a108num1[c]);
        p5aux1.push(a108num1[c]);

    };
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var a109dcon1 = [$('#a109dcon1').val(), $('#a109dcon2').val(), $('#a109dcon3').val()];
        a109dcon1 = a109dcon1.join('');
        var a109dcon2 = [$('#a109dcon4').val(), $('#a109dcon5').val(), $('#a109dcon6').val()];
        a109dcon2 = a109dcon2.join('');
        var a109dcon3 = [$('#a109dcon7').val(), $('#a109dcon8').val(), $('#a109dcon9').val()];
        a109dcon3 = a109dcon3.join('');

        if (a109dcon1 == p5aux1[0]) {
            cor++;
            f_ok($('#a109dcon1'));
            f_ok($('#a109dcon2'));
            f_ok($('#a109dcon3'));
        } else {
            inc++;
            f_no($('#a109dcon1'));
            f_no($('#a109dcon2'));
            f_no($('#a109dcon3'));
        }
        if (a109dcon2 == p5aux1[1]) {
            cor++;
            f_ok($('#a109dcon4'));
            f_ok($('#a109dcon5'));
            f_ok($('#a109dcon6'));
        } else {
            inc++;
            f_no($('#a109dcon4'));
            f_no($('#a109dcon5'));
            f_no($('#a109dcon6'));
        }
        if (a109dcon3 == (parseInt(p5aux1[0]) + parseInt(p5aux1[1]))) {
            cor++;
            f_ok($('#a109dcon7'));
            f_ok($('#a109dcon8'));
            f_ok($('#a109dcon9'));
        } else {
            inc++;
            f_no($('#a109dcon7'));
            f_no($('#a109dcon8'));
            f_no($('#a109dcon9'));
        }


        var a1091dcon1 = [$('#a1091dcon1').val(), $('#a1091dcon2').val(), $('#a1091dcon3').val()];
        a1091dcon1 = a1091dcon1.join('');
        var a1091dcon2 = [$('#a1091dcon4').val(), $('#a1091dcon5').val(), $('#a1091dcon6').val()];
        a1091dcon2 = a1091dcon2.join('');
        var a1091dcon3 = [$('#a1091dcon7').val(), $('#a1091dcon8').val(), $('#a1091dcon9').val()];
        a1091dcon3 = a1091dcon3.join('');

        if (a1091dcon1 == p5aux1[2]) {
            cor++;
            f_ok($('#a1091dcon1'));
            f_ok($('#a1091dcon2'));
            f_ok($('#a1091dcon3'));
        } else {
            inc++;
            f_no($('#a1091dcon1'));
            f_no($('#a1091dcon2'));
            f_no($('#a1091dcon3'));
        }
        if (a1091dcon2 == p5aux1[3]) {
            cor++;
            f_ok($('#a1091dcon4'));
            f_ok($('#a1091dcon5'));
            f_ok($('#a1091dcon6'));
        } else {
            inc++;
            f_no($('#a1091dcon4'));
            f_no($('#a1091dcon5'));
            f_no($('#a1091dcon6'));
        }
        if (a1091dcon3 == (parseInt(p5aux1[2]) + parseInt(p5aux1[3]))) {
            cor++;
            f_ok($('#a1091dcon7'));
            f_ok($('#a1091dcon8'));
            f_ok($('#a1091dcon9'));
        } else {
            inc++;
            f_no($('#a1091dcon7'));
            f_no($('#a1091dcon8'));
            f_no($('#a1091dcon9'));
        }


        var a1092dcon1 = [$('#a1092dcon1').val(), $('#a1092dcon2').val(), $('#a1092dcon3').val()];
        a1092dcon1 = a1092dcon1.join('');
        var a1092dcon2 = [$('#a1092dcon4').val(), $('#a1092dcon5').val(), $('#a1092dcon6').val()];
        a1092dcon2 = a1092dcon2.join('');
        var a1092dcon3 = [$('#a1092dcon7').val(), $('#a1092dcon8').val(), $('#a1092dcon9').val()];
        a1092dcon3 = a1092dcon3.join('');

        if (a1092dcon1 == p5aux1[4]) {
            cor++;
            f_ok($('#a1092dcon1'));
            f_ok($('#a1092dcon2'));
            f_ok($('#a1092dcon3'));
        } else {
            inc++;
            f_no($('#a1092dcon1'));
            f_no($('#a1092dcon2'));
            f_no($('#a1092dcon3'));
        }
        if (a1092dcon2 == p5aux1[5]) {
            cor++;
            f_ok($('#a1092dcon4'));
            f_ok($('#a1092dcon5'));
            f_ok($('#a1092dcon6'));
        } else {
            inc++;
            f_no($('#a1092dcon4'));
            f_no($('#a1092dcon5'));
            f_no($('#a1092dcon6'));
        }
        if (a1092dcon3 == (parseInt(p5aux1[4]) + parseInt(p5aux1[5]))) {
            cor++;
            f_ok($('#a1092dcon7'));
            f_ok($('#a1092dcon8'));
            f_ok($('#a1092dcon9'));
        } else {
            inc++;
            f_no($('#a1092dcon7'));
            f_no($('#a1092dcon8'));
            f_no($('#a1092dcon9'));
        }


        var a1093dcon1 = [$('#a1093dcon1').val(), $('#a1093dcon2').val(), $('#a1093dcon3').val()];
        a1093dcon1 = a1093dcon1.join('');
        var a1093dcon2 = [$('#a1093dcon4').val(), $('#a1093dcon5').val(), $('#a1093dcon6').val()];
        a1093dcon2 = a1093dcon2.join('');
        var a1093dcon3 = [$('#a1093dcon7').val(), $('#a1093dcon8').val(), $('#a1093dcon9').val()];
        a1093dcon3 = a1093dcon3.join('');

        if (a1093dcon1 == p5aux1[6]) {
            cor++;
            f_ok($('#a1093dcon1'));
            f_ok($('#a1093dcon2'));
            f_ok($('#a1093dcon3'));
        } else {
            inc++;
            f_no($('#a1093dcon1'));
            f_no($('#a1093dcon2'));
            f_no($('#a1093dcon3'));
        }
        if (a1093dcon2 == p5aux1[7]) {
            cor++;
            f_ok($('#a1093dcon4'));
            f_ok($('#a1093dcon5'));
            f_ok($('#a1093dcon6'));
        } else {
            inc++;
            f_no($('#a1093dcon4'));
            f_no($('#a1093dcon5'));
            f_no($('#a1093dcon6'));
        }
        if (a1093dcon3 == (parseInt(p5aux1[6]) + parseInt(p5aux1[7]))) {
            cor++;
            f_ok($('#a1093dcon7'));
            f_ok($('#a1093dcon8'));
            f_ok($('#a1093dcon9'));
        } else {
            inc++;
            f_no($('#a1093dcon7'));
            f_no($('#a1093dcon8'));
            f_no($('#a1093dcon9'));
        }



        var a1094dcon1 = [$('#a1094dcon1').val(), $('#a1094dcon2').val(), $('#a1094dcon3').val()];
        a1094dcon1 = a1094dcon1.join('');
        var a1094dcon2 = [$('#a1094dcon4').val(), $('#a1094dcon5').val(), $('#a1094dcon6').val()];
        a1094dcon2 = a1094dcon2.join('');
        var a1094dcon3 = [$('#a1094dcon7').val(), $('#a1094dcon8').val(), $('#a1094dcon9').val()];
        a1094dcon3 = a1094dcon3.join('');

        if (a1094dcon1 == p5aux1[8]) {
            cor++;
            f_ok($('#a1094dcon1'));
            f_ok($('#a1094dcon2'));
            f_ok($('#a1094dcon3'));
        } else {
            inc++;
            f_no($('#a1094dcon1'));
            f_no($('#a1094dcon2'));
            f_no($('#a1094dcon3'));
        }
        if (a1094dcon2 == p5aux1[9]) {
            cor++;
            f_ok($('#a1094dcon4'));
            f_ok($('#a1094dcon5'));
            f_ok($('#a1094dcon6'));
        } else {
            inc++;
            f_no($('#a1094dcon4'));
            f_no($('#a1094dcon5'));
            f_no($('#a1094dcon6'));
        }
        if (a1094dcon3 == (parseInt(p5aux1[8]) + parseInt(p5aux1[9]))) {
            cor++;
            f_ok($('#a1094dcon7'));
            f_ok($('#a1094dcon8'));
            f_ok($('#a1094dcon9'));
        } else {
            inc++;
            f_no($('#a1094dcon7'));
            f_no($('#a1094dcon8'));
            f_no($('#a1094dcon9'));
        }

        var a1095dcon1 = [$('#a1095dcon1').val(), $('#a1095dcon2').val(), $('#a1095dcon3').val()];
        a1095dcon1 = a1095dcon1.join('');
        var a1095dcon2 = [$('#a1095dcon4').val(), $('#a1095dcon5').val(), $('#a1095dcon6').val()];
        a1095dcon2 = a1095dcon2.join('');
        var a1095dcon3 = [$('#a1095dcon7').val(), $('#a1095dcon8').val(), $('#a1095dcon9').val()];
        a1095dcon3 = a1095dcon3.join('');

        if (a1095dcon1 == p5aux1[10]) {
            cor++;
            f_ok($('#a1095dcon1'));
            f_ok($('#a1095dcon2'));
            f_ok($('#a1095dcon3'));
        } else {
            inc++;
            f_no($('#a1095dcon1'));
            f_no($('#a1095dcon2'));
            f_no($('#a1095dcon3'));
        }
        if (a1095dcon2 == p5aux1[11]) {
            cor++;
            f_ok($('#a1095dcon4'));
            f_ok($('#a1095dcon5'));
            f_ok($('#a1095dcon6'));
        } else {
            inc++;
            f_no($('#a1095dcon4'));
            f_no($('#a1095dcon5'));
            f_no($('#a1095dcon6'));
        }
        if (a1095dcon3 == (parseInt(p5aux1[10]) + parseInt(p5aux1[11]))) {
            cor++;
            f_ok($('#a1095dcon7'));
            f_ok($('#a1095dcon8'));
            f_ok($('#a1095dcon9'));
        } else {
            inc++;
            f_no($('#a1095dcon7'));
            f_no($('#a1095dcon8'));
            f_no($('#a1095dcon9'));
        }
        Calculo_nota();
    }
}