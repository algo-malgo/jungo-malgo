function solution(n) {
  let ans = 0;
  while (n !== 0)
      if (n % 2) {
          n -= 1;
          ans += 1;
      } else n /= 2;
  return ans;
}