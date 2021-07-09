function solution(n) {
  const arr = n
    .toString()
    .split("")
    .reverse()
    .map((str) => +str);
  return arr;
}

console.log(solution(12345)); // [5,4,3,2,1]
console.log(solution(28304)); // [4,0,3,8,2]
