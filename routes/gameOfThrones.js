const data = require('../data.json')
const http = require('axios')
const express = require('express')
const router = express.Router()

router.get('/game-of-thrones/json', function(req, res) {
    res.json({ data })
})

router.get('/game-of-thrones/url', async function (req, res) {
    
    // http.get('https://thronesapi.com/api/v2/Characters')
    //     .then(function({ data }) {
    //         console.log('response', data)
    //         res.json(data)
    //     })
    //     .catch(err => console.error(err))

    try {
        const response = await http.get('https://thronesapi.com/api/v2/Characters')
        console.log('response', response)
        res.json(response.data)
    } catch(err) {
        console.log(err)
    }
})

module.exports = router