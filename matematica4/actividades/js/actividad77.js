    var calificacion=10,cor=0,inc=0, cont=0, ejer=1, itemsT=17,v_ids=[],r_ids=[],r_ids1=[],r_ids2=[],resp=[];
    f_iniciar();

    function mayus(e) {
        e.value = e.value.toUpperCase();
    }
    function f_iniciar(){
        var fanum1= [parseInt((Math.random() * 4500) + 1000),parseInt((Math.random() * 4500) + 1000),parseInt((Math.random() * 4500) + 1000)];
        var fanum2= [parseInt((Math.random() * 4500) + 1000),parseInt((Math.random() * 4500) + 1000),parseInt((Math.random() * 4500) + 1000)];
        fanum1=fanum1.sort((a,b)=>a-b);
        fanum2=fanum2.sort((a,b)=>a-b);
        $('#famop1').html(fanum1[2]);
        $('#famop2').html(fanum1[0]+'&nbsp;&nbsp;&nbsp;');
        $('#famop3').html('&nbsp;&nbsp;&nbsp;'+fanum1[1]);
        $('#famop4').html(fanum1[2]+'<b> + </b> <input id="oper1" type="number" style="width: 50px;"><b> = </b> <input id="oper8" type="number" style="width: 60px;">');
        $('#famop5').html('<input id="oper2" type="number" style="width: 50px;"><b> + </b>'+fanum1[1]+'<b> = </b> <input id="oper3" type="number" style="width: 60px;">');
        $('#famop6').html(fanum1[1]+'<b> - </b> <input id="oper4" type="number" style="width: 50px;"><b> = </b> <input id="oper5" type="number" style="width: 50px;">');
        $('#famop7').html(fanum1[2]+'<b> - </b> <input id="oper6" type="number" style="width: 50px;"><b> = </b> <input id="oper7" type="number" style="width: 50px;">');
        $('#famop11').html(fanum2[1]);
        $('#famop12').html(fanum2[0]+'&nbsp;&nbsp;&nbsp;');
        $('#famop13').html('&nbsp;&nbsp;&nbsp;'+fanum2[2]);
        $('#famop14').html('<input id="oper9" type="number" style="width: 50px;"><b> + </b>'+fanum2[0]+'<b> = </b> '+(fanum2[1]+fanum2[0]));
        $('#famop15').html(fanum2[1]+'<b> + </b> <input id="oper10" type="number" style="width: 50px;"><b> = </b> <input id="oper11" type="number" style="width: 60px;">');
        $('#famop16').html('<input id="oper12" type="number" style="width: 50px;"> <b> - </b> <input id="oper13" type="number" style="width: 50px;"><b> = </b> <input id="oper14" type="number" style="width: 60px;">');
        $('#famop17').html('<input id="oper15" type="number" style="width: 50px;"> <b> - </b> <input id="oper16" type="number" style="width: 50px;"><b> = </b> <input id="oper17" type="number" style="width: 60px;">');
        bt_comprobar.addEventListener("click", f_comprobar);
        function f_comprobar(){
            cont++;
            var oper1=$('#oper1').val();
            var oper2=$('#oper2').val();
            var oper3=$('#oper3').val();
            var oper4=$('#oper4').val();
            var oper5=$('#oper5').val();
            var oper6=$('#oper6').val();
            var oper7=$('#oper7').val();
            var oper8=$('#oper8').val();
            if (oper1==fanum1[1] || oper1==fanum1[0]) {
                cor++;
                f_ok($('#oper1'));
                if ((parseInt(oper1)+fanum1[2])==oper8) {
                    cor++;
                    f_ok($('#oper8'));
                }else {
                    inc++;
                    f_no($('#oper8'));    
                }
            }else {
                inc++;
                f_no($('#oper1'));
                if ((fanum1[0]+fanum1[2])==oper8 || (fanum1[1]+fanum1[2])==oper8) {
                    cor++;
                    f_ok($('#oper8'));
                }else {
                    inc++;
                    f_no($('#oper8'));    
                }

            }
            if (oper2==fanum1[2] || oper2==fanum1[0]) {
                cor++;
                f_ok($('#oper2'));
                if ((parseInt(oper2)+fanum1[1])==oper3) {
                    cor++;
                    f_ok($('#oper3'));
                }else {
                    inc++;
                    f_no($('#oper3'));    
                }
            }else {
                inc++;
                f_no($('#oper2'));
                if ((fanum1[0]+fanum1[1])==oper3 || (fanum1[1]+fanum1[2])==oper3) {
                    cor++;
                    f_ok($('#oper3'));
                }else {
                    inc++;
                    f_no($('#oper3'));    
                }

            }
            if (oper4==fanum1[0]) {
                cor++;
                f_ok($('#oper4'));
                if ((fanum1[1]-parseInt(oper4))==oper5) {
                    cor++;
                    f_ok($('#oper5'));
                }else {
                    inc++;
                    f_no($('#oper5'));    
                }
            }else {
                inc++;
                f_no($('#oper4'));
                if ((fanum1[1]-fanum1[0])==oper5) {
                    cor++;
                    f_ok($('#oper5'));
                }else {
                    inc++;
                    f_no($('#oper5'));    
                }

            }
            if (oper6==fanum1[1] || oper6==fanum1[0]) {
                cor++;
                f_ok($('#oper6'));
                if ((fanum1[2]-parseInt(oper6))==oper7) {
                    cor++;
                    f_ok($('#oper7'));
                }else {
                    inc++;
                    f_no($('#oper7'));    
                }
            }else {
                inc++;
                f_no($('#oper6'));
                if ((fanum1[2]-fanum1[1])==oper7 || (fanum1[2]-fanum1[0])==oper7) {
                    cor++;
                    f_ok($('#oper7'));
                }else {
                    inc++;
                    f_no($('#oper7'));    
                }

            }
            var oper9=$('#oper9').val();
            var oper10=$('#oper10').val();
            var oper11=$('#oper11').val();
            var oper12=$('#oper12').val();
            var oper13=$('#oper13').val();
            var oper14=$('#oper14').val();
            var oper15=$('#oper15').val();
            var oper16=$('#oper16').val();
            var oper17=$('#oper17').val();
            if (oper9==fanum2[1]) {
                cor++;
                f_ok($('#oper9'));
                
            }else {
                inc++;
                f_no($('#oper9'));
            }
            if (oper10==fanum2[2]) {
                cor++;
                f_ok($('#oper10'));
                if ((fanum2[1]+parseInt(oper10))==oper11) {
                    cor++;
                    f_ok($('#oper11'));
                }else {
                    inc++;
                    f_no($('#oper11'));    
                }
            }else {
                inc++;
                f_no($('#oper10'));
                if ((fanum2[1]+fanum2[2])==oper11) {
                    cor++;
                    f_ok($('#oper11'));
                }else {
                    inc++;
                    f_no($('#oper11'));    
                }
            }
            if (oper12==fanum2[2] || oper12==fanum2[1]) {
                cor++;
                f_ok($('#oper12'));
                if (oper12==fanum2[1]) {
                    if (oper13==fanum2[0]) {
                        cor++;
                        f_ok($('#oper13'));
                        if ((oper12-oper13)==oper14) {
                            cor++;
                            f_ok($('#oper14'));
                        }else {
                            inc++;
                            f_no($('#oper14'));
                        }
                    }else {
                        inc++;
                        f_no($('#oper13'));
                        if ((fanum2[1]-fanum2[0])==oper14) {
                            cor++;
                            f_ok($('#oper14'));
                        }else {
                            inc++;
                            f_no($('#oper14'));
                        }
                    }
                }else {
                    if (oper13==fanum2[0] || oper13==fanum2[1]) {
                        cor++;
                        f_ok($('#oper13'));
                        if ((oper12-oper13)==oper14) {
                            cor++;
                            f_ok($('#oper14'));
                        }else {
                            inc++;
                            f_no($('#oper14'));
                        }
                    }else {
                        inc++;
                        f_no($('#oper13'));
                        if ((fanum2[2]-fanum2[1])==oper14 || (fanum2[2]-fanum2[0])==oper14) {
                            cor++;
                            f_ok($('#oper14'));
                        }else {
                            inc++;
                            f_no($('#oper14'));
                        }
                    }
                }
            }else {
                inc++;
                f_no($('#oper12'));
                f_no($('#oper13'));
                inc++;
                if ((fanum2[2]-fanum2[1])==oper14 || (fanum2[2]-fanum2[0])==oper14 || (fanum2[1]-fanum2[0])==oper14) {
                    cor++;
                    f_ok($('#oper14'));
                }else {
                    inc++;
                    f_no($('#oper14'));
                }
            }
            if (oper15==fanum2[2] || oper15==fanum2[1]) {
                cor++;
                f_ok($('#oper15'));
                if (oper15==fanum2[1]) {
                    if (oper16==fanum2[0]) {
                        cor++;
                        f_ok($('#oper16'));
                        if ((oper15-oper16)==oper17) {
                            cor++;
                            f_ok($('#oper17'));
                        }else {
                            inc++;
                            f_no($('#oper17'));
                        }
                    }else {
                        inc++;
                        f_no($('#oper16'));
                        if ((fanum2[1]-fanum2[0])==oper17) {
                            cor++;
                            f_ok($('#oper17'));
                        }else {
                            inc++;
                            f_no($('#oper17'));
                        }
                    }
                }else {
                    if (oper16==fanum2[0] || oper16==fanum2[1]) {
                        cor++;
                        f_ok($('#oper16'));
                        if ((oper15-oper16)==oper17) {
                            cor++;
                            f_ok($('#oper17'));
                        }else {
                            inc++;
                            f_no($('#oper17'));
                        }
                    }else {
                        inc++;
                        f_no($('#oper16'));
                        if ((fanum2[2]-fanum2[1])==oper15 || (fanum2[2]-fanum2[0])==oper17) {
                            cor++;
                            f_ok($('#oper17'));
                        }else {
                            inc++;
                            f_no($('#oper17'));
                        }
                    }
                }
            }else {
                inc++;
                f_no($('#oper15'));
                inc++;
                f_no($('#oper16'));
                if ((fanum2[2]-fanum2[1])==oper17 || (fanum2[2]-fanum2[0])==oper17 || (fanum2[1]-fanum2[0])==oper17) {
                    cor++;
                    f_ok($('#oper17'));
                }else {
                    inc++;
                    f_no($('#oper17'));
                }
            }
            Calculo_nota()
            
        }
        
    }