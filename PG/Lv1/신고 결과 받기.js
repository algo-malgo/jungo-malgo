function solution(id_list, report, k) {
  const count = id_list.reduce((acc, cur) => {
      acc[cur] = 0;
      return acc;
  }, {});
  let result = Array.from({length: id_list.length}, () => 0);
  const newReport = [...new Set(report)];
  for (let i = 0; i < newReport.length; i++) 
      count[newReport[i].split(' ')[1]] += 1;
  for (let i = 0; i < newReport.length; i++) 
      if (count[newReport[i].split(' ')[1]] >= k) 
          result[id_list.indexOf(newReport[i].split(' ')[0])] += 1;
  return result;
}