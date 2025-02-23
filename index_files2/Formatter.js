function regReplace(sOrgVal,sSearchVal,sReplaceVal)
{
	var sVal;
	try
	{
		sVal = new String(sOrgVal);
		if (sVal.length < 1) { return sVal; }
		var sRegExp = eval("/\\" + sSearchVal + "/g");
		sVal = sVal.replace(sRegExp,sReplaceVal);
	}
	catch (exception) { }
	return sVal;

}
function isMaxLength(object, maxlength, e)
{
	if (isNavigation(e))
	{
		return true;
	}
	if (object.value.length >= maxlength)
	{
		return false;
	}
	return true;
}
function isNumberMaxLength(object, maxlength, e)
{
	if (isNavigation(e))
	{
		return true;
	}
	if (!isNumber(e))
	{
		return false;
	}
	if (object.value.replace(/,/g,"").replace(/\./g,"").length >= maxlength)
	{
		
		return false;
	}
	return true;
}
function isNumber(e)
{  
	if (e.keyCode) 
	{
		keycode=e.keyCode;
	}
     else 
	{
		 keycode=e.which;
	}
	if ((keycode < 48) || (keycode > 57))
	{
		return isNavigation(e);
	}
	else
	{
		return true;
	}

}

function isContainsOnlyLetter(e) {

    if (e.keyCode) {
        keycode = e.keyCode;
    }
    else {
        keycode = e.which;
    }

    var inp = String.fromCharCode(keycode);
    if (/[a-zA-Z ]/.test(inp))
        return true;
    else return false;

}


function advancedIsNumber(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode == 46)
        return false;
    else if (charCode > 57 || (charCode > 31 && charCode < 48))
        return false;
    else
        return true;
}




function BuyukHarf(strInp) {
    var iLength = 0;
    var i = 0;
    iLength = strInp.length;

    var result = "";
    for (i = 0; i <= strInp.length - 1; i++) {

        switch (strInp.charAt(i)) {
            case 'þ':
                result = result + "Þ";
                break;
            case 'Þ':
                result = result + "Þ";
                break;
            case 'ç':
                result = result + "Ç";
                break;
            case 'Ç':
                result = result + "Ç";
                break;
            case 'i':
                result = result + "Ý";
                break;
            case 'ð':
                result = result + "Ð";
                break;
            case 'Ð':
                result = result + "Ð";
                break;
            case 'ý':
                result = result + "I";
                break;
            case 'Ý':
                result = result + "Ý";
                break;
            case 'ö':
                result = result + "Ö";
                break;
            case 'Ö':
                result = result + "Ö";
                break;
            case 'ü':
                result = result + "Ü";
                break;
            case 'Ü':
                result = result + "Ü";
                break;
            default:

                result = result + strInp.charAt(i).toUpperCase();
                break;

        }
    }

    return result;
}

function fractionFormat(field, e)
{
	if (isNavigation(e)) //
	{
		return;
	}
	var value = field.value;
	var maxLength = field.maxLength;
	var newValue = "";
	for (var i = 0 ; i < value.length && i < maxLength; i++)
	{
		switch(value.substring(i,i+1))
		{
			case "0":
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "6":
			case "7":
			case "8":
			case "9":
				newValue += value.substring(i,i+1);
				break;
			default:
				break;
		}
	}
	field.value = newValue;
}


function currencyNumberFormat(number, decimalNumber, currencyDigit, showLeadingZeros, parent, Istrue) {
    var leadingZeroCount = 0;
    var i = 0;
    for (i = 0; i < number.length; i++) {
        if (number.substring(i, i + 1) == 0) {
            leadingZeroCount++;
        } else {
            break;
        }
    }
    number = regReplace(number, currencyDigit, "");
    var templateNumber = parseInt(number, 10);
    var iSign = number < 0 ? -1 : 1;
    templateNumber *= Math.pow(10, decimalNumber);
    templateNumber = Math.round(Math.abs(templateNumber));
    templateNumber /= Math.pow(10, decimalNumber);
    templateNumber *= iSign;
    var returnNumber = new String(templateNumber);
    /*if (!zero && number < 1 && number > -1 && number != 0)
    if (number > 0)
    returnNumber = returnNumber.substring(1,returnNumber.length);
    else
    returnNumber = "-" + returnNumber.substring(2,returnNumber.length);*/
    if (Istrue && (number >= 1000 || number <= -1000)) {
        var iStart = returnNumber.indexOf(currencyDigit);
        if (iStart < 0)
            iStart = returnNumber.length;
        iStart -= 3;
        while (iStart >= 1) {
            returnNumber = returnNumber.substring(0, iStart) + currencyDigit + returnNumber.substring(iStart, returnNumber.length)
            iStart -= 3;
        }
    }
    if (parent && number < 0) {
        returnNumber = "(" + returnNumber.substring(1, returnNumber.length) + ")";
    }
    if (returnNumber == 'NaN')
        returnNumber = '';
    if (showLeadingZeros) {
        for (i = 0; i < returnNumber.length; ) {
            if (returnNumber.substring(i, i + 1) == 0) {
                returnNumber = returnNumber.replace("0", "");
            } else {
                break;
            }
        }
        for (i = 0; i < leadingZeroCount; i++) {
            returnNumber = "0" + returnNumber;
        }
    }
    return returnNumber;
}

function numberFormatWithMaxLengthEN(number, decimalNumber, showLeadingZeros, parent, Istrue, maxLength) {

    var leadingZeroCount = 0;
    var i = 0;
    for (i = 0; i < number.length; i++) {
        if (number.substring(i, i + 1) == 0) {
            leadingZeroCount++;
        } else {
            break;
        }
    }
    number = regReplace(number, ".", "");
    var templateNumber = parseInt(number, 10);
    var iSign = number < 0 ? -1 : 1;
    templateNumber *= Math.pow(10, decimalNumber);
    templateNumber = Math.round(Math.abs(templateNumber));
    templateNumber /= Math.pow(10, decimalNumber);
    templateNumber *= iSign;
    var returnNumber = new String(templateNumber);

    if (returnNumber.length > maxLength) {
        returnNumber = returnNumber.substring(0, maxLength);
    }

    if (Istrue && (number >= 1000 || number <= -1000)) {
        var iStart = returnNumber.indexOf(".");
        if (iStart < 0)
            iStart = returnNumber.length;
        iStart -= 3;
        while (iStart >= 1) {
            returnNumber = returnNumber.substring(0, iStart) + "." + returnNumber.substring(iStart, returnNumber.length)
            iStart -= 3;
        }
    }
    if (parent && number < 0) {
        returnNumber = "(" + returnNumber.substring(1, returnNumber.length) + ")";
    }
    if (returnNumber == 'NaN')
        returnNumber = '';
    if (showLeadingZeros) {
        for (i = 0; i < returnNumber.length; ) {
            if (returnNumber.substring(i, i + 1) == 0) {
                returnNumber = returnNumber.replace("0", "");
            } else {
                break;
            }
        }
        for (i = 0; i < leadingZeroCount; i++) {
            returnNumber = "0" + returnNumber;
        }
    }
    return returnNumber;
}

function numberFormatWithMaxLength(number, decimalNumber, showLeadingZeros, parent, Istrue, maxLength) {

    var leadingZeroCount = 0;
    var i = 0;
    for (i = 0; i < number.length; i++) {
        if (number.substring(i, i + 1) == 0) {
            leadingZeroCount++;
        } else {
            break;
        }
    }
    number = regReplace(number, ",", "");
    var templateNumber = parseInt(number, 10);
    var iSign = number < 0 ? -1 : 1;
    templateNumber *= Math.pow(10, decimalNumber);
    templateNumber = Math.round(Math.abs(templateNumber));
    templateNumber /= Math.pow(10, decimalNumber);
    templateNumber *= iSign;
    var returnNumber = new String(templateNumber);

    if (returnNumber.length > maxLength) {
        returnNumber = returnNumber.substring(0, maxLength);
    }
   
    if (Istrue && (number >= 1000 || number <= -1000)) {
        var iStart = returnNumber.indexOf(",");
        if (iStart < 0)
            iStart = returnNumber.length;
        iStart -= 3;
        while (iStart >= 1) {
            returnNumber = returnNumber.substring(0, iStart) + "," + returnNumber.substring(iStart, returnNumber.length)
            iStart -= 3;
        }
    }
    if (parent && number < 0) {
        returnNumber = "(" + returnNumber.substring(1, returnNumber.length) + ")";
    }
    if (returnNumber == 'NaN')
        returnNumber = '';
    if (showLeadingZeros) {
        for (i = 0; i < returnNumber.length; ) {
            if (returnNumber.substring(i, i + 1) == 0) {
                returnNumber = returnNumber.replace("0", "");
            } else {
                break;
            }
        }
        for (i = 0; i < leadingZeroCount; i++) {
            returnNumber = "0" + returnNumber;
        }
    }
    return returnNumber;
}


function numberFormat(number,decimalNumber,showLeadingZeros,parent, Istrue)
{
	var leadingZeroCount = 0;
	var i = 0;
	for (i = 0; i < number.length; i++)
	{
		if (number.substring(i,i+1) == 0){
			leadingZeroCount++;
		}else{
			break;
		}
	}
	number = regReplace(number,",","");
	var templateNumber = parseInt(number,10);
	var iSign = number < 0 ? -1 : 1;
	templateNumber *= Math.pow(10,decimalNumber);
	templateNumber = Math.round(Math.abs(templateNumber));
	templateNumber /= Math.pow(10,decimalNumber);
	templateNumber *= iSign;
	var returnNumber = new String(templateNumber);
	/*if (!zero && number < 1 && number > -1 && number != 0)
	if (number > 0)
	returnNumber = returnNumber.substring(1,returnNumber.length);
	else
	returnNumber = "-" + returnNumber.substring(2,returnNumber.length);*/
	if (Istrue && (number >= 1000 || number <= -1000))
	{
		var iStart = returnNumber.indexOf(",");
		if (iStart < 0)
		iStart = returnNumber.length;
		iStart -= 3;
		while (iStart >= 1)
		{
			returnNumber = returnNumber.substring(0,iStart) + "," + returnNumber.substring(iStart,returnNumber.length)
			iStart -= 3;
		}
	}
	if (parent && number < 0)
	{
		returnNumber = "(" + returnNumber.substring(1,returnNumber.length) + ")";
	}
	if (returnNumber == 'NaN')
	returnNumber = '';
	if (showLeadingZeros)
	{
		for (i = 0; i < returnNumber.length;)
		{
			if (returnNumber.substring(i,i+1) == 0){
				returnNumber = returnNumber.replace("0", "");
			}else{
				break;
			}
		}
		for (i = 0; i < leadingZeroCount; i++)
		{
			returnNumber = "0" + returnNumber;
		}
	}
	return returnNumber;
}

function FocusNextFieldOnLength(object, MaxLength, NextObject, event_obj)
{
	if (object.value.length == MaxLength)
	{
		var x = isNavigation(event_obj);
		if (!x){
			eval("document.forms[0]." + NextObject).focus();
		}
	}
}
function isNavigation(e)
{
	if (e.ctrlKey && e.which==118)
	{
		return true;
	}
	var keycode=e.keyCode;
     switch(keycode)
		{
			case 8://backspace
			case 9://tab
			case 13://enter
			case 16://shift
			case 17://ctrl
			
				return true;
				break;
			case 35://end
			case 36://home
			case 37://left
			case 39://right
			case 46://delete
				browser = CheckBrowser();
				if (browser.indexOf("ie") != -1)
				{
					return false;
				}
				return true;
				break;
		}
	return false;
}
function AccountComboInitialize(element)
{
      if (isHesDVMISelected(eval(element)))
      {
            eval(element).selectedIndex = 0;
      }
}

function getDateObject(dateString, dateSeperator)
{
	var curValue=dateString;
	var sepChar=dateSeperator;
	var curPos=0;
	var cDate,cMonth,cYear;

	//extract day portion
	curPos=dateString.indexOf(sepChar);
	cDate=dateString.substring(0,curPos);
	
	//extract month portion				
	endPos=dateString.indexOf(sepChar,curPos+1);
	cMonth=dateString.substring(curPos+1,endPos); // -1

	//extract year portion				
	curPos=endPos;
	endPos=curPos+5;			
	cYear=curValue.substring(curPos+1,endPos);
	
	//Create Date Object
	dtObject=new Date(cYear,cMonth,cDate);	
	return dtObject;
}


function intOnly(i) 
{
	if(i.value.length>0) 
	{
		i.value = i.value.replace(/[^\d]+/g, ''); 
	}
}
function BuyukHarfKeypress(e) {
    var nesne = e.target ? e.target : e.srcElement;
    var basilantus = e.charCode == undefined ? e.keyCode : e.charCode;
    var str = String.fromCharCode(basilantus);
    if ((basilantus < 97 || basilantus > 122) && !isTRChar(basilantus))
        return true;
    if (basilantus == 105)
        str = '\u0130';
    if (nesne && nesne.createTextRange) {
        e.keyCode = str.toUpperCase().charCodeAt(0);
        return true;
    }
    else {
        var startpos = nesne.selectionStart;
        var endpos = nesne.selectionEnd;
        nesne.value = nesne.value.substr(0, startpos) + str.toUpperCase() + nesne.value.substr(endpos);
        nesne.setSelectionRange(startpos + 1, startpos + 1);
        return false;
    }
}

function isTRChar(key) {
    var trchar = [231, 246, 252, 287, 305, 351];
    for (var i = 0; i < trchar.length; i++) {
        if (trchar[i] == key)
            return true;
    }
    return false;
}

function BuyukHarfBlur(e, clear) {
    var nesne = e.target ? e.target : e.srcElement;
    var val = nesne.value;
    val = val.replace(/i/g, "\u0130").replace(/^\s+|\s+$/g, "");
    if (clear) val = val.replace(/\s{2,}/g, " ");
    nesne.value = val.toUpperCase();
}

