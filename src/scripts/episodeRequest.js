const request = require('./request');

const getAllEps = () => {}
    request('https://rickandmortyapi.com/api/episode/', (err, res) => {
        if(err) {
            console.log(err)
        } else {
            const sortEpisodes = res.results.map(eps => {
                return {
                    episode: eps.episode,
                    name: eps.name,
                    url: eps.url
                }
            } );
            console.log(sortEpisodes);
            return res
        }
    })
