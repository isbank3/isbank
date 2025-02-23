function CheckIsIE() {
    if (navigator.appName.toUpperCase() == 'MICROSOFT INTERNET EXPLORER') { return true; }
    else { return false; }
}

function CheckIsFF() {
    if (navigator.userAgent.indexOf("Firefox") > 0) { return true; }
    else { return false; }
}

function IFrameGoBack(isIFrame) {

    if (!isIFrame) {
        history.back();
        return 0;
    }

    if (!window.isMcmLogin || window.isMcmLogin !== 'true') {
        if (icerik.document.getElementById("trkd")) {
            if (obiBackTrkdList.indexOf(";" + icerik.document.getElementById("trkd").value + ";") != -1) {
                whoHasToken = "OBI";
                ShowOBI(null);
                return;
            }
        }
    }


    if (CheckIsIE() == true) {
        document.icerik.focus();
        document.icerik.history.back();
    }
    else {
        window.frames['icerik'].focus();
        window.frames['icerik'].history.back();
    }

}

function IFrameGoFwd(isIFrame) {
    if (!isIFrame) {
        history.forward();
        return 0;
    }


    if (CheckIsIE() == true) {
        document.icerik.focus();
        document.icerik.history.forward();
    }
    else {
        window.frames['icerik'].focus();
        window.frames['icerik'].history.forward();
    }

}



function IFramePrint(isIFrame) {
    if (!isIFrame) {
        window.print();
        return 0;
    }

    //iframe
    var printAreaOptions = {
        mode: "iframe",
        popClose: false,
        extraCss: "",
        retainAttr: Array[0],
        extraHead: ""
    };

    //pop-up
    //    var printAreaOptions = {
    //        mode: "popup",
    //        popClose: true,
    //        extraCss: "",
    //        retainAttr: Array[0],
    //        extraHead: ""
    //    };
    if (typeof (YTIHasToken) != "undefined") //gitmeli.ori.
    {
        if (YTIHasToken == true)    //gitmeli.ori.
            whoHasToken = "YTI";    //gitmeli.ori.
        else                        //gitmeli.ori.
            whoHasToken = "MBI";    //gitmeli.ori.
    }
    if (CheckIsIE() == true) {
        var frameElement = document.icerik;
        if (whoHasToken == "YTI")//(YTIHasToken)
            frameElement = YTI;
        else if (whoHasToken == "OBI") {
            $("#obidiv").printArea(printAreaOptions);
            return;
            //	        alert("print me!");
            //	        return;
        }
        try {
            frameElement.document.body.focus();
            frameElement.document.execCommand("print", false, null);
        }
        catch (e) {
            frameElement.focus();
            frameElement.print();
        }
    }
    else if (CheckIsFF() == true) {
        var frameElement = icerik;
        if (whoHasToken == "YTI")//(YTIHasToken)
            frameElement = yti;
        else if (whoHasToken == "OBI") {
            $("#obidiv").printArea(printAreaOptions);
            return;
            //	        alert("print me!");
            //	        return;
        }
        if (frameElement.$(".tabAltiBeyazHTML").length > 0) {
            var widthFF = frameElement.$(".tabAltiBeyazHTML")[0].width;
            frameElement.$(".tabAltiBeyazHTML")[0].width = "";
            frameElement.focus();
            frameElement.print();
            frameElement.$(".tabAltiBeyazHTML")[0].width = widthFF;
        }
        else {
            frameElement.focus();
            frameElement.print();
        }
    }
    
	else {
        var frameElement = window.frames['icerik'];
        if (whoHasToken == "YTI")//(YTIHasToken)
            frameElement = window.frames['yti'];
        else if (whoHasToken == "OBI") {
            $("#obidiv").printArea(printAreaOptions);
            return;
            //         alert("print me!");
            //         return;
        }

	if (document.queryCommandSupported('print')) {
		icerik.document.execCommand('print', false, null);
	}
	else {
		frameElement.focus();
		frameElement.print();
		}
    }
	
	
	
}

function btnBack() {
    try {
        var IcerikWindow = document.getElementById("icerik").contentWindow;
        var Back_ToMain = IcerikWindow.document.getElementById("Back_ToMain");
        if (Back_ToMain && Back_ToMain.value == "1") {
            parent.checkTRKDAdditional('GSAY', '', '', '', '&BackToMain=1');
            return;
        }
        IFrameGoBack(true);
        return;
    }
    catch (e)
	{ }
    history.go(-1);
}						   
