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
document.getElementById('nota1_1').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 1)
});

function f_iniciar() {

    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var a91dcon1 = $('#a91dcon1').val();
        var a91dcon2 = $('#a91dcon2').val();
        var a91dcon3 = $('#a91dcon3').val();
        var a91dcon4 = $('#a91dcon4').val();
        var a91dcon5 = $('#a91dcon5').val();
        var a91dcon6 = $('#a91dcon6').val();
        var a91dcon7 = $('#a91dcon7').val();
        var a91dcon8 = $('#a91dcon8').val();
        var a91dcon9 = $('#a91dcon9').val();

        var a91vec1 = ['natación', 'salto largo', 'atletismo', 'la natación', 'el salto largo', 'el atletismo'];
        var a91cont1 = 0;
        var a91cont2 = 0;
        var a91cont3 = 0;
        for (var i = 0; i < a91vec1.length; i++) {
            if (a91dcon1 == a91vec1[i]) {
                a91cont1++;
                a91vec1[i] = a91cont1;
            }
        }
        if (a91cont1 == '1') {
            cor++;
            f_ok($('#a91dcon1'));
        } else {
            inc++;
            f_no($('#a91dcon1'));
        }
        for (var i = 0; i < a91vec1.length; i++) {
            if (a91dcon2 == a91vec1[i]) {
                a91cont2++;
                a91vec1[i] = a91cont2;
            }
        }
        if (a91cont2 == '1') {
            cor++;
            f_ok($('#a91dcon2'));
        } else {
            inc++;
            f_no($('#a91dcon2'));
        }
        for (var i = 0; i < a91vec1.length; i++) {
            if (a91dcon3 == a91vec1[i]) {
                a91cont3++;
                a91vec1[i] = a91cont3;
            }
        }
        if (a91cont3 == '1') {
            cor++;
            f_ok($('#a91dcon3'));
        } else {
            inc++;
            f_no($('#a91dcon3'));
        }
        if (a91dcon4 == '3') {
            cor++;
            f_ok($('#a91dcon4'));
        } else {
            inc++;
            f_no($('#a91dcon4'));
        }
        if (a91dcon5 == '2') {
            cor++;
            f_ok($('#a91dcon5'));
        } else {
            inc++;
            f_no($('#a91dcon5'));
        }
        if (a91dcon6 == '7') {
            cor++;
            f_ok($('#a91dcon6'));
        } else {
            inc++;
            f_no($('#a91dcon6'));
        }
        if (a91dcon7 == '12') {
            cor++;
            f_ok($('#a91dcon7'));
        } else {
            inc++;
            f_no($('#a91dcon7'));
        }
        if (a91dcon8 == 'en atletismo' || a91dcon8 == 'atletismo') {
            cor++;
            f_ok($('#a91dcon8'));
        } else {
            inc++;
            f_no($('#a91dcon8'));
        }
        if (a91dcon9 == 'en natación' || a91dcon9 == 'natación') {
            cor++;
            f_ok($('#a91dcon9'));
        } else {
            inc++;
            f_no($('#a91dcon9'));
        }
        var nota1_1 = $('#nota1_1').val();

        if (!nota1_1) {
            inc = inc + 1;
            f_no($('#nota1_1'));
            $('#nota1_1').attr('disabled', 'true');
        } else {
            cor = cor + parseFloat(nota1_1);
            inc = inc + (1 - parseFloat(nota1_1));
            f_ok($('#nota1_1'));
            $('#nota1_1').attr('disabled', 'true');
        }
        Calculo_nota();
    }
}