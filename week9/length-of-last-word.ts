function lengthOfLastWord(s: string): number {
  return s.trim().split(' ').slice(-1)[0].length;
};