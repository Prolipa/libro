var n1=0,sum_total=0,cont=0,ejer=1,itemsT=4,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
function f_iniciar() {
    
    bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      var p1in1=$('#p1in1').val().toLowerCase();
      var p1in2=$('#p1in2').val().toLowerCase();
      var p1in3=$('#p1in3').val().toLowerCase();
      var p1cont1=0;
      var p1vec1=['el shimigae',
      'el sia pedee',
      ' el zápara',
      'shimigae',
      'sia pedee',
      'zápara'];
      for (var i =0; i <p1vec1.length; i++) {
        if (p1in1==p1vec1[i]) {
          p1cont1++;
          p1vec1[i]=p1cont1;
        }
      }
      if (p1cont1=='1') {
        cor++;
        f_ok($('#p1in1'));
      }else{
        inc++;
        f_no($('#p1in1'));
      }
      var p1cont2=0;
      for (var i =0; i <p1vec1.length; i++) {
        if (p1in2==p1vec1[i]) {
          p1cont2++;
          p1vec1[i]=p1cont2;
        }
      }
      if (p1cont2=='1') {
        cor++;
        f_ok($('#p1in2'));
      }else{
        inc++;
        f_no($('#p1in2'));
      }
      var p1cont3=0;
      for (var i =0; i <p1vec1.length; i++) {
        if (p1in3==p1vec1[i]) {
          p1cont3++;
          p1vec1[i]=p1cont3;
        }
      }
      if (p1cont3=='1') {
        cor++;
        f_ok($('#p1in3'));
      }else{
        inc++;
        f_no($('#p1in3'));
      }
      var p2in1=$('#p2in1').val().toLowerCase();
      if (p2in1=='el kichwa' || p2in1=='kichwa') {
        cor++;
        f_ok($('#p2in1'));
      }else{
        inc++;
        f_no($('#p2in1'));
      }
      Calculo_nota();
   }
}
