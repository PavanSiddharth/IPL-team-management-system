import { TransferData } from './../transfer.model';
import { AddPlayer1 } from './addplayer1.model';
import { PlayerDetails } from './player-details.model';
import { PlayerDeleteData } from './player-delete-data.model';
import { PlayerData } from './player_data.model';


import { Subject, Observable } from 'rxjs';
import { AuthData } from './auth-data.model';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
//var login = require('./../routes/loginroutes.js');
import {Express, response} from 'express'; 
var app:Express;
@Injectable({
    providedIn:"root"
})
export class AuthService{
    private isAuthenticated=false;
    private teamname:string;
    private jerseynumber:number;
    private authStatusListener=new Subject<boolean>();
    
    constructor(private http:HttpClient,private router:Router){}
    getIsAuth(){
        return this.isAuthenticated;
    }
    getAuthStatusListener(){
        return this.authStatusListener.asObservable();
    }

createUser(email:string,password:string){
    const authData:AuthData={email:email,password:password};
     this.http.post("http://localhost:3000/register",authData)
     .subscribe(response=>{
         console.log(response);
         this.router.navigate['/'];
     },()=>{
         this.authStatusListener.next(false);
     });
    
}

login(email:string,password:string){
    const authData:AuthData={email:email,password:password};
    this.http.post("http://localhost:3000/login",authData)
    .subscribe(response=>{
            if(1)//response.success=="login successful")
            {
                this.isAuthenticated=true;
                this.authStatusListener.next(true);
             console.log(response);
            this.router.navigate(['/homepage']);
            }
            else
            {
                console.log("login failed")
            }
        },error=>{
        this.authStatusListener.next(false);
    });
}
logout(){
    
    this.isAuthenticated=false;
    this.authStatusListener.next(false);
    
    this.router.navigate(['/']);
    
}


displayteams(){
    var subject = new Subject<any>();
    var teams:Object;
    const authData:AuthData={email:"pp@o.com",password:"#1234"};
    this.http.post("http://localhost:3000/homepage",authData)
    .subscribe((response)=>{
        console.log(response);
        teams=response;
        console.log(teams);
        subject.next(teams);
        
},error=>{
    console.log(error);
});
return subject.asObservable();
}

displayplayers(){
    
    var subject = new Subject<any>();
    var players:Object;
    const team_name:PlayerData={teamname:this.teamname};
    this.http.post("http://localhost:3000/team",team_name)
    .subscribe((response)=>{
        players=response;
        console.log(players);
        subject.next(players);
    },error=>{
        console.log(error);
    });
    return subject.asObservable();
}

displayteaminfo(){
    var subject = new Subject<any>();
    var teaminfo:Object;
    const team_name:PlayerData={teamname:this.teamname};
    this.http.post("http://localhost:3000/teaminfo",team_name)
    .subscribe((response)=>{
        teaminfo=response;
        console.log(teaminfo);
        subject.next(teaminfo);
    },error=>{
        console.log(error);
    });
    return subject.asObservable();
}

getTeamname(teamname1:string){
     this.teamname=teamname1;
}

deleteplayer(jno:number){
    var subject = new Subject<any>();
    var response1:Object;
    console.log(jno);
    console.log(this.teamname);
    var teamname2:string=this.teamname;
    const queryParams=`?jno=${jno}&teamname=${teamname2}`;
    this.http.delete("http://localhost:3000/team"+queryParams).subscribe((response)=>{
        
        response1=response;
        console.log(response1);
        subject.next(response1);
    },error=>{
        console.log(error);
    });
    return subject.asObservable();
}
displayplayerstats(){
    var subject = new Subject<any>();
    var playerinfo:Object;
    const playerdetails:PlayerDetails={teamname:this.teamname,jno:this.jerseynumber};
    console.log(this.jerseynumber);
    this.http.post("http://localhost:3000/playerstats",playerdetails)
    .subscribe((response)=>{
        playerinfo=response;
        console.log(playerinfo);
        subject.next(playerinfo);
    },error=>{
        console.log(error);
    });
    return subject.asObservable();
}

displayresponsibilities(){
    var subject = new Subject<any>();
    var responsibilities:Object;
    const teamname:PlayerData={teamname:this.teamname};
    this.http.post("http://localhost:3000/responsibilities",teamname)
    .subscribe((response)=>{
        responsibilities=response;
        console.log(responsibilities);
        subject.next(responsibilities);
    },error=>{
        console.log(error);
    });
    return subject.asObservable();
}

displaycoaches(){
    var subject = new Subject<any>();
    var coach:Object;
    const teamname:PlayerData={teamname:this.teamname};
    this.http.post("http://localhost:3000/coach",teamname)
    .subscribe((response)=>{
        coach=response;
        console.log(coach);
        subject.next(coach);
    },error=>{
        console.log(error);
    });
    return subject.asObservable();
}

displaysponsors(){
    var subject = new Subject<any>();
    var sponsors:Object;
    const teamname:PlayerData={teamname:this.teamname};
    this.http.post("http://localhost:3000/sponsors",teamname)
    .subscribe((response)=>{
        sponsors=response;
        console.log(sponsors);
        subject.next(sponsors);
    },error=>{
        console.log(error);
    });
    return subject.asObservable();
}

displayphysio(){
    var subject = new Subject<any>();
    var physio:Object;
    const teamname:PlayerData={teamname:this.teamname};
    this.http.post("http://localhost:3000/physio",teamname)
    .subscribe((response)=>{
        physio=response;
        console.log(physio);
        subject.next(physio);
    },error=>{
        console.log(error);
    });
    return subject.asObservable(); 
}

displaymentor(){
    var subject = new Subject<any>();
    var mentor:Object;
    const teamname:PlayerData={teamname:this.teamname};
    this.http.post("http://localhost:3000/mentor",teamname)
    .subscribe((response)=>{
        mentor=response;
        console.log(mentor);
        subject.next(mentor);
    },error=>{
        console.log(error);
    });
    return subject.asObservable(); 
}
          
    

getjerseyno(jno:number){
    
       this.jerseynumber=jno;
       console.log(this.jerseynumber);

}
addplayerdetails(jno:number,name:string,age:number,role:string,worth:number,nationality:string,matches:number,runs:number,bataverage:number,highscore:number,wickets:number,bowlaverage:number,bestfigures:string){
       const add_player:AddPlayer1={jno:jno,name:name,age:age,role:role,worth:worth,nationality:nationality,matches:matches,runs:runs,bataverage:bataverage,highscore:highscore,wickets:wickets,bowlaverage:bowlaverage,bestfigures:bestfigures,teamname:this.teamname};
       this.http.post("http://localhost:3000/addplayer",add_player)
       .subscribe((response)=>{
           console.log(response);
       })
    }

    transfer(to_team:string,player:string,amount:number,nationality:string,playerid:number){
        const transferplayer:TransferData={from_team:this.teamname,to_team:to_team,player:player,amount:amount,nationality:nationality,playerid:playerid};
        this.http.post("http://localhost:3000/transfer",transferplayer)
        .subscribe((response)=>{
            console.log(response);
        })
    }

    
displayplayer(){
    var subject = new Subject<any>();
    var playerinfo:Object;
    const playerdetails:PlayerDetails={teamname:this.teamname,jno:this.jerseynumber};
    console.log(this.jerseynumber);
    this.http.post("http://localhost:3000/edit",playerdetails)
    .subscribe((response)=>{
        playerinfo=response;
        console.log(playerinfo);
        subject.next(playerinfo);
    },error=>{
        console.log(error);
    });
    return subject.asObservable();
}
}

