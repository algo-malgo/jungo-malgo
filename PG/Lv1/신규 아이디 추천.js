function solution(new_id) {
  let id = new_id
    .toLowerCase()
    .replace(/[^\w\d-_.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/, "")
    .padEnd(1, "a")
    .slice(0, 15)
    .replace(/\.$/, "");
  return id.padEnd(3, id.slice(-1));
}
