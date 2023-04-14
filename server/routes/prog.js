const express = require('express');
const router = express.Router();
const progCtrl = require('../controllers/prog');

router.get('/', progCtrl.getAllProgData);

module.exports = router;