import { AuthService } from './../auth/auth.service';
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';
@Component({
    selector:'app-responsibilities',
    templateUrl:'./responsibilities.component.html',
    styleUrls:['./responsibilities.component.css']
})
export class ResponsibilitiesComponent implements OnInit{
    responsibilities:Object;
    constructor(public authService:AuthService){}
    ngOnInit(): void {
           
        this.authService.displayresponsibilities().subscribe((r:Object)=>{
            this.responsibilities=r;
            console.log(this.responsibilities);
        });
    }
}
