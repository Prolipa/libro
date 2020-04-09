var n1 = 0,
    sum_total = 0,
    sum_total1 = 0,
    sum_total2 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 1,
    cor = 0,
    inc = 0,
    str = '',
    str1 = '',
    str2 = '',
    calificacion = 10;
var claseAnimada = 'animate bounceIn';
f_iniciar();

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}

function f_iniciar() {
    var pal1 = ['<span class="bg_palabra drag1">saltaba y saltaba un sapo</span>',
        '<span class="bg_palabra drag1">¡achachay!, ¿con qué me tapo?</span>',
        '<span class="bg_palabra drag1">En una tarde de lluvia,</span>',
        '<span class="bg_palabra drag1">y en cada salto decía</span>'
    ];
    pal1.sort(f_randomico);
    $(".textos").append(pal1);
    $(".drag1").draggable({
        revert:"invalid",
        zIndex:5,
        containment: "#actividad70",
        scroll: false,
    });
    
   $(".drop1").droppable({
        accept: ".drag1",
        drop: function(e, ui) {
            $(ui.draggable).removeClass("drag1");
            $(ui.draggable).removeClass("bg_palabra");
            $(ui.draggable).addClass("img-responsive");
            ui.draggable.attr("style", "");
            $(this).append(ui.draggable);
            
        }
   });
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1vec1 = 'En una tarde de lluvia,saltaba y saltaba un sapoy en cada salto decía¡achachay!, ¿con qué me tapo?';
        var p1res1=$('.p1im1 span').text();
        if (p1res1==p1vec1) {
            cor++;
            f_ok($('.p1im1'));
        }else{
            inc++;
            f_no($('.p1im1'));
        }
        Calculo_nota();
    }
}