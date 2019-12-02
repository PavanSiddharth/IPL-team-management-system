import {Component, OnInit, OnDestroy} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
@Component({
    selector:'app-signup-page',
    templateUrl:'./signup-page.component.html',
    styleUrls:['./signup-page.component.css']
})
export class SignupComponent{
    constructor(public authService:AuthService){}
    onSignup(form:NgForm)
{
    if(form.invalid){
        return;
    }
    this.authService.createUser(form.value.email,form.value.password);    
}


}