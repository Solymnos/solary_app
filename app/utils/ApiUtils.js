import axios from 'axios';

export let streamersData;

export async function apiGetInfo()
{
    var url = 'http://10.0.2.2:3003/api/streamer';
    var response = await axios({
        method : 'get',
        url : url
    });
    streamersData = response.data;
    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(5000);
}

export async function getStreamersInfo()
{
    console.log("refresh info");
    var url = 'http://10.0.2.2:3003/api/streamer';
    var response = await axios({
        method : 'get',
        url : url
    });
    streamersData = response.data;
}