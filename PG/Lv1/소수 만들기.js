function getCombinations(arr, select) {
  const results = [];
  if (select === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, select - 1); 
    const attached = combinations.map((combination) => [fixed, ...combination]); 
    results.push(...attached);
  });

  return results; 
};

function solution(nums) {
    let answer = 0;
    const combs = getCombinations(nums, 3);
    
    for (let comb of combs) {
        const sum = comb.reduce((a, b) => a + b, 0);
        let prime = 1;
        for (let i = 2; i <= sum ** 0.5; i++) {
            if (sum % i === 0) {
                prime = 0;
                break;
            }
        }    
        if (prime) answer += 1;
    }
    
    return answer;
}