import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
obj:any={}
searchForm:FormGroup
iconURL:string=""
  constructor(private weatherService:WeatherService) { }

  ngOnInit() {

  }
  search(){
    
    this.weatherService.search(this.obj).subscribe((data)=>{
      console.log("here data from be",data)
      this.obj=data.result;
      
     
    })
  }

}
