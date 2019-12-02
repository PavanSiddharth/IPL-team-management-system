import { TeamComponent } from './../team/team.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn:"root"
})

@Component({
    selector:'app-home-page',
    templateUrl:'./home-page.component.html',
    styleUrls:['./home-page.component.css']
})
export class HomePageComponent implements OnInit{
    teams: Object;
    constructor(public authService:AuthService,public teamComponent:TeamComponent){}
    ngOnInit(){
        //this.teams=this.authService.displayteams();
        //this.teams=this.teams.concat(this.authService.getteams());
        //console.log(this.teams);
        //console.log(this.authService.displayteams());
        
        this.authService.displayteams().subscribe((r:Object)=>{
            this.teams=r;
            console.log(this.teams);
        });
        
    }
    onclick(teamname:string){
                console.log(teamname);
        this.authService.getTeamname(teamname);
        
         
    }
}  
