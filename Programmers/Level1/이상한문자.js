function solution(s) {
  const oddWord = s.split(" ").map((word) => {
    let odd = "";
    for (let i = 0; i < word.length; i++) {
      odd += i % 2 ? word[i].toLowerCase() : word[i].toUpperCase();
    }
    return odd;
  });
  return oddWord.join(" ");
}

console.log(solution("try hello world")); // TrY HeLlO WoRlD
console.log(solution("happy coding")); // HaPpY CoDiNg
