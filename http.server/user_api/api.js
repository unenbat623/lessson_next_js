const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const PORT = 8008;
const app = express();

app.use(express.json());

app.get("/api/users", (req, res) => {
  res.send("GET all users");
  res.status(200).json({ messeage: "sucsess" });
});

app.post("/api/users", (req, res) => {
  const newUser = { id: uuidv4(), ...req.body };
  const { users } = JSON.parse(
    fs.readFileSync("users.json", { encoding: "utf-8" })
  );

  users.push(newUser);

  fs.writeFileSync("users.json", JSON.stringify({ users }), {
    encoding: "utf-8",
  });

  res.status(200).json({ messeage: "sucsess" });
});

app.put("/api/users/:userId", (req, res) => {
  const { userId } = req.params;
  const { users } = JSON.parse(
    fs.readFileSync("users.json", { encoding: "utf-8" })
  );

  const index = users.findIndex((el) => el.id === userId);

  if (index < 0) {
    res.status(400).json({ messeage: `${userId} тай хэрэглэгч bug.` });
  } else {
    users[index] = { userId, ...req.body };
    fs.writeFileSync("users.json", JSON.stringify({ users }), {
      encoding: "utf-8",
    });

    res.status(200).json({ messeage: `${userId} тай хэрэглэгч засагдлаа.` });
  }
});

app.delete("/api/users/:userId", (req, res) => {
  const { userId } = req.params;
  const { users } = JSON.parse(
    fs.readFileSync("users.json", { encoding: "utf-8" })
  );

  const index = users.findIndex((el) => el.id === userId);
  if (index < 0) {
    res.status(400).json({ messeage: `${userId} тай хэрэглэгч олдсонгүй.` });
  } else {
    users.splice(index, 1);

    fs.writeFileSync("users.json", JSON.stringify({ users }), {
      encoding: "utf-8",
    });

    res.status(200).json({ messeage: `${userId} тай хэрэглэгч устлаа.` });
  }
});

app.listen(PORT, () => console.log(`Server is  Listening at ${PORT} Port`));
