var n1=0,sum_total=0,cont=0,ejer=1,itemsT=23,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
 function f_iniciar() {
    var numero = [10,20,30,40,50,60,70,80,90];
    var numero1=[90,80,70,60,50,40,30,20,10];
    var myArray1 = ['0','1','2','3','4','5','6','7','8'];
    var i,j,k;
    for (i = myArray1.length; i; i--) {
      j = Math.floor(Math.random() * i);
      k = myArray1[i - 1];
      myArray1[i - 1] = myArray1[j];
      myArray1[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 4 ; i++) {
      var c=myArray1[i-1];
      $("#a61dcon4"+(parseInt(c)+1)).val(numero[c]);
      $("#a61dcon4"+(parseInt(c)+1)).attr('disabled','disabled');
    };
    //aleatorio literal 1
    for (var i = 1; i <= 3 ; i++) {
      var c=myArray1[i-1];
      $("#a61dcon5"+(parseInt(c)+1)).val(numero1[c]);
      $("#a61dcon5"+(parseInt(c)+1)).attr('disabled','disabled');
    };
   	bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      var a61dcon1=$('#a61dcon1').val();
      var a61dcon2=$('#a61dcon2').val();
      var a61dcon3=$('#a61dcon3').val();
      var a61dcon11=$('#a61dcon11').val();
      var a61dcon12=$('#a61dcon12').val();
      var a61dcon13=$('#a61dcon13').val();
      var a61dcon21=$('#a61dcon21').val();
      var a61dcon22=$('#a61dcon22').val();
      var a61dcon23=$('#a61dcon23').val();
      var a61dcon31=$('#a61dcon31').val();
      var a61dcon32=$('#a61dcon32').val();
      var a61dcon33=$('#a61dcon33').val();
      if (a61dcon1=='veinte') {
        cor++;
        f_ok($('#a61dcon1'));
      }else {
        inc++;
        f_no($('#a61dcon1'));
      }
      if (a61dcon2=='2D') {
        cor++;
        f_ok($('#a61dcon2'));
      }else {
        inc++;
        f_no($('#a61dcon2'));
      }
      if (a61dcon3==20) {
        cor++;
        f_ok($('#a61dcon3'));
      }else {
        inc++;
        f_no($('#a61dcon3'));
      }
      if (a61dcon13==30) {
        cor++;
        f_ok($('#a61dcon13'));
      }else {
        inc++;
        f_no($('#a61dcon13'));
      }
      if (a61dcon11=='treinta') {
        cor++;
        f_ok($('#a61dcon11'));
      }else {
        inc++;
        f_no($('#a61dcon11'));
      }
      if (a61dcon12=='3D') {
        cor++;
        f_ok($('#a61dcon12'));
      }else {
        inc++;
        f_no($('#a61dcon12'));
      }
      if (a61dcon23==40) {
        cor++;
        f_ok($('#a61dcon23'));
      }else {
        inc++;
        f_no($('#a61dcon23'));
      }
      if (a61dcon21=='cuarenta') {
        cor++;
        f_ok($('#a61dcon21'));
      }else {
        inc++;
        f_no($('#a61dcon21'));
      }
      if (a61dcon22=='4D') {
        cor++;
        f_ok($('#a61dcon22'));
      }else {
        inc++;
        f_no($('#a61dcon22'));
      }
      if (a61dcon33==50) {
        cor++;
        f_ok($('#a61dcon33'));
      }else {
        inc++;
        f_no($('#a61dcon33'));
      }
      if (a61dcon31=='cincuenta') {
        cor++;
        f_ok($('#a61dcon31'));
      }else {
        inc++;
        f_no($('#a61dcon31'));
      }
      if (a61dcon32=='5D') {
        cor++;
        f_ok($('#a61dcon32'));
      }else {
        inc++;
        f_no($('#a61dcon32'));
      }
      for (var i = 4; i <= 9 ; i++) {
        var d=myArray1[i-1];
        if ($("#a61dcon5"+(parseInt(d)+1)).val()==numero1[d]) {
          cor++;
          f_ok($("#a61dcon5"+(parseInt(d)+1)));
        }else {
          inc++;
          f_no($("#a61dcon5"+(parseInt(d)+1)));
        }
        
      };
      for (var i = 5; i <= 9 ; i++) {
        var d=myArray1[i-1];
        if ($("#a61dcon4"+(parseInt(d)+1)).val()==numero[d]) {
          cor++;
          f_ok($("#a61dcon4"+(parseInt(d)+1)));
        }else {
          inc++;
          f_no($("#a61dcon4"+(parseInt(d)+1)));
        }
        
      };
      Calculo_nota();
   }
}