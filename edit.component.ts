import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SelectionModel } from '@angular/cdk/collections';
@Component({
    selector:'app-edit',
    templateUrl:'./edit.component.html',
    styleUrls:['./edit.component.css']
})
export class EditComponent implements OnInit{
    playerstats:Object;
    response1:Object;
    constructor(public authService:AuthService){}
    ngOnInit(): void {
        this.authService.displayplayer().subscribe((r:Object)=>{
            this.playerstats=r;
            console.log(this.playerstats);

        
       });
    }
    onSubmit1(form:NgForm)
{
    if(form.invalid){
        return;
    }
    console.log(form.value.jno);
    console.log(form.value.name);
    
        this.authService.deleteplayer(form.value.jno).subscribe((r:Object)=>{
            this.response1=r;
            console.log(this.response1);

 })

    
        
    this.authService.addplayerdetails(form.value.jno,form.value.name,form.value.age,form.value.role,form.value.worth,form.value.nationality,form.value.matches,form.value.runs,form.value.bataverage,form.value.highscore,form.value.wickets,form.value.bowlaverage,form.value.bestfigures);
   
    
             
}
}