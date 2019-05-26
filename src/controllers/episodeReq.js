const request = require('./request');
const sortEpisodes = require('../scripts/sortEpisodes');

const episodeReq = (totalEps) => {
    return sortedEps = totalEps.map( subEps => subEps.map( eps => {
        return request(eps, (err, res) => {
            if(err) { console.log(err)} 
            else {
                const sorted = {
                    episode: res.episode,
                    name: res.name,
                    url: res.url
                };
                console.log("sortEpisodes>>>>>>>>>>",sorted)
                return sorted
            }
        });
    }
    ));
    // console.log("sortedEps>>>>>>>>>>",sortedEps)
};
total = [ [ 'https://rickandmortyapi.com/api/episode/31' ],
[ 'https://rickandmortyapi.com/api/episode/15',
  'https://rickandmortyapi.com/api/episode/21',
  'https://rickandmortyapi.com/api/episode/29',
  'https://rickandmortyapi.com/api/episode/30',
  'https://rickandmortyapi.com/api/episode/31' ],
[ 'https://rickandmortyapi.com/api/episode/31' ] ];

episodeReq(total);