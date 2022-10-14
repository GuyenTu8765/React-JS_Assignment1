export function question1() {

    console.log("a) Hãy khai báo name là var và có scope là global");
    var fullName = "nguyen van tu"
    function helloGlobalScope() {
        console.log("hello " + fullName);
    }
    helloGlobalScope();



    console.log("b) Hãy khai báo name là var và có scope là local");
    function helloFunctionScope() {
        var fullName = "nguyen van tu2"
        console.log("hello " + fullName);
    }
    helloFunctionScope();

    console.log("c) Hãy thử thay đổi giá trị của name xem được không?");
    var fullName = "thay doi dk nhe"
    console.log(fullName);
}

export function question2() {
    console.log("a) Hãy khai báo name là let và có scope là global");
    let fullName = "nguyen van tu"
    function helloGlobalScope() {
        console.log("hello " + fullName);
    }
    helloGlobalScope();



    console.log("b) Hãy khai báo name là let và có scope là local");
    function helloFunctionScope() {
        let fullName = "nguyen van tu2"
        console.log("hello " + fullName);
    }
    helloFunctionScope();

    console.log("c) Hãy thử thay đổi giá trị của name xem được không?");
    // let fullName = "tudeptrai"
}

export function question3() {
    console.log("a) Hãy khai báo name là const và có scope là global");
    const fullName = "nguyen van tu"
    function helloGlobalScope() {
        console.log("hello " + fullName);
    }
    helloGlobalScope();



    console.log("b) Hãy khai báo name là const và có scope là local");
    function helloFunctionScope() {
        const fullName = "nguyen van tu2"
        console.log("hello " + fullName);
    }
    helloFunctionScope();

    console.log("c) Hãy thử thay đổi giá trị của name xem được không?");
    // const fullName = "tudeptrai"
}

export function question4() {

    var timer = function (i) {
        setTimeout(function timer() {
            console.log(i);
        }, i * 1000);
    };

    for (var i = 1; i <= 6; i++) {
        timer(i);
    }
}

export default { question1, question2, question3, question4 }