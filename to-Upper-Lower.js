'ABababc'.replace( /\w/g, function(a){ 
  // 把a转成大写，如果 a === a 说明它本身是大写的
  if(a.toUpperCase() === a){ 
    return a.toLowerCase();
  }else{
    return a.toUpperCase();
  }
 });
