function solution(board, moves) {
  let answer = 0;
  let bucket = [];
  for (let i = 0; i < moves.length; i++) 
      for (let j = 0; j < board.length; j++) 
          if (board[j][moves[i] - 1] !== 0) {
              bucket.push(board[j][moves[i] - 1]);
              board[j][moves[i] - 1] = 0;
              if (bucket.length >= 2 && bucket.slice(-1)[0] === bucket.slice(-2, -1)[0]) {
                  bucket = bucket.slice(0, -2);
                  answer += 2;
              }
              break;
          }
  return answer;
}