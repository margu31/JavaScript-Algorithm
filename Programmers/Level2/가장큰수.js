function solution(numbers) {
  // const num = numbers.sort().reverse();

  const str = numbers.map((num) => num.toString());
  // 원소들이 모두 0인 경우도 생각해야함!
  // return str.sort((a, b) => b + a - (a + b)).join("");
  const number = str.sort((a, b) => b + a - (a + b)).join("");
  return number * 1 === 0 ? "0" : number;
}

console.log(solution([6, 10, 2])); // '6210'
console.log(solution([3, 30, 34, 5, 9])); // '9534330'
console.log(solution([0, 0, 0])); // '0'
