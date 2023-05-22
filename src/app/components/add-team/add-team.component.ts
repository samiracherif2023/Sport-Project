import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { Router } from '@angular/router';
import { generatedId } from 'src/app/shared/generatId';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  team:any={};
  
  constructor(private teamService:TeamService , private router:Router) { }

  ngOnInit() {
   
  }

  addTeam(){
    this.teamService.addTeam(this.team).subscribe(
      (data)=> {
        console.log("Here data from BE",data.message);
        this.router.navigate(["admin"]);
      }
    );
  }

}
