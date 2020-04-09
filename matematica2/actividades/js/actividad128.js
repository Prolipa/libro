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
    validNumero(0, 2, 1);
});
document.getElementById('nota1_1').addEventListener('keyup', () => {
    validMaxIngreso(document.getElementById('nota1_1'), 2)
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
 function f_iniciar() {
    var p3cim1=['<img src="img/i3_p124_act128.jpg" class="img-responsive" style="min-width: 100px;" alt="">',
    '<img src="img/i5_p124_act128.jpg" class="img-responsive" style="min-width: 100px;" alt="">',
    '<img src="img/i6_p124_act128.jpg" class="img-responsive" style="min-width: 100px;" alt="">'];
    var p3cim2=['<img src="img/i4_p124_act128.jpg" class="img-responsive" style="min-width: 100px;" alt="">',
    '<img src="img/i7_p124_act128.jpg" class="img-responsive" style="min-width: 100px;" alt="">',
    '<img src="img/i8_p124_act128.jpg" class="img-responsive" style="min-width: 100px;" alt="">'];
    var a127cim3=[];
    var myArray1 = ['0','1','2'];
       var i,j,k;
        for (i = myArray1.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray1[i - 1];
            myArray1[i - 1] = myArray1[j];
            myArray1[j] = k;
        }
        var c=myArray1[1];
        $("#p3im1").html(p3cim1[c]);
        var c1=myArray1[2];
        $("#p3im2").html(p3cim2[c1]);
        
    bt_comprobar.addEventListener("click", f_comprobar);
    function f_comprobar(){
        cont++;
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p3dcon1=$('#p3dcon1').val();
        var p3dcon2=$('#p3dcon2').val();
        var p3cont1=0;
        if (c=='0') {
          if (p3dcon1=='10') {
            p3cont1++;
            f_ok($('#p3dcon1'));
          }else{
            p3cont1;
            f_no($('#p3dcon1'));
          }  
        }else if (c=='1') {
          if (p3dcon1=='13') {
            p3cont1++;
            f_ok($('#p3dcon1'));
          }else{
            p3cont1;
            f_no($('#p3dcon1'));
          }  
        }else if (c=='2') {
          if (p3dcon1=='16') {
            p3cont1++;
            f_ok($('#p3dcon1'));
          }else{
            p3cont1;
            f_no($('#p3dcon1'));
          }  
        }
        if (c1=='0') {
          if (p3dcon2=='13') {
            p3cont1++;
            f_ok($('#p3dcon2'));
          }else{
            p3cont1;
            f_no($('#p3dcon2'));
          }  
        }else if (c1=='1') {
          if (p3dcon2=='15') {
            p3cont1++;
            f_ok($('#p3dcon2'));
          }else{
            p3cont1;
            f_no($('#p3dcon2'));
          }  
        }else if (c1=='2') {
          if (p3dcon2=='17') {
            p3cont1++;
            f_ok($('#p3dcon2'));
          }else{
            p3cont1;
            f_no($('#p3dcon2'));
          }  
        }
        var result3=(p3cont1*2)/2;
        cor=cor+result3;
        inc=inc+(2-result3);

        var p4dcon1=$('#p4dcon1').val();
        var p4dcon2=$('#p4dcon2').val();
        var p4cont1=0;
        if (p4dcon1=='26') {
          p4cont1++;
          f_ok($('#p4dcon1'));
        }else{
          p4cont1;
          f_no($('#p4dcon1'));
        }
        if (p4dcon2=='15') {
          p4cont1++;
          f_ok($('#p4dcon2'));
        }else{
          p4cont1;
          f_no($('#p4dcon2'));
        } 
        var result4=(p4cont1*2)/2;
        cor=cor+result4;
        inc=inc+(2-result4);

        var nota1_1=$('#nota1_1').val();
        if (!nota1_1) {
          inc=inc+2;
          f_no($('#nota1_1'));
          $('#nota1_1').attr('disabled','true');
        }else{
          cor=cor+parseFloat(nota1_1);
          inc=inc+(2-parseFloat(nota1_1));
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
          $('#p5dcon2').val('18');
          f_ok($('#p5dcon2'));
        }else{
          cor=cor+parseFloat(nota1_3);
          inc=inc+(2-parseFloat(nota1_3));
          f_ok($('#nota1_3'));
          $('#nota1_3').attr('disabled','true');
          $('#p5dcon2').val('18');
          f_ok($('#p5dcon2'));
        }
        Calculo_nota();
   }
}