function solution(id_list, report, k) {
  const count = id_list.reduce((acc, cur) => {
      acc[cur] = 0;
      return acc;
  }, {});
  const result = id_list.reduce((acc, cur) => {
      acc[cur] = 0;
      return acc;
  }, {});
  const newReport = [...new Set(report)];
  for (let i = 0; i < newReport.length; i++) {
      count[newReport[i].split(' ')[1]] += 1;
  }
  for (let i = 0; i < newReport.length; i++) {
      if (count[newReport[i].split(' ')[1]] >= k) {
          result[newReport[i].split(' ')[0]] += 1;
      }   
  }
  return Object.values(result);
}