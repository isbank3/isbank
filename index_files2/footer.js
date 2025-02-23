/**
 * Created by can.lermi on 06.02.2014.
 */

$(document).ready(function () {
    $("#languageSelect").select2(
        { minimumResultsForSearch: 20,
            width: '98px',
            dropdownCssClass: 'footerDropDown'

        }).on("select2-opening", function (e) {

            $("#ParolaText").tooltip("close");

            var keypad = $('.virtualKeypad');
            $('.keyPadContainer').hide();
            keypad.blur();
            keypad.css({ 'border': '1px solid #D3D3D3' });


        }).change(function (selected) {
            // OMNI
            if (selected.val == "en") {
                if (document.getElementById("isTabletApp") && document.getElementById("isTabletApp").value == "true") {
                    var os = document.getElementById("osType").value;
                    document.location.href = ApplicationVirtualDirectory + "/index.aspx?isTablet=true&OS=" + os + "&LangCode=en-US";
                }
                else {
                    document.location.href = ApplicationVirtualDirectory + "/index.aspx?LangCode=en-US";
                }
            }
            else if (selected.val == "tr") {
                if (document.getElementById("isTabletApp") && document.getElementById("isTabletApp").value == "true") {
                    var os = document.getElementById("osType").value;
                    document.location.href = ApplicationVirtualDirectory + "/index.aspx?isTablet=true&OS=" + os + "&LangCode=tr-TR";
                } else {
                    document.location.href = ApplicationVirtualDirectory + "/index.aspx?LangCode=tr-TR";
                }
            }

        });
});
