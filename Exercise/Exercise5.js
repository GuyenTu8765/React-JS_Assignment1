"use strict";
exports.__esModule = true;
exports.question4 = exports.question3 = exports.question2 = exports.question1 = void 0;
function question1() {
    console.log("a) Hãy khai báo name là var và có scope là global");
    var fullName = "nguyen van tu";
    function helloGlobalScope() {
        console.log("hello " + fullName);
    }
    helloGlobalScope();
    console.log("b) Hãy khai báo name là var và có scope là local");
    function helloFunctionScope() {
        var fullName = "nguyen van tu2";
        console.log("hello " + fullName);
    }
    helloFunctionScope();
    console.log("c) Hãy thử thay đổi giá trị của name xem được không?");
    var fullName = "thay doi dk nhe";
    console.log(fullName);
}
exports.question1 = question1;
function question2() {
    console.log("a) Hãy khai báo name là let và có scope là global");
    var fullName = "nguyen van tu";
    function helloGlobalScope() {
        console.log("hello " + fullName);
    }
    helloGlobalScope();
    console.log("b) Hãy khai báo name là let và có scope là local");
    function helloFunctionScope() {
        var fullName = "nguyen van tu2";
        console.log("hello " + fullName);
    }
    helloFunctionScope();
    console.log("c) Hãy thử thay đổi giá trị của name xem được không?");
    // let fullName = "tudeptrai"
}
exports.question2 = question2;
function question3() {
    console.log("a) Hãy khai báo name là const và có scope là global");
    var fullName = "nguyen van tu";
    function helloGlobalScope() {
        console.log("hello " + fullName);
    }
    helloGlobalScope();
    console.log("b) Hãy khai báo name là const và có scope là local");
    function helloFunctionScope() {
        var fullName = "nguyen van tu2";
        console.log("hello " + fullName);
    }
    helloFunctionScope();
    console.log("c) Hãy thử thay đổi giá trị của name xem được không?");
    // const fullName = "tudeptrai"
}
exports.question3 = question3;
function question4() {
    var timer = function (i) {
        setTimeout(function timer() {
            console.log(i);
        }, i * 1000);
    };
    for (var i = 1; i <= 6; i++) {
        timer(i);
    }
}
exports.question4 = question4;
exports["default"] = { question1: question1, question2: question2, question3: question3, question4: question4 };
