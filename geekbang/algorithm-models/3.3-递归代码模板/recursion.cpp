// C/C++
void recursion(int level, int param) {
  // recursion terminator
  if (level > MAX_LEVEL) {
    // process result
    return ;
  }


  // process current logic
  process(level, param);


  // drill down
  recursion(level + 1, param);


  // reverse the current level status if needed
}
