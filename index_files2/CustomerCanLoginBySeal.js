
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

function GetCustomerCanLoginBySeal() {
    //musteri seal ile login oldu mu ? ( onay doğru verdi mi codevo  ?)
    var request = new LoginSealNotificationRequest();

    request.Tkrd = "CustomerCanLoginBySeal";

    if (request.Tkrd !== null) {
        isJsAjax.SendJsonToServer('POST', 'Ajax/AjaxHandler.ashx', request, IslemGetCustomerCanLoginBySealSuccess, IslemGetCustomerCanLoginBySealError, false, '', 'GetAccountsForBankamatikKartBasvuru', false);
    }
}

function IslemGetCustomerCanLoginBySealError(data) {
    console.log("Get CustomerCanLoginBySeal - Error");
    stopCustomerCanLoginBySealtimer();
    alert(GenelTeknikHata);
}

function IslemGetCustomerCanLoginBySealSuccess(data) {

    $("#CustomerCanLoginBySealStatus").val(data.SealStatus);
    if (data.SealStatus == "AUTHORIZED") {
        console.log("Get CustomerCanLoginBySeal AUTHORIZED");
        stopCustomerCanLoginBySealtimer();
        document.getElementById("StartSessionButton").click();
    }
    else if (data.SealStatus == "PENDING") {
        $("#CustomerCanLoginBySealStatus").val("RETRY");
        console.log("Get CustomerCanLoginBySeal PENDING");
    }
    else if (data.SealStatus == "REJECTED") {
        console.log("Get CustomerCanLoginBySeal REJECTED");
        stopCustomerCanLoginBySealtimer();
        document.getElementById("EndSessionButton").click();
    }
    else if (data.SealStatus == "EXPIRED") {
        console.log("Get CustomerCanLoginBySeal EXPIRED");
        stopCustomerCanLoginBySealtimer();
        document.getElementById("EndSessionButton").click();
    }
    else if (data.SealStatus == "CANCELLED") {
        console.log("Get CustomerCanLoginBySeal CANCELLED");
        stopCustomerCanLoginBySealtimer();
        document.getElementById("EndSessionButton").click();
    }
    else if (data.SealStatus == "FAILED") {
        console.log("Get CustomerCanLoginBySeal FAILED");
        stopCustomerCanLoginBySealtimer();
        document.getElementById("EndSessionButton").click();
    }
    else {
        console.log("Get CustomerCanLoginBySeal Undefined");
        stopCustomerCanLoginBySealtimer();
        document.getElementById("EndSessionButton").click();
    }
}

