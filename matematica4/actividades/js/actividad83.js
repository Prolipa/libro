    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=3,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],resp=[];
    f_iniciar();

    function mayus(e) {
        e.value = e.value.toLowerCase();
    }
    function f_iniciar(){
        v_ids=['<img class="img-responsive" src="img/i1_p79_act83.jpg" alt=""><p><b>DEF =</b> <input id="noang1" onkeyup="mayus(this);" type="text" style="text-align:center; width:  70%; border:none; border-bottom: 1px dashed black"></p>','<img class="img-responsive" src="img/i2_p79_act83.jpg" alt=""><p><b>M =</b> <input id="noang2" onkeyup="mayus(this);" type="text" style="text-align:center; width:  70%; border:none; border-bottom: 1px dashed black"></p>','<img class="img-responsive" src="img/i3_p79_act83.jpg" alt=""><p><b>LMN =</b> <input id="noang3" onkeyup="mayus(this);" type="text" style="text-align:center; width:  70%; border:none; border-bottom: 1px dashed black"></p>']
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
            $("#imang"+i).html(v_ids[c]);
            
        };
        bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            cont++;
            var noang1=$('#noang1').val();
            var noang2=$('#noang2').val();
            var noang3=$('#noang3').val();
            if (noang1=='ángulo recto' || noang1=='angulo recto' || noang1=='recto') {
                cor++;
                f_ok($('#noang1'));
            }else {
                inc++;
                f_no($('#noang1'));
            }
            if (noang2=='ángulo agudo' || noang2=='angulo agudo' || noang2=='agudo') {
                cor++;
                f_ok($('#noang2'));
            }else {
                inc++;
                f_no($('#noang2'));
            }
            
            if (noang3=='ángulo obtuso' || noang3=='angulo obtuso' || noang3=='obtuso') {
                cor++;
                f_ok($('#noang3'));
            }else {
                inc++;
                f_no($('#noang3'));
            }
            Calculo_nota()
            
        }
        
    }