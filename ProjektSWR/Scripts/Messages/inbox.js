"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var messageContent_1 = require("./messageContent");
function prepareInboxDocument() {
    $.getJSON("/Messages/MessageHeaders", parseMessages);
}
exports.prepareInboxDocument = prepareInboxDocument;
function parseMessages(Jdata) {
    Jdata = JSON.parse(Jdata);
    console.log(Jdata);
    var i, line;
    for (i = 0; i < Jdata.length; i++) {
        line = "<tr id='" + Jdata[i].Id + "'><td>" + Jdata[i].UserName + "</td><td>" + Jdata[i].Subject +
            "</td><td>" + Jdata[i].SendDate + "</td><td>" + Jdata[i].ReceivedDate + "</td></tr>";
        $(".inbox_table").append(line);
        $("#" + Jdata[i].Id).click(function () { messageContent_1.messageContent(this.id); });
    }
}
