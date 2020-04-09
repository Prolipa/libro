var n1 = 0,
    n2 = 0,
    sum_total = 0,
    sum_total2 = 0,
    sum_total3 = 0,
    sum_total4 = 0,
    cont = 0,
    ejer = 1,
    itemsT = 10,
    cor = 0,
    inc = 0,
    str = '',
    str2 = '',
    str3 = '',
    str4 = '',
    calificacion = 10;

var t1 = 0;
var claseAnimada = 'animate bounceIn';
f_iniciar();

function mayus(e) {
    e.value = e.value.toLowerCase();
}

function mayus1(e) {
    e.value = e.value.toUpperCase();
}

function f_iniciar() {
    
    bt_comprobar.addEventListener("click", f_comprobar);
    
    function f_comprobar() {
        cont++;
        AgregaClase(".nota", claseAnimada);
        QuitaClase(".actividad", claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1vec1=['jirafa','burro','pingüino','serpiente','gallina','pato','cangrejo','caracol','oruga','insecto'];
        for (var i = 0; i < p1vec1.length; i++) {
            var p1res1=$('#p1dcon'+(i+1)).val();
            if (p1res1==p1vec1[i]) {
                cor++;
                f_ok($('#p1dcon'+(i+1)));
            }else{
                inc++;
                f_no($('#p1dcon'+(i+1)));
            }
        }
        Calculo_nota();
    }
}