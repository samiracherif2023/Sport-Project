import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContenuComponent } from './components/contenu/contenu.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { DisplayTeamComponent } from './components/display-team/display-team.component';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';
import { SearchComponent } from './components/search/search.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { AddStoreComponent } from './components/add-store/add-store.component';
import { SearchTeamComponent } from './components/search-team/search-team.component';
import { PlayerComponent } from './components/player/player.component';
import { EditStadiumComponent } from './components/edit-stadium/edit-stadium.component';
import { DisplayProfilComponent } from './components/display-profil/display-profil.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ReclamationComponent } from './components/reclamation/reclamation.component';



const routes: Routes = [
  //http://localhost:4200/ => Home component will be displayed
  { path: "", component: HomeComponent },
  //http://localhost:4200/ => Login component will be displayed
  { path: "login", component: ContenuComponent },
  //http://localhost:4200/ => Singup component will be displayed
  { path: "signup", component: SignupComponent },
  { path: "addMatch", component: AddMatchComponent },
  { path: "addTeam", component: AddTeamComponent },
  { path: "admin", component: AdminComponent },
  { path: "addPlayer", component: AddPlayerComponent },
  { path: "matches", component: MatchesComponent },
  { path: "players", component: PlayersComponent },
  { path: "matchInfo", component: MatchInfoComponent},
  // :x => param ("editMatch/4" ,"editMatch/9", .........)
  {path: "editMatch/:x", component:EditMatchComponent},
  {path: "editTeam/:x", component:EditTeamComponent},
  {path: "editPlayer/:x", component:EditPlayerComponent},
  {path: "displayTeam/:x", component:DisplayTeamComponent},
  {path: "displayPlayer/:x", component:PlayerComponent},
  {path: "signupAdmin", component:SignupAdminComponent},
  {path:"searchMatches", component:SearchComponent},
  {path:"addStadium", component:AddStadiumComponent},
  {path:"addStore",component:AddStoreComponent},
  {path:"editStore/:id",component:AddStoreComponent},
  {path:"searchTeam", component:SearchTeamComponent},
  {path:"editStadium/:x", component:EditStadiumComponent},
  {path:"displayProfil/:x" , component:DisplayProfilComponent},
  {path:"weather" , component:WeatherComponent},
  {path:"reclamation" , component:ReclamationComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
