
function XMLDistortionValidator(e) {

    var keycode;

    if (window.event) keycode = window.event.keyCode;
    else if (e) keycode = e.which;
    else return true;


    switch (keycode) {

        case 33: // !
        case 34: // "
        case 35: // #
        case 38: // &
        case 39: // '
        case 44: // '
        case 47: // /
        case 60: // <
        case 61: // =
        case 62: // >
        case 64: // @
        case 94: // ^
        case 96: // '
            alert(characterValidationFail);
            return false;

    }

    if (e == '‘' || e == '’') {
        alert(characterValidationFail);
        return false;
    }

    return true;
}

function ValidateAlpha(e) {

    var keycode;
    var keyvalue;

    if (window.event) keycode = window.event.keyCode;
    else if (e) keycode = e.which;
    else return true;

    if (!isNavigation(e)) {
        keyvalue = String.fromCharCode(keycode);

        var regexp = new RegExp("^([a-zA-Z IýÐðÜüÝiÞþÇçÖö]*)$");
        if (!regexp.test(keyvalue)) {
            return false;
        }
    }
    return true;
}

function ValidateNumeric(e) {

    var keycode;
    var keyvalue;

    if (window.event) keycode = window.event.keyCode;
    else if (e) keycode = e.which;
    else return true;

    if (!isNavigation(e)) {
        keyvalue = String.fromCharCode(keycode);

        var regexp = new RegExp("^([0-9]*)$");
        if (!regexp.test(keyvalue)) {
            return false;
        }
    }
    return true;
}

function ValidateAlphaNumeric(e) {

    var keycode;
    var keyvalue;

    if (window.event) keycode = window.event.keyCode;
    else if (e) keycode = e.which;
    else return true;

    if (!isNavigation(e)) {
        keyvalue = String.fromCharCode(keycode);

        var regexp = new RegExp("^([a-zA-Z IýÐðÜüÝiÞþÇçÖö0-9]*)$");
        if (!regexp.test(keyvalue)) {
            return false;
        }
    }
    return true;
}

function IsAlphaNumericWithAlert(evnt) {
    var validChars = /^[a-zA-Z0-9çÇðÐýIiÝöÖþÞüÜ ]$/;
    var keyboardChars = /[\x00\x08\x0D]/;
    var keynum;

    if (window.event) // IE
    {
        keynum = evnt.keyCode;
    }
    else if (evnt.which) // Netscape/Firefox/Opera
    {
        keynum = evnt.which;
    }
    var keychar = String.fromCharCode(keynum);

    return IsValidCharKeyCode(keychar, validChars, keyboardChars, true);
}

function IsAlphaNumericWithoutAlert(evnt) {
    var validChars = /^[a-zA-Z0-9çÇðÐýIiÝöÖþÞüÜ ]$/;
    var keyboardChars = /[\x00\x08\x0D]/;
    var keynum;

    if (window.event) // IE
    {
        keynum = evnt.keyCode;
    }
    else if (evnt.which) // Netscape/Firefox/Opera
    {
        keynum = evnt.which;
    }
    var keychar = String.fromCharCode(keynum);

    return IsValidCharKeyCode(keychar, validChars, keyboardChars, false);
}

function ValidateUpperAlphaAndNumericWithoutAlert() {
    var validChars = /^[A-Z0-9]$/;
    var keyboardChars = /[\x00\x08\x0D]/;
    var keynum;

    if (window.event) // IE
    {
        keynum = event.keyCode;
    }
    else if (event.which) // Netscape/Firefox/Opera
    {
        keynum = event.which;
    }
    var keychar = String.fromCharCode(keynum);

    return IsValidCharKeyCode(keychar, validChars, keyboardChars, false);
}

function IsValidCharKeyCode(keychar, validChars, keyboardChars, alertFlag) {
    var IsControlKeyboardChars = false;

    if (keyboardChars == null) {
        keyboardChars = "";
    }

    if (keyboardChars != null && keyboardChars != "") {
        IsControlKeyboardChars = true;
    }

    if (validChars.test(keychar) || (IsControlKeyboardChars == true && keyboardChars.test(keychar))) {
        return true;
    }
    else {
        if (alertFlag) {
            alert(alfa_msgBuBolumSayiHarflerdenOlusmali);
        }
        return false;
    }
}

function IsValidAlphaNumericCount(ItemValue, MinAlphaCount, MinNumericCount) {
    var validNumericChars = /^[0-9]$/; //çÇðÐýÝöÖþÞüÜ
    var validAlphaChars = /^[a-zA-ZçÇðÐýIiÝöÖþÞüÜ]$/; //çÇðÐýÝöÖþÞüÜ

    return ValidMinAlphaNumericCount(ItemValue, MinAlphaCount, MinNumericCount, validNumericChars, validAlphaChars);
}

function IsValidMinAlphaNumericNotTurkishCount(ItemValue, MinAlphaCount, MinNumericCount) {
    var validNumericChars = /^[0-9]$/;
    var validAlphaChars = /^[a-zA-Z]$/;

    return ValidMinAlphaNumericCount(ItemValue, MinAlphaCount, MinNumericCount, validNumericChars, validAlphaChars);
}

function ValidMinAlphaNumericCount(ItemValue, MinAlphaCount, MinNumericCount, validNumericChars, validAlphaChars) {
    var tempAlphaCount = 0;
    var tempNumericCount = 0;

    var f = String(ItemValue);
    for (i = 0; i < (f.length); i++) {
        if (IsValidCharKeyCode(f.charAt(i), validAlphaChars, null, false) == true) {
            tempAlphaCount = tempAlphaCount + 1;
        }

        if (IsValidCharKeyCode(f.charAt(i), validNumericChars, null, false) == true) {
            tempNumericCount = tempNumericCount + 1;
        }

        if (tempAlphaCount >= MinAlphaCount && tempNumericCount >= MinNumericCount) {
            return true;
        }
    }

    if (tempAlphaCount >= MinAlphaCount && tempNumericCount >= MinNumericCount) {
        return true;
    }
    else {
        return false;
    }
}

function IsContainSpace(ItemValue) {
    var validChars = /^[ ]$/;

    var f = String(ItemValue);
    for (i = 0; i < (f.length); i++) {
        if (IsValidCharKeyCode(f.charAt(i), validChars, null, false) == true) {
            return true;
        }
    }

    return false;
}

function ValidatePunctuation(e) {

    var keycode;
    var keyvalue;

    if (window.event) keycode = window.event.keyCode;
    else if (e) keycode = e.which;
    else return true;

    if (!isNavigation(e)) {
        keyvalue = String.fromCharCode(keycode);

        var regexp = new RegExp("^([.:/-]*)$");
        if (!regexp.test(keyvalue)) {
            return false;
        }
    }
    return true;
}

function ValidateDot(e) {

    var keycode;
    var keyvalue;

    if (window.event) keycode = window.event.keyCode;
    else if (e) keycode = e.which;
    else return true;

    if (!isNavigation(e)) {
        keyvalue = String.fromCharCode(keycode);

        var regexp = new RegExp("^([.]*)$");
        if (!regexp.test(keyvalue)) {
            return false;
        }
    }
    return true;
}

function ValidateAddress(e) {
    if (!ValidateAlphaNumeric(e) && !ValidatePunctuation(e))
        { return false; }
    return true;
}

function ValidateCity(e) {
    if (!ValidateAlpha(e) && !ValidateDot(e))
    { return false; }
    return true;
}

function ValidateDistrict(e) {
    if (!ValidateAlphaNumeric(e) && !ValidateDot(e))
    { return false; }
    return true;

}

function ValidatePostalCode(e) {
    if (!ValidateNumeric(e)) 
        { return false; }
    return true;

}


function NumericValidatorWithAlert(e, alertMessage) {
    if (!(NumericValidator(e))) {
        alert(alertMessage);
        return false;
    }
    else {
        return true;
    }
}
function NumericValidatorWithDefaultAlert(e) {
    return NumericValidatorWithAlert(e, inputValidator_MsgNumericError);
}

function NumericValidator(e) {
    var keycode;

    if (window.event) keycode = window.event.keyCode;
    else if (e) keycode = e.which;
    else return true;

    if ((keycode >= 0 && keycode <= 31) ||
	    (keycode >= 48 && keycode <= 57) ||
	    (keycode == 127)) {
        return true;
    }
    else {
        return false;
    }

}

function isTurkishSpesificLetter(e) {
    if (e.keyCode) keycode = e.keyCode
    else keycode = e.which;
    switch (keycode) {
        case 305: //ý
        case 304: //Ý
        case 246: //ö
        case 214: //Ö
        case 287: //ð
        case 286: //Ð
        case 252: //ü
        case 220: //Ü
        case 351: //þ
        case 350: //Þ
        case 231: //ç
        case 199: //Ç
            return true;
            break;
    }
    return false;
}
function isLetterStrict(e) {
    if (e.keyCode) keycode = e.keyCode
    else keycode = e.which;
    if (isNavigation(e)) {
        return true;
    }
    if (keycode >= 65 && keycode <= 90) {
        return true;
    }
    else if (keycode >= 97 && keycode <= 122) {
        return true;
    }
    else if (isTurkishSpesificLetter(e)) {
        return true;
    }
    else if (keycode == 32) {
        return true;
    }
    return false;
}

function ValidateDropDownSelected(DropDown, ErrorMessage) {
    if (DropDown) {
        if (DropDown.value.substring(0, 2) == "-1") {
            alert(ErrorMessage);
            return false;
        }
    }
    return true;

}
function isHesDVMISelected(DropDown) {
    if (DropDown) {
        if (DropDown.value.substring(0, 1) == "D") {
            return true;
        }
    }
    return false;
}

var borderMarkControls = new Array();
function BorderMark(element) {

    if (typeof (eval(element)) == "undefined") {
        return;
    }
    eval(element).style.border = "2px solid #677eb2";
    for (var i = 0; ; i++) {
        if (borderMarkControls[i] == undefined) {
            borderMarkControls[i] = element;
            break;
        }
    }
    setTimeout("BorderBack()", 1000);
}
function BorderBack() {
    for (var i = 0; ; i++) {
        if (borderMarkControls[i] != undefined) {
            TakeBorderBack(borderMarkControls[i]);
            borderMarkControls[i] = undefined;
            break;
        }
    }
}
function TakeBorderBack(element) {
    if ((eval(element).type == "radio") || (eval(element).type == "checkbox")) {
        eval(element).style.borderWidth = "";
        eval(element).style.borderColor = "";
        eval(element).style.borderStyle = "";
        return;
    }
    else {
        eval(element).style.border = "1px solid #DCDCDC";
        return;
    }
}
function CompareDates(date1, date2, dateSeperator) {
    dt1 = getDateObject(date1, dateSeperator);
    dt2 = getDateObject(date2, dateSeperator);

    if (dt1 > dt2) {
        return 1;
    }
    else if (dt1 < dt2) {
        return 2;
    }
    else {
        return 0;

    }
}

function ValidateEMail(Mailelement) {
    TurkishCharacters = new Array("Ç", "ç", "Þ", "þ", "Ý", "ý", "Ö", "ö", "Ü", "ü", "Ð", "ð");
    var MailText = Mailelement.value;
    if (MailText.indexOf("@") == -1 || MailText.indexOf(".") == -1) {
        alert(EMail_Hatali);
        Mailelement.focus();
        return false;
    }
    if (MailText.lastIndexOf(".") < MailText.indexOf("@")) {
        alert(EMail_Hatali);
        Mailelement.focus();
        return false;
    }

    for (i = 0; i < TurkishCharacters.length; i++) {
        if (MailText.indexOf(TurkishCharacters[i]) != -1) {
            alert(EMail_Hatali);
            Mailelement.focus();
            return false;
        }
    }
    return true;
}


function ValidateRadioSelected(controlID, ErrorMessage) {
    if (controlID == "_ctl0_EFTgiris_chkEkHesap") {
        return true;
    }
    var i = 0, obj;
    for (i = 0, obj = eval("document.getElementById('" + controlID + "_" + i + "')"); obj != null; i++, obj = eval("document.getElementById('" + controlID + "_" + i + "')")) {
        if (obj.checked) {
            return true;
        }
    }
    alert(ErrorMessage + ".");
    for (i = 0, obj = eval("document.getElementById('" + controlID + "_" + i + "')"); obj != null; i++, obj = eval("document.getElementById('" + controlID + "_" + i + "')")) {
        BorderMark(obj);
    }
    return false;
}



function ValidateStringForXMLDistortion(txt) {

    if (txt.indexOf('&') == -1 &&
        txt.indexOf('<') == -1 &&
        txt.indexOf('>') == -1 &&
        txt.indexOf('!') == -1 &&
        txt.indexOf('#') == -1 &&
        txt.indexOf("'") == -1 &&
        txt.indexOf('=') == -1 &&
        txt.indexOf('@') == -1 &&
        txt.indexOf(':') == -1 &&
        txt.indexOf('/') == -1 &&
        txt.indexOf('^') == -1 &&
        txt.indexOf('’') == -1 &&
        txt.indexOf('‘') == -1) {
        return true;
    }
    else {
        return false;
    }

}
function IsAlphaNumericWithAlertForLogon(evnt) {
    var validChars = /^[a-zA-Z0-9çÇðÐýIiÝöÖþÞüÜ ]$/;
    var keyboardChars = /[\x00\x08\x0D]/;
    var keynum;
    if (window.event) // IE
    {
        keynum = evnt.keyCode;
    }
    else if (evnt.which) // Netscape/Firefox/Opera
    {
        keynum = evnt.which;
    }
    var keychar = String.fromCharCode(keynum);
    if (!IsValidCharKeyCode(keychar, validChars, keyboardChars, true)) {
        showInputBottomErrorMessage($('#_ctl0:welcomeMessage'), alfa_msgBuBolumSayiHarflerdenOlusmali);
        return false;
    }
    else {
        return true;
    }
}
function IsValidCharKeyCode(keychar, validChars, keyboardChars, alertFlag) {
    var IsControlKeyboardChars = false;
    if (keyboardChars == null) {
        keyboardChars = "";
    }
    if (keyboardChars != null && keyboardChars != "") {
        IsControlKeyboardChars = true;
    }
    if (validChars.test(keychar) || (IsControlKeyboardChars == true && keyboardChars.test(keychar))) {
        return true;
    }
    else {
        if (alertFlag) {
            // alert(alfa_msgBuBolumSayiHarflerdenOlusmali);
        }
        return false;
    }
}

function IsNumericVal(val) {
    var checkStr = "0123456789";
    for (i = 0; i < (val.length); i++) {
        if (checkStr.indexOf(val.charAt(i)) == -1) {
            return false;
        }
    }
    return true;
} //Control Is Numeric Or Not

function isValidEFTName(val) {
    var validChars = /^[a-zA-Z0-9çÇðÐýIiÝöÖþÞüÜ ]$/;
    var keycode;
    if (validChars.test(val.key)) {
        return true;
    }
    else{
        if (window.event)
            keycode = window.event.keyCode;
        else if (e)
            keycode = e.which;
        if ((keycode > 31 && keycode < 123 && keycode != 33 && keycode != 34 && keycode != 35 && keycode != 36 && keycode != 37 && keycode != 38 && keycode != 39 && keycode != 59 && keycode != 60 && keycode != 62 && keycode != 91 && keycode != 92 && keycode != 93 && keycode != 96)) {
            return true;
        }
        else {
            return false;
        }
    }
}
