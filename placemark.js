var openSpan = '<span class="placemark">';
var closeSpan = '</span>';

function getWordAndIndex(range, node) {

    // count back chars until you reach whitespace or beginning of element, set range start
    while (range.toString().indexOf(' ') != 0 && range.startOffset != 0) {
        range.setStart(node, (range.startOffset - 1));        
    }

    // remove leading space if not first word in element
    if (range.startOffset != 0) range.setStart(node, range.startOffset + 1);
    
    // count forward chars until you reach whitespace, set range end
    do {
        range.setEnd(node, range.endOffset + 1);
    } while (range.toString().indexOf(' ') == -1 && range.toString().trim() != '' && range.endOffset < node.length);
    
    var str = range.toString().trim();
    return [str, range.startOffset];
}

function handleClick(e) {
    // capture click location
    var s = window.getSelection();
    var range = s.getRangeAt(0);
    var node = s.anchorNode;

    var wordAndIndex = getWordAndIndex(range, node);
    console.log(wordAndIndex[0]);
    console.log(wordAndIndex[1]);

    // getStringIndex(range, node);

    // var newhtml = e.target.innerHTML.replace(str, addSpan(str));
    // e.target.innerHTML = newhtml;
}

document.addEventListener('click', function(e){
    var wordAndElement = handleClick(e);
})

function addSpan(str) {
    // console.log(openSpan + str + closeSpan);
    return openSpan + str + closeSpan;
}

function removeSpan(str) {
    var str1 = str.replace(openSpan, "");
    var str2 = str1.replace(closeSpan, "");
    return str2;
}

