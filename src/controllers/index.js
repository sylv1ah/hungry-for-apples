const express = require('express');
const path = require ('path');
const request = require('../scripts/request');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home')
});

router.post('/search', (req, res) => {
    console.log("this is the request:", req.body.search)
    console.log("req.url:", req.url)
    res.redirect(`${req.body.search}`)
});

router.get('/:character', (req, response) => {
    const characterQuery = req.url.split('/')[1];
    console.log("characterQuery:",characterQuery)
    const url = `https://rickandmortyapi.com/api/character/?name=${characterQuery}`
    request(url, (error, res) => {
        // console.log("this is the response of get:",res.results.map(ep => ep.episode));
        // const episodeReq = res.results.map(ep => ep.episode);
        // console.log("this is episodeReq:" ,episodeReq);

        if(error) console.log(error);
        if(res.error){
            console.log("no such character")
            response
            .status(404)
            .sendFile(path.join(__dirname, '..', '..', 'public', 'html', '404.html'))
        } else {
            
            // const nestedEpReq = episodeReq.map(nested => nested.map(epz => request(epz, (err1, res1) => {
                
            //     if(err1) console.log(err1);
            //     if(res1.err1){
            //         console.log("nestedEpReq error!")
            //         response
            //         .status(404)
            //         .sendFile(path.join(__dirname, '..', '..', 'public', 'html', '404.html'))
            //     } else {
            //         console.log(res1);
                    
            //     }
            // })));
            // console.log("this is nestedEpReq:" ,nestedEpReq);

            response.render('characters', {char: res.results, search: req.url.split('/')[1]})
        }
    })
});

router.use(((req, res) => {
    res
    .status(400)
    .sendFile(path.join(__dirname, '..', '..', 'public', 'html', '404.html'))
}))

router.use((err, req, res) => {
    console.log(err)
    res
    .status(500)
    .sendFile(path.join(__dirname, '..', '..', 'public', 'html', '500.html'))
})

module.exports = router;