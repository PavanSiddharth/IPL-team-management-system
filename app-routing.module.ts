import { TransferComponent } from './transfer/transfer.component';
import { PhysioComponent } from './physio/physio.component';
import { AddPlayerComponent } from './addplayer/addplayer.component';
import { PlayerStatsComponent } from './player-stats/player-stats.component';
import { TeamInfoComponent } from './team-info/team-info.component';
import { TeamComponent } from './team/team.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './auth/login-page/login-page.component';
import { SignupComponent } from './auth/signup-page/signup-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamHeaderComponent } from './team-header/team-header.component';
import { ResponsibilitiesComponent } from './responsibilities/responsibilities.component';
import { CoachComponent } from './coach/coach.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { MentorComponent } from './mentor/mentor.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  {path:'register' , component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'homepage',component:HomePageComponent},
  {path:'team',component:TeamComponent},
  {path:'teamheader',component:TeamHeaderComponent},
  {path:'teaminfo',component:TeamInfoComponent},
  {path:'playerstats',component:PlayerStatsComponent},
  {path:'addplayer',component:AddPlayerComponent},
  {path:'responsibilities',component:ResponsibilitiesComponent},
  {path:'coach',component:CoachComponent},
  {path:'sponsors',component:SponsorsComponent},
  {path:'physio',component:PhysioComponent},
  {path:'mentor',component:MentorComponent},
  {path:'edit',component:EditComponent},
  {path:'transfer',component:TransferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
