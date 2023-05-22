import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  errorMsg:string;
  match:any={};
  findedMatches:any;
  
  constructor(private matchService:MatchService) { }

  ngOnInit() {

  }

  searchMatches(){
    this.findedMatches=[];
    this.matchService.searchMatch(this.match.scoreOne,this.match.scoreTwo).subscribe(
    // this.matchService.searchMatch(this.match).subscribe(
      (data)=>{
        this.findedMatches=data.match;
      }
    )
    
    
  
console.log("Here finded matches",this.findedMatches);
  
  }

}
