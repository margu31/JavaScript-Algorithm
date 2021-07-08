function solution(n) {
  const temp = n.toString();
  return +temp.split('').sort((a, b) => b - a).join('')
}

console.log(solution(118372)); // 873211
console.log(solution(1938420)); // 9843210