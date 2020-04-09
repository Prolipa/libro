var n1=0,sum_total1=0,sum_total2=0,sum_total3=0,sum_total4=0,sum_total5=0,sum_total6=0,sum_total7=0,sum_total8=0,cont=0,ejer=1,itemsT=10,cor=0,inc=0,str1='',str2='',str3='',str4='',calificacion=10;
var claseAnimada ='animate bounceIn';
var t=0, t1=0;
var nump1=0;
var nump2=0;
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
function st()
{
  t=nn(nump1);
  t1=nn(nump2);
  
}
window.onload=st;
 function f_iniciar() {
    var p2vec1=['Primero','Segundo','Tercero','Cuarto','Quinto','Sexto','Séptimo','Octavo','Noveno','Décimo'];
    var myArray1 = ['0','1','2','3','4','5','6','7','8','9'];
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
            $("#p2im"+i).html(p2vec1[c]);
            
        };
    $('.1').click(function() {
    switch ($(this).attr('class')) {
        case '1 pint1':
            $('.pint1').addClass('pinta');
            $('.pint2').removeClass('pinta');
            $('.pint3').removeClass('pinta');
            $('.pint4').removeClass('pinta');
            $('.pint5').removeClass('pinta');
            $('.pint6').removeClass('pinta');
            $('.pint7').removeClass('pinta');
            $('.pint8').removeClass('pinta');
            $('.pint9').removeClass('pinta');
            $('.pint10').removeClass('pinta');

            break;
        case '1 pint2':
            $('.pint2').addClass('pinta');
            $('.pint1').removeClass('pinta');
            $('.pint3').removeClass('pinta');
            $('.pint4').removeClass('pinta');
            $('.pint5').removeClass('pinta');
            $('.pint6').removeClass('pinta');
            $('.pint7').removeClass('pinta');
            $('.pint8').removeClass('pinta');
            $('.pint9').removeClass('pinta');
            $('.pint10').removeClass('pinta');            
            break;
        case '1 pint3':
            $('.pint3').addClass('pinta');
            $('.pint1').removeClass('pinta');
            $('.pint2').removeClass('pinta');
            $('.pint4').removeClass('pinta');
            $('.pint5').removeClass('pinta');
            $('.pint6').removeClass('pinta');
            $('.pint7').removeClass('pinta');
            $('.pint8').removeClass('pinta');
            $('.pint9').removeClass('pinta');
            $('.pint10').removeClass('pinta');
            break;
        case '1 pint4':
            $('.pint4').addClass('pinta');
            $('.pint1').removeClass('pinta');
            $('.pint2').removeClass('pinta');
            $('.pint3').removeClass('pinta');
            $('.pint5').removeClass('pinta');
            $('.pint6').removeClass('pinta');
            $('.pint7').removeClass('pinta');
            $('.pint8').removeClass('pinta');
            $('.pint9').removeClass('pinta');
            $('.pint10').removeClass('pinta');
            break;
        case '1 pint5':
            $('.pint5').addClass('pinta');
            $('.pint1').removeClass('pinta');
            $('.pint2').removeClass('pinta');
            $('.pint4').removeClass('pinta');
            $('.pint3').removeClass('pinta');
            $('.pint6').removeClass('pinta');
            $('.pint7').removeClass('pinta');
            $('.pint8').removeClass('pinta');
            $('.pint9').removeClass('pinta');
            $('.pint10').removeClass('pinta');
            break;
        case '1 pint6':
            $('.pint6').addClass('pinta');
            $('.pint1').removeClass('pinta');
            $('.pint2').removeClass('pinta');
            $('.pint4').removeClass('pinta');
            $('.pint5').removeClass('pinta');
            $('.pint3').removeClass('pinta');
            $('.pint7').removeClass('pinta');
            $('.pint8').removeClass('pinta');
            $('.pint9').removeClass('pinta');
            $('.pint10').removeClass('pinta');
            break;
        case '1 pint7':
            $('.pint7').addClass('pinta');
            $('.pint1').removeClass('pinta');
            $('.pint2').removeClass('pinta');
            $('.pint4').removeClass('pinta');
            $('.pint5').removeClass('pinta');
            $('.pint6').removeClass('pinta');
            $('.pint3').removeClass('pinta');
            $('.pint8').removeClass('pinta');
            $('.pint9').removeClass('pinta');
            $('.pint10').removeClass('pinta');
            break;
        case '1 pint8':
            $('.pint8').addClass('pinta');
            $('.pint1').removeClass('pinta');
            $('.pint2').removeClass('pinta');
            $('.pint4').removeClass('pinta');
            $('.pint5').removeClass('pinta');
            $('.pint6').removeClass('pinta');
            $('.pint7').removeClass('pinta');
            $('.pint3').removeClass('pinta');
            $('.pint9').removeClass('pinta');
            $('.pint10').removeClass('pinta');
            break;
        case '1 pint9':
            $('.pint9').addClass('pinta');
            $('.pint1').removeClass('pinta');
            $('.pint2').removeClass('pinta');
            $('.pint4').removeClass('pinta');
            $('.pint5').removeClass('pinta');
            $('.pint6').removeClass('pinta');
            $('.pint7').removeClass('pinta');
            $('.pint8').removeClass('pinta');
            $('.pint3').removeClass('pinta');
            $('.pint10').removeClass('pinta');
            break;
        case '1 pint10':
            $('.pint10').addClass('pinta');
            $('.pint1').removeClass('pinta');
            $('.pint2').removeClass('pinta');
            $('.pint4').removeClass('pinta');
            $('.pint5').removeClass('pinta');
            $('.pint6').removeClass('pinta');
            $('.pint7').removeClass('pinta');
            $('.pint8').removeClass('pinta');
            $('.pint9').removeClass('pinta');
            $('.pint3').removeClass('pinta');
            break;
    }
});
$('.2').click(function() {
    switch ($(this).attr('class')) {
        case '2 pints1':
            $('.pints1').addClass('pinta');
            $('.pints2').removeClass('pinta');
            $('.pints3').removeClass('pinta');
            $('.pints4').removeClass('pinta');
            $('.pints5').removeClass('pinta');
            $('.pints6').removeClass('pinta');
            $('.pints7').removeClass('pinta');
            $('.pints8').removeClass('pinta');
            $('.pints9').removeClass('pinta');
            $('.pints10').removeClass('pinta');

            break;
        case '2 pints2':
            $('.pints2').addClass('pinta');
            $('.pints1').removeClass('pinta');
            $('.pints3').removeClass('pinta');
            $('.pints4').removeClass('pinta');
            $('.pints5').removeClass('pinta');
            $('.pints6').removeClass('pinta');
            $('.pints7').removeClass('pinta');
            $('.pints8').removeClass('pinta');
            $('.pints9').removeClass('pinta');
            $('.pints10').removeClass('pinta');            
            break;
        case '2 pints3':
            $('.pints3').addClass('pinta');
            $('.pints1').removeClass('pinta');
            $('.pints2').removeClass('pinta');
            $('.pints4').removeClass('pinta');
            $('.pints5').removeClass('pinta');
            $('.pints6').removeClass('pinta');
            $('.pints7').removeClass('pinta');
            $('.pints8').removeClass('pinta');
            $('.pints9').removeClass('pinta');
            $('.pints10').removeClass('pinta');
            break;
        case '2 pints4':
            $('.pints4').addClass('pinta');
            $('.pints1').removeClass('pinta');
            $('.pints2').removeClass('pinta');
            $('.pints3').removeClass('pinta');
            $('.pints5').removeClass('pinta');
            $('.pints6').removeClass('pinta');
            $('.pints7').removeClass('pinta');
            $('.pints8').removeClass('pinta');
            $('.pints9').removeClass('pinta');
            $('.pints10').removeClass('pinta');
            break;
        case '2 pints5':
            $('.pints5').addClass('pinta');
            $('.pints1').removeClass('pinta');
            $('.pints2').removeClass('pinta');
            $('.pints4').removeClass('pinta');
            $('.pints3').removeClass('pinta');
            $('.pints6').removeClass('pinta');
            $('.pints7').removeClass('pinta');
            $('.pints8').removeClass('pinta');
            $('.pints9').removeClass('pinta');
            $('.pints10').removeClass('pinta');
            break;
        case '2 pints6':
            $('.pints6').addClass('pinta');
            $('.pints1').removeClass('pinta');
            $('.pints2').removeClass('pinta');
            $('.pints4').removeClass('pinta');
            $('.pints5').removeClass('pinta');
            $('.pints3').removeClass('pinta');
            $('.pints7').removeClass('pinta');
            $('.pints8').removeClass('pinta');
            $('.pints9').removeClass('pinta');
            $('.pints10').removeClass('pinta');
            break;
        case '2 pints7':
            $('.pints7').addClass('pinta');
            $('.pints1').removeClass('pinta');
            $('.pints2').removeClass('pinta');
            $('.pints4').removeClass('pinta');
            $('.pints5').removeClass('pinta');
            $('.pints6').removeClass('pinta');
            $('.pints3').removeClass('pinta');
            $('.pints8').removeClass('pinta');
            $('.pints9').removeClass('pinta');
            $('.pints10').removeClass('pinta');
            break;
        case '2 pints8':
            $('.pints8').addClass('pinta');
            $('.pints1').removeClass('pinta');
            $('.pints2').removeClass('pinta');
            $('.pints4').removeClass('pinta');
            $('.pints5').removeClass('pinta');
            $('.pints6').removeClass('pinta');
            $('.pints7').removeClass('pinta');
            $('.pints3').removeClass('pinta');
            $('.pints9').removeClass('pinta');
            $('.pints10').removeClass('pinta');
            break;
        case '2 pints9':
            $('.pints9').addClass('pinta');
            $('.pints1').removeClass('pinta');
            $('.pints2').removeClass('pinta');
            $('.pints4').removeClass('pinta');
            $('.pints5').removeClass('pinta');
            $('.pints6').removeClass('pinta');
            $('.pints7').removeClass('pinta');
            $('.pints8').removeClass('pinta');
            $('.pints3').removeClass('pinta');
            $('.pints10').removeClass('pinta');
            break;
        case '2 pints10':
            $('.pints10').addClass('pinta');
            $('.pints1').removeClass('pinta');
            $('.pints2').removeClass('pinta');
            $('.pints4').removeClass('pinta');
            $('.pints5').removeClass('pinta');
            $('.pints6').removeClass('pinta');
            $('.pints7').removeClass('pinta');
            $('.pints8').removeClass('pinta');
            $('.pints9').removeClass('pinta');
            $('.pints3').removeClass('pinta');
            break;
    }
});
$('.3').click(function() {
    switch ($(this).attr('class')) {
        case '3 pintss1':
            $('.pintss1').addClass('pinta');
            $('.pintss2').removeClass('pinta');
            $('.pintss3').removeClass('pinta');
            $('.pintss4').removeClass('pinta');
            $('.pintss5').removeClass('pinta');
            $('.pintss6').removeClass('pinta');
            $('.pintss7').removeClass('pinta');
            $('.pintss8').removeClass('pinta');
            $('.pintss9').removeClass('pinta');
            $('.pintss10').removeClass('pinta');

            break;
        case '3 pintss2':
            $('.pintss2').addClass('pinta');
            $('.pintss1').removeClass('pinta');
            $('.pintss3').removeClass('pinta');
            $('.pintss4').removeClass('pinta');
            $('.pintss5').removeClass('pinta');
            $('.pintss6').removeClass('pinta');
            $('.pintss7').removeClass('pinta');
            $('.pintss8').removeClass('pinta');
            $('.pintss9').removeClass('pinta');
            $('.pintss10').removeClass('pinta');            
            break;
        case '3 pintss3':
            $('.pintss3').addClass('pinta');
            $('.pintss1').removeClass('pinta');
            $('.pintss2').removeClass('pinta');
            $('.pintss4').removeClass('pinta');
            $('.pintss5').removeClass('pinta');
            $('.pintss6').removeClass('pinta');
            $('.pintss7').removeClass('pinta');
            $('.pintss8').removeClass('pinta');
            $('.pintss9').removeClass('pinta');
            $('.pintss10').removeClass('pinta');
            break;
        case '3 pintss4':
            $('.pintss4').addClass('pinta');
            $('.pintss1').removeClass('pinta');
            $('.pintss2').removeClass('pinta');
            $('.pintss3').removeClass('pinta');
            $('.pintss5').removeClass('pinta');
            $('.pintss6').removeClass('pinta');
            $('.pintss7').removeClass('pinta');
            $('.pintss8').removeClass('pinta');
            $('.pintss9').removeClass('pinta');
            $('.pintss10').removeClass('pinta');
            break;
        case '3 pintss5':
            $('.pintss5').addClass('pinta');
            $('.pintss1').removeClass('pinta');
            $('.pintss2').removeClass('pinta');
            $('.pintss4').removeClass('pinta');
            $('.pintss3').removeClass('pinta');
            $('.pintss6').removeClass('pinta');
            $('.pintss7').removeClass('pinta');
            $('.pintss8').removeClass('pinta');
            $('.pintss9').removeClass('pinta');
            $('.pintss10').removeClass('pinta');
            break;
        case '3 pintss6':
            $('.pintss6').addClass('pinta');
            $('.pintss1').removeClass('pinta');
            $('.pintss2').removeClass('pinta');
            $('.pintss4').removeClass('pinta');
            $('.pintss5').removeClass('pinta');
            $('.pintss3').removeClass('pinta');
            $('.pintss7').removeClass('pinta');
            $('.pintss8').removeClass('pinta');
            $('.pintss9').removeClass('pinta');
            $('.pintss10').removeClass('pinta');
            break;
        case '3 pintss7':
            $('.pintss7').addClass('pinta');
            $('.pintss1').removeClass('pinta');
            $('.pintss2').removeClass('pinta');
            $('.pintss4').removeClass('pinta');
            $('.pintss5').removeClass('pinta');
            $('.pintss6').removeClass('pinta');
            $('.pintss3').removeClass('pinta');
            $('.pintss8').removeClass('pinta');
            $('.pintss9').removeClass('pinta');
            $('.pintss10').removeClass('pinta');
            break;
        case '3 pintss8':
            $('.pintss8').addClass('pinta');
            $('.pintss1').removeClass('pinta');
            $('.pintss2').removeClass('pinta');
            $('.pintss4').removeClass('pinta');
            $('.pintss5').removeClass('pinta');
            $('.pintss6').removeClass('pinta');
            $('.pintss7').removeClass('pinta');
            $('.pintss3').removeClass('pinta');
            $('.pintss9').removeClass('pinta');
            $('.pintss10').removeClass('pinta');
            break;
        case '3 pintss9':
            $('.pintss9').addClass('pinta');
            $('.pintss1').removeClass('pinta');
            $('.pintss2').removeClass('pinta');
            $('.pintss4').removeClass('pinta');
            $('.pintss5').removeClass('pinta');
            $('.pintss6').removeClass('pinta');
            $('.pintss7').removeClass('pinta');
            $('.pintss8').removeClass('pinta');
            $('.pintss3').removeClass('pinta');
            $('.pintss10').removeClass('pinta');
            break;
        case '3 pintss10':
            $('.pintss10').addClass('pinta');
            $('.pintss1').removeClass('pinta');
            $('.pintss2').removeClass('pinta');
            $('.pintss4').removeClass('pinta');
            $('.pintss5').removeClass('pinta');
            $('.pintss6').removeClass('pinta');
            $('.pintss7').removeClass('pinta');
            $('.pintss8').removeClass('pinta');
            $('.pintss9').removeClass('pinta');
            $('.pintss3').removeClass('pinta');
            break;
    }
});
$('.4').click(function() {
    switch ($(this).attr('class')) {
        case '4 pintsss1':
            $('.pintsss1').addClass('pinta');
            $('.pintsss2').removeClass('pinta');
            $('.pintsss3').removeClass('pinta');
            $('.pintsss4').removeClass('pinta');
            $('.pintsss5').removeClass('pinta');
            $('.pintsss6').removeClass('pinta');
            $('.pintsss7').removeClass('pinta');
            $('.pintsss8').removeClass('pinta');
            $('.pintsss9').removeClass('pinta');
            $('.pintsss10').removeClass('pinta');

            break;
        case '4 pintsss2':
            $('.pintsss2').addClass('pinta');
            $('.pintsss1').removeClass('pinta');
            $('.pintsss3').removeClass('pinta');
            $('.pintsss4').removeClass('pinta');
            $('.pintsss5').removeClass('pinta');
            $('.pintsss6').removeClass('pinta');
            $('.pintsss7').removeClass('pinta');
            $('.pintsss8').removeClass('pinta');
            $('.pintsss9').removeClass('pinta');
            $('.pintsss10').removeClass('pinta');            
            break;
        case '4 pintsss3':
            $('.pintsss3').addClass('pinta');
            $('.pintsss1').removeClass('pinta');
            $('.pintsss2').removeClass('pinta');
            $('.pintsss4').removeClass('pinta');
            $('.pintsss5').removeClass('pinta');
            $('.pintsss6').removeClass('pinta');
            $('.pintsss7').removeClass('pinta');
            $('.pintsss8').removeClass('pinta');
            $('.pintsss9').removeClass('pinta');
            $('.pintsss10').removeClass('pinta');
            break;
        case '4 pintsss4':
            $('.pintsss4').addClass('pinta');
            $('.pintsss1').removeClass('pinta');
            $('.pintsss2').removeClass('pinta');
            $('.pintsss3').removeClass('pinta');
            $('.pintsss5').removeClass('pinta');
            $('.pintsss6').removeClass('pinta');
            $('.pintsss7').removeClass('pinta');
            $('.pintsss8').removeClass('pinta');
            $('.pintsss9').removeClass('pinta');
            $('.pintsss10').removeClass('pinta');
            break;
        case '4 pintsss5':
            $('.pintsss5').addClass('pinta');
            $('.pintsss1').removeClass('pinta');
            $('.pintsss2').removeClass('pinta');
            $('.pintsss4').removeClass('pinta');
            $('.pintsss3').removeClass('pinta');
            $('.pintsss6').removeClass('pinta');
            $('.pintsss7').removeClass('pinta');
            $('.pintsss8').removeClass('pinta');
            $('.pintsss9').removeClass('pinta');
            $('.pintsss10').removeClass('pinta');
            break;
        case '4 pintsss6':
            $('.pintsss6').addClass('pinta');
            $('.pintsss1').removeClass('pinta');
            $('.pintsss2').removeClass('pinta');
            $('.pintsss4').removeClass('pinta');
            $('.pintsss5').removeClass('pinta');
            $('.pintsss3').removeClass('pinta');
            $('.pintsss7').removeClass('pinta');
            $('.pintsss8').removeClass('pinta');
            $('.pintsss9').removeClass('pinta');
            $('.pintsss10').removeClass('pinta');
            break;
        case '4 pintsss7':
            $('.pintsss7').addClass('pinta');
            $('.pintsss1').removeClass('pinta');
            $('.pintsss2').removeClass('pinta');
            $('.pintsss4').removeClass('pinta');
            $('.pintsss5').removeClass('pinta');
            $('.pintsss6').removeClass('pinta');
            $('.pintsss3').removeClass('pinta');
            $('.pintsss8').removeClass('pinta');
            $('.pintsss9').removeClass('pinta');
            $('.pintsss10').removeClass('pinta');
            break;
        case '4 pintsss8':
            $('.pintsss8').addClass('pinta');
            $('.pintsss1').removeClass('pinta');
            $('.pintsss2').removeClass('pinta');
            $('.pintsss4').removeClass('pinta');
            $('.pintsss5').removeClass('pinta');
            $('.pintsss6').removeClass('pinta');
            $('.pintsss7').removeClass('pinta');
            $('.pintsss3').removeClass('pinta');
            $('.pintsss9').removeClass('pinta');
            $('.pintsss10').removeClass('pinta');
            break;
        case '4 pintsss9':
            $('.pintsss9').addClass('pinta');
            $('.pintsss1').removeClass('pinta');
            $('.pintsss2').removeClass('pinta');
            $('.pintsss4').removeClass('pinta');
            $('.pintsss5').removeClass('pinta');
            $('.pintsss6').removeClass('pinta');
            $('.pintsss7').removeClass('pinta');
            $('.pintsss8').removeClass('pinta');
            $('.pintsss3').removeClass('pinta');
            $('.pintsss10').removeClass('pinta');
            break;
        case '4 pintsss10':
            $('.pintsss10').addClass('pinta');
            $('.pintsss1').removeClass('pinta');
            $('.pintsss2').removeClass('pinta');
            $('.pintsss4').removeClass('pinta');
            $('.pintsss5').removeClass('pinta');
            $('.pintsss6').removeClass('pinta');
            $('.pintsss7').removeClass('pinta');
            $('.pintsss8').removeClass('pinta');
            $('.pintsss9').removeClass('pinta');
            $('.pintsss3').removeClass('pinta');
            break;
    }
});
 
$('.5').click(function() {
    switch ($(this).attr('class')) {
        case '5 enc1':
            $('.enc1').addClass('encierra');
            $('.enc2').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            break;
        case '5 enc2':
            $('.enc2').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc3').removeClass('encierra');
            break;
        case '5 enc3':
            $('.enc3').addClass('encierra');
            $('.enc1').removeClass('encierra');
            $('.enc2').removeClass('encierra');
            break;
        
    }
});   
    var p3num1= parseInt((Math.random() * 9) + 1);
    var p3vec1=[];
    for (var i = 0; i < p3num1; i++) {
      p3vec1.push('<img src="img/i1_p172_uni4a13.jpg" class="img-responsive" style="display: inline-block;">');
    }
    var myArray2 = ['0','1','2','3','4','5','6','7','8'];
       var i,j,k;
        for (i = myArray2.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray2[i - 1];
            myArray2[i - 1] = myArray2[j];
            myArray2[j] = k;
        }
        var c1=myArray2[3];
        p3vec1.push('<img src="img/i'+(parseInt(c1)+2)+'_p172_uni4a13.jpg" class="img-responsive" style="display: inline-block;">');
    nump1=(p3num1 * 10) + (parseInt(c1)+1);    
        $("#p3im1").html(p3vec1);
    var p3num2= parseInt((Math.random() * 9) + 1);
    var p3vec2=[];

    for (var i = 0; i < p3num2; i++) {
      p3vec2.push('<img src="img/i11_p172_uni4a13.jpg" class="img-responsive" style="display: inline-block;">');
    }     
    var myArray3 = ['0','1','2','3','4','5','6','7','8'];
       var i,j,k;
        for (i = myArray3.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray3[i - 1];
            myArray3[i - 1] = myArray3[j];
            myArray3[j] = k;
        }
        var c2=myArray3[4];
        p3vec2.push('<img src="img/i'+(parseInt(c2)+12)+'_p172_uni4a13.jpg" class="img-responsive" style="display: inline-block;">');
    nump2=(p3num2 * 10) + (parseInt(c2)+1);        
        $("#p3im2").html(p3vec2);

    p4vec1=[];
        while(p4vec1.length<6){
            var p4aux1=parseInt((Math.random() * 50) + 1);
            var p4cont1=0;
            for (var i = 1; i < p4vec1.length ; i++) {
                if (p4aux1 == p4vec1[i-1]) {
                    p4cont1++;
                }    
            }
            if (p4cont1==0) {
                p4vec1.push(p4aux1);
            }
            
        }
    for (var i = 0; i < 6; i++) {
      $('#p4im'+(i+1)).text(p4vec1[i]);
    }
    var p4vec2 =[p4vec1.sort(f_randomico).join(','),p4vec1.sort((a,b)=>a-b).join(','),p4vec1.sort(f_randomico).join(',')];
    var myArray4 = ['0','1','2'];
    var p1vec3=[];
    var i,j,k;
    for (i = myArray4.length; i; i--) {
      j = Math.floor(Math.random() * i);
      k = myArray4[i - 1];
      myArray4[i - 1] = myArray4[j];
      myArray4[j] = k;
    }
    //aleatorio literal 1
    for (var i = 1; i <= 3 ; i++) {
      var c3=myArray4[i-1];
      $("#p4im"+(i+6)).html(p4vec2[c3]);
      
    };
    bt_comprobar.addEventListener("click", f_comprobar);
    function f_comprobar(){
        cont++;
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p2cont1=0;
        if ($('#p2res1 .pinta').length=='1') {
          if ($('.pint'+ (parseInt(myArray1[0]) + 1)).hasClass('pinta')) {
            p2cont1++;
            f_ok($('.pint'+ (parseInt(myArray1[0]) + 1)));
            $('.pint'+ (parseInt(myArray1[0]) + 1)).removeClass('pinta');
          }else{
            p2cont1;
            f_no($('#p2res1 .pinta'));
            $('#p2res1 .pinta').removeClass('pinta');
          }  
        }else{
          p2cont1;
          f_no($('.pint1'));
          f_no($('.pint2'));
          f_no($('.pint3'));
          f_no($('.pint4'));
          f_no($('.pint5'));
          f_no($('.pint6'));
          f_no($('.pint7'));
          f_no($('.pint8'));
          f_no($('.pint9'));
          f_no($('.pint10'));
        }
        if ($('#p2res2 .pinta').length=='1') {
          if ($('.pints'+ (parseInt(myArray1[1]) + 1)).hasClass('pinta')) {
            p2cont1++;
            f_ok($('.pints'+ (parseInt(myArray1[1]) + 1)));
            $('.pints'+ (parseInt(myArray1[1]) + 1)).removeClass('pinta');
          }else{
            p2cont1;
            f_no($('#p2res2 .pinta'));
            $('#p2res2 .pinta').removeClass('pinta');
          }  
        }else{
          p2cont1;
          f_no($('.pints1'));
          f_no($('.pints2'));
          f_no($('.pints3'));
          f_no($('.pints4'));
          f_no($('.pints5'));
          f_no($('.pints6'));
          f_no($('.pints7'));
          f_no($('.pints8'));
          f_no($('.pints9'));
          f_no($('.pints10'));
        }
        if ($('#p2res3 .pinta').length=='1') {
          if ($('.pintss'+ (parseInt(myArray1[2]) + 1)).hasClass('pinta')) {
            p2cont1++;
            f_ok($('.pintss'+ (parseInt(myArray1[2]) + 1)));
            $('.pintss'+ (parseInt(myArray1[2]) + 1)).removeClass('pinta');
          }else{
            p2cont1;
            f_no($('#p2res3 .pinta'));
            $('#p2res3 .pinta').removeClass('pinta');
          }  
        }else{
          p2cont1;
          f_no($('.pintss1'));
          f_no($('.pintss2'));
          f_no($('.pintss3'));
          f_no($('.pintss4'));
          f_no($('.pintss5'));
          f_no($('.pintss6'));
          f_no($('.pintss7'));
          f_no($('.pintss8'));
          f_no($('.pintss9'));
          f_no($('.pintss10'));
        }
        if ($('#p2res4 .pinta').length=='1') {
          if ($('.pintsss'+ (parseInt(myArray1[3]) + 1)).hasClass('pinta')) {
            p2cont1++;
            f_ok($('.pintsss'+ (parseInt(myArray1[3]) + 1)));
            $('.pintsss'+ (parseInt(myArray1[3]) + 1)).removeClass('pinta');
          }else{
            p2cont1;
            f_no($('#p2res4 .pinta'));
            $('#p2res4 .pinta').removeClass('pinta');
          }  
        }else{
          p2cont1;
          f_no($('.pintsss1'));
          f_no($('.pintsss2'));
          f_no($('.pintsss3'));
          f_no($('.pintsss4'));
          f_no($('.pintsss5'));
          f_no($('.pintsss6'));
          f_no($('.pintsss7'));
          f_no($('.pintsss8'));
          f_no($('.pintsss9'));
          f_no($('.pintsss10'));
        }
        var result2=(p2cont1*2)/4;
        cor=cor + result2;  
        inc=inc + (2-result2);
        if (result2>=1.5) {
          f_ok($('#p2fe1'));
        }else{
          f_no($('#p2tr1'));
        }


        var p3dcon1=$('#p3dcon1').val();
        var p3dcon2=$('#p3dcon2').val();
        var p3dcon3=$('#p3dcon3').val();
        var p3dcon4=$('#p3dcon4').val();
        var p3dcon5=$('#p3dcon5').val();
        var p3dcon6=$('#p3dcon6').val();
        var p3dcon7=$('#p3dcon7').val().toLowerCase();
        var p3cont1=0;
        if (p3dcon1==p3num1) {
          p3cont1++;
          f_ok($('#p3dcon1'));
        }else{
          p3cont1
          f_no($('#p3dcon1'));
        }
        if (p3dcon2==(parseInt(c1)+1)) {
          p3cont1++;
          f_ok($('#p3dcon2'));
        }else{
          p3cont1
          f_no($('#p3dcon2'));
        }
        if (p3dcon3==nump1) {
          p3cont1++;
          f_ok($('#p3dcon3'));
        }else{
          p3cont1
          f_no($('#p3dcon3'));
        }
        if (p3dcon4==(p3num1*10)) {
          p3cont1++;
          f_ok($('#p3dcon4'));
        }else{
          p3cont1
          f_no($('#p3dcon4'));
        }
        if (p3dcon5==(parseInt(c1)+1)) {
          p3cont1++;
          f_ok($('#p3dcon5'));
        }else{
          p3cont1
          f_no($('#p3dcon5'));
        }
        if (p3dcon6==nump1) {
          p3cont1++;
          f_ok($('#p3dcon6'));
        }else{
          p3cont1
          f_no($('#p3dcon6'));
        }
        if (p3dcon7==t) {
          p3cont1++;
          f_ok($('#p3dcon7'));
        }else{
          p3cont1
          f_no($('#p3dcon7'));
        }
        var p3dcon8=$('#p3dcon8').val();
        var p3dcon9=$('#p3dcon9').val();
        var p3dcon10=$('#p3dcon10').val();
        var p3dcon11=$('#p3dcon11').val();
        var p3dcon12=$('#p3dcon12').val();
        var p3dcon13=$('#p3dcon13').val();
        var p3dcon14=$('#p3dcon14').val().toLowerCase();
        if (p3dcon8==p3num2) {
          p3cont1++;
          f_ok($('#p3dcon8'));
        }else{
          p3cont1
          f_no($('#p3dcon8'));
        }
        if (p3dcon9==(parseInt(c2)+1)) {
          p3cont1++;
          f_ok($('#p3dcon9'));
        }else{
          p3cont1
          f_no($('#p3dcon9'));
        }
        if (p3dcon10==nump2) {
          p3cont1++;
          f_ok($('#p3dcon10'));
        }else{
          p3cont1
          f_no($('#p3dcon10'));
        }
        if (p3dcon11==(p3num2*10)) {
          p3cont1++;
          f_ok($('#p3dcon11'));
        }else{
          p3cont1
          f_no($('#p3dcon11'));
        }
        if (p3dcon12==(parseInt(c2)+1)) {
          p3cont1++;
          f_ok($('#p3dcon12'));
        }else{
          p3cont1
          f_no($('#p3dcon12'));
        }
        if (p3dcon13==nump2) {
          p3cont1++;
          f_ok($('#p3dcon13'));
        }else{
          p3cont1
          f_no($('#p3dcon13'));
        }
        if (p3dcon14==t1) {
          p3cont1++;
          f_ok($('#p3dcon14'));
        }else{
          p3cont1
          f_no($('#p3dcon14'));
        }
        var result3=(p3cont1*2)/14;
        cor=cor + result3;  
        inc=inc + (2-result3);
        if (result3>=1.5) {
          f_ok($('#p3fe1'));
        }else{
          f_no($('#p3tr1'));
        }

        var p4enc1=$('.encierra > span').text();
        if (!p4enc1) {
          inc=inc+2;
          f_no($('.enc1'));
          f_no($('.enc2'));
          f_no($('.enc3'));
          f_no($('#p4tr1'));
        }else{
          if (p4enc1==p4vec2[1]) {
            cor=cor+2;
            f_ok($('.encierra'));
            f_ok($('#p4fe1'));
          }else{
            inc=inc+2;
            f_no($('.encierra'));
            f_no($('#p4tr1'));
          }  
        }

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
      if (nota1_1>=1.5) {
          f_ok($('#p1fe1'));
        }else{
          f_no($('#p1tr1'));
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
      if (nota1_2>=0.5) {
          f_ok($('#p5fe1'));
        }else{
          f_no($('#p5tr1'));
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
      if (nota1_3>=0.5) {
          f_ok($('#p6fe1'));
        }else{
          f_no($('#p6tr1'));
        }
        Calculo_nota();
   }
}