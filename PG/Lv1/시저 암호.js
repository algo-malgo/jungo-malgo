function solution(s, n) {

  const arr = Array.from(s).map(ch => {
      if (ch === ' ') return ch;
      const check = ch === ch.toUpperCase() ? 90 : 122;
      const tmpCh = ch.charCodeAt(0) + n;
      const newCh = tmpCh > check ? tmpCh - 26 : tmpCh;
      return String.fromCharCode(newCh);
  })

  return arr.join('');
}