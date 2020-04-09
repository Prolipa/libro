var ejer = 10,
    itemsT = (8 * ejer),
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
    f_suma();
    $(".n1").each(function(index) {
        $(this).html(i_nums[index]);
    })
    console.log(i_nums);
    $(".bg1").html(i_nums);
    $(".t1")[1].focus()
    $(".s1,.t1").each(function(index) {
        $(this).val('');
        //$(this).val(resp[index]); //respuestas
        QuitaClase($(this), 'correcto incorrecto');
    });
    $(".btnCalificar").bind("click", function() { //click en el boton iniciar
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        $(this).unbind("click");
        cont++;
        $(".s1, .t1").each(function(el) {
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

    function f_suma() {
        resp = [], i_nums = [];
        n1 = (Math.floor(Math.random() * 6) + 3);
        n2 = (Math.floor(Math.random() * 9) + 1);
        n3 = (Math.floor(Math.random() * 9) + 1);
        n4 = (Math.floor(Math.random() * 9) + 1);
        //n1 -=1;
        nrA = (n1 - 1) - n3;
        nrB = (n2 + 10) - n4;
        if (n3 < n1 && n2 < n4) {
            i_nums.push(String(n1) + String(n2), ' - ' + String(n3) + String(n4)); //impresion denumeros en tabla
            resp.push((n1 - 1), n1, 1, n2, n3, n4, nrA, nrB);
        } else {
            f_suma();
        }
    }
}