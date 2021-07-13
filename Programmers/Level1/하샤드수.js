function solution(x) {
  const sum = (x + "").split("").reduce((acc, cur) => acc + +cur, 0);
  if (!(x % sum)) return true;
  return false;
}

console.log(solution(10)); // true
console.log(solution(12)); // true
console.log(solution(11)); // false
console.log(solution(13)); // false
