
var kimlikPinRemainingTryCount = 3;
var callPage = "LoginIntSubeEkimlik";

function HideInfo_EKimlikLogon() {

    $('#_ctl0_Z6_IGA_divZ6EkimlikTextBox').hide();
    $('#_ctl0_Z6_IGA_PnlEkimlikHata').hide();

    $('#_ctl0_Z6_IGA_LblEkimlikLogonHataJavaDesteklemiyorAciklama').hide();
    $('#_ctl0_Z6_IGA_LblEkimlikLogonHataKartOkuyucuYokAciklama').hide();
    $('#_ctl0_Z6_IGA_LblEkimlikLogonHataKartYokAciklama').hide();
    $('#_ctl0_Z6_IGA_LblEkimlikLogonHataTCKNHataAciklama').hide();
    $('#_ctl0_Z6_IGA_LblEkimlikLogonHataTeknikHataAciklama').hide();
    $('#_ctl0_Z6_IGA_LblEkimlikLogonHataEkimlikPINBlokeAciklama').hide();

    $('#divZ6EkimlikTextBoxPIN').hide();
    $('#divZ6EkimlikTextBoxPEN').hide();
    $('#dvEkimlikPINText').hide();
    $('#dvEkimlikPENText').hide();

    document.getElementById('_ctl0_Z6_IGA_SubeLogin02_CepAnahtarBtnGiris').disabled = true;
    $('#_ctl0_Z6_IGA_SubeLogin02_CepAnahtarBtnGiris').hide();
}

function ClearPINandPENInputValues_EKimlikLogon() {
    $("#_ctl0_Z6_IGA_TxtEkimlikPIN").val("");
    $("#_ctl0_Z6_IGA_TxtEkimlikPEN").val("");
}

function UpdatePINorPENRequest_EKimlikLogon() {

    callPage = "LoginIntSubeEkimlik";

    ClearPINandPENInputValues_EKimlikLogon();
    HideInfo_EKimlikLogon();  

    if (IsJavaEnabled() == false) {
        //Kullanılan tarayıcının kart okuyucuya erişmek için gerekli yazılıma sahip olup olmadığı 
        //(Java versiyonu vs) kontrol edilerek, tarayıcı desteği olmaması halinde hata verilir.
        $('#_ctl0_Z6_IGA_PnlEkimlikHata').show();
        $('#_ctl0_Z6_IGA_LblEkimlikLogonHataJavaDesteklemiyorAciklama').show();
        return;
    }

    var loginApplet = GetLoginApplet();


    if (loginApplet == null) {
        // aplett yüklenmemiş.
        //Kullanılan tarayıcının kart okuyucuya erişmek için gerekli yazılıma sahip olup olmadığı 
        //(Java versiyonu vs) kontrol edilerek, tarayıcı desteği olmaması halinde hata verilir.
        $('#_ctl0_Z6_IGA_PnlEkimlikHata').show();
        $('#_ctl0_Z6_IGA_LblEkimlikLogonHataTeknikHataAciklama').show();
        return;
    }

    if (!loginApplet.isCardReaderPresent()) {
        //kart okuyucusu takılı değil.
        $('#_ctl0_Z6_IGA_PnlEkimlikHata').show();
        $('#_ctl0_Z6_IGA_LblEkimlikLogonHataKartOkuyucuYokAciklama').show();
        return;
    }

    if (!loginApplet.isCardPresent()) {
        // kart okuyucusunda kart yok.
        $('#_ctl0_Z6_IGA_PnlEkimlikHata').show();
        $('#_ctl0_Z6_IGA_LblEkimlikLogonHataKartYokAciklama').show();
        return;
    }

    //TCKN Kontrolü Yapılır.
    var TCKimlikNumarasi = GetTCKimlikNumarasi();
   // var TCKimlikNumarasi = "60484099594"; // "24145667768";

    if (parseInt(TCKimlikNumarasi, 10) > 0) {

        CheckTCKimlikNumarasi(parseInt(TCKimlikNumarasi, 10));
    }
    else {
        //ekimlikten TCKN alınırken teknik HATA
        CheckTCKimlikNumarasiError("");
    }

}


function CheckTCKimlikNumarasi(TCKimlikNumarasi) {

    var request = new CheckTCKNRequest();
    request.tckn = TCKimlikNumarasi;
    isJsAjax.SendJsonToServer('POST', 'Ajax/AjaxHandler.ashx', request, CheckTCKimlikNumarasiSuccess, CheckTCKimlikNumarasiError, false, '', '', false);
}


function CheckTCKimlikNumarasiSuccess(data) {

    if (data.Status == true) {
        // Müşteri Bilgisi MBY den Sorugulanmış.

        if (data.CheckTCKNResult == true) {

            // Ekimlik TCKN ile Müşteri TCKN aynı

            var loginApplet = GetLoginApplet();
            kimlikPinRemainingTryCount = loginApplet.getKimlikPinRemainingTryCount();

            if (kimlikPinRemainingTryCount == 0) {
                //   PIN Bloklanmış
                $('#_ctl0_Z6_IGA_PnlEkimlikHata').show();
                $('#_ctl0_Z6_IGA_LblEkimlikLogonHataEkimlikPINBlokeAciklama').show();

            } else if (kimlikPinRemainingTryCount == 1) {

                $('#_ctl0_Z6_IGA_divZ6EkimlikTextBox').show();
                $('#divZ6EkimlikTextBoxPIN').show();
                $('#dvEkimlikPINText').show();
                $('#divZ6EkimlikTextBoxPEN').show();
                $('#dvEkimlikPENText').show();
                $('#_ctl0_Z6_IGA_SubeLogin02_CepAnahtarBtnGiris').show();
                document.getElementById('_ctl0_Z6_IGA_SubeLogin02_CepAnahtarBtnGiris').disabled = false;
                $("#EKimlikLogonSupportType").val("PINPEN");

                $("#_ctl0_Z6_IGA_TxtEkimlikPIN").focus();

            } else {
                $('#_ctl0_Z6_IGA_divZ6EkimlikTextBox').show();
                $('#divZ6EkimlikTextBoxPIN').show();
                $('#dvEkimlikPINText').show();
                $('#_ctl0_Z6_IGA_SubeLogin02_CepAnahtarBtnGiris').show();
                document.getElementById('_ctl0_Z6_IGA_SubeLogin02_CepAnahtarBtnGiris').disabled = false;
                $("#EKimlikLogonSupportType").val("PIN");

                $("#_ctl0_Z6_IGA_TxtEkimlikPIN").focus();
            }
        }
        else {
            // Ekimlik TCKN ile Müşteri TCKN aynı değil.
            //$('.EKimlikAktivasyonGiris_classTCKNHataAciklama').show();
            $('#_ctl0_Z6_IGA_PnlEkimlikHata').show();
            $('#_ctl0_Z6_IGA_LblEkimlikLogonHataTCKNHataAciklama').show();
        }
    } else {
        // Müşteri Bilgisi MBY den Sorugulanırken teknik hata alınmış.
        CheckTCKimlikNumarasiError("");
    }

}

function CheckTCKimlikNumarasiError(data) {
    //hata 
    $('#_ctl0_Z6_IGA_PnlEkimlikHata').show();
    $('#_ctl0_Z6_IGA_LblEkimlikLogonHataTeknikHataAciklama').show();
}


function GetTCKimlikNumarasi() {
    var TCKimlikNumarasi = 0;

    try {
     
        var loginApplet = GetLoginApplet();

        TCKimlikNumarasi = loginApplet.getTCKimlikNumarasi();

    } catch (err) {
        TCKimlikNumarasi = 0;
     
        LogJSErrMessageInfoNotResetWindowTimeout(GetPageTrkd(), callPage, "GetTCKimlikNumarasi", err);
    }

    return TCKimlikNumarasi;
}


function GetLoginApplet() {
    //Appletin yuklendiginin anlasilmasi icin bu metod cagrilir. 
    //Eger exception atarsa applet yuklenmedi demektir.
    var loginApplet = document.getElementById('loginApplet');

    try {
        var javaArch = loginApplet.getJavaArch();
        return loginApplet;
    } catch (err) {
        LogJSErrMessageInfoNotResetWindowTimeout(GetPageTrkd(), callPage, "GetLoginApplet", err);
    }

    return null;
}


function GetPageTrkd() {
    return document.forms[0].trkd.value;
}

function LoginWithTCKK_EKimlikLogonGiris() {
  
    try {
        if (CheckSmartCardReader() && CheckChallenge()) {
            var loginApplet = GetLoginApplet();


            if (loginApplet != null) {
            
                if (kimlikPinRemainingTryCount == 1) {
                    var ekimlikSKDB = loginApplet.createSKDB(GetPINValue(), GetPENValue(), GetChallenge());
                    $('#EKimlikLogonSKDB').val(ekimlikSKDB);
                    return true;
                } else {
                    var ekimlikSKDB = loginApplet.createSKDB(GetPINValue(), GetChallenge());
                    $('#EKimlikLogonSKDB').val(ekimlikSKDB);
                    return true;
                }
            }
            else {
                alert(EKimlikAktivasyonGiris_TeknikHata);

                UpdatePINorPENRequest_EKimlikLogon();

                return false;
            }
        }
    } catch (err) {

        CreateSKDBErrorHandler(err);

        LogJSErrMessageInfoNotResetWindowTimeout(GetPageTrkd(), callPage, "LoginWithTCKK_EKimlikLogonGiris", err);

        UpdatePINorPENRequest_EKimlikLogon();

    }
    return false;
}




function CheckSmartCardReader() {
    var returnValue = false;
    if (IsJavaEnabled()) {
        try {
            var loginApplet = GetLoginApplet();

            if (loginApplet == null) {
                alert(EKimlikAktivasyonGiris_LoginAppletHata);
            } else if (!loginApplet.isCardReaderPresent()) {
                alert(EKimlikAktivasyonGiris_KartOkuyucuYokHata);
            } else if (!loginApplet.isCardPresent()) {
                alert(EKimlikAktivasyonGiris_KartOkuyucudaKartYokHata);
            } else {
                returnValue = true;
            }

        } catch (err) {
            alert(EKimlikAktivasyonGiris_TeknikHata);
            LogJSErrMessageInfoNotResetWindowTimeout(GetPageTrkd(), callPage, "CheckSmartCardReader", err);
        }
    }
    else {
        alert(EKimlikAktivasyonGiris_JavaDesteklemiyorHata);
    }
    return returnValue;
}


function CheckChallenge() {

    var challenge = GetChallenge();

    if (challenge == null || challenge == '') {
        alert(EKimlikAktivasyonGiris_TeknikHata);
        return false;
    }
    return true;
}

function GetChallenge() {
    return $("#EKimlikLogonChallenge").val();
}

function GetPINValue() {
    return $("#_ctl0_Z6_IGA_TxtEkimlikPIN").val();
}

function GetPENValue() {
    return $("#_ctl0_Z6_IGA_TxtEkimlikPEN").val();
}


