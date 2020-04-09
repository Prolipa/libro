    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=17,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],resp=[];
    f_iniciar();

    function mayus(e) {
        e.value = e.value.toUpperCase();
    }
    function f_iniciar(){
       var preg=['<b style="color: blue;">a) </b><img src="img/i1_p57_act44.jpg" alt="" class="img-responsive">','<b style="color: blue;">a) </b><img src="img/i7_p57_act44.jpg" alt="" class="img-responsive">']
       var preg1=['<br><b style="color: blue;">b) </b><img src="img/i2_p57_act44.jpg" alt="" class="img-responsive">','<b style="color: blue;">b) </b><img src="img/i8_p57_act44.jpg" alt="" class="img-responsive">']
       var myArray1 = ['0','1'];
       var i,j,k;
        for (i = myArray1.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray1[i - 1];
            myArray1[i - 1] = myArray1[j];
            myArray1[j] = k;
        }
        var c=myArray1[1];
        $("#a44img1").html(preg[c]);
        
        var myArray2 = ['0','1'];
        var i,j,k;
        for (i = myArray2.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray2[i - 1];
            myArray2[i - 1] = myArray2[j];
            myArray2[j] = k;
        }
        var d=myArray2[0];
        $("#a44img2").html(preg1[d]);
       bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            cont++;
            var imag1=$('#imag1 > img').attr('alt');
            var imag2=$('#imag2 > img').attr('alt');
            var imag3=$('#imag3 > img').attr('alt');
            var imag4=$('#imag4 > img').attr('alt');
            var imag5=$('#imag5 > img').attr('alt');
            var imag6=$('#imag6 > img').attr('alt');
            var imag11=$('#imag11 > img').attr('alt');
            var imag12=$('#imag12 > img').attr('alt');
            var imag13=$('#imag13 > img').attr('alt');
            var imag14=$('#imag14 > img').attr('alt');
            var imag15=$('#imag15 > img').attr('alt');
            var imag16=$('#imag16 > img').attr('alt');
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
            }

            if (d==0) {
                if (imag11==3) {
                    cor++;
                    f_ok($('#imag11'));
                }else {
                    inc++;
                    f_no($('#imag11'));
                }
                if (imag12==4) {
                    cor++;
                    f_ok($('#imag12'));
                }else {
                    inc++;
                    f_no($('#imag12'));
                }
                if (imag13==3) {
                    cor++;
                    f_ok($('#imag13'));
                }else {
                    inc++;
                    f_no($('#imag13'));
                }
                if (imag14==4) {
                    cor++;
                    f_ok($('#imag14'));
                }else {
                    inc++;
                    f_no($('#imag14'));
                }
                if (imag15==3) {
                    cor++;
                    f_ok($('#imag15'));
                }else {
                    inc++;
                    f_no($('#imag15'));
                }
                if (imag16==4) {
                    cor++;
                    f_ok($('#imag16'));
                }else {
                    inc++;
                    f_no($('#imag16'));
                }
            }else if (d==1) {
                if (imag11==4) {
                    cor++;
                    f_ok($('#imag11'));
                }else {
                    inc++;
                    f_no($('#imag11'));
                }
                if (imag12==3) {
                    cor++;
                    f_ok($('#imag12'));
                }else {
                    inc++;
                    f_no($('#imag12'));
                }
                if (imag13==4) {
                    cor++;
                    f_ok($('#imag13'));
                }else {
                    inc++;
                    f_no($('#imag13'));
                }
                if (imag14==3) {
                    cor++;
                    f_ok($('#imag14'));
                }else {
                    inc++;
                    f_no($('#imag14'));
                }
                if (imag15==4) {
                    cor++;
                    f_ok($('#imag15'));
                }else {
                    inc++;
                    f_no($('#imag15'));
                }
                if (imag16==3) {
                    cor++;
                    f_ok($('#imag16'));
                }else {
                    inc++;
                    f_no($('#imag16'));
                }
            }
            var imag21=$('#imag21 > img').attr('alt');
            var imag22=$('#imag22 > img').attr('alt');
            var imag31=$('#imag31 > img').attr('alt');
            var imag32=$('#imag32 > img').attr('alt');
            var imag33=$('#imag33 > img').attr('alt');
            if (imag21==5) {
                cor++;
                f_ok($('#imag21'));
            }else {
                inc++;
                f_no($('#imag21'));
            }
            if (imag22==6) {
                cor++;
                f_ok($('#imag22'));
            }else {
                inc++;
                f_no($('#imag22'));
            }
            if (imag31==7) {
                cor++;
                f_ok($('#imag31'));
            }else {
                inc++;
                f_no($('#imag31'));
            }
            if (imag32==8) {
                cor++;
                f_ok($('#imag32'));
            }else {
                inc++;
                f_no($('#imag32'));
            }
            if (imag33==9) {
                cor++;
                f_ok($('#imag33'));
            }else {
                inc++;
                f_no($('#imag33'));
            }
            Calculo_nota()
            
        }
        
    }