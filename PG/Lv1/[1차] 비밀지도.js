function solution(n, arr1, arr2) {
  let answer = [];

  for (let i = 0; i < n; i++) {
    const bin1 = arr1[i].toString(2).padStart(n, "0");
    const bin2 = arr2[i].toString(2).padStart(n, "0");

    let str = "";
    for (let j = 0; j < n; j++)
      str += bin1[j] === "0" && bin2[j] === "0" ? " " : "#";
    answer.push(str);
  }

  return answer;
}
