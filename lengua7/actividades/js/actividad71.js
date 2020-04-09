var n1=0,sum_total=0,cont=0,ejer=1,itemsT=10,cor=0,inc=0,str='',calificacion=10;
var t=0, t1=0,t2=0,t3=0;
var claseAnimada ='animate bounceIn';
f_iniciar();

function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
document.getElementById('nota1_1').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 1)
});
document.getElementById('nota1_2').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota1_2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_2'), 2)
});
document.getElementById('nota1_3').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota1_3').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_3'), 2)
});
document.getElementById('nota1_4').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota1_4').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_4'), 2)
});
 function f_iniciar() {
    
   bt_comprobar.addEventListener("click", f_comprobar);
   function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      var a71in1 =$('#a71in1').val().split('');
      var a71in2 =$('#a71in2').val().split('');
      var a71in3 =$('#a71in3').val().split('');
      var a71cont1=0;
      for (var i =0; i < 1; i++) {
        if (a71in1[i]=='1') {
          a71cont1++;

        }
      }
      if (a71cont1=='1') {
        cor++;
        f_ok($('#a71in1'));
      }else{
        inc++;
        f_no($('#a71in1'));
      }
      var a71cont2=0;
      for (var i =0; i < 3; i++) {
        if (a71in2[i]=='2' || a71in2[i]=='3' || a71in2[i]=='4') {
          a71cont2++;
          
        }
      }
      if (a71cont2=='3') {
        cor++;
        f_ok($('#a71in2'));
      }else{
        inc++;
        f_no($('#a71in2'));
      }
      var a71cont3=0;
      for (var i =0; i < 1; i++) {
        if (a71in3[i]=='5') {
          a71cont3++;
          
        }
      }
      if (a71cont3=='1') {
        cor++;
        f_ok($('#a71in3'));
      }else{
        inc++;
        f_no($('#a71in3'));
      }
      var nota1_1=$('#nota1_1').val();
      if (!nota1_1) {
        inc=inc+1;
        f_no($('#nota1_1'));
        $('#nota1_1').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_1);
        inc=inc+(1-parseFloat(nota1_1));
        f_ok($('#nota1_1'));
        $('#nota1_1').attr('disabled','true');
    }
      var nota1_2=$('#nota1_2').val();
      if (!nota1_2) {
        inc=inc+2;
        f_no($('#nota1_2'));
        $('#nota1_2').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_2);
        inc=inc+(2-parseFloat(nota1_2));
        f_ok($('#nota1_2'));
        $('#nota1_2').attr('disabled','true');
    }
    var nota1_3=$('#nota1_3').val();
      if (!nota1_3) {
        inc=inc+2;
        f_no($('#nota1_3'));
        $('#nota1_3').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_3);
        inc=inc+(2-parseFloat(nota1_3));
        f_ok($('#nota1_3'));
        $('#nota1_3').attr('disabled','true');
    }
    var nota1_4=$('#nota1_4').val();
      if (!nota1_4) {
        inc=inc+2;
        f_no($('#nota1_4'));
        $('#nota1_4').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_4);
        inc=inc+(2-parseFloat(nota1_4));
        f_ok($('#nota1_4'));
        $('#nota1_4').attr('disabled','true');
    }
      Calculo_nota();
   }
   
}
