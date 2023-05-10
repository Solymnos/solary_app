const express = require('express');
const router = express.Router();
const teamsCtrl = require('../controllers/teams');
const gamesCtrl = require('../controllers/games');

router.get('/', teamsCtrl.getAllTeamsBasicsInfos);
router.post('/', teamsCtrl.addNewTeam);
router.delete('/', teamsCtrl.deleteTeam);
router.put('/', teamsCtrl.updateTeam);

module.exports = router;