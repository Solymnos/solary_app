const data = require('../data/streamersData.json');
const axios = require('axios');

const TOKEN = 'v0rjq1w40z6domi9l1hihe68uxwqh7';
const CLIENT_ID = 'j33has88di3pik0tptp66m0kumdnir';
const initStreamers = async() =>
{
    var url = 'https://api.twitch.tv/helix/users?';
    for (var i = 0; i < data.names.length; i++)
    {
        url += 'login=' + data.names[i] + '&';
    }
    var response = await axios({
        method : 'get',
        url : url,
        headers : { 'Authorization' : `Bearer ${TOKEN}`, 'Client-Id' : CLIENT_ID}
    });
    console.log(response.data.data);
}

module.exports = { initStreamers };