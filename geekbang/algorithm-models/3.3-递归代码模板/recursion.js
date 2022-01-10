// JavaScript
const recursion = (level, params) =>{
   // recursion terminator
   if(level > MAX_LEVEL){
     process_result
     return
   }
   // process current level
   process(level, params)
   //drill down
   recursion(level+1, params)
   //clean current level status if needed

}
