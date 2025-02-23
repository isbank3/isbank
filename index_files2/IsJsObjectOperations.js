
function GetObjectType(object) {
    var con = object.constructor;
    con = con.toString();
    var lastBracket = con.indexOf('()');
    var objectName = con.substring(9, lastBracket)
    return objectName;
}