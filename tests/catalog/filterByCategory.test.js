const products = require("../../src/data/products");
const { filterByCategory } = require("../../src/catalog");

describe("filterByCategory", () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const product = filterByCategory(products, "all");
    expect(product).toEqual(products);
  });

  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const product = filterByCategory(products, undefined);
    expect(product).toEqual(products);
  });

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const product = filterByCategory(products, "");
    expect(product).toEqual(products);
  });

  test("'electronics' возвращает товары с ID [1, 2]", () => {
    const product = filterByCategory(products, "electronics");
    expect(product).toEqual([products[0], products[1]]);
  });

  test("'books' возвращает товары с ID [3, 6]", () => {
    const product = filterByCategory(products, "books");
    expect(product).toEqual([products[2], products[5]]);
  });

  test("'home' возвращает товары с ID [4, 5]", () => {
    const product = filterByCategory(products, "home");
    expect(product).toEqual([products[3], products[4]]);
  });
  test("'clothes' возвращает пустой массив", () => {
    const product = filterByCategory(products, "clothes");
    expect(product).toEqual([]);
  });

  test("'toys' возвращает пустой массив", () => {
    const product = filterByCategory(products, "toys");
    expect(product).toEqual([]);
  });

  test("'sports' возвращает пустой массив", () => {
    const product = filterByCategory(products, "sports");
    expect(product).toEqual([]);
  });
});
