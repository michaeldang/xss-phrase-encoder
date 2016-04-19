var charCodeArea = "charCodeEncodingArea";
var htmlEncodingArea = "htmlEncodingArea";
var uriEncodingArea = "uriEncodingArea";
var hexUEncodingArea = "hexUEncodingArea";
var hexXEncodingArea = "hexXEncodingArea";
var jsFuckEncodingArea = "jsFuckEncodingArea";
var base64EncodingArea = "base64EncodingArea";

$(document).ready(function () {
    setFieldsToReadOnly();

    $('#originalText').on('input', function () {
        var text = document.getElementById("originalText").value;
        alterText(text);
    });

    copyValue();
});

function setFieldsToReadOnly() {
    $("#" + charCodeArea).prop("readonly", true);
    $("#" + htmlEncodingArea).prop("readonly", true);
    $("#" + uriEncodingArea).prop("readonly", true);
    $("#" + hexUEncodingArea).prop("readonly", true);
    $("#" + hexXEncodingArea).prop("readonly", true);
    $("#" + base64EncodingArea).prop("readonly", true);
}

function copyValue() {
    $("textarea[id*='EncodingArea']").click(function () {
        var fullId = $(this).attr("id");
        var shortId = fullId.match(/.+?(?=EncodingArea)/);

        var encodingField = document.getElementById(fullId);
        encodingField.select();

        try {
            var copySuccess = document.execCommand('copy');
            Materialize.toast(shortId + " value copied to clickboard", 2000);

        } catch (error) {
            Materialize.toast("Oops, there was an issue copying " + shortId, 2000);
        }

        encodingField.blur();
    });
}

function alterText(text) {
    var letters = text.split('');
    var charCodeText = buildCharCodeEncodedPhrase(letters);
    var htmlText = buildHtmlEncodedPhrase(letters);
    var uriText = buildUriEncodedPhrase(letters);
    var uhexText = buildUHexEncodedPhrase(letters);
    var xhexText = buildXHexEncodedPhrase(letters);
    var jsFuckText = buildJsFuckPhrase(text);
    var base64Text = buildBase64Phrase(text);

    setFieldValToPhrase(charCodeArea, charCodeText);
    setFieldValToPhrase(htmlEncodingArea, htmlText);
    setFieldValToPhrase(uriEncodingArea, uriText);
    setFieldValToPhrase(hexUEncodingArea, uhexText);
    setFieldValToPhrase(hexXEncodingArea, xhexText);
    setFieldValToPhrase(jsFuckEncodingArea, jsFuckText);
    setFieldValToPhrase(base64EncodingArea, base64Text);
}

function setFieldValToPhrase(fieldName, phrase) {
    var field = document.getElementById(fieldName);
    field.value = phrase;
    $("#" + fieldName).trigger("autoresize");
}

function buildCharCodeEncodedPhrase(letters) {
    var newPhrase = "";
    if (letters.length > 0) {
        newPhrase = letterToDecimalCode(letters[0]);
        for (var index = 1; index < letters.length; index++) {
            newPhrase = newPhrase + "," + letterToDecimalCode(letters[index]);
        }
    }
    return newPhrase;
}

function buildHtmlEncodedPhrase(letters) {
    var newPhrase = "";
    letters.forEach(function (letter) {
        newPhrase = newPhrase + letterToHTML(letter);
    }, this);
    return newPhrase;
}

function buildUriEncodedPhrase(letters) {
    var newPhrase = "";
    letters.forEach(function (letter) {
        newPhrase = newPhrase + letterToUri(letter);
    }, this);
    return newPhrase;
}

function buildUHexEncodedPhrase(letters) {
    var newPhrase = "";
    letters.forEach(function (letter) {
        newPhrase = newPhrase + letterToUHex(letter);
    }, this);
    return newPhrase;
}

function buildXHexEncodedPhrase(letters) {
    var newPhrase = "";
    letters.forEach(function (letter) {
        newPhrase = newPhrase + letterToXHex(letter);
    }, this);
    return newPhrase;
}

function buildJsFuckPhrase(text) {
    return JSFuck.encode(text, true);
}

function buildBase64Phrase(text) {
    return phraseToBase64(text);
}