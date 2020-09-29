//route

const { Router } = require('express');
const router = Router();


//app.get('/', (req, res) => {
    //res.json({"Title": "Hello World"});
//});

app.get('/test', (req, res) => {
    const data = {
        "name": "Ag190748",
        "website": "songs.com"
    };
    res.json(data);
});

module.exports = router;