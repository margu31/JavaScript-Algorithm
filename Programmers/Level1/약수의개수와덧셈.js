function solution(left, right) {
  let temp = [];
  
  for (let i = left; i < right + 1; i++) {
    temp.push(i);
  }

  const res = temp.map(num => {
    let divisor = 0;
    for (let i = 1; i < num + 1; i++) {
      num % i ? '' : divisor += 1
    }
    return divisor % 2 ? -num : num
  })

  return res.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(13, 17)); // 43
console.log(solution(24, 27)); // 52
