const express = require('express');
const router = express.Router();
const streamerCtrl = require('../controllers/streamer');

router.get('/', streamerCtrl.getAllStreamersData);

module.exports = router;