<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Antioch Station - Create Account</title>
    <link rel="stylesheet" type="text/css" href="assets/css/main.css" media="screen">
    <link rel="stylesheet" type="text/css" href="assets/css/nav.css" media="screen">

</head>
<body>
<header>
    <div id="banner">
        <span><em>Antioch Station Intranet</em></span>
    </div>

</header>

<%@include file="assets/includes/nav.jsp"%>


<aside>

</aside>


<main>
    <h1>Register for Entry to Antioch Station</h1>
    <p>In order to enter Antioch Station you are required to register with the Antioch Station Authority. This
        registration constitutes agreement to the <a href="">ASA Rules and Regulations</a> while on Antioch Station. This registration
    will also give you access to the Antioch Station Intranet.</p>
    <form action="CreateAccount" method="post">
        <div id="createAccount">
            <section class="column-left">
                <label for="username">Username: </label><br>
                <label for="password">Password: </label><br>
                <label for="firstName">First Name: </label><br>
                <label for="lastName">Last Name: </label><br>
                <label for="age">Age: </label><br>
                <label for="idNumber">ID Number: </label><br>
            </section>
            <section class="column-right">
                <input type="text" name="username" id="username"><br>
                <input type="password" name="password" id="password"><br>
                <input type="text" name="firstName" id="firstName"><br>
                <input type="text" name="lastName" id="lastName"><br>
                <input type="text" name="age" id="age"><br>
                <input type="text" name="idNumber" id="idNumber"><br>
                <input type="submit" value="Submit">
            </section>

        </div>
    </form>
</main>

<footer>
    <p><small>Copyright &copy; Antioch Station Authority  - website by Josh Cooley</small></p>
</footer>

<script type="text/javascript" src="assets/js/main.js"></script>

</body>
</html>
