const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const { readFile, writeFile } = require("../utilis/fileHandler");

const getAllUser = (req, res) => {
  const users = readFile("users.json");

  res.status(200).json({ message: "success", users });
};

const getUserById = (req, res) => {
  const users = readFile("users.json");
  const findUser = users.filter((user) => user.id === req.params.userId);

  if (findUser.length === 0) {
    res.status(400).json({ message: `${userId} тай хэрэглэгч олдсонгүй.` });
  } else {
    res.status(200).json({ message: "success", user: findUser[0] });
  }
};

const createUser = (req, res) => {
  const newUser = { id: uuidv4(), ...req.body };
  const users = readFile("users.json");

  users.push(newUser);

  writeFile("users.json", users);
  res.status(201).json({ message: "success" });
};

const updateUserById = (req, res) => {
  const { userId } = req.params;
  const users = readFile("users.json");

  let index = users.findIndex((user) => user.id === userId);

  if (index === -1) {
    res.status(400).json({ message: `${userId} тай хэрэглэгч олдсонгүй.` });
  } else {
    users[index] = { ...users[index], ...req.body };
    writeFile("users.json", users);
    res.status(200).json({
      message: `${userId} тай хэрэглэгчийг шинэчиллээ.`,
      user: users[index],
    });
  }
};

const deleteUserById = (req, res) => {
  const { userId } = req.params;
  const users = readFile("users.json");
  const index = users.findIndex((el) => el.id === userId);

  if (index < 0) {
    res.status(400).json({ message: `${userId} тай хэрэглэгч олдсонгүй.` });
  } else {
    users.splice(index, 1);

    writeFile("users.json", users);
    res.status(200).json({ message: `${userId} тай хэрэглэгч устгалаа.` });
  }
};

module.exports = {
  createUser,
  getAllUser,
  getUserById,
  updateUserById,
  deleteUserById,
};
