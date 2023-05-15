const Team = require('../models/teams');

exports.getResultsForATeam = async (req, res, next) =>
{
    try {
        let team = await Team.findById(req.query.teamId);
        res.status(200).json(team.results);
    } catch (error) {
        res.status(400).json({ error : error });
    }
}

exports.postNewResult = async (req, res, next) =>
{
    let teamId = req.query.teamId;
    let data = req.body;

    console.log(data);
    try {
        let team = await Team.findById(teamId);
        const result = {
            type : data.type,
            competition : data.competition,
            team_left_name : data.team_left_name,
            team_left_icon : data.team_left_icon,
            team_left_score : data.team_left_score,
            team_right_name : data.team_right_name,
            team_right_icon : data.team_right_icon,
            team_right_score : data.team_right_score,
            format : data.format,
            date : data.date,
        }
        await team.results.push(result);
        await team.save();
        res.status(200).json({ message : 'resultat créé' });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error : error });
    }
}

exports.deleteResult = async (req, res, next) =>
{
    let teamId = req.query.teamId;
    let data = req.body;

    try {
        let team = await Team.findOneAndUpdate({ _id : teamId }, { $pull : { results : { _id : data.resultId }}}, { new : true });
        if (!team) {
            res.status(400).json({ error : 'Equipe pas trouvée'});
        }
        res.status(200).json({message : 'Résultat supprimé !'});
    } catch (error) {
        res.status(400).json({ error : error });
    }
}

exports.updatePlayer = async (req, res, next) =>
{
    let teamId = req.query.teamId;
    let data = req.body;

    try {
        let result = {
            type : data.type,
            competition : data.competition,
            team_left_name : data.team_left_name,
            team_left_icon : data.team_left_icon,
            team_left_score : data.team_left_score,
            team_right_name : data.team_right_name,
            team_right_icon : data.team_right_icon,
            team_right_score : data.team_right_score,
            format : data.format,
            date : data.date
        }
        await Team.findOneAndUpdate({ _id : teamId , 'results._id' : data.resultId },
        { $set : { 'results.$' : result }});
        res.status(200).json({ message :  'Résultat mis à jour'});
    } catch (error) {
        res.status(400).json({ error : error });
    }
}