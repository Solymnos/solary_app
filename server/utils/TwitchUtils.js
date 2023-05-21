const data = require('../data/streamersData.json');
const axios = require('axios');
const Streamer = require('../models/streamer');
const streamerCtrl = require('../controllers/streamer');

const TOKEN = process.env['TOKEN'];
const CLIENT_ID = process.env['CLIENT_ID'];

const initStreamers = async () =>
{
    var url = 'https://api.twitch.tv/helix/users?';
    for (var i = 0; i < data.names.length; i++)
    {
        url += 'login=' + data.names[i] + '&';
    }
    var response = await axios({
        method : 'get',
        url : url,
        headers : { 'Authorization' : `Bearer ${TOKEN}`, 'Client-Id' : CLIENT_ID }
    });

    for (var i = 0; i < response.data.data.length; i++)
    {
        let exist = await Streamer.exists({ id : response.data.data[i].id});
        
        if (exist)
        {
            const res = await streamerCtrl.updateStreamer(response.data.data[i].id, response.data.data[i].login, response.data.data[i].display_name, response.data.data[i].profile_image_url);
        } else {
            const res =await streamerCtrl.registerStreamer(response.data.data[i].id, response.data.data[i].login, response.data.data[i].display_name, response.data.data[i].profile_image_url);
        }
    }
};

const getLiveStreamers = async () =>
{
    var url =  'https://api.twitch.tv/helix/streams?';
    for (var i = 0; i < data.names.length; i ++)
    {
        url += 'user_login=' + data.names[i] + '&';
    }
    var response = await axios({
        methode : 'get',
        url : url,
        headers : { 'Authorization' : `Bearer ${TOKEN}`, 'Client-Id' : CLIENT_ID }
    });

    const activesId = [];

    for (var i = 0; i < response.data.data.length; i++)
    {
        const res = await streamerCtrl.updateStreamerIsOnLive(
            response.data.data[i].user_id,
            response.data.data[i].user_login,
            response.data.data[i].user_name,
            response.data.data[i].title,
            response.data.data[i].game_name,
            response.data.data[i].viewer_count
        )
        activesId.push(response.data.data[i].user_id);
    }
}

module.exports = { initStreamers, getLiveStreamers };