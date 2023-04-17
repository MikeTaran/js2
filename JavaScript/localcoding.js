function carPrice(basePrice, panoramicRoof, parkingSensors, leatherInterior, navigation, multimedia, climatControl, heatedSeats){
    const price = basePrice * (1 + (Number(parkingSensors) + Number(leatherInterior) + Number(navigation) + Number(multimedia) + Number(climatControl) + Number(heatedSeats)) * 0.1);
return price;

}
console.log(carPrice(100,true, true, true, true, true, true, true, ));