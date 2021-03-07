function solution(n, arr1, arr2) {
  let answer = [];
  let new1 = [];
  let new2 = [];
  
  arr1.map((number, index) => {
    const binary = number.toString(2);
    if (binary.length < n) {
      let temp = [];
      for (let i = 0; i < n - binary.length; i++) {
        temp.push(0);
      }
      new1[index] = [...temp, ...binary].join('');
    } else new1[index] = binary;
  });

  arr2.map((number, index) => {
    const binary = number.toString(2);
    if (binary.length < n) {
      let temp = [];
      for (let i = 0; i < n - binary.length; i++) {
        temp.push(0);
      }
      // console.log(temp);
      new2[index] = [...temp, ...binary].join('');
    } else new2[index] = binary;
  });

  // arr2.map((number, index) => {
  //   const binary = number.toString(2);
  //   if (binary.length < n) {
  //     for (let i = 0; i < n - binary.length; i++) {
  //       // new2[index] = [0, ...binary].join('');
  //       let temp = [];
  //       temp.push(0);
  //       new2[index] = [temp, ...binary].join('');
  //     }
  //   } else new2[index] = binary;
  // });

  // console.log(new1);
  // console.log(new2);

  for (let i = 0; i < n; i++) {
    let secret = '';
    for (let j = 0; j < n; j++) {
      if (new1[i][j] === '1' || new2[i][j] === '1') secret += '#';
      else secret += ' ';
    }
    answer.push(secret);
  }
  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10]));