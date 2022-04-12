const http = require('axios')
const express =require('express')
const router = express.Router();


router.get('/pokeapi/:limit/:offset', function(req, res) {
    const limit = req.params.limit
    const offset = req.params.offset
    http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(response => {
            console.log('[GET] response pokeapi', response)
            const data = response.data
            res.json(data)
        })
})

router.get('/pokeapi', function(req, res) {
    http.get(`https://pokeapi.co/api/v2/pokemon?limit=2000`)
        .then(response => {
            console.log('[GET] response pokeapi/all', response)
            const data = response.data
            res.json(data)
        })
})

module.exports = router