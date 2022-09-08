function solution(arr) {
  return arr.filter((val, idx) => val != arr[idx + 1]);
}