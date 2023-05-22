import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContenuComponent } from './components/contenu/contenu.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { ResultComponent } from './components/result/result.component';
import { NewsComponent } from './components/news/news.component';
import { StatsComponent } from './components/stats/stats.component';
import { BlogComponent } from './components/blog/blog.component';
import { InfoComponent } from './components/info/info.component';
import { ArticleComponent } from './components/article/article.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerComponent } from './components/player/player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { DisplayTeamComponent } from './components/display-team/display-team.component';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { AsterixPipe } from './pipes/asterix.pipe';
import { SearchComponent } from './components/search/search.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { StadiumsTableComponent } from './components/stadiums-table/stadiums-table.component';
import { AddStoreComponent } from './components/add-store/add-store.component';
import { StoresTableComponent } from './components/stores-table/stores-table.component';
import { EditStoreComponent } from './components/edit-store/edit-store.component';
import { EditStadiumComponent } from './components/edit-stadium/edit-stadium.component';
import { SearchTeamComponent } from './components/search-team/search-team.component';
import { HttpClientModule } from '@angular/common/http';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { DisplayProfilComponent } from './components/display-profil/display-profil.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ReclamationComponent } from './components/reclamation/reclamation.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContenuComponent,
    SignupComponent,
    HomeComponent,
    BannerComponent,
    ResultComponent,
    NewsComponent,
    StatsComponent,
    BlogComponent,
    InfoComponent,
    ArticleComponent,
    AddMatchComponent,
    AddTeamComponent,
    AdminComponent,
    AddPlayerComponent,
    MatchesTableComponent,
    TeamsTableComponent,
    PlayersTableComponent,
    MatchesComponent,
    PlayersComponent,
    PlayerComponent,
    MatchInfoComponent,
    EditMatchComponent,
    EditTeamComponent,
    DisplayTeamComponent,
    SignupAdminComponent,
    UsersTableComponent,
    ReversePipe,
    AsterixPipe,
    SearchComponent,
    AddStadiumComponent,
    StadiumsTableComponent,
    AddStoreComponent,
    StoresTableComponent,
    EditStoreComponent,
    EditStadiumComponent,
    SearchTeamComponent,
    EditPlayerComponent,
    DisplayProfilComponent,
    WeatherComponent,
    ReclamationComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
