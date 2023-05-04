const Match = require('../models/match');

exports.addMatch = async(team_left_name, team_left_icon, team_right_name, team_right_icon, format, competition, date, game, game_icon, type, id) =>
{
    const match = new Match({
        id : id,
        team_left_name : team_left_name,
        team_left_icon : team_left_icon,
        team_right_icon : team_right_icon,
        team_right_name : team_right_name,
        format : format,
        date : date,
        competition : competition,
        game : game,
        game_icon : game_icon,
        type : type
    });
    const res = await match.save();
}

exports.deleteMatchesForAGame = async(game) =>
{
    const res = await Match.deleteMany({ game : game });
}

exports.getAllMatchesData = (req, res, next) => {
    Match.find().then(
        (matches) => {
        res.status(200).json(matches);
        }
    ).catch(
        (error) =>  {
            res.status(400).json({ error : error})
        }
    )
}