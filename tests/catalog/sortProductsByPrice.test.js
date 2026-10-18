const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

const getIds = (items) => items.map((product) => product.id);

describe('sortProductsByPrice', () => {

  describe('по возрастанию', () => {

    test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
      const sortedProducts = sortProductsByPrice(products, 'asc');
    const resultIds = getIds(sortedProducts);
    expect(resultIds).toEqual([3, 6, 5, 4, 2, 1]);
    });
  test('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]', () => {
      const sortedProducts = sortProductsByPrice(products);
    const resultIds = getIds(sortedProducts);
    expect(resultIds).toEqual([3, 6, 5, 4, 2, 1]);
    });
  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    const currentProducts =  products.filter(({ id }) => [1, 3, 4].includes(id));
    const sortedProducts = sortProductsByPrice(currentProducts, 'asc');
        const resultIds = getIds(sortedProducts);
    expect(resultIds).toEqual([3, 4, 1]);
    });
  });

  describe('по убыванию', () => {

    test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    const sortedProducts = sortProductsByPrice(products, 'desc');
    const resultIds = getIds(sortedProducts);
    expect(resultIds).toEqual([1, 2, 4, 5, 6, 3]);
    });

  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    const currentProducts =  products.filter(({ id }) => [3, 1, 4].includes(id));
    const sortedProducts = sortProductsByPrice(currentProducts, 'desc');
        const resultIds = getIds(sortedProducts);
    expect(resultIds).toEqual([1, 4, 3]);
    });

  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    const currentProducts =  products.filter(({ id }) => [5, 2, 6].includes(id));
    const sortedProducts = sortProductsByPrice(currentProducts, 'desc');
        const resultIds = getIds(sortedProducts);
    expect(resultIds).toEqual([2, 5, 6]);
    });
  });

describe('Исходный массив не меняется', () => {

  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const currentProducts =  products.filter(({ id }) => [1, 3, 4].includes(id));
    const sortedProducts = sortProductsByPrice(currentProducts, 'asc');
        const resultIds = getIds(currentProducts);
    expect(resultIds).toEqual([1, 3, 4]);
    });


  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
        const currentProducts =  products.filter(({ id }) => [1, 3, 4].includes(id));
    const sortedProducts = sortProductsByPrice(currentProducts, 'desc');
        const resultIds = getIds(currentProducts);
    expect(resultIds).toEqual([1, 3, 4]);
    });

 test('направление по умолчанию не меняет исходный массив всех товаров', () => {
   sortProductsByPrice(products);
        const originalIDs = getIds(products);
    expect(originalIDs).toEqual([1, 2, 3, 4, 5, 6]);
});
});
});
