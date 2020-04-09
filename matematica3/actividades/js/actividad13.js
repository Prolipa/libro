var n1 = 0,
    cont = 0,
    ejer = 10,
    itemsT = 4 * ejer,
    cor = 0,
    inc = 0,
    calificacion = 10,
    resp = [],
    resp_temp = [],
    t1, t2, t3, t4, obj;
var claseAnimada = 'animate bounceIn';
f_iniciar();

function f_iniciar() {
    QuitaClase(".nota", claseAnimada);
    AgregaClase(".actividad", claseAnimada);
    $("#n_cont").html(cont + 1);
    $("#n_ejer").html(ejer);
    $("#trace").hide();
    resp = [], resp_temp = [];
    n1 = (Math.floor(Math.random() * 80) + 19);
    $(".num").html(n1);
    $('.res').each(function() {
        $(this).val('');
        QuitaClase(this, "color_disabled");
        QuitaClase(this, "correcto incorrecto");
    });
    $(".res")[0].focus();
    t1 = String(n1)[0] * 10;
    t2 = String(n1)[1];
    t3 = String(n1)[0] + 'D';
    t4 = String(n1)[1] + 'U';
    resp.push(t1, t2, t3, t4);
    sinEspacios(".actividad1 .form-control");
    //console.log(t1,t2,t3,t4);
    /*$('input:enabled').each(function(index){ //respuestas
        $(this).val(resp[index]);
     });*/
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        $('.res').each(function() {
            resp_temp.push($(this).val().toUpperCase());
        });
        //console.log(resp_temp);
        for (i = 0; i < resp.length; i++) {
            var temp = $('.res');
            if (resp_temp[i] == resp[i]) {
                cor++;
                f_ok(temp);
            } else {
                inc++;
                f_no(temp);
            }
        }
        Calculo_nota();
    }
}