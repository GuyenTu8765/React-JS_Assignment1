"use strict";
exports.__esModule = true;
exports.question4 = exports.question3 = exports.question2 = exports.question1 = void 0;
function question1() {
    console.log("a) Khai báo fullName là Global scope");
    var fullName = "nguyen van tu1";
    function helloGlobalScope() {
        console.log("hello " + fullName);
    }
    helloGlobalScope();
    console.log("b) Khai báo fullName là Function scope");
    function helloFunctionScope() {
        var fullName = "nguyen van tu2";
        console.log("hello " + fullName);
    }
    helloFunctionScope();
    console.log("c) Khai báo fullName là Lexical Scope");
    function helloLexicalScope() {
        console.log("hello " + fullName);
    }
    helloLexicalScope();
}
exports.question1 = question1;
function question2() {
    var myName = function printName() {
        var fullName = "nguyenvatu";
        console.log("hello " + fullName);
    };
    myName();
}
exports.question2 = question2;
function question3() {
    function getGreeting(firstName, lastName) {
        var nameIntro = "Hello ";
        var greeting = function greeting() {
            return nameIntro + firstName + " " + lastName;
        };
        return greeting;
    }
    console.log(getGreeting("Nguyen Van", "Tu")());
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
