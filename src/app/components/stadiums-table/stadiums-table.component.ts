import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StadiumService } from 'src/app/services/stadium.service';


@Component({
  selector: 'app-stadiums-table',
  templateUrl: './stadiums-table.component.html',
  styleUrls: ['./stadiums-table.component.css']
})
export class StadiumsTableComponent implements OnInit {
  stadiums:any= []
  constructor(private router: Router , private stadiumService:StadiumService) { }

  ngOnInit() {
    this.stadiumService.getAllStadiums().subscribe(
      (data) => {
        this.stadiums = data.stadiumsArray;
      }
    )

  }
  deleteStadium(id){
    
    this.stadiumService.deleteStadium(id).subscribe(
      (data) => {
        console.log("Here response from BE", data.isDeleted);
        this.stadiumService.getAllStadiums().subscribe(
          (data) => {
            this.stadiums = data.stadiumsArray;
          }
        );
      })
  }


  goToEdit(id:any){

    this.router.navigate([`editStadium/${id}`]);
    
    }
}
