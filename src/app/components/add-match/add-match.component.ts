import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { generatedId } from 'src/app/shared/generatId';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  //match : object
match:any={};
//matchForm : Form Id
matchForm:FormGroup;


  constructor(private matchService:MatchService , private router:Router) { }

  ngOnInit() {
  }
  addMatch(){
    this.matchService.addMatch(this.match).subscribe(
      (data)=> {
        console.log("Here data from BE",data.message);
        this.router.navigate(["admin"]);
      }
    );

    
  }

  }

  
