/*constructor*/
function LogJSErrMessageInfoRequest() {

    this.FunctionName = "";
    this.CallPage = "";
    this.Error_Code = "";
    this.Error_Msg = "";
}

LogJSErrMessageInfoRequest.prototype = /*inherit*/new AjaxBaseRequest();
LogJSErrMessageInfoRequest.prototype.constructor = LogJSErrMessageInfoRequest;