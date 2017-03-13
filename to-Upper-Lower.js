'ABababc'.replace( /\w/g, function(a){ 
  if(a.toUpperCase() === a){ 
    return a.toLowerCase() 
  }else{
    return a.toUpperCase() 
  }
 });
