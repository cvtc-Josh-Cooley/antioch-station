<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Antioch Station</title>
    <link rel="stylesheet" type="text/css" href="assets/css/main.css" media="screen">
    <link rel="stylesheet" type="text/css" href="assets/css/nav.css" media="screen">
    <link rel="stylesheet" type="text/css" href="assets/css/login.css" media="screen">
</head>
<body>
<header>
    <div id="banner">
        <span><em>Antioch Station Intranet</em></span>
    </div>

</header>

<nav>
    <h1>Station Announcements</h1>
    <c:choose>
        <c:when test="${empty announcements}">
            <section>No Announcements Available</section>
        </c:when>
        <c:otherwise>
            <c:forEach var="announcement" items="${announcements}">
                <section class="cutCorner">
                    <span>${announcement.title}</span>
                    <div>${announcement.body}</div>
                </section>
            </c:forEach>
        </c:otherwise>
    </c:choose>
</nav>


<aside>
</aside>


<main>
    <div id="login">
        <span>${message}</span>
        <form action="Login" method="post">
            <label for="username">Username:</label>
            <input type="text" name="username" id="username"><br>
            <label for="password">Password:</label>
            <input type="password" name="password" id="password"><br>
            <br>
            <a href="create-account.jsp">Register</a>
            <input type="submit" value="Login">
        </form>
    </div>
</main>

<footer>
    <p><small>Copyright &copy;  Antioch Station Authority - website by Josh Cooley</small></p>
</footer>


</body>
</html>
