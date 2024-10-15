const { Pool } = require("pg");

module.exports = new Pool({
    host: "localhost",
    user: "brennanrogers",
    database: "social_app_db",
    password: "hellokitty",
    port: 5432
});