function findArr(arrA, arrB, rng, wanted) {
  // your code here
  // merge, unique, sort
  // check in aarA and arrB for occurences greater than 1
  // check range
  // check odd/even
  let mapOfArrayA = {};
  let mapOfArrayB = {};
  let map = {};

  let mergedArray = arrA.concat(arrB);

  let uniqueArray = mergedArray.filter((element) => {
    if (map[element] === undefined) {
      map[element] = 1;
      return element !== undefined;
    }
  });

  for (let element of arrA) {
    mapOfArrayA[element] =
      mapOfArrayA[element] === undefined ? 1 : mapOfArrayA[element] + 1;
  }

  for (let element of arrB) {
    mapOfArrayB[element] =
      mapOfArrayB[element] === undefined ? 1 : mapOfArrayB[element] + 1;
  }

  const sortedArray = uniqueArray
    .sort((a, b) => a - b)
    .filter((element) => mapOfArrayA[element] > 1 && mapOfArrayB[element] > 1)
    .filter((element) => element >= rng[0] && element <= rng[1])
    .filter((element) => {
      if (wanted === "even") return element % 2 === 0;
      else return element % 2 !== 0;
    });

  return sortedArray;
}

console.log(
  findArr(
    [1, -2, 7, 2, 1, 3, 4, 7, 1, 0, 2, 3, 0, 4],
    [0, 4, 2, -1, 1, 1, 1, 1, 2, 3, 3, 7, 7, 0, 4],
    [-4, 4],
    "even"
  )
);
