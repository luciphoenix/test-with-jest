function analyzeArray(array) {
  function average(array) {
    const sum = array.reduce((cumul, val) => cumul + val, 0);
    return sum / array.length;
  }
  return {
    average: average(array),
    length: array.length,
    min: array.sort()[0],
    max: array.sort()[array.length - 1],
  };
}

module.exports = analyzeArray;
