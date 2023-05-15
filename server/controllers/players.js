const Team = require('../models/teams');

exports.getPlayersForATeam = async (req, res, next) =>
{
    try {
        let team = await Team.findById(req.query.teamId);
        res.status(200).json(team.players);
    } catch (error)
    {
        res.status(400).json({ error : error });
    }
}

exports.postNewPlayer = async (req, res, next) =>
{
    let teamId = req.query.teamId;
    let data = req.body;

    try {
        let team = await Team.findById(teamId);
        const player = {
            name : data.name,
            type : data.type,
            role : data.role,
            icon : data.icon
        }
        await team.players.push(player);
        await team.save();
        res.status(200).json({message : data.name + 'créé'});
    } catch (error) {
        res.status(400).json({ error : error });
    }
}


exports.deletePlayer = async (req, res, next) =>
{
    let teamId = req.query.teamId;
    let data = req.body;

    try {
        let team = await Team.findOneAndUpdate({ _id : teamId }, { $pull : { players : { _id : data.playerId }}}, { new : true});
        if (!team) {
            res.status(400).json({ error : 'Equipe pas trouvée'});
        }
        res.status(200).json({ message : 'Joueur supprimé !'});
    } catch (error) {
        res.status(400).json({ error : error });
    }
}

exports.updatePlayer = async (req, res, next) =>
{
    let teamId = req.query.teamId;
    let data = req.body;

    try {
        let player = {
            name : data.name,
            type : data.type,
            role : data.role,
            icon : data.icon
        }
        await Team.findOneAndUpdate({ _id : teamId, 'players._id' : data.playerId },
        { $set : { 'players.$' : player}});
        res.status(200).json({ message : 'Joueur mis à jour'});
    } catch (error) {
        res.status(400).json({ error : error });
    }
}