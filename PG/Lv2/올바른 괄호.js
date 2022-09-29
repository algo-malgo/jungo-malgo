function solution(s){
  let sum = 0, i = 0;
  do {
      sum += s[i++] === '(' ? 1 : -1;
  } while (sum >= 0 && i < s.length);
  return sum === 0 ? true : false;
}