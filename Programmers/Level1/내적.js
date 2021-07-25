function solution(a, b) {
  const times = a.map((num, i) => num * b[i]);
  return times.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2])); // 3
console.log(solution([-1, 0, 1], [1, 0, -1])); // -2
