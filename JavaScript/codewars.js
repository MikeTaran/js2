function sameCase(a, b){
      // Check if either character is not a letter
  if (!(/[a-zA-Z]/).test(a) || !(/[a-zA-Z]/).test(b)) {
    return -1;
  }
  
  // Check if both characters are the same case
  if ((a === a.toLowerCase() && b === b.toLowerCase()) ||
      (a === a.toUpperCase() && b === b.toUpperCase())) {
    return 1;
  }
  
  // If both characters are letters, but not the same case
  return 0;
  }


  console.log(sameCase('a', 'g'));