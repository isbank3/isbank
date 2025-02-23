/**
 * Created by can.lermi on 06/03/14.
 */


var startTimer = function(colors) {

    var start = new Date();
    var intervalTime = 200;
    var time = parseInt($("#timer").data("timer")) * 1000;
    var startTime = time;
    var dataProvider = [
        {
            "value": time
        },
        {
            "value": startTime-time
        }
    ];

    var chart = AmCharts.makeChart("timer", {
        "type": "pie",
        "startDuration":0,
        "dataProvider": dataProvider,
        "valueField": "value",
        "colors": colors,

        "radius": "42%",
        "innerRadius": "90%",
        "labelText": "",
        "balloonText": ""
    });


    setInterval(function(){

        var now = new Date();
        var elapsed = now.getTime() - start.getTime();
        elapsed = parseInt(elapsed/1000) *  1000 + parseInt(parseInt(elapsed%1000) /intervalTime) * intervalTime;


        if(elapsed > startTime - time) {
            time = startTime - elapsed;
        }

        if(time <= 0){
            clearInterval(this);
            $('#resendCode').removeAttr('disabled');
            $("#timer").hide();
            $("#timeout").val('1');
            chart.clearLabels();
        } else {

            dataProvider = [{
                "value": time
            }, {
                "value": startTime-time
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

            var timeString = parseInt((time+999)/1000);

            chart.clearLabels();
            chart.addLabel("0%", "37%", timeString, "center", 11, "#000000", 0, 1, true);
            chart.dataProvider = dataProvider;
            chart.validateData();
            time -= intervalTime;
        }

    },intervalTime);
};

var startLogoutTimer = function(colors){

    var start = new Date();
    var intervalTime = 200;
    var time = parseInt($("#timer").data("timer"));
    time *= 1000;
    var startTime = time;
    var dataProvider = [
        {
            "value": time
        },
        {
            "value": startTime-time
        }
    ];

    var chart = AmCharts.makeChart("timer", {
        "type": "pie",
        "startDuration":0,
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
        elapsed = parseInt(elapsed/1000) *  1000 + parseInt(parseInt(elapsed%1000) /intervalTime) * intervalTime;

        if(elapsed > startTime - time) {
            time = startTime - elapsed;
        }


        if (time <= 0) {
            clearInterval(interval);
            $("#timer").hide();
            chart.clearLabels();
        } else {
            time -= intervalTime;
            dataProvider = [{
                "value": time
            }, {
                "value": startTime-time
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
            var timeString = parseInt((time+999)/1000);

            chart.clearLabels();
            chart.addLabel("0%", "37%", timeString, "center", 11, "#000000", 0, 1, true);
            chart.dataProvider = dataProvider;
            chart.validateData();
        }

    },intervalTime);
};