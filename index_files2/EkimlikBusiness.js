
function IsJavaEnabled() {
    //    if (navigator.javaEnabled())
    //        return true;
    //    else {
    //        return false;
    //    }

    var javaTest = false;
    if (navigator.javaEnabled()) {
        javaTest = true;
    } else if (navigator.plugins && navigator.plugins.length) {
        for (x = 0; x < navigator.plugins.length; x++) {
            if (navigator.plugins[x].name.indexOf('Java(TM)') != -1) {
                javaTest = true;
                break;
            }
        }
    }

    return javaTest;
}


function CreateSKDBErrorHandler(err) {

    var error_code = "";
    var error_msg = "";

    if (typeof err.error_code != 'undefined' && typeof err.error_msg != 'undefined') {
        error_code = err.error_code;
        error_msg = err.error_msg;
    }
    else {
        var ErrMessageInfo = PrepareJSErrMessageInfo(err);
        error_code = ErrMessageInfo.error_code;
        error_msg = ErrMessageInfo.error_msg;
    }

    if (error_msg.indexOf("AkisException_mAkisErrorCode") != -1) {
        if (error_msg.indexOf("25538") != -1) {
            //_getKimlikPinRemainingTryCount = 3
            // tr.gov.tubitak.bilgem.uekae.akis.akisCIF.akisExceptions.AkisException: 63c2 PIN/PUK_HATALI 
            alert(EKimlikAktivasyonGiris_SifreHatali);
        } else if (error_msg.indexOf("25537") != -1) {
            //_getKimlikPinRemainingTryCount = 2
            //tr.gov.tubitak.bilgem.uekae.akis.akisCIF.akisExceptions.AkisException: 63c1 PIN/PUK_HATALI(SON DENEME)
            alert(EKimlikAktivasyonGiris_SifreHatali);
        } else if (error_msg.indexOf("27011") != -1) {
            //_getKimlikPinRemainingTryCount = 1
            //tr.gov.tubitak.bilgem.uekae.akis.akisCIF.akisExceptions.AkisException: 6983 UNKNOWN_ERROR
            alert(EKimlikAktivasyonGiris_SifreBlokeHatasi);
        }
        else {
            //alert(EKimlikAktivasyonGiris_TeknikHata);
            alert(EKimlikAktivasyonGiris_SifreHatali);
        }
    }
    else if (error_msg.indexOf("PrivilegedActionException") != -1) {
        alert(EKimlikAktivasyonGiris_SifreHatali);
    }
    else {
        //alert(EKimlikAktivasyonGiris_TeknikHata);
        alert(EKimlikAktivasyonGiris_SifreHatali);

    }
}

/*
<script src="https://www.java.com/js/deployJava.js"></script>
            <script type="text/javascript">

                LoadLoginApplet();

            </script>

*/

function LoadLoginApplet() {

    try {

        var attributes = { id: 'loginApplet', code: 'EKimlikLoginApplet', archive: './isModules/EKimlik/EKimlikLoginJars/EKimlikLogin.jar', width: 0, height: 0 };
        var parameters = { permissions: 'all-permissions' };

        deployJava.runApplet(attributes, parameters, '1.6');

    } catch (e) {
        alert(e);
    }

}