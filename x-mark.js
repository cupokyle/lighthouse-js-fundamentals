function finalPosition(moves) {
  let currentSpot = [0,0]
  for (let move of moves) {
    switch(move)
    {
    case 'north':
      ++currentSpot[1];
      break;
    case 'south':
      --currentSpot[1];
      break;
    case 'east':
      ++currentSpot[0];
      break;
    case 'west':
      --currentSpot[0];
      break;
    }
  }
  return currentSpot;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));