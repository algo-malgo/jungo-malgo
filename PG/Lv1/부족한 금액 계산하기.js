function solution(price, money, count) {
  let answer = (price + price * count) * count / 2;
  return answer > money ? answer - money : 0;
}