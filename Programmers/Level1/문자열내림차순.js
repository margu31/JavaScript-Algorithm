function solution(s) {
  const str = s.split("");
  return str.sort().reverse().join("");
}

console.log(solution("Zbcdefg"));
console.log(solution("bZcdefg"));
console.log(solution("dfEsgt")); // tsgfdE
