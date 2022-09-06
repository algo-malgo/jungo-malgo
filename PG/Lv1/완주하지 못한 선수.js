function solution(participant, completion) {
  let answer = "";
  for (let i = 0; i < participant.length; i++) {
    const idx = completion.indexOf(participant[i]);
    if (idx !== -1) {
      completion.splice(idx, 1);
    } else {
      answer = participant[i];
      break;
    }
  }

  return answer;
}
