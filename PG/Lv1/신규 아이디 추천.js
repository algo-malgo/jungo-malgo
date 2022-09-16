function solution(new_id) {
  new_id = new_id.toLowerCase();
  new_id = new_id.match(/[a-z0-9\-\_\.]/g).join('');
  new_id = new_id.replace(/\.{2,}/g, '.')
  new_id = new_id.replace(/^\.|\.$/, '');
  new_id = new_id.length === 0 ? 'a' : new_id;
  new_id = new_id.length >= 16 ? new_id.slice(0, 15) : new_id; 
  new_id = new_id.replace(/\.$/, ''); 
  new_id = new_id.length <= 2 ? new_id.padEnd(3, new_id.slice(-1)) : new_id;
  return new_id;
}