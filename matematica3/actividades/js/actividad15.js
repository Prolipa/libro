var n1 = 0,
    n2 = 0,
    n3 = 0,
    n4 = 0,
    cont = 0,
    ejer = 5,
    itemsT = 7 * ejer,
    cor = 0,
    inc = 0,
    calificacion = 10,
    resp = [],
    resp_temp = [],
    t1, t2, obj;
var claseAnimada = 'animate bounceIn';
f_iniciar();

function f_iniciar() {
    QuitaClase(".nota", claseAnimada);
    AgregaClase(".actividad", claseAnimada);
    $("#n_cont").html(cont + 1);
    $("#n_ejer").html(ejer);
    $("#trace").hide();
    resp = [], resp_temp = [];
    n1 = (Math.floor(Math.random() * 5) + 1);
    n2 = (Math.floor(Math.random() * 5) + 1);
    n3 = (Math.floor(Math.random() * 4) + 1);
    n4 = (Math.floor(Math.random() * 4) + 1);
    $(".n1").html(n1);
    $(".n2").html(n2);
    $(".n3").html(n3);
    $(".n4").html(n4);
    $(".r1")[0].focus();
    $("input").each(function() {
        $(this).val('');
        QuitaClase(this, "correcto incorrecto");
    })
    resp.push((n1 * 10) + n2, (n1 + n3 + "D"), n1 + n3, ((n1 + n3) * 10) + n2, (n1 * 10) + n2 + n4);
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        var temp;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        $('.r1').each(function() {
            temp = $(this);
            if ($(this).val() == resp[0]) {
                cor++;
                f_ok(temp);
            } else {
                inc++;
                f_no(temp);
            };
        });
        temp = $('.r2');
        if ($('.r2').val().toUpperCase() == resp[1]) {
            cor++;
            f_ok(temp);
        } else {
            inc++;
            f_no(temp);
        };
        temp = $('.r3');
        if ($('.r3').val() == resp[2]) {
            cor++;
            f_ok(temp);
        } else {
            inc++;
            f_no(temp);
        };
        temp = $('.r4');
        if ($('.r4').val() == resp[3]) {
            cor++;
            f_ok(temp);
        } else {
            inc++;
            f_no(temp);
        };
        $('.r5').each(function() {
            temp = $(this);
            if ($(this).val() == resp[4]) {
                cor++;
                f_ok(temp);
            } else {
                inc++;
                f_no(temp);
            };
        });
        Calculo_nota();
    }
}