import { AuthService } from '../auth/auth.service';
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';
@Component({
    selector:'app-mentor',
    templateUrl:'./mentor.component.html',
    styleUrls:['./mentor.component.css']
})
export class MentorComponent implements OnInit{
    mentor:Object;
    constructor(public authService:AuthService){}
    ngOnInit(): void {
           
        this.authService.displaymentor().subscribe((r:Object)=>{
            this.mentor=r;
            console.log(this.mentor);
        });
    }



}
