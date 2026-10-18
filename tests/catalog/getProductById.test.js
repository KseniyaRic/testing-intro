const products = require('../../src/data/products');
const { getProductById } = require('../../src/catalog');

describe('getProductById', () => {
  describe('товар существует', () => {
    test('ID 1 возвращает products[0]', () => {
      const currentProduct = getProductById(products, 1);
      expect(currentProduct).toEqual(products[0]);
  });
  test('ID 4 возвращает products[3]', () => {
    const currentProduct = getProductById(products, 4);
    expect(currentProduct).toEqual(products[3]);
  });
  test('ID 6 возвращает products[5]', () => {
    const currentProduct = getProductById(products, 6);
    expect(currentProduct).toEqual(products[5]);
});
});
describe('Числовой ID отсутствует', () => {
  test('ID 0 возвращает null', () => {
          const currentProduct = getProductById(products, 0);
      expect(currentProduct).toStrictEqual(null);
  });
  test('ID 999 возвращает null', () => {
          const currentProduct = getProductById(products, 999);
      expect(currentProduct).toStrictEqual(null);
    });
test('ID -1 возвращает null', () => {
          const currentProduct = getProductById(products, -1);
      expect(currentProduct).toStrictEqual(null);
});
});

describe('ID неверного типа', () => {
  test("строковый ID '1' возвращает null", () => {
      const currentProduct = getProductById(products, '1');
      expect(currentProduct).toStrictEqual(null);
});
  test('ID undefined возвращает null', () => {
      const currentProduct = getProductById(products, undefined);
      expect(currentProduct).toStrictEqual(null);
  });
  test('ID NaN возвращает null', () => {
      const currentProduct = getProductById(products, NaN);
      expect(currentProduct).toStrictEqual(null);
});
});
});