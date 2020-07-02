// func1.js
function sum(a, b) { // 모든 타입은 var로 통일 되기 때문에 변수에 var 생략가능하다
    console.log("sum(a,b) 호출");
    var sum = a + b;
    var result = document.getElementById("show");
    result.innerHTML = sum;
} //현재 function은 정의문은 있지만 실행문이 업다. 실행하기 위해서는 실행하는 구문이 필요하다.(html에서 button에 onclick으로 실행 시키도록 실행구문을 넣었다.)
//버튼이 클릭 됐을때 이벤트로 function이 실행되는 것이기 때문에 클릭을 하지 않는다면 이 구문은 실행 되지 않는다.
function sum() {
    console.log("sum() 호출");
    var sum = 0;
    for(var i=0; i<arguments.length; i++) {//자바스크립트에서 제공하는 arguments는 매개값의 갯수를 파악해준다.
        sum += arguments[i];
    }
    return sum;//리턴을 위한 타입이 따로 필요 없음
}

function mySum() { //위 sum()을 여기서 써먹은 것임
    var result = sum(2,4);//arguments 때문? sum(2,4)하면 sum(a,b)를 호출할 줄 알았는데, sum()를 호출함. 이유는 아직 잘 모르겠지만 자바스크립트는 변수 갯수 또한 그렇게 중요하지 않음을 볼 수있긴함
    console.log("결과: " + result);
}// 그리고 이 function은 버튼에 연결 시켜준다.

function arraySum(ary) {
    var sum = 0;
    for (ar of ary) {
        sum += ar;
    }
    return sum;
}

function arrayTest() {
    var numAry = [3,4,5,6,7];
    var result = arraySum(numAry);
    console.log("결과: " + result)
}

function funcTest() {
    funcTest1(helloFunc1());//5.funcTest()는 html의 버튼에 달려있고 그 버튼이 클릭 되는 이벤트가 일어날때 funcTest1이 매개값인 helloFunc1을 사용해 작업이 처리 된다.
    //매개값으로 function이 올수 있다는 것을 알아 두기!!!!
}

function funcTest1(helloFunc) {//매개값으로 function helloFunc()을 가져온다.
    var hello = document.getElementById("show").innerHTML;//2. Good!!!이 들어 가있는 p태그를 hello라는 변수에 담기
    hello += " job!!!"; //3. hello변수에 job!!!을 더해서 hello 변수 다시 선언
    document.getElementById("show").innerHTML = hello; // 4. p태그에 hello 변수 담기
}

function helloFunc1() {
    document.getElementById("show").innerHTML = "Good!!!"; //1. p태그에 Good!!! 넣기
}