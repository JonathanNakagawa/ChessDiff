import axios from 'axios';

function noAuthGamesQuery(username) {
    const queryUrl = 
        'https://lichess.org/api/games/user/' 
        + username 
        + '?'
        + 'since=' + getOffsetEpochTime(1) + '&' 
        + 'rated=true&'
        + 'moves=false&'
        + 'perfType=blitz';

    console.log('sending request');
    return axios.get(queryUrl);
}

function getOffsetEpochTime(offsetWeeks) {
    return new Date().getTime() - offsetWeeks * 7 * 24 * 60 * 60 * 1000; 
}

export default noAuthGamesQuery;