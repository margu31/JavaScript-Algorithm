function solution(n) {
  return (n + "").split("").reduce((acc, cur) => acc + +cur, 0);
}

console.log(solution(123)); // 6
console.log(solution(987)); // 24
