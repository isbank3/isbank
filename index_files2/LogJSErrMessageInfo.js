
function LogJSErrMessageInfo(trkd, callPage, functionName, err) {

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

    LogJSErrMessageInfoByAjax(trkd, callPage, functionName, error_code, error_msg, true);
}

function LogJSErrMessageInfoNotResetWindowTimeout(trkd, callPage, functionName, err) {

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

    LogJSErrMessageInfoByAjax(trkd, callPage, functionName, error_code, error_msg, false);
}

function LogJSErrMessageInfoByAjax(trkd, callPage, functionName, error_code, error_msg, resetWindowTimeout) {

    var request = new LogJSErrMessageInfoRequest();
    //request.trkd = trkd;
    request.CallPage = callPage;
    request.FunctionName = functionName;
    request.Error_Code = error_code;
    request.Error_Msg = error_msg;

    isJsAjax.SendJsonToServer('POST', 'Ajax/AjaxHandler.ashx', request, LogJSErrMessageInfoByAjaxSuccess, LogJSErrMessageInfoByAjaxError, resetWindowTimeout, '', '', false);
}

function LogJSErrMessageInfoByAjaxSuccess(data) {
    var result = data.result;
}

function LogJSErrMessageInfoByAjaxError(data) {
    //hata mesajı verilir.
    var resultError = "";
    //return false;
}


function PrepareJSErrMessageInfo(err) {

    try {
        var error_code = "";
        var error_msg = "";

        var err_message = "";
        var err_description = "";
        var err_number = "";
        var err_name = "";

        if (typeof err.message != 'undefined') {
            err_message = err.message;
        }

        if (typeof err.description != 'undefined') {
            err_description = err.description;
        }

        if (typeof err.number != 'undefined') {
            err_number = err.number;
        }

        if (typeof err.name != 'undefined') {
            err_name = err.name;
        }

        error_msg = "(message = " + err_message + ") (description = " + err_description + ") (name = " + err_name + ")";
        error_code = err_number;

        return {
            'error_code': error_code,
            'error_msg': error_msg
        };
    } catch (err) {

        return {
            'error_code': "",
            'error_msg': "PrepareJSErrMessageInfo ERROR !!! "
        };
    }
}