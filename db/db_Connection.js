const { MongoClient } = require('mongodb');
const dotenv = require('dotenv')
 dotenv.config();
 const url = process.env.URL_MONGODB;
exports.TheConnection =async(values)=>{
 
   
    MongoClient.connect(url,(err,client)=>{
        const db=client.db('test');
        console.log('Connected To DB');
        client.db('test').collection('users').insertOne(
            {
                'name':values[0],'email':values[1]
            }
        ).then(rest=>{

            console.log(rest);
        })
      
        
    });


}
exports.getAllUser=async(req,res)=>{

   MongoClient.connect(url,(err,client)=>{
   
    const db = client.db('test');
    db.collection('users').find({},{
       sort:{name:1}
    }).toArray().then((res)=>console.log(res))

   })

   return res.send('OK')
}

exports.updateUser=async(req,res)=>{

   MongoClient.connect(url,(err,client)=>
   {
    const db = client.db('test');
    db.collection('users').updateMany({name:req.body.name},{
        $set :{
            email:req.body.email
        }
    }).then(rest =>{console.log(rest);})
   })
return res.send('Updated')
}

exports.deteUser=async(req,res)=>{

 MongoClient.connect(url,(er,client)=>{
  const db=client.db('test');
  db.collection('users').deleteOne({name:req.body.name}).then((rest)=>{

    console.log(rest);
        return res.send('DELETED')
  })

 })
}