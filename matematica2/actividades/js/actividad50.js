var n1=0,sum_total=0,cont=0,ejer=1,itemsT=7,cor=0,inc=0,str='',calificacion=10;
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
        var a50dcon1=$('#a50dcon1').val();
        var a50dcon2=$('#a50dcon2').val();
        var a50dcon3=$('#a50dcon3').val();
        var a50dcon4=$('#a50dcon4').val();
        var a50dcon5=$('#a50dcon5').val();
        var a50dcon6=$('#a50dcon6').val();
        var a50dcon7=$('#a50dcon7').val();
        if (a50dcon1=='6') {
            cor++
            f_ok($('#a50dcon1'));
        }else {
            inc++;
            f_no($('#a50dcon1'));
        }
        if (a50dcon2=='3') {
            cor++
            f_ok($('#a50dcon2'));
        }else {
            inc++;
            f_no($('#a50dcon2'));
        }
        if (a50dcon3=='se fueron' || a50dcon3=='se separaron' || a50dcon3=='se marcharon' || a50dcon3=='se alejaron') {
            cor++
            f_ok($('#a50dcon3'));
        }else {
            inc++;
            f_no($('#a50dcon3'));
        }
        if (a50dcon4=='una resta' || a50dcon4=='una sustracción' || a50dcon4=='resta' || a50dcon4=='sustracción' || a50dcon4=='sustraccion' || a50dcon4=='una sustraccion') {
            cor++
            f_ok($('#a50dcon4'));
        }else {
            inc++;
            f_no($('#a50dcon4'));
        }
        if (a50dcon5=='9') {
            cor++
            f_ok($('#a50dcon5'));
        }else {
            inc++;
            f_no($('#a50dcon5'));
        }
        if (a50dcon6=='3') {
            cor++
            f_ok($('#a50dcon6'));
        }else {
            inc++;
            f_no($('#a50dcon6'));
        }
        if (a50dcon7=='6') {
            cor++
            f_ok($('#a50dcon7'));
        }else {
            inc++;
            f_no($('#a50dcon7'));
        }
        Calculo_nota();
   }
}