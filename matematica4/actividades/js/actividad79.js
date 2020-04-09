    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=52,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],resp=[];
    f_iniciar();
    $('.pint1').click(function(){

        if ($(this).hasClass('pinta')) {
            $(this).removeClass('pinta')

        }else{
            $(this).addClass('pinta')
            $('.pint2').removeClass('pinta')
            
        }

    })
    $('.pint2').click(function(){

        if ($(this).hasClass('pinta')) {
            $(this).removeClass('pinta')

        }else{
            $(this).addClass('pinta')
            $('.pint1').removeClass('pinta')
            
        }

    })

    $('.pint3').click(function(){

        if ($(this).hasClass('pinta')) {
            $(this).removeClass('pinta')

        }else{
            $(this).addClass('pinta')
            $('.pint4').removeClass('pinta')
            
        }

    })
    $('.pint4').click(function(){

        if ($(this).hasClass('pinta')) {
            $(this).removeClass('pinta')

        }else{
            $(this).addClass('pinta')
            $('.pint3').removeClass('pinta')
            
        }

    })

    $('.pint5').click(function(){

        if ($(this).hasClass('pinta')) {
            $(this).removeClass('pinta')

        }else{
            $(this).addClass('pinta')
            $('.pint6').removeClass('pinta')
            
        }

    })
    $('.pint6').click(function(){

        if ($(this).hasClass('pinta')) {
            $(this).removeClass('pinta')

        }else{
            $(this).addClass('pinta')
            $('.pint5').removeClass('pinta')
            
        }

    })

    $('.pint7').click(function(){

        if ($(this).hasClass('pinta')) {
            $(this).removeClass('pinta')

        }else{
            $(this).addClass('pinta')
            $('.pint8').removeClass('pinta')
            
        }

    })
    $('.pint8').click(function(){

        if ($(this).hasClass('pinta')) {
            $(this).removeClass('pinta')

        }else{
            $(this).addClass('pinta')
            $('.pint7').removeClass('pinta')
            
        }

    })
    function mayus(e) {
        e.value = e.value.toUpperCase();
    }
    function f_iniciar(){
        var umd1= parseInt((Math.random() * 4000) + 1000);
        var umd2= parseInt((Math.random() * 4000) + 1000);
        var umd3= parseInt((Math.random() * 4000) + 1000);
        var umd4= parseInt((Math.random() * 4000) + 1000);
        $('#numd1').html('&nbsp;&nbsp;'+umd1);
        $('#numd2').html( ' + '+umd2+'<br>______');
        $('#numd3').html('&nbsp;&nbsp;'+umd3);
        $('#numd4').html( ' + '+umd4+'<br>______');
        var vec1=[(umd1+umd2),parseInt((Math.random() * 8000) + 1000)];
        var myArray1 = ['0','1'];
        var i,j,k;
        for (i = myArray1.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray1[i - 1];
            myArray1[i - 1] = myArray1[j];
            myArray1[j] = k;
        }
         //aleatorio literal 1a
        for (var i = 1; i <= 2 ; i++) {
            var c=myArray1[i-1];
            $("#resdes"+i).html(vec1[c]);
            
        };
        var vec2=[(umd3+umd4),parseInt((Math.random() * 8000) + 1000)];
        var myArray2 = ['0','1'];
        var i,j,k;
        for (i = myArray2.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray2[i - 1];
            myArray2[i - 1] = myArray2[j];
            myArray2[j] = k;
        }
         //aleatorio literal 1b
        for (var i = 3; i <= 4 ; i++) {
            var c=myArray2[i-3];
            $("#resdes"+i).html(vec2[c]);
            
        };

        var umd5= [parseInt((Math.random() * 8) + 1),parseInt((Math.random() * 8) + 1),parseInt((Math.random() * 8) + 1),parseInt((Math.random() * 8) + 1)];
        var umd6= [parseInt((Math.random() * 8) + 1),parseInt((Math.random() * 8) + 1),parseInt((Math.random() * 8) + 1),parseInt((Math.random() * 8) + 1)];
        var umd7= [parseInt((Math.random() * 8) + 1),parseInt((Math.random() * 8) + 1),parseInt((Math.random() * 8) + 1),parseInt((Math.random() * 8) + 1)];
        var umd8= [parseInt((Math.random() * 8) + 1),parseInt((Math.random() * 8) + 1),parseInt((Math.random() * 8) + 1),parseInt((Math.random() * 8) + 1)];
        var resumd1=[];
        var resumd2=[];
        var resumd3=[];
        var resumd4=[];
        for (var i = 0; i <umd5.length; i++) {
            if (umd5[i]>=umd6[i]) {
                resumd1.push(umd5[i]);
                resumd2.push(umd6[i]);
            }else {
                resumd1.push(umd6[i]);
                resumd2.push(umd5[i]);
            }
        }
        for (var i = 0; i <umd7.length; i++) {
            if (umd7[i]>=umd8[i]) {
                resumd3.push(umd7[i]);
                resumd4.push(umd8[i]);
            }else {
                resumd3.push(umd8[i]);
                resumd4.push(umd7[i]);
            }
        }
        $('#numd5').html('&nbsp;&nbsp;'+resumd1.join(''));    
        $('#numd6').html( ' - '+resumd2.join('')+'<br>______');
        vec3=[(parseInt(resumd1.join('')) - parseInt(resumd2.join('')) ),parseInt((Math.random() * 8000) + 1000)];
        $('#numd7').html('&nbsp;&nbsp;'+resumd3.join(''));    
        $('#numd8').html( ' - '+resumd4.join('')+'<br>______');
        vec4=[(parseInt(resumd3.join('')) - parseInt(resumd4.join('')) ),parseInt((Math.random() * 8000) + 1000)];
        
        var myArray3 = ['0','1'];
        var i,j,k;
        for (i = myArray3.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray3[i - 1];
            myArray3[i - 1] = myArray3[j];
            myArray3[j] = k;
        }
         //aleatorio literal 1a
        for (var i = 5; i <= 6 ; i++) {
            var c=myArray3[i-5];
            $("#resdes"+i).html(vec3[c]);
            
        };
        
        var myArray4 = ['0','1'];
        var i,j,k;
        for (i = myArray4.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray4[i - 1];
            myArray4[i - 1] = myArray4[j];
            myArray4[j] = k;
        }
         //aleatorio literal 1b
        for (var i = 7; i <= 8 ; i++) {
            var c=myArray4[i-7];
            $("#resdes"+i).html(vec4[c]);
            
        };
        bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            cont++;
            var umdes1=umd1.toString().split('');
            var umdes2=umd2.toString().split('');
            var umdes3=umd3.toString().split('');
            var umdes4=umd4.toString().split('');
            /////////////////////////////////////////////
            
            var umdes5=resumd1;
            var umdes6=resumd2;    
            var umdes7=resumd3;    
            var umdes8=resumd4;    
            
            var descom1=$('#descom1').val();
            var descom2=$('#descom2').val();
            var descom3=$('#descom3').val();
            var descom4=$('#descom4').val();
            var descom5=$('#descom5').val();
            var descom6=$('#descom6').val();
            var descom7=$('#descom7').val();
            var descom8=$('#descom8').val();
            var descom9=$('#descom9').val();
            var descom10=$('#descom10').val();
            var descom11=$('#descom11').val();
            var descom12=$('#descom12').val();
            ////////////////////////////////////////
            var descom13=$('#descom13').val();
            var descom14=$('#descom14').val();
            var descom15=$('#descom15').val();
            var descom16=$('#descom16').val();
            var descom17=$('#descom17').val();
            var descom18=$('#descom18').val();
            var descom19=$('#descom19').val();
            var descom20=$('#descom20').val();
            var descom21=$('#descom21').val();
            var descom22=$('#descom22').val();
            var descom23=$('#descom23').val();
            var descom24=$('#descom24').val();
            ////////////////////////////////////////
            var descom25=$('#descom25').val();
            var descom26=$('#descom26').val();
            var descom27=$('#descom27').val();
            var descom28=$('#descom28').val();
            var descom29=$('#descom29').val();
            var descom30=$('#descom30').val();
            var descom31=$('#descom31').val();
            var descom32=$('#descom32').val();
            var descom33=$('#descom33').val();
            var descom34=$('#descom34').val();
            var descom35=$('#descom35').val();
            var descom36=$('#descom36').val();
            //////////////////////////////////////////
            var descom37=$('#descom37').val();
            var descom38=$('#descom38').val();
            var descom39=$('#descom39').val();
            var descom40=$('#descom40').val();
            var descom41=$('#descom41').val();
            var descom42=$('#descom42').val();
            var descom43=$('#descom43').val();
            var descom44=$('#descom44').val();
            var descom45=$('#descom45').val();
            var descom46=$('#descom46').val();
            var descom47=$('#descom47').val();
            var descom48=$('#descom48').val();
            if (descom1==(umdes1[0]*1000) && descom1>='0') {
                cor++;
                f_ok($('#descom1'));
            }else {
                inc++;
                f_no($('#descom1'));
            }
            if (descom2==(umdes1[1]*100) && descom2>='0') {
                cor++;
                f_ok($('#descom2'));
            }else {
                inc++;
                f_no($('#descom2'));
            }
            if (descom3==(umdes1[2]*10) && descom3>='0') {
                cor++;
                f_ok($('#descom3'));
            }else {
                inc++;
                f_no($('#descom3'));
            }
            if (descom4==(umdes1[3]) && descom4>='0') {
                cor++;
                f_ok($('#descom4'));
            }else {
                inc++;
                f_no($('#descom4'));
            }

            if (descom5==(umdes2[0]*1000) && descom5>='0') {
                cor++;
                f_ok($('#descom5'));
            }else {
                inc++;
                f_no($('#descom5'));
            }
            if (descom6==(umdes2[1]*100) && descom6>='0') {
                cor++;
                f_ok($('#descom6'));
            }else {
                inc++;
                f_no($('#descom6'));
            }
            if (descom7==(umdes2[2]*10) && descom7>='0') {
                cor++;
                f_ok($('#descom7'));
            }else {
                inc++;
                f_no($('#descom7'));
            }
            if (descom8==(umdes2[3]) && descom8>='0') {
                cor++;
                f_ok($('#descom8'));
            }else {
                inc++;
                f_no($('#descom8'));
            }

            if (descom9==((parseInt(umdes1[0]) + parseInt(umdes2[0]) )*1000) && descom9>='0') {
                cor++;
                f_ok($('#descom9'));
            }else {
                inc++;
                f_no($('#descom9'));
            }
            if (descom10==((parseInt(umdes1[1]) + parseInt(umdes2[1]) )*100) && descom10>='0') {
                cor++;
                f_ok($('#descom10'));
            }else {
                inc++;
                f_no($('#descom10'));
            }
            if (descom11==((parseInt(umdes1[2]) + parseInt(umdes2[2]) )*10) && descom11>='0') {
                cor++;
                f_ok($('#descom11'));
            }else {
                inc++;
                f_no($('#descom11'));
            }
            if (descom12==((parseInt(umdes1[3]) + parseInt(umdes2[3]) )) && descom12>='0') {
                cor++;
                f_ok($('#descom12'));
            }else {
                inc++;
                f_no($('#descom12'));
            }
/////////////////////////////////////////////////////////////////////////////////////
            if (descom13==(umdes3[0]*1000) && descom13>='0') {
                cor++;
                f_ok($('#descom13'));
            }else {
                inc++;
                f_no($('#descom13'));
            }
            if (descom14==(umdes3[1]*100) && descom14>='0') {
                cor++;
                f_ok($('#descom14'));
            }else {
                inc++;
                f_no($('#descom14'));
            }
            if (descom15==(umdes3[2]*10) && descom15>='0') {
                cor++;
                f_ok($('#descom15'));
            }else {
                inc++;
                f_no($('#descom15'));
            }
            if (descom16==(umdes3[3]) && descom16>='0') {
                cor++;
                f_ok($('#descom16'));
            }else {
                inc++;
                f_no($('#descom16'));
            }

            if (descom17==(umdes4[0]*1000) && descom17>='0') {
                cor++;
                f_ok($('#descom17'));
            }else {
                inc++;
                f_no($('#descom17'));
            }
            if (descom18==(umdes4[1]*100) && descom18>='0') {
                cor++;
                f_ok($('#descom18'));
            }else {
                inc++;
                f_no($('#descom18'));
            }
            if (descom19==(umdes4[2]*10) && descom19>='0') {
                cor++;
                f_ok($('#descom19'));
            }else {
                inc++;
                f_no($('#descom19'));
            }
            if (descom20==(umdes4[3]) && descom20>='0') {
                cor++;
                f_ok($('#descom20'));
            }else {
                inc++;
                f_no($('#descom20'));
            }

            if (descom21==((parseInt(umdes3[0]) + parseInt(umdes4[0]) )*1000) && descom21>='0') {
                cor++;
                f_ok($('#descom21'));
            }else {
                inc++;
                f_no($('#descom21'));
            }
            if (descom22==((parseInt(umdes3[1]) + parseInt(umdes4[1]) )*100) && descom22>='0') {
                cor++;
                f_ok($('#descom22'));
            }else {
                inc++;
                f_no($('#descom22'));
            }
            if (descom23==((parseInt(umdes3[2]) + parseInt(umdes4[2]) )*10) && descom23>='0') {
                cor++;
                f_ok($('#descom23'));
            }else {
                inc++;
                f_no($('#descom23'));
            }
            if (descom24==((parseInt(umdes3[3]) + parseInt(umdes4[3]) )) && descom24>='0') {
                cor++;
                f_ok($('#descom24'));
            }else {
                inc++;
                f_no($('#descom24'));
            }
            ////////////////////////////////////////////////////////////////////
            if (descom25==(umdes5[0]*1000) && descom25>='0') {
                cor++;
                f_ok($('#descom25'));
            }else {
                inc++;
                f_no($('#descom25'));
            }
            if (descom26==(umdes5[1]*100) && descom26>='0') {
                cor++;
                f_ok($('#descom26'));
            }else {
                inc++;
                f_no($('#descom26'));
            }
            if (descom27==(umdes5[2]*10) && descom27>='0') {
                cor++;
                f_ok($('#descom27'));
            }else {
                inc++;
                f_no($('#descom27'));
            }
            if (descom28==(umdes5[3]) && descom28>='0') {
                cor++;
                f_ok($('#descom28'));
            }else {
                inc++;
                f_no($('#descom28'));
            }

            if (descom29==(umdes6[0]*1000) && descom29>='0') {
                cor++;
                f_ok($('#descom29'));
            }else {
                inc++;
                f_no($('#descom29'));
            }
            if (descom30==(umdes6[1]*100) && descom30>='0') {
                cor++;
                f_ok($('#descom30'));
            }else {
                inc++;
                f_no($('#descom30'));
            }
            if (descom31==(umdes6[2]*10) && descom31>='0') {
                cor++;
                f_ok($('#descom31'));
            }else {
                inc++;
                f_no($('#descom31'));
            }
            if (descom32==(umdes6[3]) && descom32>='0') {
                cor++;
                f_ok($('#descom32'));
            }else {
                inc++;
                f_no($('#descom32'));
            }

            if (descom33==((parseInt(umdes5[0]) - parseInt(umdes6[0]) )*1000) && descom33>='0') {
                cor++;
                f_ok($('#descom33'));
            }else {
                inc++;
                f_no($('#descom33'));
            }
            if (descom34==((parseInt(umdes5[1]) - parseInt(umdes6[1]) )*100) && descom34>='0') {
                cor++;
                f_ok($('#descom34'));
            }else {
                inc++;
                f_no($('#descom34'));
            }
            if (descom35==((parseInt(umdes5[2]) - parseInt(umdes6[2]) )*10) && descom35>='0') {
                cor++;
                f_ok($('#descom35'));
            }else {
                inc++;
                f_no($('#descom35'));
            }
            if (descom36==((parseInt(umdes5[3]) - parseInt(umdes6[3]) )) && descom36>='0') {
                cor++;
                f_ok($('#descom36'));
            }else {
                inc++;
                f_no($('#descom36'));
            }
            ////////////////////////////////////////////////////////////////////
            if (descom37==(umdes7[0]*1000) && descom37>='0') {
                cor++;
                f_ok($('#descom37'));
            }else {
                inc++;
                f_no($('#descom37'));
            }
            if (descom38==(umdes7[1]*100) && descom38>='0') {
                cor++;
                f_ok($('#descom38'));
            }else {
                inc++;
                f_no($('#descom38'));
            }
            if (descom39==(umdes7[2]*10) && descom39>='0') {
                cor++;
                f_ok($('#descom39'));
            }else {
                inc++;
                f_no($('#descom39'));
            }
            if (descom40==(umdes7[3]) && descom40>='0') {
                cor++;
                f_ok($('#descom40'));
            }else {
                inc++;
                f_no($('#descom40'));
            }

            if (descom41==(umdes8[0]*1000) && descom41>='0') {
                cor++;
                f_ok($('#descom41'));
            }else {
                inc++;
                f_no($('#descom41'));
            }
            if (descom42==(umdes8[1]*100) && descom42>='0') {
                cor++;
                f_ok($('#descom42'));
            }else {
                inc++;
                f_no($('#descom42'));
            }
            if (descom43==(umdes8[2]*10) && descom43>='0') {
                cor++;
                f_ok($('#descom43'));
            }else {
                inc++;
                f_no($('#descom43'));
            }
            if (descom44==(umdes8[3]) && descom44>='0') {
                cor++;
                f_ok($('#descom44'));
            }else {
                inc++;
                f_no($('#descom44'));
            }

            if (descom45==((parseInt(umdes7[0]) - parseInt(umdes8[0]) )*1000) && descom45>='0') {
                cor++;
                f_ok($('#descom45'));
            }else {
                inc++;
                f_no($('#descom45'));
            }
            if (descom46==((parseInt(umdes7[1]) - parseInt(umdes8[1]) )*100) && descom46>='0') {
                cor++;
                f_ok($('#descom46'));
            }else {
                inc++;
                f_no($('#descom46'));
            }
            if (descom47==((parseInt(umdes7[2]) - parseInt(umdes8[2]) )*10) && descom47>='0') {
                cor++;
                f_ok($('#descom47'));
            }else {
                inc++;
                f_no($('#descom47'));
            }
            if (descom48==((parseInt(umdes7[3]) - parseInt(umdes8[3]) )) && descom48>='0') {
                cor++;
                f_ok($('#descom48'));
            }else {
                inc++;
                f_no($('#descom48'));
            }
            /////////////////////////////////////////////////////////////
            if ($('#resdes1').hasClass('pinta')) {
                var resdesc1= $('#resdes1').html();
                if (resdesc1==(umd1+umd2)) {
                    cor++;
                    f_ok($('#resdes1'));
                    $('#resdes1').removeClass('pinta');
                }else {
                    inc++;
                    f_no($('#resdes1'));
                    $('#resdes1').removeClass('pinta');
                }

            }
            if ($('#resdes2').hasClass('pinta')) {
                var resdesc2= $('#resdes2').html();
                if (resdesc2==(umd1+umd2)) {
                    cor++;
                    f_ok($('#resdes2'));
                    $('#resdes2').removeClass('pinta');
                }else {
                    inc++;
                    f_no($('#resdes2'));
                    $('#resdes2').removeClass('pinta');
                }

            }
            /////////////////////////////////////////////////////////////
            if ($('#resdes3').hasClass('pinta')) {
                var resdesc3= $('#resdes3').html();
                if (resdesc3==(umd3+umd4)) {
                    cor++;
                    f_ok($('#resdes3'));
                    $('#resdes3').removeClass('pinta');
                }else {
                    inc++;
                    f_no($('#resdes3'));
                    $('#resdes3').removeClass('pinta');
                }

            }
            if ($('#resdes4').hasClass('pinta')) {
                var resdesc4= $('#resdes4').html();
                if (resdesc4==(umd3+umd4)) {
                    cor++;
                    f_ok($('#resdes4'));
                    $('#resdes4').removeClass('pinta');
                }else {
                    inc++;
                    f_no($('#resdes4'));
                    $('#resdes4').removeClass('pinta');
                }

            }
            /////////////////////////////////////////////////////////////
            if ($('#resdes5').hasClass('pinta')) {
                var resdesc5= $('#resdes5').html();
                if (resdesc5==(parseInt(resumd1.join('')) - parseInt(resumd2.join('')) )) {
                    cor++;
                    f_ok($('#resdes5'));
                    $('#resdes5').removeClass('pinta');
                }else {
                    inc++;
                    f_no($('#resdes5'));
                    $('#resdes5').removeClass('pinta');
                }

            }
            if ($('#resdes6').hasClass('pinta')) {
                var resdesc6= $('#resdes6').html();
                if (resdesc6==(parseInt(resumd1.join('')) - parseInt(resumd2.join('')) )) {
                    cor++;
                    f_ok($('#resdes6'));
                    $('#resdes6').removeClass('pinta');
                }else {
                    inc++;
                    f_no($('#resdes6'));
                    $('#resdes6').removeClass('pinta');
                }

            }
            /////////////////////////////////////////////////////////////
            if ($('#resdes7').hasClass('pinta')) {
                var resdesc7= $('#resdes7').html();
                if (resdesc7==(parseInt(resumd3.join('')) - parseInt(resumd4.join('')) )) {
                    cor++;
                    f_ok($('#resdes7'));
                    $('#resdes7').removeClass('pinta');
                }else {
                    inc++;
                    f_no($('#resdes7'));
                    $('#resdes7').removeClass('pinta');
                }

            }
            if ($('#resdes8').hasClass('pinta')) {
                var resdesc8= $('#resdes8').html();
                if (resdesc8==(parseInt(resumd3.join('')) - parseInt(resumd4.join('')) )) {
                    cor++;
                    f_ok($('#resdes8'));
                    $('#resdes8').removeClass('pinta');
                }else {
                    inc++;
                    f_no($('#resdes8'));
                    $('#resdes8').removeClass('pinta');
                }

            }
            Calculo_nota();
            
        }
        
    }