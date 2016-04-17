function letterToCharCode(letter) {
    return letter.charCodeAt(0);
}

function letterToHTML(letter) {
    var charCode = letterToCharCode(letter);
    var numZeros = 5 - charCode.toString().length;
    var charCodeWithZeros =  addZerosToPhrase(numZeros, charCode);
    var decimalEncoding = "&#" + charCodeWithZeros + ";";
    return decimalEncoding;
}

function addZerosToPhrase(numZeros, phrase) {
    var newPhrase = phrase + ""; 
    for (; numZeros > 0; numZeros--) {
        newPhrase = "0" + newPhrase;
    }
    return newPhrase;
}