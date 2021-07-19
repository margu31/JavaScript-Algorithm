// function solution(n, m) {
//   let res = "";

//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       res += "*";
//     }
//     res += "\n";
//   }

//   return res;
// }

// console.log(solution(5, 3));

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);

  let res = "";

  for (let i = 0; i < b; i++) {
    for (let j = 0; j < a; j++) {
      res += "*";
    }
    res += "\n";
  }
  console.log(res);

  // 타인의 답안!
  // 정말 대박이다.. repeat() 써서 3번 반복 깔끔하게!
  // const row = '*'.repeat(a)
  // for(let i =0; i < b; i++){
  //     console.log(row)
  // }
});

// *****
// *****
// *****
