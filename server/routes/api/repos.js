const router = require('express').Router();
const axios = require('axios');
const NodeCache = require( "node-cache" );
const myCache = new NodeCache();

router.get('/fav', function(req, res){

    cached = myCache.get("repos-fav");
    if (cached === undefined) {
        console.log('from github');
        axios.get('https://api.github.com/users/github-contributor-com/starred').then(response => {
            myCache.set("repos-fav", response.data, 60 * 60 * 24); // reload the cache every 24 hours
            res.send(response.data);
        }).catch(error => {
            res.send('Error');
        })
    } else {
        console.log('from cached');
        res.send(cached);
    }
});

module.exports = router;