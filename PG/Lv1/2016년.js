function solution(a, b) {
  const day = ['THU', 'FRI', 'SAT','SUN', 'MON', 'TUE', 'WED', ];    
  const lastDay = [31, 29, 31, 30, 31, 30 , 31, 31, 30, 31, 30, 31];
  return day[(lastDay.slice(0, a - 1).reduce((a, b) => a + b, 0) + b) % 7];
}