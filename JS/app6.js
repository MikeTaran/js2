function redarr(arr) {
    // your code
    let obj = {}
  let arr1 = [...new Set(arr.sort())];
  for (let i=0; i<arr1.length;i++){
    obj[i.toString()] = arr1[i];
  }

   return obj
    }

  console.log(
    redarr(["BBC3","BBC1","BBC2","MTV"])

  );