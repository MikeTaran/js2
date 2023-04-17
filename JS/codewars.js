function boredom(staff){
  const score = {
accounts: 1,
 finance: 2,
 canteen: 10,
 regulation: 3,
 trading: 6,
 change: 6,
 IS: 8,
 retail: 5,
 cleaning: 4,
 'pissing about': 25
  }
  let val = ''
  let count = 0
  for (key in staff) {
    val = staff[key];
    if (val in score){
      count += score[val];
    }
  }
return count;
 }

 console.log(
  boredom({ tim: 'IS', jim: 'finance',
  randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
  katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
  alex: 'regulation', john: 'accounts', mr: 'canteen' })
 );
 // 'kill me now');