var hideTimeout = new Array();
var showTimeout = new Array();
var focusedItem;
function changeOpac(opacity, object) {
object.style.opacity = (opacity);
object.style.MozOpacity = (opacity);
object.style.KhtmlOpacity = (opacity);
object.style.filter = "alpha(opacity=" + opacity*100+ ")";
}
function YAZ(value){
//document.getElementById("_ctl0_AdLabel").innerHTML = value;
}
function AlphaHide(item)
{
	if (item.style.opacity > 0)
	{
		item.style.opacity = item.style.opacity - 0.1;
		changeOpac(item.style.opacity, item);
		return true;
	}else if (item.style.opacity == ""){
		item.style.opacity = 0.9;
		changeOpac(item.style.opacity, item);
		return true;
	}
	item.style.display='none';
	return false;
}
function AlphaShow(item)
{
item.style.display='inline';
	if (item.style.opacity < 1)
	{
		item.style.opacity = item.style.opacity - (-0.1);
		changeOpac(item.style.opacity, item);
		return true;
	}else if (item.style.opacity == "" || item.style.opacity == 0){
		item.style.opacity = 0.1;
		changeOpac(item.style.opacity, item);
		return true;
	}
	return false;
}
function hide(label)
{
	var NotificationArrowName;
	var NotificationName;
	var i;
	switch(label)
	{
		case "AdText":
			NotificationArrowName = "NotificationAdArrow";
			NotificationName = "NotificationAd";
			i = 0;
			break;
		case "SoyadText":
			NotificationArrowName = "NotificationSoyadArrow";
			NotificationName = "NotificationSoyad";
			i = 1;
			break;
		case "EkSoruText":
			NotificationArrowName = "NotificationEkArrow";
			NotificationName = "NotificationEk";
			i = 2;
			break;
	}
	AlphaHide(document.getElementById(NotificationArrowName));
	if (AlphaHide(document.getElementById(NotificationName)))
	{
		hideTimeout[i] = setTimeout("hide('" +label+ "')", 50);
	}else{
		clearTimeout(hideTimeout[i]);
		hideTimeout[i] = null;
	}
}
function show(label)
{
	var NotificationArrowName;
	var NotificationName;
	var i;
	switch(label)
	{
		case "AdText":
			NotificationArrowName = "NotificationAdArrow";
			NotificationName = "NotificationAd";
			i = 0;
			break;
		case "SoyadText":
			NotificationArrowName = "NotificationSoyadArrow";
			NotificationName = "NotificationSoyad";
			i = 1;
			break;
		case "EkSoruText":
			NotificationArrowName = "NotificationEkArrow";
			NotificationName = "NotificationEk";
			i = 2;
			break;
	}
	AlphaShow(document.getElementById(NotificationArrowName));
	if (AlphaShow(document.getElementById(NotificationName)))
	{
		showTimeout[i] = setTimeout("show('" +label+ "')", 50);
	}else{
		clearTimeout(showTimeout[i]);
		showTimeout[i] = null;
	}
	
}

function ClearTimeoutAndShow(label)
{
	var i;
	switch(label)
	{
		case "AdText":
			i=0;
			break;
		case "SoyadText":
			i=1;
			break;
		case "EkSoruText":
			i=2;
			break;
	}
	if (showTimeout[i] != null)
	{
		return;
	}
	clearTimeout(hideTimeout[i]);
	hideTimeout[i] = null;
	show(label);
}
function SetTimeoutAndHide(label)
{
	var i;
	switch(label)
	{
		case "AdText":
			i=0;
			break;
		case "SoyadText":
			i=1;
			break;
		case "EkSoruText":
			i=2;
			break;
	}
	if (focusedItem != null)
	{
		if (focusedItem == label)
		{
			return;
		}
	}
	if (hideTimeout[i] != null)
	{
		return;
	}
	clearTimeout(showTimeout[i]);
	showTimeout[i] = null;
	hide(label);
}

function ShowSifrePanel()
{
	var displayState = document.getElementById("DivSifrePanelEkrani").style.display;
	document.getElementById("DivSifrePanelEkrani").style.display="inline";
}

function HideSifrePanel()
{
	var displayState = document.getElementById("DivSifrePanelEkrani").style.display;
	document.getElementById("DivSifrePanelEkrani").style.display="none";

}

function SetSubmittedValueForSessionControl()
{
	if(document.forms[0].FormSubmitted)
		document.forms[0].FormSubmitted.value = 'true';
	if(window.parent.document.forms[0].FormSubmitted)
		{
		  window.parent.document.forms[0].FormSubmitted.value = 'true';
		}					
	
}

function SendMobileSignatureAgain() {

    if (document.forms[0].MobilImzaHashTekrar)
        document.forms[0].MobilImzaHashTekrar.value = 'OK';

    //SetSubmittedValueForSessionControl();
    document.forms[0].submit();

}