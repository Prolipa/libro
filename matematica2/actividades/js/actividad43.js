    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=6,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],resp=[];
    f_iniciar();

    function mayus(e) {
        e.value = e.value.toUpperCase();
    }
    function f_iniciar(){
       var preg=['<img src="img/i1_p57_act43.jpg" alt="" class="img-responsive">','<img src="img/i4_p57_act43.jpg" alt="" class="img-responsive">','<img src="img/i5_p57_act43.jpg" alt="" class="img-responsive">']
       var myArray1 = ['0','1','2'];
       var i,j,k;
        for (i = myArray1.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray1[i - 1];
            myArray1[i - 1] = myArray1[j];
            myArray1[j] = k;
        }
        var c=myArray1[2];
        $("#a43img1").html(preg[c]);
        
       bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            cont++;
            var imag1=$('#imag1 > img').attr('alt');
            var imag2=$('#imag2 > img').attr('alt');
            var imag3=$('#imag3 > img').attr('alt');
            var imag4=$('#imag4 > img').attr('alt');
            var imag5=$('#imag5 > img').attr('alt');
            var imag6=$('#imag6 > img').attr('alt');
            
            if (c==0) {
            	if (imag1==1) {
            		cor++;
            		f_ok($('#imag1'));
            	}else {
            		inc++;
            		f_no($('#imag1'));
            	}
            	if (imag2==2) {
            		cor++;
            		f_ok($('#imag2'));
            	}else {
            		inc++;
            		f_no($('#imag2'));
            	}
            	if (imag3==1) {
            		cor++;
            		f_ok($('#imag3'));
            	}else {
            		inc++;
            		f_no($('#imag3'));
            	}
            	if (imag4==2) {
            		cor++;
            		f_ok($('#imag4'));
            	}else {
            		inc++;
            		f_no($('#imag4'));
            	}
            	if (imag5==1) {
            		cor++;
            		f_ok($('#imag5'));
            	}else {
            		inc++;
            		f_no($('#imag5'));
            	}
            	if (imag6==2) {
            		cor++;
            		f_ok($('#imag6'));
            	}else {
            		inc++;
            		f_no($('#imag6'));
            	}
            }else if (c==1) {
            	if (imag1==2) {
            		cor++;
            		f_ok($('#imag1'));
            	}else {
            		inc++;
            		f_no($('#imag1'));
            	}
            	if (imag2==1) {
            		cor++;
            		f_ok($('#imag2'));
            	}else {
            		inc++;
            		f_no($('#imag2'));
            	}
            	if (imag3==2) {
            		cor++;
            		f_ok($('#imag3'));
            	}else {
            		inc++;
            		f_no($('#imag3'));
            	}
            	if (imag4==1) {
            		cor++;
            		f_ok($('#imag4'));
            	}else {
            		inc++;
            		f_no($('#imag4'));
            	}
            	if (imag5==2) {
            		cor++;
            		f_ok($('#imag5'));
            	}else {
            		inc++;
            		f_no($('#imag5'));
            	}
            	if (imag6==1) {
            		cor++;
            		f_ok($('#imag6'));
            	}else {
            		inc++;
            		f_no($('#imag6'));
            	}
            }else if (c==2) {
            	if (imag1==1) {
            		cor++;
            		f_ok($('#imag1'));
            	}else {
            		inc++;
            		f_no($('#imag1'));
            	}
            	if (imag2==1) {
            		cor++;
            		f_ok($('#imag2'));
            	}else {
            		inc++;
            		f_no($('#imag2'));
            	}
            	if (imag3==2) {
            		cor++;
            		f_ok($('#imag3'));
            	}else {
            		inc++;
            		f_no($('#imag3'));
            	}
            	if (imag4==1) {
            		cor++;
            		f_ok($('#imag4'));
            	}else {
            		inc++;
            		f_no($('#imag4'));
            	}
            	if (imag5==1) {
            		cor++;
            		f_ok($('#imag5'));
            	}else {
            		inc++;
            		f_no($('#imag5'));
            	}
            	if (imag6==2) {
            		cor++;
            		f_ok($('#imag6'));
            	}else {
            		inc++;
            		f_no($('#imag6'));
            	}
            }
            Calculo_nota()
            
        }
        
    }