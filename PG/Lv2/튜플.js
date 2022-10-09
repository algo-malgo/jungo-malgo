function solution(s) {
  let answer = [];

  s = s.slice(2, -2).split(/},{/g).sort((a, b) => a.length - b.length);
  for (let i = 0; i < s.length; i++) {
      let list = s[i].split(',');
      for (let j = 0; j < list.length; j++) {
          const n = Number(list[j]);
          if (!answer.includes(n)) {
              answer.push(n);
              break;
          }
      }
  }
  return answer;
}