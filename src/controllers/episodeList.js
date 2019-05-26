const episodeRequest = require('./episodeRequest');

const allEpisodes = (req, res) => {
    episodeRequest.getAllEps().then(resp => {
        console.log('thisis the resp >>>>>>>>>>>>>>>', resp);
        return res.render("allEpisodes", {"allEpisodes": resp})
    })
}

allEpisodes();
module.exports = allEpisodes;