

function showPassInfo1() {
    $('#z5-infobox').toggle();
}

function Z5Process() {
    isJsCookie.Delete('Z6IgaLogonType');

    isJsCookie.Delete('StatusByDiyalog');

    $('.ui-login-z5').css("display", "block");

    try {
        $("#z5-tab-content").height($("#Z5ContentTable").height() + 30);
    }
    catch (ex) {
    }
    
    var LoginTabSelector = 'div[ISlogontype="M"]';
    
    $(LoginTabSelector).trigger('click');

    if (document.forms[0]._ctl0_SubeLogin01_btnGiris)
        document.forms[0]._ctl0_SubeLogin01_btnGiris.disabled = false;
}



$(document).ready(function () {

    ////login page.
    //if ($("#ParolaText").length > 0) {
    //    var passwordElement = document.getElementById("ParolaText");
    //    if (isjsBrowser.GetBrowserName() == 'Chrome' || isjsBrowser.GetBrowserName() == 'CriOS' || isjsBrowser.GetBrowserName() == 'Safari' ) {
    //        passwordElement.setAttribute("type", "tel");
    //        passwordElement.classList.add("ChromeAutoCompleteOff");
    //    } else {
    //        passwordElement.setAttribute("type", "password");
    //        passwordElement.classList.remove("ChromeAutoCompleteOff");
    //    }
    //}

    if ($("#ParolaText").length > 0) {
        $("#ParolaText").val('');
        var passwordElement = document.getElementById("ParolaText");
        passwordElement.setAttribute("type", "tel");
        passwordElement.classList.remove("fontFamilyTextSecurity");
    }

    //Z5 Tab
    $('.z5-tab-item').click(function () {
        $('.z5-tab-item').css({ 'background-position': 'bottom' });
        $(this).css({ 'background-position': 'top' });

        $('.z5-tab-content-item').css({ 'display': 'none' });
        $('#z5-tab-content .z5-tab-content-item:nth-child(' + ($(this).index() + 1) + ')').css({ 'display': 'block' });

        document.getElementById('_ctl0_TxtTCKN').value = '';
        document.getElementById('_ctl0_MusNoText').value = '';
        document.getElementById('_ctl0_TxtKart').value = '';

        //Initialize Tabs
            document.getElementById('_ctl0_MusNoText').focus();
    });

    if ($("#z5-tab-wrapper").length > 0) {
        //DEFAULTS
        //1 musno, 2 tckn, 3 kredi
        Z5Process();
    }

    if ($('#z6-tab-wrapper').length > 0) {
        Z6Process();
    }


    //Z6 Tab Click
    $('.z6-tab-item').click(function () {
        $('.z6-tab-item').css({ 'background-position': 'top' });
        $(this).css({ 'background-position': 'bottom' });
        //Tiklanan IGA tipi aliniyor.
        var LoginIGAType = $(this).attr('ISIGAType');

        isJsCookie.Create('Z6IgaLogonType', LoginIGAType, 1);
        //Hidden'a atiliyor.
        document.getElementById('LogonIGAType').value = LoginIGAType;
        
        //Tüm div'ler kapatiliyor.
        $('.z6-tab-content-item').css({ 'display': 'none' });
        //Cep Anahtar ve I anahtar ayni div içerisinde gösteriliyor. 
        //Textbox'lar degisiyor sadece.

        if (LoginIGAType == 'CepAnahtar' || LoginIGAType == 'IAnahtar' || LoginIGAType == 'Ekimlik') {
            if (LoginIGAType == 'CepAnahtar') {
                document.getElementById('divZ6CepAnahtarIAnahtarLabel').style.display = "block";
                document.getElementById('divZ6CepAnahtarTextBox').style.display = "block";
                document.getElementById('divZ6IAnahtarTextBox').style.display = "none";
                document.getElementById('tblRowResend').style.display = "none";
                if ($("#_ctl0_Z6_IGA_PnlSoftOtpSynch").length > 0) {
                    $("#_ctl0_Z6_IGA_PnlSoftOtpSynch").show();
                }
                $('#z6-tab-content-wrapper').height($('#_ctl0_PnlZ6CepAnahtarTabContent').height());
            }
            else if (LoginIGAType == 'IAnahtar') {
                document.getElementById('divZ6CepAnahtarIAnahtarLabel').style.display = "block";
                document.getElementById('divZ6IAnahtarTextBox').style.display = "block";
                document.getElementById('divZ6CepAnahtarTextBox').style.display = "none";
                document.getElementById('tblRowResend').style.display = "none";
                if ($("#_ctl0_Z6_IGA_PnlSoftOtpSynch").length > 0) {
                    $("#_ctl0_Z6_IGA_PnlSoftOtpSynch").hide();
                }
                $('#z6-tab-content-wrapper').height($('#_ctl0_PnlZ6CepAnahtarTabContent').height());
            }
            else if (LoginIGAType == 'Ekimlik') {

                document.getElementById('divZ6CepAnahtarIAnahtarLabel').style.display = "none";
                document.getElementById('divZ6IAnahtarTextBox').style.display = "none";
                document.getElementById('divZ6CepAnahtarTextBox').style.display = "none";
                document.getElementById('tblRowResend').style.display = "none";
                if ($("#_ctl0_Z6_IGA_PnlSoftOtpSynch").length > 0) {
                    $("#_ctl0_Z6_IGA_PnlSoftOtpSynch").hide();
                }
                $('#z6-tab-content-wrapper').height($('#_ctl0_PnlZ6CepAnahtarTabContent').height());
            }



            $("div[ISIGAType='CepAnahtarIAnahtar']").show();
            try { window.setTimeout("document.getElementById('CepIAnahtarSifreText').focus();", 200); } catch (ex) { };
            if ($("#_ctl0__ctl0_lblZ6MImzaSifrePanel").length > 0 && $("#_ctl0_Z6_IGA_lblZ6CepAnahtarSifrePanel").html() == " ") {
                var tempPass = $("#_ctl0__ctl0_lblZ6MImzaSifrePanel").html();
                $("#_ctl0_Z6_IGA_lblZ6CepAnahtarSifrePanel").html(tempPass);
                $('#z6-tab-content-wrapper').height($('#_ctl0_PnlZ6CepAnahtarTabContent').height());
            }
        }
        else
            $("div[ISIGAType='" + LoginIGAType + "']").show();


        if (LoginIGAType == 'MobilImza') {

            if (document.getElementById("hashFailed").value == "1") {
                document.getElementById('tblRowResend').style.display = "block";
                document.getElementById('_ctl0_Z6_IGA_SubeLogin02_CepAnahtarBtnGiris').disabled = true;
            }

            $('#z6-tab-content-wrapper').height($('#_ctl0_PnlZ6MobilImzaTabContent').height());
            if ($("#_ctl0__ctl0_lblZ6MImzaSifrePanel").length > 0) {
                if ($("#_ctl0_Z6_IGA_lblZ6CepAnahtarSifrePanel").length > 0) {
                    var tempPass = $("#_ctl0_Z6_IGA_lblZ6CepAnahtarSifrePanel").html();
                    
                    $("#_ctl0__ctl0_lblZ6MImzaSifrePanel").html(tempPass);
                    $("#_ctl0_Z6_IGA_lblZ6CepAnahtarSifrePanel").html(" ");
                }
            }
            window.setTimeout("try{document.getElementById('MobilImzaSifreText').focus();}catch(ex){}", 100);
        }        
    });

});

/* Login-Mask */
function EnableWoff() {
    if ($("#ParolaText").length > 0) {
        var passwordElement = document.getElementById("ParolaText");
        passwordElement.classList.add("IsbankWoff");
        passwordElement.setAttribute("placeholder", "");
    }
}

function DisableWoff() {
    if ($("#ParolaText").length > 0) {
        var passwordElement = document.getElementById("ParolaText");
        passwordElement.classList.remove("IsbankWoff");
        passwordElement.placeholder = document.getElementById('ParolaText').title;
    }
}



function addFontFamilyTextSecurity(eventResult) {
    var value = document.getElementById("ParolaText").value;

    if (value.length > 0) {
        var passwordElement = document.getElementById("ParolaText");
        passwordElement.classList.add("fontFamilyTextSecurity");
    }
    else if (value.length >= 0 && eventResult == true) {
        var passwordElement = document.getElementById("ParolaText");
        passwordElement.classList.add("fontFamilyTextSecurity");
    }
}

function removeFontFamilyTextSecurity() {
    var value = document.getElementById("ParolaText").value;
    if (value.length <= 0) {
        var passwordElement = document.getElementById("ParolaText");
        passwordElement.classList.remove("fontFamilyTextSecurity");
    }
}



function setSifreTextZ6() {
    $("#SifreText").val($('#mobileConfirmationCode').val());
}

function setSifreTextNetAnahtar() {
    $("#SifreText").val($("#SifreTextNetAnahtar").val());
}

function showZ6LB() {
    $('#z6-shade').width($(document).width());
    $('#z6-shade').height($(document).height());
    $('#z6lb-wrapper').css({ 'left': ($(window).width() - $('#z6lb-wrapper').width()) / 2 });
    $('#z6lb-wrapper').css({ 'top': 100 });
    $('#z6-shade').css({ 'display': 'block' });
    $('#z6lb-wrapper').css({ 'display': 'block' });
}

function hideZ6LB() {
    $('#z6-shade').css({ 'display': 'none' });
    $('#z6lb-wrapper').css({ 'display': 'none' });
    $('#z6-shade').width(0);
    $('#z6-shade').height(0);
    $('#z6lb-wrapper').css({ 'left': 0 });
    $('#z6lb-wrapper').css({ 'top': 0 });
}
function setLogonIGAType(selectedIGA) {
 

    document.getElementById('LogonIGAType').value = selectedIGA;

    if (selectedIGA == "MobilImza") {
        if (document.getElementById('hashFailed') && document.getElementById('hashFailed').value == "1") {
            document.getElementById('secondFactorMobilImzaButton').disabled = true;
        }
        else {
            document.getElementById('secondFactorMobilImzaButton').disabled = false;

            if (document.getElementById("mobileSignatureAsyncProcessContinues") != undefined
            && document.getElementById("mobileSignatureAsyncProcessContinues").value == 1) {
                AjaxMobileSignatureAsyncSignStartFunc();
            }
        }
    }
}
    //Pop Up açan method inline eklenen sube giris üst menüden alinip buraya eklendi
    function OpenPopup(DosyaAdi, Dosya, Genislik, Yukseklik) {
        leftPos = 0
        topPos = 0
        if (screen) {
            leftPos = parseInt((screen.width - Genislik) / 2)
            topPos = parseInt((screen.height - Yukseklik) / 2)
        }
        var popup = window.open(DosyaAdi, Dosya, 'width=' + screen.width + ',height=' + screen.height + ',left=' + leftPos + ',top=' + topPos + ',resizable=no,status=no,scrollbars=yes');
        var appIsTablet = (document.getElementById("isTabletApp") != null && document.getElementById("isTabletApp").value == "true");
        if (popup == null && !appIsTablet) {
            alert('Isbank.com.tr \' deki tüm sayfalara ulaþabilmek için açýlýr pencere engelleyicisini \n (pop-up blocker) kapatmanýz veya Isbank.com.tr\'yi “Ýzin verilen siteler” (allowed sites) listesine eklemeniz gerekmektedir.');
        }
    }