updateView();

// Add a string of info to a selected team member
function addInfo() {
	// Get the input element
	const infoInputEl = document.getElementById("info-input");

	// Extract its value
	const infoInput = infoInputEl.value + ". ";

	// Get the right variable based on which team member is selected
	if (currentSelected === "remy") {
		remyInfo += infoInput;
		currentInfo = remyInfo;
	} else if (currentSelected === "isak") {
		isakInfo += infoInput;
		currentInfo = isakInfo;
	} else if (currentSelected === "thomas") {
		thomasInfo += infoInput;
		currentInfo = thomasInfo;
	} else if (currentSelected === "andreas") {
		andreasInfo += infoInput;
		currentInfo = andreasInfo;
	} else {
		alert("Nobody selected!!");
	}

	// Clear the input field
	infoInputEl.value = "";

	// Select the input field, so you can easily add more things
	infoInputEl.focus();

	updateView();
}

function updateInfo(btnEl) {
	const person = btnEl.dataset.name;
	currentSelected = person;

	if (person === "remy") currentInfo = remyInfo;
	else if (person === "isak") currentInfo = isakInfo;
	else if (person === "thomas") currentInfo = thomasInfo;
	else if (person === "andreas") currentInfo = andreasInfo;
	else {
		alert("Invalid name selected!!");
	}

	updateView();
}
