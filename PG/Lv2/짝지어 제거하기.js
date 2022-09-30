function solution(s) {
  let arr = s.split('');
  let i = 1;
  while (i < arr.length) {
      if (arr[i - 1] === arr[i]) {
          arr.splice(i - 1, 2);
          i -= 1;
      } else i += 1;
  }
  return arr.length ? 0 : 1;
}