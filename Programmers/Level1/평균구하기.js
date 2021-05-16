function solution(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
  // const average = arr.reduce((acc, cur, i, arr) => {
  //   return i === arr.length - 1 ? (acc + cur) / arr.length : acc + cur;
  // }, 0);

  // return average;
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([5, 5]));
console.log(solution([6, 10, -4]));
