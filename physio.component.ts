import { AuthService } from './../auth/auth.service';
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';
@Component({
    selector:'app-physio',
    templateUrl:'./physio.component.html',
    styleUrls:['./physio.component.css']
})
export class PhysioComponent implements OnInit{
    physio:Object;
    constructor(public authService:AuthService){}
    ngOnInit(): void {
           
        this.authService.displayphysio().subscribe((r:Object)=>{
            this.physio=r;
            console.log(this.physio);
        });
    }



}
