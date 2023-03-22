const countNumber = (str) => {
  const map = new Map();
  for (const n of str.split("")) {
    map.set(n, (map.get(n) ?? 0) + 1);
  }
  return map;
};

function solution(X, Y) {
  let answer = "";

  const xMap = countNumber(X);
  const yMap = countNumber(Y);
  for (const [n, xCount] of xMap) {
    const yCount = yMap.get(n);
    if (yCount) {
      answer += n.repeat(Math.min(xCount, yCount));
    }
  }

  if (answer.match(/0/g)?.length === answer.length) {
    return "0";
  }
  return answer.split("").sort().reverse().join("") || "-1";
}
