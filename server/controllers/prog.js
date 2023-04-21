const Prog = require('../models/prog');
const data = require('../data/progData.json');
const { updateOne } = require('../models/teams');

exports.initProg = async() =>
{
    for (var i = 0; i < data.length; i++)
    {
        let exist = await Prog.exists({ id : data[i].id });
        if (!exist)
        {
            if (data[i].style == "oppo")
            {
                const prog = new Prog({
                    id : data[i].id,
                    style : data[i].style,
                    date : data[i].date,
                    team_1_name : data[i].team_1_name,
                    team_1_icon : data[i].team_1_icon,
                    team_2_name : data[i].team_2_name,
                    team_2_name : data[i].team_2_icon,
                    competition : data[i].competition,
                    game : data[i].game,
                    game_icon : data[i].game_icon
                });
                const res = await prog.save();
            } else if (data[i].style == "tournament") {
                const prog = new Prog({
                    id : data[i].id,
                    style : data[i].style,
                    date : data[i].date,
                    players : data[i].players,
                    tournament : data[i].tournament,
                    tournament_icon : data[i].tournament_icon,
                    game : data[i].game,
                    game_icon : data[i].game_icon
                });
                const res = prog.save();
            }
        } else 
        {
            if (data[i].style == "oppo")
            {
                const res = await Prog.updateOne({ id : data[i].id }, {
                    id : data[i].id,
                    style : data[i].style,
                    date : data[i].date,
                    team_1_name : data[i].team_1_name,
                    team_1_icon : data[i].team_1_icon,
                    team_2_name : data[i].team_2_name,
                    team_2_name : data[i].team_2_icon,
                    competition : data[i].competition,
                    game : data[i].game,
                    game_icon : data[i].game_icon
                })
            } else if (data[i].style == "tournament") {
                const res = await Prog.updateOne({ id : data[i].id }, {
                    id : data[i].id,
                    style : data[i].style,
                    date : data[i].date,
                    players : data[i].players,
                    tournament : data[i].tournament,
                    tournament_icon : data[i].tournament_icon,
                    game : data[i].game,
                    game_icon : data[i].game_icon
                })
            }
        }
    }
}

exports.getAllProgData = (req, res, next) => {
    Prog.find().then(
        (prog) => {
            res.status(200).json(prog);
        }
    ).catch(
        (error) => {
            res.status(400).json({ error : error });
        }
    )
}