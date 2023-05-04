const Result = require('../models/result');

exports.addMatchResult = async(id, type, team_left_name, team_left_icon, team_left_score, team_right_name, team_right_icon, team_right_score, competition, game, game_icon, slywin) =>
{
    const result = new Result({
        id : id,
        type : type,
        team_left_name : team_left_name,
        team_left_icon : team_left_icon,
        team_left_score : team_left_score,
        team_right_name : team_right_name,
        team_right_icon : team_right_icon,
        team_right_score : team_right_score,
        competition : competition,
        game : game, 
        game_icon, game_icon, 
        slywin : slywin
    });
    const res = await result.save();
}

exports.deleteResultForAGame = async(game) =>
{
    const res = await Result.deleteMany({ game : game });
}

exports.getAllResultsData = (req, res, next) =>
{
    Result.find().then(
        (results) => {
            res.status(200).json(results);
        }
    ).catch(
        (error) => {
            res.status(400).json({ error : error })
        }
    )
};