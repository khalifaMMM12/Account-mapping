const sql = require('mssql');

var config = {
  user: "mmmuhammad",
  password: "Khalifa12",
  server: "ITABJ_L526\\SQLEXPRESS",
  database: "ACCOUNT_MAPPING",
  port: 1433,
  options: {
      trustedconnection: true,
       enableArithAbort: true,
       encrypt: false,
       instancename: "", },
};

// const config = {
//   server: 'ITABJ_L526\\SQLEXPRESS',
//   port: 1433,
//   authentication: {
//     type: 'default',
//     options: {
//       userName: 'Pmmmuhammad',
//       password: 'Khalifa12',
//     },
//   },
//   options: {
//     encrypt: true, // Use this if you're on Windows Azure
//   },
// };


// const pool = new sql.ConnectionPool(config);
// const poolConnect = pool.connect();

// poolConnect
//   .then(() => {
//     console.log('Connected to the database');
//     // Your code to interact with the database
//   })
//   .catch((err) => {
//     console.error('Database connection error:', err);
//   });

module.exports = config;