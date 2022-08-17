const stations = [
  ['Chef Rons', 30, 'Restaurant'],
  ['Britannia', 40, 'Community Centre'],
  ['Lord Bing', 100, 'School'],
  ['Best Falafel', 10, 'Restaurant'],
  ['Vantech', 100, 'School'],
];




//let goodStations = [];
//let badStations = [];


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
  for (const station of stations) {
    const capacity = station[1];
    const type = station[2];
    if ((capacity >= 20) && (type === 'School' || type === 'Community Centre')) {
      console.log(station[0])
    } else {
      console.log(false);
    }
  }
}

console.log(chooseStations(stations));