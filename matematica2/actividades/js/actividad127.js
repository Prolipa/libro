var n1=0,sum_total=0,cont=0,ejer=1,itemsT=3,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
 function f_iniciar() {
    var a127cim1=['<img src="img/i1_p123_act127.jpg" alt="">',
    '<img src="img/i2_p123_act127.jpg" alt="">',
    '<img src="img/i3_p123_act127.jpg" alt="">',
    '<img src="img/i4_p123_act127.jpg" alt="">'];
    var a127cim2=['<input type="text" id="a127dcon1" onkeypress="return soloNumeros1(event)" class="form-control" style="border: 2px solid #C6ABD0; min-width: 50px;">',
    '<input type="text" id="a127dcon2" onkeypress="return soloNumeros1(event)" class="form-control" style="border: 2px solid #7BB963;min-width: 50px;">',
    '<input type="text" id="a127dcon3" onkeypress="return soloNumeros1(event)" class="form-control" style="border: 2px solid #FDD000;min-width: 50px;">',
    '<input type="text" id="a127dcon4" onkeypress="return soloNumeros1(event)" class="form-control" style="border: 2px solid #E25674;min-width: 50px;">'];
    var a127cim3=[];
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
            $("#a127im"+i).html(a127cim1[c]);
            $("#a127im1"+i).html(a127cim2[c]);
        };
    bt_comprobar.addEventListener("click", f_comprobar);
    function f_comprobar(){
        cont++;
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var a127dcon1=$('#a127dcon1').val();
        var a127dcon2=$('#a127dcon2').val();
        var a127dcon3=$('#a127dcon3').val();
        var a127dcon4=$('#a127dcon4').val();
        if (a127dcon1=='8') {
          cor++;
          f_ok($('#a127dcon1'));
        }else{
          inc++;
          f_no($('#a127dcon1'));
        }
        if (a127dcon2=='10') {
          cor++;
          f_ok($('#a127dcon2'));
        }else{
          inc++;
          f_no($('#a127dcon2'));
        }
        if (a127dcon3=='3') {
          cor++;
          f_ok($('#a127dcon3'));
        }else{
          inc++;
          f_no($('#a127dcon3'));
        }
        if (a127dcon4=='7') {
          cor++;
          f_ok($('#a127dcon4'));
        }else{
          inc++;
          f_no($('#a127dcon4'));
        }
        Calculo_nota();
   }
}