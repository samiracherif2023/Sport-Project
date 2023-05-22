import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  player:any={};
 
  constructor( private router:Router , private playerService: PlayerService) { }

  ngOnInit() {
    
  }
  addPlayer(){
    this.playerService.addPlayer(this.player).subscribe(
      (data)=> {
        console.log("Here data from BE",data.message);
        this.router.navigate(["admin"]);
      }
    );
  }

}
