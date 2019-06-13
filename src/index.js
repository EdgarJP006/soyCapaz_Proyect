const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const session = require ('express-session');
const morgan = require('morgan');
 
//Initializations
require('./database');

//Setting
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


//middlewares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));

//app.use(morgan('dev'));

//router
app.use (require('./routes/index'));
app.use (require('./routes/notes'));
app.use (require('./routes/users'));

// static files
app.use(express.static(path.join(__dirname ,'public')) );

//Global Variables

//listening the server
app.listen(app.get('port'), ()=> {
    console.log('Server Webs run!', app.get('port'));
});