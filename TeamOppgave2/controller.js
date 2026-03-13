updateView();
function updateView() {
	const filteredGroceries = filterProductsFromSearch(model.inputs.searchTerm);

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
 * @param {number} id
 */
function getProductById(id) {
	return model.availableGroceries.find(item => item.id === id);
}

function filterProductsFromSearch(searchTerm) {
	// Get every element in availableGroceries that starts with the searchTerm string
	return model.availableGroceries.filter(item =>
		item.name.toLowerCase().startsWith(searchTerm.toLowerCase()),
	);
}

function updateSearchTerm(newSearchTerm) {
	model.inputs.searchTerm = newSearchTerm;
	updateView();
}

function addProductToCart(id) {
	const quantity =
		Number(document.getElementById(`product-amount-${id}`).value) || 1;

	const exisitingItem = model.shoppingCart.find(item => item.id === id);

	if (exisitingItem) {
		exisitingItem.quantity += quantity;
	} else {
		model.shoppingCart.push({ id, quantity });
	}
	updateView();
}

function removeItemFromCart(index) {
	console.log(index);
	const item = model.shoppingCart[index];
	if (item.quantity > 1) {
		item.quantity--;
	} else model.shoppingCart.splice(index, 1);
	updateView();
}
