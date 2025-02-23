var isChecked = false;
var changeField = $('#mobileCode');
var appIsTablet = (document.getElementById("isTabletApp") != null && document.getElementById("isTabletApp").value == "true" ? "true" : "false");

$(function () {

    $('#resendCode').click(function () {
        $('.keyPadContainer').hide();
        //console.log('resend code');
        //location.reload(true);
        //SetSubmittedValueForSessionControl();
        document.forms[0].SendMO.value = "S";
        document.forms[0].submit();
    });

    $('#resendCode_CanOtpApproveByDiyalog').click(function () {
        $('.keyPadContainer').hide();
        //console.log('resend code');
        //location.reload(true);
        //SetSubmittedValueForSessionControl();
        document.forms[0].SendMO.value = "S";
        document.forms[0].submit();

        //$("#CanOtpApproveByDiyalogStatus").val("");
        //stopCanOtpApproveByDiyalogtimer();

        isJsCookie.Delete('StatusByDiyalog');
        //isJsCookie.Create('StatusByDiyalog', 'sendMokByDiyalog', 1);
        isJsCookie.Create('StatusByDiyalog', 'canOtpApproveByDiyalog', 1);
    });

    $('#resendCode_CustomerCanLoginBySeal').click(function () {
        $('.keyPadContainer').hide();
        //console.log('resend code');
        //location.reload(true);
        //SetSubmittedValueForSessionControl();
        document.forms[0].SendMO.value = "S";
        document.forms[0].submit();

        //$("#CustomerCanLoginBySealStatus").val("");
        //stopCustomerCanLoginBySealtimer();

        isJsCookie.Delete('StatusByDiyalog');
        //isJsCookie.Create('StatusByDiyalog', 'sendMokByDiyalog', 1);
        isJsCookie.Create('StatusByDiyalog', 'customerCanLoginBySeal', 1);
    });

    if (appIsTablet != "true") {
        $('#mobileConfirmationCode').focus(function () {
            $('.keyPadContainer').show();
        });
    }

    if (isJsCookie.Read('Z6MokTimedOut')) {
        $('#resendCode').removeAttr('disabled');
        isJsCookie.Delete('Z6MokTimedOut');
    }
    else {
        if (true) { // TODO Oguzhan : Seal - buraya bakalým
            var CustomerCanLoginBySealStatus = $("#CustomerCanLoginBySealStatus").val();

            if (CustomerCanLoginBySealStatus != "0") {
                startTimer(["#08335E", "#FFFFFF"]); //Mobil Onay Timer, CustomerCanLoginBySeal kullanýlmamýþ ise çalýþtýrýlýr !!! 
            }
        }
        else {
            var CanOtpApproveByDiyalogStatus = $("#CanOtpApproveByDiyalogStatus").val();

            if (CanOtpApproveByDiyalogStatus != "0"){
                startTimer(["#08335E", "#FFFFFF"]); //Mobil Onay Timer, CanOtpApproveByDiyalog kullanýlmamýþ ise çalýþtýrýlýr !!! 
            }
        }
    }

    keyPadFocusFix();
});


if (appIsTablet != "true")
    setTimeout(function () { $('#formContainer input[type="password"]').focus(); }, 100);

function SetSubmittedValueForSessionControl() {
    if (document.forms[0].FormSubmitted)
        document.forms[0].FormSubmitted.value = 'true';
    if (window.parent.document.forms[0].FormSubmitted) {
        window.parent.document.forms[0].FormSubmitted.value = 'true';
    }
}

