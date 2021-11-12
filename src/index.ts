// 1) les types de base : string, number, boolean
// -----------------------------------------------------

// const text1 = "ceci est une chaine";

// let text2: string;
// text2 = "en fait c'est quoi ça :)";
// console.log(text2);

// text2 = text2 * 2;
// console.log(text2);

// const pi = 3.14;
// let number: number;
// number = 1
// const multiple = number * 2;
// const multipleLol = number * false;
// const multipleLol2 = number * true;

// console.log(multipleLol);
// console.log(multipleLol2);

// const isFunny = true;
// const test: boolean = isFunny && "";
// const test1: boolean = isFunny && " ";
// const test2: boolean = isFunny && 0;
// const test3: boolean = isFunny && 1;
// const test4: boolean = isFunny && {};
// const test5: boolean = isFunny && [];

// const test = isFunny && Boolean("");
// const test1 = isFunny && Boolean(" ");
// const test2 = isFunny && Boolean(0);
// const test3 = isFunny && Boolean(0.01);
// const test4 = isFunny && Boolean({});
// const test5 = isFunny && Boolean([]);

// console.log({ test });
// console.log({ test1 });
// console.log({ test2 });
// console.log({ test3 });
// console.log({ test4 });
// console.log({ test5 });

// 2) les fonctions

// const isEven = (num: number): boolean => num % 2 === 0;
// console.log("isEven(1): ", isEven(1));
// console.log("isEven(2): ", isEven(2));
// console.log('isEven("2"): ', isEven("2"));
// console.log('isEven("WAT"): ', isEven("WAT"));

// const hasFileExtension = (fileName: string, extension: string): boolean => {
//   return fileName.includes(`.${extension}`);
// };
// console.log(
//   'hasFileExtension("file.txt", "txt")',
//   hasFileExtension("file.txt", "txt")
// );
// console.log(
//   'hasFileExtension("file.csv", "txt")',
//   hasFileExtension("file.csv", "txt")
// );

// console.log(
//   'hasFileExtension("file0.csv", 0)',
//   hasFileExtension("file0.csv", 0)
// );

// const logger = (message: string, separator = "-"): void => {
//   console.log(Array(10).fill(separator).join(""));
//   console.log(message);
//   console.log(Array(10).fill(separator).join(""));
//   return true;
// };

// type Formatter = (str: string) => string;

// const lowercase: Formatter = (str) => str.toLowerCase();
// const uppercase: Formatter = (str) => str.toUpperCase();
// const trim: Formatter = (str) => str.trim();
// const exclamation: Formatter = (str) => str + "!!!!";

// const test = trim(uppercase(exclamation("  hehe  "))); // c'est tout inféré
// console.log(test);
// logger("yolo");
// logger("yolo2", "@@@");

// 3) les tableaux
// -----------------------------------------------------

// const animalNames = ["mimi", "chewie", "boulie"];
// animalNames.push(123); // nope, pas de number ici

// console.log(animalNames);

// const wtf = [1, 2, "3", , [], null, undefined, true];
// console.log(wtf);
// const typedWtf: (string | number | any[] | boolean)[] = [
//   1,
//   2,
//   "3",
//   ,
//   [],
//   null,
//   undefined,
//   true,
// ];
// console.log(typedWtf);

// const number: number[] = [1, 2, 3, 4];
// console.log(number);

// const double = (num: number) => num * 2;

// console.log(number.map((n) => double(n)));
// console.log(typedWtf.map((n) => double(n)));

// 4) les objets
// -----------------------------------------------------

// const singer = {
//   name: "David Bowie",
//   alive: false,
// };

// const singer2 = {
//   name: "Alex Turner",
//   alive: true,
// };

// const singer3 = {
//   name: "Elvis Presley",
// };

// console.log(singer.firstname);
// console.log(singer.name);

// const singers = [singer, singer2, singer3];

// console.log(singers.filter((singer) => singer.alive === false));

// const singers2: { name: string; alive: boolean }[] = [singer, singer2, singer3];

// interface Singer {
//   name: string;
//   alive: boolean;
// }
// const singers3: Singer[] = [singer, singer2, singer3];

// type Singer = {
//   name: string;
//   alive: boolean;
// };
// const singers4: Singer[] = [singer, singer2, singer3];

// https://github.com/typescript-cheatsheets/react

// 5) les unions types
// -----------------------------------------------------

type Player = {
  position: string;
  //   position: 'midfielder' | 'striker' | 'goalKeeper';
  jerseyNumber?: number;
  name: string;
};

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

const letters = ["a", "b", "c", "d"];
const numbers = [1, 2, 3];

// const first = (arr: any[]) => arr[0];

// const firstLetter = first(letters);
// const firstNumber = first(numbers);

// function genericFirst<T>(arr: Array<T>): T {
//   return arr[0];
// }

// const typedFirstLetter = genericFirst(letters);
// const typedFirstNumber = genericFirst(numbers);
// const typedFirstPlayer = genericFirst(players);

function map<T>(array: Array<T>, mapper: (elem: T) => T): Array<T> {
  let mappedArray = [];
  for (const element in array) {
    mappedArray.push(mapper(array[element]));
  }
  return mappedArray;
}

const double = (num: number) => num * 2;
const toUpperCase = (str: string) => str.toUpperCase; //oops
console.log(map(numbers, double));
// console.log(map(letters, double)); // nope
// console.log(map(letters, toUpperCase));

// 7) les utility types
// -----------------------------------------------------

const colors = {
  shamrock: "#3DD598",
  orange: "#FF974A",
  navy: "#031D42",
  white: "#FFFFFF",
};

type ColorsType = typeof colors;
type ColorKeys = keyof ColorsType;

const getHexadecimalCode = (colorName : ColorKeys): string {
    const hexadecimalValue = colors[colorName];
    return hexadecimalValue;
}

console.log(getHexadecimalCode('shamrock'))

// type playerJerseyInfo = Required<Pick<Player, 'jerseyNumber' | 'name'>>
// type playerJerseyInfo = Omit<Player, 'position'>
// type playerJerseyInfo = Required<Omit<Player, 'position'>>

interface Jersey extends playerJerseyInfo {
    color: ColorKeys
}

const zizouJersey : Jersey = {
    jerseyNumber: 10,
    name: 'ZZ',
    color: "white"
}