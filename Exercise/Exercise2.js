"use strict";
exports.__esModule = true;
exports.question3 = exports.question2 = exports.question1 = void 0;
function question1() {
    var salary1 = 5240.5;
    var salary2 = 10970.055;
    console.log("Luong cua 2 so int: ");
    var convertSalary1toInt = Math.floor(salary1);
    console.log(convertSalary1toInt);
    var convertSalary2toInt = Math.floor(salary2);
    console.log(convertSalary2toInt);
}
exports.question1 = question1;
function question2() {
    var min = Math.ceil(0);
    var max = Math.floor(99999);
    var randomNumber = Math.floor(Math.random() * (max - min) + min);
    while (randomNumber < 10000) {
        randomNumber = randomNumber * 10;
    }
    console.log("So ngau nhien: " + randomNumber);
    return randomNumber;
}
exports.question2 = question2;
function question3() {
    var v = question2().toString();
    console.log("2 so cuoi cua question2: " + v.substring(3));
    console.log(typeof v);
}
exports.question3 = question3;
exports["default"] = { question1: question1, question2: question2, question3: question3 };
