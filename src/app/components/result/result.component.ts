import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  // commentForm:FormGroup;
  comment:any={}; 
  matchesTab:any=[]; 
  @Output() matchEmitter:EventEmitter<any>= new EventEmitter();
  @Input() resultInput: any;
  constructor( private matchService:MatchService) { }

  ngOnInit() {
  }

  addComment(){
    let userId=localStorage.getItem("userId");
    let matchId= this.resultInput._id;
    this.comment.userId=userId;
    this.comment.matchId=matchId;
    
    this.matchService.addComment(this.comment).subscribe(
      (data)=>{
        console.log("Here data response", data.message);
        this.matchService.getAllMatchesWithComments().subscribe(
          (data)=> {
            console.log("here data", data.matches);
            this.matchEmitter.emit(data.matches);
          }
        )
      }
      
    );

  }


  scoreColor(s1, s2) {
    if (s1 > s2) {
      return "green";
    }
    else if (s1 < s2) {
      return "red";
    }
    else {
      return "blue";
    }
  }

}
