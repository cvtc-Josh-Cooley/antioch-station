function updateInstalledPane(component, index) {
	
		var	pane = document.getElementById("installedComponentsPane");
		var itemDiv = document.createElement("div");
		itemDiv.setAttribute("class", "item");
		itemDiv.addEventListener("click", function() {removeComponent(component);});
		
		var columnCtr = 1;

		for(var prop in component) {
			if(component.hasOwnProperty(prop)) {

				if(columnCtr > 4){
					columnCtr = 1;
				}

				if(prop == "Name") {
					var cell1 = document.createElement("div");
					var cellContent1 = document.createTextNode(component[prop]);
					cell1.setAttribute("class", "itemName");
					cell1.appendChild(cellContent1);
					itemDiv.appendChild(cell1);
				} else if(prop != "Size") {
					var cell1 = document.createElement("div");
					var cellContent1 = document.createTextNode(prop + ":");
					cell1.setAttribute("class", "column" + columnCtr);
					cell1.appendChild(cellContent1);
					itemDiv.appendChild(cell1);
					columnCtr++;
				}

				
				if(prop == "Cost") {
					var cell2 = document.createElement("div");
					var cellContent2 = document.createTextNode("₠ " + numberWithCommas(component[prop]));
					cell2.setAttribute("class", "column" + columnCtr);
					cell2.appendChild(cellContent2);

					itemDiv.appendChild(cell2);
					columnCtr++;
				} else if(prop != "Name" && prop != "Size") {
					var cell2 = document.createElement("div");
					var cellContent2 = document.createTextNode(component[prop]);
					cell2.setAttribute("class", "column" + columnCtr);
					cell2.appendChild(cellContent2);

					itemDiv.appendChild(cell2);
					columnCtr++;
				}
			}
			
		}
		pane.appendChild(itemDiv);
}

function updateAvailablePane(item, index) {
	
	var pane = document.getElementById("availablePane");
	var component = document.createElement("div");
	component.setAttribute("class", "item");
	//component.addEventListener("mouseover", function() {alert("test");});
	component.addEventListener("click", function() {buyComponent(item);});

	var columnCtr = 1;

	for(var prop in item) {
		if(item.hasOwnProperty(prop)) {

			if(columnCtr > 4){
				columnCtr = 1;
			}

			if(prop == "Name") {
				var cell1 = document.createElement("div");
				var cellContent1 = document.createTextNode(item[prop]);
				cell1.setAttribute("class", "itemName");
				cell1.appendChild(cellContent1);
				component.appendChild(cell1);
			} else if(prop != "Type") {
				var cell1 = document.createElement("div");
				var cellContent1 = document.createTextNode(prop + ":");
				cell1.setAttribute("class", "column" + columnCtr);
				cell1.appendChild(cellContent1);
				component.appendChild(cell1);
				columnCtr++;
			}

			
			if(prop == "Cost") {
				var cell2 = document.createElement("div");
				var cellContent2 = document.createTextNode("₠ " + numberWithCommas(item[prop]));
				cell2.setAttribute("class", "column" + columnCtr);
				cell2.appendChild(cellContent2);

				component.appendChild(cell2);
				columnCtr++;
			} else if(prop != "Name" && prop != "Type") {
				var cell2 = document.createElement("div");
				var cellContent2 = document.createTextNode(item[prop]);
				cell2.setAttribute("class", "column" + columnCtr);
				cell2.appendChild(cellContent2);

				component.appendChild(cell2);
				columnCtr++;
			}
		}
		
	}
	pane.appendChild(component); 
	
}

function clearInstalledPane() {
	var pane = document.getElementById("installedComponentsPane");
	
	while (pane.childNodes.length > 2) {
		pane.removeChild(pane.lastChild);
	}

}

function clearAvailablePane() {
	var pane = document.getElementById("availablePane");
	
	while (pane.childNodes.length > 2) {
		pane.removeChild(pane.lastChild);
	}

}