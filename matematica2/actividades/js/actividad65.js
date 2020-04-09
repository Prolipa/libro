var n1=0,sum_total=0,cont=0,ejer=1,itemsT=16,cor=0,inc=0,str='',calificacion=10;
var nump1=0;
var t=0, t1=0;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
function st()
{
  t=nn(nump1);
  t1=nn(nump2);
}
window.onload=st;
 function f_iniciar() {

    var numero = parseInt((Math.random() * 5) + 1);
    var numero1 = parseInt((Math.random() * 9) + 0);
    var a65cim1=[];
    nump1=(numero*10)+numero1;
    for (var i = 0; i < numero; i++) {
      a65cim1.push('<img src="img/i1_p69_act64.jpg"  class="img-responsive" alt="">');
    }
    for (var i = 0; i < numero1; i++) {
      a65cim1.push('<img src="img/i2_p69_act64.jpg" alt="">');
    }
    $('#a65im2').html(a65cim1);
    var numero2 = parseInt((Math.random() * 5) + 1);
    var numero3 = parseInt((Math.random() * 9) + 1);
    var a65cim2=[];
    nump2=(numero2*10)+numero3;
    for (var i = 0; i < numero2; i++) {
      a65cim2.push('<img src="img/i1_p69_act64.jpg"  class="img-responsive" alt="">');
    }
    for (var i = 0; i < numero3; i++) {
      a65cim2.push('<img src="img/i2_p69_act64.jpg" alt="">');
    }
    $('#a65im3').html(a65cim2);
    var a65ctxt1=['electrodoméstico','guayaquileño','veintinueve','supermercados'];
    var a65rtxt1=['16','12','11','13'];
    var a65rtxt2=['dieciséis','doce','once','trece'];
    var a65aux1=[];
    var a65aux2=[];
    var myArray1 = ['0','1','2','3'];
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
      $("#a65pal"+i).html(a65ctxt1[c]);
      a65aux1.push(a65rtxt1[c]);
      a65aux2.push(a65rtxt2[c]);
    };
   	bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      var a65dcon11=$('#a65dcon11').val();
      var a65dcon12=$('#a65dcon12').val();
      var a65dcon13=$('#a65dcon13').val();
      var a65dcon14=$('#a65dcon14').val();
      if (a65dcon11==(numero*10)) {
        cor++;
        f_ok($('#a65dcon11'));
      }else {
        inc++;
        f_no($('#a65dcon11'));
      }
      if (parseInt(a65dcon12) ==(numero1)) {
        cor++;
        f_ok($('#a65dcon12'));
      }else {
        inc++;
        f_no($('#a65dcon12'));
      }
      if (a65dcon13==((numero*10)+numero1)) {
        cor++;
        f_ok($('#a65dcon13'));
      }else {
        inc++;
        f_no($('#a65dcon13'));
      }
      if (a65dcon14==t) {
        cor++;
        f_ok($('#a65dcon14'));
      }else {
        inc++;
        f_no($('#a65dcon14'));
      }

      var a65dcon21=$('#a65dcon21').val();
      var a65dcon22=$('#a65dcon22').val();
      var a65dcon23=$('#a65dcon23').val();
      var a65dcon24=$('#a65dcon24').val();
      if (a65dcon21==(numero2*10)) {
        cor++;
        f_ok($('#a65dcon21'));
      }else {
        inc++;
        f_no($('#a65dcon21'));
      }
      if (a65dcon22==(numero3)) {
        cor++;
        f_ok($('#a65dcon22'));
      }else {
        inc++;
        f_no($('#a65dcon22'));
      }
      if (a65dcon23==((numero2*10)+numero3)) {
        cor++;
        f_ok($('#a65dcon23'));
      }else {
        inc++;
        f_no($('#a65dcon23'));
      }
      if (a65dcon24==t1) {
        cor++;
        f_ok($('#a65dcon24'));
      }else {
        inc++;
        f_no($('#a65dcon24'));
      }

      var a65dcon31=$('#a65dcon31').val();
      var a65dcon32=$('#a65dcon33').val();
      var a65dcon33=$('#a65dcon35').val();
      var a65dcon34=$('#a65dcon37').val();
      var a65dcon35=$('#a65dcon32').val();
      var a65dcon36=$('#a65dcon34').val();
      var a65dcon37=$('#a65dcon36').val();
      var a65dcon38=$('#a65dcon38').val();
      if (a65dcon31==a65aux1[0]) {
        cor++;
        f_ok($('#a65dcon31'));
      }else {
        inc++;
        f_no($('#a65dcon31'));
      }
      if (a65dcon32==a65aux1[1]) {
        cor++;
        f_ok($('#a65dcon33'));
      }else {
        inc++;
        f_no($('#a65dcon33'));
      }
      if (a65dcon33==a65aux1[2]) {
        cor++;
        f_ok($('#a65dcon35'));
      }else {
        inc++;
        f_no($('#a65dcon35'));
      }
      if (a65dcon34==a65aux1[3]) {
        cor++;
        f_ok($('#a65dcon37'));
      }else {
        inc++;
        f_no($('#a65dcon37'));
      }
      if (a65dcon35==a65aux2[0]) {
        cor++;
        f_ok($('#a65dcon32'));
      }else {
        inc++;
        f_no($('#a65dcon32'));
      }
      if (a65dcon36==a65aux2[1]) {
        cor++;
        f_ok($('#a65dcon34'));
      }else {
        inc++;
        f_no($('#a65dcon34'));
      }
      if (a65dcon37==a65aux2[2]) {
        cor++;
        f_ok($('#a65dcon36'));
      }else {
        inc++;
        f_no($('#a65dcon36'));
      }
      if (a65dcon38==a65aux2[3]) {
        cor++;
        f_ok($('#a65dcon38'));
      }else {
        inc++;
        f_no($('#a65dcon38'));
      }
      Calculo_nota();
   }
}