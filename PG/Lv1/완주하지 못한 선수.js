function solution(participant, completion) {
  const result = participant.filter(p => {
      const idx = completion.indexOf(p);
      if (idx !== -1) completion.splice(idx, 1);
      return idx === -1;
  })
  
  return result[0];
}