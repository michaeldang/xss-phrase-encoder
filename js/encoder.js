function letterToDecimalCode(letter) {
    return letter.charCodeAt(0);
}

function letterToHTML(letter) {
    var charCode = letterToDecimalCode(letter);
    var numZeros = 5 - charCode.toString().length;
    var charCodeWithZeros =  addZerosToPhrase(numZeros, charCode);
    var htmlEncoding = "&#" + charCodeWithZeros + ";";
    return htmlEncoding;
}

function letterToUri(letter) {
    return encodeURI(letter);
}

function letterToUHex(letter) {
    var hexCode = letterToDecimalCode(letter).toString(16);
    var numZeros = 4 - hexCode.length;
    var hexCodeWithZeros = addZerosToPhrase(numZeros, hexCode);
    var hexEncoding = "\\u" + hexCodeWithZeros;
    return hexEncoding;
}

function letterToXHex(letter) {
    var hexCode = letterToDecimalCode(letter).toString(16);
    var hexEncoding = "\\x" + hexCode;
    return hexEncoding; 
}

function phraseToBase64(phrase) {
    return btoa(phrase);
}

function addZerosToPhrase(numZeros, phrase) {
    var newPhrase = phrase + ""; 
    for (; numZeros > 0; numZeros--) {
        newPhrase = "0" + newPhrase;
    }
    return newPhrase;
}