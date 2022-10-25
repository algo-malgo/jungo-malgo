function solution(numbers) {
  let sum = 0;
  numbers = numbers.map((n) => {
      sum += n;
      return String(n)});
  return sum ? numbers.sort((a, b) => a + b > b + a ? -1 : 1).join('') : "0";
}