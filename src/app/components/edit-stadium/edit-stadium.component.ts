import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StadiumService } from 'src/app/services/stadium.service';

@Component({
  selector: 'app-edit-stadium',
  templateUrl: './edit-stadium.component.html',
  styleUrls: ['./edit-stadium.component.css']
})
export class EditStadiumComponent implements OnInit {
  
  id:any;
  stadium:any={};
  stadiumForm:FormGroup;
  constructor(private activateRoute: ActivatedRoute , private router:Router, private stadiumService:StadiumService) { }

  ngOnInit() {
    this.id= this.activateRoute.snapshot.paramMap.get("x");
this.stadiumService.getStadiumById(this.id).subscribe(
  (data)=> {
    this.stadium=data.stadium;
  }

)
  }

  editStadium(){
    this.stadiumService.editStadium(this.stadium).subscribe(
      (data)=>{
        console.log("Here data after edit",data);
      }
    )
this.router.navigate(["admin"]);
  }

}
