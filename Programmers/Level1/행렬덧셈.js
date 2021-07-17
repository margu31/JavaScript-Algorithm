function solution(arr1, arr2) {
  return arr1.map((_, i) => arr2[i].map((_, j) => arr1[i][j] + arr2[i][j]));
  // return arr1.map((v1, i) => arr2[i].map((v2, j) => v1[j] + v2));

  // let flat1 = arr1.flat();
  // let flat2 = arr2.flat();

  // const sum = flat1.map((v, i) => v + flat2[i]);
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
); // [[4,6],[7,9]]
console.log(solution([[1], [2]], [[3], [4]])); // [[4],[6]]
