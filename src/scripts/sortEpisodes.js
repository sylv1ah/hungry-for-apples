const sortEpisodes = (array) => {
    return array.map(eps => {
        return {
            episode : eps.episode,
           name : eps.name,
           url: eps.url
       }      
   });
};

module.exports = sortEpisodes;