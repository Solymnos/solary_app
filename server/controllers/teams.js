const Teams = require('../models/teams');
const data = require('../data/teamsData.json');
const { response } = require('../app');

exports.initTeams = async() =>
{
    for (var i = 0; i < data.length; i++)
    {
        let exist = await Teams.exists({ id : data[i].id});
        if (!exist)
        {
            const team = new Teams({
                id : data[i].id,
                name : data[i].name,
                icon : data[i].icon
            });
            const res = await team.save();
        } else {
            const res = await Teams.updateOne({ id : data[i].id}, {
                id : data[i].id,
                name : data[i].name,
                icon : data[i].icon,
                competitions : data[i].competition
            })
        }
    }
}

exports.getAllTeamsData = (req, res, next) => {
    Teams.find().then(
        (teams) => {
            res.status(200).json(teams);
        }
    ).catch(
        (error) => {
            res.status(400).json({ error : error });
        }
    )
}