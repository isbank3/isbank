//Ekranlardaki iþlemlerin yapýdýðý JS
function WindowOperations()
{
    this.myWidth = 0;
    this.myHeight = 620;
    this.editor = false; //editörmü bilgisi

    // gets screen size to this.myWidth & this.myHeight
    this.getWindowSize = function ()
    {
        if (typeof (window.innerWidth) == 'number') {    //Non-IE
            this.myWidth = window.innerWidth;
            this.myHeight = window.innerHeight;
        } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {    //IE 6+ in 'standards compliant mode'
            this.myWidth = document.documentElement.clientWidth;
            this.myHeight = document.documentElement.clientHeight;
        } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {    //IE 4 compatible
            this.myWidth = document.body.clientWidth;
            this.myHeight = document.body.clientHeight;
        }

    }

    // sets the screen size
    this.setWindowSize = function (weight)
    {
        if (screen.availHeight <= 600) {
            window.resizeTo(800, 600);
        }
        else {
            var size = 620;
            if (this.editor) {	//if editor add 20 pixels
                size += 20;
            }
            window.resizeTo(weight, size);
            this.getWindowSize();
            window.resizeTo(weight, size + (size - this.myHeight));
        }
    }

    this.setIframeSize = function (iFrameName)
    {
        var myHeight;
        var iFrameElement = document.getElementById(iFrameName);
        if (iFrameElement == null) {
            return;
        }
        iFrameElement.height = 5; //
        if (iFrameElement.contentWindow.document.height) {
            myHeight = iFrameElement.contentWindow.document.height;
            //alert("if height:" + myHeight);
        }
        else {
            myHeight = iFrameElement.contentWindow.document.body.scrollHeight;
            //alert("else height:" + myHeight);
        }
        //frame yüklenmediði sürece recursive çaðýr		
        if (myHeight <= 5) {
            window.setTimeout("RetryResize('" + iFrameName + "'," + myHeight + ");", 200);
            //this.setIframeSize(iFrameName);
        }
        else {
            iFrameElement.height = myHeight;
        }
    }
}
function RetryResize(FrameName, FHeight)
{
    //alert('retry');
    //alert(FHeight);
    var wo = new WindowOperations();

    if (FHeight <= 5) {
        wo.setIframeSize(FrameName);
    }
}


function IEmi()
{

    if (navigator.appName.toUpperCase() == 'MICROSOFT INTERNET EXPLORER') { return true; }
    else { return false; }
}

function FrameResizer(FrameCntrl, ResizeWidth, ResizeHeight)
{
    var IFrame = FrameCntrl;
    var FrameWidthBeforeResize = 0;
    var FrameWidthAfterResize = 0;
    var Framewidth = 0;
    var Frameheight = 0;

    if (IFrame) {

        //----------
        if (IFrame.contentWindow.document.body.scrollWidth && IFrame.contentWindow.document.body.scrollWidth > 0)
            Framewidth = IFrame.contentWindow.document.body.scrollWidth;
        else if (IFrame.contentWindow.document.width && IFrame.contentWindow.document.width > 0)
            Framewidth = IFrame.contentWindow.document.width;
        //----------------

        //	    alert('IFrame.contentWindow.document.forms[0].offsetHeight' + IFrame.contentWindow.document.forms[0].offsetHeight)
        //	    alert('IFrame.contentWindow.document.body.offsetHeight' + IFrame.contentWindow.document.body.offsetHeight);
        //	    alert('IFrame.contentWindow.document.body.scrollHeight' + IFrame.contentWindow.document.body.scrollHeight);

        if (IEmi() || ($(".tabAltiBeyazHTML", document.getElementById('icerik').contentWindow.document).length)) {
           
            if (IFrame.contentWindow.document.body.scrollHeight && IFrame.contentWindow.document.body.scrollHeight > 0) {
                Frameheight = IFrame.contentWindow.document.body.scrollHeight;
            }
            else if (IFrame.contentWindow.document.height && IFrame.contentWindow.document.height > 0) {
                Frameheight = IFrame.contentWindow.document.height;
            }
        }
        else {

            try {
                Frameheight = IFrame.contentWindow.document.forms[0].offsetHeight;
            }
            catch (e) {
                if (IFrame.contentWindow.document.body.scrollHeight && IFrame.contentWindow.document.body.scrollHeight > 0) {
                    Frameheight = IFrame.contentWindow.document.body.scrollHeight;
                }
                else if (IFrame.contentWindow.document.height && IFrame.contentWindow.document.height > 0) {
                    Frameheight = IFrame.contentWindow.document.height;
                }
            }
        }
        //---------------

        //	    Frameheight = IFrame.contentWindow.document.forms[0].offsetHeight;
        //	    Framewidth = IFrame.contentWindow.document.forms[0].offsetWidth;

        FrameWidthBeforeResize = Framewidth;
        if (ResizeWidth) {
            if (Framewidth != 0)
                IFrame.style.width = Framewidth + "px";
        }

        if (ResizeHeight) {
            if (Frameheight != 0) {
                IFrame.style.height = Frameheight + "px";
            }
        }


        //IE browser'da Width'ý deðiþtirmeden height deðiþtirildiðinde width etkileniyor.
        //Bu durumu çözmek için before ve after width deðerlerini karþýlaþtýrýyoruz.
        /*
        if (IFrame.contentWindow.document.body.scrollWidth)		
        FrameWidthAfterResize = IFrame.contentWindow.document.body.scrollWidth;
        else				
        FrameWidthAfterResize = IFrame.contentWindow.document.width;
			
        if (FrameWidthBeforeResize != FrameWidthAfterResize	&& !ResizeWidth)
        {
        IFrame.style.width = FrameWidthBeforeResize;
        }*/

        //Min. Yükseklikten küçük sayfalar için min. yükseklik set ediliyor.
        if (IFrame.name == "icerik" && IFrame.style.height.replace('px', '') < 500) {
            IFrame.style.height = "500" + "px";
        }
        if (IFrame.name == "icerik") {
            FrameResizerCoex(Framewidth, Frameheight);
        }


        if (IFrame.id.indexOf("CoCampIFRAME_") > -1 && !IEmi()) {
            IFrame.style.height = IFrame.contentWindow.document.body.scrollHeight + "px";
        }
    }
}

function TriggerFrame(frame, source)
{

    if (frame) {
        var frameSource = frame.src;

        if (frameSource.indexOf('Loading') != -1 || frameSource == null || frameSource == "")
            frame.src = source;
    }
    //var a = frame + ".location.href ='" + source +"'";
    //eval(a);
}


//Her sayfada SetValue onload'da çalýþýyor. Onload'da çalýþmasý problem olan ve her iþlemde çalýþmasý gereken 
//Javascriptler bu fonksiyona eklenebilir.
function PreFrameLoader()
{
    
    ShowMTI();
    //Carousel onload sorunu için eklendi.
    try { initCarousel(); } catch (er) { }

    //  parent.document.getElementById('icerik').JsScrollInit(); 

    var DivContainerSelector = "div[class='JScrollPaneContainer JScrollPaneScrollable']";
    $(DivContainerSelector).css('overflow', 'hidden');
}

var TimeOutPeriod = 510000;
var TimetoTimeOut = TimeOutPeriod / 1000;
TimetoTimeOut = Math.round(TimetoTimeOut);
tf = null;

function ResetTimeoutPeriod()
{
    window.clearTimeout(tf);
    tf = 0;
    TimetoTimeOut = TimeOutPeriod / 1000;
    TimetoTimeOut = Math.round(TimetoTimeOut);   

    if (window.parent.parent.parent.document.forms[0].IsTimeOut != null) {
      parent.parent.parent.document.forms[0].IsTimeOut.value = "0";
    }    
}

function ShowTimeoutPeriod()
{

    if (TimetoTimeOut > 0) {
        TimetoTimeOut = TimetoTimeOut - 1;
        window.status = TimeOutStatusMessage0 + TimetoTimeOut + TimeOutStatusMessage1;
        tf = window.setTimeout('ShowTimeoutPeriod();', 1000);
    }
    else if (TimetoTimeOut == 0) {
        if (parent.parent.TxChannel == "Cagri") {
            return;
        }
        window.status = TimeOutStatusMessage2;
       
            if (window.parent.parent.parent.document.forms[0].IsTimeOut != null) {
                parent.parent.parent.document.forms[0].IsTimeOut.value = "1";
            }

            //OpenTimeOutPopup();
            LBC.CreateLightBox(
            {
                urlType: "div",
                url: "TimeoutDiv",
                onCloseFunc: function () {
                    document.getElementById("TimeOutPopup_LabelCikis").disabled = true;
                    document.getElementById("Linkbutton1").disabled = true;
                },
                onLoadFunc: function () {
                    document.getElementById("TimeOutPopup_LabelCikis").disabled = false;
                    document.getElementById("Linkbutton1").disabled = false;
                    ResetTimer();
                    setTimeout("startLogoutTimer([\"#08335E\", \"#FFFFFF\"])", 200);
                    setTimeout("StartupOperations()", 300);
                },
                closable: false
            });
            
    }



}
