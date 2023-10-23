const express = require("express");
const fs = require("fs");
const { parse } = require("path");

const app = express();
app.use(express.json()); //middleware

app.get("/", (request, response) => {
  const content = fs.readFileSync("test.txt", { encoding: "utf-8" });
  const count = content.split("").length;
  response.send("Hello FROM Express Server - " + count);
});

app.get("/wordCount", (req, res) => {
  const content = fs.readFileSync("test.txt", { encoding: "utf-8" });
  const count = content.split("").length;

  res.send("Count - " + count);
});

app.get("/users/:userId", (request, response) => {
  const { userId } = request.params;
  console.log("UI", userId);
  const findUser = users.find((user) => user.id === Number(userId));
  console.log("FU", findUser);
  if (findUser.length === 0) {
    response.status(404).json({ error: "User not found" });
  } else {
    response.status(200).json({ message: "User is found", user: findUser[0] });
  }
});
app.get("/users", (request, response) => {
  const { users } = JSON.parse(
    fs.readFileSync("users.json", { encoding: "utf-8" })
  );
  response.status(200).json({ message: "all user", users });
});

app.post("/users", (request, response) => {
  console.log("body", request.body);
  const body = request.body;
  const newUser = { id: users.length + 1, username: body.name };
  users.push(newUser);
  response.status(200).json({ message: "all user", users });
});
app.listen(8008, () => console.log(`server is  listening at 8008`));
