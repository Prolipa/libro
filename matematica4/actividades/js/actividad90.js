    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=3,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],resp=[];
    f_iniciar();

    function mayus(e) {
        e.value = e.value.toLowerCase();
    }
    function f_iniciar(){
        v_ids=['<img class="img-responsive" src="img/i1_p83_act90.jpg" alt="">','<img class="img-responsive" src="img/i2_p83_act90.jpg" alt="">','<img class="img-responsive" src="img/i3_p83_act90.jpg" alt="">','<img class="img-responsive" src="img/i4_p83_act90.jpg" alt="">']
        
        var myArray1 = ['0','1','2','3'];
        var i,j,k;
        for (i = myArray1.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray1[i - 1];
            myArray1[i - 1] = myArray1[j];
            myArray1[j] = k;
        }
        var c=myArray1[1];
        $("#a90img1").html(v_ids[c]);
        
        var nar1=parseInt((Math.random() * 7)+2);
        $("#a90dat1").html(nar1);
        $("#a90dat2").html(nar1);
        $("#a90dat3").html(nar1);
        var nar2=parseInt((Math.random() * 110)+10);
        $("#a90dat11").html(nar2);
        $("#a90dat12").html(nar2);
        bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            cont++;
            var a90rec1=$('#a90rec1').val();
                r_ids1=['9','17','21','27'];
            if (a90rec1==r_ids1[c]) {
                cor++;
                f_ok($('#a90rec1'));
            }else {
                inc++;
                f_no($('#a90rec1'));
            }
            var a90rdat1=$('#a90rdat1').val();
            var a90rdat2=$('#a90rdat2').val();
            if (a90rdat1==nar2) {
                cor++;
                f_ok($('#a90rdat1'));
            }else {
                inc++;
                f_no($('#a90rdat1'));
            }
            var rard1=((nar1*nar1*nar2)/(nar1*nar2))
            if (a90rdat2==rard1) {
                cor++;
                f_ok($('#a90rdat2'));
            }else {
                inc++;
                f_no($('#a90rdat2'));
            }
            Calculo_nota()
            
        }
        
    }