function solution(board, moves) {
  let answer = 0;
  let bucket = [];
  for (let i = 0; i < moves.length; i++) {
      for (let j = 0; j < board.length; j++) {
          const item = board[j][moves[i] - 1];
          if (item) {
              if (item === bucket.slice(-1)[0]) {
                  bucket.pop();
                  answer += 2;
              } else {
                  bucket.push(item);  
              }
              board[j][moves[i] - 1] = 0;
              break;
          }
      }
  }
  return answer;
}