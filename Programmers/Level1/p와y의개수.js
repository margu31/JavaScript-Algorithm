function solution(s) {
  let numOfP = 0;
  let numOfY = 0;

  s.split("").map((item) => {
    if (item === "p" || item === "P") numOfP += 1;
    if (item === "y" || item === "Y") numOfY += 1;
  });

  if ((!numOfP && !numOfY) || numOfP === numOfY) return true;
  else return false;

  // 감탄한 타인의 답안..
  // return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
  // 완전 깔끔하다
}

console.log(solution("pPoooyY")); // true
console.log(solution("Pyy")); // false
