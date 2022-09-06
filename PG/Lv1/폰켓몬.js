function solution(nums) {
  const newNums = new Set(nums);
  return newNums.size > nums.length / 2 ? nums.length / 2 : newNums.size;
}