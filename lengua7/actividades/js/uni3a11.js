var n1=0,sum_total=0,cont=0,ejer=1,itemsT=10,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
  $('.enc1').click(function(){
      
        if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                

            }else{
                $(this).addClass('encierra')
                $('.enc2').removeClass('encierra')
                $('.enc3').removeClass('encierra')
            }
      
            

        })
  $('.enc2').click(function(){
      
        if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                

            }else{
                $(this).addClass('encierra')
                $('.enc1').removeClass('encierra')
                $('.enc3').removeClass('encierra')
            }
      
            

        })
  $('.enc3').click(function(){
      
        if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                

            }else{
                $(this).addClass('encierra')
                $('.enc2').removeClass('encierra')
                $('.enc1').removeClass('encierra')
            }
      
            

        })


document.getElementById('nota1_1').addEventListener('keypress', () => {
    validNumero(0, 4, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 4)
});
document.getElementById('nota1_2').addEventListener('keypress', () => {
    validNumero(0, 4, 1);
});
document.getElementById('nota1_2').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_2'), 4)
});
function f_iniciar() {
    var p2vec1=['Secoya','Taína','Valdivia'];
    var myArray1 = ['0','1','2'];
       var i,j,k;
        for (i = myArray1.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray1[i - 1];
            myArray1[i - 1] = myArray1[j];
            myArray1[j] = k;
        }
    //aleatorio literal 1
        for (var i = 1; i <= 3 ; i++) {
            var c2=myArray1[i-1];
            $("#p2im"+i).html(p2vec1[c2]);
            
        };
    bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      var p2in1=$('.encierra').text();
      var p2cont=0;
      if (!p2in1) {
        p2cont;
        f_no($('.enc1'));
        f_no($('.enc2'));
        f_no($('.enc3'));
      }else{
        if (p2in1=='Valdivia') {
          p2cont++;
          f_ok($('.encierra'));
        }else{
          p2cont;
          f_no($('.encierra'));
        }
      }
      var result1= (p2cont*2)/1;
      cor=cor + result1;
      inc=inc +(2 - result1);

      var nota1_1=$('#nota1_1').val();
      if (!nota1_1) {
        inc=inc+4;
        f_no($('#nota1_1'));
        $('#nota1_1').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_1);
        inc=inc+(4-parseFloat(nota1_1));
        f_ok($('#nota1_1'));
        $('#nota1_1').attr('disabled','true');
      }
      var nota1_2=$('#nota1_2').val();
      if (!nota1_2) {
        inc=inc+4;
        f_no($('#nota1_2'));
        $('#nota1_2').attr('disabled','true');
      }else{
        cor=cor+parseFloat(nota1_2);
        inc=inc+(4-parseFloat(nota1_2));
        f_ok($('#nota1_2'));
        $('#nota1_2').attr('disabled','true');
      }
      Calculo_nota();
   }
}
