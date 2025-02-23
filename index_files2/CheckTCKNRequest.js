/*constructor*/
function CheckTCKNRequest() {
  
    this.tckn = "";
}

CheckTCKNRequest.prototype = /*inherit*/new AjaxBaseRequest();
CheckTCKNRequest.prototype.constructor = CheckTCKNRequest;
