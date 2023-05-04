const express = require('express');
const router = express.Router();
const resultCtrl = require('../controllers/result');

router.get('/', resultCtrl.getAllResultsData);

module.exports = router;