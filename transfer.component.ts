import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
    selector:'app-transfer',
    templateUrl:'./transfer.component.html',
    styleUrls:['./transfer.component.css']
})
export class TransferComponent {
    constructor(public authService:AuthService){}
    onSubmit1(form:NgForm)
{
    if(form.invalid){
        return;
    }
    this.authService.transfer(form.value.to_team,form.value.player,form.value.amount,form.value.nationality,form.value.playerid);    
}
}