var n1=0,sum_total=0,cont=0,ejer=1,itemsT=15,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
 function f_iniciar() {
    var a101vimg1=['<img style="mix-blend-mode: multiply; min-width: 60px;" class="img-responsive" src="img/i1_p103_act101.jpg" alt="">','<img style="mix-blend-mode: multiply; min-width: 60px;" class="img-responsive" src="img/i13_p103_act101.jpg" alt="">']
        var myArray1 = ['0','1'];
        var i,j,k;
        for (i = myArray1.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray1[i - 1];
            myArray1[i - 1] = myArray1[j];
            myArray1[j] = k;
        }
        var p=myArray1[1];
        $("#a101caim1").html(a101vimg1[p]);

    var a101vimg2=['<img style="mix-blend-mode: multiply; min-width: 60px;" class="img-responsive" src="img/i5_p103_act101.jpg" alt="">','<img style="mix-blend-mode: multiply; min-width: 60px;" class="img-responsive" src="img/i14_p103_act101.jpg" alt="">']
        var myArray2 = ['0','1'];
        var i,j,k;
        for (i = myArray2.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray2[i - 1];
            myArray2[i - 1] = myArray2[j];
            myArray2[j] = k;
        }
        var p1=myArray2[1];
        $("#a101caim2").html(a101vimg2[p1]);

    var a101vimg3=['<img style="mix-blend-mode: multiply; min-width: 60px;" class="img-responsive" src="img/i9_p103_act101.jpg" alt="">','<img style="mix-blend-mode: multiply; min-width: 60px;" class="img-responsive" src="img/i15_p103_act101.jpg" alt="">']
        var myArray3 = ['0','1'];
        var i,j,k;
        for (i = myArray3.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray3[i - 1];
            myArray3[i - 1] = myArray3[j];
            myArray3[j] = k;
        }
        var p2=myArray3[1];
        $("#a101caim3").html(a101vimg3[p2]);
    bt_comprobar.addEventListener("click", f_comprobar);
    function f_comprobar(){
        cont++;
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var imag1 =$('#imag1 > img').attr('alt');
        var imag2 =$('#imag2 > img').attr('alt');
        var imag3 =$('#imag3 > img').attr('alt');
        var imag4 =$('#imag4 > img').attr('alt');
        var imag5 =$('#imag5 > img').attr('alt');
        var imag6 =$('#imag6 > img').attr('alt');
        if (p=='0') {
          if (imag1=='1') {
          cor++;
          f_ok($('#imag1'));
        }else {
          inc++;
          f_no($('#imag1'));
        }
        if (imag2=='2') {
          cor++;
          f_ok($('#imag2'));
        }else {
          inc++;
          f_no($('#imag2'));
        }
        if (imag3=='3') {
          cor++;
          f_ok($('#imag3'));
        }else {
          inc++;
          f_no($('#imag3'));
        }
        if (imag4=='1') {
          cor++;
          f_ok($('#imag4'));
        }else {
          inc++;
          f_no($('#imag4'));
        }
        if (imag5=='2') {
          cor++;
          f_ok($('#imag5'));
        }else {
          inc++;
          f_no($('#imag5'));
        }
        if (imag6=='3') {
          cor++;
          f_ok($('#imag6'));
        }else {
          inc++;
          f_no($('#imag6'));
        }
        }else{
          if (imag1=='2') {
          cor++;
          f_ok($('#imag1'));
        }else {
          inc++;
          f_no($('#imag1'));
        }
        if (imag2=='3') {
          cor++;
          f_ok($('#imag2'));
        }else {
          inc++;
          f_no($('#imag2'));
        }
        if (imag3=='1') {
          cor++;
          f_ok($('#imag3'));
        }else {
          inc++;
          f_no($('#imag3'));
        }
        if (imag4=='2') {
          cor++;
          f_ok($('#imag4'));
        }else {
          inc++;
          f_no($('#imag4'));
        }
        if (imag5=='3') {
          cor++;
          f_ok($('#imag5'));
        }else {
          inc++;
          f_no($('#imag5'));
        }
        if (imag6=='1') {
          cor++;
          f_ok($('#imag6'));
        }else {
          inc++;
          f_no($('#imag6'));
        }
        }
        

        var imag11 =$('#imag11 > img').attr('alt');
        var imag12 =$('#imag12 > img').attr('alt');
        var imag13 =$('#imag13 > img').attr('alt');
        var imag14 =$('#imag14 > img').attr('alt');
        var imag15 =$('#imag15 > img').attr('alt');
        
        if (p1=='0') {
          if (imag11=='4') {
          cor++;
          f_ok($('#imag11'));
        }else {
          inc++;
          f_no($('#imag11'));
        }
        if (imag12=='5') {
          cor++;
          f_ok($('#imag12'));
        }else {
          inc++;
          f_no($('#imag12'));
        }
        if (imag13=='6') {
          cor++;
          f_ok($('#imag13'));
        }else {
          inc++;
          f_no($('#imag13'));
        }
        if (imag14=='4') {
          cor++;
          f_ok($('#imag14'));
        }else {
          inc++;
          f_no($('#imag14'));
        }
        if (imag15=='5') {
          cor++;
          f_ok($('#imag15'));
        }else {
          inc++;
          f_no($('#imag15'));
        }
        
        }else{
          if (imag11=='4') {
          cor++;
          f_ok($('#imag11'));
        }else {
          inc++;
          f_no($('#imag11'));
        }
        if (imag12=='6') {
          cor++;
          f_ok($('#imag12'));
        }else {
          inc++;
          f_no($('#imag12'));
        }
        if (imag13=='5') {
          cor++;
          f_ok($('#imag13'));
        }else {
          inc++;
          f_no($('#imag13'));
        }
        if (imag14=='4') {
          cor++;
          f_ok($('#imag14'));
        }else {
          inc++;
          f_no($('#imag14'));
        }
        if (imag15=='6') {
          cor++;
          f_ok($('#imag15'));
        }else {
          inc++;
          f_no($('#imag15'));
        }
        
        }  


        var imag21 =$('#imag21 > img').attr('alt');
        var imag22 =$('#imag22 > img').attr('alt');
        var imag23 =$('#imag23 > img').attr('alt');
        var imag24 =$('#imag24 > img').attr('alt');
        var imag25 =$('#imag25 > img').attr('alt');
        
        if (p2=='0') {
          if (imag21=='7') {
          cor++;
          f_ok($('#imag21'));
        }else {
          inc++;
          f_no($('#imag21'));
        }
        if (imag22=='8') {
          cor++;
          f_ok($('#imag22'));
        }else {
          inc++;
          f_no($('#imag22'));
        }
        if (imag23=='9') {
          cor++;
          f_ok($('#imag23'));
        }else {
          inc++;
          f_no($('#imag23'));
        }
        if (imag24=='7') {
          cor++;
          f_ok($('#imag24'));
        }else {
          inc++;
          f_no($('#imag24'));
        }
        
        
        }else{
          if (imag21=='8') {
          cor++;
          f_ok($('#imag21'));
        }else {
          inc++;
          f_no($('#imag21'));
        }
        if (imag22=='9') {
          cor++;
          f_ok($('#imag22'));
        }else {
          inc++;
          f_no($('#imag22'));
        }
        if (imag23=='7') {
          cor++;
          f_ok($('#imag23'));
        }else {
          inc++;
          f_no($('#imag23'));
        }
        if (imag24=='8') {
          cor++;
          f_ok($('#imag24'));
        }else {
          inc++;
          f_no($('#imag24'));
        }
        
        
        }  
        Calculo_nota();
   }
}