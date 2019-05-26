const request = require('./request');
const sortEpisodes = require('../scripts/sortEpisodes');

const getAllEps = () => {
    request('https://rickandmortyapi.com/api/episode/', (err, result1) => {
        if(err) {
            console.log(err);
        } else {
            request('https://rickandmortyapi.com/api/episode/?page=2', (err1, result2) => {
                if(err1) {
                    console.log(err1)
                } else {
                    const allEps = (result1.results).concat(result2.results);
                    let allEpsSorted = sortEpisodes(allEps);
                    console.log("allEpsSorted>>>>>>>>>>",allEpsSorted)
                }
            })
        }
    })
};

// getAllEps();
// console.log("sortEpisodes>>>>>>>>>>>>>>",sortEpisodes(allEps));

module.exports ={ getAllEps };