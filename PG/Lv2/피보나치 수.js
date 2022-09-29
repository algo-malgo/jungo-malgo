function solution(n) {
  let v1 = 0, v2 = 1;
  for (let i = 2; i <= n; i++) {
      let sum = (v1 % 1234567 + v2 % 1234567) % 1234567;
      v1 = v2 % 1234567;
      v2 = sum;
  }
  return v2;
}