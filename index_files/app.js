/**
 * Created by can.lermi on 31.01.2014.
 */

var CONTEXT_ROOT = '/IsWeb/';
var tooltipEnabled = true;
/*var isPriviaCustomer = false; 
    OMNI
*/

var KEY_CODES = {
    CTRL : 17,
    CMD : 224,
    CMD_CHROME : 91,
    BACKSPACE: 8,
    DELETE: 46,
    ARROW_LEFT: 37,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
    CHAR_V:86,
    CHAR_C:67,
    CHAR_X:88,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    SPACE: 32,
    TURKISH: {
        I_WITH_DOT: 222,
        O_WITH_DOTS: 188,
        U_WITH_DOTS: 221,
        C_WITH_CEDIL: 190,
        G_WITH_BREVE: 219,
        S_WITH_CEDIL: 186
    }
};

$(function ($) {

    if (isIE10) {
        $("html").addClass("ie10");
    } else {
        $("html").removeClass("ie10");
    }


    $("#logoContainer").on('click', function () {
        /* OMNI */
        if (document.getElementById("isTabletApp") && document.getElementById('isTabletApp').value == "true") {
            var os = document.getElementById("osType").value;
            window.location = 'index.aspx?isTablet=true&OS=' + os;
        }
        else {
            window.location = "index.aspx";
        }
    });


    $('#endSession').on('click', function () {
        //end session
    });

    $('#liveSupport').on('click', function () {
        //live support clicked
    });

    $('#printerButton').on('click', function () {
        //OMNI
        if (TxChannel && TxChannel == 'Internet') {
            IFramePrint(true);
            if (tooltipEnabled) {
                $('#printerButton').tooltip("close");
            }
        }
        else {
            alert('Ýþlem bu kanaldan yapýlamamaktadýr!');
            return false;
        }
    });


 $('#printIcon1024').on('click',function(){
         //OMNI
        if (TxChannel && TxChannel == 'Internet') {
            IFramePrint(true);
            if (tooltipEnabled) {
                $('#printerButton').tooltip("close");
            }
        }
        else {
            alert('Ýþlem bu kanaldan yapýlamamaktadýr!');
            return false;
        }
    });
    $("#hesaplamaAraclari").on('click', function () {
        /* OMNI */
        CreateTabMenuHtml('', '', '', '');
        parent.ShowSubmenu('SM_FIYAT_ORANLAR', "1");
        Menu_Home();
        /* OMNI */
    });

    $("#hesaplamaAraclariObi").on('click', function () {
        /* OMNI */
        CreateTabMenuHtml('', '', '', '');
        parent.ShowSubmenu('SM_FIYAT_ORANLAR', "1");
        Menu_Home();
        /* OMNI */
    });

    $("#calculatorIcon1024href").on('click', function () {
        /* OMNI */
        CreateTabMenuHtml('', '', '', '');
        //parent.ShowSubmenu('SM_FIYAT_ORANLAR', "1");
        Isbank.Global.SM.StartTransaction('PricesAndRates.Dashboard.Steps.PRDashboardMenuRequest'); //carve out
        Menu_Home();
            /* OMNI */
            });
    

    $("#backLink").on('click', function () {
        /* OMNI */
        //window.history.back();
        IFrameGoBack(true);
    });


    var rearrangeDashboardTooltipPositions = function () {

        if (tooltipEnabled) {

            $("#printerButton").tooltip("option", "position",
                {
                    my: "right top",
                    at: "right-75 top+2.5",
                    using: function (position, feedback) {
                        $(this).css(position);
                        $("<div>")
                            .addClass(feedback.vertical)
                            .addClass(feedback.horizontal)
                            .appendTo(this);
                        $(this).addClass('operationsListToolTip tooltipTriangleAtRight');
                    }
                });

            $("#hesaplamaAraclari").tooltip("option", "position",
                {
                    my: "right top",
                    at: "right-75 top+2.5",
                    using: function (position, feedback) {

                        $(this).css(position);
                        $("<div>")
                            .addClass(feedback.vertical)
                            .addClass(feedback.horizontal)
                            .appendTo(this);
                        $(this).addClass('operationsListToolTip tooltipTriangleAtRight');
                    }
                });
        }
    };

    var createDashboardTooltips = function () {

        if (tooltipEnabled) {
            $('#printerButton').tooltip({
                position: {
                    my: "right top",
                    at: "right-75 top+2.5",
                    using: function (position, feedback) {
                        $(this).css(position);
                        $("<div>")
                        .addClass(feedback.vertical)
                        .addClass(feedback.horizontal)
                        .appendTo(this);
                        $(this).addClass('operationsListToolTip tooltipTriangleAtRight');
                    }
                },
                show: false,
                hide: false
            });
            $('#hesaplamaAraclari').tooltip({
                position: {
                    my: "right top",
                    at: "right-75 top+2.5",
                    using: function (position, feedback) {

                        $(this).css(position);
                        $("<div>")
                            .addClass(feedback.vertical)
                            .addClass(feedback.horizontal)
                            .appendTo(this);
                        $(this).addClass('operationsListToolTip tooltipTriangleAtRight');
                    }
                },
                show: false,
                hide: false
            });
        }
    };

    forceNumericEntry($('.onlyNumeric'));
    formatCreditCardEntry($('.formatCC16'));
    forceAlphaNumericEntry($('.onlyAlphaNumeric'));

    createDashboardTooltips();

    $(window).resize(function () {
        rearrangeDashboardTooltipPositions();
    });
});

var isEmptyObject = function (obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
    return true;
};

var toCamelCaseInTurkish = function(str) {

    if(str === undefined || str === null) return '';

    var camelCaseString = "";

    str = toLowerCaseInTurkish(str);

    var words = str.split(" ");

    for(var i = 0; i < words.length; i++) {
        var firstChar = toUpperCaseInTurkish(words[i].charAt(0));
        camelCaseString += firstChar + words[i].substring(1);

        if(i != words.length -1) {
            camelCaseString +=  " ";
        }
    }

    return camelCaseString;
};

var toLowerCaseInTurkish = function(str){

    if(str === undefined || str === null) return '';
    var letters = { "I": "i", "I": "i", "S": "s", "G": "g", "Ü": "ü", "Ö": "ö", "Ç": "ç" };
    str = str.replace(/(([IISGÜÇÖ]))/g, function(letter){ return letters[letter]; });
    return str.toLowerCase();
};

var toUpperCaseInTurkish = function(str){

    if(str === undefined || str === null) return '';

    var letters = { "i": "I", "i": "I", "s": "S", "g": "G", "ü": "Ü", "ö": "Ö", "ç": "Ç" };
    str = str.replace(/(([iisgüçö]))/g, function(letter){ return letters[letter]; });
    return str.toUpperCase();
};

var showInputBottomErrorMessage = function(element, errorMessage){
    //element should have a sibling element with class inputBottomErrorContainer
    var errorContainer = element.siblings('.inputBottomErrorContainer');
    element.addClass('inputHasError');

    if(errorContainer){
        if(typeof errorMessage != 'undefined'){
            errorContainer.text(errorMessage);
        }
        errorContainer.show();
    }
};

var hideInputBottomErrorMessage = function (element) {
    if (element[0].readOnly) {
        return;
    }
    var errorContainer = element.siblings('.inputBottomErrorContainer');
    element.removeClass('inputHasError');
    if(errorContainer){
        errorContainer.hide();
    }
};

var disableBackScroll = function() {
    $('body').addClass('blockScroll');
};

var enableBackScroll = function() {
    $('body').removeClass('blockScroll');
};

var waitForSecondKey = false;

var isPressedKeyNumber = function(pressedKey) {
    return (pressedKey >= 48 && pressedKey <= 57) || (pressedKey >= 96 && pressedKey <= 105);
};

var isPressedKeyArrow = function(pressedKey) {
    return pressedKey >= KEY_CODES.ARROW_LEFT && pressedKey <= KEY_CODES.ARROW_DOWN;
};

var forceNumericEntry =  function (element){

    $(element).on('paste', function () {
        if (this.readOnly) {
            return;
        }
        var el = this;
        setTimeout(function () {
            var text = $(el).val();
            var isnum = /^\d+$/.test(text);
            if(!isnum) {
                $(el).val("");
            }
        }, 100);
    });

    element.keydown(function(event) {

        var pressedKey = event.keyCode;
        var disableCopyPaste = $(this).hasClass('disableCopyPaste');

        if(pressedKey == KEY_CODES.TAB) {
            if($(event.currentTarget).attr("aria-describedby") != undefined &&
                $(event.currentTarget).attr("aria-describedby").indexOf("tooltip") != -1) {
                $(event.currentTarget).tooltip('close');
            }
            $('.keyPadContainer').hide();
            $('.virtualKeypad').css({'border':'1px solid #D3D3D3'});

        } else if(isPressedKeyNumber(pressedKey) && !event.shiftKey && !event.altKey) {
            //allow key
            waitForSecondKey = false;
        } else if(isPressedKeyArrow(pressedKey)) {
            //allow change cursor position
            waitForSecondKey = false;

        } else if(pressedKey == KEY_CODES.BACKSPACE || pressedKey == KEY_CODES.DELETE) {
            //allow deletion
            waitForSecondKey = false;

        } else if (pressedKey == KEY_CODES.CTRL || pressedKey == KEY_CODES.CMD || pressedKey == KEY_CODES.CMD_CHROME) {
            //wait for paste
            waitForSecondKey = true;

        } else if (pressedKey == KEY_CODES.ENTER) {
            if (CheckCookieEnabled() == false){
                return false;
            }
            //input is finished
            waitForSecondKey = false;
        } else {
            if(waitForSecondKey && !disableCopyPaste &&
                (pressedKey == KEY_CODES.CHAR_V || pressedKey == KEY_CODES.CHAR_C || pressedKey == KEY_CODES.CHAR_X)) {
                //allow copy-paste
                waitForSecondKey = false;
            }
            else{
                waitForSecondKey = false;
                event.preventDefault();
            }
        }
    });

    element.keyup(function(event) {

        var inp = this.value.split('');

        if(!/^[0-9]+$/.test(inp[inp.length-1])) {
            this.value = this.value.substr(0, this.value.length-1);
        }
    });
};

var forceAlphaNumericEntry =  function (element){

    //var numberOrAlphaRegex = /^[a-zA-Z0-9iIçÇsSgGöÖüÜ ]+$/;
     var numberOrAlphaRegex = /^[a-zA-Z0-9ýÝçÇþÞðÐöÖüÜ ]+$/;

    $(element).on('paste', function () {
        var el = this;
        setTimeout(function () {
            var text = $(el).val();
            var isnumOrAlphabetical = numberOrAlphaRegex.test(text);
            if(!isnumOrAlphabetical) {
                $(el).val("");
            }
        }, 100);
    });

    element.keypress(function(event) {

        var pressedKey = (event.keyCode ? event.keyCode : event.which);
        var isnumOrAlphabetical = numberOrAlphaRegex.test(String.fromCharCode(pressedKey));

        var isFirefoxOrOpera = event.key != undefined;

        var isCursorChangeInput = false;

        switch (event.key) {
            case 'Right':
            case 'Left':
            case 'Up':
            case 'Down':
            case 'Backspace':
            case 'Del':
                isCursorChangeInput = true;
                break;
            default:
                break;
        }


        if(!isnumOrAlphabetical && !isCursorChangeInput) {
            event.preventDefault();
        }
    });

    element.keyup(function(event) {

        var inp = this.value.split('');

        for(var i = 0; i < inp.length; i++) {

            if(!numberOrAlphaRegex.test(inp[i])) {
                this.value = this.value.substr(0, i) + this.value.substr(i+1, inp.length);
            }
        }
    });
};

var  formatCreditCardEntry =  function (element){

    $(element).on('paste', function () {
        var el = this;

        format(el)
    });

    var format = function(el){
        setTimeout(function () {
            var text = $(el).val();
            var isNumOrSpace = /^(?=.*\d)(?:[\d ]+)$/.test(text);
            if(!isNumOrSpace) {
                $(el).val("");
            } else {

                text = text.replace(/[^\d]+/g, "");
                text = text.match(/.{1,4}/g);
                text = text?  text.join(" ") : "";
                text = text.substr(0,19);
                $(el).val(text);
            }
        }, 100);
    };

    element.keydown(function(event) {
        var pressedKey = event.keyCode;
        var disableCopyPaste = $(this).hasClass('disableCopyPaste');


        if(pressedKey == KEY_CODES.TAB) {
            if($(event.currentTarget).attr("aria-describedby") != undefined &&
                $(event.currentTarget).attr("aria-describedby").indexOf("tooltip") != -1) {
                $(event.currentTarget).tooltip('close');
            }
            $('.keyPadContainer').hide();
            $('.virtualKeypad').css({'border':'1px solid #D3D3D3'});

        } else if(isPressedKeyNumber(pressedKey) && !event.shiftKey && !event.altKey) {
            //allow key
            waitForSecondKey = false;
        } else if(isPressedKeyArrow(pressedKey)) {
            //allow change cursor position
            waitForSecondKey = false;

        } else if(pressedKey == KEY_CODES.BACKSPACE || pressedKey == KEY_CODES.DELETE) {
            //allow deletion
            waitForSecondKey = false;

        } else if (pressedKey == KEY_CODES.CTRL || pressedKey == KEY_CODES.CMD || pressedKey == KEY_CODES.CMD_CHROME) {
            //wait for paste
            waitForSecondKey = true;

        } else if(pressedKey == KEY_CODES.ENTER) {
            //input is finished
            waitForSecondKey = false;
        } else {
            if(waitForSecondKey && !disableCopyPaste &&
                (pressedKey == KEY_CODES.CHAR_V || pressedKey == KEY_CODES.CHAR_C || pressedKey == KEY_CODES.CHAR_X)) {
                //allow copy-paste
                waitForSecondKey = false;
            }
            else{
                waitForSecondKey = false;
                event.preventDefault();
            }
        }
    });

    element.keyup(function (event) {
        if((event.keyCode >= 48 && event.keyCode <= 57) ||
            (event.keyCode >= 96 && event.keyCode <= 105) ||
            event.keyCode == 8 || typeof event.keyCode === 'undefined'){

            var creditCardNumber = element.val();

            creditCardNumber = creditCardNumber.replace(/[^\d]+/g, "");

            creditCardNumber = creditCardNumber.match(/.{1,4}/g);

            creditCardNumber = creditCardNumber?  creditCardNumber.join(" ") : "";

            creditCardNumber = creditCardNumber.substr(0,19);


            element.val(creditCardNumber)


        }
        else {
            event.preventDefault();
        }
    });

};

var getUrlParam = function(name){
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
        return null;
    }
    else{
        return results[1] || 0;
    }
};

var setKeyPadContainerPosition = function(elem) {
    var keyPadContainerLeftPosition =  elem.offset().left + elem[0].offsetWidth + 10;
    var keyPadContainerTopPosition = elem.offset().top;

    return {"left": keyPadContainerLeftPosition, "top": keyPadContainerTopPosition}
};

var keyPadFocusFix =  function(additionalFunc){

    $(document).click(function(event){

        var keypad = $('.virtualKeypad');
        if( $('.keyPadContainer').is(':visible') &&
            !$(event.target).hasClass('keypad-key') &&
            !$(event.target).hasClass('virtualKeypad') &&
            !$(event.target).hasClass('keyPadContainer') &&
            !$(event.target).hasClass('keypad-row') &&
            !$(event.target).hasClass('keypad-special')){
            $('.keyPadContainer').hide();
            keypad.blur();
            keypad.css({'border':'1px solid #D3D3D3'});

            if(typeof additionalFunc != 'undefined'){
                additionalFunc();
            }
        }
    });
};

function customTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
}





