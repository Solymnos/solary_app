const data = require('../data/streamersData.json');
const axios = require('axios');
const Streamer = require('../models/streamer');
const streamerCtrl = require('../controllers/streamer');
const streamer = require('../models/streamer');

const TOKEN = 'v0rjq1w40z6domi9l1hihe68uxwqh7';
const CLIENT_ID = 'j33has88di3pik0tptp66m0kumdnir';

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


const getStreamerList = () =>
{
    Streamer.find().then(streamers => console.log(streamers)).catch(error => console.log(error));
}

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
    for (var i = 0; i < response.data.data.length; i++)
    {
        console.log('live de : ' + response.data.data[i].user_name);
        const res = await streamerCtrl.updateStreamerIsOnLive(
            response.data.data[i].user_id,
            response.data.data[i].user_login,
            response.data.data[i].user_name,
            response.data.data[i].title,
            response.data.data[i].game_name
        )
    }
    //getStreamerList();
}

module.exports = { initStreamers, getLiveStreamers };