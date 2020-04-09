    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=10,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],resp=[];
    f_iniciar();

    function mayus(e) {
        e.value = e.value.toLowerCase();
    }
    function f_iniciar(){
        
        bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            cont++;
            var p2fg1=$('#p2fg1').val();
            var p2fg2=$('#p2fg2').val();
            var p2fg3=$('#p2fg3').val();
            if (p2fg1=='4 lados') {
                cor++;
                f_ok($('#p2fg1'));
            }else {
                inc++;
                f_no($('#p2fg1'));
            }
            if (p2fg2=='4 ángulos' || p2fg2=='4 angulos') {
                cor++;
                f_ok($('#p2fg2'));
            }else {
                inc++;
                f_no($('#p2fg2'));
            }
            
            if (p2fg3=='4 vértices' || p2fg3=='4 vertices' ) {
                cor++;
                f_ok($('#p2fg3'));
            }else {
                inc++;
                f_no($('#p2fg3'));
            }
            var p2fg11=$('#p2fg11').val();
            var p2fg12=$('#p2fg12').val();
            var p2fg13=$('#p2fg13').val();
            if (p2fg11=='4 lados') {
                cor++;
                f_ok($('#p2fg11'));
            }else {
                inc++;
                f_no($('#p2fg11'));
            }
            if (p2fg12=='4 ángulos' || p2fg12=='4 angulos') {
                cor++;
                f_ok($('#p2fg12'));
            }else {
                inc++;
                f_no($('#p2fg12'));
            }
            
            if (p2fg13=='4 vértices' || p2fg13=='4 vertices' ) {
                cor++;
                f_ok($('#p2fg13'));
            }else {
                inc++;
                f_no($('#p2fg13'));
            }
            var a85cl1=parseFloat($('#a85cl1').val()) ;
            if (a85cl1<=4 && a85cl1>=0) {
                cor=cor+a85cl1;
                f_ok($('#a85cl1'));
            }else {
                inc=inc+4;
                f_no($('#a85cl1'));
                alert('Ingrese un valor de 0 a 4');
            }
            Calculo_nota()
            
        }
        
    }