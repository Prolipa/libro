var n1 = 0,
    sum_total = 0,
    sum_total1 = 0,
    sum_total2 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 4,
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
    var p5vec1 = [
        '<br>' +
        '<div>' +
        '<div style="display:inline-block; border-radius: 10px 0px 10px 0px; background: #F4E1C8; padding: 10px; font-size: 25px;">' +
        '<span>humo</span><br>' +
        '<span>huerto</span>' +
        '</div>' +
        '<div style="display: inline-block;">El <input type="text" onkeyup="mayus(this)" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 100px;" id="p5dcon1"> tiene papas, habas y rábanos.</div>' +
        '</div>',
        '<br>' +
        '<div>' +
        '<div style="display:inline-block; border-radius: 10px 0px 10px 0px; background: #E6ECBE; padding: 10px; font-size: 25px;">' +
        '<span>hotel</span><br>' +
        '<span>húmedo</span>' +
        '</div>' +
        '<div style="display: inline-block;">Homero vive en un <input type="text" onkeyup="mayus(this)" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 100px;" id="p5dcon2"> .</div>' +
        '</div>',
        '<br>' +
        '<div>' +
        '<div style="display:inline-block; border-radius: 10px 0px 10px 0px; background: #C0DDEB; padding: 10px; font-size: 25px;">' +
        '<span>herradura</span><br>' +
        '<span>horno</span>' +
        '</div>' +
        '<div style="display: inline-block;">Hilda pone el pan en el <input type="text" onkeyup="mayus(this)" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 100px;" id="p5dcon3"> .</div>' +
        '</div>',
        '<br>' +
        '<div>' +
        '<div style="display:inline-block; border-radius: 10px 0px 10px 0px; background: #F8E89A; padding: 10px; font-size: 25px;">' +
        '<span>helado</span><br>' +
        '<span>búho</span>' +
        '</div>' +
        '<div style="display: inline-block;">Hernán vende <input type="text" onkeyup="mayus(this)" style="border: none; border-bottom: 2px dotted black; text-align: center; width: 100px;" id="p5dcon4"> de mora.</div>' +
        '</div>'
    ];
    p5vec1.sort(f_randomico);
    $('.actividad771').html(p5vec1);
    bt_comprobar.addEventListener("click", f_comprobar);

    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p5dcon1 = $('#p5dcon1').val();
        var p5dcon2 = $('#p5dcon2').val();
        var p5dcon3 = $('#p5dcon3').val();
        var p5dcon4 = $('#p5dcon4').val();
        if (p5dcon1 == 'huerto') {
            cor++;
            f_ok($('#p5dcon1'));
        } else {
            inc++;
            f_no($('#p5dcon1'));
        }
        if (p5dcon2 == 'hotel') {
            cor++;
            f_ok($('#p5dcon2'));
        } else {
            inc++;
            f_no($('#p5dcon2'));
        }
        if (p5dcon3 == 'horno') {
            cor++;
            f_ok($('#p5dcon3'));
        } else {
            inc++;
            f_no($('#p5dcon3'));
        }
        if (p5dcon4 == 'helado') {
            cor++;
            f_ok($('#p5dcon4'));
        } else {
            inc++;
            f_no($('#p5dcon4'));
        }

        Calculo_nota();
    }
}