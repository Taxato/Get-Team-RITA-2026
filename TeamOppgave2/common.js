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
