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
        var a53dcon1 =$('#a53dcon1').val();
        var a53dcon2 =$('#a53dcon2').val();
        var a53dcon3 =$('#a53dcon3').val();
        var a53dcon4 =$('#a53dcon4').val();
        if (a53dcon1=='una suma' || a53dcon1=='suma' || a53dcon1=='una adición' || a53dcon1=='adición' || a53dcon1=='una adicion' || a53dcon1=='adicion') {
            cor++;
            f_ok($('#a53dcon1'));
        }else {
            inc++;
            f_no($('#a53dcon1'));
        }
        if (a53dcon2=='2') {
            cor++;
            f_ok($('#a53dcon2'));
        }else {
            inc++;
            f_no($('#a53dcon2'));
        }
        if (a53dcon3=='3') {
            cor++;
            f_ok($('#a53dcon3'));
        }else {
            inc++;
            f_no($('#a53dcon3'));
        }
        if (a53dcon4=='5') {
            cor++;
            f_ok($('#a53dcon4'));
        }else {
            inc++;
            f_no($('#a53dcon4'));
        }
        Calculo_nota();
   }
}