var n1=0,sum_total=0,cont=0,ejer=1,itemsT=4,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
for (var i =0; i < 22; i++) {
  $('.sub'+(i+1)).click(function(){

            if ($(this).hasClass('underline')) {
                $(this).removeClass('underline')
                

            }else{
                $(this).addClass('underline')
                
            }

        })  
}

 function f_iniciar() {
    var a83vec1=['<span class="sub1">Julián</span> <span class="sub2">corre</span> <span class="sub3">en</span> <span class="sub4">el</span> <span class="sub5">auto</span> <span class="sub6">rojo.</span>',
    '<span class="sub7">Marcela</span> <span class="sub8">compite</span> <span class="sub9">en</span> <span class="sub10">la</span> <span class="sub11">bicicleta</span> <span class="sub12">nueva.</span>',
    '<span class="sub13">Este</span> <span class="sub14">juego</span> <span class="sub15">se</span> <span class="sub16">acabó.</span>',
    '¿<span class="sub17">Cuál</span> <span class="sub18">libro</span> <span class="sub19">te</span> <span class="sub20">gustó</span> <span class="sub21">más</span>?'];
   	var a83vec2=['rojo.','nueva.','Este','Cuál'];
    var myArray1 = ['0','1','2','3'];
    var a83vec3=[];
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
      $("#reim"+(i)).html(a83vec1[c]);
      a83vec3.push(a83vec2[c]);
    };
    bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
      cont++;
      AgregaClase(".nota",claseAnimada);
      QuitaClase(".actividad",claseAnimada);
      bt_comprobar.removeEventListener("click", f_comprobar);
      var reim1=$('#reim1 .underline').text();
      var reim2=$('#reim2 .underline').text();
      var reim3=$('#reim3 .underline').text();
      var reim4=$('#reim4 .underline').text();
      var reim5=$('.totsub .underline').length;
      if (reim5>0) {
        if (reim1==a83vec3[0]) {
          cor++;
          f_ok($('#reim1 .underline'));
        }else {
          inc++;
          f_no($('#reim1 .underline'));
        }
        if (reim2==a83vec3[1]) {
          cor++;
          f_ok($('#reim2 .underline'));
        }else {
          inc++;
          f_no($('#reim2 .underline'));
        }
        if (reim3==a83vec3[2]) {
          cor++;
          f_ok($('#reim3 .underline'));
        }else {
          inc++;
          f_no($('#reim3 .underline'));
        }
        if (reim4==a83vec3[3]) {
          cor++;
          f_ok($('#reim4 .underline'));
        }else {
          inc++;
          f_no($('#reim4 .underline'));
        }  
      }else{
        inc=inc+4;
        f_no($('#reim1'));
        f_no($('#reim2'));
        f_no($('#reim3'));
        f_no($('#reim4'));
      }
      
      
      Calculo_nota();
   }
}