function solution(arr1, arr2) {
  let answer = [];
  
  for (let i = 0; i < arr1.length; i++) {
      let tmp = [];
      for (let j = 0; j < arr1[0].length; j++) 
          tmp.push(arr1[i][j] + arr2[i][j]);
      answer.push(tmp);
  }
  
  return answer;
}