import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
    selector:'app-addplayer',
    templateUrl:'./addplayer.component.html',
    styleUrls:['./addplayer.component.css']
})
export class AddPlayerComponent {
    constructor(public authService:AuthService){}
    onSubmit1(form:NgForm)
{
    if(form.invalid){
        return;
    }
    alert("Player Added");
    this.authService.addplayerdetails(form.value.jno,form.value.name,form.value.age,form.value.role,form.value.worth,form.value.nationality,form.value.matches,form.value.runs,form.value.bataverage,form.value.highscore,form.value.wickets,form.value.bowlaverage,form.value.bestfigures);    
}
}