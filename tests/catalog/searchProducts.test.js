const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

const getIds = (items) => items.map((product) => product.id);

describe('searchProducts', () => {
  describe('точное совпадение', () => {
    test("'Наушники' возвращает товар с ID 1", () => {
    const searchedProduct = searchProducts(products, 'Наушники');
    const resultIds = getIds(searchedProduct);
    expect(resultIds).toEqual([1]);
  });
test("'Чистый код' возвращает товар с ID 6", () => {
   const searchedProduct = searchProducts(products, 'Чистый код');
    const resultIds = getIds(searchedProduct);
    expect(resultIds).toEqual([6]);
});
test("'Настольная лампа' возвращает товар с ID 4", () => {
  const searchedProduct = searchProducts(products, 'Настольная лампа');
    const resultIds = getIds(searchedProduct);
    expect(resultIds).toEqual([4]);
});
});

describe('Регистр не влияет на поиск', () =>{
  test("'javascript' возвращает товар с ID 3", () => {
const searchedProduct = searchProducts(products, 'javascript');
    const resultIds = getIds(searchedProduct);
    expect(resultIds).toEqual([3]);
});
  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
const searchedProduct = searchProducts(products, 'ЧЕХОЛ');
    const resultIds = getIds(searchedProduct);
    expect(resultIds).toEqual([5]);
  });
  test("'наушники' возвращает товар с ID 1", () => {
const searchedProduct = searchProducts(products, 'наушники');
    const resultIds = getIds(searchedProduct);
    expect(resultIds).toEqual([1]);
  });
});

describe('Пустой запрос', () => {
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
const searchedProduct = searchProducts(products, '');
    const resultIds = getIds(searchedProduct);
    expect(resultIds).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
const searchedProduct = searchProducts(products, '   ');
    const resultIds = getIds(searchedProduct);
    expect(resultIds).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
const searchedProduct = searchProducts(products, '\t\n');
    const resultIds = getIds(searchedProduct);
    expect(resultIds).toEqual([1, 2, 3, 4, 5, 6]);
});
});
});
