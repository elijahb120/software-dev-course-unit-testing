

let products = [
    {name: 'milk', price: 3.25},
    {name: 'apple', price: 1.00},
    {name: 'bread', price: 2.75},
    {name: 'cheese', price: 4.00},
    {name: 'pizza', price: 7.50}
];


function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    if (discountRate < 0 || discountRate > 1) return null;
    if (discountRate < 0 || discountRate > 1) return null;
    if(price === 0) return 0;
    let discount = price-(price*discountRate)
    return console.log(`The price is: ${discount}`);
}
calculateDiscount(100, .1);

function filterProducts(products, callback) {
     if (!Array.isArray(products)|| typeof callback !== 'function') return [];
    return products.filter(callback);
    }
console.log(filterProducts(products, (product) => product.name.includes("milk")));

function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') return [];
    return inventory.sort((a, b) => {
        if (typeof a[key] === 'string' && typeof b[key] === 'string') {
            return a[key].localeCompare(b[key]); // for strings
        }
        else {
        return a[key] - b[key]; // for numbers
        }
    });
}

console.log(sortInventory(products,'name'));
module.exports = {
    calculateDiscount: calculateDiscount,
    filterProducts:filterProducts,
    sortInventory:sortInventory,

}