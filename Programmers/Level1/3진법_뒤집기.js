function solution(n) {
  const ternary = n.toString(3);
  // console.log(ternary);
  // console.log(ternary.split("").reverse().join(""));
  const reverse = ternary.split("").reverse().join("");

  return parseInt(reverse, 3);
}

console.log(solution(45)); // 7
console.log(solution(125)); // 229
