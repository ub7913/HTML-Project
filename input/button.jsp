<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>input/button.jsp</title>
</head>
<body>
    <%
        String user = request.getParameter("name"); 
        String dept = request.getParameter("gender");  
    %>
    <table border='1'>
        <tr>
            <td>사용자 이름</td>
            <td><%=user%></td> <!--자바 매개변수인 user를 읽어오세요라는 의미-->
        </tr>
        <tr>
            <td>성별</td>
            <td><%=dept%></td>
        </tr>
    </table>
</body>
</html>