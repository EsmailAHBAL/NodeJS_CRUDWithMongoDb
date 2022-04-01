const res = require("express/lib/response");
const { TheConnection } = require("../db/db_Connection");

exports._addNew=async(req,res)=>{

 let vl = ['MED','@gmail.com']
await TheConnection(vl);
return res.status(200).send({'THE Result':'OK CREATED'})

}
