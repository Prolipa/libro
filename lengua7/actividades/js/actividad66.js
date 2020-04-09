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
for (var i =1; i < 11; i++) {
  $('.enc'+i).click(function(){

            if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                

            }else{
                $(this).addClass('encierra')
                
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
      var a66con1=$('.enc1').hasClass('encierra');
      var a66con3=$('.enc3').hasClass('encierra');
      var a66con4=$('.enc4').hasClass('encierra');
      var a66con5=$('.enc7').hasClass('encierra');
      var a66con6=$('.enc8').hasClass('encierra');
      var a66con7=$('.enc2').hasClass('encierra');
      var a66con8=$('.enc5').hasClass('encierra');
      var a66con9=$('.enc6').hasClass('encierra');
      var a66con10=$('.enc9').hasClass('encierra');
      var a66con11=$('.enc10').hasClass('encierra');
      var a66con2=$('.encierra').length;
      var a66cont1=0;
      if (a66con2>'0') {
        if (a66con1) {
          a66cont1++;
          f_ok($('.enc1'));
        } 
        if (a66con3) {
          a66cont1++;
          f_ok($('.enc3'));
        }
        if (a66con4) {
          a66cont1++;
          f_ok($('.enc4'));
        }
        if (a66con5) {
          a66cont1++;
          f_ok($('.enc7'));
        }
        if (a66con6) {
          a66cont1++;
          f_ok($('.enc8'));
        }
        if (a66con7) {
          a66cont1--;
          f_no($('.enc2'));
        }
        if (a66con8) {
          a66cont1--;
          f_no($('.enc5'));
        }
        if (a66con9) {
          a66cont1--;
          f_no($('.enc6'));
        }
        if (a66con10) {
          a66cont1--;
          f_no($('.enc9'));
        }
        if (a66con11) {
          a66cont1--;
          f_no($('.enc10'));
        }
      }else{
        a66cont1;
        f_no($('.enc1'));
        f_no($('.enc2'));
        f_no($('.enc3'));
        f_no($('.enc4'));
        f_no($('.enc5'));
        f_no($('.enc6'));
        f_no($('.enc7'));
        f_no($('.enc8'));
        f_no($('.enc9'));
        f_no($('.enc10'));
      }
      var result1=(a66cont1*5)/5;
      cor=cor + parseFloat(a66cont1);
      inc=inc+(5 - parseFloat(a66cont1))
    Calculo_nota();
  }
}
