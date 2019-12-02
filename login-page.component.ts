import {Component, OnInit, OnDestroy} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
    selector:'app-login-page',
    templateUrl:'./login-page.component.html',
    styleUrls:['./login-page.component.css']
})
export class LoginComponent{
    
    constructor(public authService:AuthService){}
    onLogin(form:NgForm)
{
    if(form.invalid){
        return;
    }
    this.authService.login(form.value.email,form.value.password);    
}
}
