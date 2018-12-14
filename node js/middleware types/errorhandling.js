let express=require('express');
let app=express();


app.get('/', function(req, res, next) {
  throw new Error('Aww');
});

app.use(function(error, req, res, next) {
  console.log(error.stack);
  res.status(500).send(error.message+':something went wrong');
});

app.listen(4200,()=>console.log("listening on 4200"));