const mysql = require("mysql");
const pool =mysql.createPool({
    // port:process.env.DB_PORT,
    // host:process.env.DB_HOST,
    // user:process.env.DB_USER,
    // password:process.env.DB_pass,
    // database:process.env.MYSQL_DB,
    // connectionLimit:10

    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'YourRootPassword',
    database: 'newdb'
})

console.log("connected")
module.exports =pool;