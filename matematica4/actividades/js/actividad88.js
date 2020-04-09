    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=9,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],resp=[];
    f_iniciar();

    function mayus(e) {
        e.value = e.value.toLowerCase();
    }
    function f_iniciar(){
        v_ids=['<img class="img-responsive" src="img/i3_p82_act88.jpg" alt="">','<img class="img-responsive" src="img/i4_p82_act88.jpg" alt="">','<img class="img-responsive" src="img/i5_p82_act88.jpg" alt="">']
        r_ids=['<p>Balanza <input id="a88inmed1" type="number"  style=" ; text-align:center; width:  30%; border:none; border-bottom: 1px dashed black"> gramos</p>','<p>Cinta métrica <input id="a88inmed2" type="number"  style=" ; text-align:center; width:  30%; border:none; border-bottom: 1px dashed black"> centímetros</p>','<p>Jarra <input id="a88inmed3" type="number"  style=" ; text-align:center; width:  30%; border:none; border-bottom: 1px dashed black"> litro</p>']
        r_ids1=['<img class="img-responsive" src="img/i2_p82_act88.jpg" alt="">','<img class="img-responsive" src="img/i3_p82_act88.jpg" alt="">','<img class="img-responsive" src="img/i4_p82_act88.jpg" alt="">','<img class="img-responsive" src="img/i5_p82_act88.jpg" alt="">']
        r_ids2=['<input id="a88md1" type="text" onkeyup="mayus(this);"  style=" ; text-align:center; width:  30%; border:none; border-bottom: 1px dashed black">','<input id="a88md2" type="text" onkeyup="mayus(this);"  style=" ; text-align:center; width:  30%; border:none; border-bottom: 1px dashed black">','<input id="a88md3" type="text" onkeyup="mayus(this);"  style=" ; text-align:center; width:  30%; border:none; border-bottom: 1px dashed black">','<input id="a88md4" type="text" onkeyup="mayus(this);"  style=" ; text-align:center; width:  30%; border:none; border-bottom: 1px dashed black">']
        var myArray1 = ['0','1','2'];
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
            $("#carim"+i).html(v_ids[c]);
            $("#carim1"+i).html(r_ids[c]);
        };
        var myArray2 = ['0','1','2','3'];
        var i,j,k;
        for (i = myArray2.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray2[i - 1];
            myArray2[i - 1] = myArray2[j];
            myArray2[j] = k;
        }
        //aleatorio literal 2
        for (var i = 1; i <= 5 ; i++) {
            var c=myArray2[i-1];
            $("#mid"+i).html(r_ids1[c]);
            $("#mid1"+i).html(r_ids2[c]);
        };
        bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            cont++;
            var a88inmed1=$('#a88inmed1').val();
            var a88inmed2=$('#a88inmed2').val();
            var a88inmed3=$('#a88inmed3').val();
            if (a88inmed1=='500') {
                cor++;
                f_ok($('#a88inmed1'));
            }else {
                inc++;
                f_no($('#a88inmed1'));
            }
            if (a88inmed2=='115') {
                cor++;
                f_ok($('#a88inmed2'));
            }else {
                inc++;
                f_no($('#a88inmed2'));
            }
            if (a88inmed3=='1') {
                cor++;
                f_ok($('#a88inmed3'));
            }else {
                inc++;
                f_no($('#a88inmed3'));
            }
            var a88md1=$('#a88md1').val();
            var a88md2=$('#a88md2').val();
            var a88md3=$('#a88md3').val();
            var a88md4=$('#a88md4').val();
            if (a88md1=='tiempo') {
                cor++;
                f_ok($('#a88md1'));
            }else {
                inc++;
                f_no($('#a88md1'));
            }
            if (a88md2=='masa') {
                cor++;
                f_ok($('#a88md2'));
            }else {
                inc++;
                f_no($('#a88md2'));
            }
            if (a88md3=='longitud') {
                cor++;
                f_ok($('#a88md3'));
            }else {
                inc++;
                f_no($('#a88md3'));
            }
            if (a88md4=='capacidad') {
                cor++;
                f_ok($('#a88md4'));
            }else {
                inc++;
                f_no($('#a88md4'));
            }
            var a88cl1=parseFloat($('#a88cl1').val()) ;
            if (a88cl1<=2 && a88cl1>=0) {
                cor=cor+a88cl1;
                f_ok($('#a88cl1'));
            }else {
                inc=inc+2;
                f_no($('#a88cl1'));
                alert('Ingrese un valor de 0 a 2');
            }
            Calculo_nota()
            
        }
        
    }