var n1=0,sum_total=0,cont=0,ejer=1,itemsT=3,cor=0,inc=0,str='',calificacion=10, suma_total=0,contador=0;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
    }

 function f_iniciar() {
    
    bt_comprobar.addEventListener("click", f_comprobar);
    function f_comprobar(){
        cont++;
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var a56dcon1=$('#a56dcon1').val();
        var a56dcon2=$('#a56dcon2').val();
        var a56dcon3=$('#a56dcon3').val();
        if (a56dcon1=='9') {
            cor++;
            f_ok($('#a56dcon1'));
        }else {
            inc++;
            f_no($('#a56dcon1'));
        }
        if (a56dcon2=='una resta' || a56dcon2=='una sustracción' || a56dcon2=='una sustraccion' || a56dcon2=='resta' || a56dcon2=='sustracción' || a56dcon2=='sustraccion') {
            cor++;
            f_ok($('#a56dcon2'));
        }else {
            inc++;
            f_no($('#a56dcon2'));
        }
        if (a56dcon3=='5') {
            cor++;
            f_ok($('#a56dcon3'));
        }else {
            inc++;
            f_no($('#a56dcon3'));
        }
        Calculo_nota();
   }
}