const http = require('http');
const https = require('https');

const apiRequest = (url, cb) => {
    https.get(url, (resp) => {
        let data = '';
        resp.on('data', (chunk) => {
            data += chunk;
        });
        resp.on('end', () => {
            cb(null, JSON.parse(data))
        })
    }).on('error', (err) => {
        cb(err)
    });
};

// apiRequest('https://rickandmortyapi.com/api/character/',(err, res) => {
//     console.log(res.results[0].name, "is", res.results[0].status.toLowerCase());
//     // let episodeAppearances = res.results[0].episode.map(ep => apiRequest(ep, (err3, res3) => {
//     //     // console.log(`${res3.episode}: ${res3.name}`);
//     //     // let episodeAppearancesFormat = `${res3.episode}: ${res3.name}`
//     //     // return episodeAppearancesFormat
//     // }));
//         let episodeAppearances = res.results[0].episode;
//         // const episodeAppearancesFormat = episodeAppearances.map(ep => apiRequest(ep, (err4, res4) => {
//         //     console.log(`${res4.episode}: ${res4.name}`);
//         //     // const episodeAppearancesFormat = `${res4.episode}: ${res4.name}`;
//         //     // return episodeAppearancesFormat
//         //     // console.log(episodeAppearancesFormat);
//         //     return res4;
//         // }));

//         const episodeAppearancesFormat = (epArr) => {
            
//             // const epArr = episodeAppearances;

//             //attempt 1
//             // epArr.map(ep => apiRequest(ep, (err4, res4) => {
//             //     const episodeNum = [];
//             //     let episodeName = [];
//             //     // console.log(`${res4.episode}: ${res4.name}`);
//             //     episodeNum.push(res4.episode);
//             //     episodeName.push(res4.name);
//             //     // console.log(episodeNum[episodeNum.length -1]);
//             //     console.log(episodeNum);

//             //     // let episodeAppearancesFormatted = [episodeNum, episodeName].reduce((num, name) => num.map((x, i) => x + name[i]));
//             //     // return episodeAppearancesFormatted
                
//             // }));

//             //attempt 2
//             let episodeNum = epArr.map(ep => apiRequest(ep, (err4, res4) => {
//                 console.log(res4.episode)
//                 return res4.episode
//             }));
//             let episodeName = epArr.map(ep => apiRequest(ep, (err4, res4) => {
//                 // console.log(res4.name)
//                 return res4.name
//             }));
//             let episodeAppearancesFormatted = [episodeNum, episodeName].reduce((num, name) => num.map((x, i) => x + name[i]));
//             return episodeAppearancesFormatted
//         }

//     // console.log("episodeAppearances:", episodeAppearances);
//     console.log("episodeAppearancesFormat:", episodeAppearancesFormat(episodeAppearances));
//     // let findEpisode = res.results[0].episode[0];
//     // apiRequest(findEpisode, (err2, res2) => {
//     //     console.log(`${res2.episode}: ${res2.name}`);
//     //     console.log(res.results[0].name)
//     // })

// })

module.exports = apiRequest;