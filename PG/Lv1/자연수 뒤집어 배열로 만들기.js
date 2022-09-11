function solution(n) {
  return (n + "").split("").map(n => +n).reverse();
}