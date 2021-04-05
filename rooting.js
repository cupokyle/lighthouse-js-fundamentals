// const judgeVegetable = function (vegetables, metric) {
//   const newVegs = [];
//   const newVegs2 = [];
//   if (metric === "redness") {
//     let i = 0;
//     while (i < vegetables.length) {
//       newVegs.push(vegetables[i].redness)
//       i++
//     }
//     newVegs.sort((a, b) => b - a);
//   } else if (metric === "plumpness") {
//     let j = 0;
//     while (j < vegetables.length) {
//       newVegs2.push(vegetables[j].plumpness)
//       j++.s
//     }
//     newVegs2.sort((c, d) => d - c);
//   }
//   if (metric === "redness"){
//     for (let red = 0; red < vegetables.length; red++) {
//       if (vegetables[red].redness === newVegs[0]) {
//         return vegetables[red].submitter;
//       }
//     }
//   } else if (metric === "plumpness") {
//     for (let plump = 0; plump < vegetables.length; plump++) {
//       if (vegetables[plump].plumpness === newVegs2[0]) {
//         return vegetables[plump].submitter;
//       }
//     }

//   }
// }

const judgeVegetable = function (vegetables, metric) {
  let redWinner = vegetables[0];
  let plumpWinner = vegetables[0];
  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i].redness > redWinner.redness) {
      redWinner = vegetables[i];
    } else if (vegetables[i].plumpness > plumpWinner.plumpness) {
      plumpWinner = vegetables[i];
    }
  }
  if (metric === "redness") {
    return redWinner.submitter;
  } else if (metric === "plumpness") {
    return plumpWinner.submitter;
  }
}



const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 7,
    plumpness: 1
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 9,
    plumpness: 3
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 1,
    plumpness: 9
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));