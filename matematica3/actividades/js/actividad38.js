var ejer = 4,
    itemsT = (2 * ejer),
    cont = 0,
    tmp, cor = 0,
    inc = 0,
    calificacion = 10,
    claseAnimada = 'animate bounceIn';
var i, n1, n2, t1, t_nums = [],
    resp = [4, 0, 2, 1, 4, 0, 4, 3],
    resp1 = [],
    img1, img2, y1, y2, decr;
f_cargar();

function f_cargar() {
    for (i = 1; i < 5; i++) {
        t_nums.push(i);
    }
    t_nums.sort(f_randomico);
    f_iniciar();
}

function f_iniciar() {
    QuitaClase(".nota", claseAnimada);
    AgregaClase(".actividad", claseAnimada);
    $("#trace").hide(); //resultados
    $("#n_cont").html(cont + 1); //contador de ejercicios
    $("#n_ejer").html(ejer); //total de ejercicios
    $(".n1").val('');
    $(".n1")[0].focus();
    $(".n1").each(function(index) {
        $(this).val('');
        //$(this).val(resp[index]); //respuestas
        QuitaClase($(this), 'correcto incorrecto');
    });
    img1 = "<img src='img/i" + t_nums[cont] + "_p37_act38.jpg' class='center-block text-center'>";
    $(".imagenes").html('').append(img1);
    resp1 = [];
    if (t_nums[cont] == 1) {
        resp1.push(resp[0]);
        resp1.push(resp[1]);
    } else if (t_nums[cont] == 2) {
        resp1.push(resp[2]);
        resp1.push(resp[3]);
    } else if (t_nums[cont] == 3) {
        resp1.push(resp[4]);
        resp1.push(resp[5]);
    } else {
        resp1.push(resp[6]);
        resp1.push(resp[7]);
    }
    console.log(resp1);
    $(".btnCalificar").bind("click", function() { //click en el boton iniciar
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        $(this).unbind("click");
        cont++;
        $(".n1").each(function(index) {
            tmp = $(this);
            if (tmp.val() == resp1[index]) {
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