const mysql = require("mysql2");

export const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "ipropertydb",
});

connection.query(
  `SELECT * FROM USERS WHERE email = 'john@yahoo.com'`,
  function (err: any, result: any) {
    if ((result.rows.length = !0)) {
      // db connection succeeded
    } else {
      throw err;
    }
  }
);
