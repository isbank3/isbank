
function SubmitFormForContinuationState(ItemValue) {
    if (ItemValue.indexOf("D") == 0) {
        document.forms[0].submit();
    }
}

function AjaxStartFunc(divName, targetElementId) {
    isAjaxRequestInProgress = true;
    var intsube_ResimHS = '<%=Internet.isClass.HTMLOperations.GetOmniSuffix("intsube_Resim")%>';
    isJsAjax.ShowLoadingImage(targetElementId, '/' + intsube_ResimHS + '/Resimler/LoadingGif.gif', 25, 25);
}

function AjaxStopFunc(divName, targetElementId) {
    isAjaxRequestInProgress = false;
    var intsube_ResimHS = '<%=Internet.isClass.HTMLOperations.GetOmniSuffix("intsube_Resim")%>';
    isJsAjax.HideLoadingImage(targetElementId, '/' + intsube_ResimHS + '/Resimler/LoadingGif.gif', 25, 25);
}

function GetCanOtpApproveByDiyalog() {

    var request = new LoginPushNotificationRequest();

    request.Tkrd = "CanOtpApproveByDiyalog";

    if (request.Tkrd !== null) {
        isJsAjax.SendJsonToServer('POST', 'Ajax/AjaxHandler.ashx', request, IslemGetCanOtpApproveByDiyalogSuccess, IslemGetCanOtpApproveByDiyalogError, false, '', 'GetAccountsForBankamatikKartBasvuru', false);
    }
}

function IslemGetCanOtpApproveByDiyalogError(data) {
    console.log("Get CanOtpApproveByDiyalog - Error");
    stopCanOtpApproveByDiyalogtimer();
    alert(GenelTeknikHata);
}

function IslemGetCanOtpApproveByDiyalogSuccess(data) {

    $("#CanOtpApproveByDiyalogStatus").val(data.DiyalogMokStatus);
    if (data.DiyalogMokStatus == "0") {
    }
    else if (data.DiyalogMokStatus == "1") {
        console.log("Get CanOtpApproveByDiyalog Approve");
        stopCanOtpApproveByDiyalogtimer();
        document.getElementById("StartSessionButton").click();
    }
    else if (data.DiyalogMokStatus == "2") {
        console.log("Get CanOtpApproveByDiyalog Cancel");
        stopCanOtpApproveByDiyalogtimer();
        document.getElementById("EndSessionButton").click();
    }
    else if (data.DiyalogMokStatus == "3") {
        console.log("Get CanOtpApproveByDiyalog OtpExpired");
        stopCanOtpApproveByDiyalogtimer();
    }
    else if (data.DiyalogMokStatus == "4") {
        console.log("Get CanOtpApproveByDiyalog SendBySms");
        OpenformContainer();
    }
    else {
        console.log("Get CanOtpApproveByDiyalog Undefined");
        stopCanOtpApproveByDiyalogtimer();
    }
}

