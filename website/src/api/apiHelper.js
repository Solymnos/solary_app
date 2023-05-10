import axios from 'axios';
const API_LINK = 'http://localhost:3003/api/';

export const getGames = async () =>
{
    let response = await axios({
        method : 'get',
        url : API_LINK + 'teams',
    });
    return (response.data);
}

export const deleteGame = async( id , name) =>
{
    try {
        await axios({
            method : 'delete',
            url : API_LINK + 'teams',
            headers : {},
            data : {
                _id : id
            }
        });
        return { itWork : true, text : 'Team ' + name + ' supprimée !'};
    } catch (error) {
        return { itWork : false, text : error.response.data.error };
    }
}

export const updateGame = async(id, name, link, icon) =>
{
    try {
        await axios({
            method : 'put',
            url : API_LINK + 'teams',
            headers : {},
            data : {
                _id : id,
                name : name,
                link : link,
                icon : icon,
            }
        });
        console.log('update end axios');
        return { itWork : true , text : 'Team ' + name + '  mise à jour !' };
    } catch (error) {
        return { itWork : false , text : error.response.data.error };
    }
}

export const postNewGame = async (name, link, icon) =>
{
    try {
        await axios({
            method : 'post',
            url : API_LINK + 'teams',
            headers : {},
            data : {
                name : name,
                link : link,
                icon : icon,
            }
        });
        return { itWork : true , text : 'Team ' + name + ' crée' };
    } catch (error) {
        return { itWork : false , text : error.response.data.error };
    }
    
}

export const getPlayers = async (game) =>
{
    return(API_LINK + game + 'players');
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