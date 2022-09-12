function solution(n, m) {
  let a = Math.max(n, m);
  let b = Math.min(n, m);
  
  let r = a % b;
  while (r !== 0) {
      a = b;
      b = r;
      r = a % b;
  }
  
  return [b, n * m / b];
}