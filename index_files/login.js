/**
 * Created by can.lermi on 04.02.2014.
 */


var appIsTablet = (document.getElementById("isTabletApp") != null && document.getElementById("isTabletApp").value == "true" ? "true" : "false");
var isPassToolTipOpen = false;
var hasPasswordError = false;


$(function ($) {
    //TODO jquery element variables should be defined here.
    var passInput = $("#ParolaText");
    var customerNoInputElement = $("#_ctl0_MusNoText");
    var bodyElement = $("body");
    var updateBrowserInfoContainerElement = $('#updateBrowserInfoContainer');
    var phoneNoInputElement = $("#phoneNumber");
    var rememberMusNoContainer = $("#_ctl0_rememberContainer");
    var rememberMusNoCheck = $("#_ctl0_ctlRemember");
    var clearRemembermusno = $("#clearRemembermusno");


    if (appIsTablet == "false") {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        if (msie < 0 && !isIE11) { //browsercheck_js
            // if customer no is empty focus it else focus pass
            if (customerNoInputElement.val() == "") {
                customerNoInputElement.focus();
            } else {
                setTimeout("$('#ParolaText').focus()", 200);
            }
        } else {

        }

        window.onkeydown = function (e) {
            e = e || window.event;
            var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
            if (!(charCode >= 48 && charCode <= 57) && !(charCode >= 96 && charCode <= 105)) {
                return;
            }

            // if not focused to another input
            if (document.activeElement.tagName == "INPUT") {
                return;
            }
            // if customer no is empty focus it else focus pass
            if (customerNoInputElement.val() == "") {
                customerNoInputElement.focus();
            } else {
                passInput.focus();
            }
        };

    } else {

    }


    $("#s2id_languageSelect input").prop("readonly", "true");

    /* OMNI
    $('#forgotPassword').on('click',function(){

    location = CONTEXT_ROOT + 'anindaSifre1.html';

    });
    OMNI */

    $('#refreshCaptcha').on('click', function () {
        // OMNI        
    });

    $('#loginErrorContainer').on('click', function () {
        if (CheckCookieEnabled() == false)
            return false;
        showAndHideLoginError(false);
    });

    customerNoInputElement.keyup(function (event) {
        if (customerNoInputElement.val().length > 0) {
            clearRemembermusno.show();
        } else {
            clearRemembermusno.hide();
        }
    });

    customerNoInputElement.keydown(function (event) {
        event = event || window.event;
        var charCode = (typeof event.which == "undefined") ? event.keyCode : event.which;
        var readOnly = customerNoInputElement.prop("readonly");
        if (readOnly === true && (charCode === 8 || charCode === 46)) {
            event.preventDefault();
            resetRemember();
        }
    });

    $(".infoQuestionMark").tooltip({
        position: {
            my: "left+10 top",
            at: "right top",
            using: function (position, feedback) {
                $(this).css(position);
            }

        },
        show: false,
        hide: false,
        open: function (event, ui) {
            passwordLostFocus();
        }
    });

    var tooltipAnimation = true;

    if (isIE8) {
        tooltipAnimation = false;
    }


    $("#customerNoInfo").tooltip({ content: '<div class="toolTipContent first">' + customerNoInfoText0 +
        '</div><div class="toolTipContent last">' + customerNoInfoText1 + '</div>', show: tooltipAnimation
    });
    $("#passInfo").tooltip({ content: '<div class="toolTipContent">' + passwordInfoText + '</div>', show: tooltipAnimation });

    $("#mobileInfo").tooltip({ content: '<div class="toolTipContent">' + mobilePhoneInfoText + '</div>', show: tooltipAnimation });

    if (appIsTablet != "true") {
        passInput.focus(function () {
            //TODO should be replaced with this: $("#passwordKeyPadContainer");
            if (CheckCookieEnabled() != false)
                $('.keyPadContainer').show();
        });
    }

    if (customerNoInputElement.val().indexOf("*") > -1 && rememberMusNoCheck.prop('checked') === true) {
        customerNoInputElement.prop("readonly", true);
        clearRemembermusno.show();  // ekran açýldýðýnda veri varsa X göster
    }

    function resetRemember() {
        customerNoInputElement.val("");
        customerNoInputElement.prop("readonly", false);
        clearRemembermusno.hide();
        customerNoInputElement.focus();
    }

    $("#_ctl0_rememberContainer").on('click', function () {
        rememberMusNoCheck.prop('checked', !rememberMusNoCheck.prop('checked'));
        if (rememberMusNoCheck.prop('checked') === false && customerNoInputElement.val().indexOf("*") > -1) {
            resetRemember();
        }
    });
    clearRemembermusno.on('click', function (event) {
        resetRemember();
        event.stopPropagation();
    });

    rememberMusNoCheck.on('click', function () {
        $("#_ctl0_rememberContainer").click();
    });

    keyPadFocusFix(function () {
        passInput.blur();
    });

    var mainContentHeight = $("#mainContent").height();

    var adjustNanoHeight = function (element, mainContentHeight) {
        if ($("#mainContent").height() == mainContentHeight) {
            $("#mainContent").css("min-height", mainContentHeight + 250);
        }

        element.find(".nano-content").css({ "overflow": "hidden" });
    };

    var securityTextContainer = $('#securityToolTipContainer');

    securityTextContainer.show();
    adjustNanoHeight(securityTextContainer, mainContentHeight);


    $('#helpInfoTipButton').click(function () {
        var helpInfoTextContainer = $('#helpInfoToolTipContainer');

        if (helpInfoTextContainer.is(':visible')) {
            helpInfoTextContainer.removeClass("show-help-info");
            $("#mainContent").css("min-height", mainContentHeight);
        } else {
            helpInfoTextContainer.addClass("show-help-info");
            adjustNanoHeight(helpInfoTextContainer, mainContentHeight);
        }
    });

    $('#languageFlagSelect').click(function () {

        var pageLanguageEnglish = $('#usaflaglabel');
        if (pageLanguageEnglish.hasClass("selected-language")) {
            if (document.getElementById("isTabletApp") && document.getElementById("isTabletApp").value == "true") {
                document.location.href = ApplicationVirtualDirectory + "/index.aspx?isTablet=true&OS=" + document.getElementById("osType").value + "&LangCode=en-US";
            }
            else {
                document.location.href = ApplicationVirtualDirectory + "/index.aspx?LangCode=en-US";
            }
        } else {
            if (document.getElementById("isTabletApp") && document.getElementById("isTabletApp").value == "true") {
                document.location.href = ApplicationVirtualDirectory + "/index.aspx?isTablet=true&OS=" + document.getElementById("osType").value + "&LangCode=tr-TR";
            } else {
                document.location.href = ApplicationVirtualDirectory + "/index.aspx?LangCode=tr-TR";
            }
        }

    });

    $('#close').click(function () {
        $('#updateBrowserInfoContainer').hide();
    });

    setTimeout(loginSetTimeout, 500);

    function loginSetTimeout() {
        //OMNI
        $('#liveSupport').show();
        //updateBrowserInfoContainer bu alan gösterilip gizleniyordu. 17.07.2017 tarihinde engellenen tarayýcýlar geliþtirmesiyle kaldýrýldý
    }

    var passwordLostFocus = function () {
        //TODO this should be replaced with an ID selector.
        $('.keyPadContainer').hide();
        //TODO this selectors should be saved to a variable.
        passInput.blur();
        //TODO this should be changed to an ID selector
        $('.virtualKeypad').css({ 'border': '1px solid #D3D3D3' });
    };

    var showAndHideLoginError = function (display, errorMessage) {

        var container = $('#loginErrorContainer');
        if (display) {
            if (typeof errorMessage != 'undefined') {
                container.children('.errorText').text(errorMessage);
            }
            container.show();
        }
        else {
            container.hide();
        }
    };

    var bindTouchEvents = function () {

        var customerNoInfo = $("#customerNoInfo");
        var passInfo = $("#passInfo");
        var mobileInfo = $("#mobileInfo");

        var captcha = $("#captcha");
        var phoneNumber = $("#phoneNumber");

        var keyPadContainer = $(".keyPadContainer");

        //TODO manual mouse events should be removed.
        customerNoInfo.on(window.touchEvents.touchStartEvent, function () {
            customerNoInfo.mouseover();
            touchOverlay.addClass("display-block");
            customerNoInputElement.blur();
            customerNoInfo.addClass("visibleElement");
        });

        passInfo.on(window.touchEvents.touchStartEvent, function () {
            passInfo.mouseover();
            touchOverlay.addClass("display-block");
            passInfo.addClass("visibleElement");
        });

        mobileInfo.on(window.touchEvents.touchStartEvent, function () {
            mobileInfo.mouseover();
            touchOverlay.addClass("display-block");
            phoneNoInputElement.blur();
            mobileInfo.addClass("visibleElement");
        });

        $(".touchOverlay").on("touchend", function (event) {
            $(".visibleElement").mouseout().removeClass("visibleElement");
            event.preventDefault();
            $(this).removeClass("display-block");
        });
    };

    if (window.touchEvents.hasNativeTouchEvents) {
        var touchOverlay = $(".touchOverlay");
        bindTouchEvents();
    }

});


