import { AuthService } from './../auth/auth.service';
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';
@Component({
    selector:'app-team-info',
    templateUrl:'./team-info.component.html',
    styleUrls:['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit{
    teaminfo:Object;
    constructor(public authService:AuthService){}
    ngOnInit(): void {
           
        this.authService.displayteaminfo().subscribe((r:Object)=>{
            this.teaminfo=r;
            console.log(this.teaminfo);
        });
    }



}
