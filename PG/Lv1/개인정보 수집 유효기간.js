function solution(today, terms, privacies) {
  let answer = [];

  const obj = {};
  for (let i = 0; i < terms.length; i++) {
    const [term, period] = terms[i].split(" ");
    obj[term] = +period;
  }

  for (let i = 0; i < privacies.length; i++) {
    const [date, term] = privacies[i].split(" ");
    const [y, m, d] = date.split(".").map((n) => +n);

    const addedM = m + obj[term];
    let addY = parseInt(addedM / 12);
    if (addedM % 12 === 0) {
      addY -= 1;
    }
    let expiredY = addedM > 12 ? y + addY : y;
    let expiredM = addedM % 12 || 12;
    if (d === 1) {
      expiredM -= 1;
    }
    let expiredD = d === 1 ? 28 : d - 1;
    const expired = `${expiredY}.${expiredM}.${expiredD}`;
    if (new Date(expired) < new Date(today)) {
      answer.push(i + 1);
    }
  }
  return answer;
}
