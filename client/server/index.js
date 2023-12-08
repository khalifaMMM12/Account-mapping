// const express = require('express')
// const app = express()
// const port = 3000
// const sql = require('mssql/msnodesqlv8');
// const config = require('./dbconfig')

// app.get('/', async (req, res) => {
//   const pool = await new sql.connect(config);
//   var result = await pool.request().query('Select * From dbo.AgentTable')
//   res.json(result.recordsets[0])
// })


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })