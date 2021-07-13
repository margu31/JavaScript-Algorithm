function solution(s) {
  if (s.length === 4 || s.length === 6) {
    return !s.split("").find((item) => isNaN(+item));
  }
  return false;
}

console.log(solution("a234")); // false
console.log(solution("1234")); // true
console.log(solution("1234d2")); // false
console.log(solution("123482")); // true
console.log(solution("1231482")); // false
