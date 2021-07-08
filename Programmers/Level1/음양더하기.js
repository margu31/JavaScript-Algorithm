function solution(absolutes, signs) {
  const temp = absolutes.map((num, i) => signs[i] ? num : -num);
  return temp.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution([4, 7, 12], [true, false, true])); // 9
console.log(solution([1, 2, 3], [false, false, true])); // 0