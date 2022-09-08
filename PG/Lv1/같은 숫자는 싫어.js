function solution(arr) {
  const answer = arr.filter((val, idx) => {
      if (!idx) return true;
      if (arr[idx - 1] == val) return false;
      return true;
  })
      
  return answer;
}