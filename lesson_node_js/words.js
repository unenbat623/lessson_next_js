const fs = require("fs");

console.log("start of file read");

fs.readFile(
  "test.txt",
  { encoding: "utf8" },
  (err, data) => {
    if (err) {
      console.log(`ERROR:${err}`);

      return;
    }
    const wc = data.length;
    console.log("wc", wc);
    const spaceSplit = data.split(" ");
    console.log("niit ugiin too: ", spaceSplit.length);
    console.log("niit ugiin too: ", spaceSplit);
  },
  100
);
console.log("SM:", wc);
