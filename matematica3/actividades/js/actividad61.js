var ejer = 1,
    i = 0,
    itemsT = (18 * ejer),
    cont = 0,
    tmp, cor = 0,
    inc = 0,
    calificacion = 10,
    claseAnimada = 'animate bounceIn';
var resp = [],
    nums = [],
    patron = [],
    resul = [];
sum = 0,
    rdn1 = 0,
    sec = 0, inc_num = 0, mm = 0, pp = 0;
var titulos = "aplico";
f_titulos();
$("#n_pagina").html('56');
f_iniciar();

function f_iniciar() {
    for (i = 0; i < 3; i++) {
        rdn1 = 0, inc_num = 0, nums = [];
        var div_contenido = ['<div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 secuencia' + i + '"> <span class="n1 nn1">4</span> <span class="n1 nn1">8</span> <span class="n1 nn1">12</span> <span class="n1"><input type="tel" maxlength="2" class="form-control t1"></span> <span class="n1"><input type="tel" maxlength="2" class="form-control t1"></span> <span class="n1"><input type="tel" maxlength="2" class="form-control t1"></span> <span class="n1"><input type="tel" maxlength="2" class="form-control t1"></span> <span class="n1"><input type="tel" maxlength="2" class="form-control t1"></span> </div> <div class="visible-sm visible-xs"> <hr> </div> <div class="col-lg-2 col-md-2 col-sm-4 col-xs-6">patron &nbsp; <b class="lead">+</b> </div> <div class="col-lg-2 col-md-2 col-sm-4 col-xs-4"> <input type="text" class="form-control ptr" maxlength="2"> </div> <br><br>'];
        $(".cont_preg").append(div_contenido);
        rdn1 = (Math.floor(Math.random() * 30) + 6);
        sec = (Math.floor(Math.random() * 7) + 3);
        patron.push(sec);
        console.log(rdn1, sec)
        $(".t1").prop("placeholder", "0");
        $(".ptr").prop("placeholder", "0");
        var cl1 = ".secuencia" + i + " .n1";
        console.log(cl1);
        $(cl1).each(function() { //imprime los 3 primeros numeros y despues almacena las respuestas
            inc_num < 3 ? nums.push(rdn1) : resp.push(rdn1);
            rdn1 += sec;
            inc_num++;
        });
        var cl2 = ".secuencia" + i + " .nn1";
        $(cl2).each(function(index) {
            console.log(index)
            $(this).text(nums[index]);
            $(this).addClass("col_bg1");
        });
        /*var cl3 = ".secuencia"+i +" .t1";
        $(cl3).each(function(index) {
            $(this).val(resp[index]); //respuestas.. no coinciden con la calificacion
        });
         $(".ptr").each(function(index) {
            $(this).val(patron[index]); //respuestas
        });*/
        console.log(resp)
    }
    $(".btnCalificar").bind("click", function() { //click en el boton iniciar
        cont++;
        $(this).unbind("click");
        $(".t1").each(function(index) {
            tmp = $(this);
            if (tmp.val() == resp[index]) { //comparamos las respuestas
                cor++
                f_ok(tmp);
            } else {
                inc++
                f_no(tmp);
            }
        });
        $(".ptr").each(function(index) {
            tmp = $(this);
            if (tmp.val() == patron[index]) { //comparamos las respuestas
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