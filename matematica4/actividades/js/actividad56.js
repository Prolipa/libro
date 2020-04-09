    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=8,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],resp=[];
    f_iniciar();

    function mayus(e) {
        e.value = e.value.toUpperCase();
    }
    function f_iniciar(){
       var preg=['<p style="background:#C6E3F9;">A = {3 501, 3 502, 3 503, 3 504} A ⊂ U</p>','<p style="background:#C6E3F9;">B = {3 710, 3 720, 3 730} B ⊄ U</p>','<p style="background:#D4FFDB;">D = {3 500, 3 600, 3 700, 3 800} D ⊂ U</p>','<p style="background:#D4FFDB;">E = {3 550, 3 600, 3 650} E ⊄ U</p>'];
       var correc=['V','V','F','F'];
       var pregs1=['{0; 8}','{1; 2 ; 3}','A','{6; 7; 9}'];
       var pregs2=['B','A','U','A'];
       var correc1=['⊄','⊂','⊂','⊄'];
       var myArray1 = ['0','1','2','3'];
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
            $("#preg"+i).html(preg[c]);
            $("#corre"+i).val(correc[c]);

            
        };
        //aleatorio literal 2
        for (var i = 1; i <= 4 ; i++) {
            var c=myArray1[i-1];
            $("#prcon"+i).html(pregs1[c]);
            $("#prcon1"+i).html(pregs2[c]);
            $("#rco"+i).val(correc1[c]);
        };
       bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            cont++;
            var rcon1=$('#rcon1').val();
            var rcon2=$('#rcon2').val();
            var rcon3=$('#rcon3').val();
            var rcon4=$('#rcon4').val();
            var rco1=$('#rco1').val();
            var rco2=$('#rco2').val();
            var rco3=$('#rco3').val();
            var rco4=$('#rco4').val();
            var resp1=$('#resp1').val();
            var resp2=$('#resp2').val();
            var resp3=$('#resp3').val();
            var resp4=$('#resp4').val();
            var corre1=$('#corre1').val();
            var corre2=$('#corre2').val();
            var corre3=$('#corre3').val();
            var corre4=$('#corre4').val();
            
            if (resp1==corre1) {
                cor++;
                f_ok($('#resp1'));
            }else {
                inc++;
                f_no($('#resp1'));
            }
            if (resp2==corre2) {
                cor++;
                f_ok($('#resp2'));
            }else {
                inc++;
                f_no($('#resp2'));
            }
            if (resp3==corre3) {
                cor++;
                f_ok($('#resp3'));
            }else {
                inc++;
                f_no($('#resp3'));
            }
            if (resp4==corre4) {
                cor++;
                f_ok($('#resp4'));
            }else {
                inc++;
                f_no($('#resp4'));
            }
            if (rcon1==rco1) {
                cor++;
                f_ok($('#rcon1'));
            }else {
                inc++;
                f_no($('#rcon1'));
            }
            if (rcon2==rco2) {
                cor++;
                f_ok($('#rcon2'));
            }else {
                inc++;
                f_no($('#rcon2'));
            }
            if (rcon3==rco3) {
                cor++;
                f_ok($('#rcon3'));
            }else {
                inc++;
                f_no($('#rcon3'));
            }
            if (rcon4==rco4) {
                cor++;
                f_ok($('#rcon4'));
            }else {
                inc++;
                f_no($('#rcon4'));
            }
            Calculo_nota()
            
        }
        
    }