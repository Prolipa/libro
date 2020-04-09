$('.enc').click(function() {
    //var cont = 0;
    /*if () {
    	$(this).removeClass('encierra')
    }else{
    	$(this).addClass('encierra')
    }*/
    if ($(this).hasClass('vacio')) {
        $(this).removeClass('vacio')
        $(this).addClass('encierra')
    } else if ($(this).hasClass('encierra')) {
        $(this).removeClass('encierra')
        $(this).addClass('encierra1')
    } else if ($(this).hasClass('encierra1')) {
        $(this).removeClass('encierra1')
        $(this).addClass('encierra2')
    } else {
        $(this).removeClass('encierra2')
        $(this).addClass('vacio')
    }

    /*if ($(this).hasClass('encierra')) {
    	$(this).removeClass('encierra')
    	$(this).addClass('subrayar')
    }else if ($(this).hasClass('subrayar')) {
    	$(this).removeClass('subrayar')
    	$(this).addClass('pintar')

    }else {
    	$(this).removeClass('pintar')
    	$(this).addClass('encierra')

    }*/

})

