var n1=0,sum_total=0,cont=0,ejer=1,itemsT=7,cor=0,inc=0,str='',calificacion=10;
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
    
    var a110vec1=[];
    var myArray1 = ['0','1','2','3','4','5'];
        var i,j,k;
        for (i = myArray1.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray1[i - 1];
            myArray1[i - 1] = myArray1[j];
            myArray1[j] = k;
        }
      var p=myArray1[1];
      var a110aux1=numero[p].toString().split('');
      
    for (var i =0; i < parseInt(a110aux1[0]); i++) {
      a110vec1.push('<img src="img/i1_p107_act109.jpg" class="img-responsive" style="display: inline-block;">');
    }
    for (var i =0; i < parseInt(a110aux1[1]); i++) {
      a110vec1.push('<img src="img/i2_p107_act109.jpg" class="img-responsive" style="display: inline-block;">');
    }
    $('#a110im1').html(a110vec1);
    $('#a110c1').html(numero[p]);
    var a110vec2=[];
    var myArray2 = ['0','1','2','3','4','5'];
        var i,j,k;
        for (i = myArray2.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray2[i - 1];
            myArray2[i - 1] = myArray2[j];
            myArray2[j] = k;
        }
      var p1=myArray2[1];
      var a110aux2=numero1[p1].toString().split('');
    for (var i =0; i < parseInt(a110aux2[0]); i++) {
      a110vec2.push('<img src="img/i1_p107_act109.jpg" class="img-responsive" style="display: inline-block;">');
    }
    for (var i =0; i < parseInt(a110aux2[1]); i++) {
      a110vec2.push('<img src="img/i2_p107_act109.jpg" class="img-responsive" style="display: inline-block;">');
    }
    $('#a110im2').html(a110vec2);
    $('#a110c2').html(numero[p1]);
    var numero2= numero[p] + numero1[p1];
    bt_comprobar.addEventListener("click", f_comprobar);
    function f_comprobar(){
        cont++;
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var a110dcon1=$('#a110dcon1').val();
        var a110dcon2=$('#a110dcon2').val();
        var a110dcon3=$('#a110dcon3').val();
        var a110dcon4=$('#a110dcon4').val();
        var a110dcon5=$('#a110dcon5').val();
        var a110dcon6=$('#a110dcon6').val();
        var a110dcon7=$('#a110dcon7').val();
        var a110a1=numero2.toString().split('');
        
        if (a110dcon1==a110aux1[0]) {
          cor++
          f_ok($('#a110dcon1'));
        }else{
          inc++;
          f_no($('#a110dcon1'));
        }
        if (a110dcon2==a110aux1[1]) {
          cor++
          f_ok($('#a110dcon2'));
        }else{
          inc++;
          f_no($('#a110dcon2'));
        }
        if (a110dcon3==a110aux2[0]) {
          cor++
          f_ok($('#a110dcon3'));
        }else{
          inc++;
          f_no($('#a110dcon3'));
        }
        if (a110dcon4==a110aux2[1]) {
          cor++
          f_ok($('#a110dcon4'));
        }else{
          inc++;
          f_no($('#a110dcon4'));
        }
        if (a110dcon5==a110a1[0]) {
          cor++
          f_ok($('#a110dcon5'));
        }else{
          inc++;
          f_no($('#a110dcon5'));
        }
        if (a110dcon6==a110a1[1]) {
          cor++
          f_ok($('#a110dcon6'));
        }else{
          inc++;
          f_no($('#a110dcon6'));
        }
        if (a110dcon7==numero2) {
          cor++
          f_ok($('#a110dcon7'));
        }else{
          inc++;
          f_no($('#a110dcon7'));
        }
        Calculo_nota();
   }
}