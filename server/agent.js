class AgentTable{
    constructor(Key, Code, Name, M_Code, Email, isBD, isExcited){
        this.AgentKey = Key;
        this.AgentCode = Code;
        this.AgentName = Name;
        this.ManagerCode = M_Code;
        this.Email = Email;
        this.IsBD = isBD;
        this.IsExcited = isExcited;
    }
}

module.exports = AgentTable;