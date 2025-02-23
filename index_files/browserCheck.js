/**
 * Created by can.lermi on 05/03/14.
 */


var appNames = {
    ieAppName : 'Microsoft Internet Explorer',
    ie11AppName: 'Netscape',
    firefox: 'Firefox'
};
var appVersions = {ie10: 'MSIE 10', ie9: 'MSIE 9', ie8 : 'MSIE 8', ie7: 'MSIE 7'};

var isIE = false;
var isIE11 = false;
var isIE10 = false;
var isIE9 = false;
var isIE8 = false;
var isIE7 = false;
var IEDocumentMode = -1; //OMNI
var isXP = false;

var isLTEIE10 = false;
var isLTEIE9 = false;

var isFireFox = false;
var isHTML5Supported = false;

var appName = navigator.appName;
var appVersion = navigator.appVersion;
var userAgent = navigator.userAgent;

if(appName === appNames.ieAppName){

    isIE = true;
    IEDocumentMode = document.documentMode; //OMNI

    if(appVersion.indexOf(appVersions.ie10) > 0){
        isIE10 = true;
    } else if(appVersion.indexOf(appVersions.ie9) > 0){
        isIE9 = true;
    } else if(appVersion.indexOf(appVersions.ie8) > 0){
        isIE8 = true;
    } else if(appVersion.indexOf(appVersions.ie7) > 0){
        isIE7 = true;
    }

    if(appVersion.indexOf(appVersions.ie10) ||
        appVersion.indexOf(appVersions.ie9) ||
        appVersion.indexOf(appVersions.ie8) ||
        appVersion.indexOf(appVersions.ie7)) {
        isLTEIE10 = true;
    }

    if(appVersion.indexOf(appVersions.ie9) ||
        appVersion.indexOf(appVersions.ie8) ||
        appVersion.indexOf(appVersions.ie7)) {
        isLTEIE9 = true;
    }
}
else if(appName === appNames.ie11AppName) {
    isIE11 = !!navigator.userAgent.match(/Trident.*rv[ :]*11\./);
    if (isIE11) {
        isIE = true;
        IEDocumentMode = document.documentMode;
    }
}
else if(userAgent.indexOf(appNames.firefox) > 0 ){
    isFireFox = true;
    version = parseInt(
        navigator.userAgent.substr(
            navigator.userAgent.indexOf('Firefox')+8 , navigator.userAgent.length)
        ,10)

}


var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
var isWebkit = isChrome || isSafari;

var xpRegex = /(Windows NT 5.1|Windows XP)/;

if (xpRegex.test(userAgent)) {
    isXP = true;
}