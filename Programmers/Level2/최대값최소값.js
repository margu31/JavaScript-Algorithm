function solution(s) {
  const arr = s.split(" ").map((item) => +item);
  const res = [Math.min(...arr), Math.max(...arr)];
  return res.join(" ");
}

console.log(solution("1 2 3 4")); // '1 4'
console.log(solution("-1 -2 -3 -4")); // '-4 -1'
console.log(solution("-1 -1")); // '-1 -1'
