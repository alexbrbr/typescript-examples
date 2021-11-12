// 1) les types de base : string, number, boolean
// -----------------------------------------------------

// let a = "lol";
// console.log(a * 2);
// a = 2;

// console.log(a);

// const number = 1;
// const multiple = number * 2;
// const multipleLol = number * false;
// const multipleLol2 = number * true;

// console.log(number);
// console.log(multipleLol);
// console.log(multipleLol2);

// const isFunny = true;
// const test = isFunny && "";
// const test1 = isFunny && " ";
// const test2 = isFunny && 0;
// const test3 = isFunny && 1;
// const test4 = isFunny && {};
// const test5 = isFunny && [];

// const test = isFunny || "";
// const test1 = isFunny || " ";
// const test2 = isFunny || 0;
// const test3 = isFunny || 1;
// const test4 = isFunny || {};
// const test5 = isFunny || [];

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
// -----------------------------------------------------

// const isEven = (number) => number % 2 === 0;
// console.log("isEven(1): ", isEven(1));
// console.log("isEven(2): ", isEven(2));
// console.log('isEven("2"): ', isEven("2"));
// console.log('isEven("WAT"): ', isEven("WAT"));
// console.log("isEven(true): ", isEven(true));
// console.log("isEven(false): ", isEven(false));

// const hasFileExtension = (fileName, extension) => {
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

// 3) les tableaux
// -----------------------------------------------------

// const animalNames = ["mimi", "chewie", "boulie"];
// animalNames.push(123);

// // console.log(animalNames);
// const wtf = [1, 2, "3", , [], null, undefined, true];
// console.log("wtf", wtf);

// const number = [1, 2, 3, 4];
// console.log("number", number);

// const double = (num) => num * 2;

// console.log(
//   "double(number)",
//   number.map((n) => double(n))
// );
// console.log(
//   "double(wtf)",
//   wtf.map((n) => double(n))
// );

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

// const singers = [singer, singer2, singer3];

// console.log(singers.filter((singer) => singer.alive === false));
