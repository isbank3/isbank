var timerCustomerCanLoginBySeal;

function StartCustomerCanLoginBySeal() {
    // Call function with 5000 milliseconds gap

    $("#CustomerCanLoginBySealStatus").val("INITIAL");



    ControlCustomerCanLoginBySeal();

    if (isJsCookie.Read('StatusByDiyalog')) {
        statusByDiyalog = isJsCookie.Read('StatusByDiyalog');
        if (statusByDiyalog == "customerCanLoginBySeal") {

            TimerCustomerCanLoginBySealStartFunc();

            var hdTimerInterval

            hdTimerInterval = $('#hdCustomerCanLoginBySealTimerInterval').val();

            if (hdTimerInterval === undefined || hdTimerInterval === null) {
                hdTimerInterval = 3000;
            }


            timerCustomerCanLoginBySeal = setInterval(startCustomerCanLoginBySealtimer, hdTimerInterval);
        }
    }

}

function startCustomerCanLoginBySealtimer() {
    var CustomerCanLoginBySealStatus = document.getElementById("CustomerCanLoginBySealStatus").value;

    if (CustomerCanLoginBySealStatus != "INITIAL" && CustomerCanLoginBySealStatus != "RETRY") {
        // INITIAL degilse (ilk gelis degilse) ve RETRY degilse (sorguladik ve PENDING degilse)
        OpenformContainerBySeal();
    }
    else {
        GetCustomerCanLoginBySeal();
    }
}

function stopCustomerCanLoginBySealtimer() {
    clearInterval(timerCustomerCanLoginBySeal);

    ////Stop Diyalog Functions
    //LoadingImageCustomerCanLoginBySealStopFunc('CustomerCanLoginBySealLoading', 79, 39);
}

function TimerCustomerCanLoginBySealStartFunc() {

    startCustomerCanLoginBySeal_Timer(["#08335E", "#FFFFFF"]);
}

function TimerCustomerCanLoginBySealStopFunc() {

    //logout
    document.forms[0].trkd.value = 'CLSSESS';
    document.forms[0].submit();

    //$('#resendCode_CustomerCanLoginBySeal').removeAttr('disabled');
    ////$("#timerCustomerCanLoginBySeal").hide();
    //document.getElementById("mobileCodeBottomButtonsContainer_CustomerCanLoginBySeal").style.display = "block";
    ////$("#timeout").val('1');
}

function OpenformContainerBySeal() {

    $("#CustomerCanLoginBySealStatus").val("");
    stopCustomerCanLoginBySealtimer();

    isJsCookie.Delete('StatusByDiyalog');
    isJsCookie.Create('StatusByDiyalog', 'sendMokByDiyalog', 1);

    document.getElementById("formContainer").style.display = "block";
    document.getElementById("formContainer_CustomerCanLoginBySeal").style.display = "none";

    startTimer(["#08335E", "#FFFFFF"]);
}

function ControlCustomerCanLoginBySeal() {

    if (isJsCookie.Read('StatusByDiyalog')) {
        statusByDiyalog = isJsCookie.Read('StatusByDiyalog');
        if (statusByDiyalog == "sendMokByDiyalog") {
            isJsCookie.Delete('StatusByDiyalog');
            isJsCookie.Create('StatusByDiyalog', 'sendMokByDiyalog', 1);

            document.getElementById("formContainer").style.display = "block";
            document.getElementById("formContainer_CanOtpApproveByDiyalog").style.display = "none";
            document.getElementById("formContainer_CustomerCanLoginBySeal").style.display = "none";
        }
        else if (statusByDiyalog == "canOtpApproveByDiyalog") {
            isJsCookie.Delete('StatusByDiyalog');
            isJsCookie.Create('StatusByDiyalog', 'canOtpApproveByDiyalog', 1);

            document.getElementById("formContainer").style.display = "none";
            document.getElementById("formContainer_CanOtpApproveByDiyalog").style.display = "block";
            document.getElementById("formContainer_CustomerCanLoginBySeal").style.display = "none";
        }
        else {
            isJsCookie.Delete('StatusByDiyalog');
            isJsCookie.Create('StatusByDiyalog', 'customerCanLoginBySeal', 1);

            document.getElementById("formContainer").style.display = "none";
            document.getElementById("formContainer_CanOtpApproveByDiyalog").style.display = "none";
            document.getElementById("formContainer_CustomerCanLoginBySeal").style.display = "block";
        }
    }
    else {
        isJsCookie.Delete('StatusByDiyalog');
        isJsCookie.Create('StatusByDiyalog', 'customerCanLoginBySeal', 1);

        document.getElementById("formContainer").style.display = "none";
        document.getElementById("formContainer_CanOtpApproveByDiyalog").style.display = "none";
        document.getElementById("formContainer_CustomerCanLoginBySeal").style.display = "block";
    }
}

/**
 * Created by oguzhan aksan on 01/06/2024.
 */

var startCustomerCanLoginBySeal_Timer = function (colors) {

    var start = new Date();
    var intervalTime = 200;
    var time = parseInt($("#timerCustomerCanLoginBySeal").data("timer")) * 1000;
    var startTime = time;
    var dataProvider = [
        {
            "value": time
        },
        {
            "value": startTime - time
        }
    ];

    var chart = AmCharts.makeChart("timerCustomerCanLoginBySeal", {
        "type": "pie",
        "startDuration": 0,
        "dataProvider": dataProvider,
        "valueField": "value",
        "colors": colors,

        "radius": "42%",
        "innerRadius": "90%",
        "labelText": "",
        "balloonText": ""
    });


    setInterval(function () {

        var now = new Date();
        var elapsed = now.getTime() - start.getTime();
        elapsed = parseInt(elapsed / 1000) * 1000 + parseInt(parseInt(elapsed % 1000) / intervalTime) * intervalTime;


        if (elapsed > startTime - time) {
            time = startTime - elapsed;
        }

        if (time <= 0) {
            clearInterval(this);

            TimerCustomerCanLoginBySealStopFunc();

            chart.clearLabels();
        } else {

            dataProvider = [{
                "value": time
            }, {
                "value": startTime - time
            }];


            //if the time will be shown as 2:59 uncomment below and comment " var timeString = parseInt((time+999)/1000); "

            /*var minutes = parseInt((time+999)/60000);
            var seconds = parseInt(parseInt((time+999)%60000)/1000);
            var timeString;

            if(seconds < 10) {
                timeString = minutes + ":0" + seconds;
            } else {
                timeString =  minutes + ":" + seconds;
            }*/

            var timeString = parseInt((time + 999) / 1000);

            chart.clearLabels();
            chart.addLabel("0%", "37%", timeString, "center", 11, "#000000", 0, 1, true);
            chart.dataProvider = dataProvider;
            chart.validateData();
            time -= intervalTime;
        }

    }, intervalTime);
};

var startLogoutTimer = function (colors) {

    var start = new Date();
    var intervalTime = 200;
    var time = parseInt($("#timerCustomerCanLoginBySeal").data("timer"));
    time *= 1000;
    var startTime = time;
    var dataProvider = [
        {
            "value": time
        },
        {
            "value": startTime - time
        }
    ];

    var chart = AmCharts.makeChart("timerCustomerCanLoginBySeal", {
        "type": "pie",
        "startDuration": 0,
        "dataProvider": dataProvider,
        "valueField": "value",
        "colors": colors,

        "radius": "42%",
        "innerRadius": "90%",
        "labelText": "",
        "balloonText": ""
    });

    chart.addLabel("0%", "37%", time, "center", 11, "#000000", 0, 1, true);

    var interval = setInterval(function () {

        var now = new Date();
        var elapsed = now.getTime() - start.getTime();
        elapsed = parseInt(elapsed / 1000) * 1000 + parseInt(parseInt(elapsed % 1000) / intervalTime) * intervalTime;

        if (elapsed > startTime - time) {
            time = startTime - elapsed;
        }


        if (time <= 0) {
            clearInterval(interval);
            $("#timerCustomerCanLoginBySeal").hide();
            chart.clearLabels();
        } else {
            time -= intervalTime;
            dataProvider = [{
                "value": time
            }, {
                "value": startTime - time
            }];


            //if the time will be shown as 0:59 uncomment below and comment " var timeString = parseInt((time+999)/1000); "
            /*
            var minutes = parseInt((time+999)/60000);
            var seconds = parseInt(parseInt((time+999)%60000)/1000);
            var timeString;

            if(seconds < 10) {
                timeString = minutes + ":0" + seconds;
            } else {
                timeString =  minutes + ":" + seconds;
            }*/
            var timeString = parseInt((time + 999) / 1000);

            chart.clearLabels();
            chart.addLabel("0%", "37%", timeString, "center", 11, "#000000", 0, 1, true);
            chart.dataProvider = dataProvider;
            chart.validateData();
        }

    }, intervalTime);
};
