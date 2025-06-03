const {calculateDiscount, filterProducts} = require('../main.js');

describe('calculateDiscount',function() {
test("applies a valid discount rate", () => {
    expect(calculateDiscount(100, .1)).toEqual("The price is: 90");
});


test("handles an invalid discount rate gracefully", () => {
    expect(calculateDiscount(100, -0.1)).toBe(null);
});

test("handles edge case with price of 0", () => {
    expect(calculateDiscount(0, 0.2)).toBe(0);
});

});


describe('filterProducts', () => {
    test("should filter items by name", () => {
        let products = [
    {name: 'milk', price: 3.25},
    {name: 'apple', price: 1.00},
    {name: 'bread', price: 2.75},
    {name: 'cheese', price: 4.00},
    {name: 'pizza', price: 7.50}
];
    expect(filterProducts(products, (product) => product.name.includes("milk"))).toEqual([ { name: 'milk', price: 3.25 } ]);
})
});

test('returns empty array if first argument is not an array', () => {
        expect(filterProducts(0, () => true)).toEqual([]);
        expect(filterProducts({}, () => true)).toEqual([]);
    });

test('returns empty array if second argument is not a function', () => {
       let products = [
    {name: 'milk', price: 3.25},
    {name: 'apple', price: 1.00},
    {name: 'bread', price: 2.75},
    {name: 'cheese', price: 4.00},
    {name: 'pizza', price: 7.50}
       ];
        expect(filterProducts(products, "not a function")).toEqual([]);
    });

describe('sortInventory', () => {
    test("should sort items by name", () => {
        let products = [
    {name: 'milk', price: 3.25},
    {name: 'apple', price: 1.00},
    {name: 'bread', price: 2.75},
    {name: 'cheese', price: 4.00},
    {name: 'pizza', price: 7.50}
        ]
    expect(console.log(sortInventory(products,'name')).toEqual([
  { name: 'apple', price: 1 },
  { name: 'bread', price: 2.75 },
  { name: 'cheese', price: 4 },
  { name: 'milk', price: 3.25 },
  { name: 'pizza', price: 7.5 }
]));


    });
})