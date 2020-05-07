$('.form-js-label').find('input').on('input', function (e) {  $(e.currentTarget).attr('data-empty', !e.currentTarget.value);});


/* PONER ESTE CODIGO PARA CREAR LOS INPUT Y ELE FECTO EN EL HTML
<form class="form-label form-css-label">
    <fieldset>
        <input id="oracion" name="firstName" type="text" autocomplete="off" required />
        <label for="oracion">Oración</label>
    </fieldset>
    <fieldset>
        <input id="lastName" name="lastName" type="text" autocomplete="off" required />
        <label for="lastName">Last Name</label>
    </fieldset>
</form>
*/
