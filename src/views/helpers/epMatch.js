const allEps = require('../../model/allEpisodes.json');

const epMatch = (str) => {
    const selectedEp = allEps.filter(eps => eps.url === str );
    return `${selectedEp[0].episode}: ${selectedEp[0].name}`
};

module.exports = epMatch;