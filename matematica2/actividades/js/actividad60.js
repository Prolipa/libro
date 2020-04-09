var n1=0,sum_total=0,cont=0,ejer=1,itemsT=6,cor=0,inc=0,str='',calificacion=10;
var claseAnimada ='animate bounceIn';
f_iniciar();
 function f_iniciar() {
    var numero = parseInt((Math.random() * 9) + 1);
    var numero1=10-numero;
    var a60cim1=['<td><b style="color: blue;"> a) </b></td>','<td><b style="color: blue;"> &nbsp; </b></td>'];
    
   	for (var i = 0; i < numero; i++) {
   		a60cim1.push('<td  style="border:2px solid #00ACD2;"><img src="img/i1_p67_act60.jpg" class="drag uno img-responsive" style="display: inline; mix-blend-mode: multiply;"></td>');
   		
   	}
   	for (var i = 0; i < numero1; i++) {
   		a60cim1.push('<td  style="border:2px solid #00ACD2;" class="drop"></td>');
   		
   	}
   	$('#a60tb1').html(a60cim1[0]+a60cim1[2]+a60cim1[3]+a60cim1[4]+a60cim1[5]+a60cim1[6]);
   	$('#a60tb2').html(a60cim1[1]+a60cim1[7]+a60cim1[8]+a60cim1[9]+a60cim1[10]+a60cim1[11]);
   	$('#a60da1').html(numero);
   	var numero2 = parseInt((Math.random() * 9) + 1);
    var numero3=10-numero2;
    var a60cim2=['<td><b style="color: blue;"> b) </b></td>','<td><b style="color: blue;"> &nbsp; </b></td>'];
    
   	for (var i = 0; i < numero2; i++) {
   		a60cim2.push('<td  style="border:2px solid #00ACD2;"><img src="img/i2_p67_act60.jpg" class="drag uno img-responsive" style="display: inline; mix-blend-mode: multiply;"></td>');
   		
   	}
   	for (var i = 0; i < numero3; i++) {
   		a60cim2.push('<td  style="border:2px solid #00ACD2;" class="drop1"></td>');
   		
   	}
   	$('#a60tb3').html(a60cim2[0]+a60cim2[2]+a60cim2[3]+a60cim2[4]+a60cim2[5]+a60cim2[6]);
   	$('#a60tb4').html(a60cim2[1]+a60cim2[7]+a60cim2[8]+a60cim2[9]+a60cim2[10]+a60cim2[11]);
   	$('#a60da2').html(numero2);
   	bt_comprobar.addEventListener("click", f_comprobar);
   	function f_comprobar(){
        cont++;
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var p1cnt1=$('.drop > .uno').length;
        var p1cnt2=$('.drop1 > .uno').length;
        if (p1cnt1==numero1) {
        	cor++;
        	f_ok($('.drop'));
        }else {
        	inc++;
        	f_no($('.drop'));
        }
        if (p1cnt2==numero3) {
        	cor++;
        	f_ok($('.drop1'));
        }else {
        	inc++;
        	f_no($('.drop1'));
        }
        var a60dcon1=$('#a60dcon1').val();
        var a60dcon2=$('#a60dcon2').val();
        var a60dcon11=$('#a60dcon11').val();
        var a60dcon12=$('#a60dcon12').val();
        if (a60dcon1==numero1) {
        	cor++;
        	f_ok($('#a60dcon1'));
        }else {
        	inc++;
        	f_no($('#a60dcon1'));
        }
        if (a60dcon2==(numero1+numero)) {
        	cor++;
        	f_ok($('#a60dcon2'));
        }else {
        	inc++;
        	f_no($('#a60dcon2'));
        }
        if (a60dcon11==numero3) {
        	cor++;
        	f_ok($('#a60dcon11'));
        }else {
        	inc++;
        	f_no($('#a60dcon11'));
        }
        if (a60dcon12==(numero2+numero3)) {
        	cor++;
        	f_ok($('#a60dcon12'));
        }else {
        	inc++;
        	f_no($('#a60dcon12'));
        }
        
        Calculo_nota();
   }
}