let express = require('express')
let app = express()
let router = express.Router()

router.use('/', function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
  })

router.post('/', function (req, res,next) {
    res.send('Post method');
});
router.get('/', function (req, res,next) {
    res.send('Get method');
})
app.listen(4200,()=>console.log('Listening on server port 4200'));

app.use('/', router);