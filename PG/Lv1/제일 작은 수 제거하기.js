function solution(arr) {
  const min = [...arr].sort((a, b) => b - a)[arr.length - 1];
  arr.splice(arr.indexOf(min), 1);
  return !arr.length ? [-1] : arr;
}