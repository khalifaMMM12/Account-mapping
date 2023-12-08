var config = require('./dbconfig');
const sql = require('mssql');


async function getAgents(){
    try{
        let pool = await sql.connect(config);
        let products = await pool
        .request()
        .query('SELECT * FROM AgentTable');

        return products.recordset;
    }
    catch (error){

        console.log(error);
    }
}


async function getAgent(AgentKey) {
    try{
        let pool = await sql.connect(config);
        let product = await pool.request()
            .input('input_parameter', sql.Int, AgentKey)
            .query("SELECT * from AgentTable where AgentKey = @input_parameter");
        return product.recordset;
    }
    catch (error) {
        console.log(error);
    }
}

async function addAgent(AgentTable) {
    try{
        let pool = await sql.connect(config);
        let newAgent = await pool.request()
            .input('AgentKey', sql.Int, AgentTable.AgentKey)
            .input('AgentCode', sql.NVarChar, AgentTable.AgentCode)
            .input('AgentName', sql.NVarChar, AgentTable.AgentName)
            .input('ManagerCode', sql.NVarChar, AgentTable.ManagerCode)
            .input('Email', sql.NVarChar, AgentTable.Email)
            .input('IsBD', sql.Int, AgentTable.IsBD)    
            .input('IsExited', sql.Int, AgentTable.IsExited)
            .execute("InsertAgent");
        return newAgent.recordsets;
    }
    catch (err){
        console.log(err);
    }
}

async function deleteAgent(agentId) {
    try {
        await sql.connect(config);
        const result = await sql.query`DELETE FROM AgentTable WHERE AgentKey = ${agentId}`;
        return result;
    } catch (error) {
        throw error;
    } finally {
        await sql.close();
    }
}


async function updateAgent(AgentTable) {
    try {
        let pool = await sql.connect(config);
        const updateAgentTable = await pool.request()
            .input('AgentKey', sql.Int, AgentTable.AgentKey)
            .input('AgentCode', sql.NVarChar, AgentTable.AgentCode)
            .input('AgentName', sql.NVarChar, AgentTable.AgentName)
            .input('ManagerCode', sql.NVarChar, AgentTable.ManagerCode)
            .input('Email', sql.NVarChar, AgentTable.Email)
            .input('IsBD', sql.Int, AgentTable.IsBD)    
            .input('IsExited', sql.Int, AgentTable.IsExited)
            .execute('UpdateAgent');

            return updateAgentTable.recordsets[0];
    } catch (err) {
        console.log(err);
        throw err;
    }
}

// async function updateAgentMore(AgentTable) {
//     try {
//         let pool = await sql.connect(config);

//         // for (const agent of AgentTable) {
//             const [AgentKey, AgentCode, AgentName, ManagerCode, Email, IsBD, IsExited] = AgentTable;

//             const updateAgentTable = await pool.request()
//                 .input('AgentKey', sql.Int, AgentKey)
//                 .input('AgentCode', sql.NVarChar, AgentCode)
//                 .input('AgentName', sql.NVarChar, AgentName)
//                 .input('ManagerCode', sql.NVarChar, ManagerCode)
//                 .input('Email', sql.NVarChar, Email)
//                 .input('IsBD', sql.Int, IsBD)    
//                 .input('IsExited', sql.Int, IsExited)
//                 // .execute('UpdateAgent');

//                 console.log('AgentKey:', AgentKey);
//                 console.log('AgentCode:', AgentCode);
//             return updateAgentTable.recordsets;

//         // }

//     } catch (err) {
//         console.log(err);
//         throw err;
//     }
// }


module.exports = {
    getAgents : getAgents, 
    getAgent : getAgent,
    addAgent : addAgent,
    deleteAgent : deleteAgent,
    updateAgent :  updateAgent,
    // updateAgentMore : updateAgentMore
}   