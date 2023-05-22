import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';


@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
  teams: any = [];
  stadiums: any = [];
  
  constructor(private router: Router , private teamService:TeamService) { }

  ngOnInit() {

    this.teamService.getAllTeams().subscribe(
      (data) => {
        this.teams = data.teamsArray;
      }
    )
  }
searchStadium(x){
  
//     for (let i = 0; i < this.stadiums.length; i++) {
//       if (this.stadiums[i].id== id) {
//         this.findedStadium = this.stadiums[i];
//         break;
        
//       }
      
//     }

// return this.findedStadium;

return this.stadiums.find((elt) => {return elt.id == x});



}




  goToEdit(id: any) {

    this.router.navigate([`editTeam/${id}`]);

  }
  goToDisplay(id: any) {

    this.router.navigate([`displayTeam/${id}`]);

  }


  deleteTeam(id) {

    this.teamService.deleteTeam(id).subscribe(
      (data) => {
        console.log("Here response from BE", data.isDeleted);
        this.teamService.getAllTeams().subscribe(
          (data) => {
            this.teams = data.teamsArray;
          }
        );
      })

  }
}
