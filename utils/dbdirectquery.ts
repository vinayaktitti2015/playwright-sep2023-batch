const mysql = require("mysql2");
const data = require("data");

export const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "ipropertydb",
});

connection.query(
  `SELECT * FROM USERS WHERE email =` + data.email,
  function (err: any, result: any) {
    if ((result.rows.length = !0)) {
      // db connection succeeded
      return result;
    } else {
      throw err;
    }
  }
);
