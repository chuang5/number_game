//dependencies
var express = require('express');
var bodyParser = require('body-parser');
// var session = require('express-session');
// var cookieParser = require('cookie-parser');
var cors = require('cors');

var checkAnswer = require('./routers/checkAnswer');
var startAGame = require('./routers/startAGame');

var app = express();
const router = express.Router();
app.use(express.static(__dirname + '/'));

app.set('view engine', 'ejs');

//use cors to allow cross origin resource sharing
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

//use express session to maintain session data
// app.use(session({
//     secret              : 'number_game_session',
//     resave              : false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
//     saveUninitialized   : false, // Force to save uninitialized session to db. A session is uninitialized when it is new but not modified.
//     duration            : 120 * 60 * 1000,    // Overall duration of Session : 120 minutes
//     activeDuration      : 15 * 60 * 1000
// }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}))

//Allow Access Control
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.get('/', function (req, res) {
  res.sendFile('/index.html')
})

router.post('/normalcheck', checkAnswer.normalCheck);
router.post('/easycheck', checkAnswer.easyCheck);
router.get('/start', startAGame.start);

app.use('/', router)

app.listen(3001, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on 3001`);
});