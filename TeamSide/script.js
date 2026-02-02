let remyInfo = "";
let isakInfo = "";
let thomasInfo = "";
let andreasInfo = "";

// Add a string of info to a selected team member
function addInfo() {
	// Get the selected <option> from our <select> element
	const selectedName = document.getElementById("name-select").value;

	// Get the input element
	const infoInputEl = document.getElementById("info-input");

	// Extract its value
	const infoInput = infoInputEl.value + ". ";

	// Get the right variable based on which team member is selected
	if (selectedName === "remy") remyInfo += infoInput;
	else if (selectedName === "isak") isakInfo += infoInput;
	else if (selectedName === "thomas") thomasInfo += infoInput;
	else if (selectedName === "andreas") andreasInfo += infoInput;
	else {
		alert("Invalid name selected!!");
	}

	// Clear the input field
	infoInputEl.value = "";

	// Select the input field, so you can easily add more things
	infoInputEl.focus();

	updateView();
}

const originalBackgroundColor =
	document.querySelector("body").style.backgroundColor;

let currentBackgroundState = "original";

function setBackgroundColor(color) {
	document.body.style.backgroundColor = color;
}

function handleClick() {
	if (currentBackgroundState === "original") {
		setBackgroundColor(
			`hsl(${Math.random() * 360}, 75%, ${Math.random() * 30 + 60}%)`,
		);
		currentBackgroundState = "random";
	} else {
		setBackgroundColor(originalBackgroundColor);
		currentBackgroundState = "original";
	}
}

function updateView() {
	const appHtml = /* html */ `
		<h1
			class="h1"
			id="h1">
			Team 2 aka RITA
		</h1>
		<h2>Andreas, Isak, Remy, Thomas</h2>

		<p id="RemyD">
			Hei! Jeg heter Remy, bor på Rennesøy, og er 36 år. Hobbyer: Trommer,
			Fiske og Friluft, Motorsykkler, Gaming
		</p>

		<p class="mom">Jeg heter Isak og jeg liker å sykle.. Jeg er 26 år</p>

		<p id="thomas-p">Jeg heter Thomas, bor i Oslo, og jeg liker Gaming</p>

		<p class="andreas">
			Jeg heter Andreas, og jeg liker pasta og turer i skogen. Og turer i
			skogen med pasta.
		</p>

		<button onclick="handleClick()">Hit me baby one more time!</button>
		<br />
		<select id="name-select">
			<option value="remy">Remy</option>
			<option value="isak">Isak</option>
			<option value="thomas">Thomas</option>
			<option value="andreas">Andreas</option>
			<option value="ugyldig">Gunnar</option>
		</select>

		<form
			onsubmit="
				event.preventDefault(); // Stops page refresh on submit

				addInfo();
			">
			<button type="submit">Legg til info</button>
			<input
				id="info-input"
				placeholder="Si noe gøy om deg selv"
				required />
		</form>
		<ul class="info">
			<li id="li-remy">Remy &rarr; ${remyInfo} </li>
			<li id="li-isak">Isak &rarr; ${isakInfo}</li>
			<li id="li-thomas">Thomas &rarr; ${thomasInfo}</li>
			<li id="li-andreas">Andreas &rarr; ${andreasInfo}</li>
		</ul>`;

	document.getElementById("app").innerHTML = appHtml;
}

updateView();
