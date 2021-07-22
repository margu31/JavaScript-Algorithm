function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }

  return participant[participant.length - 1];

  // 아래 답안으로 풀이가 가능하지만, 효율성은 0..
  // let answer = [];

  // participant.map((runner) => {
  //   completion.find((finisher) => finisher === runner)
  //     ? completion.splice(
  //         completion.findIndex((finisher) => finisher === runner),
  //         1
  //       )
  //     : answer.push(runner);
  // });

  // return answer.join();
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
);
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
