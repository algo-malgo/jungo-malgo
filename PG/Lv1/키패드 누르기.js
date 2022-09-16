function solution(numbers, hand) {
  let answer = '';
  let lPos = [3, 0], rPos = [3, 2];
  const pos = {2: [0, 1], 5: [1, 1], 8:[2, 1], 0: [3, 1]};
  for (let i = 0; i < numbers.length; i++) {
      if ([1, 4, 7].includes(numbers[i])) {
          answer += 'L';
          lPos = [Math.floor(numbers[i] / 3), 0];
      }
      else if ([3, 6, 9].includes(numbers[i])) {
          answer += 'R';
          rPos = [Math.floor(numbers[i] / 3 - 1), 2];
      }
      else {
          const [row, col] = pos[numbers[i]];
          const lDis = Math.abs(lPos[0] - row) + Math.abs(lPos[1] - col);
          const rDis = Math.abs(rPos[0] - row) + Math.abs(rPos[1] - col);
          if ((lDis === rDis && hand === "left") || lDis < rDis) {
            answer += "L";
            lPos = [row, col];
          } else {
            answer += "R";
            rPos = [row, col];
          }
      }
  }
  return answer;
}