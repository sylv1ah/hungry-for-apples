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
    console.log(url);
    request(url, (error, res) => {
        console.log("this is the response of get:",res)
        if(error) console.log(error);
        if(res.error){
            console.log("no such character")
            response
            .status(404)
            .sendFile(path.join(__dirname, '..', '..', 'public', 'html', '404.html'))
        } else {
            response.render('characters', {char: res.results})
        }
    })
});

module.exports = router;