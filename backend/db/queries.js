const pool = require("./pool")

async function getAllRows() {
    const { rows } = await pool.query("SELECT * FROM login_info");
    return rows;
}

async function getLoginInfo(email) {
    const query = "SELECT * FROM login_info WHERE email = $1";
    const { rows } = await pool.query(query, [email]);
    return rows;
}

async function getUser(username) {
    const query = "SELECT * FROM public.user WHERE username = $1";
    const { rows } = await pool.query(query, [username]);
    return rows;
}

async function addLoginInfo(email, password) {
    const query = "INSERT INTO login_info (email, password) VALUES ($1, $2)"
    await pool.query(query, [email, password]);
    const login_info = await getLoginInfo(email);
    return login_info[0].id;
}

async function addUser(username, major, loginID) {
    const query = "INSERT INTO public.user (username, major, login_info_id) VALUES ($1, $2, $3)"
    await pool.query(query, [username, major, loginID]);
    const user = await getUser(username);
    return user[0].id;
}

module.exports = { getAllRows, getLoginInfo, getUser, addLoginInfo, addUser };