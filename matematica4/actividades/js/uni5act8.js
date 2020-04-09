    var calificacion = 10,
        cor = 0,
        inc = 0,
        cont = 0,
        ejer = 1,
        itemsT = 10;
    f_iniciar();
    var claseAnimada = 'animate bounceIn';

    function mayus(e) {
        e.value = e.value.toLowerCase();
    }

    function f_iniciar() {
        var pal1 = [
            '<span class="bg_palabra drag1">21 – 13 + 1</span>',
            '<span class="bg_palabra drag1">30 x 8 + 12</span>',
            '<span class="bg_palabra drag1">50 ÷ 5 – 10</span>',
            '<span class="bg_palabra drag1">25 + 5 – 10</span>',
            '<span class="bg_palabra drag1">32 – 16 +12</span>',
        ];
        var pal2 = [
            '<span class="bg_palabra drag2">0</span>',
            '<span class="bg_palabra drag2">20</span>',
            '<span class="bg_palabra drag2">28</span>',
            '<span class="bg_palabra drag2">9</span>',
            '<span class="bg_palabra drag2">252</span>',
        ];
        var pal3 = [
            '<b>25 + 25 ÷ 5 – 20 ÷ 2</b>',
            '<b>(25 + 25) ÷ 5 – (20 ÷ 2)</b>',
            '<b>(32 – 2) x 8 + 6 x 2</b>',
            '<b>32 – 2 x 8 + ( 6 x 2)</b>',
            '<b>84 ÷ 4 – 13 + 2 ÷ 2</b>',
        ];
        pal1.sort(f_randomico);
        pal2.sort(f_randomico);
        var p2vec1 = ["25 + 5 – 10", "50 ÷ 5 – 10", "30 x 8 + 12", "32 – 16 +12", "21 – 13 + 1"];
        var p2vec10 = ["20", "0", "252", "28", "9"];
        var p2aux2 = [];
        var p2aux20 = [];
        $(".textos").append(pal1);
        $(".textos1").append(pal2);
        var myArray2 = ["0", "1", "2", "3", "4"];
        var i, j, k;
        for (i = myArray2.length; i; i--) {
            j = Math.floor(Math.random() * i);
            k = myArray2[i - 1];
            myArray2[i - 1] = myArray2[j];
            myArray2[j] = k;
        }
        //aleatorio literal 1
        for (var i = 1; i <= 5; i++) {
            var c1 = myArray2[i - 1];
            $(".p1cim1" + i).html(pal3[c1]);
            p2aux2.push(p2vec1[c1]);
            p2aux20.push(p2vec10[c1]);
        }
        $(".drag1").draggable({
            revert: "invalid",
            zIndex: 5,
            containment: ".actividad1",
            scroll: false
        });
        $(".drag2").draggable({
            revert: "invalid",
            zIndex: 5,
            containment: ".actividad2",
            scroll: false
        });

        $(".drop1").droppable({
            accept: ".drag1",
            drop: function(e, ui) {
                $(ui.draggable).removeClass("drag1");
                $(ui.draggable).removeClass("bg_palabra");
                ui.draggable.attr("style", "");
                $(this).append(ui.draggable);
            }
        });
        $(".drop2").droppable({
            accept: ".drag2",
            drop: function(e, ui) {
                $(ui.draggable).removeClass("drag2");
                $(ui.draggable).removeClass("bg_palabra");
                ui.draggable.attr("style", "");
                $(this).append(ui.draggable);
            }
        });
        bt_comprobar.addEventListener("click", f_comprobar);

        function f_comprobar() {
            cont++;
            AgregaClase(".nota", claseAnimada);
            QuitaClase(".actividad", claseAnimada);
            bt_comprobar.removeEventListener("click", f_comprobar);
            var p1im1 = $(".p1im1 span").text();
            var p1cont1 = 0;
            if (p1im1 == p2aux2[0]) {
                p1cont1++;
                f_ok($(".p1im1"));
            } else {
                f_no($(".p1im1"));
            }
            var p1im2 = $(".p1im2 span").text();
            if (p1im2 == p2aux2[1]) {
                p1cont1++;
                f_ok($(".p1im2"));
            } else {
                f_no($(".p1im2"));
            }
            var p1im3 = $(".p1im3 span").text();
            if (p1im3 == p2aux2[2]) {
                p1cont1++;
                f_ok($(".p1im3"));
            } else {
                f_no($(".p1im3"));
            }
            var p1im4 = $(".p1im4 span").text();
            if (p1im4 == p2aux2[3]) {
                p1cont1++;
                f_ok($(".p1im4"));
            } else {
                f_no($(".p1im4"));
            }
            var p1im5 = $(".p1im5 span").text();
            if (p1im5 == p2aux2[4]) {
                p1cont1++;
                f_ok($(".p1im5"));
            } else {
                f_no($(".p1im5"));
            }
            var p1im6 = $(".p1im6 span").text();
            if (p1im6 == p2aux20[0]) {
                p1cont1++;
                f_ok($(".p1im6"));
            } else {
                f_no($(".p1im6"));
            }
            var p1im7 = $(".p1im7 span").text();
            if (p1im7 == p2aux20[1]) {
                p1cont1++;
                f_ok($(".p1im7"));
            } else {
                f_no($(".p1im7"));
            }
            var p1im8 = $(".p1im8 span").text();
            if (p1im8 == p2aux20[2]) {
                p1cont1++;
                f_ok($(".p1im8"));
            } else {
                f_no($(".p1im8"));
            }
            var p1im9 = $(".p1im9 span").text();
            if (p1im9 == p2aux20[3]) {
                p1cont1++;
                f_ok($(".p1im9"));
            } else {
                f_no($(".p1im9"));
            }
            var p1im10 = $(".p1im10 span").text();
            if (p1im10 == p2aux20[4]) {
                p1cont1++;
                f_ok($(".p1im10"));
            } else {
                f_no($(".p1im10"));
            }
            var result1 = (p1cont1 * 4) / 10;
            cor = cor + result1;
            inc = inc + (4 - result1);
            $('#pre1a').val(result1.toFixed(2));
            $('#pre1a').css('display', '');
            var p3vec1=[60,3,60,140,2,60,180,140,2,240,140,2,100,2,50,50];
            var p3cont1=0;
            for (var i = 0; i < p3vec1.length; i++) {
                var p3res1=$('#p2dcon'+(i+1)).val();
                if (p3res1==p3vec1[i]) {
                    p3cont1++;
                    f_ok($('#p2dcon'+(i+1)));
                }else{
                    p3cont1;
                    f_no($('#p2dcon'+(i+1)));
                }
            }
            var result2 = (p3cont1 * 3) / 16;
            cor = cor + result2;
            inc = inc + (3 - result2);
            $('#pre2a').val(result2.toFixed(2));
            $('#pre2a').css('display', '');
            var p4vec2=[12,30,200,8,360,200,8,160,8,20,20];
            var p4cont1=0;
            for (var i = 0; i < p4vec2.length; i++) {
                var p4res2=$('#p21dcon'+(i+1)).val();
                if (p4res2==p4vec2[i]) {
                    p4cont1++;
                    f_ok($('#p21dcon'+(i+1)));
                }else{
                    p4cont1;
                    f_no($('#p21dcon'+(i+1)));
                }
            }
            var result3 = (p4cont1 * 3) / 11;
            cor = cor + result3;
            inc = inc + (3 - result3);
            $('#pre3a').val(result3.toFixed(2));
            $('#pre3a').css('display', '');
            Calculo_nota()
        }

    }