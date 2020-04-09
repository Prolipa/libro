    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=14,v_ids=[],v_ids1=[],v_ids2=[],v_ids3=[],v_ids4=[],v_ids5=[],resp=[];
    f_iniciar();

    function mayus(e) {
        e.value = e.value.toLowerCase();
    }
    function f_iniciar(){
        n1=(Math.floor(Math.random()*9)+1);
        n2=(Math.floor(Math.random()*9)+1);
        n3=(Math.floor(Math.random()*9)+1);
        n4=(Math.floor(Math.random()*9)+1);
        n5=(Math.floor(Math.random()*9)+1);
        n6=(Math.floor(Math.random()*9)+1);
        n7=(Math.floor(Math.random()*4)+1);
        n8=(Math.floor(Math.random()*4)+1);
        v_ids=[n1];
        v_ids1=[n2];

        if ((n1+n2)>=10) {
            v_ids.push('<p class="i_small s1">1</p><p>'+n3+'</p>');
            v_ids2.push('<p class="i_small s1">1</p><input id="ads1" type="number" class="form-control " style="padding: 0 4px 0 4px;">');
            v_ids1.push('<p>'+n4+'</p>');
        }else {
            v_ids.push('<p>'+n3+'</p>');
            v_ids2.push('<br><input type="number" id="ads1" class="form-control " style="padding: 0 4px 0 4px;">');
            v_ids1.push('<p>'+n4+'</p>');
        }
        if ((n3+n4+1)>10) {
            
                v_ids.push('<p class="i_small s1">1</p><p>'+n5+'</p>');
                v_ids2.push('<p class="i_small s1">1</p><input id="ads2" type="number" class="form-control " style="padding: 0 4px 0 4px;">');
                v_ids1.push('<p>'+n6+'</p>');   
            
            
            
        }else if ((n3+n4+1)==10 && (n1+n2)>=10) {
            v_ids.push('<p class="i_small s1">1</p><p>'+n5+'</p>');
                v_ids2.push('<p class="i_small s1">1</p><input id="ads2" type="number" class="form-control " style="padding: 0 4px 0 4px;">');
                v_ids1.push('<p>'+n6+'</p>');   
        }else{
            v_ids.push('<p>'+n5+'</p>');
            v_ids2.push('<br><input type="number" id="ads2" class="form-control " style="padding: 0 4px 0 4px;">');
            v_ids1.push('<p>'+n6+'</p>');   
        }
        if ((n5+n6+1)>10) {

            v_ids.push('<p class="i_small s1">1</p><p>'+n7+'</p>');
            v_ids2.push('<p class="i_small s1">1</p><input id="ads3" type="number" class="form-control " style="padding: 0 4px 0 4px;">');
            v_ids1.push('<p>'+n8+'</p>');
        }else if ((n5+n6+1)==10 && (n3+n4)>=10) {
            v_ids.push('<p class="i_small s1">1</p><p>'+n7+'</p>');
            v_ids2.push('<p class="i_small s1">1</p><input id="ads3" type="number" class="form-control " style="padding: 0 4px 0 4px;">');
            v_ids1.push('<p>'+n8+'</p>');   
        }else {
            v_ids.push('<p>'+n7+'</p>');
            v_ids2.push('<br><input type="number" id="ads3" class="form-control " style="padding: 0 4px 0 4px;">');
            v_ids1.push('<p>'+n8+'</p>');   
        }
        v_ids2.push('<br><input type="number" id="ads4" class="form-control " style="padding: 0 4px 0 4px;">');
        $('#suman1').html(v_ids[3]);
        $('#suman2').html(v_ids[2]);
        $('#suman3').html(v_ids[1]);
        $('#suman4').html(v_ids[0]);
        $('#suman11').html(v_ids1[3]); 
        $('#suman12').html(v_ids1[2]); 
        $('#suman13').html(v_ids1[1]); 
        $('#suman14').html(v_ids1[0]);
        $('#total1').html(v_ids2[3]);  
        $('#total2').html(v_ids2[2]);  
        $('#total3').html(v_ids2[1]);  
        $('#total4').html(v_ids2[0]);
        n11=(Math.floor(Math.random()*9)+1);
        n12=(Math.floor(Math.random()*9)+1);
        n13=(Math.floor(Math.random()*9)+1);
        n14=(Math.floor(Math.random()*9)+1);
        n15=(Math.floor(Math.random()*9)+1);
        n16=(Math.floor(Math.random()*9)+1);
        n17=(Math.floor(Math.random()*4)+1);
        n18=(Math.floor(Math.random()*4)+1);
        v_ids3=[n11];
        v_ids4=[n12];

        if ((n11+n12)>=10) {
            v_ids3.push('<p class="i_small s1">1</p><p>'+n13+'</p>');
            v_ids5.push('<p class="i_small s1">1</p><input id="ads5" type="number" class="form-control " style="padding: 0 4px 0 4px;">');
            v_ids4.push('<p>'+n14+'</p>');
        }else {
            v_ids3.push('<p>'+n13+'</p>');
            v_ids5.push('<br><input type="number" id="ads5" class="form-control " style="padding: 0 4px 0 4px;">');
            v_ids4.push('<p>'+n14+'</p>');
        }
        if ((n13+n14+1)>10 ) {
            v_ids3.push('<p class="i_small s1">1</p><p>'+n15+'</p>');
            v_ids5.push('<p class="i_small s1">1</p><input id="ads6" type="number" class="form-control " style="padding: 0 4px 0 4px;">');
            v_ids4.push('<p>'+n16+'</p>');
        }else if ((n13+n14+1)==10 && (n11+n12)>=10) {
            v_ids3.push('<p class="i_small s1">1</p><p>'+n15+'</p>');
            v_ids5.push('<p class="i_small s1">1</p><input id="ads6" type="number" class="form-control " style="padding: 0 4px 0 4px;">');
            v_ids4.push('<p>'+n16+'</p>');
        }else {
            v_ids3.push('<p>'+n15+'</p>');
            v_ids5.push('<br><input type="number" id="ads6" class="form-control " style="padding: 0 4px 0 4px;">');
            v_ids4.push('<p>'+n16+'</p>');   
        }
        if ((n15+n16+1)>10 ) {
            v_ids3.push('<p class="i_small s1">1</p><p>'+n17+'</p>');
            v_ids5.push('<p class="i_small s1">1</p><input id="ads7" type="number" class="form-control " style="padding: 0 4px 0 4px;">');
            v_ids4.push('<p>'+n18+'</p>');
        }else if ((n15+n16+1)==10 && (n13+n14)>=10) {
            v_ids3.push('<p class="i_small s1">1</p><p>'+n17+'</p>');
            v_ids5.push('<p class="i_small s1">1</p><input id="ads7" type="number" class="form-control " style="padding: 0 4px 0 4px;">');
            v_ids4.push('<p>'+n18+'</p>');
        }else {
            v_ids3.push('<p>'+n17+'</p>');
            v_ids5.push('<br><input type="number" id="ads7" class="form-control " style="padding: 0 4px 0 4px;">');
            v_ids4.push('<p>'+n18+'</p>');   
        }
        v_ids5.push('<br><input type="number" id="ads8" class="form-control " style="padding: 0 4px 0 4px;">');
        $('#sumans1').html(v_ids3[3]);
        $('#sumans2').html(v_ids3[2]);
        $('#sumans3').html(v_ids3[1]);
        $('#sumans4').html(v_ids3[0]);
        $('#sumans11').html(v_ids4[3]); 
        $('#sumans12').html(v_ids4[2]); 
        $('#sumans13').html(v_ids4[1]); 
        $('#sumans14').html(v_ids4[0]);
        $('#total11').html(v_ids5[3]);  
        $('#total12').html(v_ids5[2]);  
        $('#total13').html(v_ids5[1]);  
        $('#total14').html(v_ids5[0]);   
        /*for (var i = 3; i >= 0; i--) {
            $('#suman'+(i+1)).html(v_ids[i]); 
        }
        for (var i = 3; i >= 0; i--) {
            $('#suman1'+(i+1)).html(v_ids1[i]); 
        }
        for (var i = 3; i >= 0; i--) {
            $('#total'+(i+1)).html(v_ids2[i]); 
        }*/
        
        bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            cont++;
            var r1=[n7,n5,n3,n1];
            var r2=[n8,n6,n4,n2];
            var r11=[$('#ads4').val(),$('#ads3').val(),$('#ads2').val(),$('#ads1').val()];
            var r3=[n17,n15,n13,n11];
            var r4=[n18,n16,n14,n12];
            var r12=[$('#ads8').val(),$('#ads7').val(),$('#ads6').val(),$('#ads5').val()];
            var respadic1=parseInt(r1.join('')) + parseInt(r2.join(''));
            var respadic2=parseInt(r3.join('')) + parseInt(r4.join(''));
            respadic1=respadic1.toString().split('');
            respadic2=respadic2.toString().split('');
            var j=4;
            for (var i = 0; i < 4; i++) {

                if (respadic1[i]==r11[i]) {
                    cor++;
                    f_ok($('#ads'+(j)));
                    j--;
                }else {
                    inc++;
                    f_no($('#ads'+(j)));
                    j--;
                }    
            }
            var x=8;
            for (var i = 0; i < 4; i++) {
                if (respadic2[i]==r12[i]) {
                    cor++;
                    f_ok($('#ads'+(x)));
                    x--;
                }else {
                    inc++;
                    f_no($('#ads'+(x)));
                    x--
                }    
            }
            var ter1=$('#termin1').val();
            var ter2=$('#termin2').val();
            var ter3=$('#termin3').val();
            var ter4=$('#termin4').val();
            var ter5=$('#termin5').val();
            var ter6=$('#termin6').val();
            if (ter1=="sumando") {
                cor++;
                f_ok($('#termin1'));
            }else {
                inc++;
                f_no($('#termin1'));
            }
            if (ter2=="sumando") {
                cor++;
                f_ok($('#termin2'));
            }else {
                inc++;
                f_no($('#termin2'));
            }
            if (ter3=="suma" || ter3=="total" || ter3=="suma o total") {
                cor++;
                f_ok($('#termin3'));
            }else {
                inc++;
                f_no($('#termin3'));
            }
            if (ter4=="sumando") {
                cor++;
                f_ok($('#termin4'));
            }else {
                inc++;
                f_no($('#termin4'));
            }
            if (ter5=="sumando") {
                cor++;
                f_ok($('#termin5'));
            }else {
                inc++;
                f_no($('#termin5'));
            }
            if (ter6=="suma" || ter6=="total" || ter6=="suma o total") {
                cor++;
                f_ok($('#termin6'));
            }else {
                inc++;
                f_no($('#termin6'));
            }
            Calculo_nota();
        }
        
    }