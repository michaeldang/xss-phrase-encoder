function letterToCharCode(letter) {
    return letter.charCodeAt(0);
}

function letterToHTML(letter) {
    var charCode = letterToCharCode(letter);
    var numZeros = 5 - charCode.toString().length;
    var charCodeWithZeros =  addZerosToPhrase(numZeros, charCode);
    var htmlEncoding = "&#" + charCodeWithZeros + ";";
    return htmlEncoding;
}

function letterToHex(letter) {
    var hexCode = letterToCharCode(letter).toString(16);
    var numZeros = 4 - hexCode.length;
    var hexCodeWithZeros = addZerosToPhrase(numZeros, hexCode);
    var hexEncoding = "\\u" + hexCodeWithZeros;
    return hexEncoding;
}

function addZerosToPhrase(numZeros, phrase) {
    var newPhrase = phrase + ""; 
    for (; numZeros > 0; numZeros--) {
        newPhrase = "0" + newPhrase;
    }
    return newPhrase;
}