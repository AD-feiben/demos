function toLowerCase(s: string): string {
  // native method
  // return s.toLowerCase();
  let str = '';
  let delta = 'a'.charCodeAt(0) - 'A'.charCodeAt(0);
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) >= 'A' && s.charAt(i) <= 'Z') {
      str += String.fromCharCode(s.charCodeAt(i) + delta);
    } else {
      str += s.charAt(i);
    }
  }
  return str;
};