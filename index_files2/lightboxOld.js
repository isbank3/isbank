var myWidth = 0, myHeight = 600;
function SetWidthAndHeight(){
	if( typeof( window.innerWidth ) == 'number' ) {    //Non-IE
		myWidth = window.innerWidth;
		myHeight = window.innerHeight;
	} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {    //IE 6+ in 'standards compliant mode'
		myWidth = document.documentElement.clientWidth;
		myHeight = document.documentElement.clientHeight;
	} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {    //IE 4 compatible
		myWidth = document.body.clientWidth;
		myHeight = document.body.clientHeight;
	}	
}


function SetWidthAndHeightForInternet(){

	if( typeof( parent.window.innerWidth ) == 'number' ) {    //Non-IE

		myWidth = parent.window.innerWidth;
		myHeight = parent.window.innerHeight;
	} else if( parent.document.documentElement && ( parent.document.documentElement.clientWidth || parent.document.documentElement.clientHeight ) ) {    //IE 6+ in 'standards compliant mode'

		myWidth = parent.document.documentElement.clientWidth;
		myHeight = parent.document.documentElement.clientHeight;
	} else if( parent.document.body && ( parent.document.body.clientWidth || parent.document.body.clientHeight ) ) {    //IE 4 compatible

		myWidth = parent.document.body.clientWidth;
		myHeight = parent.document.body.clientHeight;
	}

}
function ShowInternetLighBoxOnInit()
{
	if(parent.ShowNetAnahtarLightBox)
	{
		parent.ShowNetAnahtarLightBox = false;
		
		SetWidthAndHeightForInternet();
		
		parent.document.getElementById('internetLightBox').style.display='block';
		parent.document.getElementById('internetFade').style.height = myHeight + "px";
		parent.document.getElementById('internetFade').style.width = myWidth + "px";
		parent.document.getElementById('internetFade').style.display='block';

	}
	else
	{
		parent.document.getElementById('internetLightBox').style.display='none';
		parent.document.getElementById('internetFade').style.display='none';
	}
}
function HideInternetLightBox(ControlId)
{
	if(ControlId=='internetLightBox')
	{
		document.getElementById('internetFade').style.display='none';
	}
	else if(ControlId=='InternetDekontLightBox')
	{
		document.getElementById('LightBoxFade').style.display='none';
	}
	
	document.getElementById(ControlId).style.display='none';
			
}

function ShowLightBoxOnInit()
{
	if(document.forms[0].ShowLightBox && document.forms[0].ShowLightBox.value == "T")
	{
		document.forms[0].ShowLightBox.value = "F";
		SetWidthAndHeight();
		if(document.getElementById("JSifreText"))
		{
			document.getElementById("JSifreText").style.visibility="hidden";
		}
		else
		{
			document.getElementById("SifreText").style.display = "none";			
		}
		if(document.getElementById("_ctl0_TxtSecovid"))
		{
			document.getElementById("_ctl0_TxtSecovid").style.display = "none";
		}
		if(document.getElementById("_ctl0_TxtSoftOtp"))
		{
			document.getElementById("_ctl0_TxtSoftOtp").style.display = "none";
		}
		if(document.getElementById("_ctl0_EkSoruText"))
		{
			document.getElementById("_ctl0_EkSoruText").style.display = "none";
		}
		if(document.getElementById("_ctl0_SubeLogin02_BtnGiris"))
		{
			document.getElementById("_ctl0_SubeLogin02_BtnGiris").disabled = true;
		}
		document.getElementById('loginLightBox').style.display='block';
		$("#loginFade").width(myWidth);
		$("#loginFade").height(myHeight);
		document.getElementById('loginFade').style.display='block';
		
		//Karþýlama Mesajý OK Butonu Focus 
		document.getElementById('_ctl0_lightBoxButtonOK').focus();
	}
}

function HideLightBox()
{
	if(document.getElementById("JSifreText"))
	{		
		document.getElementById("JSifreText").style.visibility="";
	}
	else
	{
		document.getElementById("SifreText").style.display = "block";			
	}
	if(document.getElementById("_ctl0_TxtSecovid"))
	{
		document.getElementById("_ctl0_TxtSecovid").style.display = "block";
	}
	if(document.getElementById("_ctl0_TxtSoftOtp"))
	{
		document.getElementById("_ctl0_TxtSoftOtp").style.display = "block";
	}
	if(document.getElementById("_ctl0_EkSoruText"))
	{
		document.getElementById("_ctl0_EkSoruText").style.display = "block";
	}
	if(document.getElementById("_ctl0_SubeLogin02_BtnGiris"))
	{
		document.getElementById("_ctl0_SubeLogin02_BtnGiris").disabled = false;
	}
	document.getElementById('loginLightBox').style.display='none';
	document.getElementById('loginFade').style.display='none';
	setInitialLoginFocus()
}



function ResizeLightBox()
{
	if(document.getElementById('loginFade') && document.getElementById('loginFade'))
	{
		SetWidthAndHeight();
		$("#loginFade").width(myWidth + "px");
		$("#loginFade").height(myHeight + "px");
	}
}


function ResizeInternetLightBox()
{
	if(document.getElementById('internetFade'))
	{
		SetWidthAndHeightForInternet();
		document.getElementById('internetFade').style.height = myHeight + "px";
		document.getElementById('internetFade').style.width = myWidth + "px";
	}
	
	if(document.getElementById('InternetDekontLightBox').style.display=='block')
	{		
		SetWidthAndHeight2();
		document.getElementById('LightBoxFade').style.height = myHeight + "px";
		document.getElementById('LightBoxFade').style.width = myWidth + "px";
	}
}

//Shows Dekont LightBox
function ShowInternetLightBox()
{
	//alert("ShowLightBox");
	//if(document.forms[0].ShowLightBox && document.forms[0].ShowLightBox.value == "T")
	//{
		//document.forms[0].ShowLightBox.value = "F";	

		SetWidthAndHeight2();				
		
		if(document.getElementById('InternetDekontLightBox'))
		document.getElementById('InternetDekontLightBox').style.display='block';
		else if (window.parent.document.getElementById('InternetDekontLightBox'))
		window.parent.document.getElementById('InternetDekontLightBox').style.display='block';	
		else if (window.parent.parent.document.getElementById('InternetDekontLightBox'))
		window.parent.parent.document.getElementById('InternetDekontLightBox').style.display='block';	
			
		if(document.getElementById('LightBoxFade'))
		{
		document.getElementById('LightBoxFade').style.height=myHeight +"px";
		document.getElementById('LightBoxFade').style.width=myWidth + "px";
		document.getElementById('LightBoxFade').style.display='block';				
		}
		else if (window.parent.document.getElementById('LightBoxFade'))
		{
		window.parent.document.getElementById('LightBoxFade').style.height=myHeight +"px";
		window.parent.document.getElementById('LightBoxFade').style.width=myWidth+"px";
		window.parent.document.getElementById('LightBoxFade').style.display='block';						
		}				
		else if (window.parent.parent.document.getElementById('LightBoxFade'))
		{
		window.parent.parent.document.getElementById('LightBoxFade').style.height=myHeight+"px";
		window.parent.parent.document.getElementById('LightBoxFade').style.width = myWidth + "px";
		window.parent.parent.document.getElementById('LightBoxFade').style.display='block';
		}
	//}
}


//Sets Width and Height for Dekont LightBox
function SetWidthAndHeight2(){

	if( typeof( parent.parent.window.innerWidth ) == 'number' ) {    //Non-IE	
		myWidth = parent.parent.window.innerWidth;
		myHeight = parent.parent.window.innerHeight;		
		myWidth= Math.max(parent.parent.window.document.body.scrollWidth,parent.window.document.body.offsetWidth);				
		myHeight= Math.max(parent.parent.window.document.body.scrollHeight,parent.window.document.body.offsetHeight);					

	} else if( parent.parent.document.documentElement && ( parent.parent.document.documentElement.clientWidth || parent.parent.document.documentElement.clientHeight ) ) {    //IE 6+ in 'standards compliant mode'
		myWidth = parent.parent.document.documentElement.clientWidth;
		myHeight = parent.parent.document.documentElement.clientHeight;	
		
		myWidth= Math.max(parent.parent.document.body.scrollWidth,parent.document.body.offsetWidth);				
		myHeight= Math.max(parent.parent.document.body.scrollHeight,parent.document.body.offsetHeight);		

	} else if( parent.parent.document.body && ( parent.parent.document.body.clientWidth || parent.parent.document.body.clientHeight ) ) {    //IE 4 compatible	
		myWidth = parent.parent.document.body.clientWidth;
		myHeight = parent.parent.document.body.clientHeight;				
			
		//alert(Math.max(parent.document.body.scrollHeight,parent.document.body.offsetHeight));
		myWidth= Math.max(parent.parent.document.body.scrollWidth,parent.document.body.offsetWidth);				
		myHeight= Math.max(parent.parent.document.body.scrollHeight,parent.document.body.offsetHeight);								
	}			
}

/*
function ResizeInternetLightBox()
{
	if(document.getElementById('InternetLightBox').style.display=='block')
	{		
		SetWidthAndHeight2();
		document.getElementById('LightBoxFade').style.height=myHeight;
		document.getElementById('LightBoxFade').style.width=myWidth;
	}
}
*/

//Print Function For Dekont LightBox
function LightBoxPrint() {
    var oIframe = document.getElementById('ifrmPrint');
    var oContent = document.getElementById('LblLightboxContent').innerHTML;
    var oDoc = (oIframe.contentWindow || oIframe.contentDocument);
    if (oDoc.document) oDoc = oDoc.document;
    oDoc.write("<head><title>Türkiye Ýþ Bankasý Ýnternet Þubesi</title>");
    oDoc.write("</head><body onload='if(this.document.queryCommandSupported(\"print\")){this.document.execCommand(\"print\", false, null);} else{this.focus(); this.print();}'>");
    oDoc.write(oContent + "</body>");
    oDoc.close();
}



function ShowLighBoxOnInit(divId, fadeDivId)
{
	if(parent.ShowAnnounceLightBox)
	{
		parent.ShowAnnounceLightBox = false;			
		SetWidthAndHeightForInternet();			
		parent.document.getElementById(divId).style.display='block';
		parent.document.getElementById(fadeDivId).style.height=myHeight+"px";
		parent.document.getElementById(fadeDivId).style.width=myWidth+"px";
		parent.document.getElementById(fadeDivId).style.display='block';

	}
	else
	{
		HideLightBoxNew(divId, fadeDivId);
	}	
}


function HideLightBoxNew(divId, fadeDivId)
{
	document.getElementById(divId).style.display='none';
	document.getElementById(fadeDivId).style.display='none';
}