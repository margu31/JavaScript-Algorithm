
function solution(strings, n) {
  let answer = [];

  const temp = strings.map((str) => str[n]).sort();
  // console.log(temp);

  // temp.forEach(item => {
  //   answer.push(strings.find(str => item === str[n]))
  // });

  temp.filter((str) => {
    let arr = strings.filter((item) => item[n] === str);
    return answer.push(arr.length > 1 ? arr = arr.sort() : arr);
  })  

  return answer.flat().filter((item, index, arr) => arr.indexOf(item) === index);

  // return answer;
}

console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));