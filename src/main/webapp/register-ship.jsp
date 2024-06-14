<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Antioch Station - Create Account</title>
    <link rel="stylesheet" type="text/css" href="assets/css/main.css" media="screen">
    <link rel="stylesheet" type="text/css" href="assets/css/nav.css" media="screen">
    <link rel="stylesheet" type="text/css" href="assets/css/ship.css" media="screen">

</head>
<body>
<header>
    <div id="banner">
        <span><em>Antioch Station Intranet</em></span>
    </div>

</header>

<%@include file="assets/includes/nav.jsp"%>


<aside>
    <fieldset>
        <legend>Ship Statistics</legend>
        <div id="shipStats">
            <section class="labels">
                <label>Total Cost:</label><br><br>
                <label>Hull:</label><br>
                <label>Armor:</label><br>
                <label>Flak:</label><br>
                <label>FTL:</label><br>
                <label>Top Speed:</label><br>
                <label>Maneuver:</label><br>
            </section>
            <section class="inputs">
                <span id="totalCost">0</span><br><br>
                <span id="hullDisplay">0</span><br>
                <span id="armorDisplay">0</span><br>
                <span id="antiSquadronStat">0</span><br>
                <span id="ftlDisplay">None</span><br>
                <span id="topSpeed">0</span><br>
                <span id="maneuver">0</span><br>
            </section>
            <section>
                <br><br>
                <label>Max Mass:</label><br>
                <label>Mass:</label><br>
                <label>Power Out:</label><br>
                <label>Power Req:</label><br>
            </section>
            <section>
                <br><br>
                <span id="maxMass">0</span><br>
                <span id="availableMass">0</span><br>
                <span id="powerBudget">0</span><br>
                <span id="powerConsumption">0</span><br>
            </section>
        </div>
    </fieldset>

    <div class="componentPane" id="installedComponentsPane">
        <span class="paneHeader">Installed Components</span>
    </div>
</aside>


<main>
    <h1>Register for Entry to Antioch Station</h1>
    <p>In order to enter Antioch Station you are required to register with the Antioch Station Authority. This
        registration constitutes agreement to the <a href="">ASA Rules and Regulations</a> while on Antioch Station. This registration
        will also give you access to the Antioch Station Intranet.</p>
    <form action="RegisterShip" method="post">
        <div id="createAccount">
            <section id="shipLabels">
                <h2>Ship</h2>
                <label for="name">Name: </label><br>
                <label for="type">Type: </label><br>
                <label for="class">Class: </label><br>
                <label for="hull">Hull Rating: </label><br>
                <label for="armor">Armor Rating:</label><br>
                <label for="antiSquadronRange">Anti-Squadron:</label><br>
                <label for="condition">Ship Condition: </label><br>
                <label for="fuel">Conventional Fuel: </label><br>
                <label for="triangulum">Triangulum: </label><br>
                <label for="registrationNumber">Registration Number: </label><br>
                <label for="flag">Flag Registration: </label><br>
            </section>
            <section id="shipInputs">
                <h2>Information</h2>
                <input type="text" name="name" id="name"><br>
                <select name="type" id="type" onchange="setShipType()">
                    <option value="personal">Personal</option>
                    <option value="shuttle">Shuttle</option>
                    <option value="exploration">Exploration</option>
                    <option value="survey">Survey</option>
                    <option value="transport">Transport</option>
                    <option value="liner">Liner</option>
                    <option value="colony">Colony</option>
                    <option value="mining">Mining</option>
                    <option value="tc">Corvette</option>
                    <option value="ss">Subspace</option>
                    <option value="dd">Destroyer</option>
                    <option value="ff">Frigate</option>
                    <option value="cl">Light Cruiser</option>
                    <option value="ca">Cruiser</option>
                    <option value="cv">Carrier</option>
                    <option value="bb">Battleship</option>
                </select><br>
                <input type="text" name="class" id="class"><br>
                <div class="slider-wrapper"><input type="range" min="1" max="3" value="1" class="slider" name="hull" id="hull"><span id="hullSize"></span></div><br>
                <div class="slider-wrapper"><input type="range" min="0" max="2" value="0" class="slider" name="armor" id="armor"><span id="armorRating"></span></div><br>
                <div class="slider-wrapper"><input type="range" min="0" max="6" value="0" class="slider" name="antiSquadronRange" id="antiSquadronRange"><span id="antiSquadron"></span></div><br>
                <div class="slider-wrapper"><input type="range" min="1" max="100" value="1" class="slider" name="condition" id="condition"><span id="conditionPercent"></span></div><br>
                <div class="slider-wrapper"><input type="range" min="1" max="3" value="1" class="slider" name="fuel" id="fuel"><span id="fuelAmount"></span></div><br>
                <div class="slider-wrapper"><input type="range" min="1" max="3" value="1" class="slider" name="triangulum" id="triangulum"><span id="triangulumAmount"></span></div><br>
                <input type="text" name="registrationNumber" id="registrationNumber"><br>
                <select name="flag" id="flag">
                    <option value="austria">Austrian Empire</option>
                    <option value="sternreich">Sternreich</option>
                    <option value="imperial-french">3rd French Empire</option>
                    <option value="commonwealth">Solar Commonwealth</option>
                    <option value="america">United Systems of America</option>
                    <option value="japan">Empire of Japan</option>
                    <option value="earth-gov">Earth Gov.</option>
                    <option value="byzantine">New Byzantium</option>
                    <option value="hospitaler">Order of St. John of Malta</option>
                    <option value="papal">Papal States</option>
                    <option value="spanish">Spain</option>
                    <option value="white-russian">Imperial Russia</option>
                </select><br>
                <input type="submit" value="Register">
            </section>
            <section id="shipComponents"><label>Component Type:</label>
                <select name="componentType" id="componentType" onChange="setComponentType()">
                    <option value="reactors">Reactors</option>
                    <option value="slEngines">SL Engines</option>
                    <option value="capShields">Capacitance Shields</option>
                    <option value="defShields">Deflector Shields</option>
                    <option value="primaryGuns">Primary Guns</option>
                    <option value="secondaryGuns">Secondary Guns</option>
                    <option value="beams">Beam Weapons</option>
                    <option value="blasters">Blaster Weapons</option>
                    <option value="torpedos">Torpedos</option>
                </select><br>
                <div class="componentPane" id="availablePane">
                    <span id="availablePaneHeader" class="paneHeader">Available Components</span>
                </div>
            </section>
        </div>
    </form>
</main>

<footer>
    <p><small>Copyright &copy; Antioch Station Authority  - website by Josh Cooley</small></p>
</footer>

<script type="text/javascript" src="assets/js/main.js"></script>
<script type="text/javascript" src="assets/js/dynamicComponents.js"></script>
<script type="text/javascript" src="assets/js/components/engineComponents.js"></script>
<script type="text/javascript" src="assets/js/components/reactorComponents.js"></script>
<script type="text/javascript" src="assets/js/components/primaryGunComponents.js"></script>
<script type="text/javascript" src="assets/js/components/secondaryGunComponents.js"></script>
<script type="text/javascript" src="assets/js/ship-main.js"></script>


</body>
</html>
