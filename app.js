const express = require('express');
const { MongoClient } = require('mongodb');
const { TheConnection } = require('./db/db_Connection');
const router = require('./route/appRoute');
const app =express();
const cors = require('cors')
const bodyParser = require('body-parser');

const bodyParserJ = bodyParser.json();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParserJ);

app.use(cors());
app.use('/api',router);
app.listen(3005,()=>{

    console.log('THE SETVER UP ');
})