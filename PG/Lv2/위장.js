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

function solution(clothes) {    
    let answer = clothes.length;
    
    let type = {};
    for (let i = 0; i < clothes.length; i++) 
        type[clothes[i][1]] = (type[clothes[i][1]] || 0) + 1;
    let count = Object.values(type);
    if (count.length == 30) { return 1073741823; }
    
    for (let i = 2; i <= count.length; i++) {
        const combs = getCombinations(count, i);
        for (let j = 0; j < combs.length; j++) 
            answer += combs[j].reduce((acc, cur) => acc * cur, 1);
    }
   
    return answer;
}