import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  players:any = [];
  id:any;
  player:any={};
  playerForm:FormGroup;
  constructor(private playerService:PlayerService , private activateRoute:ActivatedRoute , private router:Router ) { }

  ngOnInit() {
    this.id= this.activateRoute.snapshot.paramMap.get("x");
this.playerService.getPlayerById(this.id).subscribe(
  (data)=> {
    this.player=data.player;
  })
  }

  editPlayer(){
    this.playerService.editPlayer(this.player).subscribe(
      (data)=>{
        console.log("Here data after edit",data);
      }
    )
this.router.navigate(["admin"]);
  }
}
