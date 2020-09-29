const express = require('express');
const app = express();
const morgan=require('morgan');

//ajustes
app.set('port', process.env.PORT || 2000);
app.set('json spaces', 2);


//middlewars
app.use(morgan(`dev`));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//rutas
app.use(require('./routes/index'));
app.use(require('./routes/songs'));


//iniciando servidor local
app.listen(app.get('port'), ()=>{
    console.log(`server on port ${app.get('port')}`);
});