module.exports = class SockMerchant {
  constructor(ar) {
    this.ar = ar;
    this.pairs = 0;
  }

  get getPairs() {
    let aux = this.getUniqueValues(this.ar);
    this.pairs += this.returnPairs(aux, this.ar);
    return this.pairs;
  }
  getUniqueValues(ar) {
    let array = [];
    ar.map(i => {
      if (!array.includes(i)) {
        array.push(i);
      }
    });

    return array;
  }
  verifyEquality(array, n) {
    let count = 0;
    array.map(x => {
      if (x === n) {
        count++;
      }
    });
    return count;
  }
  returnPairs(aux, ar) {
    let count = 0;
    aux.map(i => {
      var equals = 0;
      equals += this.verifyEquality(ar, i);
      if (equals % 2 === 0) {
        count += equals / 2;
      } else {
        if ((equals - 1) % 2 === 0) {
          count += (equals - 1) / 2;
        }
      }
    });
    return count;
  }
};
