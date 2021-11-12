// 1) les types de base : string, number, boolean
// -----------------------------------------------------
// const zizou: Player = {
//   position: "midfielder",
//   jerseyNumber: 10,
//   name: "Zinedine Zidane",
// };
// const kyky: Player = {
//   position: "striker",
//   jerseyNumber: 7,
//   name: "Kylian Mbappé",
// };
// const fabulousFab: Player = {
//   position: "goalKeeper",
//   jerseyNumber: 1,
//   name: "Fabien Barthez",
// };
// const rotaldo: Player = {
//   position: "striker",
//   name: "Rotaldo",
// };
// const players = [zizou, kyky, fabulousFab];
// const getBiography = (player: Player): string => {
//   let biography = "";
//   biography = `Player ${player.name} plays at the position of ${player.position} with the jersey n° ${player.jersey}.`;
//   // TODO: add sentence based on player position
//   //   switch(player.position) {
//   //       case
//   //   }
//   return biography;
// };
// console.log(players.map(getBiography).join("\n"));
// 6) les generics
// -----------------------------------------------------
var letters = ["a", "b", "c", "d"];
var numbers = [1, 2, 3];
// const first = (arr: any[]) => arr[0];
// const firstLetter = first(letters);
// const firstNumber = first(numbers);
// function genericFirst<T>(arr: Array<T>): T {
//   return arr[0];
// }
// const typedFirstLetter = genericFirst(letters);
// const typedFirstNumber = genericFirst(numbers);
// const typedFirstPlayer = genericFirst(players);
function map(array, mapper) {
    var mappedArray = [];
    for (var element in array) {
        mappedArray.push(mapper(array[element]));
    }
    return mappedArray;
}
var double = function (num) { return num * 2; };
var toUpperCase = function (str) { return str.toUpperCase; }; //oops
console.log(map(numbers, double));
// console.log(map(letters, double)); // nope
// console.log(map(letters, toUpperCase));
// 7) les utility types
// -----------------------------------------------------
var colors = {
    shamrock: "#3DD598",
    orange: "#FF974A",
    navy: "#031D42",
    white: "#FFFFFF"
};
var getHexadecimalCode = function (colorName) {
    var hexadecimalValue = colors[colorName];
    return hexadecimalValue;
};
console.log(getHexadecimalCode('shamrock'));
var zizouJersey = {
    jerseyNumber: 10,
    name: 'ZZ',
    color: "white"
};
