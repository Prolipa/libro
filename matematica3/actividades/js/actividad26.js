var ejer = 10,
    itemsT = (8 * ejer),
    cont = 0,
    tmp, cor = 0,
    inc = 0,
    calificacion = 10,
    claseAnimada = 'animate bounceIn';
var bg_r = 0,
    n1 = 0,
    n2 = 0,
    n3 = 0,
    n4 = 0,
    resp = [],
    i_nums = [],
    img1, img2, y1, y2, decr, op = 0;
f_iniciar();

function f_iniciar() {
    $(".c_imagen1, .c_imagen2, .c_imagen3, .c_imagen4").hide();
    $("#n_cont").html(cont + 1);
    $("#n_ejer").html(ejer);
    $("#trace").hide();
    QuitaClase(".nota", claseAnimada);
    AgregaClase(".actividad", claseAnimada);
    $(".t1")[0].focus()
    f_suma();
    $(".t1, .s1").each(function(index) {
        $(this).val('');
        $(this).attr("maxlength", "1");
        QuitaClase($(this), 'correcto incorrecto');
        //$(this).val(resp[index]);//respuestas
    });
    //carga de imagenes
    op = (Math.floor(Math.random() * 2));
    op == 1 ? f_barras() : f_abaco();
    $(".btnCalificar").bind("click", function() { //click en el boton iniciar
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        $(this).unbind("click");
        cont++;
        $(".s1, .t1").each(function(index) {
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

    function f_suma() {
        resp = [], i_nums = [];
        n1 = (Math.floor(Math.random() * 9) + 1);
        n2 = (Math.floor(Math.random() * 9) + 1);
        n3 = (Math.floor(Math.random() * 9) + 1);
        n4 = (Math.floor(Math.random() * 9) + 1);
        nrA = n1 + n2 + 1; //mas uno ya q controlamos q la primera suma debe superar los 10
        nrB = n3 + n4;
        i_nums.push(String(n1) + String(n3), String(n2) + String(n4));
        if (nrA < 10 && nrB > 9) {
            resp.push(1, n1, n3, n2, n4, nrA, 1, String(nrB)[1]); //incluyo el numero 1, par los 2 subindices
        } else {
            f_suma();
        }
    }

    function f_barras() {
        $(".c_imagen3, .c_imagen4").show();
        $(".barras, .cuadros .barras1, .cuadros1").html('');
        for (i = 0; i < n1; i++) {
            img1 = ("<img src='img/i1_p19_act10.png' class='pull-left img-responsive'>");
            $(".barras").append(img1);
        }
        for (i = 0; i < n3; i++) {
            img1 = ("<img src='img/i1_p29_act26.png' class='img-responsive'>");
            $(".cuadros").append(img1);
        }
        for (i = 0; i < n2; i++) {
            img1 = ("<img src='img/i1_p19_act10.png' class='pull-left img-responsive'>");
            $(".barras1").append(img1);
        }
        for (i = 0; i < n4; i++) {
            img1 = ("<img src='img/i1_p29_act26.png' class='img-responsive'>");
            $(".cuadros1").append(img1);
        }
        console.log(resp);
    }

    function f_abaco() {
        $(".c_imagen1, .c_imagen2").show();
        $(".c_piezas1, .c_piezas2").html('');
        img1 = "", img2 = "", y1 = 110, y2 = y1, decr = 13;
        for (i = 0; i < n1; i++) {
            img1 = ("<img src='img/i2_p19_act9.png' style='position:absolute;top:" + y1 + "px;left: 51px'>");
            y1 -= decr;
            $(".c_piezas1").append(img1);
        }
        for (i = 0; i < n3; i++) {
            img2 = ("<img src='img/i3_p19_act9.png' style='position:absolute;top:" + y2 + "px;left: 92px'>");
            y2 -= decr;
            $(".c_piezas1").append(img2);
        }
        y3 = 110, y4 = y3, decr1 = 13;
        for (i = 0; i < n2; i++) {
            img1 = ("<img src='img/i2_p19_act9.png' style='position:absolute;top:" + y3 + "px;left: 51px'>");
            y3 -= decr1;
            $(".c_piezas2").append(img1);
        }
        for (i = 0; i < n4; i++) {
            img2 = ("<img src='img/i3_p19_act9.png' style='position:absolute;top:" + y4 + "px;left: 92px'>");
            y4 -= decr1;
            $(".c_piezas2").append(img2);
        }
    }
}