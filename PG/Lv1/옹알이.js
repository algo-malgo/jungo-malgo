function solution(babbling) {
  let answer = 0;
  for (const babble of babbling) {
    const arr = babble.match(/ye|aya|ma|woo/g);
    if (arr) {
      let continuity = false;
      for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] === arr[i]) {
          continuity = true;
          break;
        }
      }
      answer += !continuity && arr.join("").length === babble.length ? 1 : 0;
    }
  }
  return answer;
}

/*
const regexp1 = /(aya|ye|woo|ma)\1+/;
const regexp2 = /^(aya|ye|woo|ma)+$/;
*/
