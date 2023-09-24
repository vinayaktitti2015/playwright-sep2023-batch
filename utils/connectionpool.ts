const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  databse: "test",
  waitForConnections: true,
  connectionTimeout: 10,
  maxidle: 10,
});

pool.query(`SELECT * FROM USERS`, function (err: any, result: any) {
  if (err) {
    throw err;
  } else {
    return result;
  }
});
