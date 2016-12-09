// initial entry.js bundling test
// document.write("It works. The edit bundling is working");

// extra file content.js routing test of modules. only this file
// is executed and requires all other modules
// the path remains the same even when moved together
// with the main entry.js file
// the cli has to be webpack ./app/entry.js bundle.js
require("!style!css!../assets/css/style.css");
document.write(require("./content.js"));