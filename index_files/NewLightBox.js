


//tüm window.openlarin çagiracagi method
function windowOpenerNew(url, pFrameElement) {
    
    if (url.indexOf("MainPageEnter") == 0 || url.indexOf("MainPageEnter") == 1)  // tüm mainpageenter lar tek düze sekilde çagrilmasi lazim. tablet degilse de / li yollamak lazim
    {
        url = GetVirtualDirectory() +"/" +url;
        JSBridge.SendUrl(JSON.stringify(PrepareMessageForContainer("OpenLink", "site", url)));
        return;
    }

    if (url.indexOf('.pdf') > 0) {
        if (url.indexOf("http") == 0) 
            JSBridge.SendUrl(JSON.stringify(PrepareMessageForContainer("OpenLink", "pdf", url)));
        else
            JSBridge.SendUrl(JSON.stringify(PrepareMessageForContainer("OpenLink", "pdf", ExtractDomain() + url)));
        return;
    }
    else if ((url.indexOf(ExtractDomain()) < 0 || url.indexOf("LiveCustomerServlet") > 0 || url.indexOf('iletisim-formu.aspx') > 0) && (url.indexOf("http://www") == 0 || url.indexOf("https://www") == 0 || url.indexOf("www") == 0 || url.indexOf("anadoluhayat.com.tr") > 0 || url.indexOf("tckimlik.nvi.gov.tr") > 0) || url.indexOf("AnadoluSigortaBasvuru.aspx") > 0) {
        if (url.indexOf("http://www") == 0 || url.indexOf("https://www") == 0 || url.indexOf("www") == 0 || url.indexOf("anadoluhayat.com.tr") > 0 || url.indexOf("tckimlik.nvi.gov.tr") > 0 || url.indexOf("AnadoluSigortaBasvuru.aspx") > 0)
            JSBridge.SendUrl(JSON.stringify(PrepareMessageForContainer("OpenLink", "site", url)));
        else
            JSBridge.SendUrl(JSON.stringify(PrepareMessageForContainer("OpenLink", "site", ExtractDomain() + url)));
        return;
    }

    var lBox = LBC.CreateLightBox({ type: "frame", url: url, openerFrame: pFrameElement });
} //eof


//lightbox class structure 
function Lightbox(options, pid) {
    this.counter = pid;
    this.id = "LightDiv" + this.counter;
    this.frame;
    this.contentDiv;
    this.contentInnerDiv;
    this.contentInnerDivOriginalParent;
    this.postSetFunction;
    this.fadediv;
    this.frameContainerDiv;
    this.lightDiv;
    this.closeDiv;
    this.zindex = "";
    this.onCloseFunc;
    this.onLoadFunc;
    this.closable = true;
    if (typeof (options) == "string") {
        this.url = options;
        this.urlType = "frame";
        this.openerFrame = window.icerik;
    }
    else if (typeof (options) == "object") {
        this.urlType = options.urlType; // div || frame
        this.url = options.url;  //div ID || frame url
        this.onCloseFunc = options.onCloseFunc; // function to call when lightbox is closed
        this.onLoadFunc = options.onLoadFunc; // function to call when lightbox loading is complete.
        this.closable = (typeof (options.closable) != "undefined") ? options.closable : this.closable;
        this.openerFrame = options.openerFrame || window.icerik;
    }

    this.loadingDiv;
    this.internalDocumentisHTML;
    this.contentLoaded = false;
    
}

//constructor
Lightbox.prototype =
{
    constructor: Lightbox,

    close: function () {
        if (this.id == "LightDiv0") {
            document.getElementById('secureBody').className = "";
        }

        this.frameContainerDiv.style.display = 'none';
        this.fadediv.style.display = 'none';
        this.closeDiv.style.display = 'none';
        switch (this.urlType) {
            case "frame":
            default:
                break;
            case "div": // for div items restore div to original place for reretrieval
                this.contentDiv.removeChild(this.contentInnerDiv);
                this.contentInnerDivOriginalParent.appendChild(this.contentInnerDiv);
                break;
        }
        if (this.onCloseFunc != null)
            this.onCloseFunc();
        return true;
    },
    closeLoading: function () {
        this.loadingDiv.style.display = 'none';
        if (!this.contentLoaded) {
            LBC.Close(this.counter);
        }
    },
    showLoading: function () {
        this.loadingDiv.style.display = 'block';
    },
    show: function () {
        this.fadediv.style.display = 'block'; // fade 
        this.frameContainerDiv.style.display = 'block';   // Lightcontainer
        //parent.parent.document.body.style.overflow = 'hidden';
    },
    frameLoad: function () {
        var willEnter = false;
        if (this.url.indexOf("http") < 0)
            willEnter = true;
        if (this.url.indexOf("http") >= 0 && this.url.indexOf(window.location.host) >= 0) //dis baglanti bize mi bakiyor?
            willEnter = true;

        if (this.urlType == "div") {
            this.internalDocumentisHTML = true;
        }
        else if (willEnter && this.frame.contentDocument != null && this.frame.contentDocument.body) //bu icerik null ise content html deðildir.
        {
            this.frame.contentWindow.opener = this.openerFrame || window.icerik;
            var currentLightBoxComponent = this;
            this.frame.contentWindow.close = function () { LBC.Close(currentLightBoxComponent.counter); };
            checkFrames(this.frame);
            this.internalDocumentisHTML = true;
        }

        if (this.id == "LightDiv0") {
            document.getElementById('secureBody').className = "noscroll";
        }

        this.contentLoaded = true;

        if (this.onLoadFunc != null)
            this.onLoadFunc();
    },

    set: function () {
        switch (this.urlType) {
            case "frame":
            default:
                this.frame = document.getElementById("LightFrame" + this.counter);
                break;
            case "div":
                this.contentDiv = document.getElementById("LightContentDiv" + this.counter);
                this.contentInnerDiv = document.getElementById(this.url);
                this.contentInnerDivOriginalParent = this.contentInnerDiv.parentNode;
                this.contentInnerDivOriginalParent.removeChild(this.contentInnerDiv);
                this.contentDiv.appendChild(this.contentInnerDiv);
                break;
        }

        this.fadediv = document.getElementById("FadeDiv" + this.counter);
        this.frameContainerDiv = document.getElementById("LightContainer" + this.counter);
        this.loadingDiv = document.getElementById('Loading' + this.counter);
        this.lightDiv = document.getElementById(this.id);
        this.closeDiv = document.getElementById("CloseDiv" + this.counter);
        this.zindex = (this.counter * 3) + 21000;
        this.fadediv.style.zIndex = this.zindex;
        this.frameContainerDiv.style.zIndex = this.zindex + 2;
        this.loadingDiv.style.zIndex = this.zindex + 3;
        this.closeDiv.style.zIndex = this.zindex + 4;
        this.internalDocumentisHTML;

        if (!this.closable)
            this.closeDiv.style.display = "none";

        if (this.postSetFunction != null)
            this.postSetFunction();

        if (document.getElementById("osType") != null && document.getElementById("osType").value == "android")
            this.frameContainerDiv.style.position = "absolute";
    },
    Render: function () {
        var html = '';
        html += "<div id='Loading" + this.counter + "' class='loading'><img src='omni/assets/img/circle_loading.gif' style='width:100px; height:100px;'></div>";
        html += "<div id='LightContainer" + this.counter + "' class='newwhite_content'  >";
        html += "<div id='CloseDiv" + this.counter + "' class='closeButton' onclick='LBC.Close(" + this.counter + ", \"user\");'><img src='omni/assets/img/close_icon.png' class='closeImage' onclick='LBC.Close(" + this.counter + ", \"user\");'/></div>";
        switch (this.urlType) {
            case "frame":
            default:
                var ostype = document.getElementById("osType").value;
                switch (ostype) {
                    case "Win8":
                        html += "<iframe id='LightFrame" + this.counter + "' class='lightFrame' src='" + this.url + "' onLoad='LBC.FrameLoad(" + this.counter + ");LBC.Show(" + this.counter + ");LBC.Resize(" + this.counter + ");LBC.CloseLoading(" + this.counter + ");'>";
                        html += "</iframe>";
                        break;
                    case "ios":
                    case "android":
                    default:
                        html += "<iframe id='LightFrame" + this.counter + "' class='lightFrame' src='" + this.url + "' onLoad='LBC.FrameLoad(" + this.counter + ");LBC.Resize(" + this.counter + ");LBC.Show(" + this.counter + ");LBC.CloseLoading(" + this.counter + ");'>";
                        html += "</iframe>";
                        break;
                }
                break;
            case "div":
                html += "<div id='LightContentDiv" + this.counter + "' class='lightFrame'></div>";
                this.postSetFunction = function () { LBC.FrameLoad(this.counter); LBC.Resize(this.counter); LBC.Show(this.counter); LBC.CloseLoading(this.counter) };
                break;
        }
        html += "</div>"
        var unselectable = "newblack_overlay";
        if (this.closeable)
            unselectable += " unselectable";
        html += "<div id='FadeDiv" + this.counter + "' class='" + unselectable + "' onclick='LBC.Close(" + this.counter + ", \"user\");'>   </div>";
        return html;
    },
    setLightSize: function (width, height) {
        this.frame.style.width = width + 'px';
        this.lightDiv.style.width = width + 'px';
        this.frameContainerDiv.style.width = width + 'px';
        this.frame.style.height = height + 'px';
        this.lightDiv.style.height = height + 'px';
        this.frameContainerDiv.style.height = height + 'px';
    },
    setDarkSize: function (width, height) {
        this.fadediv.style.width = width + 'px';
        this.fadediv.style.height = height + 'px';
    },
    setSize: function (pwidth, pheight) {
        switch (this.urlType) {
            case "frame":
            default:
                this.frame.style.width = pwidth + 'px';
                this.frame.style.height = pheight + 'px';
                break;
            case "div":
                this.contentDiv.style.width = pwidth + 'px';
                this.contentDiv.style.height = pheight + 'px';
                break;
        }
        this.frameContainerDiv.style.width = pwidth + 'px';
        this.frameContainerDiv.style.height = pheight + 20 + 'px';

    },
    setCloseButtonPosition: function (pwidth, pheight, ptop, pright) {
        this.closeDiv.style.width = pwidth + 'px';
        this.closeDiv.style.heigth = pheight + 'px';
    },
    setloadingDivPosition: function () {
        var sWidth = LBC.GetViewPortSize().width;
        var sHeight = LBC.GetViewPortSize().height;
        this.loadingDiv.style.top = (sHeight / 2) - 50 + 'px';
        this.loadingDiv.style.left = (sWidth / 2) - 50 + 'px';
    },
    resize: function () {

        if (!this.contentLoaded)
            return;
        var viewPortSize = LBC.GetViewPortSize();
        var screenWidth = viewPortSize.width;
        var screenHeight = viewPortSize.height;
        var width;
        var height;
        this.setloadingDivPosition();
        if (this.internalDocumentisHTML == false) {
            this.setSize(screenWidth - 20, screenHeight - 40);
            this.setCloseButtonPosition(screenWidth - 20, screenHeight + 20);
        }
        else {
            var maxContent;
            switch (this.urlType) {
                case "frame":
                default:
                    maxContent = LBC.ScanFrames(this.frame);
                    break;
                case "div":
                    maxContent = { width: 720, height: 300 };
                    break;
            }

            var contentWidth = maxContent.width;
            var contentHeight = maxContent.height;
            if (contentWidth <= 600 && contentHeight <= 600) {
                //smaller screen contents
                if (contentWidth > 500)
                    var w = contentWidth;
                else
                    var w = 500;

                if (contentHeight > 500)
                    var h = contentHeight;
                else
                    var h = 500;

                this.setSize(w, h);
                this.setCloseButtonPosition(w, 24);
            }
            else {
                var h = contentHeight;
                var w = contentWidth;
                var widthMax = screenWidth - 20;
                var heightMax = screenHeight - 35;
                if (contentWidth >= widthMax)
                    w = widthMax;
                else if (contentWidth < 500)
                    w = 500;
                if (contentHeight >= heightMax)
                    h = screenHeight - 50;

                //wide screen contents
                this.setSize(w, h);
                this.setCloseButtonPosition(w, 24);

            }
        }

    }
};



//Lightboxcontainer structure
function LightboxContainer() {
    this.lightboxArray = [];
    this.CanvasDiv = document.getElementById('canvasDiv');
}

LightboxContainer.prototype =
{
    constructor: LightboxContainer,

    GetViewPortSize: function () {
        var w = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;

        var h = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;
        return { width: w, height: h };
    },
    CreateLightBox: function (options) {
        if (LBC.CanvasDiv == null)
            LBC.CanvasDiv = document.getElementById('canvasDiv');
        var lBox = new Lightbox(options, this.lightboxArray.length);
        this.lightboxArray[this.lightboxArray.length] = lBox;
        var lightDiv = document.createElement("div");
        lightDiv.id = lBox.id;
        lightDiv.innerHTML = lBox.Render();
        this.CanvasDiv.appendChild(lightDiv);
        lBox.set();
        return lBox;
    },
    Resize: function (cid) {
        var element = this.FindElement(cid).found;
        element.resize();
    },

    FindElement: function (cid) {
        var element = { found: "undefined", index: -1 };
        for (var i = 0; i < this.lightboxArray.length; i++) {
            if (this.lightboxArray[i].counter == cid) {
                element.found = this.lightboxArray[i];
                element.index = i;
                return element;
            }
        }
    },
    FrameLoad: function (cid) {
        var element = this.FindElement(cid).found;
        element.frameLoad();
    },
    Show: function (cid) {
        var element = this.FindElement(cid).found;
        element.show();
    },
    Close: function (cid, triggeredBy) {
        if (triggeredBy == undefined)
            document.getElementById('secureBody').className = "";
        var response = this.FindElement(cid);
        var element = response.found;
        var index = response.index;

        if (!element.closable && triggeredBy == "user")
            return;
        var id = element.id;
        element.close();
        this.CanvasDiv.removeChild(element.lightDiv);
        this.lightboxArray.splice(index, 1);
    },
    CloseLoading: function (cid) {
        var found = this.FindElement(cid);
        var element = found.found;
        element.closeLoading();
    },
    ShowLoading: function (cid) {
        var found = this.FindElement(cid);
        var element = found.found;
        element.showLoading();
    },
    ScanFrames: function (frame) {
        var innerFrame;
        var maxSizes = { width: 0, height: 0 };
        var innerMax = { width: 0, height: 0 };
        if (typeof (frame.contentWindow) != "undefined")
            frame = frame.contentWindow;
        maxSizes.width = frame.document.body.scrollWidth;
        maxSizes.height = frame.document.body.scrollHeight;

        for (var i = 0; i < frame.frames.length; i++) {
            innerFrame = frame.frames[i];
            if (innerFrame.document != "undefined") {
                if (innerFrame.document.body.scrollWidth > maxSizes.width)
                    maxSizes.width = innerFrame.document.body.scrollWidth;
                if (innerFrame.document.body.scrollHeight > maxSizes.height)
                    maxSizes.height = innerFrame.document.body.scrollHeight;

                innerMax = this.ScanFrames(innerFrame);

                if (innerMax.width > maxSizes.width)
                    maxSizes.width = innerMax.width;
                if (innerMax.height > maxSizes.height)
                    maxSizes.height = innerMax.height;
            }

        }
        return maxSizes;
    }
};

var LBC = new LightboxContainer();


window.onload = function (onload) {
    var topMostIframe = { contentWindow: window, contentDocument: window.document, overrides: { onload: true, open: false, hrefs: false} };
    return function () {
        if (onload != null)
            onload();
        if (document.getElementById("isTabletApp").value != "true")
            return;
        checkFrames(topMostIframe);
    }
} (window.onload);



function checkFrames(frameElement) {

    if (frameElement.contentDocument == null && frameElement.document == null) //bu icerik null ise content html degildir.
        return;

    if (typeof (frameElement.overrides) == "undefined")
        frameElement.overrides = { onload: false, open: false, hrefs: false };

    //win8 için alertlerin override olmasi
    if (document.getElementById('osType').value == "Win8") {
        overrideAlertForWindows(frameElement.contentWindow);
    }

    //href lerin override olmasi
    if (!frameElement.overrides.hrefs) {
        overrideHrefs(frameElement.contentWindow);
        frameElement.overrides.hrefs = true;
    }

    //window.openlarin override olmasi - yapildi
    if (!frameElement.overrides.open) {
        overrideOpenFunctionWithFrame(frameElement.contentWindow);
        frameElement.overrides.open = true;
    }

    if (!frameElement.overrides.onload) {
        frameElement.onload = function (onload) {
            return function () {
                if (onload != null)
                    onload.call(frameElement);
                frameElement.overrides.open = frameElement.overrides.hrefs = false;
                checkFrames(frameElement);
            }
        } (frameElement.onload);
        frameElement.overrides.onload = true;
    }

    var items = frameElement.contentWindow.document.getElementsByTagName("iframe");
    if (items.length > 0)
        for (var i = 0; i < items.length; i++)
            checkFrames(items[i]);
}

function overrideHrefs(pFrameWindow) {
    var items = pFrameWindow.document.getElementsByTagName("a");

    for (var i = 0; i < items.length; i++) {
        var href = items[i].attributes.href;
        var target = items[i].target;
        if (href != "undefined" && href != undefined)//href dolu ise
        {
            if ( href.value.length > 0 && href.value.toLowerCase().indexOf('javascript') == -1 && href.value.toLowerCase().indexOf('#') == -1)//length 0 dan uzun, href.toLower javascript ile baslamiyor ve diyez içermiyor ise
            {
                if ( target!=undefined && target!="" &&  target.indexOf('_self') == -1 && target.indexOf('_parent') == -1 && target.indexOf('_top') == -1 && target.indexOf('icerik') == -1) //target var ve _self,_parent,_top, icerik degil ise
                {
                    addOnClickToHref(items[i],href);
                }//if3
                else
                    continue;
            }//if2
            else
                continue;
        }//if1
        else
            continue;  
    }//for
}//eof


function addOnClickToHref(pItem, pHref) {
    pItem.onclick = function (hrefValue) { return function () { parent.parent.windowOpenerNew(hrefValue, window);return false; }; } (pHref.value);
}

//parametre gelen frame içindeki window.open lari override eder.
function overrideOpenFunctionWithFrame(pFrameWindow) {
    pFrameWindow.open = function (targetFrame, open) {
        return function () { windowOpenerNew(arguments[0], targetFrame); };
    } (pFrameWindow, pFrameWindow.open);
}

function overrideAlertForWindows(pFrameWindow) {
    pFrameWindow.alert = function (orgAlert) {
        return function (msg) {
            var jsonMsg = JSON.stringify(PrepareMessageForContainer("Alert", "jsAlert", msg));
            window.external.notify(jsonMsg);
        };
    } (pFrameWindow.alert);
}

function PrepareMessageForContainer(pAction, pType, pSrc) {
    var obj = { action: pAction, content: { type: pType, src: pSrc} };
    return obj;
}