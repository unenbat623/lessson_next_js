//built in
const fs = require("fs");

console.log("start of file read");

fs.readFile("test.txt", { encoding: "utf8" }, (err, data) => {
  if (err) {
    console.log(`ERROR:${err}`);

    return;
  }

  console.log("Data", data);
});

// const data = fs.readFileSync("test.txt", { encoding: "utf-8" });
// console.log("dd", data);

// fs.writeFile("test.txt", "RELX", (err) => {
//   if (err) {
//     console.log("Write Err", err);
//   }
//   console.log("write succses");
// });

// fs.writeFileSync("test.txt", "RELX", (err) => {
//   if (err) {
//     console.log("Write Err", err);
//   }
//   console.log("write succses");
// });

// console.log("end of file read");

console.log("end of file read");
