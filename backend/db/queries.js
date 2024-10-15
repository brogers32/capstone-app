const pool = require("./pool")

async function getAllRows() {
    const { rows } = await pool.query("SELECT * FROM login_info");
    return rows;
}

async function getUser(email) {
    const query = "SELECT * FROM login_info WHERE email = $1";
    const { rows } = await pool.query(query, [email]);
    return rows;
}

module.exports = { getAllRows, getUser };