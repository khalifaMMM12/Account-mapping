var Agent = require('./agent')
const dboperations = require('./dboperations');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();
const sql = require('mssql');
var config = require('./dbconfig');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((req,res,next) =>{
    console.log('working middleware');
    next();
})

router.route('/agent').get((req, res) =>{
    dboperations.getAgents().then(result => {
        
        res.json(result);
        
    })
})

router.route('/agent/:id').get((req, res)=>{
    dboperations.getAgent(req.params.id).then(result => {
        res.json(result);
        console.log("Agent with id: ${agent}");
    })
})

router.route('/agent').post((req, res) => {
    let agent = {...req.body}
    dboperations.addAgent(agent).then(result => {
        res.status(201).json(result);
    })
})

router.route('/agent/:id').delete((req, res) => {
    const agentId = req.params.id;

    dboperations.deleteAgent(agentId).then(result => {
        if (result && result.rowsAffected > 0) {
            res.status(200).json({ message: 'Agent deleted successfully' });
        } else {
            res.status(404).json({ message: 'Agent not found' });
        }
    }).catch(error => {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    });
});


router.route('/agent/:id').put((req, res) => {
    const agentId = req.params.id;
    const updatedAgent = { ...req.body, AgentKey: agentId };
    dboperations.updateAgent(updatedAgent).then(result => {
            res.status(200).json(result);
    });        
});


// Login Router
app.post('/api/login',  async (req, res) => {
    const { username, password } = req.body

    console.log(username, password)
    let pool = await sql.connect(config);
    
   let result = await pool.request()
    .input('username', username)
    .query(`SELECT * FROM Users WHERE username = '${username}'`)

  
    if (result.recordset.length === 0) {
      res.status(401).json('Invalid username');
    } else {
      
      //const match = await bcrypt.compare(password, result.recordset[0].password);
      const match = result.recordset[0]['password'] === password;
      
      if (match) {
        res.status(200).json({msg:'Login successful', code:200});
      } else {
        
        res.status(200).json({msg:'Invalid password', code:100});
      }
    }
      
  });



//   app.post('/read', (req, res)=>{

//     
//   })

router.route('/read').post((req, res) => {
    console.log("hello") 
});
  

// router.route('/agent').put((req, res) => {
//     const agentId = req.params.id;
//     const updatedAgent = { ...req.body, AgentKey: agentId };
//     dboperations.updateAgentMore(updatedAgent).then(result => {
//             res.status(200).json(result);
//             console.log('updating..');
//     });        
// });


var port = process.env.PORT || 3000;
app.listen(port);
console.log('Order API is running at ' + port);

// dboperations.getAgentTable().then((result) => {
//     console.log(result);
// })