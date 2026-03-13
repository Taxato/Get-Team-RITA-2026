const model = {
	app: document.getElementById("app"),

	shoppingCart: [
		{ id: 9, quantity: 3 },
		{ id: 15, quantity: 2 },
		{ id: 11, quantity: 1 },
		{ id: 2, quantity: 0.3 },
	],

	availableGroceries: [
		{ id: 1, name: "Bananer (per kg)", price: 24.9 },
		{ id: 2, name: "Epler (per kg)", price: 32.9 },
		{ id: 3, name: "Tomater (per kg)", price: 39.9 },
		{ id: 4, name: "Poteter (per kg)", price: 19.9 },
		{ id: 5, name: "Gulrøtter (per kg)", price: 17.9 },
		{ id: 6, name: "Brokkoli (per kg)", price: 44.9 },
		{ id: 7, name: "Paprika rød (per kg)", price: 59.9 },
		{ id: 8, name: "Druer grønne (per kg)", price: 49.9 },

		{ id: 9, name: "Helmelk 1L", price: 22.9 },
		{ id: 10, name: "Lettmelk 1L", price: 21.9 },
		{ id: 11, name: "Egg 12 pk", price: 44.9 },
		{ id: 12, name: "Smør 250g", price: 39.9 },
		{ id: 13, name: "Hvitost 500g", price: 69.9 },
		{ id: 14, name: "Yoghurt naturell 500g", price: 28.9 },

		{ id: 15, name: "Brød loff", price: 29.9 },
		{ id: 16, name: "Grovbrød", price: 34.9 },
		{ id: 17, name: "Rundstykker 4 pk", price: 24.9 },

		{ id: 18, name: "Ris 1kg", price: 27.9 },
		{ id: 19, name: "Spaghetti 500g", price: 17.9 },
		{ id: 20, name: "Hermetiske tomater", price: 14.9 },
		{ id: 21, name: "Olivenolje 500ml", price: 89.9 },
		{ id: 22, name: "Peanøttsmør 350g", price: 36.9 },

		{ id: 23, name: "Appelsinjuice 1L", price: 32.9 },
		{ id: 24, name: "Cola 1.5L", price: 29.9 },
		{ id: 25, name: "Mineralvann 1.5L", price: 24.9 },

		{ id: 26, name: "Frossen pizza", price: 59.9 },
		{ id: 27, name: "Frosne erter 500g", price: 21.9 },

		{ id: 28, name: "Kyllingfilet (per kg)", price: 139.0 },
		{ id: 29, name: "Kjøttdeig (per kg)", price: 159.0 },
		{ id: 30, name: "Laksefilet (per kg)", price: 239.0 },
	],

	inputs: {
		searchTerm: "",
	},
};
