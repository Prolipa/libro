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
    var resw=[]; 
    var numero = parseInt((Math.random() * 2) + 1);
    var numero1 = parseInt((Math.random() * 5) + 1);
    
    var a72cim1=[],a72cim2=[];
    for (var i = 0; i < numero; i++) {
      a72cim1.push('<img src="img/i1_p73_act72.jpg" width="120px" alt=""><br>')
    }
    for (var i = 0; i < numero1; i++) {
      a72cim2.push('<img src="img/i2_p73_act72.jpg" width="20px" alt="">')
    }
    $('#a72im1').html(a72cim1);
    $('#a72im2').html(a72cim2);
    var numero2 = parseInt((Math.random() * 2) + 1);
    var numero3 = parseInt((Math.random() * 5) + 1);
    if (((numero*10)+numero1)>((numero2*10)+numero3)) {
      resw.push('>');
    }else if (((numero*10)+numero1)<((numero2*10)+numero3)) {
      resw.push('<');
    }else if (((numero*10)+numero1)==((numero2*10)+numero3)) {
      resw.push('=');
    }
    var a72cim3=[],a72cim4=[];
    for (var i = 0; i < numero2; i++) {
      a72cim3.push('<img src="img/i1_p73_act72.jpg" width="120px" alt=""><br>')
    }
    for (var i = 0; i < numero3; i++) {
      a72cim4.push('<img src="img/i2_p73_act72.jpg" width="20px" alt="">')
    }
    $('#a72im3').html(a72cim3);
    $('#a72im4').html(a72cim4);
    var numero4 = parseInt((Math.random() * 2) + 1);
    var numero5 = parseInt((Math.random() * 5) + 1);
    
    var a72cim5=[],a72cim6=[];
    for (var i = 0; i < numero4; i++) {
      a72cim5.push('<img src="img/i1_p73_act72.jpg" width="120px" alt=""><br>')
    }
    for (var i = 0; i < numero5; i++) {
      a72cim6.push('<img src="img/i2_p73_act72.jpg" width="20px" alt="">')
    }
    $('#a72im11').html(a72cim5);
    $('#a72im12').html(a72cim6);
    var numero6 = parseInt((Math.random() * 2) + 1);
    var numero7 = parseInt((Math.random() * 5) + 1);
    if (((numero4*10)+numero5)>((numero6*10)+numero7)) {
      resw.push('>');
    }else if (((numero4*10)+numero5)<((numero6*10)+numero7)) {
      resw.push('<');
    }else if (((numero4*10)+numero5)==((numero6*10)+numero7)) {
      resw.push('=');
    }
    var a72cim7=[],a72cim8=[];
    for (var i = 0; i < numero6; i++) {
      a72cim7.push('<img src="img/i1_p73_act72.jpg" width="120px" alt=""><br>')
    }
    for (var i = 0; i < numero7; i++) {
      a72cim8.push('<img src="img/i2_p73_act72.jpg" width="20px" alt="">')
    }
    $('#a72im13').html(a72cim7);
    $('#a72im14').html(a72cim8);
    var numero8 = parseInt((Math.random() * 2) + 1);
    var numero9 = parseInt((Math.random() * 5) + 1);
    var a72cim9=[],a72cim10=[];
    for (var i = 0; i < numero8; i++) {
      a72cim9.push('<img src="img/i1_p73_act72.jpg" width="120px" alt=""><br>')
    }
    for (var i = 0; i < numero9; i++) {
      a72cim10.push('<img src="img/i2_p73_act72.jpg" width="20px" alt="">')
    }
    $('#a72im21').html(a72cim9);
    $('#a72im22').html(a72cim10);
    var numero10 = parseInt((Math.random() * 2) + 1);
    var numero11 = parseInt((Math.random() * 5) + 1);
    if (((numero8*10)+numero9)>((numero10*10)+numero11)) {
      resw.push('>');
    }else if (((numero8*10)+numero9)<((numero10*10)+numero11)) {
      resw.push('<');
    }else if (((numero8*10)+numero9)==((numero10*10)+numero11)) {
      resw.push('=');
    }
    var a72cim11=[],a72cim12=[];
    for (var i = 0; i < numero10; i++) {
      a72cim11.push('<img src="img/i1_p73_act72.jpg" width="120px" alt=""><br>')
    }
    for (var i = 0; i < numero11; i++) {
      a72cim12.push('<img src="img/i2_p73_act72.jpg" width="20px" alt="">')
    }
    $('#a72im23').html(a72cim11);
    $('#a72im24').html(a72cim12);

    var a72abc1=['<img src="img/i3_p73_act72.jpg" alt="">','<img src="img/i5_p73_act72.jpg" alt="">','<img src="img/i7_p73_act72.jpg" alt="">'];
    var a72abc2=['<img src="img/i4_p73_act72.jpg" alt="">','<img src="img/i6_p73_act72.jpg" alt="">','<img src="img/i8_p73_act72.jpg" alt="">'];
    var a72abc3=['>','>','<'];
    var a72abc4=['18','30','11'];
    var a72abc5=['12','25','21'];
    var resa72=[],resa721=[],resa722=[];
    var myArray1 = ['0','1','2'];
    var i,j,k;
    for (i = myArray1.length; i; i--) {
      j = Math.floor(Math.random() * i);
      k = myArray1[i - 1];
      myArray1[i - 1] = myArray1[j];
      myArray1[j] = k;
    }
    //aleatorio literal 1
    for (var i = 3; i <= 5 ; i++) {
      var c=myArray1[i-3];
      $("#a72im"+i+"1").html(a72abc1[c]);
      $("#a72im"+i+"2").html(a72abc2[c]);
      resa72.push(a72abc3[c]);
      resa721.push(a72abc4[c]);
      resa722.push(a72abc5[c]);
    };
   	bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      var a72dcon1=$('#a72dcon1').val();
      var a72dcon2=$('#a72dcon2').val();
      var a72dsim1=$('#a72dsim1').val();
      if (a72dcon1==((numero*10)+numero1)) {
        cor++;
        f_ok($('#a72dcon1'));
      }else {
        inc++;
        f_no($('#a72dcon1'));
      }
      if (a72dcon2==((numero2*10)+numero3)) {
        cor++;
        f_ok($('#a72dcon2'));
      }else {
        inc++;
        f_no($('#a72dcon2'));
      }
      if (a72dsim1==resw[0]) {
        cor++;
        f_ok($('#a72dsim1'));
      }else {
        inc++;
        f_no($('#a72dsim1'));
      }
      var a72dcon11=$('#a72dcon11').val();
      var a72dcon12=$('#a72dcon12').val();
      var a72dsim11=$('#a72dsim11').val();
      if (a72dcon11==((numero4*10)+numero5)) {
        cor++;
        f_ok($('#a72dcon11'));
      }else {
        inc++;
        f_no($('#a72dcon11'));
      }
      if (a72dcon12==((numero6*10)+numero7)) {
        cor++;
        f_ok($('#a72dcon12'));
      }else {
        inc++;
        f_no($('#a72dcon12'));
      }
      if (a72dsim11==resw[1]) {
        cor++;
        f_ok($('#a72dsim11'));
      }else {
        inc++;
        f_no($('#a72dsim11'));
      }
      var a72dcon21=$('#a72dcon21').val();
      var a72dcon22=$('#a72dcon22').val();
      var a72dsim21=$('#a72dsim21').val();
      if (a72dcon21==((numero8*10)+numero9)) {
        cor++;
        f_ok($('#a72dcon21'));
      }else {
        inc++;
        f_no($('#a72dcon21'));
      }
      if (a72dcon22==((numero10*10)+numero11)) {
        cor++;
        f_ok($('#a72dcon22'));
      }else {
        inc++;
        f_no($('#a72dcon22'));
      }
      if (a72dsim21==resw[2]) {
        cor++;
        f_ok($('#a72dsim21'));
      }else {
        inc++;
        f_no($('#a72dsim21'));
      }
      var a72dcon31=$('#a72dcon31').val();
      var a72dcon32=$('#a72dcon32').val();
      var a72dsim31=$('#a72dsim31').val();
      if (a72dcon31==resa721[0]) {
        cor++;
        f_ok($('#a72dcon31'));
      }else {
        inc++;
        f_no($('#a72dcon31'));
      }
      if (a72dcon32==resa722[0]) {
        cor++;
        f_ok($('#a72dcon32'));
      }else {
        inc++;
        f_no($('#a72dcon32'));
      }
      if (a72dsim31==resa72[0]) {
        cor++;
        f_ok($('#a72dsim31'));
      }else {
        inc++;
        f_no($('#a72dsim31'));
      }
      var a72dcon41=$('#a72dcon41').val();
      var a72dcon42=$('#a72dcon42').val();
      var a72dsim41=$('#a72dsim41').val();
      if (a72dcon41==resa721[1]) {
        cor++;
        f_ok($('#a72dcon41'));
      }else {
        inc++;
        f_no($('#a72dcon41'));
      }
      if (a72dcon42==resa722[1]) {
        cor++;
        f_ok($('#a72dcon42'));
      }else {
        inc++;
        f_no($('#a72dcon42'));
      }
      if (a72dsim41==resa72[1]) {
        cor++;
        f_ok($('#a72dsim41'));
      }else {
        inc++;
        f_no($('#a72dsim41'));
      }
      var a72dcon51=$('#a72dcon51').val();
      var a72dcon52=$('#a72dcon52').val();
      var a72dsim51=$('#a72dsim51').val();
      if (a72dcon51==resa721[2]) {
        cor++;
        f_ok($('#a72dcon51'));
      }else {
        inc++;
        f_no($('#a72dcon51'));
      }
      if (a72dcon52==resa722[2]) {
        cor++;
        f_ok($('#a72dcon52'));
      }else {
        inc++;
        f_no($('#a72dcon52'));
      }
      if (a72dsim51==resa72[2]) {
        cor++;
        f_ok($('#a72dsim51'));
      }else {
        inc++;
        f_no($('#a72dsim51'));
      }
      Calculo_nota();
   }
}