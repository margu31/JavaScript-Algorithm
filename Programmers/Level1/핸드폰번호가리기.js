function solution(phone_number) {
  const number = phone_number.split("").map((num, i, arr) => {
    if (i < arr.length - 4) return "*";
    else return num;
  });

  return number.join("");
}

console.log(solution("01033334444"));
console.log(solution("027778888"));
