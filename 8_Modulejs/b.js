import myMain, { sum } from "./a.js";

console.log("B file runing");

export let x = 4;
let y = 10;
console.log(x, y);

let p = sum(x, y);
myMain();

console.log(p);

var z = "Abc";

console.log("B file completed");

("../filename"); //parent folder
("./filename"); //current folder
("../../header/navbar.js"); // parent of parent which has header folder, has navbar.js
