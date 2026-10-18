const products = require("../../src/data/products");
const { searchProducts } = require("../../src/catalog");

describe("searchProducts", () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    const product = searchProducts(products, "Наушники");
    expect(product).toEqual([products[0]]);
  });

  test("'Чистый код' возвращает товар с ID 6", () => {
    const product = searchProducts(products, "Чистый код");
    expect(product).toEqual([products[5]]);
  });

  test("'Настольная лампа' возвращает товар с ID 4", () => {
    const product = searchProducts(products, "Настольная лампа");
    expect(product).toEqual([products[3]]);
  });

  test("'javascript' возвращает товар с ID 3", () => {
    const product = searchProducts(products, "javascript");
    expect(product).toEqual([products[2]]);
  });

  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    const product = searchProducts(products, "ЧЕХОЛ");
    expect(product).toEqual([products[4]]);
  });

  test("'наушники' возвращает товар с ID 1", () => {
    const product = searchProducts(products, "наушники");
    expect(product).toEqual([products[0]]);
  });

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const product = searchProducts(products, "");
    expect(product).toEqual([...products]);
  });

  test("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const product = searchProducts(products, "   ");
    expect(product).toEqual([...products]);
  });

  test("'/t/n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const product = searchProducts(products, "\t\n");
    expect(product).toEqual([...products]);
  });
});
