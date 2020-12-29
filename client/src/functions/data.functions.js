function formatGames(data) {
    return data.data
        .split(/\n\n\n*/) // Match two or more new lines
        .map(str => {
            var obj = {};
            if (!str.startsWith('[')) {
                return obj;
            }
            const arr = str.split('\n'); 
            for (var i = 0; i < arr.length; i++) {
                const keyValue  = arr[i].match(/(?:[^\s"']+|['"][^'"]*["'])+/g); // split on spaces not in quotes
                obj[keyValue[0].substring(1)] = keyValue[1].substring(1,keyValue[1].length-2);
            }
            return obj;
        })
        .filter(obj => Object.keys(obj).length > 0);
}

module.exports = {formatGames: formatGames}