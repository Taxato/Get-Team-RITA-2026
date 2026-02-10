updateView();

// Add a string of info to a selected team member
function addInfo() {
	// Get the new info from input element
	const additionalInfo = document.getElementById("info-input").value + ". ";

	// Get the right variable based on which team member is selected
	if (currentSelected === "remy") remyInfo += additionalInfo;
	else if (currentSelected === "isak") isakInfo += additionalInfo;
	else if (currentSelected === "thomas") thomasInfo += additionalInfo;
	else if (currentSelected === "andreas") andreasInfo += additionalInfo;
	else alert("Nobody selected!!");

	updateInfo(currentSelected);

	updateView();
}

function updateInfo(person) {
	currentSelected = person;
	if (person === "remy") currentInfo = remyInfo;
	else if (person === "isak") currentInfo = isakInfo;
	else if (person === "thomas") currentInfo = thomasInfo;
	else if (person === "andreas") currentInfo = andreasInfo;
	else alert("Invalid name selected!!");

	updateView();
}
