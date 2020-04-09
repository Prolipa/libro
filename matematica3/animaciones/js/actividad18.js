var i,n1=0,n2=0,cont=0,ejer=5,itemsT=2*ejer,cor=0,inc=0,calificacion=10,resp=[],nums=[], nn1=[],nn2=[],res1='',res2='';
var claseAnimada ='animate bounceIn';
for(i=10;i<101;i++){
    nums.push(i);
}
f_iniciar();
function f_iniciar() {
    nums.sort(f_randomico);
    QuitaClase(".nota",claseAnimada);
    AgregaClase(".actividad",claseAnimada);
    $("#n_cont").html(cont+1);
    $("#n_ejer").html(ejer);
    $("#trace").hide();
    $(".t1").val('').focus();
    $(".t2").val('');
    QuitaClase($(".t1"),"correcto incorrecto");
    QuitaClase($(".t2"),"correcto incorrecto");
    nn1=[],nn2=[];
    sinEspacios(".actividad1 .form-control");              
    $(".nums").each(function(n2){                    
        $(this).html(nums[n2]);
        if(n2<3){
            nn1.push(nums[n2]);
        }else{
            nn2.push(nums[n2])
        }
    });
    //console.log(nn1,nn2);
    nn1.sort(function(a, b) { //ordenamos descendente
      return  b-a;
    });
    nn2.sort(function(a, b) {//ordenamos ascendente
      return  a-b;
    });
    res1 =(String(nn1[0]+'>'+nn1[1]+'>'+nn1[2]));
    res2 =(String(nn2[0]+'<'+nn2[1]+'<'+nn2[2]));
    //console.log(res1,res2);
    bt_comprobar.addEventListener("click", f_comprobar);
    function f_comprobar(){
        cont++;                    
        var temp;
        AgregaClase(".nota",claseAnimada);
        QuitaClase(".actividad",claseAnimada);
        bt_comprobar.removeEventListener("click", f_comprobar);
        var temp= $(".t1");
        if(temp.val()==res1){
            cor++;
            f_ok(temp);
        }else{
            inc++;
            f_no(temp);
        }
        temp= $(".t2");
        if(temp.val()==res2){
            cor++;
            f_ok(temp);
        }else{
            inc++;
            f_no(temp);
        }                                   
        Calculo_nota();
    }
}