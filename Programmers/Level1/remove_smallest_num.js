function solution(arr) {
  if (arr.length === 1) return [-1];
  return arr.filter((item) => item !== Math.min(...arr));
}

console.log(solution([4, 3, 2, 1])); // [4,3,2]
console.log(solution([10])); // [-1]
console.log(solution([2, 5, 6, 9])); // [5,6,9]
