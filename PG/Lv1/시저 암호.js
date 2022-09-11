function solution(s, n) {

  const arr = Array.from(s).map(ch => {
      if (ch === ' ') return ch;
      const charCode = ch.charCodeAt(0);
      if (ch === ch.toUpperCase()) {
          const ACode = 'A'.charCodeAt(0);
          return String.fromCharCode(newAscii = ACode + (charCode - ACode + n) % 26);
      } else {
          const aCode = 'a'.charCodeAt(0);
          return String.fromCharCode(newAscii = aCode + (charCode - aCode + n) % 26);
      }
  })

  return arr.join('');
}