var num = "Hello";//javascript에선 java와 다르게 데이터 타입을 정의하는게 따로 없다. 값이 들어가는 시점에 var를 선언해주면 된다.
document.write(num);//javascript도 java와 같이 객체기반이다.
console.log(num);//개발자 툴의 콘솔에서 볼 수 있음
window.alert(num);//경고창 뜨게함

var num1, num2, num3;
num1 = 10;
num2 = 20;
num3 = num1 + num2;

document.write('<br>' + '결과 값은 ' + num3 + ' 입니다.');

document.write("<ul>");
for(var i=0; i<10; i++) {
    if (i%2==0){
    document.write('<li>' + 'i 값은 ' + i + ' 입니다.');
    console.log('i 값은 ' + i + ' 입니다.'); //console에서는 li태그가 안먹힘
    }
}
document.write("</ul>");

var titleAry = ['이름','국어','영어','수학'];
var nameAry = ['Hong','Kim','Park'];
document.write('<table border="1">');
document.write('<tr>');
for(var i=0; i<titleAry.length; i++) {
    document.write('<th>'+titleAry[i]+'</th>');
}
document.write('</tr>')
for(var i=0; i<nameAry.length; i++) {
    document.write('<tr>');
    document.write('<td style="background-color: red;">' + nameAry[i] + '</td>');
    for(var j=0; j<3; j++){
        document.write('<td>' + (j+10) + '</td>');
    }
    document.write('</tr>');
}
document.write('</table>');