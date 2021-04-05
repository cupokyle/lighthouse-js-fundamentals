const smartGarbage = function(trash, bins) {
  let binTotal = {
    waste: bins.waste,
    recycling: bins.recycling,
    compost: bins.compost
  }
  const newUnit = Object.keys(binTotal);
  if (newUnit[0] === trash) {
    binTotal.waste++;
  } else if (newUnit[1] === trash) {
    binTotal.recycling++;
  } else if (newUnit[2] === trash) {
    binTotal.compost++;
  }
  return binTotal;

}

console.log(smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 }))