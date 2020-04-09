var ejer = 5,
    itemsT = (4 * ejer),
    cont = 0,
    tmp, cor = 0,
    inc = 0,
    calificacion = 10,
    claseAnimada = 'animate bounceIn';
var n1 = 0,
    resp = [],
    i_nums = [];
f_iniciar();

function f_iniciar() {
    $("#n_cont").html(cont + 1);
    $("#n_ejer").html(ejer);
    $("#trace").hide();
    QuitaClase(".nota", claseAnimada);
    AgregaClase(".actividad", claseAnimada);
    i_nums = [], resp = [];
    $(".n1").each(function(index) {
        n1 = Math.floor(Math.random() * 15) + 1;
        $(this).html(n1);
        resp.push(n1);
    })
    $(".t1")[0].focus();
    $(".t1").each(function(index) {
        $(this).val('');
        sinEspacios($(this));
        //$(this).val(resp[index]); //respuestas
        QuitaClase($(this), 'correcto incorrecto');
    });
    $(".t1").on('keypress', function(e) {
        //console.log(event.keyCode);
        //PERMITIR SOLO 2 CARACTERES (Xx)
        if (e.which == 88 || e.which == 120) {
            return true;
        } else {
            return false;
        }
    });
    $(".btnCalificar").bind("click", function() { //click en el boton iniciar
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        $(this).unbind("click");
        cont++;
        $(".t1").each(function(el) {
            tmp = $(this);
            if (tmp.val().toUpperCase().length == resp[el]) {
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