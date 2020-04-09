var n1=0,sum_total=0,cont=0,ejer=1,itemsT=18,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
 function f_iniciar() {
    var numero =[10,11,12,13,14,15];
    var numero1 = [10,11,12,13,14,15];
    
    var a109vec1=[];
    var myArray1 = ['0','1','2','3','4','5'];
        var i,j,k;
        for (i = myArray1.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray1[i - 1];
            myArray1[i - 1] = myArray1[j];
            myArray1[j] = k;
        }
      var p=myArray1[1];
      var a109aux1=numero[p].toString().split('');
      
    for (var i =0; i < parseInt(a109aux1[0]); i++) {
      a109vec1.push('<img src="img/i1_p107_act109.jpg" class="img-responsive" style="display: inline-block;">');
    }
    for (var i =0; i < parseInt(a109aux1[1]); i++) {
      a109vec1.push('<img src="img/i2_p107_act109.jpg" class="img-responsive" style="display: inline-block;">');
    }
    $('#a109im1').html(a109vec1);
    

    var a109vec2=[];
    var myArray2 = ['0','1','2','3','4','5'];
        var i,j,k;
        for (i = myArray2.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray2[i - 1];
            myArray2[i - 1] = myArray2[j];
            myArray2[j] = k;
        }
      var p1=myArray2[1];
      var a109aux2=numero1[p1].toString().split('');
    for (var i =0; i < parseInt(a109aux2[0]); i++) {
      a109vec2.push('<img src="img/i1_p107_act109.jpg" class="img-responsive" style="display: inline-block;">');
    }
    for (var i =0; i < parseInt(a109aux2[1]); i++) {
      a109vec2.push('<img src="img/i2_p107_act109.jpg" class="img-responsive" style="display: inline-block;">');
    }
    $('#a109im2').html(a109vec2);
    var numero2= numero[p] + numero1[p1];

    
    var a109vec3=[];
    var myArray3 = ['0','1','2','3','4','5'];
        var i,j,k;
        for (i = myArray3.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray3[i - 1];
            myArray3[i - 1] = myArray3[j];
            myArray3[j] = k;
        }
      var p2=myArray3[1];
      var a109aux3=numero[p2].toString().split('');
      
    for (var i =0; i < parseInt(a109aux3[0]); i++) {
      a109vec3.push('<img src="img/i1_p107_act109.jpg" class="img-responsive" style="display: inline-block;">');
    }
    for (var i =0; i < parseInt(a109aux3[1]); i++) {
      a109vec3.push('<img src="img/i2_p107_act109.jpg" class="img-responsive" style="display: inline-block;">');
    }
    $('#a109im3').html(a109vec3);
    

    var a109vec4=[];
    var myArray4 = ['0','1','2','3','4','5'];
        var i,j,k;
        for (i = myArray4.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray4[i - 1];
            myArray4[i - 1] = myArray4[j];
            myArray4[j] = k;
        }
      var p3=myArray4[1];
      var a109aux4=numero1[p3].toString().split('');
    for (var i =0; i < parseInt(a109aux4[0]); i++) {
      a109vec4.push('<img src="img/i1_p107_act109.jpg" class="img-responsive" style="display: inline-block;">');
    }
    for (var i =0; i < parseInt(a109aux4[1]); i++) {
      a109vec4.push('<img src="img/i2_p107_act109.jpg" class="img-responsive" style="display: inline-block;">');
    }
    $('#a109im4').html(a109vec4);
    var numero3= numero[p2] + numero1[p3];

    var a109vec5=[];
    var myArray5 = ['0','1','2','3','4','5'];
        var i,j,k;
        for (i = myArray5.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray5[i - 1];
            myArray5[i - 1] = myArray5[j];
            myArray5[j] = k;
        }
      var p4=myArray5[1];
      var a109aux5=numero[p4].toString().split('');
      
    for (var i =0; i < parseInt(a109aux5[0]); i++) {
      a109vec5.push('<img src="img/i1_p107_act109.jpg" class="img-responsive" style="display: inline-block;">');
    }
    for (var i =0; i < parseInt(a109aux5[1]); i++) {
      a109vec5.push('<img src="img/i2_p107_act109.jpg" class="img-responsive" style="display: inline-block;">');
    }
    $('#a109im5').html(a109vec5);
    

    var a109vec6=[];
    var myArray6 = ['0','1','2','3','4','5'];
        var i,j,k;
        for (i = myArray6.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray6[i - 1];
            myArray6[i - 1] = myArray6[j];
            myArray6[j] = k;
        }
      var p5=myArray6[1];
      var a109aux6=numero1[p5].toString().split('');
    for (var i =0; i < parseInt(a109aux6[0]); i++) {
      a109vec6.push('<img src="img/i1_p107_act109.jpg" class="img-responsive" style="display: inline-block;">');
    }
    for (var i =0; i < parseInt(a109aux6[1]); i++) {
      a109vec6.push('<img src="img/i2_p107_act109.jpg" class="img-responsive" style="display: inline-block;">');
    }
    $('#a109im6').html(a109vec6);
    var numero4= numero[p4] + numero1[p5];
    bt_comprobar.addEventListener("click", f_comprobar);
    function f_comprobar(){
        cont++;
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var a109dcon1=$('#a109dcon1').val();
        var a109dcon2=$('#a109dcon2').val();
        var a109dcon3=$('#a109dcon3').val();
        var a109dcon4=$('#a109dcon4').val();
        var a109dcon5=$('#a109dcon5').val();
        var a109dcon6=$('#a109dcon6').val();
        var a109a1=numero2.toString().split('');
        var a109a2=numero3.toString().split('');
        var a109a3=numero4.toString().split('');
        if (a109dcon1==a109aux1[0]) {
          cor++
          f_ok($('#a109dcon1'));
        }else{
          inc++;
          f_no($('#a109dcon1'));
        }
        if (a109dcon2==a109aux1[1]) {
          cor++
          f_ok($('#a109dcon2'));
        }else{
          inc++;
          f_no($('#a109dcon2'));
        }
        if (a109dcon3==a109aux2[0]) {
          cor++
          f_ok($('#a109dcon3'));
        }else{
          inc++;
          f_no($('#a109dcon3'));
        }
        if (a109dcon4==a109aux2[1]) {
          cor++
          f_ok($('#a109dcon4'));
        }else{
          inc++;
          f_no($('#a109dcon4'));
        }
        if (a109dcon5==a109a1[0]) {
          cor++
          f_ok($('#a109dcon5'));
        }else{
          inc++;
          f_no($('#a109dcon5'));
        }
        if (a109dcon6==a109a1[1]) {
          cor++
          f_ok($('#a109dcon6'));
        }else{
          inc++;
          f_no($('#a109dcon6'));
        }

        var a109dcon7=$('#a109dcon7').val();
        var a109dcon8=$('#a109dcon8').val();
        var a109dcon9=$('#a109dcon9').val();
        var a109dcon10=$('#a109dcon10').val();
        var a109dcon11=$('#a109dcon11').val();
        var a109dcon12=$('#a109dcon12').val();
        if (a109dcon7==a109aux3[0]) {
          cor++
          f_ok($('#a109dcon7'));
        }else{
          inc++;
          f_no($('#a109dcon7'));
        }
        if (a109dcon8==a109aux3[1]) {
          cor++
          f_ok($('#a109dcon8'));
        }else{
          inc++;
          f_no($('#a109dcon8'));
        }
        if (a109dcon9==a109aux4[0]) {
          cor++
          f_ok($('#a109dcon9'));
        }else{
          inc++;
          f_no($('#a109dcon9'));
        }
        if (a109dcon10==a109aux4[1]) {
          cor++
          f_ok($('#a109dcon10'));
        }else{
          inc++;
          f_no($('#a109dcon10'));
        }
        if (a109dcon11==a109a2[0]) {
          cor++
          f_ok($('#a109dcon11'));
        }else{
          inc++;
          f_no($('#a109dcon11'));
        }
        if (a109dcon12==a109a2[1]) {
          cor++
          f_ok($('#a109dcon12'));
        }else{
          inc++;
          f_no($('#a109dcon12'));
        }


        var a109dcon13=$('#a109dcon13').val();
        var a109dcon14=$('#a109dcon14').val();
        var a109dcon15=$('#a109dcon15').val();
        var a109dcon16=$('#a109dcon16').val();
        var a109dcon17=$('#a109dcon17').val();
        var a109dcon18=$('#a109dcon18').val();
        if (a109dcon13==a109aux5[0]) {
          cor++
          f_ok($('#a109dcon13'));
        }else{
          inc++;
          f_no($('#a109dcon13'));
        }
        if (a109dcon14==a109aux5[1]) {
          cor++
          f_ok($('#a109dcon14'));
        }else{
          inc++;
          f_no($('#a109dcon14'));
        }
        if (a109dcon15==a109aux6[0]) {
          cor++
          f_ok($('#a109dcon15'));
        }else{
          inc++;
          f_no($('#a109dcon15'));
        }
        if (a109dcon16==a109aux6[1]) {
          cor++
          f_ok($('#a109dcon16'));
        }else{
          inc++;
          f_no($('#a109dcon16'));
        }
        if (a109dcon17==a109a3[0]) {
          cor++
          f_ok($('#a109dcon17'));
        }else{
          inc++;
          f_no($('#a109dcon17'));
        }
        if (a109dcon18==a109a3[1]) {
          cor++
          f_ok($('#a109dcon18'));
        }else{
          inc++;
          f_no($('#a109dcon18'));
        }
        Calculo_nota();
   }
}