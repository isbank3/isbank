
var isJsComboBox = new IsJsComboBox();

function IsJsComboBox() {
}

//json, string olarak geldiyse parse eder
IsJsComboBox.prototype.AppendJSONData = function (data, comboBoxId) {
    if (data) {
        var object = jQuery.parseJSON(data);
        if (object) {
            for (var i = 0; i < object.length; i++) {
                this.AppendItem(comboBoxId, object[i].Value, object[i].Text);
            }
        }
    }
}

IsJsComboBox.prototype.AppendJSONObject = function (data, comboBoxId) {
    if (data) {
        for (var i = 0; i < data.length; i++) {
            this.AppendItem(comboBoxId, data[i].Value, data[i].Text);
        }
    }
}

IsJsComboBox.prototype.FillJSONData = function (data, comboBoxId, clearContent) {
    if (clearContent == true)
        this.ClearContent(comboBoxId);
    this.AppendJSONData(data, comboBoxId);
}


IsJsComboBox.prototype.FillJSONObject = function (data, comboBoxId, clearContent) {
    if (clearContent == true)
        this.ClearContent(comboBoxId);
    this.AppendJSONObject(data, comboBoxId);
}

IsJsComboBox.prototype.FillJSONDataWithInitialItem = function (data, comboBoxId, initialItemValue, initialItemText, clearContent) {
    if (clearContent == true)
        this.ClearContent(comboBoxId);
    this.AppendItem(comboBoxId, initialItemValue, initialItemText);
    this.AppendJSONData(data, comboBoxId);
}


IsJsComboBox.prototype.FillJSONObjectWithInitialItem = function (data, comboBoxId, initialItemValue, initialItemText, clearContent) {
    if (clearContent == true)
        this.ClearContent(comboBoxId);
    this.AppendItem(comboBoxId, initialItemValue, initialItemText);
    this.AppendJSONObject(data, comboBoxId);
}

IsJsComboBox.prototype.ClearContent = function (comboBoxId) {

    $('#' + comboBoxId + ' >option').remove();

}

IsJsComboBox.prototype.AppendItem = function (comboBoxId, itemValue, itemText) {

    $('#' + comboBoxId).append($('<option></option>').val(itemValue).html(itemText));

}

IsJsComboBox.prototype.ItemCount = function (comboBoxId, index) {
    return $('#' + comboBoxId + ' option').length;
}

IsJsComboBox.prototype.AppendItemToTop = function (comboBoxId, itemValue, itemText) {
    $('#' + comboBoxId).prepend("<option value='" + itemValue + "' selected='selected'>" + itemText + "</option>");
}