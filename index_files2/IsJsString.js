var isJsStringOperations = new IsJsStringOperations();

function IsJsStringOperations() {
    //alert('Person instantiated');
}

IsJsStringOperations.prototype.Trim = function (str) {
    return str.replace(/^\s+|\s+$/g, "");
}

IsJsStringOperations.prototype.LeftTrim = function (str) {
    return str.replace(/^\s+/, "");
}

IsJsStringOperations.prototype.RightTrim = function (str) {
    return str.replace(/\s+$/, "");
}

IsJsStringOperations.prototype.PadLeft = function (str, padStr, length) {
    str = String(str);
    while (str.length < length)
        str = padStr + str;
    return str;
}

IsJsStringOperations.prototype.PadRight = function (str, padStr, length) {
    str = String(str);
    while (str.length < length)
        str = str + padStr;
    return str;
}

IsJsStringOperations.prototype.StartsWith = function (str, prefix) {
    return str.slice(0, prefix.length) == prefix;
}
IsJsStringOperations.prototype.EndsWith = function (str, suffix) {
    return str.slice(-suffix.length) == suffix;
}


