var isJsImage = new IsJsImage();

function IsJsImage() {
}

IsJsImage.prototype.Create = function (imageId, imageSrc, imageWidth, imageHeight) {
    /*return $("<img></img>", {
        id: imageId,
        src: imageSrc,
        width: imageWidth,
        height: imageHeight
    });*/
    return $("<img id='" + imageId + "' src='" + imageSrc + "' width='" + imageWidth + "' height='" + imageHeight + "'></img>");
}