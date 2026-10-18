const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

const getIds = (items) => items.map((product) => product.id);

describe('filterByCategory', () => {
  describe('все категории', () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const filteredProducts = filterByCategory(products, 'all');
    const resultIds = getIds(filteredProducts);
    expect(resultIds).toEqual([1, 2, 3, 4, 5, 6]);
    });


  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
const filteredProducts = filterByCategory(products, undefined);
  const resultIds = getIds(filteredProducts);
    expect(resultIds).toStrictEqual([1, 2, 3, 4, 5, 6]);
    });

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const filteredProducts = filterByCategory(products, '');
  const resultIds = getIds(filteredProducts);
    expect(resultIds).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });
     describe('существующая категория', () => {

  test("'electronics' возвращает товары с ID [1, 2]", () => {
    const filteredProducts = filterByCategory(products, 'electronics');
    const resultIds = getIds(filteredProducts);
    expect(resultIds).toEqual([1, 2]);
  });

  test("'books' возвращает товары с ID [3, 6]", () => {
   const filteredProducts = filterByCategory(products, 'books');
    const resultIds = getIds(filteredProducts);
    expect(resultIds).toEqual([3, 6]);
   });

  test("'home' возвращает товары с ID [4, 5]", () => {
  const filteredProducts = filterByCategory(products, 'home');
    const resultIds = getIds(filteredProducts);
    expect(resultIds).toEqual([4, 5]);
 });
     });
     describe ('Несуществующая категория', () => {
  test("'clothes' возвращает пустой массив", () => {
    const filteredProducts = filterByCategory(products, 'clothes');
    const resultIds = getIds(filteredProducts);
    expect(resultIds).toEqual([]);
  });

  test("'toys' возвращает пустой массив", () => {
    const filteredProducts = filterByCategory(products, 'toys');
    const resultIds = getIds(filteredProducts);
    expect(resultIds).toEqual([]);
  });

  test("'sports' возвращает пустой массив", () => {
    const filteredProducts = filterByCategory(products, 'sports');
    const resultIds = getIds(filteredProducts);
    expect(resultIds).toEqual([]);
  });
     });
    });