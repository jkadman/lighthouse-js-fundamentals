const stations = [
  ['Chef Rons', 30, 'Restaurant'],
  ['Britannia', 40, 'Community Centre'],
  ['Lord Bing', 100, 'School'],
  ['Best Falafel', 10, 'Restaurant'],
  ['Vantech', 100, 'School'],
];




//let goodStations = [];



/*function chooseStations (stations) {
  for (const station of stations) {
   if (station[2] === 'School' || station[2] === 'Community Centre' 
        && station[1] >= 20 ) {
          console.log(station[0])
        } else {
          return console.log(station[0]);
        };
      } 
    }

console.log(chooseStations(stations));
*/


function chooseStations (stations) {
  let goodStations = [];
  let badStations = [];
  for (const station of stations) {
    const capacity = station[1];
    const type = station[2];
    if ((capacity >= 20) && (type === 'School' || type === 'Community Centre')) {
      goodStations.push(station[0])
    } else {
      badStations.push(station[0]);
    }
  }
  return goodStations; 
}

console.log(chooseStations(stations));