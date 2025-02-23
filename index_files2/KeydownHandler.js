var isPageRefreshed = false;
var isSessionEnded = false;
var customerSwitching = false;
var ApplicationVirtualDirectoryUrl = GetVirtualDirectoryUrl();
var ControlloaderUrl = ApplicationVirtualDirectoryUrl + "/ControlLoader.aspx?id=";
//alert(ControlloaderUrl);

    function myKeyDownHandler(e)
    {        
        var isIE = false;
        if(!e) {     
            isIE = true;
            e = window.event;
        }
        if(e.keyCode == 122) {            
            if(isIE) {                
                e.keyCode = 0;
            }
            return false;
        }
        if(e.keyCode == 116) {            
            isPageRefreshed = true;
        }        
        return true;
     }
     
     function onBeforeUnloadEventHandler() {
         if (!isPageRefreshed && !isSessionEnded && !customerSwitching) {
             if (document.getElementsByName('isID') && document.getElementsByName('isID').length >0) {
                 var _url = ControlloaderUrl + document.getElementsByName('isID')[0].value + '&trkd=FFFF&AppVirDir=' + ApplicationVirtualDirectory;
                 //alert(_url);\n 
                 window.open(_url, 'anketisbank', 'resizable=0,scrollbars=0,status=1,top=50,left=50,width=450,height=300');
                 isSessionEnded = true;
             }
         }

         if (document.getElementById("DBLoadedCook")) {
             
             createCookie("DBLoadedCook", document.getElementById("DBLoadedCook").value, 1);
         }
     }

     function createCookie(name, value, days) {
         if (days) {
             var date = new Date();
             date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
             var expires = "; expires=" + date.toGMTString();
         }
         else var expires = "";
         document.cookie = name + "=" + value + expires + "; path=" + ApplicationVirtualDirectory;
     }

function GetVirtualDirectoryUrl() {
    var PathName = location.pathname;
    var VirtualDirectoryBeginPlace = PathName.indexOf("/", 0);
    var VirtualDirectoryEndPlace = PathName.indexOf("/", 1);

    //virtual directory caanot be extracted !!!

    if (VirtualDirectoryBeginPlace != 0 || VirtualDirectoryEndPlace == -1)
        return "internet";



    var VirtualDirectory = PathName.substring(1, VirtualDirectoryEndPlace);

    var v = ExtractDomainWithUrlForMTI();
    if (v != "")
        VirtualDirectory = v + "/" + VirtualDirectory;
    else
        VirtualDirectory = "/" + VirtualDirectory;

    return VirtualDirectory;

}
function isInsideVB() {
    return (parent.parent != parent._parent);
}

function ExtractDomainWithUrlForMTI() {
    if (!isInsideVB())
        return ""; 			// no YTI
    return ExtractDomain();
}

function ExtractDomain(whandle) {
    if (whandle == null)
        whandle = window;
    var path = whandle.location.href;
    var firstSlashes = path.indexOf("//", 0);
    var secondSlash = path.substring(firstSlashes + 2).indexOf("/", 0);
    secondSlash = secondSlash + firstSlashes + 2; // add two slash and firstslash
    if (firstSlashes == -1 || secondSlash == -1)
        return "";
    var middle = path.substring(0, firstSlashes + 2 + secondSlash);
    if (middle.indexOf(":") == -1)
        return middle;
    ////alert("this is test");
    var port = middle.substring(middle.indexOf(":") + 1);
    var domainUrlStart = path.substring(0, secondSlash);
    domainUrlStart = domainUrlStart.replace(":" + port, "");
    return domainUrlStart;
}


         document.onkeydown = myKeyDownHandler; window.onbeforeunload = onBeforeUnloadEventHandler;
     