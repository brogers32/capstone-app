const db = require("../db/queries.js");

const createUser = async (req, res) => {
    const username = req.body.username;
    const major = req.body.major;
    const email = req.body.email;
    const pass = req.body.password;
    let errorMessage = "";
    let created = false;
    const dbGetUser = await db.getUser(username);
    const dbGetLoginInfo = await db.getLoginInfo(email);
    if (dbGetUser.length > 0) {
        errorMessage = "username already exists";
    }
    else if (dbGetLoginInfo.length > 0) {
        errorMessage = "email already exists";
    }
    else if (email.split("@")[1] != "uwm.edu") {
        errorMessage = "must use a uwm email address";
    }
    else {
        const loginID = await db.addLoginInfo(email, pass);
        await db.addUser(username, major, loginID);
        created = true;
    }
    res.send({created: created, errorMessage: errorMessage});
}

module.exports = { createUser };