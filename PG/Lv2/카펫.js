function solution(brown, yellow) {
  let answer = [];
  let x;
  for (let y = 1; y <= yellow ** 0.5; y++) {
      if (!(yellow % y)) x = yellow / y;
      if ((x + y) * 2 + 4 === brown) {
          answer = [x + 2, y + 2];
          break;
      };
  }
  return answer;
}