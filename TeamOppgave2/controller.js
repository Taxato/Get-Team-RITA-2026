updateView();
function updateView() {
	const filteredGroceries = filterProductsFromSearch(model.searchTerm);

	const input = document.getElementById("product-search-input");
	const cursor = input?.selectionStart;
	const hadFocus = document.activeElement === input;

	model.app.innerHTML = /* html */ `
		<div class="main">
			<div class="cart-column">
				<h2>Min handlekurv</h2>
				${showShoppingCart()}
			</div>
		
			<div class="products-column">
				<h2>Alle produkter</h2>
				${showProductSearch()}
				${showProductsList(filteredGroceries)}
			</div>

		</div>
	`;

	if (hadFocus) {
		const newInput = document.getElementById("product-search-input");
		newInput.focus();
		newInput.setSelectionRange(cursor, cursor);
	}
}

/**
 * @param {number} price
 * @returns {string}
 */
function formatPrice(price) {
	const formatter = new Intl.NumberFormat("no-NB", {
		style: "currency",
		currency: "NOK",
	});

	return formatter.format(price);
}

/**
 * @param {number} id
 */
function getProductById(id) {
	return model.availableGroceries.find(item => item.id === id);
}

function filterProductsFromSearch(searchTerm) {
	return model.availableGroceries.filter(item =>
		item.name.toLowerCase().startsWith(searchTerm),
	);
}

function updateSearchTerm(newSearchTerm) {
	model.searchTerm = newSearchTerm;
	updateView();
}

function addProductToCart(id) {
	const quantity =
		Number(document.getElementById(`product-amount-${id}`).value) || 1;

	model.shoppingCart.push({ id, quantity });
	updateView();
}
