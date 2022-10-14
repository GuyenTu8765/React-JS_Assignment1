export function question1() {

    console.log("a) Khai báo fullName là Global scope");
    var fullName = "nguyen van tu1"
    function helloGlobalScope() {
        console.log("hello " + fullName);
    }
    helloGlobalScope();



    console.log("b) Khai báo fullName là Function scope");
    function helloFunctionScope() {
        var fullName = "nguyen van tu2"
        console.log("hello " + fullName);
    }
    helloFunctionScope();


    console.log("c) Khai báo fullName là Lexical Scope");
    function helloLexicalScope() {
        console.log("hello " + fullName);
    }
    helloLexicalScope();
}

export function question2() {
    var myName = function printName() {
        var fullName = "nguyenvatu"
        console.log("hello " + fullName);
    }

    myName();
}

export function question3() {

    function getGreeting(firstName, lastName) {
        var nameIntro = "Hello ";
        var greeting = function greeting() {
            return nameIntro + firstName + " " + lastName;
        }
        return greeting;
    }
    console.log(getGreeting("Nguyen Van", "Tu")());

}

export function question4() {

    var timer = function (i) {
        setTimeout(function timer() {
            console.log(i);
        }, i * 1000);
    };

    for(var i = 1; i <= 6; i++){
        timer(i);
    }
}

export default { question1, question2, question3, question4 }