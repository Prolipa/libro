var ejer = 5,
    itemsT = (4 * ejer),
    cont = 0,
    tmp, cor = 0,
    inc = 0,
    calificacion = 10,
    claseAnimada = 'animate bounceIn';
var n1 = 0,
    n2 = 0,
    n3 = 0,
    n4 = 0,
    resp = [],
    i_nums = [];
f_iniciar();

function f_iniciar() {
    $("#n_cont").html(cont + 1);
    $("#n_ejer").html(ejer);
    $("#trace").hide();
    QuitaClase(".nota", claseAnimada);
    AgregaClase(".actividad", claseAnimada);
    n1 = (Math.floor(Math.random() * 10) + 10);
    n2 = (Math.floor(Math.random() * 9) + 1);
    n3 = (Math.floor(Math.random() * 10) + 10);
    i_nums = [], resp = [];
    i_nums.push(n1, n2, n3);
    $(".n1").each(function(index) {
        $(this).html(i_nums[index]);
    })
    var sum1 = parseInt(n3) + parseInt(n1);
    var sum2 = parseInt(n3) + parseInt(n1) - parseInt(n2);
    resp.push('1 m y ' + sum2 + ' cm', '1 m y ' + sum1 + ' cm', '1 m y ' + n3 + ' cm', 'Juan');
    $(".t1")[0].focus();
    $(".t1").each(function(index) {
        $(this).val('');
        //$(this).val(resp[index]); //respuestas
        QuitaClase($(this), 'correcto incorrecto');
    });
    $(".btnCalificar").bind("click", function() { //click en el boton iniciar
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        $(this).unbind("click");
        cont++;
        $(".t1").each(function(el) {
            tmp = $(this);
            if (tmp.val() == resp[el]) {
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