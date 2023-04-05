import axios from 'axios';

export let streamersInfo;

export async function apiGetInfo()
{
    var url = 'http://10.0.2.2:3003/api/streamer';
    var response = await axios({
        method : 'get',
        url : url
    });
    streamersInfo = response.data;
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
    streamersInfo = response.data;
    return response.data;
}

export function getStreamersData()
{
    return streamersInfo;
}

export async function updateStreamersData()
{
    const res = await getStreamersInfo();
    return res;
}