const express = require('express');
const router = express.Router();
const playersCtrl = require('../controllers/players');

router.get('/', playersCtrl.getPlayersForATeam);
router.post('/', playersCtrl.postNewPlayer);
router.delete('/', playersCtrl.deletePlayer);
router.put('/', playersCtrl.updatePlayer);

module.exports = router;