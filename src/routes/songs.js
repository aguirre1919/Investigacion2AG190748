const { Router } = require('express');
const router = Router();
const songs = require('../samples.json');

router.get('/songs', (req, res) => {
    res.json('songs');
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.send('received');
})


module.exports = router;
