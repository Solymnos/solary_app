const Streamer = require('../models/streamer');

exports.registerStreamer = async (id, login, name, iconUrl) =>
{
    const streamer = new Streamer({
        id : id,
        login : login,
        name : name,
        isUp : false,
        iconUrl : iconUrl, 
        liveTitle : '',
        liveGame : ''
    });
    const res = streamer.save();
};

exports.updateStreamer = async (id, login, name, iconUrl) =>
{
    const res = await Streamer.updateOne({ id : id}, {
        id : id,
        login : login,
        name : name,
        isUp : false,
        iconUrl : iconUrl,
        liveTitle : '',
        liveGame : ''
    });
};

exports.updateStreamerIsOnLive = async (id, login, name, liveTitle, liveGame) =>
{
    console.log('update for ' + name);
    const res = await Streamer.updateOne({ id : id }, {
        id : id,
        login : login,
        name : name,
        isUp : true,
        liveTitle : liveTitle,
        liveGame : liveGame
    });
};

exports.getAllStreamersData = (req, res, next) => {
    Streamer.find().then(
        (streamers) => {
            res.status(200).json(streamers);
        }
    ).catch(
        (error) => {
            res.status(400).json({ error : error });
        }
    );
};