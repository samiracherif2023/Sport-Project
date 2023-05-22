import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
players:any= [];
  constructor( private playerService:PlayerService, private router:Router) { }

  ngOnInit() {
    this.playerService.getAllPlayers().subscribe(
      (data)=>{
        this.players=data.playersArray;
      }
    );
    
  }
  goToDisplay(id: any) {

    this.router.navigate([`displayPlayer/${id}`]);

  }

  goToEdit(id: any) {

    this.router.navigate([`editPlayer/${id}`]);

  }
  deletePlayer(id){
    
    this.playerService.deletePlayer(id).subscribe(
      (data) => {
        console.log("Here response from BE", data.isDeleted);
        this.playerService.getAllPlayers().subscribe(
          (data) => {
            this.players = data.playersArray;
          }
        );
      })

  }

}
