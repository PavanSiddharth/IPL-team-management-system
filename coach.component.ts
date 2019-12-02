import { AuthService } from './../auth/auth.service';
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';
@Component({
    selector:'app-coach',
    templateUrl:'./coach.component.html',
    styleUrls:['./coach.component.css']
})
export class CoachComponent implements OnInit{
    coach:Object;
    constructor(public authService:AuthService){}
    ngOnInit(): void {
           
        this.authService.displaycoaches().subscribe((r:Object)=>{
            this.coach=r;
            console.log(this.coach);
        });
    }
}