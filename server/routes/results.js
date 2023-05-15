const express = require('express');
const router = express.Router();
const resultsCtrl = require('../controllers/results');

router.get('/', resultsCtrl.getResultsForATeam);
router.post('/', resultsCtrl.postNewResult);
router.delete('/', resultsCtrl.deleteResult);
router.put('/', resultsCtrl.updatePlayer);

module.exports = router;