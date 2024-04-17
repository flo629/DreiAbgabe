const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('/Kund.db');

// Perform database operations using the db object
db.all('SELECT * FROM my_table', (err, rows) => {
  if (err) {
    console.error(err);
  } else {
    console.log(rows);
  }
});

// Close the database connection when done
db.close();