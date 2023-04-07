import axios from 'axios';

export let streamersInfo;
export let teamsInfo;

export async function initAPIInfos()
{
    await updateStreamersInfo();
    await updateTeamsInfo();
}

export async function updateStreamersInfo()
{
    var url = 'http://10.0.2.2:3003/api/streamer';
    var response = await axios({
        method : 'get',
        url : url
    });
    streamersInfo = response.data;
    return(streamersInfo);
}

export async function updateTeamsInfo()
{
    var url = 'http://10.0.2.2:3003/api/teams';
    var response = await axios({
        method : 'get',
        url : url
    });
    teamsInfo = response.data;
    return(teamsInfo);
}