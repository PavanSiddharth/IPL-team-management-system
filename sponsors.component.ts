import { AuthService } from '../auth/auth.service';
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';
@Component({
    selector:'app-sponsors',
    templateUrl:'./sponsors.component.html',
    styleUrls:['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit{
    sponsors:Object;
    constructor(public authService:AuthService){}
    ngOnInit(): void {
           
        this.authService.displaysponsors().subscribe((r:Object)=>{
            this.sponsors=r;
            console.log(this.sponsors);
        });
    }
}