function solution(s, n) {
  let code = "";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      code += " ";
      continue;
    }

    let index = upper.indexOf(s[i].toUpperCase()) + n;

    if (index >= upper.length) index -= upper.length;

    code += upper.includes(s[i]) ? upper[index] : lower[index];
  }

  return code;
}

console.log(solution("AB", 1)); // 'BC'
console.log(solution("z", 1)); // 'a'
console.log(solution("a B z", 4)); // 'e F d'
