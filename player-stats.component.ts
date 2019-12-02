import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
@Component({
    selector:'app-player-stats',
    templateUrl:'./player-stats.component.html',
    styleUrls:['./player-stats.component.css']
})
export class PlayerStatsComponent implements OnInit{
    playerstats:Object;
    constructor(public authService:AuthService){}
    ngOnInit(): void {
        this.authService.displayplayerstats().subscribe((r:Object)=>{
            this.playerstats=r;
            console.log(this.playerstats);

        
       });
    }
}