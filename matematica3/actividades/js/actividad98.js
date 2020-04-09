var n1 = 0,
    sum_total = 0,
    cont = 0,
    ejer = 1,
    itemsT = 5,
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
        var a98dcon1 = $('#a98dcon1').val().toLowerCase();
        var a98dcon2 = $('#a98dcon2').val();

        if (a98dcon1 == 'universo') {
            cor++;
            f_ok($('#a98dcon1'));
        } else {
            inc++;
            f_no($('#a98dcon1'));
        }
        if (a98dcon2 == 'U') {
            cor++;
            f_ok($('#a98dcon2'));
        } else {
            inc++;
            f_no($('#a98dcon2'));
        }
        var a98sel1 = $('#a98sel1').val();
        var a98sel2 = $('#a98sel2').val();
        var a98sel3 = $('#a98sel3').val();
        if (a98sel1 == '⊂') {
            cor++;
            f_ok($('#a98sel1'));
        } else {
            inc++;
            f_no($('#a98sel1'));
        }
        if (a98sel2 == '⊂') {
            cor++;
            f_ok($('#a98sel2'));
        } else {
            inc++;
            f_no($('#a98sel2'));
        }
        if (a98sel3 == '⊄') {
            cor++;
            f_ok($('#a98sel3'));
        } else {
            inc++;
            f_no($('#a98sel3'));
        }
        Calculo_nota();
    }
}