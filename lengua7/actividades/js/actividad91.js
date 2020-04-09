var n1=0,sum_total=0,cont=0,ejer=1,itemsT=6,cor=0,inc=0,str='',calificacion=10;
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
      if (p1in1=='en esmeraldas' || p1in1=='esmeraldas') {
        cor++;
        f_ok($('#p1in1'));
      }else{
        inc++;
        f_no($('#p1in1'));
      }

      var p2in1=$('#p2in1').val().toLowerCase();
      var p2in2=$('#p2in2').val().toLowerCase();
      var p2in3=$('#p2in3').val().toLowerCase();
      var p2vec1=['shuar chicham','achuar chicham','shiwiar chicham'];
      var p2cont1=0;
      for (var i =0; i < p2vec1.length; i++) {
      	if (p2in1==p2vec1[i]) {
      		p2cont1++;
      		p2vec1[i]=p2cont1;
      	}
      }
      if (p2cont1=='1') {
      	cor++;
      	f_ok($('#p2in1'));	
      }else{
      	inc++;
      	f_no($('#p2in1'));
      }
      var p2cont2=0;
      for (var i =0; i < p2vec1.length; i++) {
      	if (p2in2==p2vec1[i]) {
      		p2cont2++;
      		p2vec1[i]=p2cont2;
      	}
      }
      if (p2cont2=='1') {
      	cor++;
      	f_ok($('#p2in2'));	
      }else{
      	inc++;
      	f_no($('#p2in2'));
      }
      var p2cont3=0;
      for (var i =0; i < p2vec1.length; i++) {
        if (p2in3==p2vec1[i]) {
          p2cont3++;
          p2vec1[i]=p2cont3;
        }
      }
      if (p2cont3=='1') {
        cor++;
        f_ok($('#p2in3'));  
      }else{
        inc++;
        f_no($('#p2in3'));
      }

      var p3in1=$('#p3in1').val().toLowerCase();
      if (p3in1=='en la amazonía' || p3in1=='amazonía' || p3in1=='la amazonía') {
        cor++;
        f_ok($('#p3in1'));
      }else{
        inc++;
        f_no($('#p3in1'));
      }
      var p4in1=$('#p4in1').val().toLowerCase();
      if (p4in1=='el kichwa' || p4in1=='el kichwa/runashimi' || p4in1=='kichwa' || p4in1=='kichwa/runashimi') {
        cor++;
        f_ok($('#p4in1'));
      }else{
        inc++;
        f_no($('#p4in1'));
      }
      Calculo_nota();
   }
}
