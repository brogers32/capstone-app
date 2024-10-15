const express = require("express");
const loginController = require("../controllers/loginController.js")

const loginRouter = express.Router();

loginRouter.get("/", loginController.renderLogin);
loginRouter.post("/", loginController.authenticateUser);
// loginRouter.post("/new", loginController.addUser);

module.exports = loginRouter;