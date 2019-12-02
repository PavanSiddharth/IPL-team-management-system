const express =require('express'); 
const path=require("path");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'pavan727',
  database : 'dbmsproject'
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected ");
} else {
    console.log(err);
    console.log("Error connecting database");
}
});

exports.register = function(req,res){
  console.log("req     ",req.body);
  var users={
    "email":req.body.email,
    "password":req.body.password
  }
  connection.query('INSERT INTO users2 SET ?',users, function (error, results, fields) {
  if (error) {
    console.log("error ocurred",error);
    res.send({
      code:400,
      failed:"error ocurred"
    })
  }else{
    console.log('user registered sucessfully    The solution is: ', results);

    res.send({
      "code":200,
      "success":"user registered sucessfully",
      "email":req.body.email,
    "password":req.body.password

        });
  }
  });
}
exports.login = function(req,res){
  var email= req.body.email;
  var password = req.body.password;
  connection.query('SELECT * FROM users2 WHERE email = ?',[email], function (error, results, fields) {
  if (error) {
    res.send({
      "code":400,
      "failed":"error ocurred"
    })
  }else{
    
    if(results.length >0){
      if(results[0].password == password){
        console.log('login successful       The solution is: ', results);
        res.send({
          "code":200,
          "success":"login successful",
          "email":req.body.email,
    "password":req.body.password
            });
      }
      else{
        res.send({
          code:204,
          success:"Email and password does not match"
            });
      }
    }
    else{
      res.send({
        code:204,
        success:"Email does not exist"
          });
    }
  }
  });
}
exports.team=function(req,res){connection.query('SELECT name FROM team', function (error, results, fields) {
  if (error) {
    console.log(error);
    }
  else{
    res.send({
      "code":200,
      "teams":results
    });
  }})}

  exports.players=function(req,res){
    var teamname=req.body.teamname;
    console.log(teamname);
    connection.query('SELECT p.jno,p.name,p.age,p.role,p.worth,p.nationality FROM players p,team t WHERE t.name=? and p.tid=t.id',[teamname], function (error, results, fields) {
      if (error) {
        res.send({
          "code":400,
          "failed":"error ocurred"
        })
      }else{
        console.log(results);
        res.send({
          "code":200,
          "teams":results
  });
}})}

exports.playerstats=function(req,res){
  var teamname=req.body.teamname;
  var jno=req.body.jno;
  console.log(jno);
  connection.query('SELECT * from playerstats WHERE jerseyno=?',[jno], function (error, results, fields) {
    if (error) {
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    }else{
      console.log(results);
      res.send({
        "code":200,
        "playerstats":results
});
}})}

exports.edit=function(req,res){
  var teamname=req.body.teamname;
  var jno=req.body.jno;
  console.log(jno);
  connection.query('SELECT * from playerstats join players on players.jno=playerstats.jerseyno WHERE playerstats.jerseyno=?',[jno], function (error, results, fields) {
    if (error) {
     console.log(error);
    }else{
      console.log(results);
      res.send({
        "code":200,
        "playerstats":results
});
}})}


exports.teaminfo=function(req,res){
  var teamname=req.body.teamname;
  console.log(teamname);
  connection.query('SELECT * from team WHERE name=? ',[teamname], function (error, results, fields) {
    if (error) {
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    }else{
      console.log(results);
      res.send({
        "code":200,
        "teaminfo":results
});
}})}

exports.responsibilities=function(req,res){
  var teamname=req.body.teamname;
  console.log(teamname);
  connection.query('SELECT * from responsibilities WHERE teamid=(select id from team where name=?) ',[teamname], function (error, results, fields) {
    if (error) {
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    }else{
      console.log(results);
      res.send({
        "code":200,
        "responsibilities":results
});
}})}


exports.coach=function(req,res){
  var teamname=req.body.teamname;
  console.log(teamname);
  connection.query('select coach1.name,age,experience,nationality,role from coach1 join coach2 join coach3 on coach1.name=coach2.name and coach2.name=coach3.name where coach3.tid=(select id from team where name=?); ',[teamname], function (error, results, fields) {
    if (error) {
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    }else{
      console.log(results);
      res.send({
        "code":200,
        "coach":results
});
}})}


exports.sponsors=function(req,res){
  var teamname=req.body.teamname;
  console.log(teamname);
  connection.query('select owner,amount from sponsor1 join sponsor2 on sponsor1.teamid=sponsor2.teamid where sponsor2.teamid=(select id from team where name=?); ',[teamname], function (error, results, fields) {
    if (error) {
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    }else{
      console.log(results);
      res.send({
        "code":200,
        "sponsors":results
});
}})}

exports.physio=function(req,res){
  var teamname=req.body.teamname;
  console.log(teamname);
  connection.query('select physio1.name,age,experience,nationality from physio1 join physio2 on physio1.name=physio2.name where physio2.teamid=(select id from team where name=?); ',[teamname], function (error, results, fields) {
    if (error) {
      console.log(error);
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    }else{
      console.log(results);
      res.send({
        "code":200,
        "physio":results
});
}})}


exports.mentor=function(req,res){
  var teamname=req.body.teamname;
  console.log(teamname);
  connection.query('select mentor1.name,age,experience,nationality from mentor1 join mentor2 on mentor1.name=mentor2.name where mentor2.teamid=(select id from team where name=?); ',[teamname], function (error, results, fields) {
    if (error) {
      console.log(error);
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    }else{
      console.log(results);
      res.send({
        "code":200,
        "mentor":results
});
}})}


exports.transfer=function(req,res){
  var from_team=req.body.from_team;
  var to_team=req.body.to_team;
  var player=req.body.player;
  var amount=req.body.amount;
  var nationality=req.body.nationality;
  var playerid=req.body.playerid;
  console.log(from_team);
  console.log(to_team);
  console.log(player);
  console.log(amount);
  connection.query('select amount from sponsor2 join team on sponsor2.teamid=team.id where sponsor2.teamid=(select id from team where name=?) and amount>=?; ',[to_team,amount], function (error, results, fields) {
    if (error) {
      console.log(error);
    }else{
      if(results.length>0)
      {
        connection.query('select * from players WHERE   name=? and tid=(select id from team where name=?) and nationality="India"' ,[player,from_team], function (error, results, fields) {
          if (error) {
            console.log(error);
            
          }else{
      
            if(results.length>0)
        {
        connection.query('update team set squadstrength=squadstrength-1,indianplayers=indianplayers-1 where name=?',[from_team],function(error,results,fields){
          if (error) {
            console.log(error);
           
          }else{
            console.log("No. of players updated---1");
        }

      })
        
      connection.query('update team set squadstrength=squadstrength+1,indianplayers=indianplayers+1 where name=?',[to_team],function(error,results,fields){
        if (error) {
          console.log(error);
          
        }else{
          console.log("No. of players updated---2");
      }

    })
    }
      
      else
      {
        connection.query('update team set squadstrength=squadstrength-1,foreignplayers=foreignplayers-1 where name=?',[from_team],function(error,results,fields){
          if (error) {
            console.log(error);
           
          }else{
            console.log("No. of players updated---1");
        }

      })
        
      connection.query('update team set squadstrength=squadstrength+1,foreignplayers=foreignplayers+1 where name=?',[to_team],function(error,results,fields){
        if (error) {
          console.log(error);
          
        }else{
          console.log("No. of players updated---2");
      }

    })
      }


}})
connection.query('insert into players(jno,name,age,role,worth,nationality,tid) values(?,?,(select p.age from players p where p.name=?),(select p.role from players p where p.name=?),(select p.worth from players p where p.name=?),(select p.nationality from players p where p.name=?),(select id from team where name=?))' ,[playerid,player,player,player,player,player,to_team], function (error, results, fields) {
  if (error) {
    console.log(error);
    
  }else{
     console.log(results);
    res.send({
      "code":200,
      "results":results,
      "success":" Insertion Successful"
});
}})

connection.query('delete from players WHERE   name=? and tid=(select id from team where name=?)' ,[player,from_team], function (error, results, fields) {
  if (error) {
    console.log(error);
    
  }else{
     console.log(results);
    console.log("Deletion Successful");
}})

connection.query('update sponsor2 set amount=amount+? where teamid=(select id from team where name=?)' ,[amount,from_team], function (error, results, fields) {
  if (error) {
    console.log(error);
    
  }else{
     console.log(results);
    console.log("Increment Successful");

}})
connection.query('update sponsor2 set amount=amount-? where teamid=(select id from team where name=?)' ,[amount,to_team], function (error, results, fields) {
  if (error) {
    console.log(error);
    
  }else{
     console.log(results);
    console.log("Decrement Successful");
}})

connection.query('update playerstats set jerseyno=? where name=?' ,[playerid,player], function (error, results, fields) {
  if (error) {
    console.log(error);
    
  }else{
     console.log(results);
    console.log("Stats updation Successful");
}})

connection.query('insert into transfer(tid1,tid2,jerseyno,amount) values(?,?,?,?)' ,[from_team,to_team,playerid,amount], function (error, results, fields) {
  if (error) {
    console.log(error);
    
  }else{
     console.log(results);
    console.log("Transfer data insertion successful");
}})





}
}
})}



exports.addplayer=function(req,res){
  var jno=req.body.jno;
  var name=req.body.name;
  var age=req.body.age;
  var role=req.body.role;
  var worth=req.body.worth;
  var nationality=req.body.nationality;
  var matches=req.body.matches;
  var runs=req.body.runs;
  var highscore=req.body.highscore;
  var bataverage=req.body.bataverage;
  var wickets=req.body.wickets;
  var bowlaverage=req.body.bowlaverage;
  var bestfigures=req.body.bestfigures;
  var teamname=req.body.teamname;
  console.log(teamname);
  if(nationality="India")
  {
        connection.query('update team set squadstrength=squadstrength+1,indianplayers=indianplayers+1 where name=?',[teamname],function(error,results,fields){
          if (error) {
            console.log(error);
            
          }else{
            console.log("No. of players updated");
        }

      })
}
else{
  connection.query('update team set squadstrength=squadstrength+1,foreignplayers=foreignplayers+1 where name=?',[teamname],function(error,results,fields){
    if (error) {
      console.log(error);
      
    }else{
      console.log("No. of players updated");
  }

})

}

connection.query('insert into players(jno,name,age,role,worth,nationality,tid) values(?,?,?,?,?,?,(select id from team where name=?))' ,[jno,name,age,role,worth,nationality,teamname], function (error, results, fields) {
  if (error) {
    console.log(error);
    
  }else{
     console.log(results);
    console.log("First Insertion Successful");
}})

connection.query('insert into playerstats(jerseyno,name,matchesplayed,runs,bataverage,highscore,bowlaverage,bestfigures,wickets) values(?,?,?,?,?,?,?,?,?)' ,[jno,name,matches,runs,bataverage,highscore,bowlaverage,bestfigures,wickets], function (error, results, fields) {
  if (error) {
    console.log(error);
    
  }else{
     console.log(results);
    console.log("Second insertion successful");
}});
}






exports.deleteplayer=function(req,res){
  var jno=+req.query.jno;
  teamname=req.query.teamname;
  console.log(jno);
  connection.query('select * from players WHERE   jno=? and tid=(select id from team where name=?) and nationality="India"' ,[jno,teamname], function (error, results, fields) {
    if (error) {
      console.log(error);
      
    }else{

      if(results.length>0){
        connection.query('update team set squadstrength=squadstrength-1,indianplayers=indianplayers-1 where name=?',[teamname],function(error,results,fields){
          if (error) {
            console.log(error);
            
          }else{
            console.log("No. of players updated");
        }

      })
}
else{
  connection.query('update team set squadstrength=squadstrength-1,foreignplayers=foreignplayers-1 where name=?',[teamname],function(error,results,fields){
    if (error) {
      console.log(error);
      
    }else{
      console.log("No. of players updated");
  }

})

}}})
  connection.query('delete from players WHERE   jno=? and tid=(select id from team where name=?)' ,[jno,teamname], function (error, results, fields) {
    if (error) {
      console.log(error);
      
    }else{
       console.log(results);
      console.log("Deletion Successful");
}})}



/*var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'pavan727',
  database : 'dbmsproject'
});
connection.connect(function(err){
if(!err) {
    console.log("Database is connected ");
} else {
    console.log(err);
    console.log("Error connecting database");
}
});
exports.register = function(req,res){
    var users={
      "email":req.body.email,
      "password":req.body.password,
    }
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
    if (error) {
      console.log("error ocurred",error);
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    }else{
      console.log('The solution is: ', results);
      res.send({
        "code":200,
        "success":"user registered sucessfully"
          });
    }
    });
  }
  exports.login = function(req,res){
    var email= req.body.email;
    var password = req.body.password;
    connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
    if (error) {
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    }else{
      if(results.length >0){
        if(results[0].password == password){
          res.send({
            "code":200,
            "success":"login sucessfull"
              });
        }
        else{
          res.send({
            "code":204,
            "success":"Email and password does not match"
              });
        }
      }
      else{
        res.send({
          "code":204,
          "success":"Email does not exit"
            });
      }
    }
    });
  }*/
  


