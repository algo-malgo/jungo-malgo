function solution(s) {
  return s.split(" ").map(word => 
      word.split("").map((ch, idx) => idx % 2 ? ch.toLowerCase() : ch.toUpperCase()).join("")
  ).join(" ")
}