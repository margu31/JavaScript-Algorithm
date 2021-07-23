function solution(n) {
  let prime = 0;

  // 나누어 떨어지는 수를 모두 구하고, 떨어지는 숫자의 수가 단 2개일 경우 소수로 판별
  // case 3개가 시간 초과.. 효율성 또한 시간 초과.. why..?
  // const arr = Array.from({ length: n - 1 }, (_, i) => i + 2);

  // arr.forEach((num) => {
  //   let count = 0;
  //   for (let i = 1; i <= num; i++) {
  //     if (!(num % i)) count += 1;
  //   }
  //   if (count === 2) return (prime += 1);
  // });

  for (let i = 2; i <= n; i++) {
    let count = 0;
    for (let j = 1; j <= n; j++) {
      if (i % j === 0) count += 1;
    }
    if (count === 2) prime += 1;
  }

  return prime;

  // for (let i = 2; i < n + 1; i++) {
  //   for (let j = 1; j < i + 1; j++) {
  //     if ((j !== 1 || j !== i) && !(i % j)) break;
  //     prime += 1;
  //   }
  // }

  // arr.forEach((num) => {
  //   for (let i = 1; i <= num; i++) {
  //     if ((i !== 1 || i !== num) && !(num % i)) return 0;
  //     return (prime += 0);
  //   }
  // });
}

console.log(solution(10)); // 4
console.log(solution(5)); // 3
