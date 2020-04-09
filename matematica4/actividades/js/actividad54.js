    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=35,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],resp=[];
    f_iniciar();

    function mayus(e) {
        e.value = e.value.toLowerCase();
    }
    $('.enc1').click(function(){

        if ($(this).hasClass('encierra')) {
            $(this).removeClass('encierra')

        }else{
            $(this).addClass('encierra')
            $('.enc2').removeClass('encierra')
            $('.enc3').removeClass('encierra')
        }

    })
    $('.enc2').click(function(){

        if ($(this).hasClass('encierra')) {
            $(this).removeClass('encierra')

        }else{
            $(this).addClass('encierra')
            $('.enc1').removeClass('encierra')
            $('.enc3').removeClass('encierra')
        }

    })
    $('.enc3').click(function(){

        if ($(this).hasClass('encierra')) {
            $(this).removeClass('encierra')

        }else{
            $(this).addClass('encierra')
            $('.enc2').removeClass('encierra')
            $('.enc1').removeClass('encierra')
        }

    })
    $('.enc4').click(function(){

        if ($(this).hasClass('encierra')) {
            $(this).removeClass('encierra')

        }else{
            $(this).addClass('encierra')
            $('.enc5').removeClass('encierra')
            $('.enc6').removeClass('encierra')
        }

    })
    $('.enc5').click(function(){

        if ($(this).hasClass('encierra')) {
            $(this).removeClass('encierra')

        }else{
            $(this).addClass('encierra')
            $('.enc4').removeClass('encierra')
            $('.enc6').removeClass('encierra')
        }

    })
    $('.enc6').click(function(){

        if ($(this).hasClass('encierra')) {
            $(this).removeClass('encierra')

        }else{
            $(this).addClass('encierra')
            $('.enc5').removeClass('encierra')
            $('.enc4').removeClass('encierra')
        }

    })
    function f_iniciar(){
       var descen=['D = {10, 20, 30, 40}','C = {100, 200, 300, 400}','M = {1 000, 2 000, 3 000, 4 000}']; 
       var descen1=['J = {café, naranja}','K = {verde, morado}','L = {rojo, azul}'];
       var descen2=['<img id="ime1" class="img-responsive c3" src="img/i6_p52_act54.png">','<img id="ime2" class="img-responsive c1" src="img/i7_p52_act54.png">','<img id="ime3" class="img-responsive c2" src="img/i8_p52_act54.png">'];
       var descen3=['<img id="il1" class="img-responsive c_imagenes c1" src="img/i3_p52_act54.png">','<img id="il2" class="img-responsive c_imagenes c2" src="img/i4_p52_act54.png">','<img id="il3" class="img-responsive c_imagenes c3" src="img/i5_p52_act54.png">'];
       var abac=['<div align="center"><img class="img-responsive" src="img/i13_p52_act54.png" alt=""></div><input id="rab1" type="number" class="form-control"><p>Se lee:<textarea id="ral1" name="txpal1" onkeyup="mayus(this);" class="form-control rounded-0" rows="3"></textarea></p>','<div align="center"><img class="img-responsive" src="img/i14_p52_act54.png" alt=""></div><input id="rab2" type="number" class="form-control"><p>Se lee:<textarea id="ral2" onkeyup="mayus(this);" name="txpal1"  class="form-control rounded-0" rows="3"></textarea></p>','<div align="center"><img class="img-responsive" src="img/i15_p52_act54.png" alt=""></div><input id="rab3" type="number" class="form-control"><p>Se lee:<textarea id="ral3" name="txpal1" class="form-control rounded-0" rows="3" onkeyup="mayus(this);"></textarea></p>']
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
            $("#desc"+i).html(descen[c]);
            
            
        };
        //aleatorio literal 2
        for (var i = 4; i <= 6 ; i++) {
            var c=myArray2[i-4];
            $("#desc"+i).html(descen1[c]);
            
            
        };
        //aleatorio literal 3
        for (var i = 1; i <= 3 ; i++) {
            var c=myArray2[i-1];
            $("#imael"+i).html(descen2[c]);
            
            
        };
        var descen4=[];
        //aleatorio literal 4
        for (var i = 1; i <= 3 ; i++) {
            var c=myArray2[i-1];
            descen4.push(descen3[c]);
            
            
        };
        //aleatorio literal 5
        for (var i = 1; i <= 3 ; i++) {
            var c=myArray2[i-1];
            $("#ab"+i).html(abac[c]);
            
            
        };
        var suc1 = parseInt((Math.random() * 50) + 1);
        var suc2 = parseInt((Math.random() * 100) + 40);
        var patron=parseInt((Math.random() * 10) + 1);
        var patron1=parseInt((Math.random() * 10) + 1);
        var sucesion1=[suc2];
        var sucesion2=[suc1];
        for (var i = 0; i < 5; i++) {
            sucesion1.push(sucesion1[i]-patron);
        }
        for (var i = 0; i < 5; i++) {
            $('#num'+(i+1)).html(sucesion1[i]);
        }
        for (var i = 0; i < 5; i++) {
            sucesion2.push(sucesion2[i]+patron1);
        }
        for (var i = 0; i < 5; i++) {
            $('#num1'+(i+1)).html(sucesion2[i]);
        }
        $("#resim").html('').append(descen3);
        $("#resim  img").draggable({ //arrastramos
            revert: "invalid",
            zIndex:5,
            containment: "#actividad54",
            scroll: false,                   
        });
        $("#caja_res").droppable({
            drop: function(e, ui) {
                r_ids.push(ui.draggable.attr("src"));
                for(i=1;i<4;i++){ //4 elementos
                    var nn = 'c'+i; //obtenemos la clase
                    if($(ui.draggable).hasClass(nn)){ //comparamos la clase del arrastre
                        if($("#imael1").find("img").hasClass(nn)){ //con la clase del destino q tienen en mismo nombre
                            resp.push('ok');
                        }else{
                            resp.push('no');
                        }
                    }
                }
                
                ui.draggable.attr("style", "");
                $(this).append(ui.draggable);
                $(this).find(".c_imagenes").draggable({disabled:true});
            }
        });
        $("#caja_res1").droppable({
            drop: function(e, ui) {
                r_ids1.push(ui.draggable.attr("src"));
                for(i=1;i<4;i++){ //4 elementos
                    var nn = 'c'+i; //obtenemos la clase
                    if($(ui.draggable).hasClass(nn)){ //comparamos la clase del arrastre
                        if($("#imael2").find("img").hasClass(nn)){ //con la clase del destino q tienen en mismo nombre
                            resp.push('ok');
                        }else{
                            resp.push('no');
                        }
                    }
                }
                ui.draggable.attr("style", "");
                $(this).append(ui.draggable);
                $(this).find(".c_imagenes").draggable({disabled:true});
            }
        });
        $("#caja_res2").droppable({
            drop: function(e, ui) {
                r_ids2.push(ui.draggable.attr("src"));
                for(i=1;i<4;i++){ //4 elementos
                    var nn = 'c'+i; //obtenemos la clase
                    if($(ui.draggable).hasClass(nn)){ //comparamos la clase del arrastre
                        if($("#imael3").find("img").hasClass(nn)){ //con la clase del destino q tienen en mismo nombre
                            resp.push('ok');
                        }else{
                            resp.push('no');
                        }
                    }
                }
                ui.draggable.attr("style", "");
                $(this).append(ui.draggable);
                $(this).find(".c_imagenes").draggable({disabled:true});
            }
        });
        var operacio1=parseInt((Math.random() * 900) + 100);
        var operacio2=parseInt((Math.random() * 900) + 100);
        var operacion1=operacio1.toString().split("");
        var operacion2=operacio2.toString().split("");
        $('#sutraendo1').html('<h5>'+operacion1[0]+'</h5>');
        $('#sutraendo2').html('<h5>'+operacion1[1]+'</h5>');
        $('#sutraendo3').html('<h5>'+operacion1[2]+'</h5>');
        $('#diferencia1').html('<h5>'+operacion2[0]+'</h5>');
        $('#diferencia2').html('<h5>'+operacion2[1]+'</h5>');
        $('#diferencia3').html('<h5>'+operacion2[2]+'</h5>');
        var operacio3=parseInt((Math.random() * 990) + 100);
        var operacio4=parseInt((Math.random() * 800) + 100);
        if (operacio3>operacio4) {
            var operacion3=operacio3.toString().split("");
            var operacion4=operacio4.toString().split("");    
        }else {
            var operacion3=operacio4.toString().split("");
            var operacion4=operacio3.toString().split("");
        }
        
        $('#sutraendo4').html('<h5>'+operacion3[0]+'</h5>');
        $('#sutraendo5').html('<h5>'+operacion3[1]+'</h5>');
        $('#sutraendo6').html('<h5>'+operacion3[2]+'</h5>');
        $('#diferencia4').html('<h5>'+operacion4[0]+'</h5>');
        $('#diferencia5').html('<h5>'+operacion4[1]+'</h5>');
        $('#diferencia6').html('<h5>'+operacion4[2]+'</h5>');
        var frecue1=parseInt((Math.random() * 20) + 1);
        var frecue2=parseInt((Math.random() * 20) + 1);
        var frecue3=parseInt((Math.random() * 20) + 1);
        var frecue4=parseInt((Math.random() * 20) + 1);
        var frecue5=parseInt((Math.random() * 20) + 1);
        var frecue6=parseInt((Math.random() * 20) + 1);
        $('#lengu1').html(frecue1);
        $('#lengu2').html(frecue2);
        $('#lengu3').html(frecue3);
        $('#lengu4').html(frecue4);
        $('#lengu5').html(frecue5);
        $('#lengu6').html(frecue6);
       bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            cont++;
            if ($('#desc1').hasClass('encierra')) {
                var desc1= $('#desc1').html();
                desc1=desc1.split(" ");
                
                if (desc1[0]=="C") {
                    cor++;
                    f_ok($('#desc1'));
                }else {
                    inc++;
                    f_no($('#desc1'));
                }

            }
            if ($('#desc2').hasClass('encierra')) {
                var desc2= $('#desc2').html();
                desc2=desc2.split(" ");
                if (desc2[0]=="C") {
                    cor++;
                    f_ok($('#desc2'));
                }else {
                    inc++;
                    f_no($('#desc2'));
                }

            }
            if ($('#desc3').hasClass('encierra')) {
                var desc3= $('#desc3').html();
                desc3=desc3.split(" ");
                if (desc3[0]=="C") {
                    cor++;
                    f_ok($('#desc3'));
                }else {
                    inc++;
                    f_no($('#desc3'));
                }

            }
            if ($('#desc4').hasClass('encierra')) {
                var desc4= $('#desc4').html();
                desc4=desc4.split(" ");
                
                if (desc4[0]=="L") {
                    cor++;
                    f_ok($('#desc4'));
                }else {
                    inc++;
                    f_no($('#desc4'));
                }

            }
            if ($('#desc5').hasClass('encierra')) {
                var desc5= $('#desc5').html();
                desc5=desc5.split(" ");
                if (desc5[0]=="L") {
                    cor++;
                    f_ok($('#desc5'));
                }else {
                    inc++;
                    f_no($('#desc5'));
                }

            }
            if ($('#desc6').hasClass('encierra')) {
                var desc6= $('#desc6').html();
                desc6=desc6.split(" ");
                if (desc6[0]=="L") {
                    cor++;
                    f_ok($('#desc6'));
                }else {
                    inc++;
                    f_no($('#desc6'));
                }

            }
            for(i=0;i<resp.length;i++){
                if(resp.length == 3 && resp[i]=='ok'){
                    cor++;
                    f_ok($('.images'));
                }else{
                    inc++;
                    f_no($('.images'));
                }
            }
            var p1=parseInt($('#p1').val());
            var p2=parseInt($('#p2').val());
            var p3=parseInt($('#p3').val());
            var p4=parseInt($('#p4').val());
            var p5=parseInt($('#p5').val());
            var p6=parseInt($('#p6').val());
            if (p1== ('-'+patron)) {
                cor++;
                f_ok($('#p1'));
            }else {
                inc++;
                f_no($('#p1'));
            }
            if (p2== ('-'+patron)) {
                cor++;
                f_ok($('#p2'));
            }else {
                inc++;
                f_no($('#p2'));
            }
            if (p3== ('-'+patron)) {
                cor++;
                f_ok($('#p3'));
            }else {
                inc++;
                f_no($('#p3'));
            }
            if (p4== ('+'+patron1)) {
                cor++;
                f_ok($('#p4'));
            }else {
                inc++;
                f_no($('#p4'));
            }
            if (p5== ('+'+patron1)) {
                cor++;
                f_ok($('#p5'));
            }else {
                inc++;
                f_no($('#p5'));
            }
            if (p6== ('+'+patron1)) {
                cor++;
                f_ok($('#p6'));
            }else {
                inc++;
                f_no($('#p6'));
            }
            var rab1=$('#rab1').val();
            var rab2=$('#rab2').val();
            var rab3=$('#rab3').val();
            var ral1=$('#ral1').val();
            var ral2=$('#ral2').val();
            var ral3=$('#ral3').val();
            if (rab1== "8 257" || rab1== "8257") {
                cor++;
                f_ok($('#rab1'));
            }else {
                inc++;
                f_no($('#rab1'));
            }
            if (rab2== "4 846" || rab2== "4846") {
                cor++;
                f_ok($('#rab2'));
            }else {
                inc++;
                f_no($('#rab2'));
            }
            if (rab3== "6 846" || rab3== "6846") {
                cor++;
                f_ok($('#rab3'));
            }else {
                inc++;
                f_no($('#rab3'));
            }
            if (ral1== "ocho mil doscientos cincuenta y siete") {
                cor++;
                f_ok($('#ral1'));
            }else {
                inc++;
                f_no($('#ral1'));
            }
            if (ral2== "cuatro mil ochocientos cuarenta y seis") {
                cor++;
                f_ok($('#ral2'));
            }else {
                inc++;
                f_no($('#ral2'));
            }
            if (ral3== "seis mil ochocientos cuarenta y seis") {
                cor++;
                f_ok($('#ral3'));
            }else {
                inc++;
                f_no($('#ral3'));
            }
            var sumr1=$('#sumr1').val();
            var sumr2=$('#sumr2').val();
            var sumr3=$('#sumr3').val();
            var sumr4=$('#sumr4').val();
            var sumr5=$('#sumr5').val();
            var sumr6=$('#sumr6').val();
            if (sumr1== "40") {
                cor++;
                f_ok($('#sumr1'));
            }else {
                inc++;
                f_no($('#sumr1'));
            }
            if (sumr2== "50") {
                cor++;
                f_ok($('#sumr2'));
            }else {
                inc++;
                f_no($('#sumr2'));
            }
            if (sumr3== "90") {
                cor++;
                f_ok($('#sumr3'));
            }else {
                inc++;
                f_no($('#sumr3'));
            }
            if (sumr4== "35") {
                cor++;
                f_ok($('#sumr4'));
            }else {
                inc++;
                f_no($('#sumr4'));
            }
            if (sumr5== "25") {
                cor++;
                f_ok($('#sumr5'));
            }else {
                inc++;
                f_no($('#sumr5'));
            }
            if (sumr6== "60") {
                cor++;
                f_ok($('#sumr6'));
            }else {
                inc++;
                f_no($('#sumr6'));
            }
            var suma1=[],resta1=[];
            for (var i = 1; i <=4; i++) {
                suma1.push($('#r'+i).val());
            }
            for (var i = 5; i <=8; i++) {
                resta1.push($('#r'+i).val());
            }
            suma1=suma1.join("");
            resta1=resta1.join("");
            var res1=(operacio1+operacio2);
            var res2=0;
            if (operacio3>operacio4) {
               res2=(operacio3-operacio4); 
            }else {
                res2=(operacio4-operacio3); 
            }
            if (suma1==res1) {
                cor++;
                f_ok($('#r1'));
                f_ok($('#r2'));
                f_ok($('#r3'));
                f_ok($('#r4'));
            }else {
                inc++;
                f_no($('#r1'));
                f_no($('#r2'));
                f_no($('#r3'));
                f_no($('#r4'));
            }
            if (resta1==res2) {
                cor++;
                f_ok($('#r5'));
                f_ok($('#r6'));
                f_ok($('#r7'));
                f_ok($('#r8'));
            }else {
                inc++;
                f_no($('#r5'));
                f_no($('#r6'));
                f_no($('#r7'));
                f_no($('#r8'));
            }
            var elc1=$('#elc1').val();
            var elc2=$('#elc2').val();
            var elc3=$('#elc3').val();
            if (elc1=="vértice") {
                cor++;
                f_ok($('#elc1'));
                
            }else {
                inc++;
                f_no($('#elc1'));
            }
            if (elc2=="lado") {
                cor++;
                f_ok($('#elc2'));
                
            }else {
                inc++;
                f_no($('#elc2'));
            }
            if (elc3=="ángulo") {
                cor++;
                f_ok($('#elc3'));
                
            }else {
                inc++;
                f_no($('#elc3'));
            }
            var frec1=$('#frec1').val();
            var frec2=$('#frec2').val();
            var frec3=$('#frec3').val();
            var frec4=$('#frec4').val();
            var frec5=$('#frec5').val();
            var frec6=$('#frec6').val();
            var frec7=$('#frec7').val();
            if (frec1==frecue1) {
                cor++;
                f_ok($('#frec1'));
                
            }else {
                inc++;
                f_no($('#frec1'));
            }
            if (frec2==frecue2) {
                cor++;
                f_ok($('#frec2'));
                
            }else {
                inc++;
                f_no($('#frec2'));
            }
            if (frec3==frecue3) {
                cor++;
                f_ok($('#frec3'));
                
            }else {
                inc++;
                f_no($('#frec3'));
            }
            if (frec4==frecue4) {
                cor++;
                f_ok($('#frec4'));
                
            }else {
                inc++;
                f_no($('#frec4'));
            }
            if (frec5==frecue5) {
                cor++;
                f_ok($('#frec5'));
                
            }else {
                inc++;
                f_no($('#frec5'));
            }
            if (frec6==frecue6) {
                cor++;
                f_ok($('#frec6'));
                
            }else {
                inc++;
                f_no($('#frec6'));
            }
            if (frec7==(frecue1+frecue2+frecue3+frecue4+frecue5+frecue6)) {
                cor++;
                f_ok($('#frec7'));
                
            }else {
                inc++;
                f_no($('#frec7'));
            }
            Calculo_nota();
            

        }
        
    }