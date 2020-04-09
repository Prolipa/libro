var n1 = 0,
    sum_total = 0,
    cont = 0,
    ejer = 1,
    itemsT = 9,
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

    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var a99dcon1 = $('#a99dcon1').val();
        var a99dcon2 = $('#a99dcon2').val();
        var a99dcon3 = $('#a99dcon3').val();
        var a99dcon4 = $('#a99dcon4').val();
        var a99dcon5 = $('#a99dcon5').val();
        var a99dcon6 = $('#a99dcon6').val();
        if (a99dcon1 == 'subconjunto') {
            cor++;
            f_ok($('#a99dcon1'));
        } else {
            inc++;
            f_no($('#a99dcon1'));
        }
        if (a99dcon2 == 'contenido') {
            cor++;
            f_ok($('#a99dcon2'));
        } else {
            inc++;
            f_no($('#a99dcon2'));
        }
        if (a99dcon3 == 'subconjunto') {
            cor++;
            f_ok($('#a99dcon3'));
        } else {
            inc++;
            f_no($('#a99dcon3'));
        }
        if (a99dcon4 == 'contenido') {
            cor++;
            f_ok($('#a99dcon4'));
        } else {
            inc++;
            f_no($('#a99dcon4'));
        }
        if (a99dcon5 == 'no es subconjunto') {
            cor++;
            f_ok($('#a99dcon5'));
        } else {
            inc++;
            f_no($('#a99dcon5'));
        }
        if (a99dcon6 == 'no está contenido') {
            cor++;
            f_ok($('#a99dcon6'));
        } else {
            inc++;
            f_no($('#a99dcon6'));
        }


        var a99sel1 = $('#a99sel1').val();
        var a99sel2 = $('#a99sel2').val();
        var a99sel3 = $('#a99sel3').val();
        if (a99sel1 == '⊂') {
            cor++;
            f_ok($('#a99sel1'));
        } else {
            inc++;
            f_no($('#a99sel1'));
        }
        if (a99sel2 == '⊂') {
            cor++;
            f_ok($('#a99sel2'));
        } else {
            inc++;
            f_no($('#a99sel2'));
        }
        if (a99sel3 == '⊄') {
            cor++;
            f_ok($('#a99sel3'));
        } else {
            inc++;
            f_no($('#a99sel3'));
        }
        Calculo_nota();
    }
}