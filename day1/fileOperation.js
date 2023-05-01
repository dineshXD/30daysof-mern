const fs = require("fs");
const data = "hello World";
//blocking read and write function
//u can see day 1 is printed after the file reading operation same for file writing operation
const output = fs.readFileSync("./sample.txt", "utf-8");
console.log(output);

fs.writeFileSync("./sample.txt", data);

//this is non blocking function so day 1 will be printed first
//instead of file output it will execute another code until file is read whole successfully
fs.readFile("./sample.txt", "utf-8", (data, err) => {
  if (err) return console.log(err);
  console.log(data);
});
console.log("Day 1");

//non blocking write function

fs.writeFile("./sample.txt", data, (err) => {
  if (err) return console.log(err);
});
