const countDivisor = (n) => {
  let count = 0;
  for (let i = 1; i <= n ** 0.5; i++) {
    if (n % i === 0) {
      count += 1;
      if (i !== n ** 0.5) {
        count += 1;
      }
    }
  }
  return count;
};

function solution(number, limit, power) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    const count = countDivisor(i);
    answer += count > limit ? power : count;
  }
  return answer;
}
