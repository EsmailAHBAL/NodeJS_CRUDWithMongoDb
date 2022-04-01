const express = require('express');
const { _addNew} = require('../controller/appController');
const { getAllUser ,updateUser,deteUser} = require('../db/db_Connection');

const router =express.Router();

router.get('/',_addNew)
router.get('/user',getAllUser);
router.delete('/delete',deteUser)
router.post('/update',updateUser)

module.exports=router;