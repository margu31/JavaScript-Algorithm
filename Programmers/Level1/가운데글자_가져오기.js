// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
// 단, s는 길이가 1 이상, 100이하인 스트링입니다.

function solution(s) {
  const center = Math.floor(s.length / 2);

  // if (s.length % 2) return s[center];
  // if (!(s.length % 2)) return s[center - 1] + s[center];

  return s.length % 2 ? s[center] : s[center - 1] + s[center];
}

console.log(solution("abcde"));
console.log(solution("qwer"));
console.log(solution("helloworld"));
