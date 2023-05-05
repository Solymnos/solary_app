const data = require('../data/gamesData.json');

exports.getAllGames = (req, res, next) =>
{
    res.status(200).json(data);
}