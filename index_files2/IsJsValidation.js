function IsJsValidation() {
    this.AddMethods();
}

IsJsValidation.prototype.ExecuteFuncByName = function (functionName, context /*, args */) {
    var args = Array.prototype.slice.call(arguments).splice(2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for (var i = 0; i < namespaces.length; i++) {
        context = context[namespaces[i]];
    }
    return context[func].apply(this, args);
    //return $(context)[func]();
}


IsJsValidation.prototype.Initialize = function () {
    $("form").validate();

    var settings = $('form').validate().settings;
    settings.onkeyup = false;
    settings.onfocusout = false;
    settings.errorPlacement = function (error, inputElement) {
        //inputElement.focus();
        //alert(error.text());
    }

    $('form').each(function () {
        $(this).unbind("invalid-form.validate"); // remove old handler
        $(this).bind("invalid-form.validate", function (f, v) {
            var errors = v.numberOfInvalids();
            if (errors) {
                alert(v.errorList[0].message);  //Only show first invalid rule message!!!
                v.errorList[0].element.focus(); //Set Focus
            }
        });
    });
}

IsJsValidation.prototype.AddRuleJSON = function (ruleArray) {

}

IsJsValidation.prototype.AddRule = function (rule) {
    var temp = {};
    temp[rule.type] = rule.value;
    temp['messages'] = {};
    temp['messages'][rule.type] = rule.messages;

    if (rule.id != undefined) {
        $('#' + rule.id).rules('add', temp);
    }
    else if (rule.name != undefined) {
        $('input[name="' + rule.name + '"]').rules('add', temp);
    }
}

IsJsValidation.prototype.AddRuleWithName = function (rule) {
    if ($('[name="' + rule.name + '"]').length > 0) {
        var temp = {};
        temp[rule.type] = rule.value;
        temp['messages'] = {};
        temp['messages'][rule.type] = rule.messages;
        $('[name="' + rule.name + '"]').rules('add', temp);
    }
}


IsJsValidation.prototype.ValidateForm = function () {

    //debugger;
    return $("form").valid();
}

IsJsValidation.prototype.AddMethods = function () {
    /// param1 : date1
    /// param2 : date2
    /// param3 : maximum kaç gün fark olabilir
    /// date2-date1 <= param3 olmalı yoksa hata verir
    $.validator.addMethod('FuncDateDiff', function (value, element, params) {
        var retVal = false;
        var diffMilisecond = isJsDateTime.Difference(params[1], params[0]);
        var diffDay = isJsDateTime.ConvertMilisecondToDay(diffMilisecond);
        if (diffDay < 0 || diffDay > parseInt(params[2], 10))
            retVal = false;
        else
            retVal = true;

        return this.optional(element) || retVal;

    }, '');


    $.validator.addMethod('CustomFunc', function (value, element, param) {
        return IsJsValidation.prototype.ExecuteFuncByName(param, window);
    }, '');


    $.validator.addMethod('FuncRegex', function (value, element, params) {
        var re = new RegExp(params);
        value = isJsStringOperations.Trim(value);
        return this.optional(element) || re.test(value);
    }, '');


    $.validator.addMethod('FuncExactLength', function (value, element, params) {
        return this.optional(element) || value.length == params;
    }, '');


    $.validator.addMethod('FuncMaxLength', function (value, element, param) {
        return this.optional(element) || value.length <= param;
    }, '');

    $.validator.addMethod('FuncMinLength', function (value, element, param) {
        return this.optional(element) || value.length >= param;
    }, '');

    $.validator.addMethod('FuncMinValue', function (value, element, param) {
        return this.optional(element) || value.replace(",", "") >= param;
    }, '');

    $.validator.addMethod('FuncMaxValue', function (value, element, param) {
        return this.optional(element) || value.replace(",", "") <= param;
    }, '');

    $.validator.addMethod('FuncNotEqualTo', function (value, element, param) {
        return this.optional(element) || value != $(param).val();
    }, '');

    $.validator.addMethod('FuncNotEqual', function (value, element, param) {
        return this.optional(element) || value != param;
    }, '');

    $.validator.addMethod('FuncNotContains', function (value, element, param) {
        return this.optional(element) || value.indexOf(param) == -1;
    }, '');


    $.validator.addMethod('FuncMod', function (value, element, param) {
        return this.optional(element) || (value % param) === 0;
    }, '');


    $.validator.addMethod('FuncMaxDateByInput', function (value, element, param) {
        var maxDate = Date.parse(param[0].val()),
            enteredDate = Date.parse(value);

        if (isNaN(maxDate))
            return true;

        if (isNan(enteredDate)) {
            return false;
        }

        return (maxDate >= enteredDate);
    }, '');

    $.validator.addMethod('FuncMinDateByInput', function (value, element, param) {
        var minDate = Date.parse(param[0].val()),
            enteredDate = Date.parse(value);

        if (isNaN(minDate))
            return true;

        if (isNan(enteredDate)) {
            return false;
        }

        return (minDate <= enteredDate);
    }, '');

    $.validator.addMethod('FuncDateRange', function (value, element, param) {
        var startDate = Date.parse(arg[0]),
            endDate = Date.parse(arg[1]),
            enteredDate = Date.parse(value);

        if (isNan(enteredDate)) {
            return false;
        }

        return ((startDate <= enteredDate) && (enteredDate <= endDate));
    }, '');


    $.validator.addMethod('FuncDateBiggerThan', function (value, element, param) {
        var startDate = param[1].split("/");
        var endDate = param[0].split("/");

        var StartDate = new Date(startDate[1] + "/" + startDate[0] + "/" + startDate[2]);
        var EndDate = new Date(endDate[1] + "/" + endDate[0] + "/" + endDate[2]);

        return (StartDate <= EndDate);
    }, '');



    /// param1 : number1  50
    /// param2 : number2  30 
    /// param3 : kaÃ§ sayÄ± fark olabilir.  16
    /// number2-number1 <= param3 olmalÄ± yoksa hata verir DateBiggerThan  FuncNumberDiffGreaterValue
    $.validator.addMethod('FuncNumberDiffGreaterValue', function (value, element, params) {
        var retVal = false;
        var diffNumber = parseInt(params[0], 10) - parseInt(params[1], 10);
        if (diffNumber >= parseInt(params[2], 10))
            retVal = true;
        else
            retVal = false;

        return this.optional(element) || retVal;

    }, '');



    $.validator.addMethod('FuncAmountValid', function (value, element, params) {

        var result = false;

        var MaxLength = 100;
        var MinLength = 1;

        var required = true;

        if (params != undefined) {
            if (params[0] != undefined) {
                MinLength = parseInt(params[0], 10);
            }

            if (params[1] != undefined) {
                MaxLength = parseInt(params[1], 10);
            }

            if (params[2] != undefined) {
                required = params[2].toString().toLowerCase() == "true" ? true : false;
            }
        }

        var AmountValue = isJsStringOperations.Trim(regReplace(value, ",", ""));
        AmountValue = regReplace(AmountValue, ".", "");
        AmountValue = isJsStringOperations.Trim(AmountValue);

        var AmountInt = -1;

        if (AmountValue != "") {
            // bir değer girişi yapılmış.
            try {
                AmountInt = parseInt(AmountValue, 10);
            } catch (e) {
                AmountInt = -2;
            }
        }
        else {
            // bir değer girişi yapılmamış.
            AmountInt = -1;
        }

        if (required == true) {
            if (AmountInt.toString().length >= MinLength && AmountInt.toString().length <= MaxLength) {
                if (AmountInt > 0) {
                    result = true;
                }
            }
        }
        else {
            if (AmountInt == -1) {
                result = true;
            }
            else {
                if (AmountInt.toString().length >= MinLength && AmountInt.toString().length <= MaxLength) {
                    if (AmountInt >= 0) {
                        result = true;
                    }
                }
            }
        }

        return result;

    }, '');


    $.validator.addMethod('StartsWith', function (value, element, param) {
        var result = false;

        if (isJsStringOperations.StartsWith(value, param)) {
            result = true;
        }
        return result;
    }, '');

    $.validator.addMethod('NotStartsWith', function (value, element, param) {
        var result = false;

        if (isJsStringOperations.StartsWith(value, param) == false) {
            result = true;
        }
        return result;
    }, '');
}

var isJsValidation = new IsJsValidation();