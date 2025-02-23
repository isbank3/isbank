/**
 * Created by can.lermi on 07.02.2014.
 */

$(function(){

    var randomize = function(inst) {
        inst.elem.keypad('option', {randomiseAll: true});
        inst.elem.find('.keypad-shuffle').css({'background-color':'#A4D2EF'});
        inst.elem.find('.keypad-shuffle').attr('title','Sabit');
        inst.options.enableRandomize = true;
    };


    $.keypad.addKeyDef('DELETE', 'delete',
        function(inst) {
            removeLastChar(this);
        }
    );

    $.keypad.addKeyDef('SHUFFLE', 'shuffle',
        function(inst) {
            if(inst.options.enableRandomize){
                inst.elem.keypad('option', {randomiseAll: false});
                inst.elem.find('.keypad-shuffle').css({'background-color':'#49A5E0'});
                inst.elem.find('.keypad-shuffle').attr('title','Hareketli');
                inst.options.enableRandomize = false;
            } else{
                randomize(inst);
            }
            $('.keypad-delete').attr('title', KeyPadSil);
        }
    );
    var keyPadLayout =['123','456','789',$.keypad.SHUFFLE+'0'+$.keypad.DELETE] ;

    $('.keyPadHolder').keypad({
            keypadOnly: false,
            deleteText: '',
            shuffleText: '',
            layout: keyPadLayout,
            onKeypress: appendValue,
        randomiseNumeric: false,
        enableRandomize: false
        });

        $('.keypad-shuffle').attr('title', KeyPadHareketli);
        $('.keypad-delete').attr('title', KeyPadSil);


    $('.virtualKeypad').focus(function(){
        changeField = $(this);

        if(!changeField.hasClass("inputHasError")) {
            $('.virtualKeypad').css({'border':'1px solid #D3D3D3'});
            changeField.css({'border':'1px solid #3CB1CD'});
        }
    }) ;


    function removeLastChar(){
        var str = changeField.val();
        var strNewVal;
        if(str.length > 0){
            strNewVal =  str.substring(0, str.length - 1);
            changeField.val(strNewVal);
        }
        changeField.focus();
    }





    function appendValue(key,value, inst){
        var maxLength =  changeField.attr('maxlength');
        if(typeof maxLength === "undefined" || (typeof maxLength !== "undefined" && changeField.val().length < maxLength)){
//        var e = jQuery.Event("keydown");
            changeField.keydown();
            $.keypad.insertValue(changeField, key);
            changeField.keyup();
            changeField.focus();
        }

        if(inst.options.enableRandomize){
            randomize(inst);
        }
    }



});




