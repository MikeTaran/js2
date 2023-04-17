//https://www.codewars.com/kata/586538146b56991861000293/train/javascript

const NATO = {
    'A': 'Alfa', 'B': 'Bravo', 'C': 'Charlie',
    'D': 'Delta', 'E': 'Echo', 'F': 'Foxtrot',
    'G': 'Golf', 'H': 'Hotel', 'I': 'India',
    'J': 'Juliett', 'K': 'Kilo', 'L': 'Lima',
    'M': 'Mike', 'N': 'November', 'O': 'Oscar',
    'P': 'Papa', 'Q': 'Quebec', 'R': 'Romeo',
    'S': 'Sierra', 'T': 'Tango', 'U': 'Uniform',
    'V': 'Victor', 'W': 'Whiskey', 'X': 'Xray',
    'Y': 'Yankee', 'Z': 'Zulu'
  };
  
  function to_nato(words) {
    let arr = words.split('').filter(x=> x!== ' ')
    let r = ''
    arr.map((x,i)=>{
      let letter = x.toLowerCase()
      let coded = NATO[letter]
      if(i !== arr.length - 1 && coded) r+=coded + ' '
      else if(i == arr.length- 1 && coded) r += coded
      else if(i !== arr.length - 1 && !coded) r += letter + ' '
      else r+=letter
    })
    return r
  }
  //
  console.log(to_nato('If, you can read?'));
//
