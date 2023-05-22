import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { generatedId } from 'src/app/shared/generatId';

@Component({
  selector: 'app-signup-admin',
  templateUrl: './signup-admin.component.html',
  styleUrls: ['./signup-admin.component.css']
})
export class SignupAdminComponent implements OnInit {
  //form ID
  signupAdminForm: FormGroup;
 errorMsg:any;
  constructor(private formBuilder: FormBuilder, private userService:UserService) {

  }

  ngOnInit() {
    this.signupAdminForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      role:["admin"]
    })
  }

  signupAdmin() {

    
      this.signupAdminForm.value.role="admin";
      this.userService.signup(this.signupAdminForm.value,null).subscribe(
        (data)=> {
          console.log("Here data after signup",data.message);
          this.errorMsg=data.message;
        }
      );
    
    }
  }

