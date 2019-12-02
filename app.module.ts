import { TransferComponent } from './transfer/transfer.component';
import { EditComponent } from './edit/edit.component';
import { MentorComponent } from './mentor/mentor.component';
import { PhysioComponent } from './physio/physio.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { ResponsibilitiesComponent } from './responsibilities/responsibilities.component';
import { AddPlayerComponent } from './addplayer/addplayer.component';
import { PlayerStatsComponent } from './player-stats/player-stats.component';
import { TeamInfoComponent } from './team-info/team-info.component';
import { TeamComponent } from './team/team.component';
import { HeaderComponent } from './header/header.component';
import {  LoginComponent } from './auth/login-page/login-page.component';
import { SignupComponent } from './auth/signup-page/signup-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule, MatToolbarModule,MatListModule,MatButtonModule, MatInputModule, MatExpansionModule,MatTableModule, MatFormFieldModule, MatFormFieldControl} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TeamHeaderComponent } from './team-header/team-header.component';
import { CoachComponent } from './coach/coach.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    TeamComponent,
    TeamHeaderComponent,
    TeamInfoComponent,
    PlayerStatsComponent,
    AddPlayerComponent,
    ResponsibilitiesComponent,
    CoachComponent,
    SponsorsComponent,
    PhysioComponent,
    MentorComponent,
    EditComponent,
    TransferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [TeamComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
