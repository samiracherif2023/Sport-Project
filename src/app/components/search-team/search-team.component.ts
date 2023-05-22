import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-team',
  templateUrl: './search-team.component.html',
  styleUrls: ['./search-team.component.css']
})
export class SearchTeamComponent implements OnInit {
  searchTeamForm: FormGroup;
  errorMsg: string;
  team: any = {};
  stadium: any = {};
  findedTeam: any = {};
  findedStadium: any = {};
  teams: any = [];
  stadiums: any = [];
  players: any = [];
  findedPlayers: any = [];
  constructor() { }

  ngOnInit() {
    this.teams = JSON.parse(localStorage.getItem("teams") || "[]");
    this.stadiums = JSON.parse(localStorage.getItem("stadiums") || "[]");
    this.players = JSON.parse(localStorage.getItem("players") || "[]");

  }
  searchTeam() {
    this.findedTeam = {};

    for (let i = 0; i < this.teams.length; i++) {
      if ((this.teams[i].name).toLowerCase() == (this.team.name).toLowerCase()) {

        this.findedTeam = this.teams[i];
        break;
      }
    }
  }


  searchTeamStadium(sId) {
    return this.stadiums.find((obj) => { return obj.id == sId });

  }

  searchTeamPlayers(tId) {
    this.findedPlayers = [];

    // for (let i = 0; i < this.players.length; i++) {
    //   if (this.players[i].teamId == tId) {
    //     this.findedPlayers.push(this.players[i]);
    //   }

    // }
   this.findedPlayers=this.players.filter((obj) => {return obj.teamId == tId});
   return this.findedPlayers;
  }

}
