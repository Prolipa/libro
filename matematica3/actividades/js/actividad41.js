var ejer = 1,
    itemsT = (7 * ejer),
    cont = 0,
    tmp, cor = 0,
    inc = 0,
    calificacion = 10,
    claseAnimada = 'animate bounceIn';
var resp = ['pirámide', 'prisma rectangular', 'cilindro', 'prisma', 'esfera', 'cono', 'prisma'];
f_iniciar();

function f_iniciar() {
    $(".c_imagen1, .c_imagen2, .c_imagen3, .c_imagen4").hide();
    $("#n_cont").html(cont + 1);
    $("#n_ejer").html(ejer);
    $("#trace").hide();
    QuitaClase(".nota", claseAnimada);
    AgregaClase(".actividad", claseAnimada);
    $(".t1")[0].focus()
    $(".t1").each(function(index) {
        $(this).val('');
        QuitaClase($(this), 'correcto incorrecto');
        //$(this).val(resp[index]);//respuestas
    });

    $(".btnCalificar").bind("click", function() { //click en el boton iniciar
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        $(this).unbind("click");
        cont++;
        $(".t1").each(function(index) {
            tmp = $(this);
            if (tmp.val() == resp[index]) {
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