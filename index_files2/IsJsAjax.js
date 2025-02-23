var isJsAjax = new IsJsAjax();

function IsJsAjax() {
}

//myType --> POST, GET
//myUrl --> isteðin iletileceði adres
//myData --> iletilecek veriler, JSON 
//mySuccessFunction --> isteðin baþarýlý olmasý durumunda çaðrýlacak call-back fonksiyonu
//myErrorFunction --> isteðin baþarýsýz olmasý durumunda çaðrýlacak call-back fonksiyonu
//resetWindowTimeout --> istek ile birlikte internet þubedeki timeout resetlenecek mi ?
IsJsAjax.prototype.SendDataToServer = function (myType, myUrl, myData, mySuccessFunction, myErrorFunction, resetWindowTimeout) {

    if (resetWindowTimeout == true)
        parent.parent.ResetShowTimeoutPeriodOnStatus(); 
    $.ajax({
        type: myType,
        url: myUrl,
        data: myData,
        dataType: "html",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        success: mySuccessFunction,
        error: myErrorFunction
    });
};

IsJsAjax.prototype.SendJsonToServer = function (myType, myUrl, myData, mySuccessFunction, myErrorFunction, resetWindowTimeout, idOfWhereToShow, tryAgainFunctionName, isIMS) {


    if (resetWindowTimeout == true)
        parent.parent.ResetShowTimeoutPeriodOnStatus();


    var islemTip = GetObjectType(myData);

    myData.IslemTip = islemTip;


    if (myData.trkd == 'undefined' && document.getElementById("trkd")) {

        myData.trkd = document.getElementById("trkd").value;
    }

    if (isIMS)
        AjaxBaseHostRequest.prototype.getRandNo.call(null, myData);



    $.ajax({
        type: myType,
        url: myUrl,
        data: JSON.stringify(myData),
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            SuccessHandler(data, mySuccessFunction, myErrorFunction, idOfWhereToShow, tryAgainFunctionName);
        }
                ,
        error: function (jqXHR, textStatus, errorThrown) {
      
            FailHandler(jqXHR, textStatus, errorThrown, myErrorFunction, idOfWhereToShow, tryAgainFunctionName);
        }
    });
};
IsJsAjax.prototype.SendJsonToServerSync = function (myType, myUrl, myData, resetWindowTimeout, idOfWhereToShow, tryAgainFunctionName, isIMS) {


    if (resetWindowTimeout == true)
        parent.parent.ResetShowTimeoutPeriodOnStatus();

    var islemTip = GetObjectType(myData);

    myData.IslemTip = islemTip;

    if (isIMS)
        AjaxBaseHostRequest.prototype.getRandNo.call(null, myData);

    var responseText = $.ajax({
        type: myType,
        url: myUrl,
        data: JSON.stringify(myData),
        dataType: "json",
        async: false
    }).responseText;

    var returnData = jQuery.parseJSON(responseText);
    return returnData;

    //    $.ajax({
    //        type: myType,
    //        url: myUrl,
    //        data: JSON.stringify(myData),
    //        dataType: "json",
    //        success: function (data, textStatus, jqXHR) {
    //            SuccessHandler(data, mySuccessFunction, myErrorFunction, idOfWhereToShow, tryAgainFunctionName);
    //        }
    //                ,
    //        error: function (jqXHR, textStatus, errorThrown) {
    //            FailHandler(jqXHR, textStatus, errorThrown, myErrorFunction, idOfWhereToShow, tryAgainFunctionName);
    //        }
    //    });
};
function ShowBubble(idOfWhereToShow, tryAgainFunctionName, errorText) {

    var popupIsOpen = $('#' + idOfWhereToShow + '').IsBubblePopupOpen();
    var hasPopup = $('#' + idOfWhereToShow + '').HasBubblePopup();
    if (popupIsOpen != true) {

        if (hasPopup == false) {
            $('#' + idOfWhereToShow + '').CreateBubblePopup({

                position: 'top',
                align: 'center',
                closingSpeed: 0,
                closingDelay: 0,
                innerHtml: ' Poliçey konu ilde bulunan konutlar için DASK poliçesi düzenlenmesi iþlemi özel koþullara tabi olduðundan, Ýnternet Þubemiz aracýlýðýyla poliçe düzenlenememektedir. Poliçenizin düzenlenebilmesi için Þubelerimize baþvurunuz.<br\> <input type="button" onclick="' +
                'RemoveBubble(\'' + idOfWhereToShow + '\');' + tryAgainFunctionName + '();"  value="' +
                 'Tekrar Deneyiniz"/> <br\><a style="color:white;" href="javascript:RemoveBubble(\'' + idOfWhereToShow + '\')">Kapat</a>  ',
                width: '300px',
                innerHtmlStyle: {
                    color: '#FFFFFF',
                    'text-align': 'center'
                },
                alwaysVisible: true,
                //mouseOut: 'show',
                manageMouseEvents: false,
                themeName: 'all-blue',
                themePath: 'IntSubeJS/Jquery/Plugins/JqueryBubblePopup/jquerybubblepopup-themes',
                themeMargins: { total: '10px', difference: '7px' }

            });
        }
        $('#' + idOfWhereToShow + '').ShowBubblePopup();
    }
}

function InBubble() {
    alert('InBubble');
}

function RemoveBubble(idOfWhereToShow) {
    $('#' + idOfWhereToShow + '').RemoveBubblePopup();
}


function SuccessHandler(data, mySuccessFunction, myErrorFunction, idOfWhereToShow, tryAgainFunctionName) {
    //console.log('successHandler');
    try {
        var error = data.Error;
        if (error.Code == -1) {
            if (error.WhereToShow == 1) {
                alert(error.Message);
            }
            //        if (error.WhereToShow == 0) {
            //            ShowBubble(idOfWhereToShow, tryAgainFunctionName, error.Message);
            //        }

            myErrorFunction(data);
        }
        else {
            mySuccessFunction(data);
        }
    } catch (e) {
        myErrorFunction(data);
    }
    
}

function FailHandler(jqXHR, textStatus, errorThrown, myErrorFunction, idOfWhereToShow, tryAgainFunctionName) {

    //console.log('failHandler');
    //ShowBubble(idOfWhereToShow, tryAgainFunctionName);
    myErrorFunction(jqXHR);
}

IsJsAjax.prototype.ShowLoadingImage = function (targetElementId, imageSrc, imageWidth, imageHeight) {
    var image = isJsImage.Create('img_' + targetElementId, imageSrc, imageWidth, imageHeight);
    if ($('#' + targetElementId).length > 0) {
        image.appendTo($('#' + targetElementId).parent());
       // console.log($('#' + targetElementId).parent().html());
        $('#' + targetElementId).hide();
    }
    else {
        if (document.getElementById('icerik')) {
        image.appendTo($('#' + targetElementId, icerik.document).parent());
        $('#' + targetElementId, icerik.document).hide();
        }
        else {
            image.appendTo($('#' + targetElementId, document).parent());
            $('#' + targetElementId, document).hide();
        }
    }
}

IsJsAjax.prototype.HideLoadingImage = function (targetElementId) {
    if ($('#' + targetElementId).length > 0) {
        $('#' + targetElementId).show();
        $('#img_' + targetElementId).remove();
    }
    else {
        if (document.getElementById('icerik')) {
        $('#' + targetElementId,icerik.document).show();
        $('#img_' + targetElementId, icerik.document).remove();
        }
        else {
            $('#' + targetElementId, document).show();
            $('#img_' + targetElementId, document).remove();
        }
    }
}