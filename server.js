const debug = require("debug")("node-angular");
const express =require('express');
var login=require("./src/app/routes/loginroutes")
const app=express();
const http = require("http");
// test route
var bodyParser=require("body-parser");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(function(req,res,next){
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept,Authorization");
  res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,PUT,DELETE,OPTIONS");
  next();
});
app.get('/', function(req, res) {
    //if(error){
        //console.log(error);
    //}
    
    res.json({ message: 'welcome to our upload module apis' });
});
app.post('/register',login.register);
app.post('/login',login.login);

app.post('/homepage',login.team);
app.post('/team',login.players);
app.post('/playerstats',login.playerstats);
app.post('/teaminfo',login.teaminfo);
app.post('/addplayer',login.addplayer);
app.delete('/team',login.deleteplayer);
app.post('/responsibilities',login.responsibilities);
app.post('/coach',login.coach);
app.post('/sponsors',login.sponsors);
app.post('/physio',login.physio);
app.post('/mentor',login.mentor);
app.post('/edit',login.edit);
app.post('/transfer',login.transfer);

const normalizePort = val => 
{
var port = parseInt(val, 10);
 if (isNaN(port)) {  
 // named pipe   
return val;
  } 
if (port >= 0) {    
// port number    
return port;  
} 
 return false;
};
const onError = error => {
  if (error.syscall !== "listen") 
{
throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
 switch (error.code) { 
 case "EACCES":
console.error(bind + " requires elevated privileges");
process.exit(1);
 break;
 case "EADDRINUSE":
console.error(bind + " is already in use");
process.exit(1);
break;
default:
throw error;
  }
};
const onListening = () => {
const addr = server.address();
const bind = typeof port === "string" ? "pipe " + port : "port " + port;
debug("Listening on " + bind);
};
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);
const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);
server.listen(port,function(){
    console.log("Node server is running")
});

/*var express    = require("express");
var login = require('../dbms-project/routes/loginroutes');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,PUT,DELETE,OPTIONS");
    next();
});
const router = express.Router();
// test route
router.get('/', function(req, res) {
    if(error){
        console.log(error);
    }
    
    res.json({ message: 'welcome to our upload module apis' });
});
//route to handle user registration
router.post('/register',login.register);
router.post('/login',login.login)
module.exports=router;
app.use('/api', router);

app.listen(3000);*/
