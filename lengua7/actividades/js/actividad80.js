var n1=0,sum_total=0,cont=0,ejer=1,itemsT=10,cor=0,inc=0,str='',calificacion=10;
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
    validNumero(0, 1, 1);
});
document.getElementById('nota1_2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_2'), 1)
});
document.getElementById('nota1_3').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_3').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_3'), 1)
});
document.getElementById('nota1_4').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_4').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_4'), 1)
});
document.getElementById('nota1_5').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_5').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_5'), 1)
});
 function f_iniciar() {
    var numero1 = ['Inserta el cepillo en la boca en un ángulo de 45° con relación a los dientes.',
    'Aplica la pasta de dientes en las cerdas del cepillo.',
    'Moja el cepillo con agua.',
    'Mueve el cepillo hacia atrás y hacia adelante sobre los dientes.',
    'Enjuágate la boca con agua y un enjuague bucal. Tus dientes quedarán limpios.'];
    var numero2 = ['3','2','1','4','5'];
    var myArray1 = ['0','1','2','3','4'];
    var a80vec1=[];
    var i,j,k;
    for (i = myArray1.length; i; i--) {
      j = Math.floor(Math.random() * i);
      k = myArray1[i - 1];
      myArray1[i - 1] = myArray1[j];
      myArray1[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 5 ; i++) {
      var c=myArray1[i-1];
      $("#a80im"+(i)).html(numero1[c]);
      a80vec1.push(numero2[c]);
    };
    
   	bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      var a80in1=$('#a80in1').val();
      var a80in2=$('#a80in2').val();
      var a80in3=$('#a80in3').val();
      var a80in4=$('#a80in4').val();
      var a80in5=$('#a80in5').val();
      if (a80in1==a80vec1[0]) {
        cor++;
        f_ok($('#a80in1'));
      }else {
        inc++;
        f_no($('#a80in1'));
      }
      if (a80in2==a80vec1[1]) {
        cor++;
        f_ok($('#a80in2'));
      }else {
        inc++;
        f_no($('#a80in2'));
      }
      if (a80in3==a80vec1[2]) {
        cor++;
        f_ok($('#a80in3'));
      }else {
        inc++;
        f_no($('#a80in3'));
      }
      if (a80in4==a80vec1[3]) {
        cor++;
        f_ok($('#a80in4'));
      }else {
        inc++;
        f_no($('#a80in4'));
      }
      if (a80in5==a80vec1[4]) {
        cor++;
        f_ok($('#a80in5'));
      }else {
        inc++;
        f_no($('#a80in5'));
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
        inc=inc+1;
        f_no($('#nota1_2'));
        $('#nota1_2').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_2);
        inc=inc+(1-parseFloat(nota1_2));
        f_ok($('#nota1_2'));
        $('#nota1_2').attr('disabled','true');
    }
    var nota1_3=$('#nota1_3').val();
      if (!nota1_3) {
        inc=inc+1;
        f_no($('#nota1_3'));
        $('#nota1_3').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_3);
        inc=inc+(1-parseFloat(nota1_3));
        f_ok($('#nota1_3'));
        $('#nota1_3').attr('disabled','true');
    }
    var nota1_4=$('#nota1_4').val();
      if (!nota1_4) {
        inc=inc+1;
        f_no($('#nota1_4'));
        $('#nota1_4').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_4);
        inc=inc+(1-parseFloat(nota1_4));
        f_ok($('#nota1_4'));
        $('#nota1_4').attr('disabled','true');
    }
    var nota1_5=$('#nota1_5').val();
      if (!nota1_5) {
        inc=inc+1;
        f_no($('#nota1_5'));
        $('#nota1_5').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_5);
        inc=inc+(1-parseFloat(nota1_5));
        f_ok($('#nota1_5'));
        $('#nota1_5').attr('disabled','true');
    }
      Calculo_nota();
   }
}