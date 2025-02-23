var timerCanOtpApproveByDiyalog;

function StartCanOtpApproveByDiyalog() {
    // Call function with 5000 milliseconds gap

    $("#CanOtpApproveByDiyalogStatus").val("0");



    ControlCanOtpApproveByDiyalog();

    if (isJsCookie.Read('StatusByDiyalog')) {
        statusByDiyalog = isJsCookie.Read('StatusByDiyalog');
        if (statusByDiyalog == "canOtpApproveByDiyalog") {

            TimerCanOtpApproveByDiyalogStartFunc();

            var hdTimerInterval

            hdTimerInterval = $('#hdCanOtpApproveByDiyalogTimerInterval').val();

            if (hdTimerInterval === undefined || hdTimerInterval === null) {
                hdTimerInterval = 3000;
            }


            timerCanOtpApproveByDiyalog = setInterval(startCanOtpApproveByDiyalogtimer, hdTimerInterval);
        }
    }

}

function startCanOtpApproveByDiyalogtimer() {

    var CanOtpApproveByDiyalogStatus = document.getElementById("CanOtpApproveByDiyalogStatus").value;

    if (CanOtpApproveByDiyalogStatus != "0") {
        OpenformContainer();
    }
    else {
        GetCanOtpApproveByDiyalog();
    }
}

function stopCanOtpApproveByDiyalogtimer() {
    clearInterval(timerCanOtpApproveByDiyalog);

    ////Stop Diyalog Functions
    //LoadingImageCanOtpApproveByDiyalogStopFunc('CanOtpApproveByDiyalogLoading', 79, 39);
}

function TimerCanOtpApproveByDiyalogStartFunc() {

    startCanOtpApproveByDiyalog_Timer(["#08335E", "#FFFFFF"]);
}

function TimerCanOtpApproveByDiyalogStopFunc() {

    //Resend MOK active

    $('#resendCode_CanOtpApproveByDiyalog').removeAttr('disabled');
    //$("#timerCanOtpApproveByDiyalog").hide();
    document.getElementById("mobileCodeBottomButtonsContainer_CanOtpApproveByDiyalog").style.display = "block";
    //$("#timeout").val('1');
}

function OpenformContainer() {

    $("#CanOtpApproveByDiyalogStatus").val("");
    stopCanOtpApproveByDiyalogtimer();

    isJsCookie.Delete('StatusByDiyalog');
    isJsCookie.Create('StatusByDiyalog', 'sendMokByDiyalog', 1);

    document.getElementById("formContainer").style.display = "block";
    document.getElementById("formContainer_CanOtpApproveByDiyalog").style.display = "none";

    startTimer(["#08335E", "#FFFFFF"]);
}

function ControlCanOtpApproveByDiyalog() {

    if (isJsCookie.Read('StatusByDiyalog')) {
        statusByDiyalog = isJsCookie.Read('StatusByDiyalog');
        if (statusByDiyalog == "sendMokByDiyalog") {
            isJsCookie.Delete('StatusByDiyalog');
            isJsCookie.Create('StatusByDiyalog', 'sendMokByDiyalog', 1);

            document.getElementById("formContainer").style.display = "block";
            document.getElementById("formContainer_CanOtpApproveByDiyalog").style.display = "none";
        }
        else {
            isJsCookie.Delete('StatusByDiyalog');
            isJsCookie.Create('StatusByDiyalog', 'canOtpApproveByDiyalog', 1);

            document.getElementById("formContainer").style.display = "none";
            document.getElementById("formContainer_CanOtpApproveByDiyalog").style.display = "block";
        }
    }
    else {
        isJsCookie.Delete('StatusByDiyalog');
        isJsCookie.Create('StatusByDiyalog', 'canOtpApproveByDiyalog', 1);

        document.getElementById("formContainer").style.display = "none";
        document.getElementById("formContainer_CanOtpApproveByDiyalog").style.display = "block";
    }
}

/**
 * Created by tolga uslu on 01/09/2020.
 */

var startCanOtpApproveByDiyalog_Timer = function (colors) {

    var start = new Date();
    var intervalTime = 200;
    var time = parseInt($("#timerCanOtpApproveByDiyalog").data("timer")) * 1000;
    var startTime = time;
    var dataProvider = [
        {
            "value": time
        },
        {
            "value": startTime - time
        }
    ];

    var chart = AmCharts.makeChart("timerCanOtpApproveByDiyalog", {
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

            TimerCanOtpApproveByDiyalogStopFunc();

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
    var time = parseInt($("#timerCanOtpApproveByDiyalog").data("timer"));
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

    var chart = AmCharts.makeChart("timerCanOtpApproveByDiyalog", {
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
            $("#timerCanOtpApproveByDiyalog").hide();
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
