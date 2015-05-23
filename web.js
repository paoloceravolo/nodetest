var express=require('express');
var app=express();

var port =  process.env.OPENSHIFT_NODEJS_PORT || 8080;   // Port 8080 if you run locally
var address =  process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1"; // Listening to localhost if you run locally

app.get('/',function(req,res){
res.render('index.html')
});
app.get('/about',function(req,res){
res.render('about.html');
});
var server=app.listen(port, address);