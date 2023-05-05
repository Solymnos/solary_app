import axios from "axios";
const API_LINK = "http://localhost:3003/api/";

export const getGames = async () =>
{
    let response = await axios({
        method : 'get',
        url : API_LINK + 'games',
        withCredentials : false,
    });
    return (response.data);
}

// Fusionner players et Staff

export const getPlayers = async (game) =>
{
    return(API_LINK + game + 'players');
}

export const getStaff = async (game) =>
{
    return(API_LINK + game + 'staff');
}

export const getResults = async (game) =>
{
    return(API_LINK + game + 'results');
}

export const getUpcoming = async (game) =>
{
    return(API_LINK + game + 'upcoming');
}

export const getRankings = async (game) =>
{
    return(API_LINK + game + 'rankings');
}