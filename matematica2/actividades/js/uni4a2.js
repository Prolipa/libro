var n1=0,sum_total=0,cont=0,ejer=1,itemsT=10,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
 function f_iniciar() {
    var pal1=['<tr align="center">'+
'<td>'+
'<img src="img/i1_p159_uni4a2.jpg" class="img-responsive" alt="">'+
'</td>'+
'</tr>'+
'<tr align="center">'+
'<td>'+
'<input type="text" id="p1dcon1" style="border-radius: 10px; border: 2px solid #6D107D; text-align: center; width: 150px;" name="">'+
'</td>'+
'</tr>',
'<tr align="center" >'+
'<td>'+
'<img src="img/i2_p159_uni4a2.jpg" class="img-responsive" alt="">'+
'</td>'+
'</tr>'+
'<tr align="center">'+
'<td>'+
'<input type="text" id="p1dcon2" style="border-radius: 10px; border: 2px solid #6D107D; text-align: center; width: 150px;" name="">'+
'</td>'+
'</tr>',
'<tr align="center">'+
'<td>'+
'<img src="img/i3_p159_uni4a2.jpg" class="img-responsive" alt="">'+
'</td>'+
'</tr>'+
'<tr align="center">'+
'<td>'+
'<input type="text" id="p1dcon3" style="border-radius: 10px; border: 2px solid #6D107D; text-align: center; width: 150px;" name="">'+
'</td>'+
'</tr>',
'<tr align="center">'+
'<td>'+
'<img src="img/i4_p159_uni4a2.jpg" class="img-responsive" alt="">'+
'</td>'+
'</tr>'+
'<tr align="center">'+
'<td>'+
'<input type="text" id="p1dcon4" style="border-radius: 10px; border: 2px solid #6D107D; text-align: center; width: 150px;" name="">'+
'</td>'+
'</tr>',
'<tr align="center">'+
'<td>'+
'<img src="img/i5_p159_uni4a2.jpg" class="img-responsive" alt="">'+
'</td>'+
'</tr>'+
'<tr align="center">'+
'<td>'+
'<input type="text" id="p1dcon5" style="border-radius: 10px; border: 2px solid #6D107D; text-align: center; width: 150px;" name="">'+
'</td>'+
'</tr>'];
    
    
    var myArray1 = ['0','1','2','3','4'];
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
            $("#p1im"+i).html(pal1[c]);
            
        };
    
    
    bt_comprobar.addEventListener("click", f_comprobar);
    function f_comprobar(){
        cont++;
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1dcon1=$('#p1dcon1').val().toLowerCase();
        var p1dcon2=$('#p1dcon2').val().toLowerCase();
        var p1dcon3=$('#p1dcon3').val().toLowerCase();
        var p1dcon4=$('#p1dcon4').val().toLowerCase();
        var p1dcon5=$('#p1dcon5').val().toLowerCase();
        
        if (p1dcon1=='curvas y rectas') {
          cor++;
          f_ok($('#p1dcon1'));
        }else{
          inc++;
          f_no($('#p1dcon1'));
        }
        if (p1dcon2=='curvas y rectas') {
          cor++;
          f_ok($('#p1dcon2'));
        }else{
          inc++;
          f_no($('#p1dcon2'));
        }
        if (p1dcon3=='curvas') {
          cor++;
          f_ok($('#p1dcon3'));
        }else{
          inc++;
          f_no($('#p1dcon3'));
        }
        if (p1dcon4=='rectas') {
          cor++;
          f_ok($('#p1dcon4'));
        }else{
          inc++;
          f_no($('#p1dcon4'));
        }
        if (p1dcon5=='rectas') {
          cor++;
          f_ok($('#p1dcon5'));
        }else{
          inc++;
          f_no($('#p1dcon5'));
        }
        var nota1_1=$('#nota1_1').val();
        if (!nota1_1) {
          inc=inc+5;
          f_no($('#nota1_1'));
          $('#nota1_1').attr('disabled','true');
        }else{
          cor=cor+parseFloat(nota1_1);
          inc=inc+(5-parseFloat(nota1_1));
          f_ok($('#nota1_1'));
          $('#nota1_1').attr('disabled','true');
        }
        Calculo_nota();
   }
}