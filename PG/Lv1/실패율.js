function solution(N, stages) {
  let answer = [];
  let len = stages.length;
  for (let i = 1; i <= N; i++) {
      const count = stages.reduce((acc, cur) => cur === i ? acc += 1 : acc, 0);
      answer[i - 1] = [i, count / len];
      len -= count;
  }
  const desc = answer.sort((a, b) => b[1] - a[1]);
  return desc.map(([key, val]) => key);
}