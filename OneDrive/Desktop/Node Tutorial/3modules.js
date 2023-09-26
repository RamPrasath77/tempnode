//CommonJs, veryfile is module by default
// modules - encapsulated code (only share minimum)
const names = require("./4names");
const sayHi = require("./5utils");
const data = require("./6alternativeflavour");
require("./7mindgrenade");
console.log(data);

sayHi("Ram");
sayHi(names.john);
sayHi(names.peter);
