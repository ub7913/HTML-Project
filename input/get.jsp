<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>get.jsp</title>
</head>
<body>
    <%
        String user = request.getParameter("user"); //get.html에서 넘겨주는 user의 값을 받겠다는 의미 (자바에서 주석할때는 //로 하기)
        String dept = request.getParameter("dept");  
    %>
    <table border='1'>
        <tr>
            <td>사용자 이름</td>
            <td><%=user%></td> <!--자바 매개변수인 user를 읽어오세요라는 의미-->
        </tr>
        <tr>
            <td>부서명</td>
            <td><%=dept%></td>
        </tr>
    </table>
</body>
</html>