var n1=0,sum_total=0,cont=0,ejer=1,itemsT=4,cor=0,inc=0,str='',calificacion=10;
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
        var a52dcon1 =$('#a52dcon1').val();
        var a52dcon2 =$('#a52dcon2').val();
        var a52dcon3 =$('#a52dcon3').val();
        var a52dcon4 =$('#a52dcon4').val();

        if (a52dcon1=='5') {
            cor++;
            f_ok($('#a52dcon1'));
        }else {
            inc++;
            f_no($('#a52dcon1'));
        }
        if (a52dcon2=='8') {
            cor++;
            f_ok($('#a52dcon2'));
        }else {
            inc++;
            f_no($('#a52dcon2'));
        }
        if (a52dcon3=='3') {
            cor++;
            f_ok($('#a52dcon3'));
        }else {
            inc++;
            f_no($('#a52dcon3'));
        }
        if (a52dcon4=='5') {
            cor++;
            f_ok($('#a52dcon4'));
        }else {
            inc++;
            f_no($('#a52dcon4'));
        }
        Calculo_nota();
   }
}