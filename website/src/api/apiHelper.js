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

export const getPlayers = async (teamId) =>
{
    try {
        let response = await axios({
            method : 'get',
            url : API_LINK + 'players',
            params : {
                teamId : teamId,
            },
            headers : {}
        })
        return { itWork : true, response : response.data }
    } catch (error) {
        return { itWork : false, response : error.response.data.error };
    }
}

export const postNewPlayer = async (name, role, icon, teamId, type) =>
{
    try {
        await axios({
            method : 'post',
            url : API_LINK + 'players',
            params : {
                teamId : teamId,
            },
            headers : {},
            data : {
                name : name,
                role : role,
                icon : icon,
                type : type
            }
        })
        return { itWork : true, text : name + ' a été créé'};
    } catch (error) {
        return { itWork : false, text : error }; 
    }
}

export const deletePlayer = async (teamId, playerId) =>
{
    try {
        await axios({
            method : 'delete',
            url : API_LINK + 'players',
            params : {
                teamId : teamId,
            }, 
            headers : {},
            data: {
                playerId : playerId,
            }
        })
        return { itWork : true, text : 'Joueur supprimé'};
    } catch (error) {
        return { itWork : false, text : error };
    }
}

export const updatePlayer = async (teamId, playerId, name, icon, role, type) =>
{
    try {
        await axios({
            method : 'put',
            url : API_LINK + 'players',
            params : {
                teamId : teamId,
            },
            headers: {},
            data : {
                playerId : playerId,
                name : name,
                icon : icon,
                role : role,
                type : type
            }
        })
        return { itWork : true, text : name + ' mis à jour'};
    } catch (error) {
        return { itWork : false, text : error };
    }
}

export const getResults = async (teamId) =>
{
    try {
        let response = await axios({
            method : 'get',
            url : API_LINK + 'results',
            params : {
                teamId : teamId,
            }, 
            headers : {}
        })
        return { itWork : true, response : response.data };
    } catch (error) {
        return { itWork : false, response : error.response.data.error };
    }
}


export const postNewResult = async (teamId, type, competiton, team_left_name, team_left_icon, team_left_score, team_right_name, team_right_icon, team_right_score, format, date) =>
{
    try {
        await axios({
            method : 'post', 
            url : API_LINK + 'results',
            params : { teamId : teamId },
            headers : {},
            data : {
                type : type,
                competition : competiton,
                team_left_name : team_left_name,
                team_left_icon : team_left_icon,
                team_left_score : team_left_score,
                team_right_name : team_right_name,
                team_right_icon : team_right_icon,
                team_right_score : team_right_score,
                format : format,
                date : date,
            }
        })
        return { itWork : true, text : 'Résultat créé'};
    } catch (error) {
        return { itWork : false, text : error };
    }
}

export const deleteResult = async (teamId, resultId) => 
{
    try {
        await axios({
            method : 'delete',
            url : API_LINK + 'results',
            params : {
                teamId : teamId,
            },
            headers : {},
            data : {
                resultId : resultId,
            }
        })
        return { itWork : true, text : 'Résultat supprimé'};
    } catch (error) {
        return { itWork : false, text : error };
    }
}

export const updateResult = async (teamId, resultId, type, competiton, team_left_name, team_left_icon, team_left_score, team_right_name, team_right_icon, team_right_score, format, date) =>
{
    try {
        await axios({
            method : 'put',
            url : API_LINK + 'results',
            params : {
                teamId : teamId,
            },
            headers : {},
            data : {
                type : type,
                competiton : competiton,
                team_left_name : team_left_name,
                team_left_icon : team_left_icon,
                team_left_score : team_left_score,
                team_right_name : team_right_name,
                team_right_icon : team_right_icon,
                team_right_score : team_right_score,
                format : format,
                date : date,
            }
        })
        return { itWork : true , text : 'Résultat mis à jour' };
    } catch (error) {
        return { itWork : false , text : error };
    }
}

export const getUpcoming = async (game) =>
{
    return([]);
}

export const getRankings = async (game) =>
{
    return([]);
}