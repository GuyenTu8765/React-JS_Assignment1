"use strict";
exports.__esModule = true;
exports.question1 = void 0;
function question1() {
    var strings = ["a", "b", "c", "d", "e"];
    console.log("cach1");
    for (var index = 0; index < strings.length; index++) {
        console.log(strings[index]);
    }
    console.log("cach2");
    strings.forEach(function (element) {
        console.log(element);
    });
}
exports.question1 = question1;
exports["default"] = { question1: question1 };
