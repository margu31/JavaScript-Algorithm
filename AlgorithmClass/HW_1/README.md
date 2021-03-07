# Homework No.1 - 21.03.07

## Programmers Level 1
![level1](./hw1.PNG)

## Quiz

1. 핸드폰 번호 가리기  
  전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

  ```js
  function solution(phone_number) {
    let answer = '';
    const lastNumber = phone_number.slice(-4);

    for (let i = 0; i < phone_number.length-4; i++) {
        answer += '*';    
    };

    answer += lastNumber;

    return answer;
  };
  ```

2. 비밀지도  
   - 지도는 한 변의 길이가 n인 정사각형 배열 형태로, 각 칸은 "공백"(" ") 또는 "벽"("#") 두 종류로 이루어져 있다.
   - 전체 지도는 두 장의 지도를 겹쳐서 얻을 수 있다. 각각 "지도 1"과 "지도 2"라고 하자. 지도 1 또는 지도 2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽이다. 지도 1과 지도 2에서 모두 공백인 부분은 전체 지도에서도 공백이다.
   - "지도 1"과 "지도 2"는 각각 정수 배열로 암호화되어 있다.
   - 암호화된 배열은 지도의 각 가로줄에서 벽 부분을 1, 공백 부분을 0으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열이다.  

  ```js
  // 풀이 1
  function solution(n, arr1, arr2) {
    let answer = [];
    let new1 = [];
    let new2 = [];

    for (let i = 0; i < n; i++) {
      let temp1 = [];
      let num1 = arr1[i].toString(2);
      for (let j = 0; j < n-num1.length; j++) {
        temp1.push(0);
      }
      for (let k = 0; k < num1.length; k++) {
        temp1.push(num1[k]);
      }
      new1.push(temp1);

      let temp2 = [];
      let num2 = arr2[i].toString(2);
      for (let l = 0; l < n-num2.length; l++) {
        temp2.push(0);
      }
      for (let m = 0; m < num2.length; m++) {
        temp2.push(num2[m]);
      }
      new2.push(temp2);
    }

    for (let i = 0; i < n; i++) {
      let secret = '';
      for (let j = 0; j < n; j++) {
        if (new1[i][j] === '1' || new2[i][j] === '1') {
          secret += '#';
        } else {
          secret += ' ';
        }
      }
      answer.push(secret);
    }
    return answer;
  }

  // 풀이 2
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
        new2[index] = [...temp, ...binary].join('');
      } else new2[index] = binary;
    });

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
  ```
