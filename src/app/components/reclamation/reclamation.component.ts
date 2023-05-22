import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {
reclamation:any={};
reclamationForm:FormGroup;
userReclamations:any=[];
id:any;

  constructor(private formBuilder: FormBuilder, private reclamationService:ReclamationService , private router:Router) { }

  ngOnInit() {
    this.id=localStorage.getItem("userId");
    this.reclamationService.getAllUserReclamations(this.id).subscribe(
      (data)=>{
        this.userReclamations=data.reclamations;
      }
    )
    this.reclamationForm = this.formBuilder.group({

      subject: ["", [Validators.required]],
      description: ["", [Validators.required]],

    })
  }
  
  send(){
    
    this.reclamationForm.value.userId=this.id;
    this.reclamationService.addReclamation(this.reclamationForm.value).subscribe(
      (data)=>{
        console.log("Here data response", data.isAdded);
        
      }
      
    );
   
}
}
