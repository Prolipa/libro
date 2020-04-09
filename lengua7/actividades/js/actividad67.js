var n1=0,sum_total=0,cont=0,ejer=1,itemsT=10,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
var a76arr=[];
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
document.getElementById('nota1_6').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_6').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_6'), 1)
});
document.getElementById('nota1_7').addEventListener('keypress', () => {
    validNumero(0, 1, 1);
});
document.getElementById('nota1_7').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_7'), 1)
});
document.getElementById('nota1_8').addEventListener('keypress', () => {
    validNumero(0, 2, 1);
});
document.getElementById('nota1_8').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_8'), 2)
});
for (var i =1; i < 9; i++) {
  $('.sub'+i).click(function(){

            if ($(this).hasClass('underline')) {
                $(this).removeClass('underline')
                

            }else{
                $(this).addClass('underline')
                
            }

        })  
}

function f_iniciar() {
  
  bt_comprobar.addEventListener("click", f_comprobar);
  function f_comprobar(){
    cont++;
    AgregaClase(".nota",claseAnimada);
    QuitaClase(".actividad",claseAnimada);
    bt_comprobar.removeEventListener("click", f_comprobar);
    var a67con1=$('.sub1').hasClass('underline');
    var a67con2=$('.sub2').hasClass('underline');
    var a67con3=$('.sub3').hasClass('underline');
    var a67con4=$('.sub4').hasClass('underline');
    var a67con5=$('.sub5').hasClass('underline');
    var a67con6=$('.sub6').hasClass('underline');
    var a67con7=$('.sub7').hasClass('underline');
    var a67con8=$('.sub8').hasClass('underline');  
    var a67con9=$('.underline').length;
    var a67cont1=0;
    if (a67con9>'0') {
      if (a67con1) {
        a67cont1++;
        f_ok($('.sub1'));
      }
      if (a67con2) {
        a67cont1++;
        f_ok($('.sub2'));
      }
      if (a67con5) {
        a67cont1++;
        f_ok($('.sub5'));
      }
      if (a67con6) {
        a67cont1++;
        f_ok($('.sub6'));
      }
      if (a67con3) {
        a67cont1--;
        f_no($('.sub3'));
      }
      if (a67con4) {
        a67cont1--;
        f_no($('.sub4'));
      }
      if (a67con7) {
        a67cont1--;
        f_no($('.sub7'));
      }
      if (a67con8) {
        a67cont1--;
        f_no($('.sub8'));
      }
    }else{
      a67cont1;
      f_no($('.sub1'));
      f_no($('.sub2'));
      f_no($('.sub3'));
      f_no($('.sub4'));
      f_no($('.sub5'));
      f_no($('.sub6'));
      f_no($('.sub7'));
      f_no($('.sub8'));
        
    }
    var result1=(a67cont1*1)/4;
    cor=cor + result1;
    inc=inc +(1-result1);

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
    var nota1_6=$('#nota1_6').val();
      if (!nota1_6) {
        inc=inc+1;
        f_no($('#nota1_6'));
        $('#nota1_6').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_6);
        inc=inc+(1-parseFloat(nota1_6));
        f_ok($('#nota1_6'));
        $('#nota1_6').attr('disabled','true');
    }
    var nota1_7=$('#nota1_7').val();
      if (!nota1_7) {
        inc=inc+1;
        f_no($('#nota1_7'));
        $('#nota1_7').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_7);
        inc=inc+(1-parseFloat(nota1_7));
        f_ok($('#nota1_7'));
        $('#nota1_7').attr('disabled','true');
    }
    var nota1_8=$('#nota1_8').val();
      if (!nota1_8) {
        inc=inc+2;
        f_no($('#nota1_8'));
        $('#nota1_8').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_8);
        inc=inc+(2-parseFloat(nota1_8));
        f_ok($('#nota1_8'));
        $('#nota1_8').attr('disabled','true');
    }
    Calculo_nota();
  }

}
