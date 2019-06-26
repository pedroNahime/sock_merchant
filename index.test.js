const SockMerchant = require("./index");
describe("first test", () => {
  const array = [10, 20, 20, 10, 10, 30, 50, 10, 20];
  const sockMerchant = new SockMerchant(array);
  test("Return pairs", () => {
    expect(sockMerchant.getPairs).toBe(3);
  });

  test("Get unique values", () => {
    expect(sockMerchant.getUniqueValues(array)).toStrictEqual([10, 20, 30, 50]);
  });
});

describe("Second test", () => {
  const array = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
  const sockMerchant = new SockMerchant(array);

  test("Simple input 2", () => {
    expect(sockMerchant.getPairs).toBe(4);
  });

  test("Get unique values", () => {
    expect(sockMerchant.getUniqueValues(array)).toStrictEqual([1, 3, 2]);
  });
});

describe("Third test", () => {
  const array = [5, 5, 3, 5, 2, 5, 3, 2, 3, 3, 2, 7, 8, 7, 2];
  const sockMerchant = new SockMerchant(array);

  test("Simple input 3", () => {
    const sockMerchant = new SockMerchant(array);
    expect(sockMerchant.getPairs).toBe(7);
  });

  test("Get unique values", () => {
    expect(sockMerchant.getUniqueValues(array)).toStrictEqual([5, 3, 2, 7, 8]);
  });
});
