import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() playerInput: any;
  player:any={};
  id:any;
  constructor(private activateRoute: ActivatedRoute, private playerService:PlayerService) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get("x");
    this.playerService.getPlayerById(this.id).subscribe(
      (data)=>{
        this.player = data.player;
      }
    );
  }

}
