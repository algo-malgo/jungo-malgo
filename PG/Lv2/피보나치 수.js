function fibo(n, memo) {
  if (n === 0 || n === 1) return n;

  if (memo[n - 1] === -1) memo[n - 1] = fibo(n - 1, memo);
  if (memo[n - 2] === -1) memo[n - 2] = fibo(n - 2, memo);
  
  return (memo[n - 1] % 1234567 + memo[n - 2] % 1234567) % 1234567;
}

function solution(n) {
  let memo = Array.from({length: n}, () => -1);
  memo[0] = 0;
  memo[1] = 1;
  return fibo(n, memo);
}