var n1=0,sum_total=0,cont=0,ejer=1,itemsT=10,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
function mayus(e) {
        e.value = e.value.toLowerCase();
}
function mayus1(e) {
        e.value = e.value.toUpperCase();
}
$('.1').click(function() {
    switch ($(this).attr('class')) {
        case 'enc1 1':
            $('.enc1').addClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            

            break;
        case 'enc2 1':
            $('.enc2').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            
            break;
        case 'enc3 1':
            $('.enc3').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            break;
        

    }
});
$('.1').click(function() {
    switch ($(this).attr('class')) {
        case 'enc1 1':
            $('.enc1').addClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            

            break;
        case 'enc2 1':
            $('.enc2').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            
            break;
        case 'enc3 1':
            $('.enc3').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            break;
        

    }
});
$('.2').click(function() {
    switch ($(this).attr('class')) {
        case 'enc4 2':
            $('.enc4').addClass('encierra');
            $('.enc5').removeClass('encierra');
            $('.enc6').removeClass('encierra');
            

            break;
        case 'enc5 2':
            $('.enc5').addClass('encierra');
            $('.enc4').removeClass('encierra');
            $('.enc6').removeClass('encierra');
            
            break;
        case 'enc6 2':
            $('.enc6').addClass('encierra');
            $('.enc4').removeClass('encierra');
            $('.enc5').removeClass('encierra');
            break;
        

    }
});
$('.3').click(function() {
    switch ($(this).attr('class')) {
        case 'enc7 3':
            $('.enc7').addClass('encierra');
            $('.enc8').removeClass('encierra');
            $('.enc9').removeClass('encierra');
            

            break;
        case 'enc8 3':
            $('.enc8').addClass('encierra');
            $('.enc7').removeClass('encierra');
            $('.enc9').removeClass('encierra');
            
            break;
        case 'enc9 3':
            $('.enc9').addClass('encierra');
            $('.enc7').removeClass('encierra');
            $('.enc8').removeClass('encierra');
            break;
        

    }
});
$('.4').click(function() {
    switch ($(this).attr('class')) {
        case 'enc10 4':
            $('.enc10').addClass('encierra');
            $('.enc11').removeClass('encierra');
            $('.enc12').removeClass('encierra');
            

            break;
        case 'enc11 4':
            $('.enc11').addClass('encierra');
            $('.enc10').removeClass('encierra');
            $('.enc12').removeClass('encierra');
            
            break;
        case 'enc12 4':
            $('.enc12').addClass('encierra');
            $('.enc10').removeClass('encierra');
            $('.enc11').removeClass('encierra');
            break;
        

    }
});
$('.5').click(function() {
    switch ($(this).attr('class')) {
        case 'enc13 5':
            $('.enc13').addClass('encierra');
            $('.enc14').removeClass('encierra');
            $('.enc15').removeClass('encierra');
            

            break;
        case 'enc14 5':
            $('.enc14').addClass('encierra');
            $('.enc13').removeClass('encierra');
            $('.enc15').removeClass('encierra');
            
            break;
        case 'enc15 5':
            $('.enc15').addClass('encierra');
            $('.enc13').removeClass('encierra');
            $('.enc14').removeClass('encierra');
            break;
        

    }
});
$('.6').click(function() {
    switch ($(this).attr('class')) {
        case 'enc16 6':
            $('.enc16').addClass('encierra');
            $('.enc17').removeClass('encierra');
            $('.enc18').removeClass('encierra');
            

            break;
        case 'enc17 6':
            $('.enc17').addClass('encierra');
            $('.enc16').removeClass('encierra');
            $('.enc18').removeClass('encierra');
            
            break;
        case 'enc18 6':
            $('.enc18').addClass('encierra');
            $('.enc16').removeClass('encierra');
            $('.enc17').removeClass('encierra');
            break;
        

    }
});
 function f_iniciar() {
    var p1vec1=['img/i1_p165_uni4a7.jpg','img/i2_p165_uni4a7.jpg','img/i3_p165_uni4a7.jpg'];   
    var p1vec2=['10¢ 13¢ 12¢','50¢ 60¢ 65¢','70¢ 75¢ 80¢'];
    var p1aux1=[];
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
            var c=myArray1[i-1];
            $("#p1cim"+i).attr('src',p1vec1[c]);
            p1aux1.push(p1vec2[c]);
        };
        p1aux2=p1aux1[0].split(' ');
        $('.enc1').text(p1aux2[0]);
        $('.enc2').text(p1aux2[1]);
        $('.enc3').text(p1aux2[2]);
        p1aux3=p1aux1[1].split(' ');
        $('.enc4').text(p1aux3[0]);
        $('.enc5').text(p1aux3[1]);
        $('.enc6').text(p1aux3[2]);
        p1aux4=p1aux1[2].split(' ');
        $('.enc7').text(p1aux4[0]);
        $('.enc8').text(p1aux4[1]);
        $('.enc9').text(p1aux4[2]);

    var p1vec3=['img/i4_p165_uni4a7.jpg','img/i5_p165_uni4a7.jpg','img/i6_p165_uni4a7.jpg'];   
    var p1vec4=['$4 $5 $6','$40 $41 $42','$62 $63 $64'];
    var p1aux5=[];
    var myArray2 = ['0','1','2'];
       var i,j,k;
        for (i = myArray2.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray2[i - 1];
            myArray2[i - 1] = myArray2[j];
            myArray2[j] = k;
        }
    //aleatorio literal 1
        for (var i = 1; i <= 3 ; i++) {
            var c1=myArray2[i-1];
            $("#p1cim"+(i+3)).attr('src',p1vec3[c1]);
            p1aux5.push(p1vec4[c1]);
        };
        p1aux6=p1aux5[0].split(' ');
        $('.enc10').text(p1aux6[0]);
        $('.enc11').text(p1aux6[1]);
        $('.enc12').text(p1aux6[2]);
        p1aux7=p1aux5[1].split(' ');
        $('.enc13').text(p1aux7[0]);
        $('.enc14').text(p1aux7[1]);
        $('.enc15').text(p1aux7[2]);
        p1aux8=p1aux5[2].split(' ');
        $('.enc16').text(p1aux8[0]);
        $('.enc17').text(p1aux8[1]);
        $('.enc18').text(p1aux8[2]);
    bt_comprobar.addEventListener("click", f_comprobar);
    function f_comprobar(){
        cont++;
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1res1=$('#p1res1 .encierra').text();
        var p1res2=$('#p1res2 .encierra').text();
        var p1res3=$('#p1res3 .encierra').text();
        var p1res4=$('#p1res4 .encierra').text();
        var p1res5=$('#p1res5 .encierra').text();
        var p1res6=$('#p1res6 .encierra').text();
        var p1cont1=0;
        var p1vec5=['13¢','65¢','75¢','$6','$41','$62'];
        for (var i =0; i < p1vec5.length; i++) {
          if (p1res1==p1vec5[i]) {
            p1cont1++;
          }
        }
        if (!p1res1) {
          inc++;
          f_no($('.enc1'));
          f_no($('.enc2'));
          f_no($('.enc3'));
        }else{
          if (p1cont1=='1') {
            cor++;
            f_ok($('#p1res1 .encierra'));
          }else{
            inc++;
            f_no($('#p1res1 .encierra'));
          }  
        }
        
        var p1cont2=0;
        for (var i =0; i < p1vec5.length; i++) {
          if (p1res2==p1vec5[i]) {
            p1cont2++;
          }
        }
        if (!p1res2) {
          inc++;
          f_no($('.enc4'));
          f_no($('.enc5'));
          f_no($('.enc6'));
        }else{
          if (p1cont2=='1') {
            cor++;
            f_ok($('#p1res2 .encierra'));
          }else{
            inc++;
            f_no($('#p1res2 .encierra'));
          }  
        }
        
        var p1cont3=0;
        for (var i =0; i < p1vec5.length; i++) {
          if (p1res3==p1vec5[i]) {
            p1cont3++;
          }
        }
        if (!p1res3) {
          inc++;
          f_no($('.enc7'));
          f_no($('.enc8'));
          f_no($('.enc9'));
        }else{
          if (p1cont3=='1') {
            cor++;
            f_ok($('#p1res3 .encierra'));
          }else{
            inc++;
            f_no($('#p1res3 .encierra'));
          }  
        }
        
        var p1cont4=0;
        for (var i =0; i < p1vec5.length; i++) {
          if (p1res4==p1vec5[i]) {
            p1cont4++;
          }
        }
        if (!p1res4) {
          inc++;
          f_no($('.enc10'));
          f_no($('.enc11'));
          f_no($('.enc12'));
        }else{
          if (p1cont4=='1') {
            cor++;
            f_ok($('#p1res4 .encierra'));
          }else{
            inc++;
            f_no($('#p1res4 .encierra'));
          }  
        }

        var p1cont5=0;
        for (var i =0; i < p1vec5.length; i++) {
          if (p1res5==p1vec5[i]) {
            p1cont5++;
          }
        }
        if (!p1res5) {
          inc++;
          f_no($('.enc13'));
          f_no($('.enc14'));
          f_no($('.enc15'));
        }else{
          if (p1cont5=='1') {
            cor++;
            f_ok($('#p1res5 .encierra'));
          }else{
            inc++;
            f_no($('#p1res5 .encierra'));
          }  
        }
        var p1cont6=0;
        for (var i =0; i < p1vec5.length; i++) {
          if (p1res6==p1vec5[i]) {
            p1cont6++;
          }
        }
        if (!p1res6) {
          inc++;
          f_no($('.enc16'));
          f_no($('.enc17'));
          f_no($('.enc18'));
        }else{
          if (p1cont6=='1') {
            cor++;
            f_ok($('#p1res6 .encierra'));
          }else{
            inc++;
            f_no($('#p1res6 .encierra'));
          }  
        }

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
        Calculo_nota();
   }
}