function solution(n) {
  let sum = n;
  let f1 = 1, f2 = 2;
  for (let i = 3; i <= n; i++) {
      sum = (f1 % 1234567 + f2 % 1234567) % 1234567;
      f1 = f2 % 1234567;
      f2 = sum;
  }
  return sum;
}