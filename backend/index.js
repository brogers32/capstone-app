const express = require("express")
const path = require("path");
const cors = require("cors");
const loginRouter = require("./routes/loginRoutes.js");
const registerRouter = require("./routes/registerRouter.js");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/login", loginRouter);
app.use("/register", registerRouter);

const PORT = 3005;
app.listen(PORT);