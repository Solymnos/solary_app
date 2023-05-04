const express = require('express');
const router = express.Router();
const matchCtrl = require('../controllers/match');

router.get('/', matchCtrl.getAllMatchesData);

module.exports = router;