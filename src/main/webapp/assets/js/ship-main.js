var hullSlider = document.getElementById("hull");
var hullOutput = document.getElementById("hullSize");
var shipTypeDisplay = document.getElementById("typeDisplay");
var typeSelect = document.getElementById("type");
var armorSlider = document.getElementById("armor");
var armorOutput = document.getElementById("armorRating");
//var totalCostOutput = document.getElementById("totalCost");
//var ftlCheckBox = document.getElementById("ftl");
var antiSquadronSlider = document.getElementById("antiSquadronRange");
var antiSquadronOutput = document.getElementById("antiSquadron");

var conditionSlider = document.getElementById("condition");
var conditionOutput = document.getElementById("conditionPercent");

var fuelSlider = document.getElementById("fuel");
var fuelOutput = document.getElementById("fuelAmount");

var triangulumSlider = document.getElementById("triangulum");
var triangulumOutput = document.getElementById("triangulumAmount");

var shipType = typeSelect.options[typeSelect.selectedIndex].value;
var shipDisplay = typeSelect.options[typeSelect.selectedIndex].value;
var availablePaneHeader = "Available Components";
var totalCost = 0;
var topSpeed = 0;
var currentTopSpeed = 0;
var maneuver = 0;
var currentManeuver = 0;
var mainThrust = 0;
var maneuverThrust = 0;
var hullFactor = 50;
var installedComponents = [];

// Current Ship Components
var currentReactor = 0;
var currentEngineSL = 0;
var currentArmor = 0;
var currentHull = 0;
var primaryGuns = 0;
var secondaryGuns = 0;
var antiSquadron = 0;
var ftl = "None";
var capShields = 0;
var particleShields = 0;
var sensors = "None";

//Mass Variables
var currentMass = 0;
var maxMass = 0;
var remainingMass = 0;
var hullMass = 0;
var armorMass = 0;
var primaryGunMass = 0;
var primaryTurretMass = 0;
var secondaryGunMass = 0;
var secondaryTurretMass = 0;
var antiSquadronMass = 0;
var slEngineMass = 0;
var ftlEngineMass = 0;
var particleShieldMass = 0;
var reactorMass = 0;
var sensorMass = 0;

//Power Consumption Variables
var powerOutput = 0;
var powerConsumption = 0;
var lifeSupportPC = 0;
var fireControlPC = 0;
var slEnginePC = 0;
var ftlEnginePC = 0;
var particleShieldPC = 0;
var sensorPC = 0;

// Cost Factors
hullCost = 40000;
armorCost = 50000;
antiSquadronCost = 30000;

// slider values
var maxArmor = Math.floor(hullSlider.value / 4);

//Default values
hullOutput.textContent = hullSlider.value;
//totalCostOutput.textContent = "₠ 0.00";
updateArmorSlider();
setShipType();
setComponentType();
calculateCurrentMass();
updateAntiSquadron();
updateConditionSlider();
updateFuelSlider();
updateTriangulumSlider();


/* EVENT HANDLERS */
// ARMOR RATING
armorSlider.oninput = function() {
	updateArmorSlider();
}

// HULL SIZE
hullSlider.oninput = function() {
	updateHullSlider();
}

// ANTI SQUADRON
antiSquadronSlider.oninput = function() {
	updateAntiSquadron();
}

conditionSlider.oninput = function() {
	updateConditionSlider();
}

fuelSlider.oninput = function() {
	updateFuelSlider();
}

triangulumSlider.oninput = function() {
	updateTriangulumSlider();
}

// SHIP TYPE SELECT EVENT		
function setShipType() {
	typeSelect = document.getElementById("type");
	shipType = typeSelect.options[typeSelect.selectedIndex].value;

	if (shipType == "tc") {
		hullSlider.setAttribute("min", "2");
		hullSlider.setAttribute("max", "3");
		hullSlider.setAttribute("value", "2");

		fuelSlider.setAttribute("min", "0");
		fuelSlider.setAttribute("max", "10");
		fuelSlider.setAttribute("value", "0");

		triangulumSlider.setAttribute("min", "0");
		triangulumSlider.setAttribute("max", "0");
		triangulumSlider.setAttribute("value", "0");
		triangulumSlider.setAttribute("enabled", "false");

		shipDisplay = "Corvette";

		armorSlider.setAttribute("max", maxArmor);
		hullFactor = 50;

	} else if (shipType == "dd") {
		hullSlider.setAttribute("min", "4");
		hullSlider.setAttribute("max", "8");
		hullSlider.setAttribute("value", "4");

		fuelSlider.setAttribute("min", "0");
		fuelSlider.setAttribute("max", "15");
		fuelSlider.setAttribute("value", "0");

		triangulumSlider.setAttribute("min", "0");
		triangulumSlider.setAttribute("max", "0");
		triangulumSlider.setAttribute("value", "0");
		triangulumSlider.setAttribute("enabled", "false");

		shipDisplay = "Destroyer";

		armorSlider.setAttribute("max", maxArmor);
		hullFactor = 50;

	} else if (shipType == "ff") {
		hullSlider.setAttribute("min", "8");
		hullSlider.setAttribute("max", "15");
		hullSlider.setAttribute("value", "8");

		fuelSlider.setAttribute("min", "0");
		fuelSlider.setAttribute("max", "18");
		fuelSlider.setAttribute("value", "0");

		triangulumSlider.setAttribute("min", "0");
		triangulumSlider.setAttribute("max", "0");
		triangulumSlider.setAttribute("value", "0");
		triangulumSlider.setAttribute("enabled", "false");

		shipDisplay = "Frigate";

		armorSlider.setAttribute("max", maxArmor);
		hullFactor = 50;

	} else if (shipType == "cl") {
		hullSlider.setAttribute("min", "8");
		hullSlider.setAttribute("max", "15");
		hullSlider.setAttribute("value", "8");

		fuelSlider.setAttribute("min", "0");
		fuelSlider.setAttribute("max", "25");
		fuelSlider.setAttribute("value", "0");

		triangulumSlider.setAttribute("min", "0");
		triangulumSlider.setAttribute("max", "0");
		triangulumSlider.setAttribute("value", "0");
		triangulumSlider.setAttribute("enabled", "false");

		shipDisplay = "Light Cruiser";
		hullFactor = 50;
		armorSlider.setAttribute("max", maxArmor);

	} else if (shipType == "ca") {
		hullSlider.setAttribute("min", "10");
		hullSlider.setAttribute("max", "20");
		hullSlider.setAttribute("value", "10");

		fuelSlider.setAttribute("min", "0");
		fuelSlider.setAttribute("max", "40");
		fuelSlider.setAttribute("value", "0");

		triangulumSlider.setAttribute("min", "0");
		triangulumSlider.setAttribute("max", "0");
		triangulumSlider.setAttribute("value", "0");
		triangulumSlider.setAttribute("enabled", "false");

		shipDisplay = "Cruiser";
		hullFactor = 50;
		armorSlider.setAttribute("max", maxArmor);

	} else if (shipType == "bb") {
		hullSlider.setAttribute("min", "18");
		hullSlider.setAttribute("max", "40");
		hullSlider.setAttribute("value", "18");

		fuelSlider.setAttribute("min", "0");
		fuelSlider.setAttribute("max", "40");
		fuelSlider.setAttribute("value", "0");

		triangulumSlider.setAttribute("min", "0");
		triangulumSlider.setAttribute("max", "20");
		triangulumSlider.setAttribute("value", "0");
		triangulumSlider.setAttribute("enabled", "false");

		shipDisplay = "Battleship";
		hullFactor = 40;
		armorSlider.setAttribute("max", maxArmor);

	} else if (shipType == "cv") {
		hullSlider.setAttribute("min", "12");
		hullSlider.setAttribute("max", "30");
		hullSlider.setAttribute("value", "12");

		fuelSlider.setAttribute("min", "0");
		fuelSlider.setAttribute("max", "40");
		fuelSlider.setAttribute("value", "0");

		triangulumSlider.setAttribute("min", "0");
		triangulumSlider.setAttribute("max", "20");
		triangulumSlider.setAttribute("value", "0");
		triangulumSlider.setAttribute("enabled", "false");

		shipDisplay = "Carrier";

		armorSlider.setAttribute("max", maxArmor);
		hullFactor = 40;

	} else if (shipType == "personal") {
		hullSlider.setAttribute("min", "1");
		hullSlider.setAttribute("max", "3");
		hullSlider.setAttribute("value", "1");

		fuelSlider.setAttribute("min", "0");
		fuelSlider.setAttribute("max", "10");
		fuelSlider.setAttribute("value", "0");

		triangulumSlider.setAttribute("min", "0");
		triangulumSlider.setAttribute("max", "0");
		triangulumSlider.setAttribute("value", "0");
		triangulumSlider.setAttribute("enabled", "false");

		shipDisplay = "Personal";

		armorSlider.setAttribute("max", maxArmor);
		hullFactor = 40;

	} else if (shipType == "shuttle") {
		hullSlider.setAttribute("min", "1");
		hullSlider.setAttribute("max", "4");
		hullSlider.setAttribute("value", "1");

		fuelSlider.setAttribute("min", "0");
		fuelSlider.setAttribute("max", "10");
		fuelSlider.setAttribute("value", "0");

		triangulumSlider.setAttribute("min", "0");
		triangulumSlider.setAttribute("max", "0");
		triangulumSlider.setAttribute("value", "0");
		triangulumSlider.setAttribute("enabled", "false");

		shipDisplay = "Shuttle";

		armorSlider.setAttribute("max", maxArmor);
		hullFactor = 40;

	} else if (shipType == "exploration") {
		hullSlider.setAttribute("min", "1");
		hullSlider.setAttribute("max", "5");
		hullSlider.setAttribute("value", "1");

		fuelSlider.setAttribute("min", "0");
		fuelSlider.setAttribute("max", "30");
		fuelSlider.setAttribute("value", "0");

		triangulumSlider.setAttribute("min", "0");
		triangulumSlider.setAttribute("max", "0");
		triangulumSlider.setAttribute("value", "0");
		triangulumSlider.setAttribute("enabled", "false");

		shipDisplay = "Exploration";

		armorSlider.setAttribute("max", maxArmor);
		hullFactor = 40;

	} else if (shipType == "survey") {
		hullSlider.setAttribute("min", "1");
		hullSlider.setAttribute("max", "5");
		hullSlider.setAttribute("value", "1");

		fuelSlider.setAttribute("min", "0");
		fuelSlider.setAttribute("max", "20");
		fuelSlider.setAttribute("value", "0");

		triangulumSlider.setAttribute("min", "0");
		triangulumSlider.setAttribute("max", "0");
		triangulumSlider.setAttribute("value", "0");
		triangulumSlider.setAttribute("enabled", "false");

		shipDisplay = "Survey";

		armorSlider.setAttribute("max", maxArmor);
		hullFactor = 40;

	} else if (shipType == "transport") {
		hullSlider.setAttribute("min", "4");
		hullSlider.setAttribute("max", "14");
		hullSlider.setAttribute("value", "4");

		fuelSlider.setAttribute("min", "0");
		fuelSlider.setAttribute("max", "25");
		fuelSlider.setAttribute("value", "0");

		triangulumSlider.setAttribute("min", "0");
		triangulumSlider.setAttribute("max", "0");
		triangulumSlider.setAttribute("value", "0");
		triangulumSlider.setAttribute("enabled", "false");

		shipDisplay = "Transport";

		armorSlider.setAttribute("max", maxArmor);
		hullFactor = 40;

	} else if (shipType == "liner") {
		hullSlider.setAttribute("min", "4");
		hullSlider.setAttribute("max", "10");
		hullSlider.setAttribute("value", "4");

		fuelSlider.setAttribute("min", "0");
		fuelSlider.setAttribute("max", "20");
		fuelSlider.setAttribute("value", "0");

		triangulumSlider.setAttribute("min", "0");
		triangulumSlider.setAttribute("max", "0");
		triangulumSlider.setAttribute("value", "0");
		triangulumSlider.setAttribute("enabled", "false");

		shipDisplay = "Liner";

		armorSlider.setAttribute("max", maxArmor);
		hullFactor = 40;

	} else if (shipType == "colony") {
		hullSlider.setAttribute("min", "5");
		hullSlider.setAttribute("max", "20");
		hullSlider.setAttribute("value", "5");

		fuelSlider.setAttribute("min", "0");
		fuelSlider.setAttribute("max", "30");
		fuelSlider.setAttribute("value", "0");

		triangulumSlider.setAttribute("min", "0");
		triangulumSlider.setAttribute("max", "0");
		triangulumSlider.setAttribute("value", "0");
		triangulumSlider.setAttribute("enabled", "false");

		shipDisplay = "Colony";

		armorSlider.setAttribute("max", maxArmor);
		hullFactor = 40;

	} else if (shipType == "mining") {
		hullSlider.setAttribute("min", "4");
		hullSlider.setAttribute("max", "14");
		hullSlider.setAttribute("value", "4");

		fuelSlider.setAttribute("min", "0");
		fuelSlider.setAttribute("max", "30");
		fuelSlider.setAttribute("value", "0");

		triangulumSlider.setAttribute("min", "0");
		triangulumSlider.setAttribute("max", "0");
		triangulumSlider.setAttribute("value", "0");
		triangulumSlider.setAttribute("enabled", "false");

		shipDisplay = "Mining";

		armorSlider.setAttribute("max", maxArmor);
		hullFactor = 40;

	}

	updateArmorSlider();
	updateHullSlider();
	hullOutput.textContent = hullSlider.value;
	setComponentType();
}

function setComponentType() {
	clearAvailablePane();

	var componentSelect = document.getElementById("componentType");
	var type = componentSelect.options[componentSelect.selectedIndex].value;

	if (type == "reactors") {
		availablePaneHeader = "Available Reactors";
		reactors.forEach(updateAvailablePane);
	} else if (type == "slEngines") {
		availablePaneHeader = "Available Sub-Light Engines";
		engines.forEach(updateAvailablePane);
	} else if(type == "primaryGuns") {
		availablePaneHeader = "Available Primary Guns";
		primaryGunArray.forEach(updateAvailablePane);
	} else if(type == "secondaryGuns") {
		availablePaneHeader = "Available Secondary Guns";
		secondaryGunArray.forEach(updateAvailablePane);
	} else if(type == "torpedos") {
		availablePaneHeader = "Available Torpedo Systems";
		torpedos.forEach(updateAvailablePane);
	} else if(type == "sensors") {
		availablePaneHeader = "Available Sensor Packages";
		sensorArray.forEach(updateAvailablePane);
	}
	
	var pane = document.getElementById("availablePane");
	if(pane.childNodes.length < 3) {
		var span = document.createElement("span");
		var message = document.createTextNode("There are currently no components of this type available");
		span.appendChild(message);
		pane.appendChild(span);
	}
	
	updateDisplay();
}


/* HELPER / UPDATE DISPLAY FUNCTIONS */

function updateHullSlider() {
  
  // Remove Old Cost
  if(totalCost > 0) {
	  var oldHullCost = (currentHull * (currentHull / 2)) * hullCost;
	  calculateTotalCost(oldHullCost, "sub");
  }
  
  // Update Current Values
  currentHull = hullSlider.value;
  hullOutput.textContent = currentHull;

if(shipType == "cv" && currentHull >= 16 && currentHull <= 17) {
	  
	  shipDisplay = "Escort Carrier";
	  
  } else if(shipType == "cv" && currentHull >= 18 && currentHull <= 22) {
	  
	  shipDisplay = "Light Carrier";
	  
  } else if(shipType == "cv" && currentHull >= 23 && currentHull <= 30) {
	  
	  shipDisplay = "Fleet Carrier";
	  
  }
  
  hullMass = currentHull * 10;
  maxMass = ((currentHull * 10)/hullFactor)*100;
  lifeSupportPC = currentHull * 2;
  updateArmorSlider();
  calculateManeuver();
  calculateCurrentMass();
  calculatePowerStats();
  
  // Add New Cost
  var newHullCost = (currentHull * (currentHull / 2)) * hullCost;
  calculateTotalCost(newHullCost, "add");
  
  updateDisplay();
}

function updateArmorSlider() {
  
  // Remove Old Cost
  if(totalCost > 0) {
	  var oldArmorCost = (currentArmor * currentArmor) * armorCost;
	  calculateTotalCost(oldArmorCost, "sub");
  }
  
  // Update Current Values
  maxArmor = Math.floor(hullSlider.value / 4);

  armorSlider.setAttribute("max", maxArmor);
  armorSlider.setAttribute("value", "0");
  currentArmor = armorSlider.value;
  armorOutput.textContent = currentArmor;
  armorMass = currentArmor * 5;
  
  calculateCurrentMass();
  calculateManeuver();
  
  
  // Add New Cost
  var newArmorCost = (currentArmor * currentArmor) * armorCost;
  calculateTotalCost(newArmorCost, "add");

  // Update Display
  updateDisplay();
}

function updateAntiSquadron() {
	
	// Remove old cost
	if(totalCost > 0) {
		var oldCost = (antiSquadron * antiSquadron) * antiSquadronCost;
		calculateTotalCost(oldCost, "sub");
	}
	
	// Update Current Values
	antiSquadronOutput.innerHTML = antiSquadronSlider.value;
	antiSquadron = antiSquadronSlider.value;
	antiSquadronMass = antiSquadronSlider.value * 2;
	
	calculateCurrentMass();
    calculateManeuver();
	
	// Add new cost
    var newCost = (antiSquadron * antiSquadron) * antiSquadronCost;
    calculateTotalCost(newCost, "add");

	// Update Display
	updateDisplay();
}

function updateConditionSlider() {
	conditionOutput.textContent = conditionSlider.value + "%";
}

function updateFuelSlider() {
	fuelOutput.textContent = fuelSlider.value;
}

function updateTriangulumSlider() {
	triangulumOutput.textContent = triangulumSlider.value;
}

function calculateCurrentMass() {
	
	currentMass = 0;
	currentMass += hullMass;
	currentMass += armorMass;
	currentMass += primaryGunMass;
	currentMass += primaryTurretMass;
	currentMass += secondaryGunMass;
	currentMass += secondaryTurretMass;
	currentMass += antiSquadronMass;
	currentMass += slEngineMass;
	currentMass += ftlEngineMass;
	currentMass += particleShieldMass;
	currentMass += reactorMass;
	currentMass += sensorMass;
	//installedComponents.forEach(function(item, index) {currentMass += parseInt(item.MU);});
	
	
	remainingMass = maxMass - currentMass;
	currentMass = Math.round(currentMass * 100) / 100;
	remainingMass = Math.round(remainingMass * 100) / 100;
	primaryGunMass = Math.round(primaryGunMass * 100) / 100;
	primaryTurretMass = Math.round(primaryTurretMass * 100) / 100;
	secondaryGunMass = Math.round(secondaryGunMass * 100) / 100;
	secondaryTurretMass = Math.round(secondaryTurretMass * 100) / 100;
	
}


function calculateTotalCost(cost, operation) {
	if(operation == "add") {
		totalCost += parseInt(cost);
	} else if (operation == "sub") {
		totalCost -= parseInt(cost);
	}

	updateDisplay();
}

function calculatePowerStats() {
	
	powerConsumption = 0;
	 
	powerConsumption += lifeSupportPC;
	powerConsumption += fireControlPC;
	powerConsumption += slEnginePC;
	powerConsumption += ftlEnginePC;
	powerConsumption += particleShieldPC;
	powerConsumption += sensorPC;
	
	
	
	/*var po = 0;
	installedComponents.forEach(function(item, index) {
		if(item.Type != "Reactor") {pc += parseInt(item.PC);}});
	installedComponents.forEach(function(item, index) {
		if(item.Type == "Reactor") {po += parseInt(item.PO);}});
		*/
	powerConsumption = Math.round(powerConsumption);
	
}

function calculateManeuver() {
	
	maneuver = Math.round(maxMass / maneuverThrust);
	currentManeuver = Math.round(currentMass / maneuverThrust);
	
	topSpeed = Math.round(7 - (maxMass / mainThrust));
	currentTopSpeed = Math.round(7 - (currentMass / mainThrust));
	
	if (!isFinite(maneuver)) {
		maneuver = 0;
	}
	
	if (!isFinite(currentManeuver)) {
		currentManeuver = 0;
	}
	
	if (!isFinite(topSpeed)) {
		topSpeed = 0;
	}
	
	if (!isFinite(currentTopSpeed)) {
		currentTopSpeed = 0;
	}
	
	/*
	if(currentEngineSL != 0 && currentEngineSL.Thrust > 0) {
		topSpeed = Math.round(1 + (currentEngineSL.Thrust / currentMass));
		maneuver = Math.round(6 - (currentEngineSL.Thrust / currentMass));
	} else {
		topSpeed = 0;
		maneuver = 0;
	}
	
	if(topSpeed > 6) {
		topSpeed = 6;
		maneuver = 1;
	}
	*/
}

// APPLYING AND REMOVING COMPONENTS
function buyComponent(component) {
	var num = 0;

	component = cloneComponent(component);
	
	if(component.Type == "Reactor") {
		addReactor(component);
	} else if(component.Type == "SL Engine") {
		addSLEngine(component);
	} else if(component.Type == "Primary Gun") {
		addPrimaryGuns(component);
	} else if(component.Type == "Secondary Gun") {
		addSecondaryGuns(component);
	} else if(component.Type == "Sensors") {
		addSensors(component);
	} else if(component.Type == "Torpedo") {
		num = prompt("Number of torpedos to purchase?");
		
		var newComponent = cloneComponent(component);
		newComponent.Cost *= num;
		newComponent.MU = Math.round(newComponent.MU * num);
		newComponent.Num *= num;
		newComponent.PC = Math.round(newComponent.PC * num);
		component = newComponent;
	}
	
	//installedComponents.push(component);
	clearInstalledPane();
	installedComponents.forEach(updateInstalledPane);
	//calculateTotalCost(component.Cost, "add");
	calculatePowerStats();
	calculateCurrentMass();
	calculateManeuver();
	updateDisplay();
}

function removeComponent(component) {
	
	var index = installedComponents.indexOf(component);
	
	if(index > -1) {
		installedComponents.splice(index, 1);
	}
	
	if(component.Type == "Reactor") {
		currentReactor = 0;
		reactorMass = 0;
		powerOutput = 0;
	} else if(component.Type == "Primary Gun") {
		primaryGuns = 0;
		primaryGunMass = 0;
		primaryTurretMass = 0;
		fireControlPC = 0;
	} else if(component.Type == "Secondary Gun") {
		secondaryGuns = 0;
		secondaryGunMass = 0;
		secondaryTurretMass = 0;
	} else if(component.Type == "SL Engine") {
		currentEngineSL = 0;
		slEngineMass = 0;
		slEnginePC = 0;
		mainThrust = 0;
		maneuverThrust = 0;
	} else if(component.Type == "Sensors") {
		sensors = "None";
		sensorMass = 0;
		sensorPC = 0;
	}

	clearInstalledPane();
	installedComponents.forEach(updateInstalledPane);
	calculateTotalCost(component.Cost, "sub");
	calculateCurrentMass();
	calculatePowerStats();
	calculateManeuver();
	updateDisplay();
}

function cloneComponent(component) {
	var newComponent = {};
	
	for(var prop in component) {
			if(component.hasOwnProperty(prop)) {
				newComponent[prop] = component[prop];
		}
	}
	return newComponent;
}

function addReactor(component) {
	
	if(currentReactor != 0) {
		alert("You already have a reactor installed.");
	} else {
		currentReactor = component;
		reactorMass = component.Mass;
		powerOutput = component.Output;
		calculateTotalCost(component.Cost, "add");
		installedComponents.push(component);
		
	}
}

function addPrimaryGuns(component) {
	
	if(primaryGuns != 0) {
		alert("You already have primary battery guns installed.");
	} else {
		primaryGuns = prompt("Number of guns to install?");
		
		// multiply by number of guns
		//var newGunComponent = cloneComponent(component);
		component.Cost *= primaryGuns;
		
		component.Mass = component.Mass * primaryGuns;
		component.Num *= primaryGuns;
		component.Power = component.Power * primaryGuns;
		
		//component = newGunComponent;
		primaryGunMass = component.Mass;
		primaryTurretMass = primaryGunMass * 5;
		fireControlPC = component.Power;
		calculateTotalCost(component.Cost, "add");
		installedComponents.push(component);
	}
}

function addSecondaryGuns(component) {
	
	if(secondaryGuns != 0) {
		alert("You already have primary battery guns installed.");
	} else {
		secondaryGuns = prompt("Number of guns to install?");
		
		// multiply by number of guns
		//var newGunComponent = cloneComponent(component);
		component.Cost *= secondaryGuns;
		component.Mass = component.Mass * secondaryGuns;
		component.Num *= secondaryGuns;
		
		//component = newGunComponent;
		secondaryGunMass = component.Mass;
		secondaryTurretMass = secondaryGunMass * 5;
		calculateTotalCost(component.Cost, "add");
		installedComponents.push(component);
	}
}

function addSLEngine(component) {
	if(currentEngineSL != 0) {
		alert("You already have sub-light engines installed.");
	} else {
		currentEngineSL = component;
		
		slEngineMass = component.Mass;
		slEnginePC = component.Power;
		mainThrust = component.Main;
		maneuverThrust = component.Maneuver;
		calculateTotalCost(component.Cost, "add");
		installedComponents.push(component);
	}
}

function addSensors(component) {
	if(sensors != "None") {
		alert("You already have a sensor package installed.");
	} else {
		sensors = component.Name;
		
		sensorMass = component.Mass;
		sensorPC = component.Power;
		calculateTotalCost(component.Cost, "add");
		installedComponents.push(component);
	}
}

// UPDATE DISPLAY
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function updateDisplay() {
	
	document.getElementById("availablePaneHeader").textContent = availablePaneHeader;
	
	//document.getElementById("typeDisplay").value = shipDisplay
	
	document.getElementById("totalCost").textContent = "₠ " + numberWithCommas(totalCost);
	document.getElementById("hull").textContent = hullSlider.value;
	document.getElementById("armor").textContent = armorSlider.value;
	document.getElementById("antiSquadronStat").textContent = antiSquadron;

	document.getElementById("maneuver").textContent = maneuver;
	document.getElementById("topSpeed").textContent = topSpeed;
	
	document.getElementById("maxMass").textContent = maxMass;
	document.getElementById("availableMass").textContent = currentMass;
	
	if(currentMass > maxMass) {
		document.getElementById("availableMass").setAttribute("style", "color:maroon;");
	} else {
		document.getElementById("availableMass").removeAttribute("style");
	}

	
	document.getElementById("powerConsumption").textContent = powerConsumption;
	
	if(powerConsumption > powerOutput) {
		document.getElementById("powerConsumption").setAttribute("style", "color:maroon;");
	} else {
		document.getElementById("powerConsumption").removeAttribute("style");
	}
	
	document.getElementById("powerBudget").textContent = powerOutput;

	
}

