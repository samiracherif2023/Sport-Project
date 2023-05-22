import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  teams: any = [];
  id: any;
  team: any;
  teamForm: FormGroup;
  constructor(private activateRoute: ActivatedRoute, private router: Router, private teamService:TeamService) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get("x");
    this.teamService.getTeamById(this.id).subscribe(
      (data)=> {
        this.team=data.team;
      }
    )
  }
  editTeam() {
    this.teamService.editTeam(this.team).subscribe(
      (data)=>{
        console.log("Here data after edit",data);
      }
    );
    this.router.navigate(["admin"]);

  }



}
