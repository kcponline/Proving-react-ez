// initial entry.js bundling test
// document.write("It works. The edit bundling is working");

// extra file content.js routing test of modules. only this file
// is executed and requires all other modules
document.write(require("./content.js"));