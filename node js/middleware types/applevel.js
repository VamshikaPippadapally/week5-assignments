let express=require('express');
let app=express();
let logger=(req,res,next)=>{
      console.log('execution started');
      next();

}
app.get('/',logger,(req,res,next)=>{
      res.send('hello world');
});
app.listen(4200);