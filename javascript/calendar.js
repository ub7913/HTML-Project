function showCalendar() {
    
var dayAry = ['일','월','화','수','목','금','토'];
// var dayNum = [0,7,14,21,28];
document.write('<table border="1">');
document.write('<tr>');
for (var i=0; i<dayAry.length; i++) {
    document.write('<th>'+dayAry[i]+'</th>');
}
document.write('</tr>');
var num = 0;
for (var i=0; i<5; i++) {
    document.write('<tr>');
    for (var j=0; j<7; j++) {
        num = (i*7)+j;
        if(num==0||num>31){
            document.write('<td>'+'&nbsp'+'</td>')
        } else {
        document.write('<td>'+num+'</td>');
        }
    } 
    document.write('</tr>');
}
// for (var i=0; i<dayNum.length; i++) {
//     document.write('<tr>');
//     document.write('<td>'+dayNum[i]+'</td>')
//     for (var j=0; j<6; j++){
        
//         document.write('<td>'+(dayNum[i]+j+1)+'</td>');
//     }
//     document.write('</tr>');
// }
document.write('</table>');


}