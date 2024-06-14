<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Antioch Station - Home</title>
    <link rel="stylesheet" type="text/css" href="assets/css/main.css" media="screen">
    <link rel="stylesheet" type="text/css" href="assets/css/nav.css" media="screen">


    <script>
        function escape(myString) {
            return myString.replace("'", "\'");

        }
        var subjects = [];
        var bodies = [];
        var froms = [];

        <c:if test="${not empty messages}">
            <c:forEach var="message" items="${messages}">
                subjects.push(escape("${message.subject}"));
                bodies.push(escape("${message.body}"));
                froms.push(escape("${message.from}"));
            </c:forEach>
        </c:if>
    </script>
</head>
<body>
<header>
    <div id="banner">
        <span><em>Antioch Station Intranet</em></span>
    </div>

</header>

<%@include file="assets/includes/nav.jsp"%>


<aside>
    <h1>Personal Messages</h1>
    <span>${message}</span><br>
    <input type="button" value="Compose New Message" onclick="composeMessage();">
    <c:choose>
        <c:when test="${empty messages}">
            <p>No Messages</p>
        </c:when>
        <c:otherwise>
            <c:forEach var="message" varStatus="loopStatus" items="${messages}">
                <section class="message" onclick="openMessage(subjects[${loopStatus.index}], bodies[${loopStatus.index}], froms[${loopStatus.index}])">
                    <span>${message.subject}</span>
                    <div>${message.from}</div>
                </section>
            </c:forEach>
        </c:otherwise>
    </c:choose>
</aside>


<main>
    <h1>Welcome ${user.firstName} ${user.lastName}</h1>
    <div id="homeUser">
    <section class="column-left">
        <span>Status:</span><br>
        <span>Active Ship:</span><br>
        <span>Ship Class: </span><br>
        <span>Ship Status:</span><br>
    </section>
    <section class="column-right">
        <span>${user.status}</span><br>
        <span>${user.activeShip.name}</span><br>
        <span>${user.activeShip.classification}</span><br>

            <c:choose>
                <c:when test="${not user.activeShip.isParked}">
                    <span>In active dock</span>
                    <input type="button" value="Store"><br>
                </c:when>
                <c:otherwise>
                    <span>In storage</span>
                    <input type="button" value="Retrieve"><br>
                </c:otherwise>
            </c:choose>
        </span>
    </section>
    </div>


    <div  id="openMessage" class="hidden draggable">
        <div class="closeMe" onclick="closeMe();">X</div>
        <div id="openMessageSubject"></div>

        <p id="openMessageFrom"></p>
        <p id="openMessageBody"></p>
    </div>

    <div  id="composeMessage" class="hidden draggable">
        <div class="closeMe" onclick="closeMe();">X</div>
        <form action="SendMessage" method="post">
            <div id="composeMessageHeader">
                Compose New Message
            </div><br>
            <div id="composeMessageSubject">
                <section class="column-left">
                    <label for="subject">Subject: </label><br>
                    <label for="recipient">Recipient ID:</label><br>
                </section>
                <section class="column-right">
                    <input type="text" name="subject" id="subject"><br>
                    <input type="text" name="recipient" id="recipient"><br>
                    <input type="hidden" name="fromId" id="fromId" value="${user.id}">
                </section>
            </div>
            <p id="composeMessageBody">
                <label for="body">Message: </label><br>
                <textarea name="body" id="body" cols="90" rows="10"></textarea><br>
                <input type="submit" value="Send Message">
            </p>
        </form>
    </div>
</main>

<footer>
    <p><small>Copyright &copy;  - website by Josh Cooley</small></p>
</footer>

<script type="text/javascript" src="assets/js/main.js"></script>

</body>
</html>
