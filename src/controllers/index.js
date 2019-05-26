const express = require('express');
const path = require ('path');
const fs = require('fs');
const request = require('./request');
const router = express.Router();

const sortEpisodes = require('../scripts/sortEpisodes');

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

        if(error) console.log(error);
        if(res.error){
            console.log("no such character")
            response
            .status(404)
            .sendFile(path.join(__dirname, '..', '..', 'public', 'html', '404.html'))
        } else {
            request('https://rickandmortyapi.com/api/episode/', (err, result1) => {
                if(err) {
                    console.log(err);
                } else {
                    request('https://rickandmortyapi.com/api/episode/?page=2', (err1, result2) => {
                        if(err1) {
                            console.log(err1)
                        } else {
                            const allEps = (result1.results).concat(result2.results);
                            const allEpsSorted = sortEpisodes(allEps);
                            // console.log("allEpsSorted>>>>>>>>>>",allEpsSorted)
                            fs.writeFileSync('src/allEpisodes.json', JSON.stringify(allEpsSorted))
                            response.render('characters', {char: res.results, search: req.url.split('/')[1], allEps: allEpsSorted})
                        }
                    })
                }
            })
            
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