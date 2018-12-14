let express = require('express');
let app = express();

app.get('/', function(req, res, next) {
  res.send("Hello world");
});

app.use(express.static('public'));

app.listen(4200,()=>console.log("listening on 4200"));