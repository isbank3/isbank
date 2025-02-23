function init() {
    var x;
    if (document.forms[0].JSifreText) {
        x = document.forms[0].JSifreText;
        //JagEdit te onkeypress yok submitte kontrol et.
    }
    else {

        if (document.forms[0].SifreText) {
            x = document.forms[0].SifreText;
            x.onkeypress = numeric;
        }
        // if (document.forms[0].YeniSifreText)
        //	document.forms[0].YeniSifreText.onkeypress = numeric;
        //if (document.forms[0].YeniSifreTekrarText)
        //	document.forms[0].YeniSifreTekrarText.onkeypress = numeric;
        if (document.forms[0].YeniTelSifreText)
            document.forms[0].YeniTelSifreText.onkeypress = numeric;
        if (document.forms[0].YeniTelSifreTekrarText)
            document.forms[0].YeniTelSifreTekrarText.onkeypress = numeric;
    }
} 

function Alfanumeric2(e) {
    var a, durum = true;
    var bagturk = "çÇðÐýÝöÖþÞüÜ .,/-";
    var bagozel = "'253','222','254','221','45','58','47','32','208','240','63','41','13','10'";
    var bagozel2 = "'13','10','9','8'";
    var bagnum = "0123456789";

    a = (navigator.appName != "Netscape") ? event.keyCode : e.which;
    b = String.fromCharCode(a);

    if (bagturk.indexOf(b) == -1) {
        if (bagozel2.indexOf(a) == -1) {
            if (bagnum.indexOf(b) == -1) {
                if ((a < 65 || a > 90) && (a < 97 || a > 122)) {
                    alert(alfa_msgBuBolumSayiHarflerdenOlusmali);
                    durum = false;
                }
            }
        }
    }
    if ((!durum) && (navigator.appName != "Netscape"))
        event.returnvalue = false;
    return durum;
}
function Alfanumeric(e) {

    var a, durum = true;
    var bagturk = "çÇðÐýÝöÖþÞüÜ";
    var bagozel = "'253','222','254','221','45','58','47','32','208','240','63','41','13','10'";
    var bagozel2 = "'13','10','8'";
    var bagnum = "0123456789";

    a = (navigator.appName != "Netscape") ? event.keyCode : e.which;
    b = String.fromCharCode(a);

    if (bagturk.indexOf(b) == -1) {
        if (bagozel2.indexOf(a) == -1) {
            if (bagnum.indexOf(b) == -1) {
                if ((a < 65 || a > 90) && (a < 97 || a > 122)) {
                    alert(alfa_msgBuBolumSayiHarflerdenOlusmali);
                    durum = false;
                }
            }
        }
    }
    if ((!durum) && (navigator.appName != "Netscape"))
        event.returnvalue = false;
    return durum;
}
function AlfanumericWithoutAlert(e) {

    var a, durum = true;
    var bagturk = "çÇðÐýÝöÖþÞüÜ";
    var bagozel = "'253','222','254','221','45','58','47','32','208','240','63','41','13','10'";
    var bagozel2 = "'13','10','8'";
    var bagnum = "0123456789";

    a = (navigator.appName != "Netscape") ? event.keyCode : e.which;
    b = String.fromCharCode(a);

    if (bagturk.indexOf(b) == -1) {
        if (bagozel2.indexOf(a) == -1) {
            if (bagnum.indexOf(b) == -1) {
                if ((a < 65 || a > 90) && (a < 97 || a > 122)) {
                    //alert(alfa_msgBuBolumSayiHarflerdenOlusmali);
                    durum = false;
                }
            }
        }
    }
    if ((!durum) && (navigator.appName != "Netscape"))
        event.returnvalue = false;
    return durum;
}
function AlfanumericNotTurkish(e) {
    var validChars = /^[a-zA-Z0-9]$/;
    var keyboardChars = /[\x00\x08\x0D]/;
    var keynum;
    if (window.event) // IE
    {
        keynum = event.keyCode;
    }
    else if (e.which) // Netscape/Firefox/Opera
    {
        keynum = e.which;
    }
    var keychar = String.fromCharCode(keynum);

    if (validChars.test(keychar) || keyboardChars.test(keychar)) {
        return true;
    }
    else {
        alert(alfa_msgBuBolumSayiTurkceHarflerdenOlusmali);
        return false;
    }
}
//------------------------------------------------------------

function isAlphaNumeric(val)
//stringler için
{
    var i;
    var a, durum = true;
    var bagturk = "çÇðÐýÝöÖþÞüÜ";
    var bagozel = "'253','222','254','221','45','58','47','32','208','240','63','41','13','10'";
    var bagozel2 = "'13','10'";
    var bagnum = "0123456789";

    for (i = 0; i < val.length; i++) {
        b = val.charAt(i);
        a = val.charCodeAt(i);

        if (bagturk.indexOf(b) == -1) {
            if (bagozel2.indexOf(a) == -1) {
                if (bagnum.indexOf(b) == -1) {
                    //alert("i="+i+" val.charat(i)"+val.charAt(i));
                    //alert("b:"+b+" a:"+a);
                    if ((a < 65 || a > 90) && (a < 97 || a > 122)) {
                        alert(alfa_msgBuBolumSayiHarflerdenOlusmali);
                        return false;
                    }
                }
            }
        }
    }
    return true;
}
//-----------------------
function isNumericForLogon(val)
//sayý kontrolü için
{

    for (i = 0; i < val.length; i++) {
        b = val.charAt(i);
        a = val.charCodeAt(i);

        if (a < 48 || a > 57)
            return false;

    }
    return true;
}
//-----------------------
function isAlphaNumericOrSpace(val)
//stringler için
{
    var i;
    var a, durum = true;
    var bagturk = "çÇðÐýÝöÖþÞüÜ";
    var bagozel = "'253','222','254','221','45','58','47','32','208','240','63','41','13','10'";
    var bagozel2 = "'13','10'";
    var bagnum = "0123456789";

    for (i = 0; i < val.length; i++) {
        b = val.charAt(i);
        a = val.charCodeAt(i);

        if (bagturk.indexOf(b) == -1) {
            if (bagozel2.indexOf(a) == -1) {
                if (bagnum.indexOf(b) == -1) {
                    //alert("i="+i+" val.charat(i)"+val.charAt(i));
                    //alert("b:"+b+" a:"+a);
                    if ((a != 32) && (a < 65 || a > 90) && (a < 97 || a > 122)) {
                        alert(alfa_msgBuBolumSayiHarflerdenOlusmali);
                        return false;
                    }
                }
            }
        }

    }
    return true;
}

function isAlphaNumericOrSpaceWithOutAlert(val)
//stringler için
{
    var i;
    var a, durum = true;
    var bagturk = "çÇðÐýÝöÖþÞüÜ";
    var bagozel = "'253','222','254','221','45','58','47','32','208','240','63','41','13','10'";
    var bagozel2 = "'13','10'";
    var bagnum = "0123456789";

    for (i = 0; i < val.length; i++) {
        b = val.charAt(i);
        a = val.charCodeAt(i);

        if (bagturk.indexOf(b) == -1) {
            if (bagozel2.indexOf(a) == -1) {
                if (bagnum.indexOf(b) == -1) {
                    if ((a != 32) && (a < 65 || a > 90) && (a < 97 || a > 122)) {
                        return false;
                    }
                }
            }
        }

    }
    return true;
}


//------------------------------------------------------------

function numeric(e) {
    //init();
    //if (!e) e = window.event;
    //var bagnum = "0123456789";
    var bagnum = "'48','49','50','51','52','53','54','55','56','57'";
    var bagozel = "'13','10'";
    var a, durum = true;
    //alert(navigator.appName);
    //a = (navigator.appName != "Netscape") ? event.keyCode : e['which'];
    if (navigator.appName == "Netscape") {
        a = e['which'];
    }
    else {
        a = event.keyCode;
    }
    b = String.fromCharCode(a);
    if (bagozel.indexOf(a) == -1) {
        if (bagnum.indexOf(a) == -1) {
            alert(alfa_msgBuBolumSayilardanOlusmali);
            durum = false;
        }
    }
    if ((!durum) && (navigator.appName != "Netscape"))
        event.returnvalue = false;
    return durum;
}

//------------------------------------------------------------

function AllowOnlyNumeric() {
    if ((event.keyCode < 48) || (event.keyCode > 57))
        event.returnValue = false;
}
function isAllSameChar(pChar, pStr) {
    eval("dummy = pStr.replace(/" + pChar + "/g,'')");
    if (dummy == "") {
        return false;
    }
    else {
        return true;
    }

}

//------------------------------------------------------------
function noPostBack(sNewFormAction) {
    if (document.layers) //The browser is Netscape 4
    {
        document.layers['Content'].document.forms[0].__VIEWSTATE.name =
                                                           'NOVIEWSTATE';
        document.layers['Content'].document.forms[0].action =
                                                     sNewFormAction;
    }
    else //It is some other browser that understands the DOM
    {
        document.forms[0].action = sNewFormAction;
        document.forms[0].__VIEWSTATE.name = 'NOVIEWSTATE';
    }
}
