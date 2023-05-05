const express = require('express');
const router = express.Router();
const teamsCtrl = require('../controllers/games');

router.get('/', teamsCtrl.getAllGames);

module.exports = router;