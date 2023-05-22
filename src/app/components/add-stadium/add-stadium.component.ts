import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {
  stadium:any={};
  teams:any=[];
 
  constructor(private router:Router, private stadiumService:StadiumService) { }

  ngOnInit() {
    // this.teams= JSON.parse(localStorage.getItem("teams") || "[]");

  }

  addStadium(){
    this.stadiumService.addStadium(this.stadium).subscribe(
      (data)=> {
        console.log("Here data from BE",data.message);
        this.router.navigate(["admin"]);
      }
    );
  }

}

