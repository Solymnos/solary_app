const Teams = require('../models/teams');

exports.addNewTeam = async (req, res, next) =>
{
    let data = req.body;

    console.log(data);

    let test = await Teams.exists({ name : data.name });
    console.log(test);

    if (data.link ==  null)
    {
        res.status(400).json({ error : 'Lien requis'});
    } else if (await Teams.exists({ link : data.link }) != null) 
    {
        res.status(400).json({ error : 'Lien déjà utilisé'});
    } else if (data.name == null)
    {
        res.status(400).json({ error : 'Nom d\'équipe requis'});
    } else if (await Teams.exists({ name : data.name }) != null)
    {
        res.status(400).json({ error : 'Nom d\'équipe déjà utilisé'});
    } else if (data.icon == null)
    {
        res.status(400).json({ error : 'Icône requise'});
    } else {
        const newTeam = new Teams({
            link : data.link,
            name : data.name,
            icon : data.icon,
            players : [],
            results : [],
            upcomings : [],
        });
        try {
            await newTeam.save();
            res.status(200).json({ message : 'Nouvelle équipe ' + data.name + ' crée'});
        } catch (error) {
            res.status(400).json({ error : error });
        }
    }
}

exports.updateTeam = async (req, res, next) =>
{
    let data = req.body;

    console.log('receive update ' + data._id );
    
    if (data.link ==  null)
    {
        res.status(400).json({ error : 'Lien requis'});
    } else if (data.name == null)
    {
        res.status(400).json({ error : 'Nom d\'équipe requis'});
    } else if (data.icon == null)
    {
        res.status(400).json({ error : 'Icône requise'});
    } else {
        let change = await Teams.findById(data._id);
        if (change.name != data.name) 
        {
            if (await Teams.exists({ name : data.name }) != null)
            {
                res.status(400).json({ error : 'Nom d\'équipe déjà utilisé'})
            }
        } if (change.link != data.link)
        {
            if (await Teams.exists({ link : data.link}) != null)
            {
                res.status(400).json({ error : 'Lien déjà utilisé'})
            }
        }
        console.log('just before update')
        try {
            let result = await Teams.findByIdAndUpdate(data._id, {
                name : data.name,
                link : data.link,
                icon : data.icon,
            });
            res.status(200).json({ message : data.name + ' mise à jour'})
        } catch (error) {
            console.log(error);
            res.status(400).json({ error : error });
        }
    }
}

exports.deleteTeam = async (req, res, next) =>
{
    let data = req.body;

    try {
        const result = await Teams.findByIdAndDelete(data._id);
        res.status(200).json({ message : 'Equipe Supprimée'})
    } catch (error) {
        res.status(400).json({ error : error });
    }
}

exports.getAllTeamsBasicsInfos = async (req, res, next) =>
{
    Teams.find().select('_id link name icon').then(
        (teams) => {
            res.status(200).json(teams);
        }
    ).catch(
        (error) => {
            res.status(400).json({ error : error })
        }
    )
}