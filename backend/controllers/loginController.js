const db = require("../db/queries.js");

const renderLogin = async (req, res) => {
    console.log("in render login");
    const tableData = await db.getAllRows();
    console.log(tableData);
    res.send(tableData);
};

const authenticateUser = async (req, res) => {
    const email = req.body.email;
    const pass = req.body.password;
    const rows = await db.getUser(email);
    if (rows.length > 1) {
        res.send({auth: false})
    }
    else if (rows.length < 1) {
        res.send({auth: false})
    }
    else {
        user = rows[0];
        if (user.password != pass) {
            res.send({auth: false})
        }
        else {
            res.send({auth: true})
        }
    }
}

module.exports = { renderLogin, authenticateUser };