const db = require("../db/queries.js");

const createUser = async (req, res) => {
    const username = req.body.username
    const email = req.body.email;
    const pass = req.body.password;
    const confPass = req.body.password;
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

module.exports = { createUser };