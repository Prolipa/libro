    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=6,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],resp=[];
    f_iniciar();

    function mayus(e) {
        e.value = e.value.toUpperCase();
    }
    function f_iniciar(){
       var preg=['1','2','i','o','5','a']
       var pregs1=['V','V','V','V','V','V'];
       var correc1=['∉','∉','∈','∈','∉','∈'];
       var myArray1 = ['0','1','2','3','4','5'];
       var i,j,k;
        for (i = myArray1.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray1[i - 1];
            myArray1[i - 1] = myArray1[j];
            myArray1[j] = k;
        }
        //aleatorio literal 1
        for (var i = 1; i <= 6 ; i++) {
            var c=myArray1[i-1];
            $("#prcon"+i).html(preg[c]);
            $("#prcon1"+i).html(pregs1[c]);
            $("#rco"+i).val(correc1[c]);            
        };
        
       bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            cont++;
            var rcon1=$('#rcon1').val();
            var rcon2=$('#rcon2').val();
            var rcon3=$('#rcon3').val();
            var rcon4=$('#rcon4').val();
            var rcon5=$('#rcon5').val();
            var rcon6=$('#rcon6').val();
            var rco1=$('#rco1').val();
            var rco2=$('#rco2').val();
            var rco3=$('#rco3').val();
            var rco4=$('#rco4').val();
            var rco5=$('#rco5').val();
            var rco6=$('#rco6').val();
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
            if (rcon5==rco5) {
                cor++;
                f_ok($('#rcon5'));
            }else {
                inc++;
                f_no($('#rcon5'));
            }
            if (rcon6==rco6) {
                cor++;
                f_ok($('#rcon6'));
            }else {
                inc++;
                f_no($('#rcon6'));
            }
            Calculo_nota()
            
        }
        
    }