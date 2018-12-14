let express = require('express')
let app = express()
let cookieParser = require('cookie-parser')

app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send(req.cookies);
});

app.listen(4200,()=>console.log("listening on 4200"));