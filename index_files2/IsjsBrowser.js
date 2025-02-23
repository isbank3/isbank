var isjsBrowser = new IsjsBrowser();

function IsjsBrowser() {
}
//Browser ismini getir - GD
IsjsBrowser.prototype.GetBrowserName = function () {
    return GetBrowser('0');
}
//Browser versiyonu getir - GD
IsjsBrowser.prototype.GetBrowserVersion = function () {
    return GetBrowser('1');
}
function GetBrowser(sayi) {
    var N = navigator.appName;
    var ua = navigator.userAgent;
    var tem;
    var M = ua.match(/(opera|chrome|safari|firefox|msie|crios)\/?\s*(\.?\d+(\.\d+)*)/i);
    if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];
    M = M ? [M[1], M[2]] : [N, navigator.appVersion, '-?'];  
      return M[sayi];
   
}



