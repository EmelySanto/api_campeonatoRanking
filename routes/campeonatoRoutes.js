const express = require('express');
const router = express.Router();


const insereTime = require('../controller/insereTimes');

router.post('/times/insere', insereTime.insertTime);


module.exports = router;