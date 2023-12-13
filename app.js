const mysql = require('mysql2');

// Create a connection to the MySQL server
const connection = mysql.createConnection({
  host: 'localhost',    // Replace with your MySQL server host
  user: 'root',         // Replace with your MySQL username
  password: 'Vishwas141@',     // Replace with your MySQL password
  database: 'vishwas1',       // Replace with your MySQL database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');

  // Perform database operations here

  // For example, let's run a SELECT query
  connection.query('SELECT * FROM student', (err, results, fields) => {
    if (err) {
      console.error('Error querying the database:', err);
      return;
    }

    // Log the fetched data to the console
    console.log('Data from the table:');
    console.log(results);

    // Close the connection when done
    connection.end((err) => {
      if (err) {
        console.error('Error closing MySQL connection:', err);
      }
      console.log('Connection closed');
    });
  });
});
