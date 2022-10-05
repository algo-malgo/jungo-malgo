function solution(arr1, arr2) {
  let answer = Array.from({length: arr1.length}, () => Array.from({length: arr2[0].length}, () => 0));

  for (let i = 0; i < arr2[0].length; i++) 
      for (let j = 0; j < arr1.length; j++) 
          for (let k = 0; k < arr2.length; k++) 
              answer[j][i] += arr1[j][k] * arr2[k][i]; 

  return answer;
}