function getMultiSet(str) {
  let arr = [];
  for (let i = 0; i < str.length - 1; i++) {
    const word = (str[i] + str[i + 1]).toLowerCase();
    if (/^[a-z]+$/g.test(word)) arr.push(word);
  }
  return arr;
}

function solution(str1, str2) {
  let arr1 = getMultiSet(str1);
  let arr2 = getMultiSet(str2);

  let union = 0;
  const intersection = arr1.reduce((acc, cur) => {
    const idx = arr2.indexOf(cur);
    if (idx !== -1) {
      arr2.splice(idx, 1);
      return [...acc, cur];
    }
    union += 1;
    return acc;
  }, []).length;
  union += intersection + [...arr2].length;

  const answer = !intersection && !union ? 1 : intersection / union;
  return Math.floor(answer * 65536);
}
