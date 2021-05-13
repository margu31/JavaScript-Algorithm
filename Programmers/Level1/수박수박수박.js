function solution(n) {
  let waterMelon = "";
  for (let i = 1; i < n + 1; i++) {
    waterMelon += i % 2 ? "수" : "박";
  }
  return waterMelon;
}

console.log(solution(3));
console.log(solution(4));
console.log(solution(6));
