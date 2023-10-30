const express = require("express");
const { log } = require("./middleware/log");
const userRouter = require("./routes/userRoutes");

const PORT = 8008;
const app = express();

app.use(express.json()); //middleware
app.use(log);

//api/users
app.use("/api/users", userRouter);

app.listen(PORT, () => console.log(`Server is  Listening at ${PORT} Port`));
