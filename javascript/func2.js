
function fun1() {
    // document.getElementById("show").innerHTML = "Hello";
}
fun1();

var fun2 = function(str) {
    // document.getElementById("show").innerHTML = str;
}
fun2("Hello");//변수에 function 정의문을 넣을 수 있는건 자바스크립트만 가능한 것이다.

function outerFunc(func) {
    func(2,3,4,5,6);//매개값으로 들어온 func을 실행 시키도록 함.
}

function argsFunc() { 
    var sum = 0;
    for (var i=0; i<arguments.length; i++) {//arguments 매개값으로 들어오는 것을 처리 해주는 자바스크립트의 객체
        sum+= arguments[i];
    }
    document.getElementById("show").innerHTML = sum;
}

outerFunc(argsFunc);//위에서 정의해준 2,3,4,5,6이 argsFunc()에 들어가고 그 숫자들이 arguments가 된다.
// outerFunc(function argsFunc(2,3,4,5,6) {
//     var sum = 0;
//     for (var i=0; i<arguments.length; i++) {//arguments 매개값으로 들어오는 것을 처리 해주는 자바스크립트의 객체
//         sum+= arguments[i];
//     }
//     document.getElementById("show").innerHTML = sum;
// })(); 위의outerFunc(argsFunc); 같은 의미
