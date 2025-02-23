function NewWindow(mypage, myname, w, h, scroll, pos, _resizable) {
    var win = null;
    if (pos == "random") {
        LeftPosition = (screen.width) ? Math.floor(Math.random() * (screen.width - w)) : 100;
        TopPosition = (screen.height) ? Math.floor(Math.random() * ((screen.height - h) - 75)) : 100;
    }
    if (pos == "center") {
        LeftPosition = (screen.width) ? (screen.width - w) / 2 : 100;
        TopPosition = (screen.height) ? (screen.height - h) / 2 : 100;
    }
    else if ((pos != "center" && pos != "random") || pos == null) {
        LeftPosition = 0;
        TopPosition = 20;
    }

    if (_resizable) {
        settings = 'width=' + w + ',height=' + h + ',top=' + TopPosition + ',left=' + LeftPosition + ',scrollbars=' + scroll + ',location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=' + _resizable;
    }
    else {
        settings = 'width=' + w + ',height=' + h + ',top=' + TopPosition + ',left=' + LeftPosition + ',scrollbars=' + scroll + ',location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no';
    }
    win = window.open(mypage, myname, settings);
}
function formatIBAN() {
    var ibanOld = document.forms[0]._ctl0_TanimsizHesabaHavaleTab_txtIBAN.value;
    var ibanNew = '';
    for (i = 0; i < ibanOld.length; i++) {
        letter = ibanOld.charAt(i);

        if (i < 2) {
            ibanNew += letter.toUpperCase();
        }
        else {
            if (letter != ' ')
                ibanNew += letter;
            else
                ;
        }

    }

    document.forms[0]._ctl0_TanimsizHesabaHavaleTab_txtIBAN.value = ibanNew;
}
function isRemember(f) {
    var starcount = 0; var numeric = "";
    for (i = 0; i < (f.length); i++) {
        if (f.charAt(i) === '*') {
            starcount++;
        } else if (f.charAt(i) < '0' || f.charAt(i) > '9') {

        } else {
            numeric += f.charAt(i);
        }
    }
    var pad = "***********";
    var ans = pad.substring(0, pad.length - numeric.length) + numeric;
    var remember = ((f === ans) && $("#_ctl0_ctlRemember").prop('checked'));
    return remember;
}
function CheckHesapSecimi(source) {
    if (source == "havale") {
        if (document.forms[0].TanimsizHesabaHavaleTab_rdSubeHesapGiris && document.forms[0].TanimsizHesabaHavaleTab_rdSubeHesapGiris.checked == true) {
            document.forms[0]._ctl0_TanimsizHesabaHavaleTab_txtIBAN.value = "";
            document.forms[0]._ctl0_TanimsizHesabaHavaleTab_txtIBAN.disabled = true;

            document.forms[0].TanimsizHesabaHavaleTab_btnSubeSec.disabled = false;
            document.forms[0].TanimsizHesabaHavaleTab_txtSube.disabled = false;
            document.forms[0].TanimsizHesabaHavaleTab_txtHesap.disabled = false;
        }
        else {
            document.forms[0].TanimsizHesabaHavaleTab_btnSubeSec.disabled = true;
            document.forms[0].TanimsizHesabaHavaleTab_txtSube.value = "";
            document.forms[0].TanimsizHesabaHavaleTab_txtSube.disabled = true;
            document.forms[0].TanimsizHesabaHavaleTab_txtHesap.value = "";
            document.forms[0].TanimsizHesabaHavaleTab_txtHesap.disabled = true;

            document.forms[0]._ctl0_TanimsizHesabaHavaleTab_txtIBAN.disabled = false;
        }
    }
}


function ChangeTrkd(trkd) {
    document.forms[0].trkd.value = trkd;
}

function Redirect_ControlLoader_For_QuickAccess(trkd, id) {

    document.forms[0].action = "ControlLoader.aspx?trkd=" + document.forms[0].trkd.value + "&hizlimenutrkd=" + document.forms[0].hizlimenutrkd.value + "&hizlimenutip=" + document.forms[0].hizlimenutip.value + "&id=" + id
    document.forms[0].method = "POST";
    document.forms[0].trkd.value = trkd;
    document.forms[0].__VIEWSTATE.name = "NOVIEWSTATE";
}
function EskiVazgec(trkd, id) {
    document.forms[0].action = "MainLoader.aspx?id=" + id;
    document.forms[0].method = "Get";
    document.forms[0].trkd.value = trkd;
    document.forms[0].__VIEWSTATE.name = "NOVIEWSTATE";
}
function Redirect_Container(trkd, id) {
    document.forms[0].action = "Container.aspx?id=" + id;
    document.forms[0].method = "Get";
    document.forms[0].trkd.value = trkd;
    document.forms[0].__VIEWSTATE.name = "NOVIEWSTATE";
}
function checkneeded() {
    if (!document.forms[0]._ctl0_ParolaDegistir_chkboxSifreDegistir.checked) {
        alert(CheckFields_msgSifreAciklama);
        document.forms[0]._ctl0_ParolaDegistir_chkboxParolaDegistir.focus();
        return false;
    }
    else {
        return true;
    }
}

function CheckCookieEnabled()
{
	if(navigator.cookieEnabled == false)
	{	
		disabledCookieDetected();
		return false;
	}
	return true;
	
}

function CheckFields(trkd) {
    var i;
    var f;
    var ZeroCounter = 0;
    switch (trkd) {
        case "logon1":
        case "logon1j":

            try {
				
				if(navigator.cookieEnabled == false){
					return false;
				}
				
                f = document.forms[0]._ctl0_MusNoText.value;
                if (f.length == 10) {
                    showInputBottomErrorMessage($('#_ctl0_MusNoText'), CheckFields_msgCustTcknYKNError);
                    document.forms[0]._ctl0_MusNoText.blur();
                    return false;
                }
                var remember = isRemember(f);
                var z5LoginType = f.length > 10 ? "T" : "M"; //M : Müşteri No ile logon   ,   T : TCKN ile logon

                if (f == "") {
                    //alert(CheckFields_msgMusNoGir);
                    showInputBottomErrorMessage($('#_ctl0_MusNoText'), CheckFields_msgMusNoGir);
                    document.forms[0]._ctl0_MusNoText.blur();
                    return false;
                }
                if (f.length == 2) {
                    //alert(CheckFields_msgMusNoGir);
                    showInputBottomErrorMessage($('#_ctl0_MusNoText'), CheckFields_msgMusNoUzunluk);
                    document.forms[0]._ctl0_MusNoText.blur();
                    return false;
                }
                if (!remember) {
                    for (i = 0; i < (f.length); i++) {

                        if (f.charAt(i) < '0' || f.charAt(i) > '9') {
                            //alert(CheckFields_msgMusNoSayisalOlmali);
                            showInputBottomErrorMessage($('#_ctl0_MusNoText'), CheckFields_msgMusNoSayisalOlmali);
                            document.forms[0]._ctl0_MusNoText.blur();
                            return false;
                        }
                        if (f.charAt(i) == '0') {
                            ZeroCounter++;
                        }
                    }
                }
                if (f.length == ZeroCounter) {
                    //alert(CheckFields_msgMusNo0danBuyukOlmali);
                    showInputBottomErrorMessage($('#_ctl0_MusNoText'), CheckFields_msgMusNo0danBuyukOlmali_login);
                    document.forms[0]._ctl0_MusNoText.blur();
                    return false;
                }

                ZeroCounter = 0;
            }
            catch (e)
            { }

            //Captcha güvenlik kodu kontrol ediliyor.
            try {
                if (CaptchaControl) {
                    var CaptchaValue = document.forms[0].captcha.value;
                    if (CaptchaValue == "") {
                        //alert(LogonCaptchaEmpty);
                        showInputBottomErrorMessage($('#captcha'), LogonCaptchaEmpty);
                        document.forms[0].captcha.blur();
                        return false;
                    }

                    if (CaptchaValue.length < 6) {
                        //alert(LogonCaptchaInvalid);
                        showInputBottomErrorMessage($('#captcha'), LogonCaptchaInvalid);
                        document.forms[0].captcha.blur();
                        return false;
                    }
                }
            }
            catch (e) { }

            //captcha + cep tel sorulduğu case için cep tel kontrolü 04.01.2014(1nisan) - mustafa
            try {
                if (document.forms[0].phoneNumber) {
                    var CepTelValue = document.forms[0].phoneNumber.value;
                    if (CepTelValue == "") {
                        showInputBottomErrorMessage($('#phoneNumber'), LogonCaptchaPhoneEmpty);
                        document.forms[0].phoneNumber.blur();
                        return false;
                    }

                    if (CepTelValue.length < 2) {
                        showInputBottomErrorMessage($('#phoneNumber'), LogonCaptchaPhoneInvalid);
                        document.forms[0].phoneNumber.blur();
                        return false;
                    }
                }
            }
            catch (e) { }

            var parolatext = document.forms[0].ParolaText.value;
            if (parolatext == "") {
                showInputBottomErrorMessage($('#ParolaText'), CheckFields_msgInternetSifreGir);
                document.forms[0].ParolaText.blur();
                return false;
            }
            if (!isNumericForLogon(parolatext)) {
                showInputBottomErrorMessage($('#ParolaText'), checkFieldsSifreNumber);
                document.forms[0].ParolaText.blur();
                return false;
            }
            if (parolatext.length < 6) {
                showInputBottomErrorMessage($('#ParolaText'), CheckFields_msgIntSifre6HaneliOlmali);
                document.forms[0].ParolaText.blur();
                return false;
            }
            //}

            // rsa modulus degeri varsa encrypt edilmeli demektir. 
            if (document.getElementById("rsamodulus") != null && document.getElementById("rsamodulus").value != "") {
                try {
                    var rsamodulus = document.getElementById("rsamodulus").value;
                    var rsaexponent = document.getElementById("rsaexponent").value;
                    setMaxDigits(260);
                    var RSAKey = new RSAKeyPair(rsaexponent, "", rsamodulus);
                    var EncStr = encryptedString(RSAKey, parolatext);
                    document.getElementById("encstr").value = EncStr;
                    document.forms[0].ParolaText.value = "111111";
                } catch (e) {
                    document.getElementById("rsamodulus").value = '';
                    document.getElementById("rsaexponent").value = '';
                    document.getElementById("encstr").value = '';
                }
            }

            var disableButton = false;
            var browserAgent = navigator.userAgent.toLowerCase();
            if (browserAgent.indexOf('msie') > -1)
                disableButton = true;
            else if (browserAgent.indexOf('opera') > -1)
                disableButton = true;
            else if (browserAgent.indexOf('chrome') > -1)
                disableButton = true;

            if (disableButton) {
                document.forms[0]._ctl0_SubeLogin01_btnGiris.disabled = true;
                if (trkd == "logon1") {
                    try { $('.keypad-special').click(); } catch (ex) { } //Microsoft Edge Jquery Pinpad memory fix - AB56041
                    document.forms[0].submit();
                    return false;
                }
            }
            break;
        case "logon2":

            //            if ((document.forms[0]._ctl0_AdText) && (document.forms[0]._ctl0_AdText.value == "")) {
            //                alert(CheckFields_msgAdGir);
            //                document.forms[0]._ctl0_AdText.focus();
            //                return false;
            //            }
            //            if ((document.forms[0]._ctl0_SoyadText) && (document.forms[0]._ctl0_SoyadText.value == "")) {
            //                alert(CheckFields_msgSoyadGir);
            //                document.forms[0]._ctl0_SoyadText.focus();
            //                return false;
            //            }
            try {
                if (!SifreCheckForZ6()) {
                    return false;
                }
                else return IGACheck();
            }
            catch (e) {
                return true;
            }
            break;

        case "logon2Multiple":
            try {
                if (!SifreCheckForZ6()) {
                    return false;
                }
                else return IGACheckForMultiple();
            }
            catch (e) {
                return true;
            }
            break;

        case "GSIF":
            f = document.forms[0].SifreText.value;
            if (f.charAt(0) == '0') {
                //alert(CheckFields_msgIntGeciciSifreAciklama);
                //focusZ6();
                showInputBottomErrorMessage($('#SifreText'), CheckFields_msgIntGeciciSifreAciklama);
                return false;
            }

            if (!GeciciSifreCheck()) {
                return false;
            }
            else return IGACheck();
            break;
        case "parola0":
            if (isYeniParolaTextOK() == false)
                return false;

            if (!SifreCheck()) {
                return false;
            }

            break;

        case "parola1":
            if (document.forms[0]._ctl0_ParolaDegistir_chkboxParolaDegistir.checked) {
                if (isYeniParolaTextOK() == false)
                    return false;

                if (!SifreCheck()) {
                    return false;
                }

            }

            if (!SifreCheck()) {
                return false;
            }

            if (document.forms[0]._ctl0_ParolaDegistir_chkboxSifreDegistir.checked) {
                var msg;
                if (document.forms[0].YeniSifreText.value.length > 0) {
                    msg = isYeniSifreTextOK();
                    if (msg != "") {
                        alert(msg);
                        JFocuslan("YeniSifreText");
                        return false;
                    }
                }
                if (document.forms[0].YeniTelSifreText.value.length > 0) {
                    msg = isYeniTelSifreTextOK();
                    if (msg != "") {
                        alert(msg);
                        JFocuslan("YeniTelSifreText");
                        return false;
                    }
                }

                if (document.forms[0]._ctl0_ParolaDegistir_chkboxSifreAyir) {

                    if (document.forms[0]._ctl0_ParolaDegistir_chkboxSifreAyir.checked == true) {
                        //yeni telsif dolu ve geçerli olmalı
                        msg = isYeniTelSifreTextOK();
                        if (msg != "") {
                            alert(msg);
                            JFocuslan("YeniTelSifreText");
                            return false;
                        }
                    }
                    else {
                        msg = isYeniSifreTextOK();
                        if (msg != "") {
                            alert(msg);
                            JFocuslan("YeniSifreText");
                            return false;
                        }
                    }
                }
                issifayirchecked = ((document.forms[0]._ctl0_ParolaDegistir_chkboxSifreAyir) && (document.forms[0]._ctl0_ParolaDegistir_chkboxSifreAyir.checked == true))
                issifbirlestirchecked = ((document.forms[0]._ctl0_ParolaDegistir_chkboxSifreBirlestir) && (document.forms[0]._ctl0_ParolaDegistir_chkboxSifreBirlestir.checked == true))

                if ((document.forms[0].YeniSifreText.value.length == 0)
				&& (document.forms[0].YeniTelSifreText.value.length == 0)
				&& (issifayirchecked == 0 || issifbirlestirchecked == 0)) {
                    alert(CheckFields_msgYeniIntSifreGir);
                    JFocuslan("YeniSifreText");
                    return false;
                }
                if (issifbirlestirchecked) {
                    msg = isYeniSifreTextOK();
                    if (msg != "") {
                        alert(msg);
                        JFocuslan("YeniSifreText");
                        return false;
                    }
                }
            }
            //---------------------Jedit Disable Yerine
            if (document.forms[0]._ctl0_ParolaDegistir_chkboxSifreDegistir.checked == false) {
                if (document.forms[0].YeniSifreText.value.length != 0) {
                    alert(CheckFields_msgSifreDegisSeciliDegil);
                    JFocuslan("YeniSifreText");
                    return false;
                }
                if (document.forms[0].YeniSifreTekrarText.value.length != 0) {
                    alert(CheckFields_msgSifreDegisSeciliDegil);
                    JFocuslan("YeniSifreTekrarText");
                    return false;
                }
                if (document.forms[0].YeniTelSifreText.value.length != 0) {
                    alert(CheckFields_msgSifreDegisSeciliDegil);
                    JFocuslan("YeniTelSifreText");
                    return false;
                }
                if (document.forms[0].YeniTelSifreTekrarText.value.length != 0) {
                    alert(CheckFields_msgSifreDegisSeciliDegil);
                    JFocuslan("YeniTelSifreTekrarText");
                    return false;
                }

            }
            if ((document.forms[0]._ctl0_ParolaDegistir_chkboxSifreBirlestir) && (document.forms[0]._ctl0_ParolaDegistir_chkboxSifreBirlestir.checked)) {
                if (document.forms[0].YeniTelSifreText.value.length != 0) {
                    alert(CheckFields_msgSifreUyari);
                    JFocuslan("YeniTelSifreText");
                    return false;
                }
                if (document.forms[0].YeniTelSifreTekrarText.value.length != 0) {
                    alert(CheckFields_msgSifreUyari);
                    JFocuslan("YeniTelSifreTekrarText");
                    return false;
                }
            }
            if ((document.forms[0]._ctl0_ParolaDegistir_chkboxSifreAyir) && (document.forms[0]._ctl0_ParolaDegistir_chkboxSifreAyir.checked == false)) {
                if (document.forms[0].YeniTelSifreText.value.length != 0) {
                    alert(CheckFields_msgSifreAyirmaUyari);
                    JFocuslan("YeniTelSifreText");
                    return false;
                }
                if (document.forms[0].YeniTelSifreTekrarText.value.length != 0) {
                    alert(CheckFields_msgSifreAyirmaUyari);
                    JFocuslan("YeniTelSifreTekrarText");
                    return false;
                }
            }
            //----------------------------------------------
            f = document.forms[0].EskiParolaText.value;
            if (f == "" && (document.forms[0]._ctl0_ParolaDegistir_chkboxParolaDegistir.checked)) {
                alert(CheckFields_msgEskiParolaGir);
                JFocuslan("EskiParolaText");
                return false;
            }
            if (document.forms[0]._ctl0_ParolaDegistir_chkboxSifreDegistir.checked) {
                if (!SifreCheck()) {
                    return false;
                }
            }
            f = document.forms[0]._ctl0_YeniSoruText.value;
            if (f.length > 30) {
                alert(CheckFields_msgSoru30danFazlaOlmamali);
                return false;
            }
            f = document.forms[0]._ctl0_YeniCevapText.value;
            if (f.length > 20) {
                alert(CheckFields_msgCevap20denFazlaOlmamali);
                return false;
            }

            break;
        /**************************************PAROLA1OTP***********************************************/ 
        /*	Otp Kullanıcısı ise		*/ 
        case "parola1Otp":
            if (document.forms[0]._ctl0_ParolaDegistir_chkboxParolaDegistir.checked) {
                if (isYeniParolaTextOK() == false)
                    return false;

                if (!SifreCheck()) {
                    return false;
                }

            }
            if (document.forms[0]._ctl0_ParolaDegistir_chkboxHatirlamaDegistir.checked) {
                if (document.forms[0]._ctl0_YeniSoruText.value == "") {
                    alert(CheckFields_msgYeniGizliSoruGir);
                    document.forms[0]._ctl0_YeniSoruText.focus();
                    return false;
                }
                if (trim(document.forms[0]._ctl0_YeniSoruText.value) == "") {
                    alert(CheckFields_msgGizliSoruBoslukOlamaz);
                    document.forms[0]._ctl0_YeniSoruText.focus();
                    return false;
                }
                if (document.forms[0]._ctl0_YeniCevapText.value == "") {
                    alert(CheckFields_msgYeniGizliCevapGir);
                    document.forms[0]._ctl0_YeniCevapText.focus();
                    return false;
                }
                if (document.forms[0]._ctl0_YeniCevapText.value != document.forms[0]._ctl0_YeniCevapTekrarText.value) {
                    alert(CheckFields_msgCevaplarFarkliTekrarGir);
                    document.forms[0]._ctl0_YeniCevapText.focus();
                    return false;
                }
                if (trim(document.forms[0]._ctl0_YeniCevapText.value) == "") {
                    alert(CheckFields_msgGizliCevapBoslukOlamaz);
                    document.forms[0]._ctl0_YeniCevapText.focus();
                    return false;
                }
                f = document.forms[0]._ctl0_YeniSoruText.value;
                if (f.length > 30) {
                    alert(CheckFields_msgSoru30danFazlaOlmamali);
                    return false;
                }
                f = document.forms[0]._ctl0_YeniCevapText.value;
                if (f.length > 16) {
                    alert(CheckFields_msgCevap16danFazlaOlmamali);
                    return false;
                }

                if (!SifreCheck()) {
                    return false;
                }

            }

            if (document.forms[0]._ctl0_ParolaDegistir_chkboxSifreDegistir.checked) {
                var msg;
                if (document.forms[0].YeniTelSifreText.value.length > 0) {
                    msg = isYeniTelSifreTextOK();
                    if (msg != "") {
                        alert(msg);
                        JFocuslan("YeniTelSifreText");
                        return false;
                    }
                }

                if (document.forms[0].YeniTelSifreText.value.length == 0) {
                    alert(CheckFields_msgYeniIntTelSifreGir);
                    JFocuslan("YeniTelSifreText");
                    return false;
                }
                if (document.forms[0].SifreText.value.length == 0) {
                    alert(CheckFields_msgIntSifreGir);
                    JFocuslan("SifreText");
                    return false;
                }
            }
            //---------------------Jedit Disable Yerine
            if (document.forms[0]._ctl0_ParolaDegistir_chkboxSifreDegistir.checked == false) {
                if (document.forms[0].YeniSifreText.value.length != 0) {
                    alert(CheckFields_msgSifreDegisSeciliDegil);
                    JFocuslan("YeniSifreText");
                    return false;
                }
                if (document.forms[0].YeniSifreTekrarText.value.length != 0) {
                    alert(CheckFields_msgSifreDegisSeciliDegil);
                    JFocuslan("YeniSifreTekrarText");
                    return false;
                }
            }
            //----------------------------------------------


            f = document.forms[0].EskiParolaText.value;
            if (f == "" && (document.forms[0]._ctl0_ParolaDegistir_chkboxParolaDegistir.checked)) {
                alert(CheckFields_msgEskiParolaGir);
                JFocuslan("EskiParolaText");
                return false;
            }
            f = document.forms[0]._ctl0_YeniSoruText.value;
            if (f.length > 30) {
                alert(CheckFields_msgSoru30danFazlaOlmamali);
                return false;
            }
            f = document.forms[0]._ctl0_YeniCevapText.value;
            if (f.length > 20) {
                alert(CheckFields_msgCevap20denFazlaOlmamali);
                return false;
            }

            break;
        /**************************************************************************************************/ 
        /**************************************OTP*********************************************************/ 
        case "Otp":
            if (document.forms[0].YeniSifreText.value.length > 0) {
                msg = isYeniSifreTextOK();
                if (msg != "") {
                    alert(msg);
                    JFocuslan("YeniSifreText");
                    return false;
                }
            }
            break;
        /**************************************************************************************************/ 
        case "GUS0":

            f = trim(document.forms[0]._ctl0_KarsilamaMesaji.value);
            if (document.getElementById("_ctl0_Guvenlik0_lblTakmaAd") != null) {
                if (f == "") {
                    alert(CheckFields_msgKarsilamaMesajiBosOlamaz);
                    return false;
                }
            }
            if (f.length > 50) {
                alert(CheckFields_msgKarMsj50denUzunOlamaz);
                return false;
            }

            f = trim(document.forms[0]._ctl0_TakmaAdText.value);
            if (document.forms[0]._ctl0_Guvenlik_rdbtnlistKarMsgSecenekler_1 && document.forms[0]._ctl0_Guvenlik_rdbtnlistKarMsgSecenekler_1.checked) {
                if (f == "") {
                    alert(CheckFields_msgTakmaAdBosOlamaz);
                    return false;
                }
            }

            if (f.length > 20) {
                alert(CheckFields_msgTakmaAd20denUzunOlamaz);
                return false;
            }

            //Güvenlik sorusu istiyor ise en az bir soru seçmeli
            if (document.forms[0]._ctl0_Guvenlik0_rdbtnlistEkSoru_0 && document.forms[0]._ctl0_Guvenlik0_rdbtnlistEkSoru_0.checked) {

                if (document.getElementById("_ctl0_Guvenlik0_lblTakmaAd") == null)  //Eski ekran
                {
                    if ((document.forms[0]._ctl0_Guvenlik0_chkboxEkSoru01.checked == false) &&
					(document.forms[0]._ctl0_Guvenlik0_chkboxEkSoru02.checked == false) &&
					(document.forms[0]._ctl0_Guvenlik0_chkboxEkSoru03.checked == false) &&
					(document.forms[0]._ctl0_Guvenlik0_chkboxEkSoru04.checked == false) &&
					(document.forms[0]._ctl0_Guvenlik0_chkboxEkSoru05.checked == false) &&
					(document.forms[0]._ctl0_Guvenlik0_chkboxEkSoru06.checked == false) &&
					(document.forms[0]._ctl0_Guvenlik0_chkboxEkSoru07.checked == false) &&
					(document.forms[0]._ctl0_Guvenlik0_chkboxOzelEkSoru01.checked == false) &&
					(document.forms[0]._ctl0_Guvenlik0_chkboxOzelEkSoru02.checked == false) &&
					(document.forms[0]._ctl0_Guvenlik0_chkboxOzelEkSoru03.checked == false) &&
					(document.forms[0]._ctl0_Guvenlik0_chkboxOzelEkSoru04.checked == false)) {
                        alert(CheckFields_msgEnAz1SoruSec);
                        return false;
                    }

                    var OzlSoruText = "";
                    var OzlCevapText = "";
                    if (document.forms[0]._ctl0_Guvenlik0_chkboxOzelEkSoru01 && document.forms[0]._ctl0_Guvenlik0_chkboxOzelEkSoru01.checked == true) {
                        OzlSoruText = trim(document.forms[0]._ctl0_OzlSoru1Text.value);
                        OzlCevapText = trim(document.forms[0]._ctl0_OzlCevap1Text.value);
                        if (OzlSoruText == "" || OzlCevapText == "") {
                            alert(CheckFields_msgGuvenlikSorulariBosOlamaz);
                            return false;
                        }
                    }
                    if (document.forms[0]._ctl0_Guvenlik0_chkboxOzelEkSoru02 && document.forms[0]._ctl0_Guvenlik0_chkboxOzelEkSoru02.checked == true) {
                        OzlSoruText = trim(document.forms[0]._ctl0_OzlSoru2Text.value);
                        OzlCevapText = trim(document.forms[0]._ctl0_OzlCevap2Text.value);
                        if (OzlSoruText == "" || OzlCevapText == "") {
                            alert(CheckFields_msgGuvenlikSorulariBosOlamaz);
                            return false;
                        }
                    }
                    if (document.forms[0]._ctl0_Guvenlik0_chkboxOzelEkSoru03 && document.forms[0]._ctl0_Guvenlik0_chkboxOzelEkSoru03.checked == true) {
                        OzlSoruText = trim(document.forms[0]._ctl0_OzlSoru3Text.value);
                        OzlCevapText = trim(document.forms[0]._ctl0_OzlCevap3Text.value);
                        if (OzlSoruText == "" || OzlCevapText == "") {
                            alert(CheckFields_msgGuvenlikSorulariBosOlamaz);
                            return false;
                        }
                    }
                    if (document.forms[0]._ctl0_Guvenlik0_chkboxOzelEkSoru04 && document.forms[0]._ctl0_Guvenlik0_chkboxOzelEkSoru04.checked == true) {
                        OzlSoruText = trim(document.forms[0]._ctl0_OzlSoru4Text.value);
                        OzlCevapText = trim(document.forms[0]._ctl0_OzlCevap4Text.value);
                        if (OzlSoruText == "" || OzlCevapText == "") {
                            alert(CheckFields_msgGuvenlikSorulariBosOlamaz);
                            return false;
                        }
                    }
                }
                else  //yeni ekran
                {
                    var soruVarmi = false;

                    var OzlSoru1Text = trim(document.forms[0]._ctl0_OzlSoru1Text.value);
                    var OzlCevap1Text = trim(document.forms[0]._ctl0_OzlCevap1Text.value);
                    var OzlSoru2Text = trim(document.forms[0]._ctl0_OzlSoru2Text.value);
                    var OzlCevap2Text = trim(document.forms[0]._ctl0_OzlCevap2Text.value);
                    var OzlSoru3Text = trim(document.forms[0]._ctl0_OzlSoru3Text.value);
                    var OzlCevap3Text = trim(document.forms[0]._ctl0_OzlCevap3Text.value);
                    var OzlSoru4Text = trim(document.forms[0]._ctl0_OzlSoru4Text.value);
                    var OzlCevap4Text = trim(document.forms[0]._ctl0_OzlCevap4Text.value);

                    if ((OzlSoru1Text != "" && OzlCevap1Text != "") ||
						(OzlSoru2Text != "" && OzlCevap2Text != "") ||
						(OzlSoru3Text != "" && OzlCevap3Text != "") ||
						(OzlSoru4Text != "" && OzlCevap4Text != "")) {
                        soruVarmi = true;
                    }

                    if (soruVarmi == false) {
                        alert(CheckFields_msgEnAz1GuvenlikSorusuSec);
                        return false;
                    }

                    // soru ve yanıtlardan biri dolu diğeri boş ise hata ver.	
                    if ((OzlSoru1Text == "" && OzlCevap1Text != "") || (OzlSoru1Text != "" && OzlCevap1Text == "") ||
						(OzlSoru2Text == "" && OzlCevap2Text != "") || (OzlSoru2Text != "" && OzlCevap2Text == "") ||
						(OzlSoru3Text == "" && OzlCevap3Text != "") || (OzlSoru3Text != "" && OzlCevap3Text == "") ||
						(OzlSoru4Text == "" && OzlCevap4Text != "") || (OzlSoru4Text != "" && OzlCevap4Text == "")) {
                        alert(CheckFields_msgGuvenlikSorulariBosOlamaz);
                        return false;
                    }
                }
            }
            break;
        //------------------------------------------------------------------------------------   
        case "KARM":
            f = trim(document.forms[0]._ctl0_welcomeMessage.value);
            if (f == "") {
                //alert(CheckFields_msgKarsilamaMesajiBosOlamaz);
                showInputBottomErrorMessage($('#_ctl0_welcomeMessage'), CheckFields_msgKarsilamaMesajiBosOlamaz);
                return false;
            }
            if (!isAlphaNumericOrSpaceWithOutAlert(f)) {
                showInputBottomErrorMessage($('#_ctl0_welcomeMessage'), CheckFields_msgKarMsjHarfveSayidanOlusabilir);
                return false;
            }
            if (f.length > 50) {
                //alert(CheckFields_msgKarMsj50denUzunOlamaz);
                showInputBottomErrorMessage($('#_ctl0_welcomeMessage'), CheckFields_msgKarMsj50denUzunOlamaz);
                return false;
            }
            break;
        //------------------------------------------------------------------------------------   
        case "ADM":

            campcodeobj = document.forms[0]._ctl0_TxtCampCode;
            ftxtobj = document.forms[0].ctl0_FTxt;
            if (ftxtobj.value == "") {
                alert(CheckFields_msgAnasayfaDuyuruGir);
                return false;
            }
            if (campcodeobj) {
                if ((campcodeobj.value == "" || campcodeobj.value == 0)) {
                    alert(CheckFields_msgKampanyaKoduGir);
                    campcodeobj.focus();
                    return false;
                }
                camparr = (document.forms[0].hTxtAllCampNos.value).split("*");
                for (i = 0; camparr.length >= i; i++) {
                    if (camparr[i] == campcodeobj.value) {
                        alert(CheckFields_msgOlmayanBirKampanyaKoduGir);
                        campcodeobj.focus();
                        return false;
                    }
                }
                pcounter = document.forms[0]._ctl0_TxtPCounter;
                if (pcounter) // promosyon
                {
                    if (!ishepsinumerik(pcounter.value)) {
                        alert(CheckFields_msgGosterimSayisiSayisalOlmali);
                        pcounter.focus();
                        return false;
                    }
                    if (pcounter.value == "" || pcounter.value == 0) {
                        alert(CheckFields_msgMinTiklamaSayisiGir);
                        pcounter.focus();
                        return false;
                    }
                    ptrxcode = document.forms[0]._ctl0_SBTrxCode;
                    pminamount = document.forms[0]._ctl0_TxtMinFullAmount;
                    pwinnerorder = document.forms[0]._ctl0_TxtWinnerOrder;
                    if (ptrxcode.value == "" && (pminamount.value != "" || pwinnerorder.value != "")) {
                        alert(CheckFields_msgIslemKoduSec);
                        ptrxcode.focus();
                        return false;
                    }
                }

            }
            filenameObj = document.forms[0]._ctl0_TxtFileName;
            filename = document.forms[0]._ctl0_TxtFileName.value;
            strfilename = new String(filename);
            viewtype = document.forms[0]._ctl0_SBViewType.value;
           
            ischecked = false;
            for (i = 0; i < 5; i++) {
                eval(" if (document.forms[0]._ctl0_CListCustomerType_" + i + ".checked == true)ischecked = true;");
            }
            if (!ischecked) {
                alert(CheckFields_msgGosterilecekMusTipiSec);
                document.forms[0]._ctl0_CListCustomerType_0.focus();
                return false;
            }

            break;
        case "*ASF1":
            var customerType = document.forms[0].customerType.value;
            if (customerType != null && customerType != "") {
                if (customerType == "B") {
                    var checkedCustomerRadio = $('input[@name=WhichOption]:checked').val();

                    if (checkedCustomerRadio == 'CustomerRadio') {
                        f = document.forms[0]._ctl0__ctl0_IABSifreGiris_txtMusNo.value;
                        if (f == "") {
                            alert(CheckFields_msgMusNoGir);
                            document.forms[0]._ctl0__ctl0_IABSifreGiris_txtMusNo.focus();
                            return false;
                        }
                        for (i = 0; i < (f.length); i++) {

                            if (f.charAt(i) < '0' || f.charAt(i) > '9') {
                                alert(CheckFields_msgMusNoSayisalOlmali);
                                return false;
                            }
                            if (f.charAt(i) == '0') {
                                ZeroCounter++;
                            }
                        }
                        if (f.length == ZeroCounter) {
                            alert(CheckFields_msgMusNo0danBuyukOlmali);
                            return false;
                        }
                    }
                    else if (checkedCustomerRadio == 'TcknRadio') {
                        f = document.forms[0]._ctl0__ctl0_IABSifreGiris_txtTcknNo.value;
                        if (f == "") {
                            alert(CheckFields_msgTCKNGir);
                            document.forms[0]._ctl0__ctl0_IABSifreGiris_txtTcknNo.focus();
                            return false;
                        }
                        if (f.length != 11) {
                            alert(CheckFields_msgTckn11Hane);
                            $("#_ctl0__ctl0_IABSifreGiris_txtTcknNo").focus();
                            return false;
                        }
                        for (i = 0; i < (f.length); i++) {

                            if (f.charAt(i) < '0' || f.charAt(i) > '9') {
                                alert(CheckFields_msgTCKNSayisalOlmali);
                                return false;
                            }
                            if (f.charAt(i) == '0') {
                                ZeroCounter++;
                            }
                        }
                        if (f.length == ZeroCounter) {
                            alert(CheckFields_msgTCKN0danBuyukOlmali);
                            return false;
                        }
                    }

                    if (document.forms[0]._ctl0__ctl0_IABSifreGiris_txtCepTelNo.value == "") {
                        alert(CheckFields_msgCepTelGir);
                        document.forms[0]._ctl0__ctl0_IABSifreGiris_txtCepTelNo.focus();
                        return false;
                    }
                    if (document.forms[0]._ctl0__ctl0_IABSifreGiris_txtCepTelNo.value.charAt(0) == '0') {
                        alert(CheckFields_msgCepTelNosu0laBaslamamali);
                        document.forms[0]._ctl0__ctl0_IABSifreGiris_txtCepTelNo.focus();
                        return false;
                    }
                    if ($("#_ctl0__ctl0_IABSifreGiris_txtCaptcha")) {
                        captcha = $("#_ctl0__ctl0_IABSifreGiris_txtCaptcha").val();
                        if (captcha == "") {
                            alert(CheckFields_msgCaptchaGir);
                            $("#_ctl0__ctl0_IABSifreGiris_txtCaptcha").focus();
                            return false;
                        }
                        if (captcha.length != 6) {
                            alert(CheckFields_msgCaptcha6Hane);
                            $("#_ctl0__ctl0_IABSifreGiris_txtCaptcha").focus();
                            return false;
                        }
                    }

                }
                else if (customerType == "T") {
                    f = document.forms[0]._ctl0__ctl1_IABSifreGiris_txtMusNo_T.value;
                    f2 = document.forms[0]._ctl0__ctl1_IABSifreGiris_txtBireyselMusNo_T.value
                    if (f == "") {
                        alert(CheckFields_msgMusNoGir);
                        document.forms[0]._ctl0__ctl1_IABSifreGiris_txtMusNo_T.focus();
                        return false;
                    }
                    for (i = 0; i < (f.length); i++) {

                        if (f.charAt(i) < '0' || f.charAt(i) > '9') {
                            alert(CheckFields_msgMusNoSayisalOlmali);
                            return false;
                        }
                        if (f.charAt(i) == '0') {
                            ZeroCounter++;
                        }
                    }
                    if (f.length == ZeroCounter) {
                        alert(CheckFields_msgMusNo0danBuyukOlmali);
                        return false;
                    }
                    //bireysel musterı no kontrolu
                    if (f2 == "") {
                        alert(CheckFields_msgBireyselMusNoGir);
                        document.forms[0]._ctl0__ctl1_IABSifreGiris_txtBireyselMusNo_T.focus();
                        return false;
                    }
                    for (i = 0; i < (f2.length); i++) {

                        if (f2.charAt(i) < '0' || f2.charAt(i) > '9') {
                            alert(CheckFields_msgBireyselMusNoSayisalOlmali);
                            return false;
                        }
                        if (f2.charAt(i) == '0') {
                            ZeroCounter++;
                        }
                    }
                    if (f2.length == ZeroCounter) {
                        alert(CheckFields_msgBireyselMusNo0danBuyukOlmali);
                        return false;
                    }


                    if (document.forms[0]._ctl0__ctl1_IABSifreGiris_txtCepTelNo_T.value == "") {
                        alert(CheckFields_msgCepTelGir);
                        document.forms[0]._ctl0__ctl1_IABSifreGiris_txtCepTelNo_T.focus();
                        return false;
                    }
                    if (document.forms[0]._ctl0__ctl1_IABSifreGiris_txtCepTelNo_T.value.charAt(0) == '0') {
                        alert(CheckFields_msgCepTelNosu0laBaslamamali);
                        document.forms[0]._ctl0__ctl1_IABSifreGiris_txtCepTelNo_T.focus();
                        return false;
                    }
                    if (document.forms[0]._ctl0__ctl1_IABSifreGiris_txtCaptcha_T.value == "") {
                        alert(CheckFields_msgCaptchaGir);
                        document.forms[0]._ctl0__ctl1_IABSifreGiris_txtCaptcha_T.focus();
                        return false;
                    }
                }
            }

            break;

        case "*ASF2":

            var mblOnayKodu = document.forms[0].MobilOnaySifresi;

            if (mblOnayKodu.value == "") {
                alert(CheckFields_msgMobilOnayKoduGirilmeli);
                return false;
            }

            if (mblOnayKodu.value.length != 6) {
                alert(CheckFields_msgMobilOnayKodu6HaneliOlmali);
                return false;
            }


            break;

        case "*ASFI":
            //Anında şifre işleminde İ-Anahtar kontrolu			
            var msg = isTekKullanımlikSifreOK();

            if (msg != "") {
                alert(msg);
                return false;
            }

            break;

        case "*ASFC":
            //Anında şifre işleminde Cep Anahtar kontrolu
            var cepanahtar = document.forms[0].SifreTextCepAnahtar;

            if (cepanahtar.value == "") {
                alert(CepanahtarSifreBos);
                cepanahtar.focus();
                return false;
            }

            if (cepanahtar.value.length != 8) {
                alert(CepAnahtarSifreEksik);
                cepanahtar.focus();
                return false;
            }

            break;


        case "*AST3":
        case "*ASF3":
        case "INSA3":
            kart1 = document.forms[0]._ctl0_IABSifreKartBilgileri_txtKartNo1.value;
            kart2 = document.forms[0]._ctl0_IABSifreKartBilgileri_txtKartNo2.value;
            kart3 = document.forms[0]._ctl0_IABSifreKartBilgileri_txtKartNo3.value;
            kart4 = document.forms[0]._ctl0_IABSifreKartBilgileri_txtKartNo4.value;

            if (kart1.length < 4 || kart2.length < 4 || kart3.length < 4 || kart4.length < 4) {
                alert(CheckFields_msgKartNoGir);
                return false;
            }

            ay = document.forms[0]._ctl0_IABSifreKartBilgileri_cmbAy.value;
            if (ay == "0") {
                alert(CheckFields_msgSonAySec);
                return false;
            }

            yil = document.forms[0]._ctl0_IABSifreKartBilgileri_cmbYil.value;
            if (yil == "0") {
                alert(CheckFields_msgSonYilSec);
                return false;
            }
            var currentTime = new Date();
            var buAy = currentTime.getMonth() + 1;
            var buYil = currentTime.getFullYear();

            if (((parseInt(buYil) > parseInt(yil)) && (parseInt(buAy) > parseFloat(ay))) || ((parseInt(buYil) == parseInt(yil)) && (parseInt(buAy) > parseFloat(ay)))) {
                alert(CheckFields_msgGecerliTarihSec);
                return false;
            }

            cvv2 = document.forms[0]._ctl0_IABSifreKartBilgileri_txtCVV2.value;
            cvv3 = document.forms[0]._ctl0_IABSifreKartBilgileri_txtCVV3.value;

            if (cvv2 == "" && cvv3 == "") {
                alert(CheckFields_msgCvvGir2);
                return false;
            }

            if ((cvv2 == "" && cvv3 != "") || (cvv2 != "" && cvv3 == "")) {
                alert(CheckFields_msgCvvGir);
                return false;
            }

            kartsifre1 = eval("document.forms[0]._ctl0_IABSifreKartBilgileri_txtKartSif" + haneE1);
            kartsifre2 = eval("document.forms[0]._ctl0_IABSifreKartBilgileri_txtKartSif" + haneE2);

            if (kartsifre1.value == "" || kartsifre2.value == "") {
                alert(CheckFields_msgKartSifreGir);
                return false;
            }

            msg = isYeniSifreTextOK();
            if (msg != "") {
                alert(msg);
                JFocuslan("YeniSifreText");
                return false;
            }

            break;
        case "SIFG":
        case "YSIF":
            if (!isYeniSifreTextOK_YeniLogon())
                return false;
            break;
        case "*ACA1":
            var customerType = document.forms[0].customerType.value;

            if (customerType == "B") {
                f = document.forms[0]._ctl0_AnasayfaCepAnahtarAktivasyonGiris_txtMusNo.value;
                if (f == "") {
                    alert(CheckFields_msgMusNoGir);
                    document.forms[0]._ctl0_AnasayfaCepAnahtarAktivasyonGiris_txtMusNo.focus();
                    return false;
                }

                for (i = 0; i < (f.length); i++) {

                    if (f.charAt(i) < '0' || f.charAt(i) > '9') {
                        alert(CheckFields_msgMusNoSayisalOlmali);
                        return false;
                    }
                    if (f.charAt(i) == '0') {
                        ZeroCounter++;
                    }
                }
                if (f.length == ZeroCounter) {
                    alert(CheckFields_msgMusNo0danBuyukOlmali);
                    return false;
                }

                if (document.forms[0]._ctl0_AnasayfaCepAnahtarAktivasyonGiris_txtCepTelNo.value == "") {
                    alert(CheckFields_msgCepTelGir);
                    document.forms[0]._ctl0_AnasayfaCepAnahtarAktivasyonGiris_txtCepTelNo.focus();
                    return false;
                }
                if (document.forms[0]._ctl0_AnasayfaCepAnahtarAktivasyonGiris_txtCepTelNo.value.charAt(0) == '0') {
                    alert(CheckFields_msgCepTelNosu0laBaslamamali);
                    document.forms[0]._ctl0_AnasayfaCepAnahtarAktivasyonGiris_txtCepTelNo.focus();
                    return false;
                }
                if (document.forms[0]._ctl0_AnasayfaCepAnahtarAktivasyonGiris_txtCaptcha.value == "") {
                    alert(CheckFields_msgCaptchaGir);
                    document.forms[0]._ctl0_AnasayfaCepAnahtarAktivasyonGiris_txtCaptcha.focus();
                    return false;
                }

                if (document.forms[0]._ctl0_AnasayfaCepAnahtarAktivasyonGiris_txtCaptcha.value.length != 6) {
                    alert(CheckFields_msgDogrulamaKodu6HaneOlmali);
                    document.forms[0]._ctl0_AnasayfaCepAnahtarAktivasyonGiris_txtCaptcha.focus();
                    return false;
                }
            }
            else if (customerType == "T") {
                f = document.forms[0]._ctl0_AnasayfaCepAnahtarAktivasyonGiris_txtMusNo_T.value;
                if (f == "") {
                    alert(CheckFields_msgMusNoGir);
                    document.forms[0]._ctl0_AnasayfaCepAnahtarAktivasyonGiris_txtMusNo_T.focus();
                    return false;
                }

                for (i = 0; i < (f.length); i++) {

                    if (f.charAt(i) < '0' || f.charAt(i) > '9') {
                        alert(CheckFields_msgMusNoSayisalOlmali);
                        return false;
                    }
                    if (f.charAt(i) == '0') {
                        ZeroCounter++;
                    }
                }
                if (f.length == ZeroCounter) {
                    alert(CheckFields_msgMusNo0danBuyukOlmali);
                    return false;
                }

                //bireysel Musteri no kontrolu
                f = document.forms[0]._ctl0_AnasayfaCepAnahtarAktivasyonGiris_txtBireyselMusNo_T.value;

                if (f == "") {
                    alert(CheckFields_msgBireyselMusNoGir);
                    document.forms[0]._ctl0_AnasayfaCepAnahtarAktivasyonGiris_txtBireyselMusNo_T.focus();
                    return false;
                }

                for (i = 0; i < (f.length); i++) {

                    if (f.charAt(i) < '0' || f.charAt(i) > '9') {
                        alert(CheckFields_msgBireyselMusNoSayisalOlmali);
                        return false;
                    }
                    if (f.charAt(i) == '0') {
                        ZeroCounter++;
                    }
                }
                if (f.length == ZeroCounter) {
                    alert(CheckFields_msgBireyselMusNo0danBuyukOlmali);
                    return false;
                }

                //bireysel Musteri no kontrolu-end
                if (document.forms[0]._ctl0_AnasayfaCepAnahtarAktivasyonGiris_txtCepTelNo_T.value == "") {
                    alert(CheckFields_msgCepTelGir);
                    document.forms[0]._ctl0_AnasayfaCepAnahtarAktivasyonGiris_txtCepTelNo_T.focus();
                    return false;
                }
                if (document.forms[0]._ctl0_AnasayfaCepAnahtarAktivasyonGiris_txtCepTelNo_T.value.charAt(0) == '0') {
                    alert(CheckFields_msgCepTelNosu0laBaslamamali);
                    document.forms[0]._ctl0_AnasayfaCepAnahtarAktivasyonGiris_txtCepTelNo_T.focus();
                    return false;
                }
                if (document.forms[0]._ctl0_AnasayfaCepAnahtarAktivasyonGiris_txtCaptcha_T.value == "") {
                    alert(CheckFields_msgCaptchaGir);
                    document.forms[0]._ctl0_AnasayfaCepAnahtarAktivasyonGiris_txtCaptcha_T.focus();
                    return false;
                }

                if (document.forms[0]._ctl0_AnasayfaCepAnahtarAktivasyonGiris_txtCaptcha_T.value.length != 6) {
                    alert(CheckFields_msgDogrulamaKodu6HaneOlmali);
                    document.forms[0]._ctl0_AnasayfaCepAnahtarAktivasyonGiris_txtCaptcha_T.focus();
                    return false;
                }
            }
            break;
        case "*ACA2":
            var mobilOnaySifresi = document.getElementById("MobilOnaySifresi");

            if (mobilOnaySifresi.value.length == 0) {
                alert(CheckFields_msgMobilOnayKoduGirilmeli);
                mobilOnaySifresi.focus();
                return false;
            }
            if (mobilOnaySifresi.value.length != 6) {
                alert(CheckFields_msgMobilOnayKodu6HaneliOlmali);
                mobilOnaySifresi.focus();
                return false;
            }

            break;
        case "*ACA3":
            kart1 = document.forms[0]._ctl0_AnasayfaCepAnahtarAktivasyonKartBilgileri_txtKartNo1.value;
            kart2 = document.forms[0]._ctl0_AnasayfaCepAnahtarAktivasyonKartBilgileri_txtKartNo2.value;
            kart3 = document.forms[0]._ctl0_AnasayfaCepAnahtarAktivasyonKartBilgileri_txtKartNo3.value;
            kart4 = document.forms[0]._ctl0_AnasayfaCepAnahtarAktivasyonKartBilgileri_txtKartNo4.value;

            if (kart1.length < 4 || kart2.length < 4 || kart3.length < 4 || kart4.length < 4) {
                alert(CheckFields_msgKartNoGir);
                return false;
            }

            ay = document.forms[0]._ctl0_AnasayfaCepAnahtarAktivasyonKartBilgileri_cmbAy.value;
            if (ay == "0") {
                alert(CheckFields_msgSonAySec);
                return false;
            }

            yil = document.forms[0]._ctl0_AnasayfaCepAnahtarAktivasyonKartBilgileri_cmbYil.value;
            if (yil == "0") {
                alert(CheckFields_msgSonYilSec);
                return false;
            }

            var currentTime = new Date();
            var buAy = currentTime.getMonth() + 1;
            var buYil = currentTime.getFullYear();

            if (((parseFloat(buYil) > parseFloat(yil)) && (parseFloat(buAy) > parseFloat(ay))) || ((parseFloat(buYil) == parseFloat(yil)) && (parseFloat(buAy) > parseFloat(ay)))) {
                alert(CheckFields_msgGecerliTarihSec);
                return false;
            }

            cvv2 = document.forms[0]._ctl0_AnasayfaCepAnahtarAktivasyonKartBilgileri_txtCVV2.value;
            cvv3 = document.forms[0]._ctl0_AnasayfaCepAnahtarAktivasyonKartBilgileri_txtCVV3.value;

            if ((cvv2 == "" || cvv3 == "")) {
                alert(CheckFields_msgCvvGir);
                return false;
            }

            kartsifre1 = eval("document.forms[0]._ctl0_AnasayfaCepAnahtarAktivasyonKartBilgileri_txtKartSif" + haneE1);
            kartsifre2 = eval("document.forms[0]._ctl0_AnasayfaCepAnahtarAktivasyonKartBilgileri_txtKartSif" + haneE2);

            if (kartsifre1.value == "" || kartsifre2.value == "") {
                alert(CheckFields_msgKartSifreGir);
                return false;
            }
            break;
        case "*ACA4":
            var tks = document.forms[0]._ctl0_AnasayfaCepAnahtarAktivasyonAktivasyon_txtSifre;

            if (tks.value == "") {
                alert(CepanahtarSifreBos);
                tks.focus();
                return false;
            }

            if (tks.value.length != 8) {
                alert(CepAnahtarSifreEksik);
                tks.focus();
                return false;
            }

            return true;
            break;
        case "CEPKK":
            kart1 = document.forms[0]._ctl0_CepAnahtarAktivasyonKartBilgileri_txtKartNo1.value;
            kart2 = document.forms[0]._ctl0_CepAnahtarAktivasyonKartBilgileri_txtKartNo2.value;
            kart3 = document.forms[0]._ctl0_CepAnahtarAktivasyonKartBilgileri_txtKartNo3.value;
            kart4 = document.forms[0]._ctl0_CepAnahtarAktivasyonKartBilgileri_txtKartNo4.value;

            if (kart1.length < 4 || kart2.length < 4 || kart3.length < 4 || kart4.length < 4) {
                alert(CheckFields_msgKartNoGir);
                return false;
            }

            ay = document.forms[0]._ctl0_CepAnahtarAktivasyonKartBilgileri_cmbAy.value;
            if (ay == "0") {
                alert(CheckFields_msgSonAySec);
                return false;
            }

            yil = document.forms[0]._ctl0_CepAnahtarAktivasyonKartBilgileri_cmbYil.value;
            if (yil == "0") {
                alert(CheckFields_msgSonYilSec);
                return false;
            }

            cvv2 = document.forms[0]._ctl0_CepAnahtarAktivasyonKartBilgileri_txtCVV2.value;
            cvv3 = document.forms[0]._ctl0_CepAnahtarAktivasyonKartBilgileri_txtCVV3.value;

            if ((cvv2 == "" || cvv3 == "")) {
                alert(CheckFields_msgCvvGir);
                return false;
            }

            kartsifre1 = eval("document.forms[0]._ctl0_CepAnahtarAktivasyonKartBilgileri_txtKartSif" + haneE1);
            kartsifre2 = eval("document.forms[0]._ctl0_CepAnahtarAktivasyonKartBilgileri_txtKartSif" + haneE2);

            if (kartsifre1.value == "" || kartsifre2.value == "") {
                alert(CheckFields_msgKartSifreGir);
                return false;
            }
            break;
        case "CEPAK":
            kart1 = document.forms[0]._ctl0_CepAnahtarBasvuruKartBilgileri_txtKartNo1.value;
            kart2 = document.forms[0]._ctl0_CepAnahtarBasvuruKartBilgileri_txtKartNo2.value;
            kart3 = document.forms[0]._ctl0_CepAnahtarBasvuruKartBilgileri_txtKartNo3.value;
            kart4 = document.forms[0]._ctl0_CepAnahtarBasvuruKartBilgileri_txtKartNo4.value;

            if (kart1.length < 4 || kart2.length < 4 || kart3.length < 4 || kart4.length < 4) {
                alert(CheckFields_msgKartNoGir);
                return false;
            }

            ay = document.forms[0]._ctl0_CepAnahtarBasvuruKartBilgileri_cmbAy.value;
            if (ay == "0") {
                alert(CheckFields_msgSonAySec);
                return false;
            }

            yil = document.forms[0]._ctl0_CepAnahtarBasvuruKartBilgileri_cmbYil.value;
            if (yil == "0") {
                alert(CheckFields_msgSonYilSec);
                return false;
            }

            cvv2 = document.forms[0]._ctl0_CepAnahtarBasvuruKartBilgileri_txtCVV2.value;
            cvv3 = document.forms[0]._ctl0_CepAnahtarBasvuruKartBilgileri_txtCVV3.value;

            if ((cvv2 == "" || cvv3 == "")) {
                alert(CheckFields_msgCvvGir);
                return false;
            }

            kartsifre1 = eval("document.forms[0]._ctl0_CepAnahtarBasvuruKartBilgileri_txtKartSif" + haneE1);
            kartsifre2 = eval("document.forms[0]._ctl0_CepAnahtarBasvuruKartBilgileri_txtKartSif" + haneE2);

            if (kartsifre1.value == "" || kartsifre2.value == "") {
                alert(CheckFields_msgKartSifreGir);
                return false;
            }
            break;

        case "INTG":
            if (!(document.forms[0].securityCheck && document.forms[0].securityCheck.checked == true)) {
                alert(CheckFields_msgInternetGuvenligiOnayla);
                return false;
            }
            break;
        case "SIFD1":
            var msg;
            f = document.forms[0].YeniSifreText.value;
            if (f != "") {
                msg = isYeniSifreTextOK();
                if (msg != "") {
                    alert(msg);
                    return false;
                }
            }

            if (!SifreCheck()) {
                return false;
            }

            break;

        case "PAR1":

            if (isYeniParolaTextOK() == false)
                return false;

            if (!SifreCheck()) {
                return false;
            }

            //----------------------------------------------
            f = document.forms[0].EskiParolaText.value;
            if (f == "") {
                alert(CheckFields_msgEskiParolaGir);
                JFocuslan("EskiParolaText");
                return false;
            }

            //Yeni Parola ve Eski Parola Aynı ise
            if (f == document.forms[0].YeniParolaText.value) {
                alert(CheckFields_msgEskiParolaYeniAyniOlamaz);
                JFocuslan("YeniParolaText");
                return false;
            }
            break;
        case "HATD1":
            if (document.forms[0]._ctl0_YeniSoruText.value == "") {
                alert(CheckFields_msgYeniGizliSoruGir);
                document.forms[0]._ctl0_YeniSoruText.focus();
                return false;
            }
            if (trim(document.forms[0]._ctl0_YeniSoruText.value) == "") {
                alert(CheckFields_msgGizliSoruBoslukOlamaz);
                document.forms[0]._ctl0_YeniSoruText.focus();
                return false;
            }

            if (!isAlphaNumericOrSpaceWithOutAlert(document.forms[0]._ctl0_YeniSoruText.value)) {
                alert(alfa_msgBuBolumSayiHarflerdenOlusmali);
                document.forms[0]._ctl0_YeniSoruText.focus();
                return false;
            }

            f = document.forms[0]._ctl0_YeniSoruText.value;
            if (f.length > 30) {
                alert(CheckFields_msgSoru30danFazlaOlmamali);
                return false;
            }

            if (document.forms[0]._ctl0_YeniCevapText.value == "") {
                alert(CheckFields_msgYeniGizliCevapGir);
                document.forms[0]._ctl0_YeniCevapText.focus();
                return false;
            }

            if (trim(document.forms[0]._ctl0_YeniCevapText.value) == "") {
                alert(CheckFields_msgGizliCevapBoslukOlamaz);
                document.forms[0]._ctl0_YeniCevapText.focus();
                return false;
            }

            if (!isAlphaNumericOrSpaceWithOutAlert(document.forms[0]._ctl0_YeniCevapText.value)) {
                alert(alfa_msgBuBolumSayiHarflerdenOlusmali);
                document.forms[0]._ctl0_YeniCevapText.focus();
                return false;
            }

            if (BuyukHarf(document.forms[0]._ctl0_YeniCevapText.value) != BuyukHarf(document.forms[0]._ctl0_YeniCevapTekrarText.value) && document.forms[0]._ctl0_YeniCevapTekrarText.value != "") {
                alert(CheckFields_msgCevaplarFarkliTekrarGir);
                document.forms[0]._ctl0_YeniCevapText.focus();
                return false;
            }


            f = document.forms[0]._ctl0_YeniCevapText.value;
            if (f.length > 20) {
                alert(CheckFields_msgCevap20denFazlaOlmamali);
                return false;
            }
            if (trim(document.forms[0]._ctl0_YeniCevapTekrarText.value) == "") {
                alert(CheckFields_msgYeniGizliCevapTekrarGir);
                document.forms[0]._ctl0_YeniCevapTekrarText.focus();
                return false;
            }

            if (!isAlphaNumericOrSpaceWithOutAlert(document.forms[0]._ctl0_YeniCevapTekrarText.value)) {
                alert(alfa_msgBuBolumSayiHarflerdenOlusmali);
                document.forms[0]._ctl0_YeniCevapTekrarText.focus();
                return false;
            }

            if (!SifreCheck()) {
                return false;
            }

            f = document.forms[0]._ctl0_YeniSoruText.value;
            if (f.length > 30) {
                alert(CheckFields_msgSoru30danFazlaOlmamali);
                return false;
            }
            f = document.forms[0]._ctl0_YeniCevapText.value;
            if (f.length > 20) {
                alert(CheckFields_msgCevap20denFazlaOlmamali);
                return false;
            }
            break;
        default:
            if (!SifreCheck()) {
                return false;
            }
    }

    if (document.forms[0].MobilOnaySifresi) {
        f = document.forms[0].MobilOnaySifresi.value;
        if (f == "") {
            alert(CheckFields_msgMobilOnayKoduGirilmeli);
            return false;
        }
        if (f.length != 6) {
            alert(CheckFields_msgMobilOnayKodu6HaneliOlmali);
            return false;
        }
    }

    return true;
}
function fromstarttrim(str) {
    while ("" + str.charAt(0) == " ") {
        str = str.substring(1, str.length);
    }
    return str;
}
function reverse(str) {
    var reversedstr = "";
    var strArray;
    strArray = str.split("");
    for (var i = str.length - 1; i >= 0; i--) {
        reversedstr += strArray[i];
    }
    return reversedstr;
}
function trim(str) {
    str = fromstarttrim(str);
    str = reverse(str);
    str = fromstarttrim(str);
    str = reverse(str);
    return str;
}
function ishepsinumerik(val) {
    var f = String(val);
    var bagnum = "0123456789";
    for (i = 0; i < (f.length); i++) {
        if (bagnum.indexOf(f.charAt(i)) == -1) {
            return false;
        }
    }
    return true;
}
function isAlfanumericNotTurkish(val) {

    var a, b, durum = true;
    var bagozel2 = "'13','10'";
    var bagnum = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    b = String(val);

    for (i = 0; i < (b.length); i++) {
        if (bagnum.indexOf(b.charAt(i)) == -1) {
            durum = false;
        }
    }
    return durum;
}
function JFocuslan(fname) {
    if (checkJagEdit()) {
        eval("setFocus('" + fname + "');");
    }
    else {
        eval("document.forms[0]." + fname + ".focus();");
    }
}

function isYeniParolaTextOK() {
    if (document.forms[0].YeniParolaText.value == "") {
        alert(CheckFields_msgYeniParolaGir);
        JFocuslan("YeniParolaText");
        return false;
    }
    if (BuyukHarf(trim(document.forms[0].YeniParolaText.value)) == "PAROLA") {
        alert(CheckFields_msgYeniParolaParolaOlamaz);
        JFocuslan("YeniParolaText");
        return false;
    }

    if (trim(document.forms[0].YeniParolaText.value) == "") {
        alert(CheckFields_msgParolalarBoslukOlamaz);
        JFocuslan("YeniParolaText");
        return false;
    }

    if (trim(document.forms[0].YeniParolaTekrarText.value) == "") {
        alert(CheckFields_msgYeniParolaTekrarGir);
        JFocuslan("YeniParolaTekrarText");
        return false;
    }


    if (IsContainSpace(document.forms[0].YeniParolaText.value)) {
        alert(CheckFields_msgParolalarYeniBoslukIceremez);
        JFocuslan("YeniParolaText");
        return false;
    }

    if (BuyukHarf(document.forms[0].YeniParolaText.value) != BuyukHarf(document.forms[0].YeniParolaTekrarText.value)) {
        alert(CheckFields_msgParolalarFarkliTekrarGir);
        JFocuslan("YeniParolaText");
        return false;
    }

    f = document.forms[0].YeniParolaText.value;
    if ((f.length < 8) || (f.length > 16)) {
        alert(CheckFields_msgParolaEnAz8EnCok16Olmali);
        JFocuslan("YeniParolaText");
        return false;
    }

    if (!IsValidAlphaNumericCount(f, 3, 3)) {
        alert(CheckFields_msgParolaEnAz8EnCok16Olmali);
        JFocuslan("YeniParolaText");
        return false;
    }

    return true;
}

function isYeniSifreTextOK() {

    f = document.forms[0].YeniSifreText.value;

    var msg = "";

    if (f == "") {
        msg = CheckFields_yeniSif_bos;
        JFocuslan("YeniSifreText");
        return msg;
    }

    if (IsContainSpace(f)) {
        msg = CheckFields_msgSifreYeniBoslukIceremez;
        JFocuslan("YeniSifreText");
        return msg;
    }

    if (!ishepsinumerik(f)) {

        msg = CheckFields_yeniSif_number;
        JFocuslan("YeniSifreText");
        return msg;
    }

    if (f.length != 6) {
        msg = CheckFields_yeniSif_alti;
        JFocuslan("YeniSifreText");
        return msg;
    }

    if (f.charAt(0) == "0") {
        msg = CheckFields_yeniSif_sifir;
        JFocuslan("YeniSifreText");
        return msg;
    }
    if (f === "123456" || f === "234567" || f === "345678" || f === "456789" || f === "567890" || f === "678901" || f === "789012" || f === "890123" || f === "901234" || f === "012345" || f === "987654" || f === "876543" || f === "765432" ||
        f === "654321" || f === "543210" || f === "432109" || f === "321098" || f === "210987" || f === "109876" || f === "098765" || f === "000000" || f === "111111" || f === "222222" || f === "333333" || f === "444444" || f === "555555" ||
        f === "666666" || f === "777777" || f === "888888" || f === "999999" || f === "258258" || f === "161616" || f === "147147" || f === "369369" || f === "114477" || f === "225588" || f === "336699" || f === "159159" || f === "115599" ||
        f === "357357" || f === "335577" || f === "085085" || f === "008855") {
        msg = CheckFields_yeniSif_ardisik;
        JFocuslan("YeniSifreText");
        return msg;
    }

    try {
        if (dogumYiliAnindaSifreBireysel) {
            if (f.indexOf(dogumYiliAnindaSifreBireysel) != -1) {
                msg = CheckFields_yeniSif_DogumYili;
                JFocuslan("YeniSifreText");
                return msg;
            }
        }
    }
    catch (e)
    { }

    for (i = 0; i < (f.length); i++) {
        if (f.charAt(i) == f.charAt(i + 1)) {
            if (i + 2 == f.length) {
                msg = CheckFields_yeniSif_aynirakam;
                JFocuslan("YeniSifreText");
                return msg;
            }
        }
        else {
            break;
        }
    }

    if (document.forms[0].YeniSifreTekrarText.value == "") {
        msg = CheckFields_yeniSifTekrar_bos;
        JFocuslan("YeniSifreTekrarText");
        return msg;
    }

    if (f != document.forms[0].YeniSifreTekrarText.value) {
        msg = CheckFields_yeniSif_farkli;
        JFocuslan("YeniSifreTekrarText");
        return msg;
    }



    return "";
}

//yeni logon yeni şifre kontrol
function isYeniSifreTextOK_YeniLogon() {

    f = document.forms[0].YeniSifreText.value;

    if (f == "") {
        showInputBottomErrorMessage($('#YeniSifreText'), CheckFields_yeniSif_bos2);
        return false;
    }

    if (IsContainSpace(f)) {
        showInputBottomErrorMessage($('#YeniSifreText'), CheckFields_msgSifreYeniBoslukIceremez);
        return false;
    }

    if (!ishepsinumerik(f)) {
        showInputBottomErrorMessage($('#YeniSifreText'), CheckFields_yeniSif_number);
        return false;
    }

    if (f.length != 6) {
        showInputBottomErrorMessage($('#YeniSifreText'), CheckFields_yeniSif_alti);
        return false;
    }

    if (f.charAt(0) == "0") {
        showInputBottomErrorMessage($('#YeniSifreText'), CheckFields_yeniSif_sifir);
        return false;
    }
    if (f === "123456" || f === "234567" || f === "345678" || f === "456789" || f === "567890" || f === "678901" || f === "789012" || f === "890123" || f === "901234" || f === "012345" || f === "987654" || f === "876543" || f === "765432" ||
        f === "654321" || f === "543210" || f === "432109" || f === "321098" || f === "210987" || f === "109876" || f === "098765" || f === "000000" || f === "111111" || f === "222222" || f === "333333" || f === "444444" || f === "555555" ||
        f === "666666" || f === "777777" || f === "888888" || f === "999999" || f === "258258" || f === "161616" || f === "147147" || f === "369369" || f === "114477" || f === "225588" || f === "336699" || f === "159159" || f === "115599" ||
        f === "357357" || f === "335577" || f === "085085" || f === "008855") {
        showInputBottomErrorMessage($('#YeniSifreText'), CheckFields_yeniSif_ardisik);
        return false;
    }

    try {
        if (dogumYiliAnindaSifreBireysel) {
            if (f.indexOf(dogumYiliAnindaSifreBireysel) != -1) {
                showInputBottomErrorMessage($('#YeniSifreText'), CheckFields_yeniSif_DogumYili);
                return false;
            }
        }
    }
    catch (e)
    { }

    for (i = 0; i < (f.length); i++) {
        if (f.charAt(i) == f.charAt(i + 1)) {
            if (i + 2 == f.length) {
                showInputBottomErrorMessage($('#YeniSifreText'), CheckFields_yeniSif_aynirakam);
                return false;
            }
        }
        else {
            break;
        }
    }

    if (document.forms[0].YeniSifreTekrarText.value == "") {
        showInputBottomErrorMessage($('#YeniSifreTekrarText'), CheckFields_yeniSifTekrar_bos);
        return false;
    }

    if (f != document.forms[0].YeniSifreTekrarText.value) {
        showInputBottomErrorMessage($('#YeniSifreTekrarText'), CheckFields_yeniSif_farkli);
        return false;
    }



    return true;
}
//yeni logon yeni şifre kontrol son
function isYeniTelSifreTextOK(alertflag) {
    f = document.forms[0].YeniTelSifreText.value;
    f_tekrar = document.forms[0].YeniTelSifreTekrarText.value;
    var msg = "";
    if (f != document.forms[0].YeniTelSifreTekrarText.value && f_tekrar != "") {
        msg = CheckFields_yeniTelSif_farkli;
        JFocuslan("YeniTelSifreText");
        return msg;
    }
    if (f == "1234" || f == "2345" || f == "3456" || f == "4567" || f == "5678" || f == "6789" || f == "7890" || f == "8901" || f == "9012" || f == "0123" || f == "9876" || f == "8765" || f == "7654" || f == "6543" || f == "5432" || f == "4321" || f == "3210" || f == "2109" || f == "1098" || f == "0987") {
        msg = CheckFields_yeniTelSif_ardisik;
        JFocuslan("YeniTelSifreText");
        return msg;
    }
    for (i = 0; i < (f.length); i++) {
        if (f.charAt(i) == f.charAt(i + 1)) {
            if (i + 2 == f.length) {
                msg = CheckFields_yeniTelSif_aynirakam;
                JFocuslan("YeniTelSifreText");
                return msg;
            }
        }
        else {
            break;
        }
    }
    if (trim(f) == "") {
        msg = CheckFields_yeniTelSif_bos;
        JFocuslan("YeniTelSifreText");
        return msg;
    }
    if (f.length != 4) {
        msg = CheckFields_yeniTelSif_dort;
        JFocuslan("YeniTelSifreText");
        return msg;
    }
    if (!ishepsinumerik(f)) {
        msg = CheckFields_yeniTelSif_number;
        JFocuslan("YeniTelSifreText");
        return msg;
    }
    if (trim(f_tekrar) == "") {
        msg = CheckFields_yeniTelSifTekrar_bos;
        JFocuslan("YeniTelSifreTekrarText");
        return msg;
    }
    return "";
}

function GeciciSifreCheck() {
    try {
        if (document.forms[0].SifreText != null) {
            if (parent.TxChannel == undefined) {
                parent.TxChannel = "Heey!! henüz çağrı bu ekibe gelmemiş"; // default'a düşmesi için :) (ab56041)
            }
            switch (parent.TxChannel) {
                case parent.TxChannelCagri:
                    return true;
                case parent.TxChannelInternet:
                default:

                    f = document.forms[0].SifreText.value;

                    if (f == "") {
                        alert(CheckFields_msgGeciciSifreGir);
                        focusZ6();
                        return false;
                    }
                    if (!ishepsinumerik(f)) {
                        alert(CheckFields_msgGeciciSifreSayisalOlmali);
                        focusZ6();
                        return false;
                    }

                    if (f.length != 6) {
                        alert(CheckFields_msgGeciciSifre6HaneliOlmali);
                        focusZ6();
                        return false;
                    }
                    return true;
            }
        }
        else
            return true;
    }
    catch (e) {
        return true;
    }
}

function focusZ6() {
    var LogonIGAType = document.forms[0].LogonIGAType.value;

    if (LogonIGAType == "MobilOnay") {
        $("#MobilOnaySifreText").focus();
    }
    else if (LogonIGAType == "CepAnahtar") {
        $("#CepIAnahtarSifreText").focus();
    }
    else if (LogonIGAType == "IAnahtar") {
        $("#CepIAnahtarSifreText").focus();
    }
    else if (LogonIGAType == "MobilImza") {
        $("#MobilImzaSifreText").focus();
    }
    else if (LogonIGAType == "Ekimlik") {
        $("#CepIAnahtarSifreText").focus();
    }
}

function SifreCheckForZ6() {
    try {
        return true; // z6 da artık müşteri şifresi sorulmayacak
        if (document.forms[0].SifreText != null) {
            f = document.forms[0].SifreText.value;

            if (f == "") {
                alert(CheckFields_msgInternetSifreGir);
                focusZ6();
                return false;
            }
            if (!ishepsinumerik(f)) {
                alert(CheckFields_msgSifreSayisalOlmali);
                focusZ6();
                return false;
            }

            if (f.charAt(0) == '0') {
                alert(CheckFields_msgIntSifreAciklama);
                focusZ6();
                return false;
            }

            if (f.length != 6) {
                alert(CheckFields_msgIntSifre6HaneliOlmali);
                focusZ6();
                return false;
            }
            return true;
        }
        else return true;
    }
    catch (e) {
        return true;
    }
}

function IGACheckForMultiple() {
    try {
        var LogonIGAType = document.getElementById('LogonIGAType').value;
        if (LogonIGAType == "IAnahtar") {
            if (document.getElementById('oneTimePasswordIAnahtar')) {
                f = document.getElementById('oneTimePasswordIAnahtar').value;
                if (document.getElementById('oneTimePasswordIAnahtar').value == "") {
                    showInputBottomErrorMessage($('#oneTimePasswordIAnahtar'), CheckFields_msgTekKulSifreGir);
                    return false;
                }
                if (!ishepsinumerik(f)) {
                    showInputBottomErrorMessage($('#oneTimePasswordIAnahtar'), CheckFields_msgIAnahtarOTPSayisalOlmali);
                    return false;
                }
                if (f.length != 8) {
                    showInputBottomErrorMessage($('#oneTimePasswordIAnahtar'), IAnahtarSifreEksik);
                    return false;
                }
            }
        }
        else if (LogonIGAType == "CepAnahtar") {
            if (document.forms[0].oneTimePasswordCepAnahtar) {
                f = document.forms[0].oneTimePasswordCepAnahtar.value;
                if (document.forms[0].oneTimePasswordCepAnahtar.value == "") {
                    showInputBottomErrorMessage($('#oneTimePasswordCepAnahtar'), CepanahtarSifreBos);
                    return false;
                }
                if (!ishepsinumerik(f)) {
                    showInputBottomErrorMessage($('#oneTimePasswordCepAnahtar'), CheckFields_msgCepAnahtarOTPSayisalOlmali);
                    return false;
                }
                if (document.forms[0].oneTimePasswordCepAnahtar.value.length != 8) {
                    showInputBottomErrorMessage($('#oneTimePasswordCepAnahtar'), CepAnahtarSifreEksik);
                    return false;
                }
            }
        }
        return true;
    }
    catch (e) {
        return true;
    }
}
function IGACheck() {
    try {
        var LogonIGAType = document.getElementById('LogonIGAType').value;
        if (LogonIGAType == "IAnahtar") {
            if (document.forms[0].oneTimePasswordIAnahtar) {
                f = document.forms[0].oneTimePasswordIAnahtar.value;
                if (f == "") {
                    showInputBottomErrorMessage($('#oneTimePasswordIAnahtar'), CheckFields_msgTekKulSifreGir);
                    return false;
                }
                if (!ishepsinumerik(f)) {
                    showInputBottomErrorMessage($('#oneTimePasswordIAnahtar'), CheckFields_msgIAnahtarOTPSayisalOlmali);
                    return false;
                }
                if (f.length != 8) {
                    showInputBottomErrorMessage($('#oneTimePasswordIAnahtar'), IAnahtarSifreEksik);
                    return false;
                }
            }
        }
        else if (LogonIGAType == "CepAnahtar") {

            if (document.forms[0].oneTimePasswordCepAnahtar) {
                f = document.forms[0].oneTimePasswordCepAnahtar.value;
                if (f == "") {
                    showInputBottomErrorMessage($('#oneTimePasswordCepAnahtar'), CepanahtarSifreBos);
                    return false;
                }
                if (!ishepsinumerik(f)) {
                    showInputBottomErrorMessage($('#oneTimePasswordCepAnahtar'), CheckFields_msgCepAnahtarOTPSayisalOlmali);
                    return false;
                }

                if (document.forms[0].oneTimePasswordCepAnahtar.value.length != 8) {
                    showInputBottomErrorMessage($('#oneTimePasswordCepAnahtar'), CepAnahtarSifreEksik);
                    return false;
                }
            }
        }
        else if (LogonIGAType == "MobilOnay") {
            if (document.forms[0].mobileConfirmationCode) {
                f = document.forms[0].mobileConfirmationCode.value;
                if (f == "") {
                    showInputBottomErrorMessage($('#mobileConfirmationCode'), CheckFields_msgMobilOnayKoduGirilmeli);
                    return false;
                }
                if (!ishepsinumerik(f)) {
                    showInputBottomErrorMessage($('#mobileConfirmationCode'), CheckFields_msgMobilOnaySayisalOlmali);
                    return false;
                }
                if (f.length != 6) {
                    showInputBottomErrorMessage($('#mobileConfirmationCode'), CheckFields_msgMobilOnayKodu6HaneliOlmali);
                    return false;
                }

            }
        }
        else if (LogonIGAType == "Ekimlik") {

            var EKimlikLogonSupportType = $("#EKimlikLogonSupportType").val();

            if (document.forms[0]._ctl0_Z6_IGA_TxtEkimlikPIN) {
                f = document.forms[0]._ctl0_Z6_IGA_TxtEkimlikPIN.value;
                if (document.forms[0]._ctl0_Z6_IGA_TxtEkimlikPIN.value == "") {
                    showInputBottomErrorMessage($('#_ctl0_Z6_IGA_TxtEkimlikPIN'), EKimlikAktivasyonGiris_KartSifresiPINZorunlu);
                    return false;
                }
                if (!ishepsinumerik(f)) {
                    showInputBottomErrorMessage($('#_ctl0_Z6_IGA_TxtEkimlikPIN'), EKimlikAktivasyonGiris_KartSifresiPINGecerliDegil);
                    return false;
                }

                if (document.forms[0]._ctl0_Z6_IGA_TxtEkimlikPIN.value.length != 6) {
                    showInputBottomErrorMessage($('#_ctl0_Z6_IGA_TxtEkimlikPIN'), EKimlikAktivasyonGiris_KartSifresiPINUzunlukGecerliDegil);
                    return false;
                }
            }

            if (EKimlikLogonSupportType == "PINPEN") {

                if (document.forms[0]._ctl0_Z6_IGA_TxtEkimlikPEN) {
                    f = document.forms[0]._ctl0_Z6_IGA_TxtEkimlikPEN.value;
                    if (document.forms[0]._ctl0_Z6_IGA_TxtEkimlikPEN.value == "") {
                        showInputBottomErrorMessage($('#_ctl0_Z6_IGA_TxtEkimlikPEN'), EKimlikAktivasyonGiris_KartSifresiPENZorunlu);
                        return false;
                    }
                    if (!ishepsinumerik(f)) {
                        showInputBottomErrorMessage($('#_ctl0_Z6_IGA_TxtEkimlikPEN'), EKimlikAktivasyonGiris_KartSifresiPENGecerliDegil);
                        return false;
                    }

                    if (document.forms[0]._ctl0_Z6_IGA_TxtEkimlikPEN.value.length != 6) {
                        showInputBottomErrorMessage($('#_ctl0_Z6_IGA_TxtEkimlikPEN'), EKimlikAktivasyonGiris_KartSifresiPENUzunlukGecerliDegil);
                        return false;
                    }
                }
            }
        }

        return true;
    }
    catch (e) {
        return true;
    }

}

function SifreCheck() {
    try {
        if (document.forms[0].SifreText != null) {
            if (parent.TxChannel == undefined) {
                parent.TxChannel = "Heey!! henüz çağrı bu ekibe gelmemiş"; // default'a düşmesi için :) (ab56041)
            }
            switch (parent.TxChannel) {
                case parent.TxChannelCagri:
                    return true;
                case parent.TxChannelInternet:
                default:

                    f = document.forms[0].SifreText.value;

                    if (f == "") {
                        alert(CheckFields_msgInternetSifreGir);
                        JFocuslan("SifreText");
                        return false;
                    }
                    if (!ishepsinumerik(f)) {
                        alert(CheckFields_msgSifreSayisalOlmali);
                        JFocuslan("SifreText");
                        return false;
                    }

                    if (f.charAt(0) == '0') {
                        alert(CheckFields_msgIntSifreAciklama);
                        JFocuslan("SifreText");
                        return false;
                    }

                    if (f.length != 6) {
                        alert(CheckFields_msgIntSifre6HaneliOlmali);
                        JFocuslan("SifreText");
                        return false;
                    }

                    var op1 = document.forms[0]._ctl0_ParolaDegistir_rdbtnlistSifreGecerlilikSuresi_0;
                    var op2 = document.forms[0]._ctl0_ParolaDegistir_rdbtnlistSifreGecerlilikSuresi_1;
                    if (op1 && op2) {
                        if (!op1.checked && !op2.checked) {
                            alert(CheckFields_msgSifreGecerlilikSuresiSecilmeli);
                            op1.focus();
                            return false;
                        }
                    }

                    return true;
            }
        }
        else
            return true;
    }
    catch (e) {
        return true;
    }

}

//Genel Tutar Kurus Kontrolü
function TutarKurusKontrol(CntrlTutar, CntrlKurus) {

    //Tutar Kontrolü
    var tutarGirilmisMi = false;
    var kurusGirilmisMi = false;
    var ZeroCounter = 0;

    inputValue = CntrlTutar.value;
    inputValue = trim(inputValue);
    if (inputValue == "") // tutar değeri girilmemiş 
    {
        tutarGirilmisMi = false;
    }
    else // tutar değeri girilmiş
    {
        tutarGirilmisMi = true;

        for (index = 0; index < (inputValue.length); index++) {

            if (inputValue.charAt(index) < '0' || inputValue.charAt(index) > '9') {
                if (inputValue.charAt(index) != ",") {
                    alert(TutarNumerikOlmali);
                    BorderMark(CntrlTutar);
                    CntrlTutar.focus();
                    return false;
                }
            }
            if (inputValue.charAt(index) == '0') {
                ZeroCounter++;
            }
            if (index > 14) {
                alert(TutarMaxUzunluguGecti);
                BorderMark(CntrlTutar);
                CntrlTutar.value = "";
                return false;
            }
        }

        if (inputValue.length > 14) {
            alert(TutarMaxUzunluguGecti);
            BorderMark(CntrlTutar);
            CntrlTutar.value = "";
            CntrlTutar.focus();
            return false;
        }

        if (inputValue.length == ZeroCounter) //tutar değeri 0
        {
            tutarGirilmisMi = false;
        }
    } // else   tutar değeri girilmiş

    if (inputValue.length == 0) {
        CntrlTutar.value = "0";
    }

    ZeroCounter = 0;

    //Tutar Kuruş kontrolu		
    inputValue = CntrlKurus.value;
    inputValue = trim(inputValue);
    if (inputValue == "") // kuruş değeri girilmemiş
    {
        kurusGirilmisMi = false;
    }
    else // kuruş değeri girilmiş
    {
        kurusGirilmisMi = true;
        for (index = 0; index < (inputValue.length); index++) {

            if (inputValue.charAt(index) < '0' || inputValue.charAt(index) > '9') {
                alert(TutarNumerikOlmali);
                BorderMark(CntrlKurus);
                CntrlKurus.value = "00";
                CntrlKurus.focus();
                return false;
            }

            if (inputValue.charAt(index) == '0') {
                ZeroCounter++;
            }

            if (index > 2) {
                alert(KurusMaxUzunluguGecti);
                BorderMark(CntrlKurus);
                CntrlKurus.value = "00";
                return false;
            }
        }

        if (inputValue.length == ZeroCounter) //kuruş değeri 0
        {
            kurusGirilmisMi = false;
        }

    } // kuruş değeri girilmiş

    //Kuruş alanı boş ise
    if (inputValue.length == 0) {
        CntrlKurus.value = "00";
    }

    if (tutarGirilmisMi == false && kurusGirilmisMi == false) {
        alert(TutarGirilmeli);
        BorderMark(CntrlTutar);
        CntrlTutar.focus();
        return false;
    }

    return true;
}

function isTekKullanımlikSifreOK() {
    var ianahtar = document.forms[0].SifreTextIAnahtar;
    var msg = "";

    if (ianahtar.value == "") {
        msg = CheckFields_msgTekKulSifreGir;
        JFocuslan("SifreTextIAnahtar");
        return msg;
    }

    if (IsContainSpace(ianahtar.value)) {
        msg = CheckFields_msgSifreYeniBoslukIceremez;
        JFocuslan("SifreTextIAnahtar");
        return msg;
    }
    if (ianahtar.value.length != 8) {
        msg = CheckFields_msgTekKulSifre8HaneliOlmali;
        JFocuslan("SifreTextIAnahtar");
        return msg;
    }

    if (!ishepsinumerik(ianahtar.value)) {
        msg = CheckFields_tekKullanimlikSifre_number;
        JFocuslan("SifreTextIAnahtar");
        return msg;
    }

    return msg;
}

function IsContainSpace(paramStr) {
    if (paramStr.indexOf(' ') >= 0)
        return true;
    else
        return false;
}