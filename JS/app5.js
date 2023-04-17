function totalPrice(toysQty, toysPrice){
  let totalPriceLegos = toysQty.legos * toysPrice.legos;
  let totalPriceCars = toysQty.cars * toysPrice.cars;
  let totalPricePuzzles = toysQty.puzzles * toysPrice.puzzles;
  let totalToysQuantity = toysQty.legos + toysQty.cars + toysQty.puzzles;
  let totalPrice = totalPriceLegos + totalPriceCars + totalPricePuzzles;
  return {totalPriceLegos: totalPriceLegos, totalPriceCars: totalPriceCars, totalPricePuzzles: totalPricePuzzles, totalToysQuantity: totalToysQuantity, totalPrice: totalPrice};
  }
  
  console.log(totalPrice(
  {legos: 5, cars: 7, puzzles: 15},
  {legos: 8, cars: 12, puzzles: 25}
  
  ));