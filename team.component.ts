import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
@Component({
    selector:'app-team',
    templateUrl:'./team.component.html',
    styleUrls:['./team.component.css']
})
export class TeamComponent implements OnInit{
    players:Object;
    constructor(public authService:AuthService){}
    ngOnInit(): void {
        this.authService.displayplayers().subscribe((r:Object)=>{
            this.players=r;
            console.log(this.players);

        
       });
    }
    onDelete(jerseyno:number)
    {
        console.log(jerseyno);
        alert("Player Deleted");
        this.authService.deleteplayer(jerseyno).subscribe((r:Object)=>{
            console.log(r);
        });
    }
    onView(jerseyno:number)
    {
        console.log(jerseyno);
        this.authService.getjerseyno(jerseyno);
    }
    onEdit(jerseyno:number)
    {
        console.log(jerseyno);
        this.authService.getjerseyno(jerseyno);
        
    }
    

    
}