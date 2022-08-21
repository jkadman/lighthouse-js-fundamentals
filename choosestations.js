/*const stations = [
  ['Chef Rons', 30, 'restaurant'],
  ['Britannia', 40, 'community centre'],
  ['Lord Bing', 100, 'school'],
  ['Best Falafel', 10, 'restaurant'],
  ['Vantech', 100, 'school'],
]; */

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
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
  //let badStations = [];
  for (const station of stations) {
    const capacity = station[1];
    const type = station[2];
    if ((capacity >= 20) && (type === 'school' || type === 'community centre')) {
      goodStations.push(station[0])
    } /* else {
      badStations.push(station[0]);
    } */
  }
  return goodStations; 
}

console.log(chooseStations(stations));