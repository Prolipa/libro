    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=34,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],resp=[];
    var mins1=0,mins2=0,mins3=0,suss1=0,suss2=0,suss3=0;
    var min1=[],min2=[],min3=[],sus1=[],sus2=[],sus3=[];
    var minss1=0,minss2=0,minss3=0,susss1=0,susss2=0,susss3=0;
    var min11=[],min12=[],min13=[],sus11=[],sus12=[],sus13=[];
    f_iniciar();
    $('.enc1').click(function(){

        if ($(this).hasClass('encierra')) {
            $(this).removeClass('encierra')

        }else{
            $(this).addClass('encierra')
            $('.enc2').removeClass('encierra')
            
        }

    })
    $('.enc2').click(function(){

        if ($(this).hasClass('encierra')) {
            $(this).removeClass('encierra')

        }else{
            $(this).addClass('encierra')
            $('.enc1').removeClass('encierra')
            
        }

    })
    $('.enc3').click(function(){

        if ($(this).hasClass('encierra')) {
            $(this).removeClass('encierra')

        }else{
            $(this).addClass('encierra')
            $('.enc4').removeClass('encierra')
            
        }

    })
    $('.enc4').click(function(){

        if ($(this).hasClass('encierra')) {
            $(this).removeClass('encierra')

        }else{
            $(this).addClass('encierra')
            $('.enc3').removeClass('encierra')
            
        }

    })
    $('.enc5').click(function(){

        if ($(this).hasClass('encierra')) {
            $(this).removeClass('encierra')

        }else{
            $(this).addClass('encierra')
            $('.enc6').removeClass('encierra')
            
        }

    })
    $('.enc6').click(function(){

        if ($(this).hasClass('encierra')) {
            $(this).removeClass('encierra')

        }else{
            $(this).addClass('encierra')
            $('.enc5').removeClass('encierra')
            
        }

    })
    function mayus(e) {
        e.value = e.value.toLowerCase();
    }
    function numerosresta(){
        mins1=parseInt((Math.random() * 8000)+1000);
        mins2=parseInt((Math.random() * 8000)+1000);
        mins3=parseInt((Math.random() * 8000)+1000);
        suss1=parseInt((Math.random() * 6000)+1000);
        suss2=parseInt((Math.random() * 6000)+1000);
        suss3=parseInt((Math.random() * 6000)+1000);
        f_iniciar();
    }
    function numerosresta1(){
        minss1=parseInt((Math.random() * 8000)+1000);
        minss2=parseInt((Math.random() * 8000)+1000);
        minss3=parseInt((Math.random() * 8000)+1000);
        susss1=parseInt((Math.random() * 6000)+1000);
        susss2=parseInt((Math.random() * 6000)+1000);
        susss3=parseInt((Math.random() * 6000)+1000);
        f_iniciar();
    }
    function f_iniciar(){
            
        if (mins1>suss1 && mins2>suss2 && mins3>suss3) {
            min1=mins1.toString().split('');
            min2=mins2.toString().split('');
            min3=mins3.toString().split('');
            sus1=suss1.toString().split('');
            sus2=suss2.toString().split('');
            sus3=suss3.toString().split('');
        }else {
            numerosresta();
        }
        
        
        for (var i = 0; i < 4; i++) {
            $('#minuendo'+(i+1)).html(min1[i]);
        }
        for (var i = 0; i < 4; i++) {
            $('#minuendo1'+(i+1)).html(min2[i]);
        }
        for (var i = 0; i < 4; i++) {
            $('#minuendo2'+(i+1)).html(min3[i]);
        }
        for (var i = 0; i < 4; i++) {
            $('#sustraendo'+(i+1)).html(sus1[i]);
        }
        for (var i = 0; i < 4; i++) {
            $('#sustraendo1'+(i+1)).html(sus2[i]);
        }
        for (var i = 0; i < 4; i++) {
            $('#sustraendo2'+(i+1)).html(sus3[i]);
        }
        
        if (minss1>susss1 && minss2>susss2 && minss3>susss3) {
            min11=minss1.toString().split('');
            min12=minss2.toString().split('');
            min13=minss3.toString().split('');
            sus11=susss1.toString().split('');
            sus12=susss2.toString().split('');
            sus13=susss3.toString().split('');
        }else {
            numerosresta1();
        }
        
        
        for (var i = 0; i < 4; i++) {
            $('#minuendo3'+(i+1)).html(min11[i]);
        }
        for (var i = 0; i < 4; i++) {
            $('#minuendo4'+(i+1)).html(min12[i]);
        }
        for (var i = 0; i < 4; i++) {
            $('#minuendo5'+(i+1)).html(min13[i]);
        }
        for (var i = 0; i < 4; i++) {
            $('#sustraendo3'+(i+1)).html(sus11[i]);
        }
        for (var i = 0; i < 4; i++) {
            $('#sustraendo4'+(i+1)).html(sus12[i]);
        }
        for (var i = 0; i < 4; i++) {
            $('#sustraendo5'+(i+1)).html(sus13[i]);
        }
        var resen1=[(minss1-susss1),parseInt((Math.random() * 2000)+100)];
        var resen2=[(minss2-susss2),parseInt((Math.random() * 2000)+100)];
        var resen3=[(minss3-susss3),parseInt((Math.random() * 2000)+100)];
        
        var myArray1 = ['0','1'];
        var i,j,k;
        for (i = myArray1.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray1[i - 1];
            myArray1[i - 1] = myArray1[j];
            myArray1[j] = k;
        }
        var myArray2 = ['0','1'];
        var i,j,k;
        for (i = myArray2.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray2[i - 1];
            myArray2[i - 1] = myArray2[j];
            myArray2[j] = k;
        }
        var myArray3 = ['0','1'];
        var i,j,k;
        for (i = myArray3.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray3[i - 1];
            myArray3[i - 1] = myArray3[j];
            myArray3[j] = k;
        }
        //aleatorio literal 2a
        for (var i = 1; i <= 4 ; i++) {
            var c=myArray1[i-1];
            $("#resenc1"+i).html(resen1[c]);
            
        };
        //aleatorio literal 2b
        for (var i = 1; i <= 4 ; i++) {
            var c=myArray2[i-1];
            $("#resenc2"+i).html(resen2[c]);
            
        };
        //aleatorio literal 2c
        for (var i = 1; i <= 4 ; i++) {
            var c=myArray3[i-1];
            $("#resenc3"+i).html(resen3[c]);
            
        };
    }
    function zfill(number, width) {
    var numberOutput = Math.abs(number); /* Valor absoluto del número */
    var length = number.toString().length; /* Largo del número */ 
    var zero = "0"; /* String de cero */  
    
    if (width <= length) {
        if (number < 0) {
             return ("-" + numberOutput.toString()); 
        } else {
             return numberOutput.toString(); 
        }
    } else {
        if (number < 0) {
            return ("-" + (zero.repeat(width - length)) + numberOutput.toString()); 
        } else {
            return ((zero.repeat(width - length)) + numberOutput.toString()); 
        }
    }
}

    function f_comprobar(){
            cont++;
            
            var diferencias1=[$('#diferencia1').val(),$('#diferencia2').val(),$('#diferencia3').val(),$('#diferencia4').val()];
                diferencias1=diferencias1.join('');
            var d=diferencias1.toString().split('');
            var total1=mins1-suss1;
            var res=zfill(total1, 4);
            var res1=[];
            if (d.length==4 || d.length==0) {
                res1=diferencias1;
            }else {
                res1=zfill(diferencias1, 4);    
            }
            var diferencias2=[$('#diferencia11').val(),$('#diferencia12').val(),$('#diferencia13').val(),$('#diferencia14').val()];
                diferencias2=diferencias2.join('');
            var d1=diferencias2.toString().split('');
            var total2=mins2-suss2;
            var res2=zfill(total2, 4);
            var res3=[];
            if (d1.length==4 || d.length==0) {
                res3=diferencias2;
            }else {
                res3=zfill(diferencias2, 4);    
            }

            var diferencias3=[$('#diferencia21').val(),$('#diferencia22').val(),$('#diferencia23').val(),$('#diferencia24').val()];
                diferencias3=diferencias3.join('');
            var d2=diferencias3.toString().split('');
            var total3=mins3-suss3;
            var res4=zfill(total3, 4);
            var res5=[];
            if (d2.length==4 || d2.length==0) {
                res5=diferencias3;
            }else {
                res5=zfill(diferencias3, 4);    
            }
            total1=res.toString().split('');
            res1=res1.toString().split('');
            for (var i = 0; i < 4; i++) {
                if (res1[i]==total1[i]) {
                    cor++;
                    f_ok($('#diferencia'+(i+1)));
                }else {
                    inc++;
                    f_no($('#diferencia'+(i+1)));
                }
            }
            total2=res2.toString().split('');
            res3=res3.toString().split('');
            for (var i = 0; i < 4; i++) {
                if (res3[i]==total2[i]) {
                    cor++;
                    f_ok($('#diferencia1'+(i+1)));
                }else {
                    inc++;
                    f_no($('#diferencia1'+(i+1)));
                }
            }
            total3=res4.toString().split('');
            res5=res5.toString().split('');
            for (var i = 0; i < 4; i++) {
                if (res5[i]==total3[i]) {
                    cor++;
                    f_ok($('#diferencia2'+(i+1)));
                }else {
                    inc++;
                    f_no($('#diferencia2'+(i+1)));
                }
            }
            var teresta1=$('#teresta1').val();
            var teresta2=$('#teresta2').val();
            var teresta3=$('#teresta3').val();
            var teresta4=$('#teresta4').val();
            var teresta5=$('#teresta5').val();
            var teresta6=$('#teresta6').val();
            var teresta7=$('#teresta7').val();
            if (teresta1=='sustraendo') {
                cor++;
                f_ok($('#teresta1'));
            }else {
                inc++;
                f_no($('#teresta1'));
            }
            if (teresta2=='minuendo') {
                cor++;
                f_ok($('#teresta2'));
            }else {
                inc++;
                f_no($('#teresta2'));
            }
            if (teresta3=='sustraendo') {
                cor++;
                f_ok($('#teresta3'));
            }else {
                inc++;
                f_no($('#teresta3'));
            }
            if (teresta4=='diferencia') {
                cor++;
                f_ok($('#teresta4'));
            }else {
                inc++;
                f_no($('#teresta4'));
            }
            if (teresta5=='minuendo') {
                cor++;
                f_ok($('#teresta5'));
            }else {
                inc++;
                f_no($('#teresta5'));
            }
            if (teresta6=='sustraendo') {
                cor++;
                f_ok($('#teresta6'));
            }else {
                inc++;
                f_no($('#teresta6'));
            }
            if (teresta7=='diferencia') {
                cor++;
                f_ok($('#teresta7'));
            }else {
                inc++;
                f_no($('#teresta7'));
            }

            var diferencias5=[$('#diferencia31').val(),$('#diferencia32').val(),$('#diferencia33').val(),$('#diferencia34').val()];
                diferencias5=diferencias5.join('');
            var d5=diferencias5.toString().split('');
            var total5= minss1-susss1;
            var res6=zfill(total5, 4);
            var res7=[];
            if (d5.length==4 || d5.length==0) {
                res7=diferencias5;
            }else {
                res7=zfill(diferencias5, 4);    
            }
            total5=res6.toString().split('');
            res7=res7.toString().split('');
            for (var i = 0; i < 4; i++) {
                if (res7[i]==total5[i]) {
                    cor++;
                    f_ok($('#diferencia3'+(i+1)));
                }else {
                    inc++;
                    f_no($('#diferencia3'+(i+1)));
                }
            }

            var diferencias6=[$('#diferencia41').val(),$('#diferencia42').val(),$('#diferencia43').val(),$('#diferencia44').val()];
                diferencias6=diferencias6.join('');
            var d6=diferencias6.toString().split('');
            var total6= minss2-susss2;
            var res8=zfill(total6, 4);
            var res9=[];
            if (d6.length==4 || d6.length==0) {
                res9=diferencias6;
            }else {
                res9=zfill(diferencias6, 4);    
            }
            total6=res8.toString().split('');
            res9=res9.toString().split('');
            for (var i = 0; i < 4; i++) {
                if (res9[i]==total6[i]) {
                    cor++;
                    f_ok($('#diferencia4'+(i+1)));
                }else {
                    inc++;
                    f_no($('#diferencia4'+(i+1)));
                }
            }

            var diferencias7=[$('#diferencia51').val(),$('#diferencia52').val(),$('#diferencia53').val(),$('#diferencia54').val()];
                diferencias7=diferencias7.join('');
            var d7=diferencias7.toString().split('');
            var total7= minss3-susss3;
            var res10=zfill(total7, 4);
            var res11=[];
            if (d7.length==4 || d7.length==0) {
                res11=diferencias7;
            }else {
                res11=zfill(diferencias7, 4);    
            }
            total7=res10.toString().split('');
            res11=res11.toString().split('');
            for (var i = 0; i < 4; i++) {
                if (res11[i]==total7[i]) {
                    cor++;
                    f_ok($('#diferencia5'+(i+1)));
                }else {
                    inc++;
                    f_no($('#diferencia5'+(i+1)));
                }
            }
            if ($('#resenc11').hasClass('encierra')) {
                var resenc11= $('#resenc11').html();
                if (resenc11==(minss1-susss1)) {
                    cor++;
                    f_ok($('#resenc11'));
                }else {
                    inc++;
                    f_no($('#resenc11'));
                }

            }
            if ($('#resenc12').hasClass('encierra')) {
                var resenc12= $('#resenc12').html();
                if (resenc12==(minss1-susss1)) {
                    cor++;
                    f_ok($('#resenc12'));
                }else {
                    inc++;
                    f_no($('#resenc12'));
                }

            }
            if ($('#resenc21').hasClass('encierra')) {
                var resenc21= $('#resenc21').html();
                if (resenc21==(minss2-susss2)) {
                    cor++;
                    f_ok($('#resenc21'));
                }else {
                    inc++;
                    f_no($('#resenc21'));
                }

            }
            if ($('#resenc22').hasClass('encierra')) {
                var resenc22= $('#resenc22').html();
                if (resenc22==(minss2-susss2)) {
                    cor++;
                    f_ok($('#resenc22'));
                }else {
                    inc++;
                    f_no($('#resenc22'));
                }

            }

            if ($('#resenc31').hasClass('encierra')) {
                var resenc31= $('#resenc31').html();
                if (resenc31==(minss3-susss3)) {
                    cor++;
                    f_ok($('#resenc31'));
                }else {
                    inc++;
                    f_no($('#resenc31'));
                }

            }
            if ($('#resenc32').hasClass('encierra')) {
                var resenc32= $('#resenc32').html();
                if (resenc32==(minss3-susss3)) {
                    cor++;
                    f_ok($('#resenc32'));
                }else {
                    inc++;
                    f_no($('#resenc32'));
                }

            }
            Calculo_nota()
            
        }