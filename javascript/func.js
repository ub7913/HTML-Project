var num ;//아무 값도 할당 안된 상태의 타입은 undefined
document.write(typeof num+'<br>');
num = null;
document.write(typeof num+'<br>');
num = 10;
document.write(typeof num+'<br>');
num = "nice";
document.write(typeof num+'<br>');
num = {
    name: "hong",
    age: 10
}
document.write(typeof num);

//연산
var num1, num2, num3;//선언하는 부분이 밑에쓰여져도 상관 없다.
//아까는 정의 된게 없어서 에러 났지만 지금은 정의 해줘서 값은 없지만 에러는 나지 않는다.(하지만 값을 도출 하기 위해서는 위에 선언하는 것이 맞다)
num1 = 10;
num2 = 15;
num = num1 + num2;
console.log(num);

num1 = "Hello";
num2 = 15;
num3 = 30;
num = num1 + num2 + num3;//문자와 숫자가 그냥 연결 된다.
num10 = num1 + (num2 + num3);//숫자끼리 연산 하고 싶으면 괄호를 써준다.
console.log(num);
console.log(num10);

num3 = '15';
console.log(num2 == num3);//num2는 숫자 15이고, num3 string 15이다 타입은 달라도 값은 같기에 ture를 리턴
console.log(num2 === num3);//타입을 비교 할때는 equal기호를 3개 써줘서 비교 하면 된다. 현재 false를 리턴함
console.log(num2 !== num3);//타입이 같지 않다라고 비교 하기 위해서는 !==

var sum=0;
var i=0;
for(; i<10; i++) {
    if(i<5)
        continue;//컨티뉴 문을 만나면은 아래 조건에 맞을때까지 i를 넘어가 5부터 i가 적용 되면서 for문 실행
    sum=sum+i;//sum += i;
}
console.log("결과값은: " + sum);

var $sum = 10;
var _sum = 20;//이 두 특수문자를 제외 하고는 변수 이름은 반드시 처음에 영문으로 와야 한다.(숫자도 올수 없다.)
var sum1 = null;
var num1 = 10;