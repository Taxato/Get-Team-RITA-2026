function showShoppingCart() {
	let html = /* html */ `
		<ul class="grocery-list">
			<li class="grocery-item bold">
				<div>
					<span>Navn</span>
					<span>Pris per stk</span>
					<span>Antall</span>
					<span>Total</span>
				</div>
			</li>
	`;

	let totalCost = 0;
	for (let i = 0; i < model.shoppingCart.length; i++) {
		const cartItem = model.shoppingCart[i];
		const product = getProductById(cartItem.id);

		totalCost += cartItem.quantity * product.price;

		html += /* html */ `
			<li class="grocery-item">
				<div>
					<span>${product.name}</span>
					<span>${formatPrice(product.price)}</span>
					<span>${cartItem.quantity}</span>
					<span>${formatPrice(product.price * cartItem.quantity)}</span>
				</div>
			</li>
		`;
	}

	html += /* html */ `
		</ul>
		<h3>Total pris: ${formatPrice(totalCost)}</h3>
	`;

	return html;
}

function showProductSearch() {
	return /* html */ `
		<input 
			id="product-search-input" 
			class="search"
			value="${model.searchTerm}" 
			type="text" 
			placeholder="Søk etter varer"
			oninput="updateSearchTerm(this.value)" />
	`;
}
function showProductsList(productList) {
	let html = /* html */ `
		<ul class="product-list">
			<li class="product-item bold" >
				<div>
					<span>Navn</span>
					<span>Pris</span>
				</div>
			</li>
	`;

	for (let i = 0; i < productList.length; i++) {
		const item = productList[i];

		html += /* html */ `
			<li class="product-item">
				<div>
					<span>${item.name}</span>
					<span>${item.price}</span>
					<input 
						id="product-amount-${item.id}"
						type="number" 
						placeholder="Antall" />
					<button onclick="addProductToCart(${item.id})">Legg til</button>
				</div>
			</li>
		`;
	}

	html += /* html */ `</ul>`;

	return html;
}
