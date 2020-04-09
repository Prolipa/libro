var bg_r = 0,
    n1 = 0,
    n2 = 0,
    n3 = 0,
    n4 = 0,
    nrA = 0,
    nrB = 0,
    ejer = 10,
    cont = 0,
    itemsT = 2 * ejer,
    tmp, cor = 0,
    inc = 0,
    calificacion = 10,
    resp = [],
    i_nums = [],
    tmp_res = [],
    signos = ['+', '-'],
    str = 0;
var claseAnimada = 'animate bounceIn';
f_iniciar();

function f_iniciar() {
    $("#n_cont").html(cont + 1);
    $("#n_ejer").html(ejer);
    $("#trace").hide();
    QuitaClase(".nota", claseAnimada);
    AgregaClase(".actividad", claseAnimada);
    i_nums = [];
    //signos.sort(f_randomico);
    f_suma();

    $(".i_valor").html(resp);
    $(".i_signo").html(signos[0]);
    $(".n1").each(function(index) {
        $(this).html(i_nums[index]);
    })
    //fondo aleatorio
    $(".t_head").removeClass(str);
    bg_r = (Math.floor(Math.random() * 4) + 1);
    str = 'bg' + bg_r;
    $(".t_head").addClass(str);
    //fin fondo aleatorio
    $(".t1")[1].focus()
    $(".t1").each(function(index) {
        $(this).val('');
        QuitaClase($(this), 'correcto incorrecto');
    });
    tmp_res = []; //vaciamos las respuestas
    tmp_res.push(nrA, nrB); //almacenamos las respuestas
    //console.log(tmp_res);
    $(".btnCalificar").bind("click", function() { //click en el boton iniciar
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
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

    function f_suma() {
        resp = [], i_nums = [];
        n1 = (Math.floor(Math.random() * 9) + 1);
        n2 = (Math.floor(Math.random() * 9) + 1);
        n3 = (Math.floor(Math.random() * 9) + 1);
        n4 = (Math.floor(Math.random() * 9) + 1);
        nrA = n1 + n2;
        nrB = n3 + n4;
        if (nrA < 10 && nrB < 10) {
            resp.push(n1, n3, ' ', signos[0], ' ', n2, n4);
            i_nums.push(n1, n3, n2, n4); //impresion denumeros en tabla
        } else {
            f_suma();
        }
    }
}