// inclusione di app da web.js
module.exports=function(app)
{

// logica di gestione delle richieste	
app.get('/',function(req,res){
res.render('index.html')
});
app.get('/about',function(req,res){
res.render('about.html');
});
}