var n1 = 0,
    ejer = 1,
    cont = 0,
    itemsT = 0,
    calificacion = 10,
    resp = [],
    tmp_res = [],
    tmp, cor = 0,
    inc = 0;
f_iniciar();

function f_iniciar() {
    itemsT = $(".t1").length;
    tmp_res = [69, 24, 33, 32, 42, 74, 6, 9, 5, 7, 2, 4, 3, 3, 3, 2, 4, 2, 7, 4];
    $(".t1")[0].focus()
    $(".t1").each(function(index) {
        $(this).attr("maxlength", "2");
    });
    $(".btnCalificar").bind("click", function() { //click en el boton iniciar
        $(this).unbind("click");
        cont++;
        $(".t1").each(function(index) {
            tmp = $(this);
            if (tmp.val() == tmp_res[index]) {
                cor++
                f_ok(tmp);
            } else {
                inc++
                f_no(tmp);
            }
        });
        Calculo_nota();
    });
}