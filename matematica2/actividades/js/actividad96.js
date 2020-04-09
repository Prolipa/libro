var n1=0,sum_total=0,cont=0,ejer=1,itemsT=10,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
 function f_iniciar() {
    a96vec3=['<h3 style="display:inline-block;">&nbsp;A&nbsp;</h3>','<h3 style="display:inline-block;">&nbsp;E&nbsp;</h3>','<h3 style="display:inline-block;">&nbsp;I&nbsp;</h3>','<h3 style="display:inline-block;">&nbsp;O&nbsp;</h3>','<h3 style="display:inline-block;">&nbsp;U&nbsp;</h3>','<h3 style="display:inline-block;">&nbsp;1&nbsp;</h3>','<h3 style="display:inline-block;">&nbsp;2&nbsp;</h3>','<h3 style="display:inline-block;">&nbsp;3&nbsp;</h3>','<h3 style="display:inline-block;">&nbsp;4&nbsp;</h3>','<h3 style="display:inline-block;">&nbsp;5&nbsp;</h3>'];
    a96vec3.sort(f_randomico);
    $('#a96im1').html(a96vec3);
   	bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
        cont++;
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var a96dcon1=$('#a96dcon1').val();
        var a96dcon2=$('#a96dcon2').val();
        var a96dcon3=$('#a96dcon3').val();
        var a96dcon4=$('#a96dcon4').val();
        var a96dcon5=$('#a96dcon5').val();
        
        var a96dcon11=$('#a96dcon11').val();
        var a96dcon12=$('#a96dcon12').val();
        var a96dcon13=$('#a96dcon13').val();
        var a96dcon14=$('#a96dcon14').val();
        var a96dcon15=$('#a96dcon15').val();
        var a96vec1=['A','E','I','O','U'];
        var a96vec2=['1','2','3','4','5'];
        var a96cont1=0;
        for (var i =0 ; i < a96vec1.length; i++) {
          if (a96dcon1==a96vec1[i]) {
            a96cont1++;
            a96vec1[i]=a96cont1;
          }
        }
        if (a96cont1=='1') {
        	cor++;
        	f_ok($('#a96dcon1'));
        }else {
        	inc++;
        	f_no($('#a96dcon1'));
        }

        var a96cont2=0;
        for (var i =0 ; i < a96vec1.length; i++) {
          if (a96dcon2==a96vec1[i]) {
            a96cont2++;
            a96vec1[i]=a96cont2;
          }
        }
        if (a96cont2=='1') {
          cor++;
          f_ok($('#a96dcon2'));
        }else {
          inc++;
          f_no($('#a96dcon2'));
        }
        var a96cont3=0;
        for (var i =0 ; i < a96vec1.length; i++) {
          if (a96dcon3==a96vec1[i]) {
            a96cont3++;
            a96vec1[i]=a96cont3;
          }
        }
        if (a96cont3=='1') {
          cor++;
          f_ok($('#a96dcon3'));
        }else {
          inc++;
          f_no($('#a96dcon3'));
        }
        var a96cont4=0;
        for (var i =0 ; i < a96vec1.length; i++) {
          if (a96dcon4==a96vec1[i]) {
            a96cont4++;
            a96vec1[i]=a96cont4;
          }
        }
        if (a96cont4=='1') {
          cor++;
          f_ok($('#a96dcon4'));
        }else {
          inc++;
          f_no($('#a96dcon4'));
        }
        var a96cont5=0;
        for (var i =0 ; i < a96vec1.length; i++) {
          if (a96dcon5==a96vec1[i]) {
            a96cont5++;
            a96vec1[i]=a96cont5;
          }
        }
        if (a96cont5=='1') {
          cor++;
          f_ok($('#a96dcon5'));
        }else {
          inc++;
          f_no($('#a96dcon5'));
        }

        var a96cont6=0;
        for (var i =0 ; i < a96vec2.length; i++) {
          if (a96dcon11==a96vec2[i]) {
            a96cont6++;
            a96vec2[i]=0;
          }
        }
        if (a96cont6=='1') {
          cor++;
          f_ok($('#a96dcon11'));
        }else {
          inc++;
          f_no($('#a96dcon11'));
        }
        var a96cont7=0;
        for (var i =0 ; i < a96vec2.length; i++) {
          if (a96dcon12==a96vec2[i]) {
            a96cont7++;
            a96vec2[i]=0;
          }
        }
        if (a96cont7=='1') {
          cor++;
          f_ok($('#a96dcon12'));
        }else {
          inc++;
          f_no($('#a96dcon12'));
        }
        var a96cont8=0;
        for (var i =0 ; i < a96vec2.length; i++) {
          if (a96dcon13==a96vec2[i]) {
            a96cont8++;
            a96vec2[i]=0;
          }
        }
        if (a96cont8=='1') {
          cor++;
          f_ok($('#a96dcon13'));
        }else {
          inc++;
          f_no($('#a96dcon13'));
        }
        var a96cont9=0;
        for (var i =0 ; i < a96vec2.length; i++) {
          if (a96dcon14==a96vec2[i]) {
            a96cont9++;
            a96vec2[i]=0;
          }
        }
        if (a96cont9=='1') {
          cor++;
          f_ok($('#a96dcon14'));
        }else {
          inc++;
          f_no($('#a96dcon14'));
        }
        var a96cont10=0;
        for (var i =0 ; i < a96vec2.length; i++) {
          if (a96dcon15==a96vec2[i]) {
            a96cont10++;
            a96vec2[i]=0;
          }
        }
        if (a96cont10=='1') {
          cor++;
          f_ok($('#a96dcon15'));
        }else {
          inc++;
          f_no($('#a96dcon15'));
        }
        Calculo_nota();
   }
}