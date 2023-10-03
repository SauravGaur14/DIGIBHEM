export function amenetiesCostCalculator(days, ac, locker) {
    let amenetiesCost = 0;
    if (ac) amenetiesCost += 1000 * days;
    if (locker) amenetiesCost += 300 * days;
  
    return amenetiesCost;
  }
  
  export function roomCostCalculator(roomType, days) {
    let roomCost = roomType === "Delux" ? 2500 * days : 4000 * days;
    return roomCost;
  }
  
  export function totalCostCalculator(roomType, totalPersons, days, amenities) {
    let { ac, locker } = amenities;
    let amenitiesCost = amenetiesCostCalculator(days, ac, locker);
    let roomCost = roomCostCalculator(roomType, days);
  
    if (totalPersons > 2) roomCost += roomCost * (days - 2);
  
    let totalCost = roomCost + amenitiesCost;
    return totalCost;
  }
  