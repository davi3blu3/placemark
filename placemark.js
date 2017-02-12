var openSpan = '<span class="placemark">';
var closeSpan = '</span>';

function captureWord(e) {
    var s = window.getSelection();
    var range = s.getRangeAt(0);
    var node = s.anchorNode;
    while (range.toString().indexOf(' ') != 0) {
        range.setStart(node, (range.startOffset - 1));
    }

    range.setStart(node, range.startOffset + 1);
    
    do {
        range.setEnd(node, range.endOffset + 1);
    } while (range.toString().indexOf(' ') == -1 && range.toString().trim() != '' && range.endOffset < node.length);
    
    var str = range.toString().trim();
    var newhtml = e.target.innerHTML.replace(str, addSpan(str));
    e.target.innerHTML = newhtml;
}

document.addEventListener('click', function(e){
    var wordAndElement = captureWord(e);
    // wrapWords(selectedWord);
    console.log(wordAndElement);
})

function addSpan(str) {
    console.log(openSpan + str + closeSpan);
    return openSpan + str + closeSpan;
}

function removeSpan(str) {
    var str1 = str.replace(openSpan, "");
    var str2 = str1.replace(closeSpan, "");
    return str2;
}

