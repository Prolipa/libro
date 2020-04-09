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
$('.enc1').click(function(){

            if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                

            }else{
                $(this).addClass('encierra')
                $('.enc2').removeClass('encierra');
                $('.enc3').removeClass('encierra');
                $('.enc4').removeClass('encierra');
            }

        })
$('.enc2').click(function(){

            if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                

            }else{
                $(this).addClass('encierra')
                $('.enc1').removeClass('encierra');
                $('.enc3').removeClass('encierra');
                $('.enc4').removeClass('encierra');
            }

        })
$('.enc3').click(function(){

            if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                

            }else{
                $(this).addClass('encierra')
                $('.enc2').removeClass('encierra');
                $('.enc1').removeClass('encierra');
                $('.enc4').removeClass('encierra');
            }

        })
$('.enc4').click(function(){

            if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                

            }else{
                $(this).addClass('encierra')
                $('.enc2').removeClass('encierra');
                $('.enc3').removeClass('encierra');
                $('.enc1').removeClass('encierra');
            }

        })
$('.enc11').click(function(){

            if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                

            }else{
                $(this).addClass('encierra')
                $('.enc12').removeClass('encierra');
                $('.enc13').removeClass('encierra');
                $('.enc14').removeClass('encierra');
            }

        })
$('.enc12').click(function(){

            if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                

            }else{
                $(this).addClass('encierra')
                $('.enc11').removeClass('encierra');
                $('.enc13').removeClass('encierra');
                $('.enc14').removeClass('encierra');
            }

        })
$('.enc13').click(function(){

            if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                

            }else{
                $(this).addClass('encierra')
                $('.enc12').removeClass('encierra');
                $('.enc11').removeClass('encierra');
                $('.enc14').removeClass('encierra');
            }

        })
$('.enc14').click(function(){

            if ($(this).hasClass('encierra')) {
                $(this).removeClass('encierra')
                

            }else{
                $(this).addClass('encierra')
                $('.enc12').removeClass('encierra');
                $('.enc13').removeClass('encierra');
                $('.enc11').removeClass('encierra');
            }

        })  
function f_iniciar() {
  var a77vec1=['<img src="img/i4_p76_act77.jpg" class="img-responsive" alt="">','<img src="img/i5_p76_act77.jpg" class="img-responsive" alt="">','<img src="img/i6_p76_act77.jpg" class="img-responsive" alt="">','<img src="img/i7_p76_act77.jpg" class="img-responsive" alt="">','<img src="img/i8_p76_act77.jpg" class="img-responsive" alt="">','<img src="img/i9_p76_act77.jpg" class="img-responsive" alt="">','<img src="img/i10_p76_act77.jpg" class="img-responsive" alt="">','<img src="img/i11_p76_act77.jpg" class="img-responsive" alt="">','<img src="img/i12_p76_act77.jpg" class="img-responsive" alt="">'];
  var a77vec2=['F','E','A','A','E','E','F','E','A'];
  var a77vec3=['∈','∉','∈','∉','∈','∈','∈','∈','∈'];
  var a77vec4=[];
  var myArray1 = ['0','1','2','3','4','5','6','7','8'];
  var i,j,k;
  for (i = myArray1.length; i; i--) {
    j = Math.floor(Math.random() * i);
    k = myArray1[i - 1];
    myArray1[i - 1] = myArray1[j];
    myArray1[j] = k;
  }
  //aleatorio literal 1
  for (var i = 1; i <= 9 ; i++) {
    var c=myArray1[i-1];
    $("#a77im"+i).html(a77vec1[c]);
    $("#a77co"+i).html(a77vec2[c]);
    a77vec4.push(a77vec3[c]);
  };

  var a77vec31=[];
  var numero = parseInt((Math.random() * 5) + 1);
  var numero1 = parseInt((Math.random() * 4) + 1);
  var numero2 = parseInt((Math.random() * 5) + 1);
  var numero3 = parseInt((Math.random() * 4) + 1);
  for (var i =0; i < numero; i++) {
    a77vec31.push('<img src="img/i20_p76_act77.jpg" width="50px" class="img-responsive" style="display: inline-block;" alt="">')
  }
  for (var i =0; i < numero2; i++) {
    a77vec31.push('<img src="img/i21_p76_act77.jpg" width="50px" class="img-responsive" style="display: inline-block;" alt="">')
  }
  for (var i =0; i < numero1; i++) {
    a77vec31.push('<img src="img/i20_p76_act77.jpg" width="50px" class="img-responsive" style="display: inline-block;" alt="">')
  }
  for (var i =0; i < numero3; i++) {
    a77vec31.push('<img src="img/i21_p76_act77.jpg" width="50px" class="img-responsive" style="display: inline-block;" alt="">')
  }
  $('#a773im1').html(a77vec31);

  var a77vec41=[];
  var numero4 = parseInt((Math.random() * 7) + 1);
  var numero5 = parseInt((Math.random() * 7) + 1);
  var numero6 = parseInt((Math.random() * 5) + 1);
  var numero7 = parseInt((Math.random() * 4) + 1);
  var aux41=0;
  var aux42=0;
  var aux43=0;
  var aux44=0;
  var aux45=0;
  var aux46=0;
  if (numero4>numero5) {
    aux41=numero4-numero5;
    aux45=numero4;
    aux42=numero5;
  }else {
    aux41=numero5-numero4;
    aux45=numero5;
    aux42=numero4;
  }
  if (numero6>numero7) {
    aux43=numero6-numero7;
    aux46=numero6;
    aux44=numero7;
  }else {
    aux43=numero7-numero6;
    aux46=numero7;
    aux44=numero6;
  }
  for (var i =0; i < aux42; i++) {
    a77vec41.push('<img src="img/i22_p76_act77.jpg" width="40px" class="img-responsive" style="display: inline-block;" alt="">')
  }
  for (var i =0; i < aux41; i++) {
    a77vec41.push('<img src="img/i23_p76_act77.jpg" width="40px" class="img-responsive" style="display: inline-block;" alt="">')
  }
  for (var i =0; i < aux44; i++) {
    a77vec41.push('<img src="img/i24_p76_act77.jpg" width="50px" class="img-responsive" style="display: inline-block;" alt="">')
  }
  for (var i =0; i < aux43; i++) {
    a77vec41.push('<img src="img/i25_p76_act77.jpg" width="50px" class="img-responsive" style="display: inline-block;" alt="">')
  }
  $('#a774im1').html(a77vec41);


  var p5vec1=['<img src="img/i26_p76_act77.jpg" class="img-responsive" alt="">'
                                                    +'<div class="table-responsive">'
                                                    +'<table class="table">'
                                                        +'<tr align="center">'
                                                            +'<td>2 <b style="color: #F14D75;">D</b></td>'
                                                            +'<td> y </td>'
                                                            +'<td>5 <b style="color: #00ADDA">U</b></td>'
                                                            +'<td> = </td>'
                                                            +'<td><input  onkeypress="return soloNumeros1(event)"  type="text" id="a775dcon1" maxlength="2"  style=" text-align:center; width:  40px; border:none; border-bottom: 2px dotted black;"></td>'
                                                        +'</tr>'
                                                    +'</table>'
                                                    +'</div>'
                                                    +'<div class="table-responsive">'
                                                    +'<table class="table">'
                                                        +'<tr align="center">'
                                                            +'<td>20</td>'
                                                            +'<td> + </td>'
                                                            +'<td>5</td>'
                                                            +'<td> = </td>'
                                                            +'<td><input  onkeypress="return soloNumeros1(event)"  type="text" id="a775dcon2" maxlength="2"  style=" text-align:center; width:  40px; border:none; border-bottom: 2px dotted black;"></td>'
                                                        +'</tr>'
                                                    +'</table>'
                                                    +'</div>','<table class="table">'
                                                        +'<tr>'
                                                            +'<td></td>'
                                                        +'</tr>'
                                                        +'<tr align="center">'
                                                            +'<td style="border:1px solid #0070BA; background: #FCEDEB; color: #F14D75;">D</td>'
                                                            +'<td style="border:1px solid #0070BA; background: #E3F2F5; color: #00ADDA">U</td>'
                                                        +'</tr>'
                                                        +'<tr align="center">'
                                                            +'<td id="p5num1" style="border:1px solid #0070BA;">1</td>'
                                                            +'<td id="p5num2" style="border:1px solid #0070BA;">6</td>'
                                                        +'</tr>'
                                                        +'<tr>'
                                                            +'<td></td>'
                                                        +'</tr>'
                                                        +'<tr>'
                                                            +'<td></td>'
                                                        +'</tr>'
                                                    +'</table>'
                                                    +'<div class="table-responsive">'
                                                    +'<table class="table">'
                                                        +'<tr align="center">'
                                                            +'<td><span id="p5num3">2</span> <b style="color: #F14D75;">D</b></td>'
                                                            +'<td> y </td>'
                                                            +'<td><span id="p5num4">5</span> <b style="color: #00ADDA">U</b></td>'
                                                            +'<td> = </td>'
                                                            +'<td><input  onkeypress="return soloNumeros1(event)"  type="text" id="a775dcon3" maxlength="2"  style=" text-align:center; width:  40px; border:none; border-bottom: 2px dotted black;"></td>'
                                                        +'</tr>'
                                                    +'</table>'
                                                    +'</div>'
                                                    +'<div class="table-responsive">'
                                                    +'<table class="table">'
                                                        +'<tr align="center">'
                                                            +'<td><span id="p5num5">20</span></td>'
                                                            +'<td> + </td>'
                                                            +'<td><span id="p5num6">5</span></td>'
                                                            +'<td> = </td>'
                                                            +'<td><input  onkeypress="return soloNumeros1(event)"  type="text" id="a775dcon4" maxlength="2"  style=" text-align:center; width:  40px; border:none; border-bottom: 2px dotted black;"></td>'
                                                        +'</tr>'
                                                    +'</table>'
                                                    +'</div>','<img src="img/i27_p76_act77.jpg" class="img-responsive" alt="">'
                                                    +'<div class="table-responsive">'
                                                    +'<table class="table">'
                                                        +'<tr>'
                                                            +'<td> 2 <b style="color: #39BA9C;">D</b></td>'
                                                            +'<td> y </td>'
                                                            +'<td>8 <b style="color: #A8CE39;">U</b></td>'
                                                            +'<td> = </td>'
                                                            +'<td><input  onkeypress="return soloNumeros1(event)"  type="text" id="a775dcon5" maxlength="2"  style=" text-align:center; width:  40px; border:none; border-bottom: 2px dotted black;"></td>'
                                                        +'</tr>'
                                                    +'</table>'
                                                    +'</div>'
                                                    +'<div class="table-responsive">'
                                                    +'<table class="table">'
                                                        +'<tr align="center">'
                                                            +'<td>20</td>'
                                                            +'<td> + </td>'
                                                            +'<td>8</td>'
                                                            +'<td> = </td>'
                                                            +'<td><input  onkeypress="return soloNumeros1(event)"  type="text" id="a775dcon6" maxlength="2"  style=" text-align:center; width:  40px; border:none; border-bottom: 2px dotted black;"></td>'
                                                        +'</tr>'
                                                    +'</table>'
                                                    +'</div>'];
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
    var c=myArray2[i-1];
    $("#deun"+i).html(p5vec1[c]);
    
  };
  var numero8 = parseInt((Math.random() * 20) + 10);
  var vecnum1=numero8.toString().split('');
  $('#p5num1').html(vecnum1[0]);
  $('#p5num2').html(vecnum1[1]);
  $('#p5num5').html(vecnum1[0]+'0');
  $('#p5num6').html(vecnum1[1]);
  $('#p5num3').html(vecnum1[0]);
  $('#p5num4').html(vecnum1[1]);

  var p6vd1=['11, 13, 15, 19','15, 13, 11, 10','19, 15, 13, 12','19, 15, 13, 11'];
  var p6vd2=['25 < 15','15 > 25','25 > 15','15 = 25'];
  var myArray3 = ['0','1','2','3'];
  var i,j,k;
  for (i = myArray3.length; i; i--) {
    j = Math.floor(Math.random() * i);
    k = myArray3[i - 1];
    myArray3[i - 1] = myArray3[j];
    myArray3[j] = k;
  }
  //aleatorio literal 1
  for (var i = 1; i <= 4 ; i++) {
    var c=myArray3[i-1];
    $("#p6sm"+i).html(p6vd1[c]);
    
  };
  var myArray4 = ['0','1','2','3'];
  var i,j,k;
  for (i = myArray4.length; i; i--) {
    j = Math.floor(Math.random() * i);
    k = myArray4[i - 1];
    myArray4[i - 1] = myArray4[j];
    myArray4[j] = k;
  }
  //aleatorio literal 1
  for (var i = 1; i <= 4 ; i++) {
    var c=myArray4[i-1];
    $("#p6sm1"+i).html(p6vd2[c]);
    
  };

  var numero9 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
  var myArray5 = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29'];
  var i,j,k;
  for (i = myArray5.length; i; i--) {
    j = Math.floor(Math.random() * i);
    k = myArray5[i - 1];
    myArray5[i - 1] = myArray5[j];
    myArray5[j] = k;
  }
  //aleatorio literal 1
  for (var i = 1; i <= 10 ; i++) {
    
    var c=myArray5[i-1];
    $("#p7dcon"+(parseInt(c)+1)).val(numero9[c]);
    $("#p7dcon"+(parseInt(c)+1)).attr('disabled','disabled');
    $("#p7dcon"+(parseInt(c)+1)).css("background", "transparent");
    $("#p7dcon"+(parseInt(c)+1)).css("border", "none");
  };
  bt_comprobar.addEventListener("click", f_comprobar);
  function f_comprobar(){
    cont++;
    AgregaClase(".nota",claseAnimada);
    QuitaClase(".actividad",claseAnimada);
    bt_comprobar.removeEventListener("click", f_comprobar);
    var a77in1=$('#a77in1').val();
    var a77in2=$('#a77in2').val();
    var a77in3=$('#a77in3').val();
    var a77in11=$('#a77in11').val();
    var a77in12=$('#a77in12').val();
    var a77in13=$('#a77in13').val();
    var a77in21=$('#a77in21').val();
    var a77in22=$('#a77in22').val();
    var a77in23=$('#a77in23').val();
    var a77cont1=0;
    if (a77in1==a77vec4[0]) {
      a77cont1++;
      f_ok($('#a77in1'));
    }else {
      a77cont1;
      f_no($('#a77in1'));
    }
    if (a77in2==a77vec4[1]) {
      a77cont1++;
      f_ok($('#a77in2'));
    }else {
      a77cont1;
      f_no($('#a77in2'));
    }
    if (a77in3==a77vec4[2]) {
      a77cont1++;
      f_ok($('#a77in3'));
    }else {
      a77cont1;
      f_no($('#a77in3'));
    }
    if (a77in11==a77vec4[3]) {
      a77cont1++;
      f_ok($('#a77in11'));
    }else {
      a77cont1;
      f_no($('#a77in11'));
    }
    if (a77in12==a77vec4[4]) {
      a77cont1++;
      f_ok($('#a77in12'));
    }else {
      a77cont1;
      f_no($('#a77in12'));
    }
    if (a77in13==a77vec4[5]) {
      a77cont1++;
      f_ok($('#a77in13'));
    }else {
      a77cont1;
      f_no($('#a77in13'));
    }
    if (a77in21==a77vec4[6]) {
      a77cont1++;
      f_ok($('#a77in21'));
    }else {
      a77cont1;
      f_no($('#a77in21'));
    }
    if (a77in22==a77vec4[7]) {
      a77cont1++;
      f_ok($('#a77in22'));
    }else {
      a77cont1;
      f_no($('#a77in22'));
    }
    if (a77in23==a77vec4[8]) {
      a77cont1++;
      f_ok($('#a77in23'));
    }else {
      a77cont1;
      f_no($('#a77in23'));
    }
    var result1=(a77cont1*2)/9;
    cor=cor+result1;
    inc=inc+(2-result1);

    var imag1=$('#imag1 > img').attr('alt');
    var imag2=$('#imag2 > img').attr('alt');
    var imag3=$('#imag3 > img').attr('alt');
    var imag4=$('#imag4 > img').attr('alt');
    var imag11=$('#imag11 > img').attr('alt');
    var imag12=$('#imag12 > img').attr('alt');
    var imag13=$('#imag13 > img').attr('alt');
    var imag14=$('#imag14 > img').attr('alt');
    var a77cont2=0;
    if (imag1==2) {
        a77cont2++;
        f_ok($('#imag1'));
    }else {
        a77cont2;
        f_no($('#imag1'));
    }
    if (imag2==1) {
        a77cont2++;
        f_ok($('#imag2'));
    }else {
        a77cont2;
        f_no($('#imag2'));
    }
    if (imag3==2) {
        a77cont2++;
        f_ok($('#imag3'));
    }else {
        a77cont2;
        f_no($('#imag3'));
    }
    if (imag4==1) {
        a77cont2++;
        f_ok($('#imag4'));
    }else {
        a77cont2;
        f_no($('#imag4'));
    }
    if (imag11==1) {
        a77cont2++;
        f_ok($('#imag11'));
    }else {
        a77cont2;
        f_no($('#imag11'));
    }
    if (imag12==3) {
        a77cont2++;
        f_ok($('#imag12'));
    }else {
        a77cont2;
        f_no($('#imag12'));
    }
    if (imag13==2) {
        a77cont2++;
        f_ok($('#imag13'));
    }else {
        a77cont2;
        f_no($('#imag13'));
    }
    if (imag14==1) {
        a77cont2++;
        f_ok($('#imag14'));
    }else {
        a77cont2;
        f_no($('#imag14'));
    }
    var result2=(a77cont2*2)/8;
    cor=cor+result2;
    inc=inc+(2-result2);

    var a77dcon1=$('#a77dcon1').val();
    var a77dcon2=$('#a77dcon2').val();
    var a77dcon3=$('#a77dcon3').val();
    var a77dcon4=$('#a77dcon4').val();
    var a77dcon5=$('#a77dcon5').val();
    var a77dcon6=$('#a77dcon6').val();
    var a77cont3=0;
    if (a77dcon1==numero2) {
        a77cont3++;
        f_ok($('#a77dcon1'));
    }else {
        a77cont3;
        f_no($('#a77dcon1'));
    }
    if (a77dcon2==numero3) {
        a77cont3++;
        f_ok($('#a77dcon2'));
    }else {
        a77cont3;
        f_no($('#a77dcon2'));
    }
    if (a77dcon3==(numero2+numero3)) {
        a77cont3++;
        f_ok($('#a77dcon3'));
    }else {
        a77cont3;
        f_no($('#a77dcon3'));
    }
    if (a77dcon4==numero) {
        a77cont3++;
        f_ok($('#a77dcon4'));
    }else {
        a77cont3;
        f_no($('#a77dcon4'));
    }
    if (a77dcon5==numero1) {
        a77cont3++;
        f_ok($('#a77dcon5'));
    }else {
        a77cont3;
        f_no($('#a77dcon5'));
    }
    if (a77dcon6==(numero+numero1)) {
        a77cont3++;
        f_ok($('#a77dcon6'));
    }else {
        a77cont3;
        f_no($('#a77dcon6'));
    }
    var result3=(a77cont3*1)/6;
    cor=cor+result3;
    inc=inc+(1-result3);

    var a774dcon1=$('#a774dcon1').val();
    var a774dcon2=$('#a774dcon2').val();
    var a774dcon3=$('#a774dcon3').val();
    var a774dcon4=$('#a774dcon4').val();
    var a774dcon5=$('#a774dcon5').val();
    var a774dcon6=$('#a774dcon6').val();
    var a77cont4=0;
    if (a774dcon1==aux45) {
        a77cont4++;
        f_ok($('#a774dcon1'));
    }else {
        a77cont4;
        f_no($('#a774dcon1'));
    }
    if (a774dcon2==aux42) {
        a77cont4++;
        f_ok($('#a774dcon2'));
    }else {
        a77cont4;
        f_no($('#a774dcon2'));
    }
    if (parseInt(a774dcon3)==aux41) {
        a77cont4++;
        f_ok($('#a774dcon3'));
    }else {
        a77cont4;
        f_no($('#a774dcon3'));
    }
    if (a774dcon4==aux46) {
        a77cont4++;
        f_ok($('#a774dcon4'));
    }else {
        a77cont4;
        f_no($('#a774dcon4'));
    }
    if (a774dcon5==aux44) {
        a77cont4++;
        f_ok($('#a774dcon5'));
    }else {
        a77cont4;
        f_no($('#a774dcon5'));
    }
    if (parseInt(a774dcon6)==aux43) {
        a77cont4++;
        f_ok($('#a774dcon6'));
    }else {
        a77cont4;
        f_no($('#a774dcon6'));
    }
    var result4=(a77cont4*1)/6;
    cor=cor+result4;
    inc=inc+(1-result4);

    var a775dcon1=$('#a775dcon1').val();
    var a775dcon2=$('#a775dcon2').val();
    var a775dcon3=$('#a775dcon3').val();
    var a775dcon4=$('#a775dcon4').val();
    var a775dcon5=$('#a775dcon5').val();
    var a775dcon6=$('#a775dcon6').val();
    var a77cont5=0;
    if (a775dcon1=='25') {
      a77cont5++;
      f_ok($('#a775dcon1'));
    }else {
      a77cont5;
      f_no($('#a775dcon1'));
    }
    if (a775dcon2=='25') {
      a77cont5++;
      f_ok($('#a775dcon2'));
    }else {
      a77cont5;
      f_no($('#a775dcon2'));
    }
    if (a775dcon3==numero8) {
      a77cont5++;
      f_ok($('#a775dcon3'));
    }else {
      a77cont5;
      f_no($('#a775dcon3'));
    }
    if (a775dcon4==numero8) {
      a77cont5++;
      f_ok($('#a775dcon4'));
    }else {
      a77cont5;
      f_no($('#a775dcon4'));
    }
    if (a775dcon5=='28') {
      a77cont5++;
      f_ok($('#a775dcon5'));
    }else {
      a77cont5;
      f_no($('#a775dcon5'));
    }
    if (a775dcon6=='28') {
      a77cont5++;
      f_ok($('#a775dcon6'));
    }else {
      a77cont5;
      f_no($('#a775dcon6'));
    }
    var result5=(a77cont5*1)/6;
    cor=cor+result5;
    inc=inc+(1-result5);

    var p6con1=$('.p6res1 .encierra span').html();
    var p6con2=$('.p6res2 .encierra span').html();
    var a77cont6=0;
    if (p6con1=='19, 15, 13, 11') {
      a77cont6++;
      f_ok($('.p6res1 .encierra'));
    }else {
      a77cont6;
      f_no($('.p6res1 .encierra'));
    }
    if (p6con2=='25 &gt; 15') {
      a77cont6++;
      f_ok($('.p6res2 .encierra'));
    }else {
      a77cont6;
      f_no($('.p6res2 .encierra'));
    }
    var result6=(a77cont6*1)/2;
    cor=cor+result6;
    inc=inc+(1-result6);

    var a77cont7=0;
    for (var i = 11; i <= 30 ; i++) {
        var d=myArray5[i-1];
        if ($("#p7dcon"+(parseInt(d)+1)).val()==numero9[d]) {
          a77cont7++;
          f_ok($("#p7dcon"+(parseInt(d)+1)));
        }else {
          a77cont7;
          f_no($("#p7dcon"+(parseInt(d)+1)));
        }
    };
    var result7=(a77cont7*2)/20;
    cor=cor+result7;
    inc=inc+(2-result7);
    Calculo_nota();
  }
}