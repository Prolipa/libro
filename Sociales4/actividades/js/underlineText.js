function underlinetext(elementUnderlined) {
    var selectedText = "";
    var currentText =  elementUnderlined.textContent;
    var res;
    if (window.getSelection) {
        selectedText = window.getSelection().toString();
    }
    else if (document.getSelection) {
        selectedText = document.getSelection().toString();
    } else if (document.selection) {
        selectedText = document.selection.createRange().text;
    }
    elementUnderlined.textContent = '';
    res = currentText.replace(selectedText,'<span class="underline">'+selectedText+'</span>');
    elementUnderlined.innerHTML = res;
}